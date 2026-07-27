import googlePlayImg from "../../assets/images/googlePlayBadge.svg";
import appleStoreImg from "../../assets/images/appstoreBadge.svg"; 

function LeftSection({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-7 p-5">
          <img src={imageUrl} />
        </div>

        <div className="col-5 p-5 mt-5" style={{ fontSize: "1.2rem" }}>
          <h1>{productName}</h1>
          <p>{productDescription}</p>

          <div>
            <a
              href={tryDemo}
              style={{ fontSize: "1.2rem", textDecoration: "none" }}
            >
              Try Demo
            </a>
            <a
              href={learnMore}
              style={{
                marginLeft: "50px",
                textDecoration: "none",
                fontSize: "1.2rem",
              }}
            >
              Learn More
            </a>
          </div>

          <div className="mt-4">
            <a href={googlePlay}>
              <img src={googlePlayImg} alt="googlePlay" />
            </a>
            <a href={appStore} style={{ marginLeft: "40px" }}>
              <img src={appleStoreImg} alt="appleStoreImg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
