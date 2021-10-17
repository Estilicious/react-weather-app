import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      
      <Weather defaultCity="Seattle" />
      <footer>
        © <a href="https://esty.netlify.app" target="_blank" rel="noopener noreferrer" >Esther Chukwu </a> 2021 and is{" "} 
      <a 
      href="https://github.com/Estilicious/react-weather-app" target="_blank" rel="noopener noreferrer">
     open-sourced on Github</a> and <a href= "https://app.netlify.com/sites/hopeful-lichterman-89386c/deploys" target="_blank" rel="noopener noreferrer">Netlify</a> 
    </footer>
    </div>
    </div>
  );
}


