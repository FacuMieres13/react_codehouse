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
        <h3 className="eslogan">Jugamos juntos, ganamos juntos.</h3>

        <ul className="ul-footer">
  <li>
    <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
      <img src={LogoWpp} alt="WhatsApp" />
    </a>
  </li>
  <li>
    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
      <img src={LogoFacebook} alt="Facebook" />
    </a>
  </li>
  <li>
    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
      <img src={LogoInstagram} alt="Instagram" />
    </a>
  </li>
</ul>
      </div>
    </>
  );
};

export default Footer;
