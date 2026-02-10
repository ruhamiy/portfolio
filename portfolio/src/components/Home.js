function Home() {
  return (
    <section id="home" className="section home">
      <h1>I am Ruhama Ristu</h1>
      <h2 className="subtitle">Frontend Developer</h2>

      <p>
        I build modern and responsive web applications and love creating beautiful
        and user friendly interfaces. I am continuously improving my full stack skills.
      </p>

      <div className="home-buttons">
        <a href="/CV.pdf" download>
          <button className="btn">Download CV</button>
        </a>
        <a href="#contact">
          <button className="btn outline">Contact Me</button>
        </a>
      </div>

      {/* Spacer to separate buttons from Contact section */}
      <div className="spacer"></div>
    </section>
  );
}

export default Home;

