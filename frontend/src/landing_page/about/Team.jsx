import FounderImg from "../../assets/images/founderImg.png";

function Team() {
  return (
    <div className="container">
      <div className="row ">
        <h2 className="fs-4 text-center">People</h2>
      </div>

      <div className="row fs-6 " style={{ lineHeight: "1.9" }}>
        <div className="col-5 p-5 text-center">
          <img
            src={FounderImg}
            alt="FounderImg"
            style={{ borderRadius: "100%", height: "25%" }}
          />
          <h5 className=" pt-4">Vedant Shinde</h5>
          <p className="text-muted pt-2">Founder, CEO</p>
        </div>

        <div className="col-7 p-5">
          <p style={{ fontSize: "17px" }}>
            Vedant Shinde founded TradeNova with the vision of making investing
            simple, transparent, and technology-driven. As Founder & CEO, he is
            passionate about building modern fintech solutions and
            high-performance web applications that deliver a seamless trading
            experience.
          </p>

          <p style={{ fontSize: "17px" }}>
            Outside of development, he enjoys exploring financial markets,
            learning emerging technologies, and turning innovative ideas into
            real-world products.
          </p>

          <p style={{ fontSize: "17px" }}>
            Connect on
            <a
              href="https://www.linkedin.com/in/vedant-shinde03/"
              style={{ textDecoration: "none" }}
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
