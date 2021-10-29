import './App.css';
import profileImage from './img/headshot.jpg';

function App() {
  return (
    <div className="App">
      <h1>My Personal Site</h1>
      <h2>Darian Hutchinson</h2>
      <img src={profileImage} alt="headshot" />
    </div>
  );
}

export default App;
