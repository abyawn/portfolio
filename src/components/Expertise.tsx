import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faChartLine, faRobot } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import Reveal from './Reveal';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Agile",
    "Jira",
    "Pendo",
    "Scrum",
    "Stakeholder Management",
    "Process Ops",
];

const labelsSecond = [
    "SQL",
    "Python",
    "Excel",
    "Power BI",
    "Miro",
];

const labelsThird = [
    "Copilot Studio",
    "SAP",
    "Claude Code",
    "Tech Strategy",
    "RFP Support",
];

function Expertise() {
    return (
    <div className="container" id="skills">
        <div className="skills-container">
            <Reveal><h1>Skills</h1></Reveal>
            <div className="skills-grid">
                <Reveal className="skill" delay={0}>
                    <FontAwesomeIcon icon={faUsers} size="3x"/>
                    <h3>Product &amp; Program Management</h3>
                    <p>
                        <span className="skill-lead">I'm really good at</span>
                        turning product research and analytics into sprint plans people can actually run.
                    </p>
                    <div className="flex-chips">
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </Reveal>

                <Reveal className="skill" delay={120}>
                    <FontAwesomeIcon icon={faChartLine} size="3x"/>
                    <h3>Data &amp; Business Analysis</h3>
                    <p>
                        <span className="skill-lead">Ask me about</span>
                        the dashboard that finally made the number make sense.
                    </p>
                    <div className="flex-chips">
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </Reveal>

                <Reveal className="skill" delay={240}>
                    <FontAwesomeIcon icon={faRobot} size="3x"/>
                    <h3>Enterprise AI &amp; Tech Strategy</h3>
                    <p>
                        <span className="skill-lead">I'd rather</span>
                        ship the AI agent than write the deck about the AI agent.
                    </p>
                    <div className="flex-chips">
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </Reveal>
            </div>
        </div>
    </div>
    );
}

export default Expertise;
