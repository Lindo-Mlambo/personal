const $ = (q) => document.querySelectorAll(q);
const experience = [
  {
    organization: "Bowmans Law",
    role: "Developer - Financial Systems",
    dates: "Dec 2022 - Present",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima aliquid maiores eos itaque esse necessitatibus voluptatem.",
  },
  {
    organization: "Advance (EPI-USE)",
    role: "Junior Software Engineer",
    dates: "Jan 2022 - Nov 2022",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima aliquid maiores eos itaque esse necessitatibus voluptatem.",
  },
  {
    organization: "Advance (EPI-USE)",
    role: "Software Engineer - Intern",
    dates: "Jan 2021 - Dec 2021",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima aliquid maiores eos itaque esse necessitatibus voluptatem.",
  },
  {
    organization: "Rock Street Productions",
    role: "Web Developer",
    dates: "2015 - Dec 2017",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima aliquid maiores eos itaque esse necessitatibus voluptatem.",
  },
];
const skills = [
  "Web Development",
  "C#/.Net Web APIs",
  "PHP",
  "SQL",
  "NodeJS",
  "Angular",
  "Adobe XD",
  "Java",
  "JavaScript",
  "Azure DevOps",
];

window.onload = () => {
  console.log("read...");
  const experienceTemplate = $("#experience-tpl")[0];
  const experienceContainer = $(".experience-container")[0];
  const skillsTemplate = $("#skill-tpl")[0];
  const skillsContainer = $(".skills-container")[0];

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
  addTextToElement(clone, ".description", experienceObject.description);

  container.appendChild(clone);
};

const renderSkill = (container, htmlTemplate, skill) => {
  const clone = htmlTemplate.content.cloneNode(true);
  addTextToElement(clone, "span", skill);

  container.appendChild(clone);
};

const addTextToElement = (parent, selectorQuery, text) => {
  parent.querySelector(selectorQuery).textContent = text;
};
