import Logo from '../../assets/images/Logo/FooterLogo.png'
import Facebook from '../ui/SocialMedia/facebook';
import Instagram from '../ui/SocialMedia/Instagram';
import Linkedin from '../ui/SocialMedia/Linkedin';

export function Footer() {
    return (
      <>
        <style>
          {`
            .footer {
              position: relative;
              margin-top: 6rem;
              color: grey;
              overflow: hidden;
            }
  
  
            /* Content */
  
            .footer-content {
              position: relative;
              z-index: 2;
              max-width: 1400px;
              margin: 0 auto;
              padding: 7rem 2rem 3rem;
              display: grid;
              grid-template-columns:
                repeat(auto-fit, minmax(220px, 1fr));
              gap: 3rem;
            }
  
            .footer-section h2,
            .footer-section h3 {
                color: rgba(209, 79, 79, 0.92);
              margin-bottom: 1rem;
              font-size: 1.4rem;
            }
  
            .footer-section p,
            .footer-section a {
              color: rgba(37, 37, 37, 0.92);
              line-height: 1.9;
              text-decoration: none;
              transition: 0.3s;
            }
  
            .footer-section a:hover {
              color: rgba(209, 79, 79, 0.92);
              padding-right: 5px;
            }
  
            .footer-section ul {
              list-style: none;
            }
            .SocialMediaBox {
                display: flex;
                z-index:100;
                align-items: center;
                gap: 2rem;
                flex-wrap: wrap;
                margin-top: 25px;
                margin-right:16px;
            }
                
            .footer-bottom {
              position: relative;
              z-index: 2;
              border-top:
                1px solid rgba(48, 48, 48, 0.25);
              text-align: center;
              padding: 1.5rem;
              font-weight: 100 !important;
              color: rgba(59, 59, 59, 0.49);
            }
  
          hr {
            width: 100px;
            opacity: 50%;
            margin: 0 auto;
            border: none;
            height: 1px;
            background: rgba(209, 79, 79, 0.4);
            margin-bottom: 1rem;
          }

            /* Mobile */
  
            @media (max-width: 768px) {
              .footer-content {
                text-align: center;
              }
  
              .footer-section a:hover {
                padding-right: 0;
              }
            }
          `}
        </style>
  
        <footer className="footer">

          <div className="footer-content">
            <div className="footer-section">
              <img src={Logo} width={80} height={80} alt="footerLogo" />
  
              <p>
                فروشگاه آنلاین همتا، تجربه‌ای سریع و مدرن
                برای خرید محصولات دیجیتال و روزمره.
              </p>
            </div>
  
            <div className="footer-section">
              <h3>لینک‌ها</h3>
              <hr/>
  
              <ul>
                <li>
                  <a href="/">خانه</a>
                </li>
  
                <li>
                  <a href="/">محصولات</a>
                </li>
  
                <li>
                  <a href="/">درباره ما</a>
                </li>
  
                <li>
                  <a href="/">تماس با ما</a>
                </li>
              </ul>
            </div>
  
            
            <div className="footer-section">
              <h3>ارتباط</h3>
              <hr />
              <p>support@hamta.com</p>
              <p>+98 912 000 0000</p>
              <p>تهران، ایران</p>
              <div className="SocialMediaBox">
                <Instagram/>
                <Linkedin/>
                <Facebook/>
              </div>
            </div>
          </div>
  
          <div className="footer-bottom">
            <p>
             2026   © فروشگاه همتا - تمامی حقوق محفوظ میباشد 
            </p>
          </div>
        </footer>
      </>
    );
  }
  
export default Footer;