export const profile = {
  email: "hello@amyash.co.uk",
  phone: "07745 720 319",
  website: "https://amyash.co.uk",
  discipline: "Experience designer (UX / UI / IxD)",
};

/** Section 06 — Career timeline (CV). Set true to show on the main site. */
export const showCareerSection = false;

export const aiFirst = {
  number: "04",
  title: "DESIGNING",
  titleSub: "with AI",
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
    id: "bfi-player-samsung",
    company: "BFI Player & Samsung Smart TV",
    status: "UX / Product Design",
    tagline: "Redesigning film discovery across web and connected TV",
    href: "#work",
    external: false,
    details: {
      role: "Lead UX / Product Designer",
      client: "British Film Institute",
      services:
        "End-to-end redesign of BFI Player across web and Samsung Smart TV—from research and workshops through interaction design, user testing and design system development.",
      overviewImages: [
        {
          src: "/bfi-player-samsung/grid-focus-doc.png",
          alt: "BFI Player Samsung TV documentation showing grid focus behaviour, with horizontal roaming focus updating the breakout panel and vertical row shifting.",
        },
        {
          src: "/bfi-player-samsung/transport-controls-doc.png",
          alt: "BFI Player Samsung TV documentation for video player transport controls, showing play/pause focus states and the paused info bar.",
        },
        {
          src: "/bfi-player-samsung/landing-pages-doc.png",
          alt: "BFI Player Samsung TV documentation page showing annotated landing page UI with focus states, blurred hero artwork and film collection grid.",
        },
      ],
      overview:
        "The British Film Institute wanted to modernise its video-on-demand experience across web and Samsung Smart TVs. The existing experience made it difficult for users to discover films, understand subscription options and complete purchases.\n\nAs the sole UX/Product Designer, I led the end-to-end design of the new experience—from research and workshops through interaction design, user testing, design system development and iterative improvements after launch.",
      challenge:
        "Unlike mainstream streaming platforms, BFI Player contained a unique mixture of:\n\n• subscription content\n• rental films\n• free archive content\n• editorial collections\n• educational material\n\nUsers didn't always know:\n\n• what was available\n• why some films required payment\n• where to begin browsing\n• how different subscription tiers worked\n\nThe challenge wasn't simply redesigning an interface—it was creating a discovery experience that made a complex catalogue feel approachable.",
      myRole:
        "I owned:\n\n• Product strategy\n• UX research\n• Persona workshops\n• Information architecture\n• User journeys\n• Wireframes\n• UI design\n• Interaction design\n• Design system (Pattern Lab)\n• User testing\n• Design QA\n\nI worked closely with:\n\n• Product Owner\n• Developers\n• BFI stakeholders\n• Content teams",
      understandingUsers:
        "One of the first activities I facilitated was a series of persona workshops with BFI stakeholders.\n\nThese helped us understand that people weren't arriving with the same goals.\n\nSome users wanted to watch a specific film. Others wanted to browse, discover something new, explore a historical topic, research archive material, or simply be inspired.\n\nThose very different behaviours informed almost every design decision that followed.",
      solvingDiscovery:
        "One recurring theme throughout the project was reducing the effort required to find something worth watching.\n\nInstead of treating search as the primary journey, I designed multiple complementary discovery mechanisms including:\n\n• curated collections\n• related content\n• metadata-driven recommendations\n• contextual navigation\n• improved filtering\n• richer film cards\n\nI also explored ideas such as roulette discovery, mood-based browsing and metadata-led search—bringing inspiration back from a VOD conference into the project.",
      designSystem:
        "Rather than producing isolated screens, I created a reusable component library using Pattern Lab.\n\nThis included:\n\n• Film cards\n• Collection cards\n• Navigation\n• Payment flows\n• Promotional components\n• Responsive layouts\n\nThe goal was consistency across desktop, tablet, mobile and Samsung Smart TV.",
      iterativeTesting:
        "Multiple rounds of usability testing surfaced issues that directly informed design iterations before launch, including:\n\n• users couldn't find search results under the keyboard\n• filters weren't understood\n• \"Type\" wasn't meaningful\n• users struggled to reset search\n• navigation labels caused confusion\n• search felt overwhelming\n• people expected different hover behaviours\n\nThose findings drove genuine evidence-based design rather than opinion-led decisions.",
      interactionDesign:
        "I explored ways of making browsing feel more cinematic.\n\nExamples included:\n\n• animated card interactions\n• moving artwork\n• hover previews\n• sticky scrolling layouts\n• progressive disclosure\n• editorial storytelling\n\nRather than overwhelming users with large grids of content, the homepage became a guided journey through films and collections.",
      balancingNeeds:
        "The platform needed to support three very different business models:\n\n• Free\n• Rental\n• Subscription\n\nA major design challenge was helping users understand why some films were available immediately while others required payment.\n\nThis influenced:\n\n• card design\n• colour coding\n• payment journeys\n• homepage hierarchy\n• collection structure",
      outcome:
        "The redesigned experience successfully launched across BFI Player.\n\nIt introduced:\n\n• a modern visual language\n• clearer discovery journeys\n• reusable design components\n• improved payment flows\n• validated UX through multiple rounds of testing\n\nMany of the interaction patterns, information architecture and discovery principles developed during the project continued into later versions of BFI Player.",
      reflection:
        "This project fundamentally changed how I approach product design.\n\nRather than designing individual pages, I learned to think in systems:\n\n• designing reusable components\n• validating decisions with research\n• balancing editorial curation with algorithmic discovery\n• using interaction design to encourage exploration rather than simply display content\n\nIt remains one of the projects that shaped how I approach product design today.",
    },
  },
  {
    id: "bfi-mediatheque",
    company: "BFI Mediatheque",
    status: "Experience & Service Design",
    tagline: "Reimagining the archive experience",
    href: "#work",
    external: false,
    details: {
      heroImages: [
        {
          src: "/bfi-mediatheque/interior-wide.png",
          alt: "Wide view of lounge seating and red viewing booths.",
        },
        {
          src: "/bfi-mediatheque/booths-touchscreen.png",
          alt: "Visitor using a large touchscreen in a Mediatheque booth.",
        },
        {
          src: "/bfi-mediatheque/interior-lounge-01.png",
          alt: "Families using Mediatheque screens among colourful seating.",
        },
        {
          src: "/bfi-mediatheque/model-overview.png",
          alt: "Architectural scale model of the Mediatheque with red booths and lounge seating.",
        },
      ],
      heroImagesCredit: {
        label: "Cullinan Studio Architects",
        href: "http://cullinanstudio.com/project/bfi-mediatheque",
      },
      showcase: [
        {
          src: "/bfi-mediatheque/exterior-southbank.png",
          alt: "BFI Southbank exterior at dusk beneath Waterloo Bridge.",
          caption: "BFI Southbank",
        },
        {
          src: "/bfi-mediatheque/exterior-mediatheque.png",
          alt: "BFI Mediatheque entrance with Film Forever signage.",
          caption: "Mediatheque entrance",
        },
        {
          src: "/bfi-mediatheque/interior-mezzanine.png",
          alt: "Open Mediatheque lounge with pebble seating and archive screens.",
          caption: "Public lounge",
        },
        {
          src: "/bfi-mediatheque/interior-lounge-02.png",
          alt: "Mediatheque lounge opening onto the wider Southbank foyer.",
          caption: "Lounge and foyer",
        },
        {
          src: "/bfi-mediatheque/lounge-and-desk.png",
          alt: "Relaxed lounge seating beside a focused desk viewing station.",
          caption: "Multiple contexts",
        },
        {
          src: "/bfi-mediatheque/children-screens.png",
          alt: "Children watching archive films on embedded lounge screens.",
          caption: "Accessible for all ages",
        },
        {
          src: "/bfi-mediatheque/floorplan.png",
          alt: "Architectural plan of the Mediatheque layout.",
          caption: "Space plan",
        },
      ],
      overview:
        "The Mediatheque gives the public free access to thousands of films, television programmes and archive materials from the BFI National Archive.\n\nWhen I joined the project, the experience relied on ageing dedicated computers running a legacy database application. Visitors searched using traditional desktop PCs with keyboards and mice that had become unreliable and increasingly difficult to maintain. The overall experience felt dated, intimidating and at odds with the quality of the archive itself.\n\nThe brief was not simply to redesign an interface, but to completely replace the legacy system with a modern web application that could support everything from visitors' own devices to large-format touchscreen installations designed for a cinema-like browsing experience.\n\nAs the sole UX designer, I led the project from discovery through to launch, owning the research, information architecture, interaction design, usability testing and design iteration.",
      challenge:
        "This was an unusually complex design problem because it wasn't one product.\n\nThe experience needed to work across dramatically different contexts:\n\n• visitors exploring the archive on large multi-touch displays\n• users interacting with traditional desktop computers\n• responsive layouts for personal devices\n• casual visitors browsing for inspiration\n• researchers arriving with a specific film or programme in mind\n\nThe challenge was to create a single product that could adapt naturally to each context without compromising usability.\n\nAt the same time, the interface needed to make a vast cultural archive feel approachable for people with very different levels of knowledge about film.",
      challengeImages: [
        {
          src: "/bfi-mediatheque/visitor-smile.png",
          alt: "Visitor smiling while wearing headphones in the Mediatheque.",
        },
        {
          src: "/bfi-mediatheque/booths-family.png",
          alt: "Families seated in red Mediatheque viewing pods.",
        },
      ],
      discovery:
        "Rather than starting with interface design, I began by observing how people used the existing Mediatheque.\n\nThis helped me understand that many usability issues occurred before users even interacted with the software.\n\nMy observations covered the entire service, including:\n\n• how visitors discovered the Mediatheque\n• how they entered the space\n• whether they understood the ticketing process\n• how confident they felt using the technology\n• where they became confused or abandoned tasks\n\nThese observations influenced both the digital product and the wider user journey.",
      discoveryImages: {
        credit: "Illustrations by Lin Jin",
        items: [
          {
            src: "/bfi-mediatheque/linjin/persona-01-angela.jpg",
            alt: "Southbank Explorer: Angela’s story — illustrated journey storyboard.",
          },
          {
            src: "/bfi-mediatheque/linjin/persona-02-wei.jpg",
            alt: "Cultural & Leisure seeker: Wei’s story — illustrated journey storyboard.",
          },
          {
            src: "/bfi-mediatheque/linjin/persona-03-louise.jpg",
            alt: "Research for film: Louise’s story — illustrated journey storyboard.",
          },
          {
            src: "/bfi-mediatheque/linjin/persona-04-rosie.jpg",
            alt: "Teach & Learn: Rosie’s story — illustrated journey storyboard.",
          },
        ],
      },
      devices:
        "One of the biggest design challenges was creating an experience that worked equally well across devices with completely different interaction models.\n\nUnlike a traditional responsive website, the product needed to support:\n\n• large multi-touch displays\n• extended reach distances\n• two-handed interaction\n• standing users\n• desktop mouse and keyboard\n• personal mobile devices\n\nThis meant rethinking navigation, search, gestures, layout and interaction patterns rather than simply resizing pages for different screen sizes.",
      research:
        "Throughout the project I planned and facilitated multiple rounds of usability testing.\n\nEach round generated improvements across areas including:\n\n• search behaviour\n• filtering\n• information architecture\n• navigation\n• terminology\n• homepage content\n• playback controls\n• discoverability\n\nThe design evolved continuously through testing rather than following a fixed specification.",
      myRole:
        "As the only UX designer on the project, I was responsible for:\n\n• Discovery research\n• Service observation\n• Experience mapping\n• Information architecture\n• Interaction design\n• Responsive design\n• Touchscreen UX\n• Wireframing\n• Prototyping\n• Usability testing\n• Design iteration\n• Working with developers through implementation",
      outcome:
        "The redesigned Mediatheque launched successfully and replaced the legacy archive system.\n\nThe platform continues to power the public Mediatheque experience today, enabling hundreds of visitors every day to explore one of the world's most significant moving image collections through a modern, accessible interface.\n\nAlthough the project wasn't measured against commercial KPIs, extensive usability testing informed the design throughout development, and seeing the service remain in active public use years after launch is a strong indication that the design has stood the test of time.",
    },
  },
  {
    id: "audible-kurupt-fm",
    company: "Audible × Kurupt FM",
    status: "4× award-winning project",
    tagline: "Designing the internet as Chabuddy G imagined it",
    href: "#work",
    external: false,
    details: {
      role: "Art direction, Lead product design and Front end development",
      services:
        "A suite of intentionally terrible websites created to launch ",
      servicesLink: {
        label: "Audible's original Kurupt FM Podkast.",
        href: "https://soundcloud.com/kuruptpodkasts",
      },
      client: "Recipe Advertising for Audible UK",
      heroVideo: {
        src: "/kurupt-videos/case-study.mp4",
        title: "Kurupt FM case study film",
        posterTime: 53,
      },
      heroLink: {
        label: "Listen on SoundCloud",
        href: "https://soundcloud.com/kuruptpodkasts",
      },
      awards: [
        {
          label: "Creative Circle",
          image: "/kurupt-awards/creative-circle.png",
        },
        {
          label: "The Caples",
          image: "/kurupt-awards/caples.png",
          href: "https://caples.org/2020-winners-results/?id=319&cat=Branded%2520Content",
        },
        {
          label: "Creative Circle: Best Site/Microsite 2020",
        },
        {
          label: "Creative Circle: Best Art Direction 2020",
        },
        {
          label: "The Caples: Branded content - Silver 2020",
          href: "https://caples.org/2020-winners-results/?id=319&cat=Branded%2520Content",
        },
        {
          label: "The Caples: Branded Content - Bronze 2020",
          href: "https://caples.org/2020-winners-results/?id=319&cat=Branded%2520Content",
        },
      ],
      challenge:
        "Audible was launching The Kurupt FM Podkast, an Audible Original featuring the cast of People Just Do Nothing.\n\nThe objective wasn't simply to advertise a podcast. It was to convince an existing fanbase that Kurupt FM had found a new home on Audible, while reinforcing Audible's growing catalogue of original content.\n\nTraditional campaign pages felt too polished for the characters. If the websites looked professionally designed, the joke would be lost.\n\nThe challenge became:",
      challengeQuote:
        "How do you create websites that feel authentically made by Chabuddy G while still persuading thousands of users to click through and start listening?",
      myRole:
        "I led the art direction, product design and front-end development of the campaign.\n\nWorking alongside Recipe's creative team and the writers behind Kurupt FM, I designed and built six standalone promotional websites—one for each of Chabuddy G's fictional businesses.\n\nRather than producing static designs for handover, I built the experiences directly in HTML, CSS and JavaScript so I could obsess over the small interactions that made each site feel believable.",
      designingBad:
        "Ironically, creating convincingly poor web design required far more care than producing polished interfaces.\n\nEvery decision had to balance comedy with usability.\n\nThe sites deliberately borrowed from late-90s GeoCities culture:\n\n• flashing GIFs\n• tiled backgrounds\n• visitor counters\n• autoplay audio\n• broken layouts\n• comic sans typography\n• fake SSL warnings\n• outdated browser behaviour\n• absurd domain names\n\nYet beneath the chaos sat a carefully considered navigation model that always led users towards Audible.\n\nIf people genuinely became lost or frustrated, the campaign would fail.\n\nThat tension between parody and usability became the central design challenge.",
      designingBadImages: [
        {
          src: "/kurupt-sites/tiny-love.png",
          alt: "Tiny Love dating site parody with pink GeoCities layout.",
        },
        {
          src: "/kurupt-sites/music-managerial.png",
          alt: "Chabuddy G’s Music Managerial Services parody website.",
        },
        {
          src: "/kurupt-sites/ask-steves-nan.png",
          alt: "Ask Steves' Nan Ouija board parody website.",
        },
        {
          src: "/kurupt-sites/jungle-jujitsu.png",
          alt: "Chabuddy G's Jungle Jujitsu Fighting Club parody website.",
        },
        {
          src: "/kurupt-sites/mode-italiano.png",
          alt: "Mode Italiano fashion parody website with Italian flag background.",
        },
      ],
      buildingInBrowser:
        "Because so much of the humour relied on timing and interaction, I chose to design directly in code rather than relying solely on static mock-ups.\n\nThis gave me complete control over every detail, from intentionally broken loading states to custom scrollbars, fake operating system errors and interactive easter eggs.\n\nHidden throughout the sites were rewards for curious visitors, including:\n\n• ASCII graffiti hidden in the markup\n• a working Ouija board\n• vintage Google search\n• deliberately insecure certificate warnings\n• fake \"420 Page Not Found\" screens\n• hidden interactions and visual gags\n\nEvery website became its own small interactive comedy sketch.",
      buildingInBrowserImages: [
        {
          src: "/kurupt-sites/ascii-source.png",
          alt: "HTML source with ASCII graffiti easter egg signed AMY_ASH hidden in a comment.",
        },
      ],
      mobileFirst:
        "Although the visual language came from 1998, almost all traffic would arrive from modern smartphones via social media.\n\nThe biggest technical challenge was translating deliberately outdated desktop web conventions into responsive mobile experiences without losing the joke.\n\nThe result was six websites that felt authentically awful while remaining fully functional on contemporary devices.",
      outcome:
        "The campaign launched alongside The Kurupt FM Podkast in July 2019.\n\nThe work received multiple industry awards, including:\n\n• Creative Circle – Best Microsite\n• Creative Circle – Best Art Direction\n• [Caples Awards – Silver (Branded Content)](https://caples.org/2020-winners-results/?id=319&cat=Branded%2520Content)\n• [Caples Awards – Bronze (Branded Content)](https://caples.org/2020-winners-results/?id=319&cat=Branded%2520Content)\n\nThe websites were also shared directly by Chabuddy G across social media, extending the campaign organically amongst an existing fan community.",
      youtubeEmbeds: [
        {
          src: "https://www.youtube.com/embed/I8Pj_Si8Pdk",
          title: "Kurupt FM campaign film",
        },
        {
          src: "https://www.youtube.com/embed/4WUuxm5wzmM",
          title:
            "Kurupt FM x Audible PodKast, proudly sponsored by Chabuddy G's Jungle Jujitsu Fighting Club",
        },
        {
          src: "https://www.youtube.com/embed/LxPHsE6aYBI",
          title:
            "Kurupt FM x Audible PodKast, proudly sponsored by Chabuddy G's Afterlife Service",
        },
        {
          src: "https://www.youtube.com/embed/RMeUaJM6ygo",
          title: "CHABUDDY G: THE REAL TIGER KING | Audible UK #KuruptFM",
        },
        {
          src: "https://www.youtube.com/embed/tCuz6k2vSpQ",
          title: "Kurupt FM Podkast - Emergency Broadkast | People Just Do Nothing",
        },
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
    caseIds: ["expedia", "bfi-player-samsung", "audible-kurupt-fm"],
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

const caseStudyById = Object.fromEntries(caseStudies.map((cs) => [cs.id, cs]));

export function getCaseStudyById(id) {
  return caseStudyById[id] ?? null;
}

export function getCaseStudiesForGroup(group) {
  return group.caseIds.map((id) => caseStudyById[id]).filter(Boolean);
}

/** Featured case studies shown in Selected Projects (edit these to fill out). */
export const selectedProjects = [
  {
    id: "expedia",
    company: "Expedia Group",
    description: "Designing AI-native travel experiences",
    cta: "Get notified",
  },
  {
    id: "bfi-player-samsung",
    company: "BFI Player & Samsung",
    description: "Redesigning film discovery across web and connected TV",
    cta: "Open case study",
  },
  {
    id: "bfi-mediatheque",
    company: "BFI Mediatheque",
    description: "Reimagining the archive experience",
    cta: "Open case study",
    image: "/bfi-mediatheque/interior-wide.png",
  },
  {
    id: "audible-kurupt-fm",
    company: "Audible × Kurupt FM",
    description: "Designing the internet as Chabuddy G imagined it",
    cta: "Open case study",
    image: "/kurupt-videos/case-study-poster.jpg",
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

export const frontendUnited = {
  name: "Frontend United",
  tagline: "Frontend United",
  title: "Communities",
  titleSub: "BUILDING",
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
    {
      src: "/frontend-gallery/workshop-zebra.png",
      alt: "Workshop session with a speaker presenting website diagrams to an attentive audience.",
    },
    {
      src: "/frontend-gallery/global-map.png",
      alt: "Frontend United global community map with livestream locations marked worldwide.",
    },
    {
      src: "/frontend-gallery/audience-theater.png",
      alt: "Packed Frontend United auditorium facing the stage screen.",
    },
  ],
  video: {
    type: "video",
    videoId: "5hdIb5kTLls",
    href: "https://www.youtube.com/watch?v=5hdIb5kTLls",
    title: "Frontend United talk on YouTube",
    thumb: "https://i.ytimg.com/vi/5hdIb5kTLls/hqdefault.jpg",
    alt: "Watch the Frontend United talk on YouTube.",
  },
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
