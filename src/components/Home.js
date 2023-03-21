import logo from '../images/logo.png';
import name from '../images/name.png';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';
import twitter from '../images/twitter.png';
import cv from '../assets/cvTatianaArango.pdf';
import { NavLink } from 'react-router-dom';
function Home() {
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
                Sobre mi
                <span classNames="border border-top"></span>
                <span className="border border-right"></span>
                <span className="border border-bottom"></span>
                <span className="border border-left"></span>
              </NavLink>
            </li>
            <li>
              <NavLink className=" header-link" to="/Projects">
                {' '}
                Proyectos
                <span classNames="border border-top"></span>
                <span className="border border-right"></span>
                <span className="border border-bottom"></span>
                <span className="border border-left"></span>
              </NavLink>
            </li>
            <li>
              <NavLink className=" header-link" to="/Contact">
                {' '}
                Contacto
                <span classNames="border border-top"></span>
                <span className="border border-right"></span>
                <span className="border border-bottom"></span>
                <span className="border border-left"></span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <section>
        <div className="img">
          <img className="content__img" src={name} alt="name" />
        </div>
      </section>
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
          Descargar CV
        </a>
      </footer>
    </>
  );
}
export default Home;
