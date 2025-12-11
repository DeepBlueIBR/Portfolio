import './About.css'
import UniWALogo from "../../assets/images/timeline/UniWA.png"
import Qubi from "../../assets/images/timeline/Qubi.png"
import {useEffect} from "React"

export default function About() {
  
useEffect(() => {
    const bar = document.querySelector(".timeline_progress-bar");
    const section = document.getElementById("about");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio > 0.65) {
          bar?.classList.add("active");
        } else {
          bar?.classList.remove("active");
        }
      },
      { threshold: 0.65}
    );

    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      style={{
        position: "relative",
        width: "100vw",
        minHeight: "100vh",
        margin: 0,
      }}
    >
      {/* Background */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(to bottom, #7132CA 100%, rgba(79, 0, 128, 0) 0%)",
          zIndex: -1,
        }}
      />

      {/* Main content wrapper */}
      <div className="about-content-wrapper">
        {/* EXTRA RIGHT-SIDE BOX */}
        <div className="section-timeline">
          <div className="container">
            <div className="timeline_component">
              <div className="timeline_progress">
                <div className="timeline_progress-bar"> </div>
              </div>
                <div className="timeline_item">
                  <div className="timeline_left">
                    <div className="timeline_date-text">September 2019</div>
                  </div>
                  <div className="timeline_centre">
                    <div className="timeline_circle"></div>
                  </div>
                  <div className="timeline_right">
                    <div className="margin-bottom-xlarge">
                      <div className="timelin_text">
                        Entered University of West attica in the department of
                        Informatics and Computer Engineering.
                      </div>
                    </div>
                    <div className="timeline_image-wrapper">
                      <img src={UniWALogo} loading="lazy" width="480" alt="UniWA"/>
                    </div>
                </div>
              </div>
            </div>
            <div className="timeline_item">
              <div className="timeline_left">
                <div className="timeline_date-text">May 2023</div>
              </div>
              <div className="timeline_centre">
                  <div className="timeline_circle"></div>
              </div>
              <div className="timeline_right">
                    <div className="margin-bottom-xlarge">
                      <div className="timelin_text">
                        Started working at Qubiteq, as a junior Fullstack Devleoper.
                        on a .Net Core,React,SQL Server Stack.
                      </div>
                    </div>
                    <div className="timeline_image-wrapper">
                      <img src={Qubi} loading="lazy" width="480" alt="Qubi"/>
                    </div>
                </div>
            </div>
            <div className="overlay-fade-top"></div>
            <div className="overlay-fade-bot"></div>
          </div>
        </div>
        <div style={{ height: "50vh" }}></div>

        {/* ABOUT TEXT */}
        <div className="about-text">
          <h1>About Me</h1>
          <p>
            I am a 24 year old aspiring full-stack developer, currently based in Athens,
            Greece. I have always been curious and fascinated by puzzles, which led me to
            the path of studying software engineering. I graduated in October 2025, and
            worked as a junior developer for 1.5 years during my studies at «company».
            I am currently looking to continue my professional journey in Norway, and hope
            to be a valuable asset to future employers.
          </p>
        </div>

        
      </div>

      {/* Waves */}
      <div className="about-wave-top">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
        </svg>
      </div>

      <div className="about-wave-bot">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
        </svg>
      </div>

    </section>
  );
}
