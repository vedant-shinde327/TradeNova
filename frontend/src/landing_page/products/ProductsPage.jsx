import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
import kiteImg from "../../assets/images/kite.png";
import coinImg from "../../assets/images/coin.png";
import varsityImg from "../../assets/images/varsity.png";

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

      <RightSection />

      <LeftSection
        imageUrl={coinImg}
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo="Coin "
        learnMore="Learn more "
        googlePlay=""
        appStore=""
      />

      <RightSection />

      <LeftSection
        imageUrl={varsityImg}
        productName="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo="Try Varsity "
        learnMore="Learn more "
        googlePlay=""
        appStore=""
      />

      <Universe />
    </>
  );
}

export default ProductsPage;
