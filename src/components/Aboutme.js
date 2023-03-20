import logo from '../images/logo.png';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';
import twitter from '../images/twitter.png';
import html from '../images/html.png';
import css from '../images/css.png';
import js from '../images/js.png';
import nodejs from '../images/nodejs.png';
import react from '../images/react.png';
import bootstrap from '../images/bootstrap.png';
import slack from '../images/slack.png';
import trello from '../images/trello.png';
import github2 from '../images/github2.png';
import picture from '../images/picture.png';
import { NavLink } from 'react-router-dom';
import cv from '../assets/cvTatianaArango.pdf';
function Aboutme() {
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
      <hr />
      <main className="aboutme">
        <section className="aboutme__content">
          <article>
            <img className="logos__img picture" src={picture} alt="logos" />
            <p class="aboutme__content--text">
              Soy desarrolladora web, me encanta aprender y mejorar mis
              habilidades a diario, y me especializo en tecnologías Frontend.
              Aunque siempre estoy dispuesta a explorar nuevos lenguajes,
              librerías y frameworks. Soy desarrolladora, así que sé cómo crear
              tu sitio web para ejecutarse en dispositivos que utilizan estas
              tecnologías:
            </p>

            <img className="logos__img" src={html} alt="logos" />
            <img className="logos__img" src={css} alt="logos" />
            <img className="logos__img" src={js} alt="logos" />
            <img className="logos__img" src={nodejs} alt="logos" />
            <img className="logos__img" src={react} alt="logos" />
            <img className="logos__img" src={bootstrap} alt="logos" />
          </article>

          <article>
            <h2 className="aboutme__subtitle">Algunas herramientas:</h2>
            <img className="logos__img" src={slack} alt="logos" />
            <img className="logos__img" src={trello} alt="logos" />
            <img className="logos__img" src={github2} alt="logos" />
          </article>
        </section>

        <section className="aboutme__content">
          <h2 className="aboutme__subtitle">Puedo ayudarte</h2>
          <p class="aboutme__content--text">
            Si tienes agun proyecto que quieras comenzar y piensas que necesitas
            mi ayuda con algo o solo deseas saludar entonces colocate en
            contacto conmigo.
          </p>
        </section>
      </main>
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
export default Aboutme;
