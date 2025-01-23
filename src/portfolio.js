import profile from '../src/images/profile.jpeg';
import csusb from '../src/images/csusb.png';
import lpu from '../src/images/lpu.png';
import alekh from '../src/images/alekh.jpeg';
import anand from '../src/images/anand.jpeg';
import optx from '../src/images/optx.jpeg';
import rupesh from '../src/images/rupesh.jpeg';
import sathish from '../src/images/sathish.jpeg';
import snapbizz from '../src/images/snapbizz.png';
import rajesh from '../src/images/rajesh.jpeg';
import ucsb from '../src/images/ucsb.jpg';

const header = {
  homepage: '',
  title: 'SP',
};

const links = {
  calState: 'https://www.csusb.edu/',
  lpu: 'https://www.lpu.in',
  snapbizz: 'https://snapbizz.com/',
  optx: 'https://optx.com/',
  ucsb: 'https://www.ucsb.edu/',
};

const about = {
  image: profile,
  name: 'Swati Saxena',
  role: 'Grad Student | Software Engineer',
  gender: '(She/Her)',
  description:
    "I am a graduate student pursuing a master's degree in computer science at California State University, San Bernardino. As I navigate through my academic journey, I am actively seeking co-op opportunities for Summer 2024 or exploring new graduate roles in software development. My enthusiasm for programming, combined with a robust foundation in data structures, algorithms, and object-oriented design, positions me for meaningful contributions to innovative projects.",
  address: 'San Bernardino, California, United States',
  resume:
    'https://drive.google.com/drive/folders/1aX8lFTcNF7ROxFf0Qdv-gW9qtegEMnFT?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/swati17/',
    github: 'https://github.com/swati2904',
    instagram: 'https://www.instagram.com/swati_8687',
  },
};

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React JS',
  'Vue JS',
  'AngularJS',
  'Redux',
  'NextJS',
  'Docker',
  'kubernetes',
  'Tailwind',
  'SASS',
  'Material-UI',
  'Git',
  'Web Accessibility',
  'Responsive Design',
  'Build Tools',
  'GraphQL',
  'Jest',
  'MySQL',
  'PostgreSQL',
  'MongoDB',
  'Python',
  'C/C++',
  'NodeJS',
  'ExpressJS',
  'MongoDB',
  'Spring Boot',
  'Azure',
  'RESTful APIs',
  'Unix',
  'Linux',
  'Database',
  'Teamwork',
  'Problem-solving',
  'time management',
  'Algorithms',
];

const educations = [
  {
    logo: csusb,
    link: links.calState,
    name: 'California State University, San Bernardino',
    degree: 'Master of Science in Computer Science',
    dates: '2023 - 2025',
    gpa: '3.79/4.0',
    achievements: [
      'As the teaching assistant, I guided undergraduate students in two classes: data structures and algorithms in C++ CSE 2020 & CSE 4310',
      'Participated in the Grace Hopper Celebration (GHC) and attended events hosted by the Society of Women Engineers (SWE).',
      'Enthusiastically took part in diverse academic clubs, notably as a member of both the ISA (International Student Association) Club and the SCANAS club at Cal State.',
    ],
  },
  {
    logo: lpu,
    link: links.lpu,
    name: 'Lovely Professional University',
    degree: 'Bachelor of Technology - BTech, Computer Science',
    dates: 'Aug 2016 - July 2020',
    gpa: '3.16/4.0',
    achievements: [
      'Secured a spot among the top 50 teams out of 10,000 nationwide participants in the Grand Finale of Smart India Hackathon, endorsed by the Government of India.',
      'Participated as a volunteer in diverse events, actively involved in coding night challenges, and attended Pythonthon sessions hosted within the university.',
    ],
  },
];

const experiences = [
  {
    company: 'UC Santa Barbara',
    logo: ucsb,
    link: links.ucsb,
    color: '#003660',
    position: 'Software Engineer Research Intern',
    dates: 'June 2024 – August 2024',
    address: 'Santa Barbara · On-site',
    description:
      'Identified and addressed security vulnerabilities in AI chat plugins across 2,000+ websites, improving validation mechanisms for 1,500 websites and securing sensitive data exposed by 500+ plugins. Enhanced system performance and security by integrating automated vulnerability detection, increasing model efficiency by 20% and ensuring stronger protection against data leaks. Built and optimized web scraping tools, increasing data extraction speed by 25% and improving overall system accuracy.',
    skills: ['Python', 'Javascript', 'Burp Suite', 'Wordpress', 'HTML', 'CSS'],
  },
  {
    company: 'OPTX',
    logo: optx,
    link: links.optx,
    color: '#ff9e00',
    position: 'Software Engineer',
    dates: 'April 2023 – July 2023',
    address: 'Chennai, India · On-site',
    description:
      'Collaborated on a team to enhance enterprise efficiency through streamlined data access, automated event tracking, and a customizable productivity dashboard. Key contributions include implementing elevated UI features and integrating pipelines on Microsoft Azure DevOps. This experience deepened my understanding of full-stack development and emphasized website customization possibilities in frontend development.',
    skills: ['ReactJS', 'Javascript', 'amChart', 'Unix', 'Azure'],
  },

  {
    company: 'SnapBizz Cloudtech Pvt Ltd',
    logo: snapbizz,
    link: links.snapbizz,
    color: '#5D92F4',
    position: 'Software Engineer',
    dates: 'August 2020 – April 2023',
    address: 'Bengaluru, Karnataka, India · On-site',
    description:
      'Played a key role in a team project, addressing challenges in designing an automated retailer dashboard to enhance user efficiency. Contributed to solving real-world problems related to inventory management and purchase processes. This hands-on experience provided valuable insights into collaborative problem-solving and user-centric design, fostering continuous learning and adaptability in a dynamic work environment.',
    skills: [
      'HTML',
      'CSS',
      'npm',
      'ReactJS',
      'VueJS',
      'Javascript',
      'nodejs',
      'Github',
    ],
  },
];

const projects = [
  {
    name: 'Safe Shortener',
    description:
      'Built a URL shortener with enhanced security, featuring password protection, CAPTCHA, link expiry, access control with geolocation restrictions, and seamless link management for improved accessibility and user experience.',
    stack: [
      'Golang',
      'NextJs',
      'Docker',
      'kubernatives',
      'HTML',
      'CSS',
      'MongoDB',
    ],
    sourceCode: 'https://github.com/swati2904/Sync_Code_Studio',
    // livePreview: 'https://blog-connector-application.vercel.app/',
  },
  {
    name: 'Sync Code Editor',
    description:
      'I led the development of a real-time code synchronization tool, focusing on seamless collaboration and efficient room management. Key features included unique room ID generation, easy room ID copying, and smooth room exit procedures, ensuring a hassle-free user experience.',
    stack: [
      'WebSocket',
      'ReactJS',
      'Redux',
      'NodeJS',
      'ExpressJS',
      'SASS',
      'HTML',
      'CSS',
      'MongoDB',
    ],
    sourceCode: 'https://github.com/swati2904/Sync_Code_Studio',
    // livePreview: 'https://blog-connector-application.vercel.app/',
  },
  {
    name: 'Fin-Tastic Division',
    description:
      'Developed a Division App combining education and entertainment, featuring interactive games, engaging visuals, secure cloud storage, personalized profiles, progress tracking, and voice-to-text functionality, with a focus on user privacy.',
    stack: ['C#', 'SQL', 'Azure Functions', 'GIT'],
    sourceCode: 'https://github.com/swati2904/Fin-tastic_Division',
    livePreview:
      'https://www.amazon.com/SE-Team-Spring-2024-Fin-Tastic/dp/B0D316Q5ZF/',
  },
  {
    name: 'Blog Connector',
    description:
      'Created Blog Connector, a secure social application with robust JWT-based authentication, featuring user-friendly functionalities such as profile customization, blog posting, and social interaction through liking, disliking, and commenting on posts.',
    stack: [
      'ReactJS',
      'Redux',
      'NodeJS',
      'ExpressJS',
      'SASS',
      'HTML',
      'CSS',
      'MongoDB',
    ],
    sourceCode: 'https://github.com/swati2904/BlogConnectorApplication',
    // livePreview: 'https://blog-connector-application.vercel.app/',
  },
  {
    name: 'TYPINGGAME',
    description:
      'Designed and implemented a dynamic typing game with five levels, incorporating a tracking system to record and display player accuracy and overall average typing speed, providing an engaging gaming experience with pop-up notifications for wins and losses.',
    stack: ['HTML', 'CSS', 'Javascript'],
    sourceCode: 'https://github.com/swati2904/Save-Planet',
    livePreview: 'https://swati-typingdisease.netlify.app/',
  },
];

const recommendations = [
  {
    profile: rajesh,
    name: 'Rajesh Perumal',
    linkedin: 'https://www.linkedin.com/in/rajee2686/',
    position: 'Senior Technical Manager',
    company: 'Optx',
    logo: optx,
    link: links.optx,
    description:
      'I recommend Swati as a front-end developer. Their proficiency in React & Redux, attention to detail, collaborative nature, and dedication make them a valuable addition to any team.',
  },
  {
    profile: sathish,
    name: 'Sathishkumar ThirumalaiNambi',
    linkedin: 'https://www.linkedin.com/in/sathishkumar-thirumalainambi/',
    position: 'Solution Architect',
    company: 'Optx',
    logo: optx,
    link: links.optx,
    description: `I highly recommend Swati Saxena for her exceptional skills and dedication to OPTX as a software engineer. Her expertise and commitment to delivering top-notch results have consistently impressed me. Swati is a true team player, always willing to go the extra mile to ensure success. Their professionalism, problem-solving abilities, and strong work ethic make them an invaluable asset to any organization. I have no doubt that Swati will continue to excel in their career and contribute significantly to any team they join. `,
  },
  {
    profile: rupesh,
    name: 'Rupesh Bhardwaj',
    linkedin: 'https://www.linkedin.com/in/rupesh-bhardwaj-9a222421/',
    position: 'Engineering Manager',
    company: 'Snapbizz',
    logo: snapbizz,
    link: links.snapbizz,
    description: `Swati has been working as a front-end developer at Snapbizz under my team. I was consistently impressed by her essential development skills, her dedication, and good humour. She is an innovator who always helped me to improve the productivity of my team. She is a hard worker and a talented young lady, and it was indeed a delight to work with her. Having worked with her on many projects, I must say she is a very quick learner and dedicated to her work. Her work is always outstanding, and she always goes the extra mile to ensure the company standards and client requirements are met. She is a highly skilled, experienced, and helpful professional with a positive attitude.
    Thanks, Swati.`,
  },
  {
    profile: anand,
    name: 'Anand Namastemath',
    linkedin: 'https://www.linkedin.com/in/anand-namastemath/',
    position: 'Senior Software Developer',
    company: 'Snapbizz',
    logo: snapbizz,
    link: links.snapbizz,
    description: `I had the pleasure of working closely with Swati during her time at Snapbizz, where she took on the significant responsibility of handling all front-end tasks. Swati, or as I fondly referred to her, our "brave kiddo," demonstrated a work ethic and dedication that were truly remarkable. She displayed a rare combination of rapid execution and a genuine passion for her work, consistently delivering outstanding results. Her ability to translate her interests into innovative and effective solutions was a driving force behind our project's success. Swati's contributions at Snapbizz were invaluable, and her enthusiasm and courage, as our "brave kiddo," were truly inspiring. I wholeheartedly recommend Swati for any future endeavors.`,
  },
  {
    profile: alekh,
    name: 'Alekh Kumar',
    linkedin: 'https://www.linkedin.com/in/alekh-kumar/',
    position: 'Ex-Fullstack Engineer',
    company: 'Snapbizz',
    logo: snapbizz,
    link: links.snapbizz,
    description: `Swati is like a superhero friend at work! She's super hardworking, always nice and calm, even when things are tricky. When we have problems, she's like a detective who asks the perfect questions to find answers. I remember once when we had this really tricky problem to tackle, and Swati not only cracked it but also came up with this amazing and unique idea that totally changed how we approached things. She was even the sole owner of all the Front-End projects at SnapBizz, handling them all by herself, like a true champion! And being around her is fun, she's a great friend who makes each day better with her positive vibes. I have no doubt that she will continue to shine brightly in the professional world and make a positive impact wherever she goes.`,
  },
];

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'swati.calstate@gmail.com',
};

export {
  header,
  about,
  projects,
  skills,
  educations,
  experiences,
  contact,
  recommendations,
};
