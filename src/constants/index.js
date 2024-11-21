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
  gan_dapt,
  neuro_drive,
  market_predict,
  microsoft,
  adani,
  bn_software,
  ericsson,
  copernilabs_logo,
  kamel_tourki,
  nati_gezahegn,
  zakaria,
  miva,
  tanteeta,
  alx,
  hagital,
  kidscode,
  GitHub,
} from '../assets';

export const navLinks = [
  {
    id: 'learn-coding',
    title: 'Learn Coding',
  },
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
  {
   id: 'beyond-coding',
   title: 'Beyond Coding',
   URL: 'https://tobidelly.github.io/beyond-coding/'
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
      'An AI optimization prodigy for OFDM (mainly 5G), with outstanding problem solving skills and strong programming expertise, making him highly recommended.',
    name: 'Kamel Tourki',
    designation: 'Research and Standardization Manager',
    company: 'Ericsson',
    image: kamel_tourki,
  },
  {
    testimonial:
      'He has exemplified extraordinary prowess as a devoted, tireless, and imaginative AI master, coupled with remarkable personal qualities that radiate brilliance.',
    name: 'Nathnael Gezahegn',
    designation: 'CEO',
    company: 'BN Technologies',
    image: nati_gezahegn,
  },
  {
    testimonial:
      'Eskinder is an exceptional AI expert, demonstrating unmatched talent in research, critical thinking, and harnessing PyTorch and Keras to their fullest potential.',
    name: 'Zakaria El Moutaki',
    designation: 'Standardization Researcher',
    company: 'Ericsson',
    image: zakaria,
  },
];

const projects = [
  {
    name: 'GAN-DAPT',
    description:
      'Leveraging domain-invariant image translations, I combined domain adaptation and generalization techniques for improved image segmentation.',
    tags: [
      {
        name: 'DaSeGAN',
        color: 'blue-text-gradient',
      },
      {
        name: 'DaSeGAN-S',
        color: 'green-text-gradient',
      },
      {
        name: 'DaSeGAN-T',
        color: 'pink-text-gradient',
      },
    ],
    image: gan_dapt,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Neuro Drive',
    description:
      'Successfully trained a cutting-edge self-driving car using Convolution neural networks (CNN) utilizing a state-of-the-art simulator provided by Udacity.',
    tags: [
      {
        name: 'Opencv-python',
        color: 'blue-text-gradient',
      },
      {
        name: 'Pandas',
        color: 'green-text-gradient',
      },
      {
        name: 'Numpy',
        color: 'pink-text-gradient',
      },
    ],
    image: neuro_drive,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Market Value Predictor',
    description:
      "I developed a powerful regression model using machine learning algorithms to predict professional football players' market value accurately.",
    tags: [
      {
        name: 'Python',
        color: 'blue-text-gradient',
      },
      {
        name: 'Linear Regression',
        color: 'green-text-gradient',
      },
      {
        name: 'Numpy',
        color: 'pink-text-gradient',
      },
    ],
    image: market_predict,
    source_code_link:
      'https://github.com/ESKINDERTSEGAYE/Project-Market-Value-Predictor',
  },
];

export { services, technologies, experiences, testimonials, projects };
