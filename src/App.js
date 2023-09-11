import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div>
      <NavBar/>
      <br/>
      <br/>
      <div>
        <ItemListContainer greeting='Bienvenidos'/>
      </div>
    </div>
  );
}

export default App;
