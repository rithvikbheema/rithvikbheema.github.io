import { Project, ExperienceItem, EducationItem, CertificationItem, SkillGroup, PublicationItem } from '../types';

export const personalInfo = {
  fullName: "Sai Rithvik Bheema",
  displayName: "Sai Rithvik Bheema",
  initials: "SRB",
  location: "Hyderabad, Telangana, India",
  tagline: "Data Analyst | Python · SQL · Power BI | Machine Learning",
  mainHeadline: "Engineering Intelligence. Building What’s Next.",
  mainSupportingText: "I'm Sai Rithvik Bheema, a 2026 Electrical and Electronics Engineering graduate from CBIT, Hyderabad, focused on data analytics and machine learning, with a foundation in core engineering.",
  githubUrl: "https://github.com/rithvikbheema",
  orcidUrl: "https://orcid.org/0009-0002-3154-2075",
  linkedinUrl: "https://www.linkedin.com/in/sairithvikbheema/",
  email: "sairithvik1209@gmail.com",
  status: "Open to Data Analyst & Entry-Level Roles · B.E. 2026 Graduate",
  resumeUrl: "/resume.pdf",
  resumeFileName: "Sai_Rithvik_Bheema_Resume.pdf",
};

export const modeData = {
  'data-ai': {
    modeKey: 'data-ai' as const,
    label: 'Data & AI',
    roleTitle: 'Data Analyst | Python · SQL · Power BI | Machine Learning',
    heroHeadline: 'Turning Data Into Intelligence.',
    heroDescription: 'I build data-driven solutions using Python, analytics, machine learning, and cloud technologies to transform information into meaningful insights.',
    badge: 'Analytical Systems & Machine Learning',
    accentColor: 'cyan',
    themeName: 'Cyber Navy & Electric Cyan',
    themeClass: 'theme-data-ai',
    primarySkillHighlight: 'Python · SQL · Pandas · Power BI · Tableau · Scikit-Learn',
    featuredProjectFilter: 'data-ai',
  },
  'core-eng': {
    modeKey: 'core-eng' as const,
    label: 'Core Engineering',
    roleTitle: 'Electrical Engineer | Embedded Systems | Semiconductor Enthusiast',
    heroHeadline: 'Bridging Hardware and Intelligence.',
    heroDescription: 'Exploring the intersection of electrical engineering, embedded systems, semiconductor technology, and intelligent engineering solutions.',
    badge: 'Hardware Systems & Circuit Simulation',
    accentColor: 'orange',
    themeName: 'Obsidian & Electric Amber',
    themeClass: 'theme-core-eng',
    primarySkillHighlight: 'MATLAB · Simulink · Arduino · Circuit Analysis · IoT',
    featuredProjectFilter: 'core-eng',
  }
};

export const aboutContent = {
  title: "A Little About Me",
  paragraphs: [
    "I'm an Electrical and Electronics Engineering graduate from Chaitanya Bharathi Institute of Technology, Hyderabad, with a multidisciplinary interest in technology.",
    "My journey spans Python development, data analytics, machine learning, cloud technologies, and core electrical engineering. I enjoy exploring how software, data, and hardware can work together to solve practical problems.",
    "From building analytical dashboards and cloud-hosted applications to developing simulation-based engineering projects, I continuously explore technologies that bridge theoretical knowledge and practical implementation.",
    "I'm interested in opportunities where I can apply my technical skills, learn from experienced professionals, and contribute to meaningful engineering and technology projects."
  ],
  quickPillars: [
    {
      title: "Data & Artificial Intelligence",
      description: "Python-driven data pipelines, exploratory analytics, statistical modeling, and machine learning architectures.",
      category: "Software & Data"
    },
    {
      title: "Core Electrical Engineering",
      description: "Circuit analysis, power systems, simulation modeling in MATLAB/Simulink, and semiconductor fundamentals.",
      category: "Hardware & Systems"
    },
    {
      title: "Embedded Systems & IoT",
      description: "Sensor integration, microcontrollers (Arduino Nano), real-time safety automation, and hardware-software interfacing.",
      category: "Integration"
    },
    {
      title: "Cloud Infrastructure",
      description: "Cloud fundamentals with AWS (S3, AWS Console) for static web hosting and scalable data storage.",
      category: "Cloud & Dev"
    }
  ]
};

export const educationData: EducationItem = {
  institution: "Chaitanya Bharathi Institute of Technology (CBIT)",
  shortInstitution: "CBIT Hyderabad",
  degree: "Bachelor of Engineering — Electrical and Electronics Engineering (EEE)",
  location: "Hyderabad, Telangana, India",
  period: "2022 – 2026 (Graduated June 2026)",
  cgpa: "7.54",
  status: "Graduated",
  highlights: [
    "Rigorous curriculum in Electrical & Electronics Engineering with interdisciplinary computing coursework.",
    "Active contributor across technical societies including IEEE CBIT CAS Society.",
    "Specialized coursework in Circuit Analysis, Power Systems, Microcontrollers, and Control Systems."
  ]
};

export const experienceData: ExperienceItem[] = [
  {
    id: "viswam-ai",
    company: "VISWAM.AI",
    role: "AI Development Intern",
    period: "May 2025 – August 2025",
    location: "Remote (Part-time)",
    type: "Internship",
    summary: "Part-time remote internship working on AI development tasks with Python.",
    responsibilities: [
      "Worked on AI development tasks using Python in a remote, part-time internship.",
      "Gained exposure to DevOps practices alongside AI application development."
    ],
    technologies: ["Python", "AI Development", "DevOps"]
  },
  {
    id: "aicte-python-fullstack",
    company: "AICTE — EduSkills Academy",
    role: "Python Full Stack Developer Virtual Intern",
    period: "October 2024 – December 2024",
    location: "Remote (10 Weeks)",
    type: "AICTE Virtual Internship",
    summary: "Completed a 10-week intensive Python Full Stack Developer Virtual Internship under the National Internship Portal by AICTE and EduSkills Academy.",
    responsibilities: [
      "Engaged in a 10-week full stack developer program under the Ministry of Education's National Internship Portal.",
      "Developed modular server-side logic and backend workflows utilizing Python programming fundamentals.",
      "Implemented database integration, API communication structures, and full-stack software development principles.",
      "Awarded Official Certificate of Virtual Internship (Certificate ID: c3c029f641394de52f412a30a28521e0)."
    ],
    technologies: ["Python", "Full Stack Development", "Database Integration", "Backend Engineering", "REST APIs"]
  },
  {
    id: "aicte-google-aiml",
    company: "AICTE — EduSkills (Google for Developers)",
    role: "AI-ML Virtual Intern",
    period: "July 2024 – September 2024",
    location: "Remote (10 Weeks)",
    type: "AICTE Virtual Internship",
    summary: "Successfully completed a 10-week AI-ML Virtual Internship supported by Google for Developers India Edu Program and NEAT Cell, AICTE, achieving an 'E' (Excellent) grade.",
    responsibilities: [
      "Completed 10 weeks of structured training and hands-on implementations in Artificial Intelligence and Machine Learning supported by Google for Developers.",
      "Built machine learning models, implemented data preprocessing pipelines, and explored neural network architectures.",
      "Evaluated model metrics, loss functions, and inference pipelines using Python-based ML frameworks.",
      "Earned Grade 'E' (Excellent) with Certificate ID: 5382c0174e791a0fb8e62aa3ed7513a1."
    ],
    technologies: ["Python", "Machine Learning", "Neural Networks", "Data Preprocessing", "Google for Developers"]
  },
  {
    id: "bytexl",
    company: "ByteXL",
    role: "Python Developer Intern",
    period: "June 2024 – August 2024",
    location: "Remote",
    type: "Internship",
    summary: "Worked on Python development and programming-related tasks during a remote internship, strengthening my practical programming knowledge and software development skills.",
    responsibilities: [
      "Developed and debugged Python scripts for programming-oriented workflows and algorithmic problems.",
      "Strengthened practical understanding of object-oriented programming, data structures, and code modularization.",
      "Collaborated remotely on coding tasks, adhering to clean programming standards and documentation."
    ],
    technologies: ["Python", "Algorithm Design", "Data Structures", "Git"]
  },
  {
    id: "ieee-cbit",
    company: "IEEE CBIT Student Branch",
    role: "CAS Society Member | Documentation Team",
    period: "Active Member",
    location: "CBIT, Hyderabad",
    type: "Technical Society",
    summary: "Managed key technical documentation, communications, and logistical execution for prestigious engineering society events.",
    responsibilities: [
      "Managed documentation and event-related communications for chapter activities.",
      "Created technical captions and outreach descriptions for Instagram and WhatsApp channels.",
      "Prepared official event reports and attendance-related documentation for institutional review.",
      "Contributed to IEEE CBIT social media management and brand reach.",
      "Supported Udbhava technical festival events and participant registrations.",
      "Co-hosted an offline IEEE masterclass in 2024 for student members."
    ],
    technologies: ["Technical Writing", "Documentation", "Public Speaking", "Event Management"]
  },
  {
    id: "cbitalks",
    company: "CBITalks",
    role: "Head of Design Department",
    period: "March 2024 – January 2025",
    location: "CBIT, Hyderabad",
    type: "Leadership & Creative Direction",
    summary: "Led the creative design team for the premier campus podcast club, overseeing brand identity and visual outreach.",
    responsibilities: [
      "Led the design department for the CBITalks podcast club, mentoring design peers and delegating creative assets.",
      "Contributed to overarching creative direction, podcast visual communication, and thumbnail aesthetics.",
      "Supported branding and promotional design activities across campus events and digital touchpoints."
    ],
    technologies: ["Creative Direction", "Figma", "Canva", "Visual Branding", "Team Leadership"]
  }
];

export const projectsData: Project[] = [
  {
    id: "geothermal-desalination-h2",
    title: "Simulation and Machine Learning-Based Optimization of Geothermal-Powered Desalination for Green Hydrogen Production",
    shortTitle: "Geothermal Desalination & Green H₂ Optimization",
    category: "Core Engineering | Machine Learning | MATLAB",
    categoryMode: "core-eng",
    featuredIn: "both",
    isFlagship: true,
    tagline: "Multidisciplinary simulation integrating renewable geothermal energy, RO desalination, energy recovery, and ML hydrogen rate prediction.",
    description: "Developed a simulation-based engineering project integrating geothermal energy, reverse osmosis desalination, and green hydrogen production. The system explores energy recovery from reject brine and uses machine learning to predict hydrogen production rates.",
    detailedDescription: "This flagship engineering project establishes an end-to-end mathematical simulation that pairs clean geothermal heat with reverse osmosis (RO) desalination to generate feed water for zero-carbon green hydrogen production. By modeling energy recovery from high-pressure reject brine through a Pelton turbine, the system minimizes auxiliary power requirements. Machine learning models (Artificial Neural Networks) trained on simulation datasets accurately predict hydrogen yield under fluctuating thermodynamic parameters, while Bayesian Optimization finds optimal operating setpoints.",
    technologies: [
      "MATLAB",
      "Python",
      "Artificial Neural Networks (ANN)",
      "Bayesian Optimization",
      "Machine Learning",
      "Reverse Osmosis Simulation",
      "Data Analysis"
    ],
    keyHighlights: [
      "Geothermal energy integration with multi-stage thermodynamic modeling.",
      "Reverse osmosis desalination modeling for clean feed water extraction.",
      "Machine learning prediction of green hydrogen production rates using neural networks.",
      "Energy recovery modeled using a Pelton turbine on high-pressure reject brine.",
      "Parametric system optimization executed with Bayesian Optimization algorithms.",
      "Related review co-authored and published in IJSCI, Vol. 3 Issue 4 (April 2026)."
    ],
    systemHighlights: [
      { title: "Renewable Power Feed", detail: "Geothermal cycle delivers baseload clean power and thermal energy." },
      { title: "Desalination & Recovery", detail: "RO membrane simulation with Pelton turbine recovering energy from reject stream." },
      { title: "Predictive Intelligence", detail: "ANN neural network predicts production rate based on temp, pressure, and flow." },
      { title: "Global Optimization", detail: "Bayesian optimization maximizes yield per kilowatt-hour of energy input." }
    ],
    statusBadge: "Engineering Simulation & ML Model"
  },
  {
    id: "ai-report-generator",
    title: "AI Report Generator — Automated CSV Analysis & Business Reporting",
    shortTitle: "AI Report Generator",
    category: "Data Analytics | Automation | Python",
    categoryMode: "data-ai",
    featuredIn: "data-ai",
    isFlagship: false,
    tagline: "Upload any CSV and get automated analysis, statistical summaries and business insights in a Streamlit app.",
    description: "A Python and Streamlit tool that automates business reporting: upload a CSV, and the app cleans and analyses it with Pandas, generates statistical summaries and visualisations, and surfaces business insights.",
    detailedDescription: "Built to cut repetitive manual reporting. The app ingests structured CSV data, cleans and transforms it with Pandas, computes statistical summaries, and presents the results and insights in an interactive Streamlit interface. Typical uses include sales analysis, operational reporting and data-driven decision making.",
    technologies: [
      "Python",
      "Pandas",
      "Streamlit",
      "Data Cleaning",
      "Exploratory Data Analysis",
      "Report Automation"
    ],
    keyHighlights: [
      "CSV upload with automated cleaning and transformation in Pandas.",
      "Automatic statistical summaries and dataset visualisations.",
      "Business insights presented in a simple Streamlit interface.",
      "Replaces repetitive manual reporting steps with a repeatable pipeline."
    ],
    githubUrl: "https://github.com/rithvikbheema/AI-Report-generator",
    statusBadge: "Python Automation Tool"
  },
  {
    id: "netflix-data-visualization",
    title: "Netflix Content Patterns & Catalog Analytics",
    shortTitle: "Netflix Data Visualization",
    category: "Data Analytics | Business Intelligence",
    categoryMode: "data-ai",
    featuredIn: "data-ai",
    isFlagship: false,
    tagline: "Interactive dashboards on Netflix catalog data built with Amazon S3 and QuickSight.",
    description: "Explored Netflix content data and developed interactive visualizations to uncover patterns, trends, and insights using Amazon QuickSight.",
    detailedDescription: "Uploaded the Netflix titles dataset to Amazon S3 and connected it to Amazon QuickSight. Built an interactive dashboard with bar charts, donut charts and tables to explore how content is distributed by type, genre, rating, country and release year, and used it to answer specific questions about the catalog.",
    technologies: [
      "Amazon QuickSight",
      "AWS",
      "Data Analytics",
      "Data Visualization",
      "Exploratory Data Analysis"
    ],
    keyHighlights: [
      "Dataset stored in Amazon S3 and connected to QuickSight.",
      "Bar charts, donut charts and tables for catalog breakdowns.",
      "Filters by content type, rating, country and release year.",
      "Answered specific questions about the catalog from the dashboard."
    ],
    statusBadge: "BI Cloud Dashboard"
  },
  {
    id: "road-safety-blind-curves",
    title: "Road Safety Enhancement at Blind Curves",
    shortTitle: "IoT Blind Curve Road Safety System",
    category: "Embedded Systems | IoT",
    categoryMode: "core-eng",
    featuredIn: "core-eng",
    isFlagship: false,
    tagline: "Microcontroller-based embedded safety warning system alerting drivers approaching dangerous mountain and highway blind turns.",
    description: "Developed an Arduino Nano-based road safety system designed to improve visibility and alert drivers approaching blind curves using ultrasonic sensors, LEDs, and buzzers.",
    detailedDescription: "Designed and tested a prototype embedded safety device aimed at reducing vehicular collisions at sharp, obstructed blind bends. An Arduino Nano micro-controller interfaces with ultrasonic transceivers stationed along approach vectors. The system computes vehicle distance and velocity vectors to activate coordinated high-visibility LED beacons and audible buzzer alarms for oncoming traffic.",
    technologies: [
      "Arduino Nano",
      "Ultrasonic Sensors",
      "Embedded C/C++",
      "LEDs",
      "Buzzer",
      "Sensor Integration",
      "Circuit Prototyping"
    ],
    keyHighlights: [
      "Real-time blind curve approach detection using ultrasonic sonar.",
      "High-luminance multi-stage warning LEDs for approaching motorists.",
      "Audible proximity-based buzzer alerts calibrated for safety margins.",
      "Low-power embedded C/C++ logic executed on Arduino Nano."
    ],
    systemHighlights: [
      { title: "Sensing Node", detail: "Ultrasonic rangefinders sampling vehicle entry." },
      { title: "Processing Unit", detail: "Arduino Nano microcontroller executing real-time threshold logic." },
      { title: "Warning Display", detail: "Staged LED beacons providing immediate visual warning." }
    ],
    statusBadge: "Embedded Hardware Prototype"
  },
  {
    id: "sql-movie-recommendation",
    title: "SQL Movie Recommendation System",
    shortTitle: "SQL & SVD Recommendation Engine",
    category: "Data Analytics | Machine Learning",
    categoryMode: "data-ai",
    featuredIn: "data-ai",
    isFlagship: false,
    tagline: "Collaborative filtering recommendation engine leveraging SQL database queries and Singular Value Decomposition (SVD).",
    description: "Explored movie recommendation techniques using SQL and collaborative filtering concepts, including Singular Value Decomposition (SVD).",
    detailedDescription: "Engineered a recommendation framework combining relational database queries with matrix factorization. Utilized SQL for efficient user-item matrix assembly, data aggregation, and candidate filtering. Implemented Singular Value Decomposition (SVD) in Python to uncover latent preference vectors and generate personalized title recommendations.",
    technologies: [
      "Python",
      "SQL",
      "Machine Learning",
      "Singular Value Decomposition (SVD)",
      "Collaborative Filtering",
      "Matrix Factorization"
    ],
    keyHighlights: [
      "Relational data querying and user rating extraction with structured SQL.",
      "Collaborative filtering using latent factor modeling with SVD.",
      "Matrix decomposition handling sparse user-rating representations.",
      "Evaluation of personalized recommendation ranking."
    ],
    statusBadge: "ML Algorithm & Database Querying"
  },
  {
    id: "s3-website-hosting",
    title: "Cloud Static Website Hosting on Amazon S3",
    shortTitle: "AWS S3 Static Cloud Hosting",
    category: "Cloud Computing",
    categoryMode: "both",
    featuredIn: "both",
    isFlagship: false,
    tagline: "Architecting cloud static website hosting with Amazon S3 bucket policies and web infrastructure fundamentals.",
    description: "Hosted a website using Amazon S3, exploring cloud storage, static website hosting, and AWS infrastructure fundamentals.",
    detailedDescription: "Configured resilient static web asset hosting using Amazon Simple Storage Service (S3). Managed bucket policies, public access permissions, index/error document endpoints, and MIME type routing, developing a hands-on foundation in cloud deployment and object storage architectures.",
    technologies: [
      "AWS",
      "Amazon S3",
      "HTML",
      "CSS",
      "Cloud Storage Policies",
      "Web Infrastructure"
    ],
    keyHighlights: [
      "Amazon S3 bucket configuration for high-availability static web delivery.",
      "Fine-grained IAM and bucket policy permission management.",
      "DNS endpoint and error routing setup.",
      "Practical foundation in cloud infrastructure provisioning."
    ],
    statusBadge: "Cloud Infrastructure Deployment"
  },
  {
    id: "platformer-game",
    title: "Interactive 2D Platformer Game",
    shortTitle: "2D Platformer Game",
    category: "Software Development",
    categoryMode: "both",
    featuredIn: "both",
    isFlagship: false,
    tagline: "Custom 2D platformer game exploring core game loop, character physics, collision detection, and interactive gameplay mechanics.",
    description: "Developed a 2D platformer game as a programming project, exploring gameplay mechanics and interactive software development.",
    detailedDescription: "Designed an interactive 2D desktop game focusing on fundamental software development concepts: frame-based game loops, 2D kinematic physics, bounding box collision detection, state machines for character movement, and event handling for responsive user inputs.",
    technologies: [
      "Python",
      "Object-Oriented Programming",
      "Game Loop Architecture",
      "Kinematic Physics",
      "Interactive Software"
    ],
    keyHighlights: [
      "Custom kinematic physics for jumping, gravity, and velocity.",
      "AABB collision detection between character and environment tiles.",
      "State machine managing idle, run, and airborne animations.",
      "Modular code architecture applying OOP principles."
    ],
    statusBadge: "Interactive Software Project"
  }
];

export const skillsData: Record<'data-ai' | 'core-eng', SkillGroup[]> = {
  'data-ai': [
    {
      category: "Programming & Querying",
      description: "Core languages used for data processing, scripting, and application logic.",
      skills: [
        { name: "Python", level: "Practical Application", badge: "Primary Language" },
        { name: "SQL", level: "Practical Application", badge: "Data Querying" },
        { name: "C", level: "Academic Knowledge", badge: "Systems Programming" },
      ]
    },
    {
      category: "Data Analytics & Business Intelligence",
      description: "Data manipulation, exploratory analysis, and cloud BI dashboards.",
      skills: [
        { name: "Pandas", level: "Practical Application" },
        { name: "NumPy", level: "Practical Application" },
        { name: "Matplotlib", level: "Practical Application" },
        { name: "Power BI", level: "Practical Application", badge: "BI Dashboards" },
        { name: "Tableau", level: "Practical Application" },
        { name: "Amazon QuickSight", level: "Practical Application", badge: "Cloud BI" },
        { name: "Excel", level: "Practical Application" },
        { name: "Statistics", level: "Practical Application" },
      ]
    },
    {
      category: "Machine Learning & AI",
      description: "Predictive modeling, neural networks, and computer vision libraries.",
      skills: [
        { name: "Scikit-learn", level: "Practical Application" },
        { name: "TensorFlow", level: "Academic Knowledge" },
        { name: "Keras", level: "Academic Knowledge" },
        { name: "OpenCV", level: "Active Exploration" },
      ]
    },
    {
      category: "Cloud Computing & AWS",
      description: "Cloud infrastructure, storage management, and deployment.",
      skills: [
        { name: "AWS", level: "Practical Application" },
        { name: "Amazon S3", level: "Practical Application", badge: "Static Hosting" },
        { name: "AWS Management Console", level: "Practical Application" },
      ]
    },
    {
      category: "Developer Tools & Simulation",
      description: "Version control, interactive notebooks, and computational environments.",
      skills: [
        { name: "Git", level: "Practical Application" },
        { name: "GitHub", level: "Practical Application" },
        { name: "Jupyter Notebook", level: "Practical Application" },
        { name: "Streamlit", level: "Practical Application" },
        { name: "MATLAB", level: "Practical Application" },
      ]
    }
  ],
  'core-eng': [
    {
      category: "Electrical & Electronics Engineering",
      description: "Core electrical sciences, power flow, and system behavior.",
      skills: [
        { name: "EEE Fundamentals", level: "Practical Application", badge: "Core Degree" },
        { name: "Circuit Analysis", level: "Practical Application" },
        { name: "Power Systems", level: "Academic Knowledge" },
        { name: "Electrical Measurements", level: "Academic Knowledge" },
        { name: "MATLAB Simulation", level: "Practical Application" },
        { name: "Simulink", level: "Academic Knowledge" },
      ]
    },
    {
      category: "Embedded Systems & Hardware",
      description: "Microcontroller programming, sensor acquisition, and physical computing.",
      skills: [
        { name: "Arduino Nano", level: "Practical Application", badge: "Hardware Prototyping" },
        { name: "Microcontrollers", level: "Practical Application" },
        { name: "Embedded C / C++", level: "Practical Application" },
        { name: "Sensor Integration", level: "Practical Application" },
        { name: "IoT Fundamentals", level: "Active Exploration" },
      ]
    },
    {
      category: "VLSI & Semiconductor Engineering",
      description: "Solid-state physics, digital logic, and integrated circuit design fundamentals.",
      skills: [
        { name: "Digital Electronics", level: "Academic Knowledge" },
        { name: "VLSI Fundamentals", level: "Academic Knowledge", badge: "Special Interest" },
        { name: "Semiconductor Engineering", level: "Active Exploration" },
        { name: "Hardware Design Fundamentals", level: "Academic Knowledge" },
      ]
    },
    {
      category: "Design, Modeling & Technical Tools",
      description: "Simulation tools and visual communication design suites.",
      skills: [
        { name: "MATLAB", level: "Practical Application" },
        { name: "Simulink", level: "Academic Knowledge" },
        { name: "Figma", level: "Practical Application", badge: "UI / Design" },
        { name: "Canva", level: "Practical Application", badge: "Visual Branding" },
      ]
    }
  ]
};

export const publicationsData: PublicationItem[] = [
  {
    id: "ijsci-geothermal-h2-review",
    title: "Geothermal-based Integrated Systems for Hydrogen Production – A Review",
    authors: ["Vijay Raviprabhakaran", "Rithvik Bheema Sai", "Sai Ganesh Tammannagari", "Haindavi Rao Kotte", "Purmi Jacinth"],
    highlightAuthor: "Rithvik Bheema Sai",
    venue: "International Journal of Sciences and Innovation Engineering (IJSCI)",
    details: "Vol. 3, Issue 4, pp. 2974–2982",
    published: "April 2026",
    type: "Journal article · Open access",
    doi: "10.70849/ijsci03042600927",
    url: "https://ijsci.com/paper-details.php/51700927/geothermal-based-integrated-systems-for-hydrogen-production-a-review",
    pdfUrl: "https://www.researchgate.net/publication/404438300_Geothermal-based_integrated_systems_for_hydrogen_production_-A_Review",
    summary: "Reviews geothermal-powered systems that combine Organic Rankine Cycle power generation, reverse osmosis desalination and PEM electrolysis for green hydrogen, and proposes a simplified framework that uses simulation, data-driven models to predict system behaviour, and optimisation to find operating conditions that improve hydrogen yield and energy efficiency.",
    keywords: ["Green Hydrogen", "Geothermal Energy", "Desalination", "Data-Driven Modelling", "Optimisation"]
  }
];

export const certificationsData: CertificationItem[] = [
  {
    id: "oci-ds-professional",
    title: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
    issuer: "Oracle",
    field: "Data Science & Cloud",
    description: "Professional-level Oracle certification covering the data science lifecycle on Oracle Cloud Infrastructure, from data preparation to model building and deployment.",
    verifiedStatus: "Oracle Certified"
  },
  {
    id: "oci-ai-foundations",
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    field: "Artificial Intelligence Fundamentals",
    description: "Foundational Oracle certification covering core AI and machine learning concepts and the AI services available on Oracle Cloud Infrastructure.",
    verifiedStatus: "Oracle Certified"
  },
  {
    id: "deloitte-da-sim",
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte Australia",
    field: "Data Analytics",
    description: "Virtual job simulation completing practical data analysis and data handling tasks in a consulting context.",
    verifiedStatus: "Completed Simulation"
  },
  {
    id: "google-aiml",
    title: "Google AI-ML Virtual Internship Program",
    issuer: "AICTE & EduSkills (Supported by Google for Developers)",
    field: "Artificial Intelligence & Machine Learning",
    description: "10-week intensive training program focusing on foundational AI/ML methodologies, neural networks, data preprocessing, and model evaluation workflows. Achieved Grade 'E' (Excellent).",
    verifiedStatus: "Certificate ID: 5382c0174e791a0fb8e62aa3ed7513a1"
  },
  {
    id: "aicte-python-fs",
    title: "Python Full Stack Developer Virtual Internship",
    issuer: "AICTE & EduSkills Academy (Ministry of Education)",
    field: "Python & Full Stack Development",
    description: "10-week national virtual internship covering Python backend scripting, database integration, API architecture, and full-stack software development fundamentals.",
    verifiedStatus: "Certificate ID: c3c029f641394de52f412a30a28521e0"
  },
  {
    id: "infosys-ds",
    title: "Infosys Data Science Foundation",
    issuer: "Infosys Springboard",
    field: "Data Science & Analytical Thinking",
    description: "Comprehensive coursework covering statistical foundations, data wrangling pipelines, exploratory analysis, and core data science toolchains.",
    verifiedStatus: "Verified Foundation Certificate"
  },
  {
    id: "linkedin-da",
    title: "Data Analytics Certification",
    issuer: "LinkedIn Learning",
    field: "Business Intelligence & Data Analysis",
    description: "Professional certification validating data analysis workflows, metric formulation, visualization best practices, and executive reporting.",
    verifiedStatus: "Completed Certification"
  }
];
