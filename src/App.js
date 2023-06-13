import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListConteiner from './components/NavBar/ItemListConteiner/ItemListConteiner';



function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListConteiner greeting={'Bienvenidos !!'} />
    </div>
  );
}

export default App;
