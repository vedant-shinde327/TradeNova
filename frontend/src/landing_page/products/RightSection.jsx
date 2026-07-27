function RightSection({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-5 p-5 mt-5" style={{ fontSize: "1.2rem" }}>
          
            <h1 className=" pt-5" style={{marginTop:"4rem"}}>{productName}</h1>
            <p>{productDescription}</p>
          

          <div>
            <a
              href={tryDemo}
              style={{ fontSize: "1.2rem", textDecoration: "none" }}
            >
              Learn more{" "}
            </a>
          </div>
        </div>

        <div className="col-7 p-5">
          <img src={imageUrl} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;