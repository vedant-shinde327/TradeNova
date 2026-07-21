import AwardImg from "../../assets/images/largestBroker.svg";
import PressLogos from "../../assets/images/pressLogos.png";

function Award() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-6 p-5">
          <img src={AwardImg} alt="AwardImg"/>
        </div>
        <div className="col-6 p-5 mt-3">
          <h1>Largest stock broker in india</h1>
          <p className="p-1" style={{fontSize: "18px"}}>
            2+ million TradeNova clients contribute to over 15% of all retail
            order volumes in india daily by trading and investing in:
          </p>

          <div className="row">
            <div className="col-6 p-1">
              <ul>
                <li>Futures and Options</li>
                <li>Commodity derivatives</li>
                <li>Currency derivatives</li>
              </ul>
            </div>
            <div className="col-6 p-1">
              <ul>
                <li>Stock & IPOs</li>
                <li>Direct mutual funds</li>
                <li>Bonds and  Govt. Securities</li>
              </ul>
            </div>
          </div>
          <img src={PressLogos} alt="pressLogos" style={{width: "90%"}} />
        </div>
      </div>
    </div>
  );
}

export default Award;
