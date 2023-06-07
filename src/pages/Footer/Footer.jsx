import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <footer id="footer">
    <div className="container footer-bottom clearfix">
    <div className="copyright">
    &copy; Copyright <strong><span>Arsha</span></strong>. All Rights Reserved
    </div>
    <div className="credits">
      {/* All the links in the footer should remain intact. 
       You can delete the links only if you purchased the pro version. 
       Licensing information: https://bootstrapmade.com/license/ 
       Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/arsha-free-bootstrap-html-template-corporate/  */}
      Designed by <a target='_blank' href="https://bootstrapmade.com/">BootstrapMade</a>
    </div>
  </div>
  </footer>
  )
}

export default Footer