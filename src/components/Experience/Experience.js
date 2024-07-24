import React, { useState } from "react";
import "./Experience.css";

function Experience() {
  const workExperience = [
    {
      id: 1,
      position: "Business Analytics Consultant",
      company: "Baxter International Inc.",
      location: "Skaneateles, NY",
      date: "September 2023 - December 2023",
      responsibilities: [
        "Championed a Lean Six Sigma project, meticulously leading a 5-member team to reduce defects in Reusable Blood Pressure Cuffs. Through detailed data analysis and strategic planning, achieved an 8.5% reduction in product defects, significantly enhancing product reliability and customer satisfaction.",
        "Conducted in-depth data analysis and root cause analysis, identifying key areas for process improvement and operational efficiency, resulting in a 19% increase in efficiency.",
        "Implemented strategic process optimizations, enhancing product quality and contributing to a 10% reduction in production waste and the overall success of manufacturing processes.",
        "Delivered actionable recommendations based on data insights, driving a 14% improvement in manufacturing processes and quality control.",
      ],
    },
    {
      id: 2,
      position: "Data Analyst Intern",
      company: "Bholanath Precision Engineering Pvt. Ltd.",
      location: "Mumbai, India",
      date: "November 2020 - October 2021",
      responsibilities: [
        "Orchestrated end-to-end data compilation and analysis for raw materials, systematically optimizing production workflows. This initiative resulted in a 15% increase in production efficiency and a 10% increase in revenue, demonstrating significant operational improvements.",
        "Implemented innovative data reporting techniques, including both static reports and dynamic dashboard methods, which enhanced decision-making capabilities and overall productivity.",
        "Streamlined communication between departments by conducting regular data audits, successfully reducing data discrepancies by 20%, thereby improving data accuracy and inter-departmental collaboration.",
      ],
    },
    {
      id: 3,
      position: "CEO & Administrator",
      company: "Haqurity Infotech",
      location: "Mumbai, India",
      date: "July 2017 - June 2019",
      responsibilities: [
        "Founded a cybersecurity startup with two colleagues, overseeing all operational aspects including scheduling training sessions, planning seminars, and managing finances.",
        "Collaborated with team members to drive business growth and boost organizational effectiveness.",
        "Championed the delivery of over 20 seminars on cybersecurity awareness, reaching a diverse audience and fostering community engagement.",
        "Provided comprehensive training to over 100 individuals, equipping stakeholders with essential cybersecurity skills and knowledge.",
      ],
    },
  ];

  const [expandedCards, setExpandedCards] = useState([]);

  const toggleExpand = (id) => {
    if (expandedCards.includes(id)) {
      setExpandedCards(expandedCards.filter((cardId) => cardId !== id));
    } else {
      setExpandedCards([...expandedCards, id]);
    }
  };

  return (
    <>
      <br />
      <br />
      <div className="ProjectWrapper" id="work-experience">
        <div className="Container">
          <div className="SectionTitle">Work Experience</div>
          <div className="WorkExperienceDetails">
            {workExperience.map((work) => (
              <div key={work.id} className="WorkExperienceCard">
                <h3>{work.position}</h3>
                <p>{work.company}</p>
                <p>{work.location}</p>
                <p>{work.date}</p>
                <ul>
                  {work.responsibilities.map((resp, idx) => (
                    <li
                      key={idx}
                      style={{
                        display:
                          idx < 2 || expandedCards.includes(work.id)
                            ? "block"
                            : "none",
                      }}
                    >
                      {resp}
                    </li>
                  ))}
                </ul>
                {work.responsibilities.length > 2 && (
                  <button
                    className="ViewMoreButton"
                    onClick={() => toggleExpand(work.id)}
                  >
                    {expandedCards.includes(work.id)
                      ? "View Less"
                      : "View More"}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
