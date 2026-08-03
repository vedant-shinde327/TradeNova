import Logo from "../assets/images/TradeNova-logo.png";
import "../../src/index.css";


function Footer() {
  return (
    <footer className="footer-container shadow-sm border-top">
      <div className="container">
        <div className="row p-5">
          <div className="col">
            <a className="navbar-brand" href="#">
              <img
                src={Logo}
                alt="TradeNova"
                width="40"
                height="40"
                className="me-2"
              />
              <span className="fw-bold fs-4" style={{ color: "#387ed1" }}>
                TradeNova
              </span>
              <p className="text-muted" style={{ fontSize: "12px" }}>
                &copy; 2010 - 2026, TradeNova Broking Ltd. <br />
                All rights reserved.
              </p>
            </a>
          </div>
          <div className="col">
            <p>Account</p>

            <a href="/signup" className="text-muted footer-links">
              Open demat account
            </a>
            <br />
            <a href="/signup" className="text-muted footer-links">
              Minor demat account
            </a>
            <br />
            <a href="/signup" className="text-muted footer-links">
              NRI demat account
            </a>
            <br />
            <a href="/signup" className="text-muted footer-links">
              HUF demat account
            </a>
            <br />
            <a href="" className="text-muted footer-links">
              Commodity
            </a>
            <br />

            <a href="" className="text-muted footer-links">
              Dematerialisation
            </a>
            <br />
            <a href="/" className="text-muted footer-links">
              Fund transfer
            </a>
            <br />
            <a href="" className="text-muted footer-links">
              MTF
            </a>
            <br />
          </div>

          <div className="col">
            <p>Support</p>

            <a href="" className="text-muted footer-links">
              Contact us
            </a>
            <br />
            <a href="/support" className="text-muted footer-links">
              Support portal
            </a>
            <br />
            <a href="/support" className="text-muted footer-links">
              How to file a complaint?
            </a>
            <br />
            <a href="/support" className="text-muted footer-links">
              Status of your complaints
            </a>
            <br />
            <a href="" className="text-muted footer-links">
              Bulletin
            </a>
            <br />
            <a href="" className="text-muted footer-links">
              Circular
            </a>
            <br />
            <a href="" className="text-muted footer-links">
              Z-Connect blog
            </a>
            <br />
            <a href="" className="text-muted footer-links">
              Downloads
            </a>
            <br />
          </div>

          <div className="col">
            <p>Company</p>
            <a href="/about" className="text-muted footer-links">
              About
            </a>
            <br />
            <a href="" className="text-muted footer-links">
              Philosophy
            </a>
            <br />
            <a href="" className="text-muted footer-links">
              Press & media
            </a>
            <br />
            <a href="" className="text-muted footer-links">
              Careers
            </a>
            <br />
            <a href="" className="text-muted footer-links">
              Zerodha Cares (CSR)
            </a>
            <br />
            <a href="" className="text-muted footer-links">
              Zerodha.tech
            </a>
            <br />
            <a href="" className="text-muted footer-links">
              Open source
            </a>
            <br />
            <a href="" className="text-muted footer-links">
              Referral program
            </a>
            <br />
          </div>

          <div className="col">
            <p>Quick links</p>
            <a href="" className="text-muted footer-links">
              Upcoming IPOs
            </a>
            <br />
            <a href="/pricing" className="text-muted footer-links">
              Brokerage charges
            </a>
            <br />
            <a href="" className="text-muted footer-links">
              Market holidays
            </a>
            <br />
            <a href="" className="text-muted footer-links">
              Economic calendar
            </a>
            <br />
            <a href="/pricing" className="text-muted footer-links">
              Calculators
            </a>
            <br />
            <a href="" className="text-muted footer-links">
              Markets
            </a>
            <br />
            <a href="" className="text-muted footer-links">
              Sectors
            </a>
            <br />
            <a href="" className="text-muted footer-links">
              Gift Nifty
            </a>
            <br />
          </div>
        </div>

        <div className="p-5 text-small">
          <p className="text-muted " style={{ fontSize: "12px" }}>
            Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI
            Registration no.: INZ000031633 CDSL/NSDL: Depository services
            through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019
            Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross,
            Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase,
            Bengaluru - 560078, Karnataka, India. For any complaints pertaining
            to securities broking please write to complaints@zerodha.com, for DP
            related to dp@zerodha.com. Please ensure you carefully read the Risk
            Disclosure Document as prescribed by SEBI | ICF
          </p>

          <p className="text-muted" style={{ fontSize: "12px" }}>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>

          <p className="text-muted" style={{ fontSize: "12px" }}>
            Smart Online Dispute Resolution | Grievances Redressal Mechanism
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing. Attention
            investors: (1) Stock brokers can accept securities as margins from
            clients only by way of pledge in the depository system w.e.f
            September 01, 2020. (2) Update your e-mail and phone number with
            your stock broker / depository participant and receive OTP directly
            from depository on your e-mail and/or mobile number to create
            pledge. (3) Check your securities / MF / bonds in the consolidated
            account statement issued by NSDL/CDSL every month.
          </p>

          <p className="text-muted" style={{ fontSize: "12px" }}>
            Smart Online Dispute Resolution | Grievances Redressal Mechanism
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing. Attention
            investors: (1) Stock brokers can accept securities as margins from
            clients only by way of pledge in the depository system w.e.f
            September 01, 2020. (2) Update your e-mail and phone number with
            your stock broker / depository participant and receive OTP directly
            from depository on your e-mail and/or mobile number to create
            pledge.( 3) Check your securities / MF / bonds in the consolidated
            account statement issued by NSDL/CDSL every month.
          </p>

          <p className="text-muted" style={{ fontSize: "12px" }}>
            *Customers availing insurance advisory services offered by Ditto
            (Tacterial Consulting Private Limited | IRDAI Registered Corporate
            Agent (Composite) License No CA0738) will not have access to the
            exchange investor grievance redressal forum, SEBI SCORES/ODR, or
            arbitration mechanism for such products. Fixed deposit products
            offered on this platform are third-party products (TPP) and are not
            Exchange traded products. These are offered through Blostem Fintech
            Private Limited. Zerodha Broking Limited (SEBI Registration No.:
            INZ000031633) is acting solely as a distributor for these products.
            Any disputes arising with respect to such distribution activity will
            not have access to SEBI SCORES/ODR, Exchange Investor Grievance
            Redressal Forum, or Arbitration mechanism. Fixed deposits are
            regulated by the Reserve Bank of India (RBI).
          </p>

          <p className="text-muted" style={{ fontSize: "12px" }}>
            NSE BSE MCX MSEI Terms & conditions Policies & procedures Privacy
            policy Disclosure For investor's attention Investor charter Sitemap
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
