import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import kpmgLogo from '../assets/images/logos/kpmg.jpg';
import hcssLogo from '../assets/images/logos/hcss.png';
import rsmLogo from '../assets/images/logos/rsm.jpg';
import pwcLogo from '../assets/images/logos/pwc.jpg';
import '../assets/styles/Timeline.scss';

interface Role {
  title: string;
  org: string;
  location: string;
  date: string;
  blurb: string;
  logo?: string;
  /** Artwork that already has its own background, so it fills the circle. */
  fullBleed?: boolean;
  /** Shown when there is no logo asset available. */
  monogram?: string;
}

// TODO: Abyan - the blurbs are placeholder prose expanded from your keyword
// lists; rewrite each in your own words.
const ROLES: Role[] = [
  {
    title: "Technology Advisory Intern",
    org: "KPMG",
    location: "New York, NY",
    date: "Summer 2026",
    logo: kpmgLogo,
    fullBleed: true,
    blurb:
      "Building AI agents on greenfield SAP engagements with Copilot Studio, and " +
      "supporting enterprise AI strategy and Copilot RFP responses for senior client " +
      "leadership.",
  },
  {
    title: "Product Analyst Intern",
    org: "HCSS",
    location: "Houston, TX",
    date: "Spring 2026",
    logo: hcssLogo,
    blurb:
      "Partnering with product managers on discovery and release planning, turning " +
      "Pendo analytics and customer feedback into prioritized, Jira-ready requirements " +
      "across Agile sprints.",
  },
  {
    title: "Product Management Intern",
    org: "RSM US LLP",
    location: "Minneapolis, MN",
    date: "Summer 2025",
    logo: rsmLogo,
    blurb:
      "Ran stakeholder interviews and product discovery for an internal AI initiative, " +
      "and built Power BI dashboards that consolidated reporting across teams.",
  },
  {
    title: "Strategy Consulting Extern",
    org: "PwC",
    location: "Chicago, IL",
    date: "Spring 2024",
    logo: pwcLogo,
    blurb:
      "Delivered a strategy engagement for a nonprofit client, analyzing fundraising " +
      "data and shaping recommendations to grow and diversify donor revenue.",
  },
];

function Timeline() {
  return (
    <div id="career">
      <div className="items-container">
        <h1>Career</h1>
        <VerticalTimeline>
          {ROLES.map((role, index) => (
            <VerticalTimelineElement
              key={`${role.org}-${role.date}`}
              className="vertical-timeline-element--work"
              contentStyle={index === 0
                ? { background: 'white', color: 'rgb(39, 40, 34)' }
                : undefined}
              contentArrowStyle={index === 0
                ? { borderRight: '7px solid  white' }
                : undefined}
              date={role.date}
              /* No accent ring: the library draws one by default, and several of
                 these marks carry their own brand colour that it clashed with. */
              iconStyle={{ background: '#ffffff', boxShadow: 'none' }}
              icon={
                <span className={`timeline-mark${role.fullBleed ? ' is-full' : ''}`}>
                  {role.logo
                    ? <img src={role.logo} alt={role.org} />
                    : <span className="timeline-monogram">{role.monogram}</span>}
                </span>
              }
            >
              <h3 className="vertical-timeline-element-title">
                {role.title}, {role.org}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">{role.location}</h4>
              <p>{role.blurb}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
