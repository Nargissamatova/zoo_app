import "../css/Footer.css";

function Footer() {
  return (
    <div className="footer_container">
      <p>
        &copy; {new Date().getFullYear()} Nargis Samatova. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
