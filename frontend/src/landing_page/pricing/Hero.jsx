function Hero() {
    return (
      <div className="container">
        <div className="row p-5  border-bottom fs-6 ">
          <h1 className="fs-2 text-center pt-4 mt-3">Charges</h1>
          <p className="text-center text-muted pt-2 mb-5 fs-5">
            List of all charges and taxes
          </p>
          <div className="col-6 p-5">
            <p style={{ fontSize: "17px" }}>
              We kick-started operations on the 15th of August, 2010 with the
              goal of breaking all barriers that traders and investors face in
              India in terms of cost, support, and technology. We named the
              company Zerodha, a combination of Zero and "Rodha", the Sanskrit
              word for barrier.
            </p>

            <p style={{ fontSize: "17px" }}>
              Today, our disruptive pricing models and in-house technology have
              made us the biggest stock broker in India.
            </p>

            <p style={{ fontSize: "17px" }}>
              Over 1.6+ crore clients place billions of orders every year
              through our powerful ecosystem of investment platforms,
              contributing over 15% of all Indian retail trading volumes.
            </p>
          </div>
          <div className="col-6 p-5">
            <p style={{ fontSize: "17px" }}>
              In addition, we run a number of popular open online educational
              and community initiatives to empower retail traders and investors.
            </p>

            <p style={{ fontSize: "17px" }}>
              <a href="" style={{ textDecoration: "none" }}>
                Rainmatter
              </a>
              , our fintech fund and incubator, has invested in several fintech
              startups with the goal of growing the Indian capital markets.
            </p>

            <p style={{ fontSize: "17px" }}>
              And yet, we are always up to something new every day. Catch up on
              the latest updates on our blog or see what the media is saying
              about us or learn more about our business and product
              philosophies.
            </p>
          </div>
        </div>
      </div>
    );
}

export default Hero;