import { Client, enterPassiveModeIPv4 } from "basic-ftp";
import dotenv from "dotenv";
import { existsSync, readdirSync, statSync } from "fs";
import { join, relative } from "path";

dotenv.config({ path: ".deploy.env" });

const {
  FTP_HOST,
  FTP_USER,
  FTP_PASSWORD,
  FTP_REMOTE_DIR = "/public_html",
  FTP_SECURE = "true",
} = process.env;

const LOCAL_DIR = "dist";

function requireEnv(name, value) {
  if (!value) {
    console.error(`Missing ${name} in .deploy.env`);
    console.error("Copy .deploy.env.example to .deploy.env and add your FTP details.");
    process.exit(1);
  }
}

function walkFiles(dir, files = []) {
  for (const entry of readdirSync(dir)) {
    const fullPath = join(dir, entry);
    if (statSync(fullPath).isDirectory()) {
      walkFiles(fullPath, files);
    } else {
      files.push(fullPath);
    }
  }
  return files;
}

async function uploadDirectory(client, localDir, remoteDir) {
  const files = walkFiles(localDir);
  let uploaded = 0;

  for (const localPath of files) {
    const relPath = relative(localDir, localPath).split("\\").join("/");
    const remotePath = `${remoteDir}/${relPath}`;
    const remoteFolder = remotePath.slice(0, remotePath.lastIndexOf("/"));

    if (remoteFolder) {
      await client.ensureDir(remoteFolder);
    }

    process.stdout.write(`↑ ${relPath}\n`);
    await client.uploadFrom(localPath, remotePath);
    uploaded += 1;
  }

  return uploaded;
}

requireEnv("FTP_HOST", FTP_HOST);
requireEnv("FTP_USER", FTP_USER);
requireEnv("FTP_PASSWORD", FTP_PASSWORD);

if (!existsSync(LOCAL_DIR)) {
  console.error(`Missing ${LOCAL_DIR}/ — run npm run build first.`);
  process.exit(1);
}

const client = new Client(60_000);
client.ftp.verbose = false;

try {
  console.log(`Connecting to ${FTP_HOST}…`);
  await client.access({
    host: FTP_HOST,
    user: FTP_USER,
    password: FTP_PASSWORD,
    secure: FTP_SECURE === "true",
  });
  enterPassiveModeIPv4(client.ftp);

  console.log(`Uploading ${LOCAL_DIR}/ → ${FTP_REMOTE_DIR}/`);
  const count = await uploadDirectory(client, LOCAL_DIR, FTP_REMOTE_DIR.replace(/\/$/, ""));
  console.log(`Done — ${count} files uploaded to amyash.co.uk`);
} catch (error) {
  console.error("Deploy failed:", error.message);
  process.exit(1);
} finally {
  client.close();
}
