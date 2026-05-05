import logo from './logo.svg';
import './App.css';
import Titulo from './components/Titulo';
import Subtitlo from './components/Subtitlo';

function App() {

  const valorTituloFIFA = "Pagina oficial para el mundial de la FIFA 2026";
  const valorSubtitulo = "Bienvenidos!";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Titulo titulo={valorTituloFIFA}/>
          
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hola Mundo Desde develop_emanuel
          <Subtitlo subitulo={valorSubtitulo} />
          Hola mundo desde la rama de Luis
        </a>
      </header>
    </div>
  );
}

export default App;
