import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './styles.css';

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
    <div className="skill-list">
      <Skill skill="Power" color="red" emoji="💪" />
      <Skill skill="Skills" color="blue" emoji="💪" />
      <Skill skill="Shooting" color="green" emoji="💪" />
      <Skill skill="Mentaility" color="yellow" emoji="💪" />
    </div>
  );
}

function Skill (props) {
  return (
    <div className="skill" style={{backgroundColor: props.color}}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById ('root');
const root = createRoot (rootElement);

root.render (
  <StrictMode>
    <App />
  </StrictMode>
);
