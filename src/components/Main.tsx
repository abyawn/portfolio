import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DescriptionIcon from '@mui/icons-material/Description';
import Typewriter from './Typewriter';
import '../assets/styles/Main.scss';
import avatar from '../assets/images/avatar.jpg';

// Google Doc resume, opened in read-only preview. Needs the doc's link
// sharing set to "Anyone with the link" for recruiters to reach it.
const resumeUrl = 'https://docs.google.com/document/d/1qWF_o7Th-CAP7e68XQTjkqbWXVHufEtSLH_xufSPbcE/preview';

/** Rotated so the greeting is different each time the hero comes back around. */
const GREETINGS = ["Howdy!", "Hey there!", "What's up!", "How's it going?"];

/**
 * Two stanzas per cycle: the greeting and the name share the screen, one line
 * above the other, then both clear and the welcome arrives on its own.
 *
 * Built once at module scope rather than inline in the JSX: Typewriter keys its
 * timer effect on this array, so a fresh one on every render would tear the
 * pending timer down and rebuild it on each typed character.
 */
const HERO_STANZAS = GREETINGS.flatMap((greeting) => [
  [greeting, "I'm Abyan Patnam"],
  ["Welcome to my portfolio"],
]);

interface Props {
  /** False while the loading splash is still up. */
  started?: boolean;
}

function Main({ started = true }: Props) {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={avatar} alt="Abyan Patnam" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://www.linkedin.com/in/abyanpatnam/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            {/* add GitHub here when there's a profile to link */}
          </div>
          {/* The visible text animates, so the heading carries a stable label
              for screen readers and search engines. */}
          <h1 aria-label="Abyan Patnam">
            <Typewriter
              stanzas={HERO_STANZAS}
              start={started}
              typeSpeed={110}
              holdBetweenLines={1500}
              holdAfterType={2600}
              fitLines
              staticLines={["Howdy!", "I'm Abyan Patnam"]}
            />
          </h1>
          <p>MS in MIS Candidate @ Texas A&amp;M Mays Business School (2027) &middot; BBA in MIS @ University of Houston (2026)</p>

          <div className="mobile_social_icons">
            <a href="https://www.linkedin.com/in/abyanpatnam/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>

          {/* The visible label swaps on hover, so the accessible name is set
              explicitly here and both labels are hidden from assistive tech. */}
          <a
            className="resume-button"
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="View my resume (PDF)"
          >
            <DescriptionIcon aria-hidden="true"/>
            <span className="resume-label">
              <span className="resume-label-rest" aria-hidden="true">Recruiter? Start here</span>
              <span className="resume-label-hover" aria-hidden="true">View Resume</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Main;
