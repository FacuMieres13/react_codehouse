import "./footer.css";
import LogoWpp from "/public/Media/whatsappLogo.png";
import LogoFacebook from "/public/Media/facebookLogo.png";
import LogoInstagram from "/public/Media/instagramLogo.png";
import Logo from "/public/Media/EokaStoreLogo.png";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <a href="">
          <img className="logo-footer" src={Logo} alt="" />
        </a>

        <ul className="ul-footer">
          <li>
            <a href="">
              <img src={LogoWpp} alt="" srcset="" />
            </a>
          </li>
          <li>
            <a href="">
              <img src={LogoFacebook} alt="" srcset="" />
            </a>
          </li>
          <li>
            <a href="">
              <img src={LogoInstagram} alt="" srcset="" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
