
    (() => {
      "use strict";

      /* ------------------------------------------------------------------
         Curated, verifiably free resources.
         Links point to the official publisher / repository page.
         ------------------------------------------------------------------ */
      const RESOURCES = [
  {
    "id": "anatomy-physiology-2e",
    "title": "Anatomy & Physiology 2e",
    "authorsShort": "J. Gordon Betts et al.",
    "authorsFull": "J. Gordon Betts, Kelly A. Young, James A. Wise, Eddie Johnson, Brandon Poe, Dean H. Kruse, Oksana Korol, Jody E. Johnson, Mark Womble & Peter DeSaix",
    "category": "basic",
    "subject": "Anatomy & Physiology",
    "type": "Open textbook",
    "source": "OpenStax",
    "publisher": "OpenStax at Rice University",
    "edition": "2nd edition",
    "year": "2022",
    "access": "Open access",
    "license": "OpenStax open licence",
    "accessNote": "Free to read online and download from OpenStax. No sign-in is required for the web edition.",
    "link": "https://openstax.org/details/books/anatomy-and-physiology-2e",
    "description": "A highly visual, peer-reviewed foundation in human anatomy and physiology. Clear diagrams, chapter reviews and clinical connections make it one of the most accessible starting points for medical study.",
    "code": "A&P",
    "theme": "blue",
    "icon": "heartPulse",
    "tags": [
      "anatomy",
      "physiology",
      "histology",
      "homeostasis",
      "cells",
      "organ systems",
      "openstax"
    ],
    "sections": [
      "anatomy",
      "physiology",
      "faculty-of-medicine"
    ]
  },
  {
    "id": "human-physiology-wikibooks",
    "title": "Human Physiology",
    "authorsShort": "Wikibooks contributors",
    "authorsFull": "Wikibooks contributors",
    "category": "basic",
    "subject": "Physiology",
    "type": "Open textbook",
    "source": "Wikibooks",
    "publisher": "Wikibooks",
    "edition": "Living edition",
    "year": "Continuously updated",
    "access": "Free to read",
    "license": "CC BY-SA",
    "accessNote": "Free to read on Wikibooks, the open-content textbook project. The content is community-authored and openly licensed.",
    "link": "https://en.wikibooks.org/wiki/Human_Physiology",
    "description": "A collaboratively written guide to how the body works, from homeostasis and nerve signalling to circulation, respiration and reproduction. Useful for quick concept review and a systems-based overview.",
    "code": "HP",
    "theme": "navy",
    "icon": "pulse",
    "tags": [
      "physiology",
      "homeostasis",
      "nervous system",
      "cardiovascular",
      "respiration",
      "wikibooks"
    ],
    "sections": [
      "physiology",
      "faculty-of-medicine"
    ]
  },
  {
    "id": "openstax-microbiology",
    "title": "Microbiology",
    "authorsShort": "Nina Parker et al.",
    "authorsFull": "Nina Parker, Mark Schneegurt, Anh-Hue Thi Tu, Brian M. Forster & Philip Lister",
    "category": "basic",
    "subject": "Microbiology",
    "type": "Open textbook",
    "source": "OpenStax",
    "publisher": "OpenStax at Rice University",
    "edition": "OpenStax edition",
    "year": "2016",
    "access": "Open access",
    "license": "OpenStax open licence",
    "accessNote": "Free to read online and download from OpenStax. No sign-in is required for the web edition.",
    "link": "https://openstax.org/details/books/microbiology",
    "description": "A peer-reviewed introduction to microbial biology, pathogenesis, immunology and applied microbiology. Clinical case studies connect foundational science to real patient care.",
    "code": "MB",
    "theme": "blue",
    "icon": "microbe",
    "tags": [
      "microbiology",
      "bacteriology",
      "virology",
      "immunology",
      "pathogens",
      "openstax"
    ],
    "sections": [
      "microbiology",
      "faculty-of-medicine"
    ]
  },
  {
    "id": "medical-microbiology-baron",
    "title": "Medical Microbiology",
    "authorsShort": "Samuel Baron, editor",
    "authorsFull": "Samuel Baron (Editor)",
    "category": "basic",
    "subject": "Microbiology",
    "type": "Textbook",
    "source": "NCBI Bookshelf",
    "publisher": "University of Texas Medical Branch at Galveston",
    "edition": "4th edition",
    "year": "1996",
    "access": "Free to read",
    "license": "Free on NCBI Bookshelf",
    "accessNote": "The full text is available free of charge on NCBI Bookshelf. Copyright and publisher terms apply.",
    "link": "https://www.ncbi.nlm.nih.gov/books/NBK7627/",
    "description": "An established NCBI Bookshelf textbook covering immunology, bacteriology, virology, mycology and parasitology, with clinical case material woven throughout.",
    "code": "MM",
    "theme": "navy",
    "icon": "microscope",
    "tags": [
      "microbiology",
      "immunology",
      "bacteriology",
      "virology",
      "parasitology",
      "ncbi"
    ],
    "sections": [
      "microbiology"
    ]
  },
  {
    "id": "who-model-formulary-2008",
    "title": "WHO Model Formulary 2008",
    "authorsShort": "Stuart, Kouimtzi & Hill, editors",
    "authorsFull": "Mark C. Stuart, Maria Kouimtzi & Suzanne R. Hill (Editors)",
    "category": "basic",
    "subject": "Pharmacology",
    "type": "Formulary",
    "source": "WHO",
    "publisher": "World Health Organization",
    "edition": "2008 edition",
    "year": "2008",
    "access": "Free download",
    "license": "CC BY-NC-SA 3.0 IGO",
    "accessNote": "Free to download from the World Health Organization. Reuse is governed by the CC BY-NC-SA 3.0 IGO licence.",
    "link": "https://www.who.int/publications/i/item/9789241547659",
    "description": "A practical, internationally focused guide to prescribing essential medicines, with information on dosing, contraindications and therapeutic use aligned to the WHO Model List.",
    "code": "WMF",
    "theme": "gold",
    "icon": "pill",
    "tags": [
      "pharmacology",
      "therapeutics",
      "essential medicines",
      "prescribing",
      "drugs",
      "who"
    ],
    "sections": [
      "pharmacology",
      "faculty-of-medicine"
    ]
  },
  {
    "id": "clinical-methods",
    "title": "Clinical Methods: The History, Physical, and Laboratory Examinations",
    "authorsShort": "Walker, Hall & Hurst, editors",
    "authorsFull": "H. Kenneth Walker, W. Dallas Hall & J. Willis Hurst (Editors)",
    "category": "clinical",
    "subject": "Internal Medicine",
    "type": "Textbook",
    "source": "NCBI Bookshelf",
    "publisher": "Butterworths",
    "edition": "3rd edition",
    "year": "1990",
    "access": "Free to read",
    "license": "Free on NCBI Bookshelf",
    "accessNote": "Free full text on NCBI Bookshelf. Copyright and publisher terms apply.",
    "link": "https://www.ncbi.nlm.nih.gov/books/NBK201/",
    "description": "A classic guide to the clinical history, physical examination and laboratory investigation. Its system-by-system chapters make it a practical companion for internal medicine and bedside learning.",
    "code": "CM",
    "theme": "blue",
    "icon": "stethoscope",
    "tags": [
      "internal medicine",
      "physical examination",
      "history taking",
      "laboratory",
      "diagnosis",
      "clinical skills",
      "ncbi"
    ],
    "sections": [
      "internal-medicine",
      "faculty-of-medicine"
    ]
  },
  {
    "id": "merck-manual-professional",
    "title": "Merck Manual Professional Version",
    "authorsShort": "Merck Manuals editorial team",
    "authorsFull": "Merck Manuals editorial staff",
    "category": "clinical",
    "subject": "Internal Medicine",
    "type": "Clinical reference",
    "source": "Merck Manuals",
    "publisher": "Merck Sharp & Dohme LLC",
    "edition": "Professional version",
    "year": "Updated continuously",
    "access": "Free to read",
    "license": "Publisher terms apply",
    "accessNote": "Free to read on the official Merck Manuals Professional website. No subscription is required for the core reference.",
    "link": "https://www.merckmanuals.com/professional",
    "description": "A trusted point-of-care reference covering the diagnosis and treatment of thousands of conditions across internal medicine and its specialties. Concise, searchable and continually updated.",
    "code": "MMP",
    "theme": "navy",
    "icon": "clipboard",
    "tags": [
      "internal medicine",
      "diagnosis",
      "treatment",
      "clinical reference",
      "disease",
      "merck"
    ],
    "sections": [
      "internal-medicine",
      "cardiology",
      "endocrinology",
      "gastroenterology",
      "emergency-medicine",
      "faculty-of-medicine"
    ]
  },
  {
    "id": "primary-surgery-non-trauma",
    "title": "Primary Surgery, Volume One: Non-Trauma",
    "authorsShort": "Michael Cotton, editor",
    "authorsFull": "Michael Cotton (Editor)",
    "category": "clinical",
    "subject": "General Surgery",
    "type": "Surgical textbook",
    "source": "Global HELP",
    "publisher": "GHO Publications / Global HELP",
    "edition": "2nd edition",
    "year": "2024",
    "access": "Free PDF",
    "license": "Free to download",
    "accessNote": "Free PDF download from Global HELP. No account is required.",
    "link": "https://global-help.org/products/primary-surgery-vol-1/",
    "description": "A field-tested surgical manual for resource-limited settings, covering the principles of operative care and common non-trauma procedures with clear, step-by-step guidance.",
    "code": "PS",
    "theme": "blue",
    "icon": "scalpel",
    "tags": [
      "surgery",
      "operative care",
      "non-trauma",
      "clinical procedures",
      "global help"
    ],
    "sections": [
      "general-surgery",
      "anatomical-surgery",
      "faculty-of-medicine"
    ]
  },
  {
    "id": "who-pocket-book-children",
    "title": "Pocket Book of Hospital Care for Children",
    "authorsShort": "World Health Organization",
    "authorsFull": "World Health Organization",
    "category": "clinical",
    "subject": "Pediatrics",
    "type": "Clinical manual",
    "source": "WHO IRIS",
    "publisher": "World Health Organization",
    "edition": "2nd edition",
    "year": "2013",
    "access": "Free download",
    "license": "Free access · WHO terms",
    "accessNote": "Free to read and download from WHO IRIS (Institutional Repository for Information Sharing).",
    "link": "https://iris.who.int/handle/10665/81170",
    "description": "A practical bedside guide to managing common childhood illnesses at first-referral hospitals, from emergency triage and treatment to ongoing care.",
    "code": "PB",
    "theme": "gold",
    "icon": "child",
    "tags": [
      "pediatrics",
      "paediatrics",
      "child health",
      "hospital care",
      "who",
      "iris"
    ],
    "sections": [
      "pediatrics",
      "faculty-of-medicine"
    ]
  },
  {
    "id": "who-intrapartum-care",
    "title": "WHO Recommendations: Intrapartum Care for a Positive Childbirth Experience",
    "authorsShort": "World Health Organization",
    "authorsFull": "World Health Organization",
    "category": "clinical",
    "subject": "Obstetrics & Gynecology",
    "type": "Clinical guideline",
    "source": "WHO",
    "publisher": "World Health Organization",
    "edition": "Guideline",
    "year": "2018",
    "access": "Free download",
    "license": "CC BY-NC-SA 3.0 IGO",
    "accessNote": "Free to download from the World Health Organization. Reuse is governed by the CC BY-NC-SA 3.0 IGO licence.",
    "link": "https://www.who.int/publications/i/item/9789241550215",
    "description": "A consolidated WHO guideline on care during labour and childbirth, covering assessment, pain relief, monitoring and respectful, woman-centred maternity care.",
    "code": "IPC",
    "theme": "navy",
    "icon": "obgyn",
    "tags": [
      "obstetrics",
      "gynecology",
      "gynaecology",
      "labour",
      "labor",
      "childbirth",
      "maternal health",
      "who guidelines",
      "guidelines",
      "who"
    ],
    "sections": [
      "obstetrics-gynecology",
      "faculty-of-medicine"
    ]
  },
  {
    "id": "who-antenatal-care",
    "title": "WHO Recommendations on Antenatal Care for a Positive Pregnancy Experience",
    "authorsShort": "World Health Organization",
    "authorsFull": "World Health Organization",
    "category": "clinical",
    "subject": "Maternal Health",
    "type": "Clinical guideline",
    "source": "WHO",
    "publisher": "World Health Organization",
    "edition": "Guideline",
    "year": "2016",
    "access": "Free download",
    "license": "CC BY-NC-SA 3.0 IGO",
    "accessNote": "Free to download from the World Health Organization. Reuse is governed by the CC BY-NC-SA 3.0 IGO licence.",
    "link": "https://www.who.int/publications/i/item/9789241549912",
    "description": "A comprehensive, person-centred WHO guideline on routine antenatal care, bringing together evidence-based recommendations on nutrition, screening, preventive care and service delivery.",
    "code": "ANC",
    "theme": "gold",
    "icon": "heartPulse",
    "tags": [
      "obstetrics",
      "maternal health",
      "antenatal care",
      "pregnancy",
      "who guidelines",
      "guidelines",
      "who"
    ],
    "sections": [
      "obstetrics-gynecology",
      "faculty-of-medicine"
    ]
  },
  {
    "id": "who-hand-hygiene",
    "title": "WHO Guidelines on Hand Hygiene in Health Care",
    "authorsShort": "World Health Organization",
    "authorsFull": "World Health Organization",
    "category": "reference",
    "subject": "Infection Prevention",
    "type": "Clinical guideline",
    "source": "WHO",
    "publisher": "World Health Organization",
    "edition": "Guideline",
    "year": "2009",
    "access": "Free download",
    "license": "Free access · WHO terms",
    "accessNote": "Free to read and download from the World Health Organization. Copyright and WHO terms apply.",
    "link": "https://www.who.int/publications/i/item/9789241597906",
    "description": "WHO’s landmark guidance on hand hygiene in health care: the evidence base, practical techniques and implementation strategies for reducing health-care-associated infection.",
    "code": "HH",
    "theme": "paper",
    "icon": "droplet",
    "tags": [
      "infection prevention",
      "hand hygiene",
      "patient safety",
      "infection control",
      "who guidelines",
      "guidelines",
      "who"
    ],
    "sections": [
      "guidelines-open-references"
    ]
  },
  {
    "id": "who-guidelines-collection",
    "title": "WHO Guidelines",
    "authorsShort": "World Health Organization",
    "authorsFull": "World Health Organization",
    "category": "reference",
    "subject": "Global Health",
    "type": "Reference collection",
    "source": "WHO",
    "publisher": "World Health Organization",
    "edition": "Digital collection",
    "year": "Current",
    "access": "Free to browse",
    "license": "Publisher terms apply",
    "accessNote": "Browse WHO’s official evidence-based guidelines. No account is required.",
    "link": "https://www.who.int/publications/who-guidelines",
    "description": "A single entry point to WHO’s evidence-based guidelines, approved by the Guidelines Review Committee. Browse recommendations across maternal health, infectious disease, surgery and more.",
    "code": "WHO",
    "theme": "gold",
    "icon": "shield",
    "tags": [
      "guidelines",
      "global health",
      "evidence-based",
      "public health",
      "who guidelines",
      "who"
    ],
    "sections": [
      "guidelines-open-references",
      "faculty-of-medicine"
    ]
  },
  {
    "id": "ncbi-bookshelf",
    "title": "NCBI Bookshelf",
    "authorsShort": "NCBI · U.S. National Library of Medicine",
    "authorsFull": "National Center for Biotechnology Information, U.S. National Library of Medicine",
    "category": "reference",
    "subject": "Biomedical Literature",
    "type": "Reference collection",
    "source": "NCBI",
    "publisher": "U.S. National Library of Medicine",
    "edition": "Digital library",
    "year": "Current",
    "access": "Free to browse",
    "license": "Publisher terms apply",
    "accessNote": "Search and read thousands of full-text biomedical books and reports on NCBI Bookshelf. No account is required.",
    "link": "https://www.ncbi.nlm.nih.gov/books/",
    "description": "The National Library of Medicine’s free full-text archive of biomedical books and reports. An essential starting point for authoritative references beyond the core collection.",
    "code": "NCBI",
    "theme": "paper",
    "icon": "library",
    "tags": [
      "bookshelf",
      "biomedical",
      "reference",
      "ncbi",
      "nlm",
      "library",
      "full text"
    ],
    "sections": [
      "guidelines-open-references",
      "faculty-of-medicine"
    ]
  },
  {
    "id": "openstax-collection",
    "title": "OpenStax",
    "authorsShort": "OpenStax at Rice University",
    "authorsFull": "OpenStax at Rice University",
    "category": "reference",
    "subject": "Open Education",
    "type": "Reference collection",
    "source": "OpenStax",
    "publisher": "OpenStax at Rice University",
    "edition": "Open textbook collection",
    "year": "Current",
    "access": "Free to browse",
    "license": "Openly licensed",
    "accessNote": "Browse peer-reviewed, openly licensed textbooks. Individual titles may carry different Creative Commons licences.",
    "link": "https://openstax.org/subjects/science",
    "description": "Peer-reviewed, openly licensed college textbooks from Rice University’s nonprofit OpenStax. Explore free titles in biology, anatomy and physiology, microbiology and beyond.",
    "code": "OS",
    "theme": "blue",
    "icon": "openBook",
    "tags": [
      "open textbooks",
      "openstax",
      "science",
      "education",
      "open access",
      "biology"
    ],
    "sections": [
      "guidelines-open-references",
      "faculty-of-medicine"
    ]
  },
  {
    "id": "anatomy-atlases",
    "title": "Anatomy Atlases",
    "authorsShort": "Ronald A. Bergman et al.",
    "authorsFull": "Ronald A. Bergman and contributors",
    "category": "basic",
    "subject": "Anatomy",
    "type": "Anatomy atlas",
    "source": "Anatomy Atlases",
    "publisher": "Anatomy Atlases",
    "edition": "Digital atlas",
    "year": "Current",
    "access": "Free to browse",
    "license": "Publisher terms apply",
    "accessNote": "Free to browse the atlas collection online. No account is required.",
    "link": "https://www.anatomyatlases.org/",
    "description": "A digital library of human anatomy featuring cross-sectional atlases, illustrated anatomical variation and historical anatomy texts. Especially useful for visual review and surgical anatomy.",
    "code": "AA",
    "theme": "navy",
    "icon": "bone",
    "tags": [
      "anatomy",
      "cross-sectional anatomy",
      "surgical anatomy",
      "atlas",
      "human anatomy"
    ],
    "sections": [
      "anatomy",
      "anatomical-surgery"
    ]
  },
  {
    "id": "grays-anatomy-1918",
    "title": "Anatomy of the Human Body (Gray’s Anatomy)",
    "authorsShort": "Henry Gray & Warren H. Lewis",
    "authorsFull": "Henry Gray; revised by Warren H. Lewis",
    "category": "basic",
    "subject": "Anatomy",
    "type": "Historical reference",
    "source": "Wikisource",
    "publisher": "Lea & Febiger / Wikisource",
    "edition": "20th edition",
    "year": "1918",
    "access": "Public domain",
    "license": "Public domain",
    "accessNote": "The complete public-domain text and illustrations are freely available. Use current clinical sources for modern practice.",
    "link": "https://en.wikisource.org/wiki/Anatomy_of_the_Human_Body",
    "description": "The classic public-domain edition of Gray’s Anatomy, with more than a thousand historical illustrations. A valuable reference for anatomical terminology, classical descriptions and the history of medicine.",
    "code": "GRAY",
    "theme": "paper",
    "icon": "bone",
    "tags": [
      "anatomy",
      "classic textbook",
      "public domain",
      "medical history",
      "surgical anatomy"
    ],
    "sections": [
      "anatomy",
      "anatomical-surgery",
      "faculty-of-medicine"
    ]
  },
  {
    "id": "biochemistry-free-for-all",
    "title": "Biochemistry Free For All",
    "authorsShort": "Kevin Ahern et al.",
    "authorsFull": "Kevin Ahern, Indira Rajagopal & Taralyn Tan",
    "category": "basic",
    "subject": "Biochemistry",
    "type": "Open textbook",
    "source": "Open Oregon State",
    "publisher": "Oregon State University",
    "edition": "Open edition",
    "year": "Current",
    "access": "Open access",
    "license": "Openly licensed",
    "accessNote": "Free to read online through Open Oregon State. No account is required.",
    "link": "https://open.oregonstate.education/biochemfreeforall/",
    "description": "A student-friendly, openly licensed biochemistry textbook covering biomolecules, metabolism, enzymes and molecular biology. Concise explanations and practice questions make it easy to revisit core concepts.",
    "code": "BFFA",
    "theme": "blue",
    "icon": "molecule",
    "tags": [
      "biochemistry",
      "metabolism",
      "enzymes",
      "molecular biology",
      "open textbook"
    ],
    "sections": [
      "biochemistry",
      "faculty-of-medicine"
    ]
  },
  {
    "id": "libretexts-biochemistry",
    "title": "Biochemistry (LibreTexts)",
    "authorsShort": "LibreTexts contributors",
    "authorsFull": "LibreTexts contributors",
    "category": "basic",
    "subject": "Biochemistry",
    "type": "Open textbook library",
    "source": "LibreTexts",
    "publisher": "LibreTexts",
    "edition": "Open collection",
    "year": "Current",
    "access": "Open access",
    "license": "Openly licensed",
    "accessNote": "Free to read online through LibreTexts. No account is required.",
    "link": "https://bio.libretexts.org/Bookshelves/Biochemistry",
    "description": "A modular open collection of biochemistry texts spanning molecular structure, bioenergetics, metabolism and molecular biology. Useful for targeted reading and quick revision by topic.",
    "code": "BCH",
    "theme": "gold",
    "icon": "molecule",
    "tags": [
      "biochemistry",
      "metabolism",
      "bioenergetics",
      "molecular biology",
      "libretexts"
    ],
    "sections": [
      "biochemistry"
    ]
  },
  {
    "id": "openstax-psychology-2e",
    "title": "Psychology 2e",
    "authorsShort": "Rose M. Spielman et al.",
    "authorsFull": "Rose M. Spielman, William J. Jenkins & Marilyn D. Lovett",
    "category": "basic",
    "subject": "Behavioral Science",
    "type": "Open textbook",
    "source": "OpenStax",
    "publisher": "OpenStax at Rice University",
    "edition": "2nd edition",
    "year": "2020",
    "access": "Open access",
    "license": "OpenStax open licence",
    "accessNote": "Free to read online and download from OpenStax. No sign-in is required for the web edition.",
    "link": "https://openstax.org/details/books/psychology-2e",
    "description": "A peer-reviewed introduction to psychology and behavior, covering learning, memory, development, emotion and mental health. Broad enough to support behavioral science foundations in medicine.",
    "code": "PSY",
    "theme": "gold",
    "icon": "brain",
    "tags": [
      "behavioral science",
      "psychology",
      "mental health",
      "development",
      "openstax"
    ],
    "sections": [
      "behavioral-science",
      "faculty-of-medicine"
    ]
  },
  {
    "id": "who-mhgap-intervention-guide",
    "title": "mhGAP Intervention Guide 2.0",
    "authorsShort": "World Health Organization",
    "authorsFull": "World Health Organization",
    "category": "basic",
    "subject": "Behavioral Science",
    "type": "Mental health guideline",
    "source": "WHO",
    "publisher": "World Health Organization",
    "edition": "Version 2.0",
    "year": "2016",
    "access": "Free download",
    "license": "WHO terms apply",
    "accessNote": "Free to download from the World Health Organization. Copyright and WHO terms apply.",
    "link": "https://www.who.int/publications/i/item/9789241549790",
    "description": "WHO’s practical guide for assessing and managing priority mental, neurological and substance-use conditions in non-specialist settings. A strong bridge between behavioral science and frontline clinical care.",
    "code": "MH",
    "theme": "navy",
    "icon": "brain",
    "tags": [
      "behavioral science",
      "mental health",
      "psychiatry",
      "mhgap",
      "who"
    ],
    "sections": [
      "behavioral-science"
    ]
  },
  {
    "id": "dna-from-the-beginning",
    "title": "DNA from the Beginning",
    "authorsShort": "Cold Spring Harbor Laboratory",
    "authorsFull": "Cold Spring Harbor Laboratory DNA Learning Center",
    "category": "basic",
    "subject": "DNA & Genetics",
    "type": "Interactive learning resource",
    "source": "DNA Learning Center",
    "publisher": "Cold Spring Harbor Laboratory",
    "edition": "Digital resource",
    "year": "Current",
    "access": "Free to access",
    "license": "Publisher terms apply",
    "accessNote": "Free to use on the DNA Learning Center website. No account is required.",
    "link": "https://www.dnaftb.org/",
    "description": "An illustrated, interactive introduction to genes, DNA and heredity built around classic experiments. Its concise concept modules are useful for building genetics foundations before clinical genetics.",
    "code": "DNA",
    "theme": "blue",
    "icon": "dna",
    "tags": [
      "dna",
      "genetics",
      "genes",
      "heredity",
      "molecular biology"
    ],
    "sections": [
      "dna-genetics",
      "faculty-of-medicine"
    ]
  },
  {
    "id": "modern-genetic-analysis",
    "title": "Modern Genetic Analysis",
    "authorsShort": "Anthony J. F. Griffiths et al.",
    "authorsFull": "Anthony J. F. Griffiths, William M. Gelbart, Jeffrey H. Miller & Richard C. Lewontin",
    "category": "basic",
    "subject": "DNA & Genetics",
    "type": "Open textbook",
    "source": "NCBI Bookshelf",
    "publisher": "W. H. Freeman / NCBI Bookshelf",
    "edition": "1st edition",
    "year": "1999",
    "access": "Free to read",
    "license": "Free on NCBI Bookshelf",
    "accessNote": "Free full text on NCBI Bookshelf. Copyright and publisher terms apply.",
    "link": "https://www.ncbi.nlm.nih.gov/books/NBK21172/",
    "description": "A rigorous genetics textbook covering gene structure, mutation, recombination, genomes and molecular techniques. A deeper reference for students moving from DNA basics to genetic analysis.",
    "code": "MGA",
    "theme": "navy",
    "icon": "dna",
    "tags": [
      "dna",
      "genetics",
      "genomics",
      "genes",
      "mutation",
      "ncbi"
    ],
    "sections": [
      "dna-genetics"
    ]
  },
  {
    "id": "human-nutrition-hawaii",
    "title": "Human Nutrition",
    "authorsShort": "University of Hawai‘i at Mānoa",
    "authorsFull": "University of Hawai‘i at Mānoa Food Science and Human Nutrition Program",
    "category": "basic",
    "subject": "Food Science & Nutrition",
    "type": "Open textbook",
    "source": "UH Pressbooks",
    "publisher": "University of Hawai‘i",
    "edition": "Open edition",
    "year": "Current",
    "access": "Open access",
    "license": "CC BY",
    "accessNote": "Free to read online through University of Hawai‘i Pressbooks. No account is required.",
    "link": "https://pressbooks.oer.hawaii.edu/humannutrition/",
    "description": "An open textbook covering nutrients, digestion, energy balance and nutrition across the life course. Links food science principles to health, disease prevention and patient counselling.",
    "code": "HN",
    "theme": "gold",
    "icon": "food",
    "tags": [
      "food science",
      "nutrition",
      "diet",
      "macronutrients",
      "micronutrients",
      "health"
    ],
    "sections": [
      "food-science"
    ]
  },
  {
    "id": "food-preparation-lab-manual",
    "title": "Basic Scientific Food Preparation Lab Manual",
    "authorsShort": "Iowa State University Department of FSHN",
    "authorsFull": "Iowa State University Department of Food Science and Human Nutrition",
    "category": "basic",
    "subject": "Food Science & Nutrition",
    "type": "Open lab manual",
    "source": "Open Textbook Library",
    "publisher": "Iowa State University Digital Press",
    "edition": "Open edition",
    "year": "2023",
    "access": "Open access",
    "license": "CC BY-NC-SA",
    "accessNote": "Free to read online and download through the Open Textbook Library. No account is required.",
    "link": "https://open.umn.edu/opentextbooks/textbooks/1211",
    "description": "A practical food science laboratory manual covering preservation, starch cookery, dairy, eggs, meat, gluten and more. Each unit includes objectives, experiments and observation charts.",
    "code": "FPL",
    "theme": "paper",
    "icon": "food",
    "tags": [
      "food science",
      "food preparation",
      "food safety",
      "laboratory manual",
      "nutrition"
    ],
    "sections": [
      "food-science"
    ]
  },
  {
    "id": "cardiovascular-physiology-concepts",
    "title": "Cardiovascular Physiology Concepts",
    "authorsShort": "Richard E. Klabunde",
    "authorsFull": "Richard E. Klabunde",
    "category": "clinical",
    "subject": "Cardiology",
    "type": "Open textbook",
    "source": "CV Physiology",
    "publisher": "Lippincott Williams & Wilkins / CV Physiology",
    "edition": "Online edition",
    "year": "Current",
    "access": "Free to read",
    "license": "Publisher terms apply",
    "accessNote": "Free to read online on CV Physiology. No account is required.",
    "link": "https://cvphysiology.com/",
    "description": "A clear, clinically oriented explanation of cardiac and vascular physiology, from excitation–contraction coupling to blood pressure regulation and heart failure. Designed to make physiology usable at the bedside.",
    "code": "CVP",
    "theme": "blue",
    "icon": "heartPulse",
    "tags": [
      "cardiology",
      "cardiovascular",
      "physiology",
      "heart failure",
      "blood pressure"
    ],
    "sections": [
      "cardiology",
      "faculty-of-medicine"
    ]
  },
  {
    "id": "ecgpedia",
    "title": "ECGpedia",
    "authorsShort": "ECGpedia contributors",
    "authorsFull": "ECGpedia editorial team and contributors",
    "category": "clinical",
    "subject": "Cardiology",
    "type": "ECG reference",
    "source": "ECGpedia",
    "publisher": "ECGpedia",
    "edition": "Digital reference",
    "year": "Current",
    "access": "Free to access",
    "license": "Publisher terms apply",
    "accessNote": "Free to browse the ECG reference online. No account is required.",
    "link": "https://en.ecgpedia.org/wiki/Main_Page",
    "description": "A structured ECG reference covering normal rhythms, conduction disease, arrhythmias, ischemia and hypertrophy, with explanatory tracings. A useful companion for cardiology and clinical skills revision.",
    "code": "ECG",
    "theme": "navy",
    "icon": "pulse",
    "tags": [
      "cardiology",
      "ecg",
      "ekg",
      "arrhythmia",
      "electrocardiogram"
    ],
    "sections": [
      "cardiology"
    ]
  },
  {
    "id": "ecg-wave-maven",
    "title": "ECG Wave-Maven",
    "authorsShort": "Beth Israel Deaconess Medical Center",
    "authorsFull": "Beth Israel Deaconess Medical Center, Harvard Medical School",
    "category": "clinical",
    "subject": "Cardiology",
    "type": "ECG case bank",
    "source": "BIDMC",
    "publisher": "Beth Israel Deaconess Medical Center",
    "edition": "Case library",
    "year": "Current",
    "access": "Free to use",
    "license": "Publisher terms apply",
    "accessNote": "Free to access the ECG case library. No account is required.",
    "link": "https://ecg.bidmc.harvard.edu/maven/mavenmain.asp",
    "description": "A case-based ECG learning bank from Harvard-affiliated clinicians. Work through real tracings, commit to an interpretation and review the explanation — excellent for self-testing.",
    "code": "WAVE",
    "theme": "gold",
    "icon": "pulse",
    "tags": [
      "cardiology",
      "ecg",
      "ekg",
      "cases",
      "quiz",
      "arrhythmia"
    ],
    "sections": [
      "cardiology",
      "all-examinations"
    ]
  },
  {
    "id": "endotext",
    "title": "Endotext",
    "authorsShort": "Kenneth R. Feingold et al., editors",
    "authorsFull": "Kenneth R. Feingold, Bradley Anawalt, M. Carol Greenfield, et al. (Editors)",
    "category": "clinical",
    "subject": "Endocrinology",
    "type": "Open textbook",
    "source": "NCBI Bookshelf",
    "publisher": "MDText.com / NCBI Bookshelf",
    "edition": "Living textbook",
    "year": "Current",
    "access": "Free to read",
    "license": "Free on NCBI Bookshelf",
    "accessNote": "Free full text on NCBI Bookshelf. Copyright and publisher terms apply.",
    "link": "https://www.ncbi.nlm.nih.gov/books/NBK278930/",
    "description": "A comprehensive, continuously updated endocrine textbook spanning diabetes, thyroid disease, adrenal and pituitary disorders, bone metabolism and reproductive endocrinology.",
    "code": "ENDO",
    "theme": "navy",
    "icon": "thyroid",
    "tags": [
      "endocrinology",
      "diabetes",
      "thyroid",
      "adrenal",
      "pituitary",
      "hormones",
      "ncbi"
    ],
    "sections": [
      "endocrinology",
      "faculty-of-medicine"
    ]
  },
  {
    "id": "wgo-global-guidelines",
    "title": "WGO Global Guidelines",
    "authorsShort": "World Gastroenterology Organisation",
    "authorsFull": "World Gastroenterology Organisation",
    "category": "clinical",
    "subject": "Gastroenterology",
    "type": "Clinical guideline collection",
    "source": "WGO",
    "publisher": "World Gastroenterology Organisation",
    "edition": "Digital collection",
    "year": "Current",
    "access": "Free to access",
    "license": "Publisher terms apply",
    "accessNote": "Free to access the guideline library. No account is required.",
    "link": "https://www.worldgastroenterology.org/guidelines",
    "description": "An internationally focused library of gastroenterology guidelines, with cascades of care for common and complex digestive conditions. Particularly relevant to resource-variable clinical settings.",
    "code": "WGO",
    "theme": "gold",
    "icon": "stomach",
    "tags": [
      "gastroenterology",
      "gi",
      "guidelines",
      "digestive disease",
      "hepatology",
      "wgo"
    ],
    "sections": [
      "gastroenterology",
      "faculty-of-medicine"
    ]
  },
  {
    "id": "acg-clinical-guidelines",
    "title": "ACG Clinical Guidelines",
    "authorsShort": "American College of Gastroenterology",
    "authorsFull": "American College of Gastroenterology",
    "category": "clinical",
    "subject": "Gastroenterology",
    "type": "Clinical guideline collection",
    "source": "ACG",
    "publisher": "American College of Gastroenterology",
    "edition": "Digital collection",
    "year": "Current",
    "access": "Free to access",
    "license": "Publisher terms apply",
    "accessNote": "Guidelines are freely available on the ACG website. Copyright and publisher terms apply.",
    "link": "https://gi.org/guidelines/",
    "description": "Evidence-based clinical guidelines from the American College of Gastroenterology, covering common gastrointestinal and hepatobiliary conditions with clear diagnostic and treatment recommendations.",
    "code": "ACG",
    "theme": "blue",
    "icon": "stomach",
    "tags": [
      "gastroenterology",
      "gi",
      "guidelines",
      "hepatology",
      "evidence-based",
      "acg"
    ],
    "sections": [
      "gastroenterology"
    ]
  },
  {
    "id": "who-basic-emergency-care",
    "title": "Basic Emergency Care: Approach to the Acutely Ill and Injured",
    "authorsShort": "World Health Organization & ICRC",
    "authorsFull": "World Health Organization & International Committee of the Red Cross",
    "category": "clinical",
    "subject": "Emergency Medicine",
    "type": "Clinical manual",
    "source": "WHO",
    "publisher": "World Health Organization",
    "edition": "Guideline",
    "year": "2018",
    "access": "Free download",
    "license": "WHO terms apply",
    "accessNote": "Free to download from the World Health Organization. Copyright and WHO terms apply.",
    "link": "https://www.who.int/publications/i/item/9789241513081",
    "description": "A practical, algorithm-based manual for the initial assessment and management of acutely ill and injured patients. Designed for frontline clinicians and students working in low-resource settings.",
    "code": "BEC",
    "theme": "gold",
    "icon": "emergency",
    "tags": [
      "emergency medicine",
      "trauma",
      "acute care",
      "triage",
      "resuscitation",
      "who"
    ],
    "sections": [
      "emergency-medicine",
      "faculty-of-medicine"
    ]
  },
  {
    "id": "wikem",
    "title": "WikEM: The Global Emergency Medicine Wiki",
    "authorsShort": "WikEM contributors",
    "authorsFull": "WikEM editorial community",
    "category": "clinical",
    "subject": "Emergency Medicine",
    "type": "Emergency reference",
    "source": "WikEM",
    "publisher": "WikEM",
    "edition": "Living reference",
    "year": "Current",
    "access": "Free to access",
    "license": "Community reference terms",
    "accessNote": "Free to browse the emergency medicine reference. No account is required.",
    "link": "https://wikem.org/wiki/Main_Page",
    "description": "A rapid-access emergency medicine reference and case resource built by clinicians. Its concise pages are useful for shift preparation, differential diagnosis and quick review of emergency presentations.",
    "code": "WIK",
    "theme": "navy",
    "icon": "emergency",
    "tags": [
      "emergency medicine",
      "acute care",
      "clinical reference",
      "trauma",
      "wikem"
    ],
    "sections": [
      "emergency-medicine"
    ]
  },
  {
    "id": "who-surgical-care-district-hospital",
    "title": "Surgical Care at the District Hospital",
    "authorsShort": "World Health Organization",
    "authorsFull": "World Health Organization",
    "category": "clinical",
    "subject": "General Surgery",
    "type": "Clinical manual",
    "source": "WHO",
    "publisher": "World Health Organization",
    "edition": "Manual",
    "year": "2003",
    "access": "Free download",
    "license": "WHO terms apply",
    "accessNote": "Free to download from the World Health Organization. Copyright and WHO terms apply.",
    "link": "https://www.who.int/publications/i/item/9241545755",
    "description": "A practical surgical manual for district hospitals, covering anaesthesia, operative care, trauma, obstetrics and essential surgical procedures in resource-limited settings.",
    "code": "SCDH",
    "theme": "blue",
    "icon": "scalpel",
    "tags": [
      "surgery",
      "general surgery",
      "surgical anatomy",
      "district hospital",
      "anaesthesia",
      "who"
    ],
    "sections": [
      "general-surgery",
      "anatomical-surgery",
      "faculty-of-medicine"
    ]
  },
  {
    "id": "who-imci-chart-booklet",
    "title": "Integrated Management of Childhood Illness: Chart Booklet",
    "authorsShort": "World Health Organization",
    "authorsFull": "World Health Organization",
    "category": "clinical",
    "subject": "Pediatrics",
    "type": "Clinical chart booklet",
    "source": "WHO",
    "publisher": "World Health Organization",
    "edition": "March 2014 edition",
    "year": "2014",
    "access": "Free download",
    "license": "WHO terms apply",
    "accessNote": "Free to download from the World Health Organization. Copyright and WHO terms apply.",
    "link": "https://www.who.int/publications/m/item/integrated-management-of-childhood-illness---chart-booklet-(March-2014)",
    "description": "WHO’s IMCI chart booklet supports the assessment, classification and treatment of sick children in outpatient and first-level facilities. A concise, practical companion for paediatric clerkships.",
    "code": "IMCI",
    "theme": "gold",
    "icon": "child",
    "tags": [
      "pediatrics",
      "paediatrics",
      "child health",
      "imci",
      "who",
      "clinical guideline"
    ],
    "sections": [
      "pediatrics",
      "faculty-of-medicine"
    ]
  },
  {
    "id": "who-aware-antibiotic-book",
    "title": "The WHO AWaRe Antibiotic Book",
    "authorsShort": "World Health Organization",
    "authorsFull": "World Health Organization",
    "category": "basic",
    "subject": "Pharmacology",
    "type": "Antibiotic guide",
    "source": "WHO",
    "publisher": "World Health Organization",
    "edition": "2022 edition",
    "year": "2022",
    "access": "Free download",
    "license": "WHO terms apply",
    "accessNote": "Free to download from the World Health Organization. Copyright and WHO terms apply.",
    "link": "https://www.who.int/publications/i/item/9789240062382",
    "description": "A practical guide to appropriate antibiotic prescribing using the WHO Access, Watch and Reserve framework. Covers common infections, first-line choices and stewardship principles.",
    "code": "AWaRe",
    "theme": "navy",
    "icon": "pill",
    "tags": [
      "pharmacology",
      "microbiology",
      "antibiotics",
      "antimicrobial stewardship",
      "aware",
      "who"
    ],
    "sections": [
      "pharmacology",
      "microbiology",
      "faculty-of-medicine"
    ]
  },
  {
    "id": "stanford-medicine-25-videos",
    "title": "Stanford Medicine 25 Video Gallery",
    "authorsShort": "Stanford Medicine",
    "authorsFull": "Stanford Medicine 25, Stanford University School of Medicine",
    "category": "exams",
    "subject": "Clinical Examination Videos",
    "type": "Video library",
    "source": "Stanford Medicine",
    "publisher": "Stanford University School of Medicine",
    "edition": "Video gallery",
    "year": "Current",
    "access": "Free to view",
    "license": "Publisher terms apply",
    "accessNote": "Free to watch the video gallery online. No account is required.",
    "link": "https://stanfordmedicine25.stanford.edu/videos.html",
    "description": "A polished video gallery demonstrating bedside physical examination techniques, from cardiac and pulmonary exams to neurologic and musculoskeletal assessment.",
    "code": "S25",
    "theme": "blue",
    "icon": "video",
    "tags": [
      "clinical examination",
      "physical exam",
      "examination videos",
      "bedside medicine",
      "communication"
    ],
    "sections": [
      "clinical-examination-videos",
      "examination-videos",
      "faculty-of-medicine"
    ]
  },
  {
    "id": "geeky-medics-video-library",
    "title": "Geeky Medics Video Library",
    "authorsShort": "Geeky Medics",
    "authorsFull": "Geeky Medics editorial team and clinical contributors",
    "category": "exams",
    "subject": "Examination Videos",
    "type": "Video library",
    "source": "Geeky Medics",
    "publisher": "Geeky Medics",
    "edition": "Video library",
    "year": "Current",
    "access": "Free to view",
    "license": "Mixed free / premium content",
    "accessNote": "Many videos are free to watch; some Geeky Medics resources require a paid subscription.",
    "link": "https://geekymedics.com/type/video/",
    "description": "A large video library of clinical examinations, procedures, ECG interpretation and OSCE skills. Clear demonstrations and stepwise checklists make it useful for skills practice and revision.",
    "code": "GM",
    "theme": "gold",
    "icon": "video",
    "tags": [
      "clinical examination",
      "osce",
      "examination videos",
      "ecg",
      "clinical skills",
      "procedures"
    ],
    "sections": [
      "examination-videos",
      "clinical-examination-videos",
      "ecg-videos"
    ]
  },
  {
    "id": "geeky-medics-osce-stations",
    "title": "Geeky Medics OSCE Stations",
    "authorsShort": "Geeky Medics",
    "authorsFull": "Geeky Medics editorial team and clinical contributors",
    "category": "exams",
    "subject": "All Examinations",
    "type": "OSCE examination bank",
    "source": "Geeky Medics",
    "publisher": "Geeky Medics",
    "edition": "Digital station bank",
    "year": "Current",
    "access": "Free core stations",
    "license": "Mixed free / premium content",
    "accessNote": "Many OSCE stations and checklists are free to access; some resources require a paid Geeky Medics subscription.",
    "link": "https://geekymedics.com/osce-stations/",
    "description": "A broad bank of OSCE stations with histories, examinations, communication scenarios and marking checklists. Well suited to exam preparation and peer practice.",
    "code": "OSCE",
    "theme": "navy",
    "icon": "clipboard",
    "tags": [
      "all examinations",
      "osce",
      "clinical examination",
      "history taking",
      "clinical skills",
      "exam preparation"
    ],
    "sections": [
      "all-examinations"
    ]
  },
  {
    "id": "merck-manual-quizzes",
    "title": "Merck Manual Quizzes & Cases",
    "authorsShort": "Merck Manuals editorial staff",
    "authorsFull": "Merck Manuals editorial staff",
    "category": "exams",
    "subject": "All Examinations",
    "type": "Question bank",
    "source": "Merck Manuals",
    "publisher": "Merck Sharp & Dohme LLC",
    "edition": "Quizzes and clinical cases",
    "year": "Current",
    "access": "Free to use",
    "license": "Publisher terms apply",
    "accessNote": "Free to use on the official Merck Manuals Professional website. No subscription is required for the core quiz content.",
    "link": "https://www.merckmanuals.com/professional/pages-with-widgets/quizzes?media=full",
    "description": "Clinical quizzes and case-based questions drawn from one of medicine’s most established references. A quick way to test diagnostic reasoning and treatment knowledge across specialties.",
    "code": "MQC",
    "theme": "blue",
    "icon": "clipboard",
    "tags": [
      "all examinations",
      "quiz",
      "clinical cases",
      "internal medicine",
      "exam preparation",
      "merck"
    ],
    "sections": [
      "all-examinations"
    ]
  },
  {
    "id": "wfsa-aolc",
    "title": "WFSA Anaesthesiology Online Learning Community",
    "authorsShort": "World Federation of Societies of Anaesthesiologists",
    "authorsFull": "World Federation of Societies of Anaesthesiologists",
    "category": "clinical",
    "subject": "Anaesthesia",
    "type": "Anaesthesia learning platform",
    "source": "WFSA",
    "publisher": "World Federation of Societies of Anaesthesiologists",
    "edition": "Digital learning community",
    "year": "Current",
    "access": "Free — account required",
    "license": "Publisher terms apply",
    "accessNote": "Free to join and use; a free WFSA account is required to access tutorials, webinars, e-learning courses and recorded content.",
    "link": "https://wfsahq.org/resources/aolc/",
    "description": "WFSA’s free learning community for anaesthesia professionals, bringing together peer-reviewed tutorials, Update in Anaesthesia, webinars and e-learning in one place.",
    "code": "AOLC",
    "theme": "gold",
    "icon": "mask",
    "tags": [
      "anaesthesia",
      "anesthesia",
      "webinars",
      "e-learning",
      "airway",
      "wfsa"
    ],
    "sections": [
      "anaesthesia",
      "anaesthesia-videos"
    ]
  },
  {
    "id": "wfsa-webinars",
    "title": "WFSA Anaesthesia Webinars",
    "authorsShort": "World Federation of Societies of Anaesthesiologists",
    "authorsFull": "World Federation of Societies of Anaesthesiologists",
    "category": "clinical",
    "subject": "Anaesthesia",
    "type": "Webinar library",
    "source": "WFSA",
    "publisher": "World Federation of Societies of Anaesthesiologists",
    "edition": "Recorded webinar library",
    "year": "Current",
    "access": "Free to view",
    "license": "Publisher terms apply",
    "accessNote": "Live and recorded webinars are freely available on the WFSA website. No account is required to view the page.",
    "link": "https://wfsahq.org/resources/webinars/",
    "description": "Live and recorded anaesthesia webinars with international faculty on clinical practice, patient safety and global anaesthesia. A flexible way to hear current thinking and case discussions.",
    "code": "WFSA",
    "theme": "navy",
    "icon": "video",
    "tags": [
      "anaesthesia videos",
      "anaesthesia",
      "anesthesia",
      "webinars",
      "patient safety",
      "wfsa"
    ],
    "sections": [
      "anaesthesia-videos",
      "anaesthesia"
    ]
  },
  {
    "id": "who-iris",
    "title": "WHO IRIS",
    "authorsShort": "World Health Organization",
    "authorsFull": "World Health Organization",
    "category": "reference",
    "subject": "Open References",
    "type": "Open repository",
    "source": "WHO IRIS",
    "publisher": "World Health Organization",
    "edition": "Digital repository",
    "year": "Current",
    "access": "Free to browse",
    "license": "Publisher terms apply",
    "accessNote": "Free to search and download WHO publications from the Institutional Repository for Information Sharing. No account is required.",
    "link": "https://iris.who.int/",
    "description": "WHO’s institutional repository for publications, guidelines, reports and technical documents. A direct route to the global-health evidence behind many of the clinical resources in this library.",
    "code": "IRIS",
    "theme": "paper",
    "icon": "library",
    "tags": [
      "who",
      "guidelines",
      "global health",
      "reports",
      "repository",
      "open references"
    ],
    "sections": [
      "guidelines-open-references"
    ]
  },
  {
    "id": "carter-center-health-publications",
    "title": "Carter Center Health Publications",
    "authorsShort": "The Carter Center",
    "authorsFull": "The Carter Center",
    "category": "reference",
    "subject": "Carter Center Books",
    "type": "Health publications collection",
    "source": "The Carter Center",
    "publisher": "The Carter Center",
    "edition": "Digital publications library",
    "year": "Current",
    "access": "Free to access",
    "license": "Publisher terms apply",
    "accessNote": "Many Carter Center health publications, books and reports can be read or downloaded free of charge. Publisher terms apply.",
    "link": "https://www.cartercenter.org/publications/?_program_type=health",
    "description": "The Carter Center’s health publications library, including books and reports on Guinea worm eradication, trachoma, river blindness, mental health and other global health programmes.",
    "code": "TCC",
    "theme": "gold",
    "icon": "globe",
    "tags": [
      "carter center books",
      "global health",
      "public health",
      "guinea worm",
      "trachoma",
      "mental health",
      "reports"
    ],
    "sections": [
      "carter-center-books"
    ]
  },
  {
    "id": "ecg-basics-video-series",
    "title": "ECG Basics Full Series",
    "authorsShort": "Johnson Francis, MD",
    "authorsFull": "Johnson Francis, MD",
    "category": "exams",
    "subject": "ECG Videos",
    "type": "ECG video series",
    "source": "Johnson Francis",
    "publisher": "Johnson Francis, MD",
    "edition": "Video series",
    "year": "Current",
    "access": "Free to view",
    "license": "Publisher terms apply",
    "accessNote": "Free to watch online. Embedded videos may be hosted on public video platforms.",
    "link": "https://johnsonfrancis.org/professional/ecg-basics-full-series/",
    "description": "A step-by-step video series on ECG basics, rhythm analysis and common abnormalities. Useful for visual learners who want a structured walkthrough before reading tracings independently.",
    "code": "ECGV",
    "theme": "blue",
    "icon": "video",
    "tags": [
      "ecg videos",
      "ecg",
      "ekg",
      "cardiology",
      "video series",
      "examination videos"
    ],
    "sections": [
      "ecg-videos",
      "cardiology"
    ]
  }
];

      const SECTION_GROUPS = [
        {
          id: "basic",
          label: "Basic Sciences",
          sections: [
            { id: "anatomy", label: "Anatomy" },
            { id: "biochemistry", label: "Biochemistry" },
            { id: "behavioral-science", label: "Behavioral Science" },
            { id: "dna-genetics", label: "DNA & Genetics" },
            { id: "food-science", label: "Food Science & Nutrition" },
            { id: "physiology", label: "Physiology" },
            { id: "microbiology", label: "Microbiology" },
            { id: "pharmacology", label: "Pharmacology" }
          ]
        },
        {
          id: "clinical",
          label: "Clinical Sciences",
          sections: [
            { id: "cardiology", label: "Cardiology" },
            { id: "endocrinology", label: "Endocrinology" },
            { id: "gastroenterology", label: "Gastroenterology" },
            { id: "emergency-medicine", label: "Emergency Medicine" },
            { id: "internal-medicine", label: "Internal Medicine" },
            { id: "anatomical-surgery", label: "Anatomical Surgery" },
            { id: "general-surgery", label: "General Surgery" },
            { id: "pediatrics", label: "Pediatrics" },
            { id: "obstetrics-gynecology", label: "Obstetrics & Gynecology" },
            { id: "anaesthesia", label: "Anaesthesia" }
          ]
        },
        {
          id: "exams",
          label: "Exams & Skills",
          sections: [
            { id: "all-examinations", label: "All Examinations" },
            { id: "examination-videos", label: "Examination Videos" },
            { id: "clinical-examination-videos", label: "Clinical Examination Videos" },
            { id: "ecg-videos", label: "ECG Videos" },
            { id: "anaesthesia-videos", label: "Anaesthesia Videos" }
          ]
        },
        {
          id: "reference",
          label: "Collections & References",
          sections: [
            { id: "carter-center-books", label: "Carter Center Books" },
            { id: "faculty-of-medicine", label: "Faculty of Medicine" },
            { id: "guidelines-open-references", label: "Guidelines & Open References" }
          ]
        }
      ];

      const ALL_SECTIONS = SECTION_GROUPS.flatMap((group) =>
        group.sections.map((section) => ({ ...section, group: group.id, groupLabel: group.label }))
      );
      const SECTION_BY_ID = new Map(ALL_SECTIONS.map((section) => [section.id, section]));

      const CATEGORY_LABELS = {
        basic: "Basic Sciences",
        clinical: "Clinical Sciences",
        exams: "Exams & Skills",
        reference: "References & Collections"
      };

      const CATEGORY_SHORT = {
        basic: "Basic sciences",
        clinical: "Clinical sciences",
        exams: "Exams & skills",
        reference: "Reference collections"
      };

      const FILTER_LABELS = {
        all: "All resources",
        basic: "Basic Sciences",
        clinical: "Clinical Sciences",
        exams: "Exams & Skills",
        reference: "References & Collections",
        saved: "My Shelf"
      };

      // Exact category phrases are treated as a category search, not merely a
      // loose full-text match. This keeps "clinical sciences" focused on the
      // clinical collection instead of also matching "clinical" mentions in
      // the descriptions of basic-science books.
      const CATEGORY_QUERY_ALIASES = {
        "basic sciences": "basic",
        "basic science": "basic",
        "clinical sciences": "clinical",
        "clinical science": "clinical",
        "exams & skills": "exams",
        "exams and skills": "exams",
        "exams": "exams",
        "references & collections": "reference",
        "references and collections": "reference",
        "guidelines & open references": "reference",
        "guidelines and open references": "reference",
        "open references": "reference",
        "reference": "reference"
      };

      // Exact section names also jump straight to their specialty. A few
      // common synonyms are provided for terms such as DNA and paediatrics.
      const SECTION_SEARCH_ALIASES = new Map(
        ALL_SECTIONS.map((section) => [section.label.toLowerCase(), section.id])
      );
      Object.entries({
        "dna": "dna-genetics",
        "genetics": "dna-genetics",
        "emergency": "emergency-medicine",
        "food science": "food-science",
        "nutrition": "food-science",
        "paediatrics": "pediatrics",
        "pediatric": "pediatrics",
        "anaesthesia": "anaesthesia",
        "anesthesia": "anaesthesia",
        "gynecology": "obstetrics-gynecology",
        "gynaecology": "obstetrics-gynecology",
        "obgyn": "obstetrics-gynecology",
        "exam videos": "examination-videos",
        "clinical exam videos": "clinical-examination-videos",
        "all exams": "all-examinations",
        "examinations": "all-examinations",
        "carter center": "carter-center-books",
        "guidelines": "guidelines-open-references",
        "faculty": "faculty-of-medicine"
      }).forEach(([alias, sectionId]) => SECTION_SEARCH_ALIASES.set(alias, sectionId));

      const ICON_PATHS = {
        heartPulse: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/><path d="M3.5 12h4l1.7-3.4 3.3 6.8 2-3.4h5.9"/>',
        pulse: '<path d="M3 12h4l2.2-6 4.1 12L16 12h5"/>',
        microscope: '<path d="M6 18h12M9 18v-4.5a3 3 0 0 1 6 0V18M11 6h2M12 3v3M8.5 21h7"/><path d="M5 12.5A7 7 0 0 0 12 19"/>',
        microbe: '<circle cx="12" cy="12" r="5"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/><circle cx="10" cy="11" r=".8" fill="currentColor" stroke="none"/><circle cx="14" cy="13.5" r=".8" fill="currentColor" stroke="none"/>',
        pill: '<path d="m10.5 20.5-7-7a4.95 4.95 0 0 1 7-7l7 7a4.95 4.95 0 0 1-7 7Z"/><path d="m7 10 7 7"/>',
        stethoscope: '<path d="M5 3v6a4 4 0 0 0 8 0V3M3 3h4M11 3h4M9 13v3a5 5 0 0 0 10 0v-2"/><circle cx="19" cy="11" r="2"/>',
        clipboard: '<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V3h6v1M9 9h6M9 13h6M9 17h4"/>',
        scalpel: '<path d="m14 4 6 6-9 9-6 1 1-6 8-10Z"/><path d="m12 6 6 6"/>',
        child: '<circle cx="12" cy="6" r="3"/><path d="M6 21v-4a6 6 0 0 1 12 0v4M9 14v7M15 14v7"/>',
        obgyn: '<circle cx="12" cy="9" r="5"/><path d="M12 14v7M9 18h6"/>',
        shield: '<path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z"/><path d="m8.5 12 2.5 2.5 4.5-5"/>',
        droplet: '<path d="M12 3s6 6.4 6 11a6 6 0 0 1-12 0c0-4.6 6-11 6-11Z"/><path d="M9 15c.8 1 1.8 1.5 3 1.5"/>',
        books: '<path d="M4 4h5v16H4zM9 4h5v16H9zM15 5.5l4 .8-2.7 14.2-4-.8z"/>',
        library: '<path d="M3 21h18M5 21V8l7-4 7 4v13M9 21v-6h6v6M9 11h.01M15 11h.01"/>',
        openBook: '<path d="M12 6C10 4 6.5 3.5 3 4v15c3.5-.5 7 0 9 2 2-2 5.5-2.5 9-2V4c-3.5-.5-7 0-9 2Z"/><path d="M12 6v15"/>'
      };

      const STORAGE_KEY = "gollis.medicalLibrary.shelf.v1";
      const SVG_OPEN = '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">';
      const BOOKMARK_SVG = '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 4.75A1.75 1.75 0 0 1 7.75 3h8.5A1.75 1.75 0 0 1 18 4.75V21l-6-4.25L6 21V4.75Z"/></svg>';
      const ARROW_SVG = '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';

      const RESOURCE_BY_ID = new Map(RESOURCES.map((resource) => [resource.id, resource]));
      const SEARCH_INDEX = new Map();

      if (typeof window === "undefined" || typeof document === "undefined") {
        const categoryCounts = {};
        const sectionCounts = {};

        RESOURCES.forEach((resource) => {
          categoryCounts[resource.category] = (categoryCounts[resource.category] || 0) + 1;
          resource.sections?.forEach((sectionId) => {
            sectionCounts[sectionId] = (sectionCounts[sectionId] || 0) + 1;
          });
        });

        console.log(JSON.stringify({
          total: RESOURCES.length,
          categoryCounts,
          sectionCounts
        }, null, 2));
        return;
      }

      const $ = (selector, root = document) => root.querySelector(selector);
      const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

      const elements = {
        siteHeader: $(".site-header"),
        shelfButton: $("#shelfButton"),
        shelfCount: $("#shelfCount"),
        menuToggle: $("#menuToggle"),
        mobileMenu: $("#mobileMenu"),
        searchForm: $("#searchForm"),
        searchInput: $("#searchInput"),
        searchClear: $("#searchClear"),
        searchKbd: $("#searchKbd"),
        searchStatus: $("#searchStatus"),
        filterButtons: $$("[data-filter]"),
        filterPills: $(".filter-pills"),
        filterJumpButtons: $$("[data-filter-jump]"),
        savedJumpButtons: $$("[data-saved-jump]"),
        bookGrid: $("#bookGrid"),
        emptyState: $("#emptyState"),
        emptyTitle: $("#emptyTitle"),
        emptyText: $("#emptyText"),
        emptyReset: $("#emptyReset"),
        collectionHead: $(".collection-head"),
        libraryTitle: $("#libraryTitle"),
        resultCount: $("#resultCount"),
        resultLabel: $("#resultLabel"),
        resultsMeta: $("#resultsMeta"),
        bookDialog: $("#bookDialog"),
        dialogPanel: $("#dialogPanel"),
        dialogContent: $("#dialogContent"),
        dialogClose: $("#dialogClose"),
        dialogCover: $("#dialogCover"),
        dialogCategory: $("#dialogCategory"),
        dialogTitle: $("#dialogTitle"),
        dialogAuthors: $("#dialogAuthors"),
        dialogTags: $("#dialogTags"),
        dialogDescription: $("#dialogDescription"),
        dialogMeta: $("#dialogMeta"),
        dialogAccess: $("#dialogAccess"),
        dialogLink: $("#dialogLink"),
        dialogLinkText: $("#dialogLinkText"),
        dialogSourceName: $("#dialogSourceName"),
        dialogSave: $("#dialogSave"),
        dialogSaveText: $("#dialogSaveText"),
        toast: $("#toast"),
        toastText: $("#toastText"),
        copyrightYear: $("#copyrightYear")
      };

      let activeFilter = "all";
      let query = "";
      let savedIds = loadSaved();
      let currentResourceId = null;
      let lastFocusedElement = null;
      let menuOpen = false;
      let toastTimer = null;
      let scrollFrame = null;

      /* ------------------------------------------------------------------
         Utilities
         ------------------------------------------------------------------ */
      function iconMarkup(name) {
        return `${SVG_OPEN}${ICON_PATHS[name] || ICON_PATHS.openBook}</svg>`;
      }

      function escapeHTML(value) {
        return String(value).replace(/[&<>"']/g, (character) => ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;"
        })[character]);
      }

      function normalizeText(value) {
        return String(value ?? "")
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase();
      }

      function plural(count, singular, pluralForm) {
        return count === 1 ? singular : pluralForm;
      }

      function prefersReducedMotion() {
        return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      }

      function buildSearchIndex() {
        RESOURCES.forEach((resource) => {
          SEARCH_INDEX.set(resource.id, normalizeText([
            resource.title,
            resource.authorsShort,
            resource.authorsFull,
            resource.category,
            CATEGORY_LABELS[resource.category],
            CATEGORY_SHORT[resource.category],
            resource.subject,
            resource.type,
            resource.source,
            resource.publisher,
            resource.edition,
            resource.year,
            resource.access,
            resource.license,
            resource.description,
            resource.code,
            ...resource.tags
          ].join(" ")));
        });
      }

      function loadSaved() {
        try {
          const stored = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "[]");
          if (!Array.isArray(stored)) return new Set();
          return new Set(stored.filter((id) => RESOURCE_BY_ID.has(id)));
        } catch (error) {
          return new Set();
        }
      }

      function persistSaved() {
        try {
          window.localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(savedIds)));
          return true;
        } catch (error) {
          return false;
        }
      }

      function getMatches() {
        const cleanQuery = normalizeText(query).trim().replace(/\s+/g, " ");
        const terms = cleanQuery.split(/\s+/).filter(Boolean);
        const categoryHint = CATEGORY_QUERY_ALIASES[cleanQuery] || null;

        return RESOURCES.filter((resource) => {
          if (activeFilter === "saved") {
            if (!savedIds.has(resource.id)) return false;
          } else if (activeFilter !== "all" && resource.category !== activeFilter) {
            return false;
          }

          if (categoryHint) return resource.category === categoryHint;
          if (!terms.length) return true;

          const haystack = SEARCH_INDEX.get(resource.id) || "";
          return terms.every((term) => haystack.includes(term));
        });
      }

      /* ------------------------------------------------------------------
         Rendering
         ------------------------------------------------------------------ */
      function updateBaseCounts() {
        const counts = { all: RESOURCES.length, basic: 0, clinical: 0, reference: 0 };
        RESOURCES.forEach((resource) => {
          counts[resource.category] += 1;
        });

        $$("[data-count-filter]").forEach((element) => {
          const key = element.dataset.countFilter;
          if (Object.prototype.hasOwnProperty.call(counts, key)) {
            element.textContent = String(counts[key]);
          }
        });

        const openTitles = RESOURCES.filter((resource) => resource.type !== "Reference collection").length;
        const collections = RESOURCES.filter((resource) => resource.type === "Reference collection").length;

        $$("[data-resource-total]").forEach((element) => { element.textContent = String(RESOURCES.length); });
        $$("[data-title-total]").forEach((element) => { element.textContent = String(openTitles); });
        $$("[data-collection-total]").forEach((element) => { element.textContent = String(collections); });
      }

      function updateSavedIndicators(animate = false) {
        const count = savedIds.size;
        elements.shelfCount.textContent = String(count);
        $$("[data-saved-count]").forEach((element) => { element.textContent = String(count); });

        const countLabel = count === 1 ? "1 saved resource" : `${count} saved resources`;
        elements.shelfButton.setAttribute("aria-label", count ? `Open My Shelf, ${countLabel}` : "Open My Shelf, no saved resources");
        elements.shelfButton.title = count ? `${countLabel} on My Shelf` : "My Shelf is empty";

        if (animate) {
          elements.shelfCount.classList.remove("is-bumping");
          void elements.shelfCount.offsetWidth;
          elements.shelfCount.classList.add("is-bumping");
          window.setTimeout(() => elements.shelfCount.classList.remove("is-bumping"), 380);
        }
      }

      function syncFilterState() {
        elements.filterButtons.forEach((button) => {
          button.setAttribute("aria-pressed", String(button.dataset.filter === activeFilter));
        });

        elements.filterJumpButtons.forEach((button) => {
          const isActive = button.dataset.filterJump === activeFilter;
          button.classList.toggle("is-active", isActive);
          if (button.tagName === "BUTTON") {
            if (isActive) button.setAttribute("aria-current", "true");
            else button.removeAttribute("aria-current");
          }
        });

        elements.savedJumpButtons.forEach((button) => {
          button.classList.toggle("is-active", activeFilter === "saved");
        });

        elements.shelfButton.setAttribute("aria-pressed", String(activeFilter === "saved"));
      }

      function revealActiveFilter() {
        if (!elements.filterPills) return;
        const activeButton = elements.filterButtons.find((button) => button.dataset.filter === activeFilter);
        const container = elements.filterPills;
        if (!activeButton || container.scrollWidth <= container.clientWidth + 1) return;

        const containerRect = container.getBoundingClientRect();
        const buttonRect = activeButton.getBoundingClientRect();
        const target = container.scrollLeft + buttonRect.left - containerRect.left - 4;
        container.scrollTo({
          left: Math.max(0, target),
          behavior: prefersReducedMotion() ? "auto" : "smooth"
        });
      }

      function syncBookmarkButtons() {
        $$("[data-save-id]").forEach((button) => {
          const resource = RESOURCE_BY_ID.get(button.dataset.saveId);
          if (!resource) return;
          const isSaved = savedIds.has(resource.id);
          button.setAttribute("aria-pressed", String(isSaved));
          button.setAttribute("aria-label", `${isSaved ? "Remove" : "Save"} ${resource.title} ${isSaved ? "from" : "to"} My Shelf`);
          button.title = isSaved ? "Remove from My Shelf" : "Save to My Shelf";
        });
      }

      function syncSearchClear() {
        elements.searchClear.hidden = !elements.searchInput.value;
      }

      function getSearchStatus(count) {
        const cleanQuery = query.trim();
        if (!cleanQuery && activeFilter === "all") {
          return `All ${count} resources are open access`;
        }
        if (activeFilter === "saved") {
          if (!cleanQuery) {
            return count
              ? `${count} saved ${plural(count, "resource", "resources")} on this device`
              : "Your shelf is ready for its first resource";
          }
          return `${count} saved ${plural(count, "match", "matches")} for “${cleanQuery}”`;
        }
        if (cleanQuery) {
          return `${count} ${plural(count, "result", "results")} for “${cleanQuery}”`;
        }
        return `${count} ${plural(count, "resource", "resources")} in ${FILTER_LABELS[activeFilter]}`;
      }

      function updateEmptyState() {
        const cleanQuery = query.trim();
        if (activeFilter === "saved") {
          if (!cleanQuery) {
            elements.emptyTitle.textContent = "Your shelf is waiting";
            elements.emptyText.textContent = "Save a textbook or guideline with the bookmark icon, and it will appear here on this device.";
            elements.emptyReset.textContent = "Browse all resources";
          } else {
            elements.emptyTitle.textContent = "No saved matches";
            elements.emptyText.textContent = `None of your saved resources match “${cleanQuery}”. Try a different keyword or browse the full collection.`;
            elements.emptyReset.textContent = "Clear filters";
          }
          return;
        }

        elements.emptyTitle.textContent = "No resources found";
        elements.emptyText.textContent = cleanQuery
          ? `Nothing in the collection matches “${cleanQuery}”. Try a broader keyword, or browse all resources.`
          : "This category is currently empty. Browse the full collection to continue.";
        elements.emptyReset.textContent = cleanQuery ? "Clear filters" : "Browse all resources";
      }

      function renderBooks() {
        const matches = getMatches();
        elements.bookGrid.setAttribute("aria-busy", "true");

        if (!matches.length) {
          elements.bookGrid.innerHTML = "";
          elements.bookGrid.hidden = true;
          elements.emptyState.hidden = false;
          updateEmptyState();
        } else {
          elements.bookGrid.innerHTML = matches.map((resource, index) => bookCardTemplate(resource, index)).join("");
          elements.bookGrid.hidden = false;
          elements.emptyState.hidden = true;
        }

        elements.resultCount.textContent = String(matches.length);
        elements.resultLabel.textContent = plural(matches.length, "resource", "resources");
        elements.searchStatus.textContent = getSearchStatus(matches.length);
        elements.bookGrid.setAttribute("aria-busy", "false");
        syncFilterState();
        syncBookmarkButtons();
      }

      function bookCardTemplate(resource, index) {
        const isSaved = savedIds.has(resource.id);
        const darkBookmark = resource.theme === "gold" || resource.theme === "paper";
        const saveLabel = `${isSaved ? "Remove" : "Save"} ${resource.title} ${isSaved ? "from" : "to"} My Shelf`;
        const bookmarkTitle = isSaved ? "Remove from My Shelf" : "Save to My Shelf";

        return `
          <article class="book-card" data-resource-id="${escapeHTML(resource.id)}" style="--card-index:${Math.min(index, 10)}" aria-labelledby="book-title-${escapeHTML(resource.id)}">
            <div class="book-card__cover cover--${escapeHTML(resource.theme)}" aria-hidden="true">
              <span class="cover__spine"></span>
              <div class="cover__top">
                <span class="cover__kicker">${escapeHTML(CATEGORY_SHORT[resource.category])}</span>
              </div>
              <div class="cover__center">
                <span class="cover__code">${escapeHTML(resource.code)}</span>
                <span class="cover__glyph">${iconMarkup(resource.icon)}</span>
              </div>
              <div class="cover__bottom">
                <span>${escapeHTML(resource.source)}</span>
                <span>${escapeHTML(resource.edition)}</span>
              </div>
            </div>
            <div class="book-card__body">
              <div class="book-card__meta">
                <span class="subject-tag">${escapeHTML(resource.subject)}</span>
              </div>
              <h3 class="book-card__title" id="book-title-${escapeHTML(resource.id)}">${escapeHTML(resource.title)}</h3>
              <p class="book-card__authors">${escapeHTML(resource.authorsShort)}</p>
              <div class="book-card__footer">
                <span class="book-card__meta-line">${escapeHTML(resource.year)} · ${escapeHTML(resource.type)}</span>
                <span class="book-card__cue" aria-hidden="true">Details ${ARROW_SVG}</span>
              </div>
            </div>
            <button class="book-card__hit" type="button" data-open-id="${escapeHTML(resource.id)}" aria-label="View details for ${escapeHTML(resource.title)}"></button>
            <button class="bookmark-btn${darkBookmark ? " bookmark-btn--dark" : ""}" type="button" data-save-id="${escapeHTML(resource.id)}" aria-pressed="${isSaved}" aria-label="${escapeHTML(saveLabel)}" title="${bookmarkTitle}">
              ${BOOKMARK_SVG}
            </button>
          </article>
        `;
      }

      /* ------------------------------------------------------------------
         Filtering, search and shelf
         ------------------------------------------------------------------ */
      function applyFilter(filter, options = {}) {
        if (!["all", "basic", "clinical", "reference", "saved"].includes(filter)) return;
        const { resetSearch = false, scroll = false, focusHeading = false } = options;

        activeFilter = filter;
        if (resetSearch) {
          query = "";
          elements.searchInput.value = "";
          syncSearchClear();
        }

        renderBooks();
        window.requestAnimationFrame(revealActiveFilter);

        if (scroll) scrollToCollection(focusHeading);
      }

      function showShelf() {
        closeMenu();
        applyFilter("saved", { resetSearch: true, scroll: true, focusHeading: true });
      }

      function scrollToCollection(focusHeading = false) {
        if (!elements.collectionHead) return;
        const behavior = prefersReducedMotion() ? "auto" : "smooth";
        elements.collectionHead.scrollIntoView({ behavior, block: "start" });
        if (focusHeading && elements.libraryTitle) {
          elements.libraryTitle.focus({ preventScroll: true });
        }
      }

      function clearFiltersAndSearch() {
        activeFilter = "all";
        query = "";
        elements.searchInput.value = "";
        syncSearchClear();
        renderBooks();
        elements.searchInput.focus();
      }

      function toggleSaved(id, trigger = null) {
        const resource = RESOURCE_BY_ID.get(id);
        if (!resource) return;

        const wasSaved = savedIds.has(id);
        if (wasSaved) savedIds.delete(id);
        else savedIds.add(id);

        const persisted = persistSaved();
        updateSavedIndicators(true);

        let removedCardIndex = -1;
        if (activeFilter === "saved") {
          const oldCards = $$(".book-card", elements.bookGrid);
          removedCardIndex = oldCards.findIndex((card) => card.dataset.resourceId === id);
          renderBooks();
        } else {
          syncBookmarkButtons();
        }

        if (elements.bookDialog.open && currentResourceId === id) {
          updateDialogSaveState();
        }

        if (wasSaved && activeFilter === "saved" && trigger && trigger.closest("#bookGrid")) {
          window.requestAnimationFrame(() => {
            const remainingCards = $$(".book-card", elements.bookGrid);
            const nextCard = remainingCards[removedCardIndex] || remainingCards[removedCardIndex - 1] || remainingCards[0];
            const nextOpenButton = nextCard ? $('[data-open-id]', nextCard) : null;
            if (nextOpenButton) nextOpenButton.focus({ preventScroll: true });
            else elements.shelfButton.focus({ preventScroll: true });
          });
        }

        if (!persisted) {
          showToast("Change kept for this visit only — browser storage is unavailable.");
        } else {
          showToast(wasSaved ? "Removed from My Shelf." : "Saved to My Shelf.");
        }
      }

      function showToast(message) {
        elements.toastText.textContent = message;
        elements.toast.classList.add("is-visible");
        window.clearTimeout(toastTimer);
        toastTimer = window.setTimeout(() => {
          elements.toast.classList.remove("is-visible");
        }, 2800);
      }

      /* ------------------------------------------------------------------
         Detail dialog
         ------------------------------------------------------------------ */
      function fillDialog(resource) {
        elements.dialogCover.className = `detail-cover cover--${resource.theme}`;
        elements.dialogCover.innerHTML = `
          <span class="detail-cover__spine"></span>
          <div class="detail-cover__top">
            <span class="detail-cover__category">${escapeHTML(CATEGORY_LABELS[resource.category])}</span>
            <span class="detail-cover__access">${escapeHTML(resource.access)}</span>
          </div>
          <div class="detail-cover__center">
            <span class="detail-cover__code">${escapeHTML(resource.code)}</span>
            <span class="detail-cover__glyph">${iconMarkup(resource.icon)}</span>
          </div>
          <div class="detail-cover__bottom">
            <span class="detail-cover__source">${escapeHTML(resource.source)}</span>
            <span class="detail-cover__subject">${escapeHTML(resource.subject)} · ${escapeHTML(resource.year)}</span>
          </div>
        `;

        elements.dialogCategory.innerHTML = `<span class="eyebrow__line"></span>${escapeHTML(CATEGORY_LABELS[resource.category])}`;
        elements.dialogTitle.textContent = resource.title;
        elements.dialogAuthors.textContent = `By ${resource.authorsFull}`;
        elements.dialogTags.innerHTML = `
          <span class="dialog__tag">${escapeHTML(resource.subject)}</span>
          <span class="dialog__tag">${escapeHTML(resource.type)}</span>
          <span class="dialog__tag">${escapeHTML(resource.source)}</span>
        `;
        elements.dialogDescription.textContent = resource.description;

        const meta = [
          ["Publisher", resource.publisher],
          ["Edition & year", `${resource.edition} · ${resource.year}`],
          ["Resource type", resource.type],
          ["Licence / terms", resource.license]
        ];
        elements.dialogMeta.innerHTML = meta.map(([term, description]) => `
          <div class="meta-item">
            <dt>${escapeHTML(term)}</dt>
            <dd>${escapeHTML(description)}</dd>
          </div>
        `).join("");

        elements.dialogAccess.textContent = resource.accessNote;
        elements.dialogLink.href = resource.link;
        elements.dialogLinkText.textContent = `Open on ${resource.source}`;
        elements.dialogSourceName.textContent = resource.source;
        updateDialogSaveState();
      }

      function openResource(id) {
        const resource = RESOURCE_BY_ID.get(id);
        if (!resource) return;

        currentResourceId = id;
        lastFocusedElement = document.activeElement instanceof HTMLElement ? document.activeElement : null;
        fillDialog(resource);

        if (!elements.bookDialog.open) {
          document.body.classList.add("dialog-open");
          elements.bookDialog.appendChild(elements.toast);
          if (typeof elements.bookDialog.showModal === "function") {
            elements.bookDialog.showModal();
          } else {
            elements.bookDialog.setAttribute("open", "");
          }
          elements.dialogPanel.scrollTop = 0;
          elements.dialogContent.scrollTop = 0;
          window.requestAnimationFrame(() => {
            elements.dialogClose.focus({ preventScroll: true });
          });
        }
      }

      function closeResourceDialog() {
        if (!elements.bookDialog.open) return;
        if (typeof elements.bookDialog.close === "function") elements.bookDialog.close();
        else elements.bookDialog.removeAttribute("open");
      }

      function updateDialogSaveState() {
        const isSaved = Boolean(currentResourceId && savedIds.has(currentResourceId));
        elements.dialogSave.setAttribute("aria-pressed", String(isSaved));
        elements.dialogSave.classList.toggle("is-saved", isSaved);
        elements.dialogSaveText.textContent = isSaved ? "Remove from My Shelf" : "Save to My Shelf";
      }

      function handleDialogClosed() {
        document.body.classList.remove("dialog-open");
        if (elements.toast.parentElement === elements.bookDialog) {
          document.body.appendChild(elements.toast);
        }

        const returnTarget = lastFocusedElement && lastFocusedElement.isConnected
          ? lastFocusedElement
          : elements.searchInput;
        currentResourceId = null;
        lastFocusedElement = null;
        window.requestAnimationFrame(() => {
          if (returnTarget) returnTarget.focus({ preventScroll: true });
        });
      }

      /* ------------------------------------------------------------------
         Navigation / menu
         ------------------------------------------------------------------ */
      function setMenuOpen(open, options = {}) {
        const { returnFocus = false } = options;
        if (menuOpen === open) return;
        menuOpen = open;
        elements.mobileMenu.hidden = !open;
        elements.menuToggle.setAttribute("aria-expanded", String(open));
        elements.menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");

        if (open) {
          window.requestAnimationFrame(() => {
            const firstItem = $(".mobile-link", elements.mobileMenu);
            if (firstItem) firstItem.focus({ preventScroll: true });
          });
        } else if (returnFocus) {
          elements.menuToggle.focus({ preventScroll: true });
        }
      }

      function closeMenu(options = {}) {
        if (menuOpen) setMenuOpen(false, options);
      }

      function setSearchShortcutLabel() {
        const platform = (navigator.userAgentData && navigator.userAgentData.platform) || navigator.platform || "";
        if (/Mac|iPhone|iPad|iPod/i.test(platform)) {
          elements.searchKbd.textContent = "⌘ K";
        }
      }

      /* ------------------------------------------------------------------
         Events
         ------------------------------------------------------------------ */
      function bindEvents() {
        elements.searchInput.addEventListener("input", (event) => {
          query = event.target.value;
          syncSearchClear();
          renderBooks();
        });

        elements.searchForm.addEventListener("submit", (event) => {
          event.preventDefault();
          query = elements.searchInput.value;
          syncSearchClear();
          closeMenu();
          renderBooks();
          const behavior = prefersReducedMotion() ? "auto" : "smooth";
          if (elements.collectionHead) {
            elements.collectionHead.scrollIntoView({ behavior, block: "start" });
          }
        });

        elements.searchClear.addEventListener("click", () => {
          query = "";
          elements.searchInput.value = "";
          syncSearchClear();
          renderBooks();
          elements.searchInput.focus();
        });

        $$("[data-quick-search]").forEach((button) => {
          button.addEventListener("click", () => {
            query = button.dataset.quickSearch || "";
            activeFilter = "all";
            elements.searchInput.value = query;
            syncSearchClear();
            renderBooks();
          });
        });

        elements.filterButtons.forEach((button) => {
          button.addEventListener("click", () => {
            applyFilter(button.dataset.filter);
          });
        });

        elements.filterJumpButtons.forEach((button) => {
          button.addEventListener("click", () => {
            closeMenu();
            applyFilter(button.dataset.filterJump, {
              resetSearch: true,
              scroll: true,
              focusHeading: true
            });
          });
        });

        elements.savedJumpButtons.forEach((button) => {
          button.addEventListener("click", showShelf);
        });

        elements.emptyReset.addEventListener("click", clearFiltersAndSearch);

        elements.bookGrid.addEventListener("click", (event) => {
          const saveButton = event.target.closest("[data-save-id]");
          if (saveButton) {
            event.preventDefault();
            toggleSaved(saveButton.dataset.saveId, saveButton);
            return;
          }

          const openButton = event.target.closest("[data-open-id]");
          if (openButton) {
            openResource(openButton.dataset.openId);
          }
        });

        elements.dialogClose.addEventListener("click", closeResourceDialog);

        elements.dialogSave.addEventListener("click", () => {
          if (currentResourceId) toggleSaved(currentResourceId, elements.dialogSave);
        });

        elements.bookDialog.addEventListener("click", (event) => {
          if (event.target === elements.bookDialog) closeResourceDialog();
        });

        elements.bookDialog.addEventListener("close", handleDialogClosed);

        elements.menuToggle.addEventListener("click", () => {
          setMenuOpen(!menuOpen, { returnFocus: true });
        });

        elements.menuToggle.addEventListener("keydown", (event) => {
          if (event.key === "ArrowDown" && !menuOpen) {
            event.preventDefault();
            setMenuOpen(true);
          }
        });

        document.addEventListener("click", (event) => {
          if (menuOpen && !event.target.closest(".site-header")) {
            closeMenu();
          }
        });

        document.addEventListener("keydown", (event) => {
          if (elements.bookDialog.open) return;

          const target = event.target;
          const isTyping = target instanceof HTMLElement && (
            target.tagName === "INPUT" ||
            target.tagName === "TEXTAREA" ||
            target.tagName === "SELECT" ||
            target.isContentEditable
          );

          if (event.key === "Escape" && menuOpen) {
            event.preventDefault();
            closeMenu({ returnFocus: true });
            return;
          }

          if (event.key === "Escape" && target === elements.searchInput && elements.searchInput.value) {
            event.preventDefault();
            query = "";
            elements.searchInput.value = "";
            syncSearchClear();
            renderBooks();
            return;
          }

          if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
            event.preventDefault();
            closeMenu();
            elements.searchInput.focus();
            elements.searchInput.select();
            return;
          }

          if (event.key === "/" && !isTyping && !event.ctrlKey && !event.metaKey && !event.altKey) {
            event.preventDefault();
            closeMenu();
            elements.searchInput.focus();
          }
        });

        window.addEventListener("scroll", () => {
          if (scrollFrame) return;
          scrollFrame = window.requestAnimationFrame(() => {
            if (elements.siteHeader) {
              elements.siteHeader.classList.toggle("is-scrolled", window.scrollY > 8);
            }
            scrollFrame = null;
          });
        }, { passive: true });

        window.addEventListener("resize", () => {
          if (window.innerWidth > 1020) closeMenu();
        });

        window.addEventListener("storage", (event) => {
          if (event.key !== STORAGE_KEY) return;
          savedIds = loadSaved();
          updateSavedIndicators(false);
          if (activeFilter === "saved") renderBooks();
          else syncBookmarkButtons();
          if (elements.bookDialog.open) updateDialogSaveState();
        });

      }

      function init() {
        buildSearchIndex();
        updateBaseCounts();
        updateSavedIndicators(false);
        setSearchShortcutLabel();
        bindEvents();

        if (elements.siteHeader) {
          elements.siteHeader.classList.toggle("is-scrolled", window.scrollY > 8);
        }

        if (elements.copyrightYear) {
          elements.copyrightYear.textContent = String(new Date().getFullYear());
        }

        renderBooks();
      }

      init();
    })();
  