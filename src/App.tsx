// PORTFOLIO COMPLETED!
import { ConfigProvider, theme } from 'antd';
import { useAppReducer } from './hooks/useAppReducer';
import { useIntersectionSpy } from './hooks/useIntersection';
import { Nav } from './components/layout/Nav';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Projects } from './components/sections/Projects';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Experiences } from './components/sections/Experiences';
import { Certificates } from './components/sections/Certificates';
import { Contact } from './components/sections/Contact';
import { navItems, projects, skills, experiences, certificates } from './data';
import './App.css'

const SECTION_IDS = ['home', 'about', 'skills', 'experiences', 'projects', 'certificates', 'contact'];

function App() {
  const [state, dispatch] = useAppReducer();
  useIntersectionSpy(SECTION_IDS, dispatch);

  const isDark = state.theme === 'dark';

  return (
    <ConfigProvider
      theme={{
        algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
        token: {
          colorPrimary: '#1A1A1A',
          borderRadius: 12,
          fontFamily: "'Inter', system-ui, sans-serif",
          colorBgContainer: isDark ? '#1C1C1A' : '#EEECEA',
          colorBgElevated: isDark ? '#1C1C1A' : '#F7F6F3',
          colorText: isDark ? '#F0EEE8' : '#1A1A1A',
          colorTextSecondary: isDark ? '#888' : '#666',
          colorBorder: isDark ? '#2A2A28' : '#E2E0DC',
        },
        components: {
          Button: {
            colorPrimary: isDark ? '#F0EEE8' : '#1A1A1A',
          },
          Card: {
            colorBgContainer: isDark ? '#1C1C1A' : '#EEECEA',
          },
        },
      }}
    >
      <div className="app" data-theme={state.theme}>
        <Nav state={state} dispatch={dispatch} navItems={navItems} />
        <main>
          <Hero />
          <About state={state} />
          <Skills skills={skills} />
          <Experiences experiences={experiences} />
          <Projects projects={projects} state={state} dispatch={dispatch} />
          <Certificates certificates={certificates} />
          <Contact />
        </main>
        <Footer />
      </div>
    </ConfigProvider>
  );
}

export default App;
