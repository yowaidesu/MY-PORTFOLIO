// PORTFOLIO COMPLETED!
export interface Project {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  tags: string[];
  color: string;
  image?: string;
  alt?: string;
  link?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  category: string;
  level: 'beginner' | 'intermediate' | 'advanced';
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  link?: string;
  image?: string;
}

// ── App State ────────────────────────────────────────────────
export type Theme = 'light' | 'dark';

export interface AppState {
  theme: Theme;
  menuOpen: boolean;
  activeSection: string;
  hoveredProject: string | null;
}

export type AppAction =
  | { type: 'TOGGLE_THEME' }
  | { type: 'TOGGLE_MENU' }
  | { type: 'CLOSE_MENU' }
  | { type: 'SET_ACTIVE_SECTION'; payload: string }
  | { type: 'SET_HOVERED_PROJECT'; payload: string | null };
