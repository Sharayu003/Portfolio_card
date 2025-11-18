// components/Bio.js

function Bio(){
    const bioText = "Aspiring full stack developer with a strong foundation in frontend and backend development. I enjoy building clean, responsive interfaces and reliable server-side applications."
    const skills = ["React","Javascript","CSS","Node.js","Git","SpringBoot","Java","MySQL", "MongoDB"];

    return (
        <div className="bio-section">
            <h3>About Me</h3>
            <p className="bio-text">{bioText}</p>
            <h3>Skills</h3>
            <div className="skills-container">
                { skills.map((skill,index) =>(
                    <span key={index} className="skill-tag">{skill}</span>
                ))}
            </div>
        </div>
    )
}

export default Bio;