import logo from '../images/logo.png';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';
import twitter from '../images/twitter.png';
import { NavLink } from 'react-router-dom';
import imgrick from '../images/imgrick.png';
import imgcard from '../images/imgcard.png';
import imgfreelance from '../images/imgfreelance.png';
import imgblogdecafe from '../images/imgblogdecafe.png';
import imgadatravellers from '../images/imgadatravellers.png';
import imgfrontendstore from '../images/imgfrontendstore.png';
import cv from '../assets/cvTatianaArango.pdf';
function Projects() {
  return (
    <>
      <header className="header">
        <NavLink className=" logo" to="/">
          <img className="header__logo" src={logo} alt="logo" />
        </NavLink>

        <nav className="header__nav">
          <ul className="header__nav--list">
            <li>
              {' '}
              <NavLink className=" header-link" to="/Aboutme">
                {' '}
                About me
                <span classNames="border border-top"></span>
                <span className="border border-right"></span>
                <span className="border border-bottom"></span>
                <span className="border border-left"></span>
              </NavLink>
            </li>
            <li>
              <NavLink className=" header-link" to="/Projects">
                {' '}
                Projects
                <span classNames="border border-top"></span>
                <span className="border border-right"></span>
                <span className="border border-bottom"></span>
                <span className="border border-left"></span>
              </NavLink>
            </li>
            <li>
              <NavLink className=" header-link" to="/Contact">
                {' '}
                Contact
                <span classNames="border border-top"></span>
                <span className="border border-right"></span>
                <span className="border border-bottom"></span>
                <span className="border border-left"></span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <div>
        <ul className="projects">
          <li>
            <NavLink
              className=" footer-link"
              to="https://tatianarangoc.github.io/buscador-personajes-Rick-and-Morty/#/CharacterCard"
            >
              <img className="name" src={imgrick} alt="name" />
            </NavLink>
          </li>
          <li>
            <NavLink
              className=" footer-link"
              to="http://beta.adalab.es/project-promo-r-module-2-team-2/"
            >
              <img className="name" src={imgcard} alt="name" />
            </NavLink>
          </li>
          <li>
            <NavLink
              className=" footer-link"
              to="https://tatianarangoc.github.io/freelancer/"
            >
              <img className="name" src={imgfreelance} alt="name" />
            </NavLink>
          </li>
          <li>
            <NavLink
              className=" footer-link"
              to="https://tatianarangoc.github.io/blogdecafe/"
            >
              <img className="name" src={imgblogdecafe} alt="name" />
            </NavLink>
          </li>
          <li>
            <NavLink
              className=" footer-link"
              to="https://tatianarangoc.github.io/project-adatravellers/"
            >
              <img className="name" src={imgadatravellers} alt="name" />
            </NavLink>
          </li>
          <li>
            <NavLink
              className=" footer-link"
              to="https://tatianarangoc.github.io/FrontEndStore/"
            >
              <img className="name" src={imgfrontendstore} alt="name" />
            </NavLink>
          </li>
        </ul>
      </div>
      <footer className="footer">
        <nav className="footer__nav">
          <ul className="footer__nav--list">
            <li>
              <NavLink
                className=" footer__nav--link"
                to="https://www.linkedin.com/in/tatianaarango/"
                target="_blank"
              >
                <img className="linkedin" src={linkedin} alt="logo" />
              </NavLink>
            </li>
            <li>
              <NavLink
                className=" footer__nav--link"
                to="https://github.com/Tatianarangoc"
                target="_blank"
              >
                <img className="github" src={github} alt="logo" />
              </NavLink>
            </li>
            <li>
              <NavLink
                className=" footer__nav--link"
                to="https://twitter.com/Larango07"
                target="_blank"
              >
                <img className="twitter" src={twitter} alt="logo" />
              </NavLink>
            </li>
          </ul>
        </nav>

        <a
          href={cv}
          download="cvTatianaArango"
          target="_blank"
          rel="noopener noreferrer"
          className="download"
        >
          Download CV
        </a>
      </footer>
    </>
  );
}
export default Projects;
