import googlePlayImg from "../../assets/images/googlePlayBadge.svg";
import appleStoreImg from "../../assets/images/appstoreBadge.svg"; 

function LeftSection({
  imgaeUrl,
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
        <div className="col-6 p-5">
          <img src={imgaeUrl} alt="" />
        </div>
        <div className="col-6">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <a href={tryDemo}>Try Demo</a>
          <a href={learnMore}>Learn More</a>
          <a href={googlePlay}>
            <img src={googlePlayImg} alt="googlePlay" />
          </a>
          <a href={appStore}>
            <img src={appleStoreImg} alt="appleStoreImg" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
