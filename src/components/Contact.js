import logo from '../images/logo.png';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';
import twitter from '../images/twitter.png';
import { NavLink } from 'react-router-dom';
import cv from '../assets/cvTatianaArango.pdf';
function Contact() {
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

      <div className="contacto">
        <form className="formulario" action="#" method="POST">
          <legend>Contact me by filling in all the fields</legend>

          <div className="contenedor-campos">
            <div className="campo">
              <label>Nombre</label>

              <input type="text" name="nombre" placeholder="Nombre" required />
            </div>
            <div className="campo">
              <label>Teléfono</label>

              <input type="tel" name="telefono" placeholder="Teléfono" />
            </div>
            <div className="campo w-100">
              <label>Correo electrónico</label>

              <input
                type="mail"
                name="correo"
                placeholder="Correo electrónico"
              />
            </div>
            <div className="campo w-100">
              <label>Mensaje:</label>

              <textarea></textarea>
            </div>
          </div>
          <div className="enviar">
            <input className="boton" type="submit" value="Send" />
          </div>
        </form>
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
          Descargar CV
        </a>
      </footer>
    </>
  );
}
export default Contact;
