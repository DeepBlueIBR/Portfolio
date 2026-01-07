import { useState, useEffect, Suspense, lazy } from "react";
import useActiveSection from "./hooks/useActiveSection";
import Sidebar from "./components/Sidebar/Sidebar";
import Selection from "./components/Section/Section";
import { debounce } from "./utils/debounce";
import "./App.css";

// Lazy load page components for better performance
const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/About/About"));
const Skills = lazy(() => import("./pages/Skills/Skills"));
const Projects = lazy(() => import("./pages/Projects/Projects"));
const Contact = lazy(() => import("./pages/Contact/Contact"));

// Loading fallback component
const SectionLoader = () => (
  <div style={{
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}>
    <div className="loading-spinner" />
  </div>
);

function App() {
  const [collapsed, setCollapsed] = useState(false); // desktop collapse
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const [activeItem, setActiveItem, setManualOverrideId] = useActiveSection(
    ["home","about","skills","projects","contact"]
  ); 
  
  useEffect(() => {
    const update = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) {
        setCollapsed(true); // always collapsed on mobile
      }
    };

    // Debounce resize handler - only run after 150ms of no resize events
    const debouncedUpdate = debounce(update, 150);

    update(); // Run immediately on mount
    window.addEventListener("resize", debouncedUpdate);

    return () => {
      debouncedUpdate.cancel();
      window.removeEventListener("resize", debouncedUpdate);
    };
  }, []);


  useEffect(() => {
    if (isMobile) return; 

    const homeSection = document.getElementById("home");
    if (!homeSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const isVisible = entries[0].isIntersecting;
        setCollapsed(!isVisible);
      },
      { threshold: 0.2 }
    );

    observer.observe(homeSection);
    return () => observer.disconnect();
  }, [isMobile]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setManualOverrideId(id);
    setTimeout(() => {
        setManualOverrideId(null); 
    }, 800); 

    
    if (isMobile) {
      setMobileSidebarOpen(false);
    }
  };

  const handleClick = (id: string) => {
    scrollToSection(id);
    
    setActiveItem(id); 
    if (isMobile) setMobileSidebarOpen(false);
  }


    return (
    <div style={{ display: "flex" }}>
      {/* Sidebar */}
      <Sidebar
        collapsed={collapsed}
        isMobile={isMobile}
        mobileSidebarOpen={mobileSidebarOpen}
        activeItem={activeItem}
        onItemClick={handleClick}
        toggleMobileSidebar={() => setMobileSidebarOpen(!mobileSidebarOpen)}
      />

      {/* Main content */}
      <div style={{ flex: 1, minWidth: 0, overflowY: "auto", position: "relative" }}>
        <Selection id="home">
          <Suspense fallback={<SectionLoader />}>
            <Home />
          </Suspense>
        </Selection>
        <Selection id="about">
          <Suspense fallback={<SectionLoader />}>
            <About />
          </Suspense>
        </Selection>
        <Selection id="skills">
          <Suspense fallback={<SectionLoader />}>
            <Skills />
          </Suspense>
        </Selection>
        <Selection id="projects">
          <Suspense fallback={<SectionLoader />}>
            <Projects />
          </Suspense>
        </Selection>
        <Selection id="contact">
          <Suspense fallback={<SectionLoader />}>
            <Contact />
          </Suspense>
        </Selection>
      </div>
    </div>
  );
}

export default App;
