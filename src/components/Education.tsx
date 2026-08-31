import React from "react";
import Reveal from './Reveal';
import texasAmLogo from '../assets/images/logos/texas-am.jpg';
import uhLogo from '../assets/images/logos/university-of-houston.png';
import '../assets/styles/Education.scss';

interface School {
  logo: string;
  name: string;
  meta: string;
  degree: string;
  sub: string;
  /** Text on the pill at the top-right of the card. */
  award: string;
  /** Optional hover tooltip on the award pill. */
  awardEgg?: string;
}

const SCHOOLS: School[] = [
  {
    logo: texasAmLogo,
    name: 'Texas A&M University',
    meta: 'College Station, TX  ·  2025 - 2027',
    degree: 'M.S. in Management Information Systems',
    sub: 'Mays Business School',
    award: 'GPA 4.0 / 4.0',
    awardEgg: 'Trying to keep it that way.',
  },
  {
    logo: uhLogo,
    name: 'University of Houston',
    meta: 'Houston, TX  ·  2022 - 2026',
    degree: 'B.B.A. in Management Information Systems',
    sub: 'UH Excellence Scholarship · KPMG Rise Cohort · RSM Academy Scholarship · Bauer Leadership',
    award: 'Magna Cum Laude',
  },
];

function Education() {
  return (
    <div className="container" id="education">
      <div className="education-container">
        <Reveal><h1>Education</h1></Reveal>

        {SCHOOLS.map((school, index) => (
          <Reveal key={school.name} className="education-card" delay={index * 110} distance={30}>
            <div className="education-header">
              <span className="education-icon">
                <img src={school.logo} alt={school.name} />
              </span>
              <div className="education-heading">
                <h2>{school.name}</h2>
                <p className="education-meta">{school.meta}</p>
              </div>
              {school.awardEgg ? (
                <span
                  className="education-gpa egg"
                  data-egg={school.awardEgg}
                  tabIndex={0}
                >
                  {school.award}
                </span>
              ) : (
                <span className="education-gpa">{school.award}</span>
              )}
            </div>

            <p className="education-degree">{school.degree}</p>
            <p className="education-concentration">{school.sub}</p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export default Education;
