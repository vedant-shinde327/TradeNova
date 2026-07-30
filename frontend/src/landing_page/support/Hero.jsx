import "./Hero.css";

function Hero() {
  return (
    <section className="support-hero">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h1 className="support-title">Support Portal</h1>
          </div>

          <button className="btn btn-primary px-4 py-2">My Tickets</button>
        </div>

        <div className="serach-box">

          <input
          
            type="text"
            className="form-control"
            placeholder="Eg: How do I open my account? How do I activate F&O?"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
