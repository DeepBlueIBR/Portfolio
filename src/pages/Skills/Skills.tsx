import "./Skills.css"
import dotnetLogo from "../../assets/images/skills/dotnet.webp"
import reactLogo from "../../assets/images/skills/react.webp"
import sqlLogo from "../../assets/images/skills/sql.webp"
import gitLogo from "../../assets/images/skills/git.webp"
import azureLogo from "../../assets/images/skills/azure.webp"
import pythonLogo from "../../assets/images/skills/python.webp"
import rustLogo from "../../assets/images/skills/rustLogo.webp"
import typescriptLogo from "../../assets/images/skills/typescriptlogo.webp"
import tailwindLogo from "../../assets/images/skills/tailwindlogo.webp"
import postgreSqlLogo from "../../assets/images/skills/postgreLogo.webp"

export default function Skills() {
  return (
    <div className="page-content">
      <h1 className="page-heading">Skills</h1>
      <div>
        <div className="core-stack">
          <p>
            Technologies that I have worked with professionally.
          </p>
          <div className="icon-container">
            <div className="skill-pill">
              <img src={dotnetLogo} alt=".NET" loading="lazy" />
            </div>
             <div className="skill-pill">
              <img src={reactLogo} alt="React" loading="lazy" />
            </div>
             <div className="skill-pill">
              <img src={pythonLogo} alt="Python" loading="lazy" />
            </div>
            <div className="skill-pill">
              <img src={sqlLogo} alt="SQL Server" loading="lazy" />
            </div>
            <div className="skill-pill">
              <img src={gitLogo} alt="Git" loading="lazy" />
            </div>
            <div className="skill-pill">
              <img src={azureLogo} alt="Azure-pipeline" loading="lazy" />
            </div>
          </div>
        </div>
        <div className="pers-stack">
          <p>
            Technologies i have worked with privately.
          </p>
          <div className="icon-container">
            <div className="skill-pill">
              <img src={rustLogo} alt="Rust" loading="lazy" />
            </div>
            <div className="skill-pill">
              <img src={typescriptLogo} alt="Typescript" loading="lazy" />
            </div>
            <div className="skill-pill">
              <img src={postgreSqlLogo} alt="Postgre" loading="lazy" />
            </div>
            <div className="skill-pill">
              <img src={tailwindLogo} alt="Tailwind" loading="lazy" />
            </div>
          </div>
        </div>
        {/*
        <div className="soft-skills">
          <p>
            Soft skills
          </p>
          <div className="icon-container">
          </div>
        </div>
        */
        }
      </div>
    </div>
  );
}
