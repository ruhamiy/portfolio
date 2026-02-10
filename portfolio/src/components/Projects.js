function Projects() {
  const projects = [
    { title: "Community Repair Hub", desc: "Flutter group project that helps citizens report and track public infrastructure issues in real time." },
    { title: "Hospital Management System", desc: "System developed for Zewditu Hospital to manage patients, staff, and hospital operations efficiently." },
    { title: "Virtual Aquarium", desc: "3D interactive aquarium simulation built using Three.js with realistic fish and environment." },
    { title: "Poison Detection & Defence", desc: "System designed to detect poisonous threats and provide automated defense mechanisms." },
    { title: "Diabetes Predictor", desc: "Machine learning model that predicts diabetes risk based on user input data." },
    { title: "Old Portfolio", desc: "My first personal portfolio website built about a year ago." }
  ];

  return (
    <section id="projects" className="section ">
      <h2 className="section-title">Projects</h2>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <div className="project-card" key={i}>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;