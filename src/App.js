import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      
      <Weather defaultCity="Tokyo" />
      <footer>
        © <a href="https://esty.netlify.app" target="_blank" rel="noopener noreferrer" >Esther Chukwu </a> 2021 and is{" "} 
      <a 
      href="https://github.com/Estilicious/react-weather-app" target="_blank" rel="noopener noreferrer">
     open-sourced on github</a>
    </footer>
    </div>
    </div>
  );
}


