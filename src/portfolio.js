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
    "A passionate student in Business Analytics 🚀 having experience as a data analyst. Specialised in Python, MySQL and Tableau!"
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

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },

    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    
    {
      skillName: "MySQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Tableau",
      fontAwesomeClassname: "fas fa-table"
    },
   
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github"
    }
    
  ],
  display: true // Set false to hide this section, defaults to true
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
      desc: "Sauder Business School. Courses include Data Analytics, Machine Learning, Business Intelligence, and more.",
    
    },
    {
      schoolName: "University of Nottingham",
      logo: require("./assets/images/nottinghamLogo.png"),
      subHeader: "Bachelor of Science with Honours in International Business Management",
      duration: "September 2020 - July 2024",
      desc: "Ranked top 15% in the program. Achieved Dream Scholarship, Locktek Scholarship and Oversea Exchange to the Neoma University in France.",
    
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
      Stack: "Visualization Tools",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Territory Manager",
      company: "ICOOL HVAC Company",
      companylogo: require("./assets/images/icoolLogo.png"),
      date: "Aug 2024 – Jun2025",
      descBullets: [
        "Managed and expanded B2B client base across Quebec (Canada) and Georgia, Texas, Alabama, Tennessee (U.S.), acquiring an average of 2 new clients monthly through online channels and industry trade shows ",
        "Delivered end-to-end customer service, handling 30+ daily inquiries on pricing, order tracking, and technical support; leveraged CRM tools to manage client data and drive monthly sales of USD 800,000 ",
        "Led international business trips, visiting 5 clients per day to provide on-site technical solutions; converted 30+ prospects into active clients and secured USD 1.5 million in sales while building long-term partnerships"
      ]
    },
    {
      role: "Banking & Financial Services Staff",
      company: "Hays PLC",
      companylogo: require("./assets/images/haysLogo.png"),
      date: "Jul 2023 – Sep 2023",
      descBullets: [
        "Screened and recommended qualified candidates for over 20 roles at partner foreign banks, ensuring accurate talent matching and consistent follow-up on recruitment progress ",
        "Conducted 400+ phone interviews and optimised candidate resumes, increasing shortlist success rate by 80% and delivered a standout placement for a foreign bank at a 200,000 annual salary and contributed to over 100 successful hires for the firm "
      ]
    },
    {
      role: "Data Project Team Leader",
      company: "Nottingham Business School",
      companylogo: require("./assets/images/nbsLogo.png"),
      date: "Sep 2023 – Dec 2023",
      descBullets: [
        "Utilised MySQL for the cleansing and filtering of outliers and variables within a substantial original database, facilitating data integrity for subsequent in-depth analytical pursuits ",
        "Applied logistic regression algorithm and decision tree models in PyCharm by using Python, leveraging crossvalidation to evaluate data reliability ",
        "Visualised data results and the correlation metrics between variables using Tableau"
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
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
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
