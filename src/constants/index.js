import {
  python,
  tensorflow,
  scikit_learn,
  pytorch,
  keras,
  numpy,
  pandas,
  pycharm,
  jupyter,
  mobile,
  backend,
  creator,
  web,
  market_predict,
  microsoft,
  adani,
  bn_software,
  ericsson,
  copernilabs_logo,
  miva,
  tanteeta,
  alx,
  hagital,
  kidscode,
  GitHub,
  emeka,
  olaoluwa,
  toluahmed,
  nli,
  oracle,
  new_relic,
  mini_mba,
  holberton,
  b2b2c,
  blockchain,
} from '../assets';

export const navLinks = [
  {
    id: 'blog',
    title: 'Blog',
    URL: 'https://dev.to/tobidelly/',
  },
  { id: 'technologies',
    title: 'Projects',
  },
  {
    id: 'resume',
    title: 'Resume',
    URL: 'https://drive.google.com/file/d/12-YZGtuNixCUfLnMX7Oak_s5GC2VaAy2/view?usp=sharing',
  },
  /*{
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
   id: 'education',
   title: 'Education',
  },*/
  {
    id: 'contact',
    title: 'Contact',
  },
 
];

const services = [
  {
    title: 'Artificial Intelligence',
    icon: web,
  },
  {
    title: 'Backend Engineering',
    icon: mobile,
  },
  {
    title: 'Frontend Engineering',
    icon: backend,
  },
  {
    title: 'Machine Learning',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'Tensorflow',
    icon: tensorflow,
  },
  {
    name: 'Scikit Learn',
    icon: scikit_learn,
  },
  {
    name: 'PyTorch',
    icon: pytorch,
  },
  {
    name: 'Keras',
    icon: keras,
  },
  {
    name: 'NumPy',
    icon: numpy,
  },
  {
    name: 'Pandas',
    icon: pandas,
  },
  {
    name: 'PyCharm',
    icon: pycharm,
  },
  {
    name: 'Jupyter',
    icon: jupyter,
  },
];

const experiences = [
  {
    title: 'Software Engineer',
    company_name: 'Hagital',
    icon: hagital,
    iconBg: '#383E56',
    date: 'July 2024 - present',
    points: [
      'Design, develop, and maintain scalable, high-performance applications.',
      'Led cloud solution projects improving system efficiency by 60% and collaborated with teams to deliver business-aligned solutions.',
      'Specialize in front-end development with React.js, back-end services using Node.js and Python, ensuring seamless integration across the stack.',
      'Enhanced database interactions for faster queries and improved user interfaces to boost satisfaction.',
    ],
  },
  {
    title: 'Frontend Engineer',
    company_name: 'Tanteeta Robotics',
    icon: tanteeta,
    iconBg: '#E6DEDD',
    date: 'May 2022 - June 2024',
    points: [
      'Developed responsive UI components, improving cross-device compatibility and user experience by 30%.',
      'Conducting robotics workshop for junior students.',
      'Built and maintained reusable code libraries, accelerating development speed for future projects by 20%.',
      'Collaborated with backend engineers to implement API integrations, ensuring seamless data flow and dynamic content display.',
    ],
  },
  {
    title: 'Software Engineer Intern',
    company_name: 'ALX Africa',
    icon: alx,
    iconBg: '#383E56',
    date: 'Jan 2022 - Dec 2022',
    points: [
      'Built a simple shell with C programming language.',
      'Mastered the use of git, github, version control, shell and linux.',
      'Implemented a Recommendation Systems various applications not limited to backend & frontend.',
      'Staying updated with the latest advancements and best practices in software engineering through self-learning and research.',
    ],
  },
  {
    title: 'IGCSE/Coding Instructor',
    company_name: 'KidsCode',
    icon: kidscode,
    iconBg: '#E6DEDD',
    date: 'Oct 2024 - present',
    points: [
      'I teach & train young children from ages 6 coding, and everything about it.',
      'Mentor young students to create exciting projects in Game development, Web development, etc.',
      'Supervise students capstone projects, home assignments, quaterly/monthly assignments, and other research activities.',
      'Teach IGCSE Computer Science & Information Technology curriculum.',
    ],
  },
  {
    title: 'GitHub Campus Expert',
    company_name: 'GitHub',
    icon: GitHub,
    iconBg: '#E6DEDD',
    date: 'Jan 2025',
    points: [
      'Mentor & train students across the 36 states of Nigeria.',
      'Improve workability and system structure amongst GitHub users in Nigeria and the GitHub community in West Africa.',
      'Create a sustainable vision for the Nigerian tech ecosystem leveraging free tools and resources provided by GitHub Campus Experts ... etc.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'Tobi blends his technical expertise—C, React.js, Node.js, Python, and cloud technologies—with a strong business mindset. His ability to deliver scalable, high-performance apps while keeping user experience at the forefront is exceptional',
    name: 'Tolulope Ahmed',
    designation: 'CEO',
    company: 'MyFund App',
    image: toluahmed,
  },
  {
    testimonial:
      'During his time with us, Tobi consistently delivered high-quality work, translating complex requirements into intuitive, user-friendly interfaces.',
    name: 'Olaoluwa Balogun',
    designation: 'CEO',
    company: 'Tanteeta Robotics',
    image: olaoluwa,
  },
  {
    testimonial:
      'Tobi is an exceptional student, harnessing and leveraging the power of technology and artificial intelligence to create a better world for all.',
    name: 'Emeka Ogbuju',
    designation: 'PhD Artificial Intelligence',
    company: 'Miva Open University',
    image: emeka,
  },
];

const projects = [
  {
    name: 'Full Stack B2B2C Web Application',
    description:
      'Built this project using typescript and tailwind for frontend, prisma for schema, nodejs and express for backend while mySQL for database management.',
    tags: [
      {
        name: 'B2B2C',
        color: 'blue-text-gradient',
      },
      {
        name: 'e-commerce',
        color: 'green-text-gradient',
      },
      {
        name: 'Backend',
        color: 'pink-text-gradient',
      },
    ],
    image: b2b2c,
    source_code_link: 'https://github.com/tobidelly',
  },
  {
    name: 'Blockchain Implementation in C',
    description:
      'This project demonstrates a basic blockchain implementation in C, showcasing core blockchain features and advanced functionalities like Proof of Work, serialization, and networking',
    tags: [
      {
        name: 'C',
        color: 'blue-text-gradient',
      },
      {
        name: 'SHA-256',
        color: 'green-text-gradient',
      },
      {
        name: 'Blockchain',
        color: 'pink-text-gradient',
      },
    ],
    image: blockchain,
    source_code_link: 'https://github.com/tobidelly/blockchain_project',
  },
  {
    name: 'Mobile App for Seamless Tailor Measurement',
    description:
      "I developed a mobile application using NativeScript to enable tailors take, record and save measurements seamlessly.",
    tags: [
      {
        name: 'NativeScript',
        color: 'blue-text-gradient',
      },
      {
        name: 'Javascript',
        color: 'green-text-gradient',
      },
      {
        name: 'React Native',
        color: 'pink-text-gradient',
      },
    ],
    image: market_predict,
    source_code_link:
      'https://github.com/tobidelly',
  },
];
const qualifications = [
  {
    date: '2024-2026',
    degree: 'Bachelor of Science',
    institution: 'Miva Open University',
    description: 'Software Engineering.',
    tags: [
      { name: 'AI', color: 'text-blue-500' },
      { name: 'ML', color: 'text-green-500' },
    ],
    icon: miva,
    iconBg: '#FFFFFF',
  },
  {
    date: '2024-2025',
    degree: 'Leadership and Management',
    institution: 'Nehemiah Leadership Institute',
    description: 'Leadership Management.',
    tags: [
      { name: 'Leadership', color: 'text-white-500' },
      { name: 'Management', color: 'text-purple-500' },
    ],
    icon: nli,
    iconBg: '#FFFFFF',
  },
  {
    date: '2023-2024',
    degree: 'Software Engineering Diploma',
    institution: 'Holberton School, USA',
    description: 'Full Stack Software Engineering.',
    tags: [
      { name: 'FullStack', color: 'text-yellow-500' },
      { name: 'Database', color: 'text-purple-500' },
    ],
    icon: holberton,
    iconBg: '#FFFFFF',
  },
    {
    date: '2024',
    degree: 'Mini MBA in Technology Management',
    institution: 'Institute of Management and Technology',
    description: 'Technology Management.',
    tags: [
      { name: 'Tech', color: 'text-yellow-500' },
      { name: 'Startup', color: 'text-blue-500' },
    ],
    icon: mini_mba,
    iconBg: '#FFFFFF',
  },
   {
    date: '2024',
    degree: 'Oracle Cloud Infrastructure Certified Generative AI Professional',
    institution: 'Oracle University',
    description: 'Artificial Intelligence.',
    tags: [
      { name: 'AI', color: 'text-blue-500' },
      { name: 'GenAI', color: 'text-purple-500' },
    ],
    icon: oracle,
    iconBg: '#FFFFFF',
  },
  {
    date: '2024',
    degree: 'New Relic Full-Stack Observability Certified Professional',
    institution: 'New Relic University',
    description: 'Tech Stack Observability.',
    tags: [
      { name: 'Observability', color: 'text-yellow-500' },
      { name: 'NRQL', color: 'text-red-500' },
    ],
    icon: new_relic,
    iconBg: '#FFFFFF',
  }, 
];

export { services, technologies, experiences, testimonials, projects, qualifications };
