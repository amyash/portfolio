#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

if [[ ! -f .deploy.env ]]; then
  echo "Missing .deploy.env — copy from .deploy.env.example and add your SSH details."
  exit 1
fi

set -a
# shellcheck disable=SC1091
source .deploy.env
set +a

: "${SSH_HOST:?Set SSH_HOST in .deploy.env}"
: "${SSH_USER:?Set SSH_USER in .deploy.env}"

SSH_PORT="${SSH_PORT:-22}"
SSH_REMOTE_DIR="${SSH_REMOTE_DIR:-public_html}"
SSH_KEY="${SSH_KEY:-}"
SSH_DELETE="${SSH_DELETE:-false}"

if [[ ! -d dist ]]; then
  echo "Missing dist/ — run npm run build first."
  exit 1
fi

if ! command -v rsync >/dev/null 2>&1; then
  echo "rsync is required but not installed."
  exit 1
fi

RSYNC_OPTS=(-avz --human-readable --progress)
if [[ "$SSH_DELETE" == "true" ]]; then
  RSYNC_OPTS+=(--delete)
fi

SSH_ARGS=(-p "$SSH_PORT")
if [[ -n "$SSH_KEY" ]]; then
  SSH_ARGS+=(-i "$SSH_KEY")
fi

REMOTE="${SSH_USER}@${SSH_HOST}:${SSH_REMOTE_DIR%/}/"

echo "Deploying dist/ → $REMOTE"
rsync "${RSYNC_OPTS[@]}" -e "ssh ${SSH_ARGS[*]}" dist/ "$REMOTE"
echo "Done — site should be live at https://amyash.co.uk"
