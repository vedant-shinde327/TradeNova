import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
import kiteImg from "../../assets/images/kite.png";
import coinImg from "../../assets/images/coin.png";
import varsityImg from "../../assets/images/varsity.png";
import consoleImg from "../../assets/images/console.png";
import kiteApiImg from "../../assets/images/kiteconnect.png";

function ProductsPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageUrl={kiteImg}
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="Try demo"
        learnMore="Learn more "
        googlePlay=""
        appStore=""
      />

      <RightSection
        imageUrl={consoleImg}
        productName="Console"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        tryDemo="Kite Connect "
      />

      <LeftSection
        imageUrl={coinImg}
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo="Coin "
        learnMore="Learn more "
        googlePlay=""
        appStore=""
      />

      <RightSection
        imageUrl={kiteApiImg}
        productName="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        tryDemo="Learn more "
      />

      <LeftSection
        imageUrl={varsityImg}
        productName="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo="Try Varsity "
        learnMore="Learn more "
        googlePlay=""
        appStore=""
      />

      <p className="fs-5 text-center m-5">
        Want to know more about our technology stack? Check out the{" "}
        <a style={{ textDecoration: "none" }} href="">
          TradeNova.tech{" "}
        </a>
        blog.
      </p>

      <Universe />
    </>
  );
}

export default ProductsPage;
