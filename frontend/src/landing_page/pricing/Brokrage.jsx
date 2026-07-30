function Brokrage() {
  return (
    <div className="container">
      <div className="row p-5 text-center border-top">
        <div className="col-8  p-4 mt-4">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-5 p-3">Brokrage calculator</h3>
          </a>
          <ul
            className="text-muted"
            style={{ lineHeight: "2.3", textAlign: "left", fontSize:"14px" }}
          >
            <li>
              Call & Trade and RMS auto-squareoff; additional charges of ₹50 +
              GST per order.
            </li>
            <li>Digital contract notes will be sent via email.</li>
            <li>
              Physical copies of contract notes, if required, shall be charged
              ₹20 per contract note. Courier charges apply.
            </li>
            <li>
              for NRI account (non-PIS), 0.5% or ₹100 per executed order for
              equity (whichever is lower).
            </li>
            <li>
              for NRI account (PIS), 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              if the account is in debit balance, any order placed will be
              charged ₹40 per executed order isntead of ₹20 per executed order.
            </li>
          </ul>
        </div>

        <div className="col-4 p-4 mt-4">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-5 p-3">List of charges</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokrage;
