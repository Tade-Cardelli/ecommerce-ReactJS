import './App.css';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={"Bienvenido a mi pagina"}/>
    </div>
  );
}

export default App;
