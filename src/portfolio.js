/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Zed Li",
  title: "Hi all, I'm Zed",
  subTitle: emoji(
    "A passionate coder in Business Analytics 🚀, having experience as a data analyst. Specialised in Python, SQL and Data Visualisation!"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/zeddy713",
  linkedin: "https://www.linkedin.com/in/jinsheng-li713/",
  gmail: "Lijinsheng2024@outlook.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Dedicated data analyst who wants to explore every aspect of data!",
  // ...existing code...
  skills: [
    emoji("⚡ Analyze complex datasets to extract actionable business insights"),
    emoji("⚡ Build interactive dashboards and reports using Python, SQL, and Tableau"),
    emoji("⚡ Automate data collection, cleaning, and visualization processes"),
    emoji("⚡ Integrate data from multiple sources such as APIs, databases, and cloud platforms")
  ],
  softwareSkills: [
    { skillName: "html-5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "css3", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "MySQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "Tableau", fontAwesomeClassname: "fas fa-table" },
    { skillName: "github", fontAwesomeClassname: "fab fa-github" }
  ],
  display: true
};


// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of British Columbia",
      logo: require("./assets/images/ubcLogo.png"),
      subHeader: "Master of Business Analytics",
      duration: "September 2025 - August 2026",
      desc: "Sauder Business School. Courses include Data Analytics, Machine Learning, Business Intelligence, and more."
    
    },
    {
      schoolName: "University of Nottingham",
      logo: require("./assets/images/nottinghamLogo.png"),
      subHeader: "Bachelor of Science with Honours in International Business Management",
      duration: "September 2020 - July 2024",
      desc: "Ranked top 15% in the program. Achieved Dream Scholarship, Locktek Scholarship and Overseas Exchange to Neoma University in France."
    
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Database Language", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Visualisation Tools",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Coder",
      company: "Fathom AI",
      companylogo: require("./assets/images/icoolLogo.png"),
      date: "Sep 2025 – Present",
      descBullets: [
        " Database Setup: Set up a database for analysis by selecting key words from raw data as primary identifiers, and use AI models to automatically group and label the data, creating a solid foundation for later automated analysis. ",
        " Data Reviewing: Optimised data structure accuracy, reducing FN/FP error by 30%/25% respectively and lifting overall accuracy to 95%. "
      ]
    },
    {
      role: "Territory Manager",
      company: "ICOOL HVAC Company",
      companylogo: require("./assets/images/icoolLogo.png"),
      date: "Aug 2024 – Jun2025",
      descBullets: [
        " Business Development: Led client development across Canada and the U.S Southeast, acquiring an average of 2 new clients monthly via cold calls, industry trade shows and store visits. ",
        " Working Task: Standardised support workflows, set clear response-time targets, and used CRM for closure—keeping 30+ daily inquiries on time and high quality and consistently supporting USD 1.2M/month in sales. ",
        " Business Travel Experience: Increased retention and satisfaction via frequent in-store/on-site visits and value reviews; safeguarded existing accounts while converting 30+ clients into long-term partnerships, achieving USD 1.5M in sales during the international business trips. "
      ]
    },
    {
      role: "Banking & Financial Services Staff",
      company: "Hays PLC",
      companylogo: require("./assets/images/haysLogo.png"),
      date: "Jul 2023 – Sep 2023",
      descBullets: [
        "Screened and recommended qualified candidates for over 20 roles at partner foreign banks, ensuring accurate talent matching and consistent follow-up on recruitment progress. ",
        "Conducted 400+ phone interviews and optimised candidate resumes, increasing shortlist success rate by 80% and delivered a standout placement for a foreign bank at a 200,000 annual salary and contributed to over 100 successful hires for the firm. "
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "My Project Experience",
  subtitle: "Focusing on the real estate, healthcare and financial industry",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Analysis of Real Estate Industry Business",
      projectDesc:
        "Data Scraping: Led a team to conduct exploratory analysis on local Canadian real estate data, processing approximately 50,000 property listings and transaction records with a focus on key variables such as price range, location, and property type.\n" +
        "Data Processing: Used Pandas and NumPy for missing-value handling, outlier detection, and combined NLTK with scikit-learn to extract key information from listing descriptions and market reports, building a high-quality feature set for modelling and strategy analysis.\n" +
        "Data Visualisation: Visualised keywords and patterns with Matplotlib and WordCloud to surface regional trends and support the team’s market insight report and presentations.",
      footerLink: [
        { name: "Visit Website", url: "http://saayahealth.com/" }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Analysis of Customer Cancellation Rate in Hospitality Industry",
      projectDesc:
        "Database Learning: Analysed approximately 20,000 hotel booking and customer records using MySQL, performing data cleaning (missing-value handling, outlier and variable filtering) and reducing noisy or invalid records by 20%, improving data integrity for downstream analysis.\n" +
        "Tableau Visualization: Developed a Tableau dashboard to present cancellation trends across time periods, channels and customer segments, supporting the team’s final report and presentations.",
      footerLink: [
        { name: "Visit Website", url: "http://nextu.se/" }
      ]
    }
  ],
  display: true
};


// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Data Analytics Professional Certificate",
      subtitle:
        "Carefully crafted data analysis courses on the Coursera platform.",
      image: require("./assets/images/googledaLogo.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        } 
      ]
    },
    {
      title: "Harvard University CS50: Introduction to Computer Science",
      subtitle:
        "An entry-level course taught by David J. Malan, CS50x teaches students how to think algorithmically and solve problems efficiently.",
      image: require("./assets/images/harvardLogo.png"),
      imageAlt: "Google Assistant Action Logo",
      
    },

    {
      title: "Mosh: Python Projects from Beginners to Mastery",
      subtitle: "Completed Certifcation from MOSH for Python Programming Language",
      image: require("./assets/images/moshpythonLogo.png"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+86-18957877523",
  email_address: "Lijinsheng2024@outlook.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
