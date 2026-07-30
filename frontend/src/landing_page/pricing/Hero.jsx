import zeroImg from "../../assets/images/pricingEquity.svg";
import TwoZeroImg from "../../assets/images/intradayTrades.svg";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 fs-6 ">
        <h1 className="fs-2 text-center pt-4 mt-3">Charges</h1>
        <p className="text-center text-muted pt-2 fs-4">
          List of all charges and taxes
        </p>
      </div>

      <div className="row p-5 text-center">
        <div className="col-4  p-4">
          <img src={zeroImg} />
          <h3>Free equity delivery</h3>
          <p className="text-muted" style={{ fontSize: "17px" }}>
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>

        <div className="col-4 p-4">
          <img src={TwoZeroImg} />
          <h3>Intraday and F&O trades</h3>
          <p className="text-muted" style={{ fontSize: "17px" }}>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>

        <div className="col-4  p-4">
          <img src={zeroImg} />
          <h3>Free direct MF</h3>
          <p className="text-muted" style={{ fontSize: "17px" }}>
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
