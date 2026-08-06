import { Project, Testimonial, NavItem, Skill, Experience, Certificate } from '../types';
// Resolve local images that actually exist in `src/images` using Vite's import.meta.url
const localImage = (name?: string) => (name ? new URL(`../images/${name}`, import.meta.url).href : '');
export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experiences', href: '#experiences' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contacts', href: '#contact' },
];

export const projects: Project[] = [
  {
    id: 'studentdb',
    title: 'Hnefatafl Game',
    subtitle: 'A hnefatafl game with AI opponent and multiplayer support',
    year: '2023',
    tags: ['JavaScript', 'CSS', 'HTML', 'Game Dev'],
    color: '#E8F4F0',
    image: localImage('hnefatafl.png'),
    alt: 'Hnefatafl game screenshot',
    link: 'https://yowaidesu.github.io/HNEFATAFL/',
  },
  {
    id: 'portfolio',
    title: 'This Portfolio',
    subtitle: 'Minimal personal site built with React + TypeScript',
    year: '2026',
    tags: ['React', 'TypeScript', 'Vite'],
    color: '#F4EEE8',
    image: localImage('portfolio.png'),
    alt: 'Portfolio site screenshot',
    link: '',
  },
];

export const testimonials: Testimonial[] = [
  {
    quote: 'Incredibly sharp with databases and system design. Turned a complex schema problem into clean, working SQL in minutes.',
    author: 'Prof. Reyes',
    role: 'Database Systems Instructor',
    company: 'University',
  },
  {
    quote: 'The encrypted stream project was genuinely impressive — real cryptography, real networking, not just theory.',
    author: 'Marco L.',
    role: 'Classmate & Collaborator',
    company: 'BSIT Program',
  },
  {
    quote: 'Detail-oriented and persistent. Never stops until the bug is found and fixed.',
    author: 'Ivan C.',
    role: 'Project Partner',
    company: 'Networking Course',
  },
];

export const capabilities = [
  'Full-Stack Development',
  'Database Design',
  'Network Security',
  'Python & Cryptography',
  'React & TypeScript',
  'System Architecture',
];

export const skills: Skill[] = [
  { name: 'Python', category: 'Programming', level: 'intermediate' },
  { name: 'C++', category: 'Programming', level: 'beginner' },
  { name: 'Java', category: 'Programming', level: 'beginner' },
  { name: 'JavaScript', category: 'Programming', level: 'intermediate' },
  { name: 'TypeScript', category: 'Programming', level: 'intermediate' },
  { name: 'React', category: 'Framework', level: 'intermediate' },
  { name: 'Node.js', category: 'Framework', level: 'intermediate' },
  { name: 'MySQL', category: 'Database', level: 'intermediate' },
  // { name: 'PostgreSQL', category: 'Database', level: 'intermediate' },
  { name: 'Git', category: 'Tool', level: 'intermediate' },
  { name: 'Docker', category: 'Tool', level: 'beginner' },
  // { name: 'Linux', category: 'OS', level: 'intermediate' },
];

export const experiences: Experience[] = [
  {
    id: 'exp1',
    title: 'None at the moment',
    company: '',
    period: '...',
    description: '',
    tags: [''],
  },
];

export const certificates: Certificate[] = [
  {
    id: 'cert1',
    title: 'Networking Basics',
    issuer: 'Cisco Networking Academy',
    date: 'May 14, 2026',
    link: 'https://www.credly.com/badges/fc55b035-60c3-4a55-bdae-4f85ba259fad/public_url',
    image: 'https://images.credly.com/size/220x220/images/5bdd6a39-3e03-4444-9510-ecff80c9ce79/image.png',
  },
];
