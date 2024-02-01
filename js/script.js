const $ = (q) => document.querySelectorAll(q);
const experience = [
  {
    organization: "Bowmans Law",
    role: "Developer - Financial Systems",
    dates: "Dec 2022 - Present",
    description: `<ul><li>Implemented integrated systems and solutions strategies in response to business needs</li>
      <li>Implemented customized solutions within the ERP system</li></ul>`,
  },
  {
    organization: "Advance (EPI-USE)",
    role: "Junior Software Engineer",
    dates: "Jan 2022 - Nov 2022",
    description: `<ul><li>Strategic integrations using Cloud Elements for an Applicants Tracking System</li>
      <li>Font-end developer in Flutter for an international Logistics company</li></ul>`,
  },
  {
    organization: "Advance (EPI-USE)",
    role: "Software Engineer - Intern",
    dates: "Jan 2021 - Dec 2021",
    description: `<ul><li>Implemented a Spring-Boot microservice to generate reports and allow csv/excel file exports.</li>
      <li>React Native developer for a WebRTC application</li></ul>`,
  },
  {
    organization: "Rock Street Productions",
    role: "Web Developer",
    dates: "2015 - Dec 2017",
    description: `<ul><li>Worked on a client basis, built web systems using MySQL, PHP and HTML.</li></ul>`,
  },
];
const skills = [
  {
    proficiency: "Professional",
    skillItems: ["HTML/CSS", "Bootstrap", "JavaScript"],
  },
  {
    proficiency: "Intermediate",
    skillItems: [
      "C#/.Net Web APIs",
      "PHP",
      "SQL",
      "NodeJS",
      "Angular",
      "Adobe XD",
      "Java",
      "Git",
    ],
  },
  {
    proficiency: "Elementary",
    skillItems: ["React", "Vue", "Flutter"],
  },
];

window.onload = () => {
  console.log("read...");
  const experienceTemplate = $("#experience-tpl")[0];
  const experienceContainer = $(".experience-container")[0];
  const skillsTemplate = $("#skill-tpl")[0];
  const skillsContainer = $(".skills-container ul")[0];

  experience.forEach((e) =>
    renderExperience(experienceContainer, experienceTemplate, e)
  );
  skills
    .sort((a, b) => b.length - a.length)
    .forEach((s) => renderSkill(skillsContainer, skillsTemplate, s));
};

const renderExperience = (container, htmlTemplate, experienceObject) => {
  const clone = htmlTemplate.content.cloneNode(true);
  addTextToElement(clone, ".organization", experienceObject.organization);
  addTextToElement(clone, ".position strong", experienceObject.role);
  addTextToElement(clone, ".position span", experienceObject.dates);
  clone.querySelector(".description").innerHTML = experienceObject.description;

  container.appendChild(clone);
};

const renderSkill = (container, htmlTemplate, skill) => {
  const clone = htmlTemplate.content.cloneNode(true);
  addTextToElement(clone, "strong", `${skill.proficiency}:`);
  skill.skillItems.forEach((s, index) => {
    if (index < skill.skillItems.length - 1) {
      addTextToElement(clone, "span", `${s},`, true);
      return;
    }
    addTextToElement(clone, "span", `${s}`, true);
  });

  container.appendChild(clone);
};

const addTextToElement = (parent, selectorQuery, text, append = false) => {
  if (append) {
    parent.querySelector(selectorQuery).innerHTML += text;
    return;
  }
  parent.querySelector(selectorQuery).textContent = text;
};
