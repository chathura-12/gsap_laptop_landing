import "../styles/Footer.css";
import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer id="footer" className="layout-wrapper">
      <div className="f-info">
        <p>More ways to shop, <span>Find an Moonlit Store</span> or <span>other retailer</span>
        near you. Or call 000111 222 333444</p>
        <div className="f-logo">
          <img src="/logo.svg" alt="Moonlit Logo" />
        </div>
      </div>
      <hr/>
      <div className="f-links">
        <p>Copyright © 2026 Moonlit Inc. All rights reserved.</p>
        <ul className="f-list">
          {footerLinks.map((label) =>
            <li className="f-link" key={label}>
              <a href={`#${label}`}>{label}</a>
            </li>
          )}
        </ul>
      </div>
    </footer>
  )
}

export default Footer