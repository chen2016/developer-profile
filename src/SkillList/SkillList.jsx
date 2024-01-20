import Skill from "../Skill/Skill";

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="😊" color="grey" />
      <Skill skill="Html + CSS" emoji="👍" color="orange" />
      <Skill skill="C++" emoji="👍" color="red" />
      <Skill skill=".NET Core" emoji="😊" color="blue" />
      <Skill skill="MongoDB" emoji="👍" color="cyan" />
      <Skill skill="SQL" emoji="😊" color="green" />
    </div>
  );
}

export default SkillList;
