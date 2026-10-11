// Replace the placeholder values in this file with your real information.
// Keep invented jobs, certifications, and awards out of the site until you add them yourself.

export const profile = {
  name: 'Magapu Girija Venkata Aishwarya',
  role: 'Aspiring Software Developer',
  location: 'Visakhapatnam,  India',
  tagline:
    'Building practical web applications and exploring AI-powered solutions using APIs and databases.',
  about: [
    'Hello — I am a Computer Science and Engineering student specializing in Artificial Intelligence and Machine Learning, interested in developing useful and reliable software applications.',
    'I enjoy working with React, Node.js, and PostgreSQL while exploring how AI APIs can be integrated into real-world applications.',
  ],
  email: 'girijamagapu123@gmail.com',
  linkedin: 'https://www.linkedin.com/in/magapuaiiiiiishwarya',
  github: 'https://github.com/MagapuAiiiishwarya',
  resumeFile: '/AishwaryaMagapuresume2712.docx',
  resumeLabel: 'Download Resume',
}

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
]

export const skillGroups = [
  {
    category: 'Programming',
    skills: ['JavaScript', 'HTML', 'CSS'],
  },
  {
    category: 'Frontend',
    skills: ['HTML', 'CSS', 'React.js', 'Tailwind CSS', 'Vite'],
  },
  {
    category: 'Backend & Database',
    skills:['Node.js','Fastify','REST APIs','PostgreSql','Drizzle ORM']
  },
  {
    category: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code','Docker(Basics)'],
  },
  {
    category: 'Currently Learning',
    skills: ['LLMs'],
  },
]

export const projects = [
  {
    id: 'ai-knowledge-assistant',
    title: 'AI Knowledge Assistant',
    description:
      'An AI application project focused on answering questions using an LLM API, with planned document retrieval and a knowledge base.Currently in devolpment.',
    technologies: ['Typescript','Node.js','Fastify','Gemini API','PostgreSQL','Drizzle ORM','REST APIs'],
    github: 'https://github.com/MagapuAishwarya/ai-chatbot1',
    demo: 'https://your-live-demo.example',
  },
  {
    id: 'project-two',
    title: 'Project Two (placeholder)',
    description:
      'Replace this with another project. Include what you learned and which technologies you used.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/your-username/project-two',
    demo: 'https://your-live-demo.example',
  },
  {
    id: 'project-three',
    title: 'Project Three (placeholder)',
    description:
      'Add a third featured project here. If you do not have a live demo yet, you can remove the demo link in this data file.',
    technologies: ['React', 'Vite', 'Git'],
    github: 'https://github.com/your-username/project-three',
    demo: '',
  },
]

export const education = [
  {
    id: 'edu-1',
    institution: 'Vignans Institute Of Engineering For Women',
    credential: 'Bachelor of Technology (B.Tech) in Computer Science and Engineering at Visakhapatnam,A.P',
    dates: '2023 – 2026',
    details:
      'CGPA: 0.00/10 | Percentage: 00.00%',
  },
  {
    id: 'edu-2',
    institution: 'Dadi Institute Of Engineering and Technology',
    credential: 'Diploma in Electronics and Communication Engineering at Anakapalle, A.P ',
    dates: '2020 – 2023',
      details: 'CGPA: /10 | Percentage: 00.00%',
  },
  {
    id: 'edu-3',
    institution: 'Bhashyam Public School',
    credential: 'Board Of Secondary Education at Anakapalle, A.P ',
    dates: '2019 – 2020',
    details:
    'Total: 591/600 | Percentage: 00.00%',
  },
]
