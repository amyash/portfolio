export const profile = {
  email: "hello@amyash.co.uk",
  phone: "07745 720 319",
  website: "https://amyash.co.uk",
  discipline: "Experience designer (UX / UI / IxD)",
};

/** Section 06 — Career timeline (CV). Set true to show on the main site. */
export const showCareerSection = false;

export const aiFirst = {
  number: "03",
  title: "AI-first",
  titleSub: "DESIGN",
  lead: "I design with AI at the centre, and I teach others to do the same.",
  paragraphs: [
    "AI isn't another tool in my workflow—it's become part of how I think, explore and build.",
    "I use AI throughout the design process: from research synthesis and journey mapping to prototyping, interface generation and production-ready code.",
    "At Expedia Group I help designers adopt AI-native workflows, creating training, running learning labs and demonstrating how tools like Cursor can shorten the gap between idea and implementation.",
    "Alongside my day job I build personal products entirely with AI-assisted development. Oma, an AI companion for parents, was designed and built from scratch using Cursor and Claude Code before being prepared for release.",
  ],
  highlights: [
    {
      id: "cursor",
      tag: "Expedia Group",
      title: "Cursor champion",
      description:
        "Recorded training videos and led Experience Design AI Learning Labs sessions to train the design org on using Cursor for AI-native prototyping, critique, and delivery.",
    },
    {
      id: "coursera",
      tag: "Learning",
      title: "Recent courses completed",
      links: [
        {
          href: "https://www.coursera.org/specializations/machine-learning-introduction",
          cta: "Andrew Ng's: Generative AI for Everyone",
        },
        {
          href: "https://expedia.udemy.com/course/ai-for-ui-and-ux-designers/",
          cta: "AI for UI and UX Designers",
        },
        {
          href: "https://ixdf.org/courses/emotional-design-how-to-make-products-people-will-love",
          cta: "Designing for Emotion",
        },
      ],
    },
  ],
};

export const about = {
  eyebrow: "Designing for People Since 2005",
  headline: "Designing AI-native products, systems and experiences.",
  headlineSub:
    "I help teams turn complex problems into products people actually enjoy using.",
  heroParagraphs: [
    "Over the last twenty years I've designed everything from enterprise travel platforms and streaming services to museum installations, cultural archives and AI-powered tools. Today I work at Expedia Group, where I help shape the future of travel while exploring how AI is changing the way designers work.",
    "Part designer, part prototyper, part educator—I believe the fastest way to understand an idea is to build it.",
  ],
  paragraphs: [
    "I began my career writing HTML and CSS before UX was widely recognised as a discipline. That technical background still shapes how I design today.",
    "Since graduating from London College of Communication in 2005, I've worked across agencies, startups and global organisations, designing products used by millions of people as well as public experiences visited by thousands every day.",
    "My work has included redesigning the BFI's digital products, creating exhibition experiences for the Science Museum, building enterprise tools at Expedia Group and helping teams adopt AI-native ways of designing and prototyping.",
    "Alongside my design work I've organised international conferences, mentored designers and spoken about the future of design and technology across Europe.",
  ],
};

export const caseStudies = [
  {
    id: "expedia",
    company: "Expedia Group",
    status: "Current",
    tagline: "Case study",
    question: "How did this work shape product and experience outcomes?",
    href: "https://www.linkedin.com/in/amyashldn/",
    external: true,
  },
  {
    id: "bfi-player",
    company: "BFI Player",
    status: "Featured",
    tagline: "Case study",
    question: "How did this work shape product and experience outcomes?",
    href: "https://player.bfi.org.uk/",
    external: true,
  },
  {
    id: "bfi-samsung",
    company: "BFI Samsung",
    status: "Archive",
    tagline: "Case study",
    question: "How did this work shape product and experience outcomes?",
    href: "#work",
    external: false,
  },
  {
    id: "bfi-mediatheque",
    company: "BFI's Mediatheque",
    status: "Archive",
    tagline: "Case study",
    question: "How did this work shape product and experience outcomes?",
    href: "#work",
    external: false,
  },
  {
    id: "audible-kurupt-fm",
    company: "Audible x Kurupt FM",
    status: "Award-winning",
    tagline: "4 x award-winning project",
    question:
      "How do you drive podcast downloads while keeping the campaign unmistakably Kurupt FM?",
    href: "#work",
    external: false,
    details: {
      role: "Lead UX, UI and developer",
      services:
        "UX and development for Audible UK in collaboration with Kurupt FM",
      client: "Recipe Advertising for Audible",
      location: "London",
      launchDate: "July 2019",
      awards: [
        {
          label: "Creative Circle: Best Site/Microsite 2020",
          href: "https://www.creativecircle.co.uk/2020.html#13775",
        },
        {
          label: "Creative Circle: Best Art Direction 2020",
          href: "https://www.creativecircle.co.uk/2020.html#13774",
        },
        {
          label: "The Caples: Branded Content - Silver 2020",
          href: "https://caples.org/2020-winners-results/?id=319&cat=Branded%2520Content",
        },
        {
          label: "The Caples: Branded Content - Bronze 2020",
          href: "https://caples.org/2020-winners-results/?id=319&cat=Branded%2520Content",
        },
      ],
      overview:
        "To promote Audible's Kurupt FM Podkast, we created six campaign websites for Chabuddy G's fictional businesses, intentionally art-directed like chaotic late-90s internet.",
      context:
        "Audible challenged us to drive downloads while proving it could produce high-quality original content. The core audience was 16-40-year-olds, especially existing Kurupt FM fans who did not yet know the podcast had moved to Audible.",
      designBuild:
        "I led UX and UI with Recipe and the Kurupt FM team, then designed and built the sites directly in CSS and JavaScript to capture the exact Geocities-style aesthetic. Each site featured jingles, audio clips, videos, and click-through paths to Audible's Kurupt FM landing page, often via a deliberate '420 page not found' moment.",
      challenge:
        "The challenge was balancing deliberately bad 90s web design with modern device expectations. Traffic was primarily social and mobile, so despite the parody we still needed a usable mWeb experience.",
      easterEggs:
        "The sites included hidden ASCII graffiti in markup, custom ugly domains, fake SSL certificates, period-style search, custom scrollbars, fake crash messaging, and an interactive Ouija board.",
      result:
        "The Kurupt Websites campaign made Kurupt FM the most downloaded Audible podcast that month.",
      warning: "Headphone warning: these sites use auto-play audio and may be loud.",
      videos: [
        { title: "Music", src: "/kurupt-videos/music.mov" },
        { title: "420 page", src: "/kurupt-videos/420.mov" },
        { title: "Italiano", src: "/kurupt-videos/italiano.mov" },
        { title: "Jujitsu", src: "/kurupt-videos/jujitsu.mov" },
        { title: "Ouiji", src: "/kurupt-videos/ouiji.mov" },
        { title: "Techheads", src: "/kurupt-videos/techheads.mov" },
        { title: "TinyLove", src: "/kurupt-videos/tinylove.mov" },
      ],
      liveSites: [
        "http://techheads.websitebuilder2000.net/",
        "http://musicmanagerialservices.websitebuilder2000.net/",
        "http://tinylove.websitebuilder2000.net/",
        "http://junglejujitsu.websitebuilder2000.net/",
        "http://chabuddysafterlifeservices.websitebuilder2000.net/",
        "http://authenticitaliangarments.websitebuilder2000.net/",
      ],
      references: [
        {
          label: "Audible: The Kurupt FM Podkast (Series 1)",
          href: "https://www.audible.co.uk/pd/The-Kurupt-FM-Podkast-Audiobook/B07T9947J9",
        },
        {
          label: "BBC Three: People Just Do Nothing",
          href: "https://www.bbc.co.uk/programmes/b062r9t5",
        },
      ],
    },
  },
  {
    id: "sky-creative-agency",
    company: "Sky Creative Agency",
    status: "Archive",
    tagline: "Talent & portfolio site",
    question:
      "How do you design a recruitment site that reflects a 300-person in-house creative agency?",
    href: "#work",
    external: false,
    details: {
      role: "User Interface Designer",
      services: "UX, User Interface Design",
      client: "Sky Creative Agency",
      agency: "Recipe",
      location: "London",
      launchDate: "May 2019",
      showcase: [
        {
          src: "/sky-creative-agency/01-homepage.png",
          alt: "Sky Creative Agency homepage with hero collage and recent projects grid.",
          caption: "Homepage — hero and recent projects",
        },
        {
          src: "/sky-creative-agency/02-recent-projects.png",
          alt: "Recent projects masonry grid showcasing Sky campaign work.",
          caption: "Recent projects grid",
        },
        {
          src: "/sky-creative-agency/03-sky-arts-case-study.png",
          alt: "Sky Arts rebrand case study page with gallery slider.",
          caption: "Case study template — Sky Arts rebrand",
        },
        {
          src: "/sky-creative-agency/10-sky-arts-hero.png",
          alt: "Sky Arts rebrand hero with logo and project introduction.",
          caption: "Case study — hero and content blocks",
        },
        {
          src: "/sky-creative-agency/04-hierarchy-grid.png",
          alt: "Periodic-table style agency hierarchy grid with vacancies below.",
          caption: "Company hierarchy — periodic table grid",
        },
        {
          src: "/sky-creative-agency/05-working-at-sky.png",
          alt: "Working at Sky accordion list and vacancies section.",
          caption: "Working at Sky — department accordion",
        },
        {
          src: "/sky-creative-agency/06-accordion-expanded.png",
          alt: "Production department expanded showing role levels.",
          caption: "Accordion expanded — Production roles",
        },
        {
          src: "/sky-creative-agency/07-role-detail-grid.png",
          alt: "Head of Production role detail with interactive team grid.",
          caption: "Role detail — Head of Production with team grid",
        },
        {
          src: "/sky-creative-agency/08-role-detail.png",
          alt: "Head of Production role panel with skills and video testimonial.",
          caption: "Role detail — skills, testimonial and vacancies",
        },
        {
          src: "/sky-creative-agency/09-role-vacancies.png",
          alt: "Role detail view with open vacancies list.",
          caption: "Role detail and open vacancies",
        },
        {
          src: "/sky-creative-agency/11-contact.png",
          alt: "Contact form and Find Us map with Sky-themed styling.",
          caption: "Contact page — form and Snazzy Map",
        },
      ],
      stats: [
        { value: "300", label: "people", sub: "UK's largest in-house agency" },
        { value: "2019", label: "launch", sub: "May 2019 go-live" },
        { value: "1", label: "client", sub: "Sky — exclusive focus" },
      ],
      overview:
        "Sky Creative Agency is 300 people — the largest in-house advertising agency in the UK. SCA is unique in that it services a single client, Sky, which manifests in many forms: Sky marketing teams and broadcast operations across news and sports. The primary function of the website is to attract the best talent to work at the agency; visitors also include people interested in the work SCA produces — potential partners, external agencies, and post-production houses. \"We are Sky's in-house creative agency and have an extensive and varied portfolio of work across all of Sky's Content Advertising, Promotion, Brand and Broadcast Design.\"",
      sections: [
        {
          title: "Vision, features and users",
          body:
            "The vision: make Sky famous for its advertising, promotion and design; be a powerhouse for the business with creativity and innovation at the heart of everything; brave pioneers that are the envy of the industry, championing creativity, pushing boundaries and challenging convention.\n\nFeatures included a showcase of case studies from the work we produce; a job listings page with interactive team descriptions and contact; CMS-side layout options for editors; layouts with more variations and media-rich features; an email capture mechanism; and a port to WordPress CMS on its own dedicated server.\n\nUsers: people interested in our work, potential partners (external agencies, post houses, and similar) who would like to work with us, potential recruits, and network partners across industry, academia, and diversity initiatives.",
        },
        {
          title: "Project on-boarding",
          image: {
            src: "/sky-creative-agency/design-direction-red.png",
            alt: "Initial design direction — bold red colour exploration.",
            caption: "Initial design direction",
          },
          body:
            "The focus of the brief was to design a website that reflected the agency — over improving an existing product and appeasing users. I ran a workshop with key stakeholders to understand the personality of the agency and its employees.",
          images: [
            {
              src: "/sky-creative-agency/onboarding-user-stories.png",
              alt: "User story cards from the Sky Creative Agency ideation workshop.",
              caption: "Ideation workshop — user stories (03.04.19)",
            },
            {
              src: "/sky-creative-agency/onboarding-empathy-maps.png",
              alt: "Empathy map worksheets from the site redesign workshop.",
              caption: "Ideation workshop — empathy maps (09.04.19)",
            },
            {
              src: "/sky-creative-agency/onboarding-moodboard.png",
              alt: "Moodboard and layout inspiration from the web design brief.",
              caption: "Moodboard and inspiration — web design brief",
            },
          ],
        },
        {
          title: "Information architecture",
          body:
            "The client had an existing brochure site built with an online web creation platform. Despite being outdated and seemingly irrelevant, it was a useful starting point from an architecture and content perspective. I proposed a new IA structure to organise case studies, recruitment, and editorial content for the WordPress CMS.",
          images: [
            {
              src: "/sky-creative-agency/information-architecture.png",
              alt: "Proposed sitemap for skycreative.uk showing Home, About, Work with us, Social, Contact and case study flows.",
              caption: "Proposed IA — iteration 002, 21.03.19",
            },
          ],
        },
        {
          title: "Initial design directions",
          body:
            "The next step was to offer the client design directions to test the flavour of the design and see if we had captured the essence of the agency in a website look and feel.",
          images: [
            {
              src: "/sky-creative-agency/design-direction-showreel.png",
              alt: "Minimal homepage concept with showreel hero and vertical navigation.",
              caption: "Direction A — showreel hero",
            },
            {
              src: "/sky-creative-agency/design-direction-gallery.png",
              alt: "Homepage concept with horizontal image gallery strip.",
              caption: "Direction B — image gallery hero",
            },
            {
              src: "/sky-creative-agency/design-direction-sky-arts.png",
              alt: "Case study layout concept for Sky Arts branding work.",
              caption: "Case study layout — Sky Arts branding",
            },
            {
              src: "/sky-creative-agency/design-direction-social.png",
              alt: "Social page concept with Instagram masonry grid.",
              caption: "Social — Instagram grid",
            },
          ],
        },
        {
          title: "Company hierarchy component",
          body:
            "One of the tasks in the brief was to create a visually interesting and interactive way of explaining the structure of the agency — partly for internal comprehension and tied to the recruitment requirement. The client were keen on a grid structure resembling the periodic table of elements, so I worked with a motion graphic designer from their team until they were happy with the result.",
          images: [
            {
              src: "/sky-creative-agency/hierarchy-creative-elements.png",
              alt: "Early concept — Periodic table of Creative Elements with department columns and role levels.",
              caption: "Concept — Periodic table of Creative Elements",
            },
            {
              src: "/sky-creative-agency/hierarchy-mobile-wireframe.png",
              alt: "Mobile wireframe sketch for accordion department navigation and role drill-down.",
              caption: "Mobile wireframe — accordion navigation flow",
            },
            {
              src: "/sky-creative-agency/hierarchy-periodic-table.png",
              alt: "Final periodic-table grid mapping departments and seniority levels with role abbreviations.",
              caption: "Final component — periodic table grid",
            },
          ],
        },
        {
          title: "High fidelity prototype",
          body:
            "With sign-off complete and the component library in place, it was time to hire a developer to make it work. I used a high fidelity prototype and CodePen examples of interactions to explain the design visually — the best way to communicate motion and behaviour before build.",
        },
        {
          title: "Tidying up",
          body:
            "Final tasks included documenting the CMS so the client could update the website themselves, and creating a Sky-themed Snazzy Map for the contact page.",
          images: [
            {
              src: "/sky-creative-agency/cms-hero-section.png",
              alt: "CMS specification for case study hero section across desktop, tablet and mobile.",
              caption: "CMS docs — Hero section component",
            },
            {
              src: "/sky-creative-agency/cms-image-text-block.png",
              alt: "CMS specification for image and text content block with column and float options.",
              caption: "CMS docs — Image and text content block",
            },
            {
              src: "/sky-creative-agency/cms-full-width-media.png",
              alt: "CMS specification for full-width image or video component.",
              caption: "CMS docs — Full-width image or video",
            },
            {
              src: "/sky-creative-agency/cms-gallery-slider.png",
              alt: "CMS specification for gallery slider carousel using slick-slider.",
              caption: "CMS docs — Gallery slider carousel",
            },
          ],
        },
        {
          title: "The outcome",
          body:
            "The site launched live at skycreative.agency in May 2019 — a portfolio and recruitment platform that reflects SCA's ambition to be famous for advertising, promotion and design.",
        },
      ],
      references: [
        {
          label: "Sky Creative Agency website",
          href: "https://skycreative.agency",
        },
        {
          label: "Component library (Sketch)",
          href: "https://sketch.cloud/s/2G1RG",
        },
        {
          label: "Hi-Fi prototype (Axure)",
          href: "https://f9p7pf.axshare.com/",
        },
      ],
    },
  },
  {
    id: "sky-tech-summit",
    company: "Sky Tech Summit",
    status: "Archive",
    tagline: "Case study",
    question: "How did this work shape product and experience outcomes?",
    href: "#work",
    external: false,
  },
  {
    id: "sky-tech-summit-skyx",
    company: "Sky Tech Summit - SkyX",
    status: "Archive",
    tagline: "Case study",
    question: "How did this work shape product and experience outcomes?",
    href: "#work",
    external: false,
  },
  {
    id: "audible",
    company: "Audible",
    status: "Archive",
    tagline: "Case study",
    question: "How did this work shape product and experience outcomes?",
    href: "#work",
    external: false,
  },
  {
    id: "raf-interactive-timeline",
    company: "RAF interactive timeline",
    status: "Archive",
    tagline: "Case study",
    question: "How did this work shape product and experience outcomes?",
    href: "#work",
    external: false,
  },
  {
    id: "recipe-website",
    company: "Recipe website",
    status: "Archive",
    tagline: "Case study",
    question: "How did this work shape product and experience outcomes?",
    href: "#work",
    external: false,
  },
  {
    id: "science-museum",
    company: "Science Museum",
    status: "Archive",
    tagline: "Oramics · Public co-curation",
    question:
      "How do you tell the story of electronic music democratisation with a museum and its community?",
    href: "#work",
    external: false,
    details: {
      role: "Part of Public Curator Team",
      services:
        "Co-curation for museum exhibition, digital music production consultant",
      client: "The Science Museum",
      location: "London",
      launchDate: "2011–2016",
      stats: [
        { value: "2011", label: "from", sub: "exhibition programme begins" },
        { value: "3", label: "sessions", sub: "co-curation workshops" },
        { value: "6", label: "years", sub: "2011–2016 involvement" },
      ],
      overview:
        "The Oramics Machine — From Lab to Laptop: The Democratisation of Electronic Music. In 2011 I was asked to join a co-curation team for a Science Museum exhibition built around an extraordinary object at its centre: Daphne Oram's Oramics Machine. Oram was part of the BBC Radiophonic Workshop — one of the sound-effects units created in 1958 to produce effects and new music for radio — and this piece of electronic music history became the heart of the show.",
      sections: [
        {
          title: "The longer version",
          body:
            "A wonderful artefact was found in someone's shed which turned out to be a synthesizer made by Daphne Oram, known as the Oramics Machine. It was donated to the Science Museum in London and needed expertise outside the museum's curator team. The rest of the group included a Goldsmiths PhD graduate, a software developer for a well-known soft synth company, a classically trained flutist who recorded and twisted her music in music programs, an editor of a synthesiser magazine, and someone who worked on Ableton 9. Music technology had always been a hobby for me — I DJed and was heavily involved with dnbradio.com, a net radio station. A wonderful Resident Advisor piece explains Oram's career with the BBC Radiophonic Workshop, her involvement, and her techniques in depth.",
        },
        {
          title: "My involvement",
          body:
            "This exhibition was the first of its kind: the museum wanted to incorporate the public in curation to bridge the status gap between museum and community, and create a visitor experience of greater relevance — imparting our expert knowledge rather than assigning the project internally to someone who might lack the lived experience to articulate the story correctly. (Due to cuts, this way of working is sadly no longer something the Science Museum is able to do.) I was excited to be chosen. I used soft synths in my music production and, coming from a web and interactive background, hoped to understand analogue synthesis better so I could translate that into digital music-making. I was also thrilled to help tell the story of Daphne Oram as an unsung female pioneer.",
        },
        {
          title: "What we did",
          body:
            "First session: we talked about who we were and what electronic music meant to us, played each other our music, and visited the Science Museum stores in Olympia (fascinating) to see if anything relevant could be used. We discussed sourcing artefacts ourselves, wrote post-it notes about what electronic music meant to us — influential artists, pieces, albums — and grouped them on the wall, then split into teams to assess how to organise pioneers, musicians, albums, and hardware.\n\nSecond session: we met Radiophonic Workshop veterans from back in the day — this blew a lot of people's minds. They told us about the workshop and what went into making these sounds. The Doctor Who theme is the most prolific; remember that in those days these sounds had never been heard before. It was absolutely pioneering. They spliced tapes, sawed open pianos and used them as harps, and collected objects they thought had potential — much like an interactive design department. The rest of the BBC fondly called them \"lollipops and broomhandles\" because to outsiders their offices looked full of junk.\n\nThird session: we worked out how to display our story, settled on the \"lab to laptop\" subtitle and \"democratisation of electronic music\" strapline, saw the cases, and decided what artefacts went where. We also did a live gig on Wednesday 28 November 2012 — theme of communication at the Lates — where co-curators could show how they were involved in electronic music.",
        },
        {
          title: "What I learned",
          body:
            "I ended up working for one of the team member's companies that makes soft synths. I learned a lot about museum constraints: we had grand interactive plans, such as a sit-in booth where people could \"feel\" different sounds — inclusive of kids and hard-of-hearing visitors too. I got to hear Radiophonic Workshop people who had not seen each other for 30 years talk about their jobs in an incredible creative environment at one of the most amazing broadcasting corporations we may ever see. We wanted to make an app and had the skills in the team, but the Science Museum used an external company instead. There was a lot of bureaucracy, red tape, and health and safety for a temporary public exhibition. I learned about writing placards for displayed items — a skill in itself — and got to say I have worked with the Science Museum on my CV.",
        },
        {
          title: "What I got out of it, creatively",
          body:
            "I discovered this amazing woman and admired her passion and perseverance. Listening to the Radiophonic people from back in the day, I was fascinated by their make-do-and-mend attitude and felt happier that my method of making sounds and music — by hook or by crook — was good enough. \"Finished is better than perfect.\" In fact the co-curation project itself manifested that way. That is how everyone does it. That is the creative process, and it is OK.\n\nGlad to have been part of this project. It made me realise it is good to get involved in anything you are interested in, no matter the capacity. No matter what level, your best is good enough. Keep pushing. Collaborate. Do more of what you love.",
        },
      ],
      references: [
        {
          label: "Featured on BBC Click",
          href: "https://www.youtube.com/watch?v=7cyHFT2abXE",
        },
        {
          label: "Oramics iPhone app",
          href: "https://www.soundandmusic.org/projects/oramics-iphone-app",
        },
        {
          label: "Exhibition film (Vimeo)",
          href: "https://vimeo.com/29318062",
        },
      ],
    },
  },
  {
    id: "national-theatre",
    company: "National Theatre",
    status: "Archive",
    tagline: "Case study",
    question: "How did this work shape product and experience outcomes?",
    href: "#work",
    external: false,
  },
];

export const caseStudyGroups = [
  {
    id: "ux-ui",
    title: "Product design",
    caseIds: ["expedia", "bfi-player", "bfi-samsung", "audible"],
  },
  {
    id: "culture-place",
    title: "Culture & place",
    lead: "Museums, theatres, archives and live events — experience design for physical spaces.",
    caseIds: [
      "bfi-mediatheque",
      "science-museum",
      "national-theatre",
      "sky-tech-summit",
    ],
  },
  {
    id: "websites-interactive",
    title: "Websites / Interactive",
    caseIds: [
      "audible-kurupt-fm",
      "raf-interactive-timeline",
      "sky-tech-summit-skyx",
      "recipe-website",
      "sky-creative-agency",
    ],
  },
];

/** Temporary work section — full case studies hidden while in progress. */
export const workPlaceholder = {
  note: "Case studies available on request.",
  logos: [
    { name: "Expedia Group", logo: "/logos-transparent/ExpediaGroup.png", scale: 0.84 },
    { name: "BFI", logo: "/logos-transparent/BFI.png", scale: 0.82 },
    { name: "Audible", logo: "/logos-transparent/Audible.png", scale: 1.24 },
    { name: "Sky", logo: "/logos-transparent/Sky.png", scale: 0.84 },
  ],
};

const caseStudyById = Object.fromEntries(caseStudies.map((cs) => [cs.id, cs]));

export function getCaseStudiesForGroup(group) {
  return group.caseIds.map((id) => caseStudyById[id]).filter(Boolean);
}

export const frontendUnited = {
  name: "Frontend United",
  tagline: "Frontend United",
  title: "Building",
  titleSub: "COMMUNITIES",
  paragraphs: [
    "Long before AI became my focus, I spent years bringing designers and developers together.",
    "As organiser of Frontend United London and host at conferences across Europe, I helped grow a welcoming, not-for-profit community centred on UX, UI, and front-end development. More than 2,000 people attended Frontend United events, creating opportunities for designers and engineers to learn from one another, challenge ideas, and build lasting connections across disciplines.",
    "The conference was founded on openness, collaboration, and inclusion. Alongside the in-person events, we live-streamed talks to communities around the world—including Niš, Nairobi, Paramaribo, and Ho Chi Minh City—making the conversations accessible far beyond the conference venue.",
    "It remains one of the projects I'm most proud of: proof that great communities are designed with as much care as great products.",
  ],
  heroImage: {
    src: "/frontend-gallery/team-crowd.png",
    alt: "Large crowd gathered on the stairs at Frontend United Utrecht 2018.",
  },
  mainImage: {
    src: "/frontend-united-team.png",
    alt: "Frontend United organising team in event shirts.",
  },
  gallery: [
    {
      src: "/frontend-gallery/speaker-01.png",
      alt: "Amy Ash speaking on stage at Frontend United.",
    },
    {
      src: "/frontend-gallery/speaker-02.png",
      alt: "Amy Ash hosting an on-stage session at Frontend United.",
    },
    {
      src: "/frontend-gallery/speaker-03.png",
      alt: "Amy Ash presenting with stage visuals at Frontend United.",
    },
    {
      src: "/frontend-gallery/speaker-04.png",
      alt: "Amy Ash speaking on stage with a microphone.",
    },
    {
      src: "/frontend-gallery/speaker-05.png",
      alt: "Amy Ash hosting beside conference signage.",
    },
    {
      src: "/frontend-gallery/speaker-06.png",
      alt: "Panel moment at Frontend United with Amy Ash on stage.",
    },
    {
      src: "/frontend-gallery/speaker-07.png",
      alt: "Amy Ash addressing the audience at Frontend United.",
    },
  ],
  href: "https://medium.com/@frontendunited/the-wild-years-of-frontend-united-48980587e7d1",
};

export const clients = [
  { name: "Audible", logo: "/logos-transparent/Audible.png", scale: 1.24 },
  { name: "Expedia Group", logo: "/logos-transparent/ExpediaGroup.png", scale: 0.84 },
  { name: "AAT", logo: "/logos-transparent/AAT.png", scale: 0.84 },
  { name: "BFI Player", logo: "/logos-transparent/BFIPlayer.png", scale: 1.2 },
  { name: "BFI", logo: "/logos-transparent/BFI.png", scale: 0.82 },
  { name: "Eurostar", logo: "/logos-transparent/Eurostar.png" },
  { name: "Frontend United", logo: "/logos-transparent/FrontendUnited.png" },
  { name: "National Theatre", logo: "/logos-transparent/NationalTheatre.png" },
  { name: "The Guardian", logo: "/logos-transparent/Guardian.png" },
  { name: "Samsung / BFI Player", logo: "/logos-transparent/Samsung.png" },
  { name: "Royal Air Force Benevolent Fund", logo: "/logos-transparent/RAFBF-.png", scale: 0.84 },
  { name: "Science Museum Group", logo: "/logos-transparent/ScienceMuseum.png" },
  { name: "Royal Mail", logo: "/logos-transparent/RoyalMail.png", scale: 0.86 },
  { name: "Sky Creative Agency", logo: "/logos-transparent/Sky.png", scale: 0.84 },
  { name: "Sky", logo: "/logos-transparent/SKY1.png", scale: 0.9 },
];

export const experience = [
  {
    role: "Organiser & host",
    org: "Frontend United",
    period: "Annual · Europe-wide",
    description:
      "Organised the London event and hosted Europe's annual design and tech conference — connecting developers, designers, and Drupal themers.",
    highlight: true,
  },
  {
    role: "Senior UX Designer",
    org: "Expedia Group · Vrbo",
    period: "Oct 2019 — Present",
    description:
      "Working with a team of designers on the vacation rental marketplace.",
  },
  {
    role: "Lead Product Designer",
    org: "Recipe",
    period: "May 2018 — Sept 2019",
    description:
      "Lead UX and UI on agency projects for Audible, Sky, Royal Air Force, and GLL.",
  },
  {
    role: "Lead UX & UI Designer",
    org: "British Film Institute",
    period: "Oct 2016 — May 2018",
    description:
      "Led UX and UI on Mediatheque, BFI Player, and the BFI Samsung TV app.",
  },
  {
    role: "Freelance",
    org: "Creative services",
    period: "Jan 2016 — Sept 2016",
    description: "Sabbatical year — freelance creative projects.",
  },
  {
    role: "UX & UI Designer · Developer",
    org: "Association of Accounting Technicians (AAT)",
    period: "Dec 2013 — Dec 2015",
    description:
      "UX/UI lead porting an enterprise site to a responsive, mobile-friendly experience for multiple user roles.",
  },
  {
    role: "Interactive Designer",
    org: "The Guardian · Interactive Design",
    period: "Jul 2013 — Aug 2013",
    description: "Fixed-term contract in the Interactive Design department.",
  },
  {
    role: "UX Themer · Front-end Developer",
    org: "Eurostar · Capgemini",
    period: "2012 — 2013",
    description: "UX theming and front-end delivery on the Eurostar platform.",
  },
  {
    role: "Interactive Curator",
    org: "Science Museum Group",
    period: "Mar 2012 — Sept 2012",
    description:
      "Co-curated the Oramics exhibition — spatial design and an iPad app for Daphne Oram's synthesiser.",
  },
  {
    role: "Front-end Developer",
    org: "Royal Mail · Capgemini",
    period: "2011 — 2012",
    description:
      "Drupal front-end development for Royal Mail, Parcel Force, and Post Office Online.",
  },
  {
    role: "Freelance",
    org: "Amy Ash Ltd",
    period: "2006 — Present",
    description:
      "Experience, UX, UI, and front-end contracts across tech, culture, museums, and public services.",
  },
];

export const education = [
  {
    org: "University of the Arts London · London College of Communication (formerly LCP)",
    title: "BA (Hons) Graphic and Media Design",
    major: "Major: Interactive Graphic and Media Design",
    detail: "2005",
  },
  {
    org: "UAL · Chelsea College of Art and Design",
    title: "Art & Design Foundation",
    detail: "2001 — 2002",
  },
];

export const whatIDo = {
  title: "What I Do",
  items: [
    "Experience Strategy",
    "AI Product Design",
    "Product Design",
    "Interaction Design",
    "Design Systems",
    "Design Research",
    "Rapid Prototyping",
    "AI-native Development",
    "React & Front-end Prototyping",
    "Design Leadership",
    "Workshop Facilitation",
    "Design Education",
  ],
};

export const tools = {
  title: "Tools",
  items: [
    "Figma",
    "Cursor",
    "Claude Code",
    "ChatGPT",
    "React",
    "Framer",
    "Storybook",
    "FigJam",
  ],
};
