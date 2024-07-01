import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './styles.css';
const skills = [
  {
    skill: 'HTML+CSS',
    level: 'advanced',
    color: '#2662EA',
  },
  {
    skill: 'JavaScript',
    level: 'advanced',
    color: '#EFD81D',
  },
  {
    skill: 'Web Design',
    level: 'advanced',
    color: '#C3DCAF',
  },
  {
    skill: 'Git and GitHub',
    level: 'intermediate',
    color: '#E84F33',
  },
  {
    skill: 'React',
    level: 'advanced',
    color: '#60DAFB',
  },
  {
    skill: 'Svelte',
    level: 'beginner',
    color: '#FF3B00',
  },
];

function App () {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar () {
  return (
    <div>
      <img
        src="https://st2.depositphotos.com/1837549/7596/i/450/depositphotos_75968529-stock-photo-cristiano-ronaldo-of-real-madrid.jpg"
        width="440"
        height="240"
      />
      <h1>Cristiano ronaldo</h1>
    </div>
  );
}

function Intro () {
  return (
    <p>
      Cristiano Ronaldo, born on February 5, 1985, in Madeira, Portugal, is a
      football legend known for his incredible athleticism and goal-scoring
      ability. He has played for top clubs such as Manchester United, Real
      Madrid, Juventus, and currently Al-Nassr. Ronaldo has won multiple FIFA
      Ballon d'Or titles and set numerous records, making him a global icon both
      on and off the field.
    </p>
  );
}

function SkillList () {
  return (
    <div>
      {skills.map (skill => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
  // <div className="skill-list">
  //   <Skill skill="Power" color="red" emoji="💪" />
  //   <Skill skill="Skills" color="blue" emoji="💪" />
  //   <Skill skill="Shooting" color="green" emoji="💪" />
  //   <Skill skill="Mentaility" color="yellow" emoji="💪" />
  // </div>
}

// Another way of showing the skills
// function Skill (props) {
//   return (
//     <div className="skill" style={{backgroundColor: props.color}}>
//       <span>{props.skill}</span>
//       <span>{props.emoji}</span>
//     </div>
//   );
// }

// function SkillList() {
//   return (
//     <div className="skill-list">
//       {skills.map((skill) => (
//         <Skill skillObj={skill} />
//       ))}
//     </div>
//   );
// }

// function Skill({ skillObj }) {
//   return (
//     <div style={{ backgroundColor: skillObj.color }}>
//       <span>{skillObj.skill}</span>
//       <span>
//         {skillObj.level === "beginner" && "👶"}
//         {skillObj.level === "intermediate" && "👍"}
//         {skillObj.level === "advanced" && "💪"}
//       </span>
//     </div>
//   );
// }

const rootElement = document.getElementById ('root');
const root = createRoot (rootElement);

root.render (
  <StrictMode>
    <App />
  </StrictMode>
);
