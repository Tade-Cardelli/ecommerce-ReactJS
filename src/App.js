import './App.css';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar'
import Router from './routes';

function App() {
  return (
/*     <div className="App">
      
      <NavBar/>
      <ItemListContainer greeting={"Hello coders!"}/>
    </div> */
    <Router/>
  );
}

export default App;
