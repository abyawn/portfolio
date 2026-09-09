import React from "react";
import Chip from '@mui/material/Chip';
import Reveal from './Reveal';
import '../assets/styles/Project.scss';

interface ProjectItem {
    title: string;
    /** Org and/or date, shown small and muted under the title. */
    meta?: string;
    /** Resume-style bullets. Keep each to roughly one or two lines. */
    bullets: string[];
    /** Rendered as pills at the foot of the card. */
    skills: string[];
}

// Adding a project is one object here - the grid, the stagger and the hover
// state all read from this array and nothing else needs touching.
const projects: ProjectItem[] = [
    {
        title: "Project Gigavolt",
        meta: "Enterprise Data Architecture & AI Retrieval",
        bullets: [
            "Building a RAG pipeline that answers engineers' natural-language questions on 9.5K service records with citations",
            "Cleansed 5 fragmented ERP exports with SQL into a Bronze/Silver ELT lakehouse on AWS, resolving 16 data defects",
            "Deploying vector, document, and graph stores across 6 milestones, targeting sub-20ms retrieval with provenance",
        ],
        skills: [
            "RAG", "SQL", "AWS", "ELT / Lakehouse", "Vector Search",
            "Knowledge Graphs", "Data Modeling", "Python",
        ],
    },
    {
        title: "Retail Growth Strategy Case Competition",
        meta: "MBSA National Finalist",
        bullets: [
            "Placed Top 6 nationally, presenting a restaurant expansion strategy to consultants from McKinsey, PwC, and Accenture",
            "Modeled 5 franchise portfolios at $7M+ revenue on a 2-year payback, reframing an 8-to-100 location goal into a phased plan",
        ],
        skills: [
            "Financial Modeling", "Growth Strategy", "Unit Economics",
            "Market Sizing", "Executive Presenting",
        ],
    },
    {
        title: "ForgeWorks Field Service Platform",
        meta: "Bain & Company × Umbrage Product Management Case Study",
        bullets: [
            "Led end-to-end product discovery for an industrial manufacturer whose aftermarket field service drove 35%+ of revenue at 2.5x equipment margins",
            "Mapped an 8-step legacy workflow to isolate root causes across dispatch, parts entry, and offline sync failures",
            "Decomposed the solution into 3 epics with user stories and acceptance criteria, prioritizing 21 features through an impact/effort matrix",
            "Deprioritized route optimization and predictive scheduling to protect MVP scope for a 300-technician field network",
            "Built technician and admin prototypes in Lovable and Replit AI across a 4-sprint roadmap, with FTFR, MTTR, and utilization as success metrics",
        ],
        // Kept to two rows like the other cards: "Impact/Effort Prioritization"
        // is shortened and "MVP Scoping" dropped as it doubles up with
        // "Roadmapping". A third row here would eat into the bullet area and
        // break the rhythm across the grid.
        skills: [
            "Product Discovery", "User Stories", "Prioritization",
            "Roadmapping", "Prototyping", "Lovable", "Replit AI",
        ],
    },
    {
        title: "Telecom Omnichannel Strategy",
        meta: "Deloitte Consulting Case Study",
        bullets: [
            "Drove omnichannel strategy for a $10B telecommunications client, aligning digital, in-store, and call-center journeys to address fragmented experience and revenue leakage",
            "Mapped end-to-end customer journeys and system touchpoints, identifying data silos and integration gaps impacting conversion and retention",
            "Defined a KPI framework and success metrics (conversion lift, churn reduction, channel utilization), translating strategy into measurable outcomes",
            "Led stakeholder communication across business, product, and technical teams throughout a 15-month transformation roadmap",
            "Delivered executive-ready recommendations balancing customer experience, technical feasibility, and organizational change",
        ],
        skills: [
            "Omnichannel Strategy", "Journey Mapping", "KPI Design",
            "Stakeholder Alignment", "Executive Communication",
        ],
    },
    {
        title: "24Seven Loyalty Program Application",
        meta: "Bain & Company × Umbrage Product Management Case Study",
        bullets: [
            "Designed a digital loyalty and rewards strategy for a large convenience retail chain, defining enrollment flows, cashback mechanics, and personalized incentives",
            "Mapped end-to-end journeys across in-store and digital touchpoints, identifying friction in enrollment, redemption, and engagement that limited adoption",
            "Developed a phased product roadmap (MVP to expansion) covering account creation, rewards tracking, and notifications, balancing speed-to-market with scalability",
            "Defined success metrics including activation rate, repeat visit frequency, and rewards utilization to evaluate the program post-launch",
            "Delivered executive-ready recommendations translating customer insights and technical constraints into an actionable platform strategy",
        ],
        skills: [
            "Loyalty Strategy", "Product Roadmapping", "Journey Mapping",
            "Customer Retention", "KPI Design",
        ],
    },
];

function Project() {
    return (
    <div className="projects-container" id="projects">
        <Reveal><h1>Projects</h1></Reveal>
        {projects.length === 0 ? (
            <Reveal delay={90}>
                <p className="projects-empty">In progress &mdash; coming soon.</p>
            </Reveal>
        ) : (
            <div className="projects-grid">
                {projects.map((project, index) => (
                    // Offset by column so the two cards in a row arrive in
                    // sequence rather than together.
                    <Reveal
                        key={project.title}
                        className="project-card"
                        delay={(index % 2) * 110}
                        distance={30}
                    >
                        {/* The hover scale lives on this inner element, not on
                            Reveal's wrapper: Reveal writes an inline transform,
                            and an inline style would beat the stylesheet rule. */}
                        <article className="project-card-inner">
                            <h2 className="project-title">{project.title}</h2>
                            {project.meta && (
                                <p className="project-meta">{project.meta}</p>
                            )}
                            <ul className="project-bullets">
                                {project.bullets.map((bullet) => (
                                    <li key={bullet}>{bullet}</li>
                                ))}
                            </ul>
                            <div className="flex-chips project-skills">
                                {project.skills.map((skill) => (
                                    <Chip key={skill} className="chip" label={skill} />
                                ))}
                            </div>
                        </article>
                    </Reveal>
                ))}
            </div>
        )}
    </div>
    );
}

export default Project;
