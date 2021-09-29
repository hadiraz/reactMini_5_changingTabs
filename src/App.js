import './assets/App.css';
import "./assets/css/bootstrap.min.css"
import CreateList from './CreateList';

function App() {
  return (
    <main className="App container d-flex flex-column justify-content-center align-items-center w-100 h-100">
      <div className="top-title d-flex flex-row">
        <h2>Experience</h2>
      </div>
      <CreateList/>
    </main>
  );
}

export default App;
