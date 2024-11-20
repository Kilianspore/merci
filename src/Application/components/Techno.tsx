import React from 'react';

const Techno = () => {
  const iconList = [
    "c", "docker", "linux",  "py","androidstudio", "html", "css", "js", "php", "mysql", "java", "ps"
  ];
  
  return (
    <React.Fragment>
      <h2>Technologies maitrisées</h2>
      <div className="skills-img-container">
        {iconList.map((icon, index) => (
          <img key={index} src={`https://skillicons.dev/icons?i=${icon}`} alt={icon} />
        ))}
      </div>
    </React.Fragment>
  );
}
 
export default Techno;