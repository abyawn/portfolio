import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://www.linkedin.com/in/abyanpatnam/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>Built by Abyan Patnam.</p>
    </footer>
  );
}

export default Footer;
