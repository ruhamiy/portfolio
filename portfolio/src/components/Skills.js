function Skills() {
  const skills = [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 95 },
    { name: "JavaScript", level: 85 },
    { name: "TypeScript", level: 60 },
    { name: "React", level: 75 },
    { name: "Flutter", level: 70 },
    { name: "C#", level: 65 },
    { name: "Python", level: 85 },
    { name: "ASP .NET Core", level: 60 },
    { name: "Git", level: 80 }
  ];

  return (
    <section id="skills" className="section center">
      <h2>Skills</h2>

      <div className="skills-grid">
        {skills.map((s, i) => (
          <div className="skill-box" key={i}>
            <div className="skill-header">
              <span>{s.name}</span>
              <span>{s.level}%</span>
            </div>
            <div className="skill-bar-bg">
              <div className="skill-bar-fill" style={{ width: s.level + "%" }}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;

