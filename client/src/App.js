import logo from './logo.svg';
import './App.css';
import {Routes, Link, Route} from 'react-router-dom'
import AddPet from './components/AddPet'
import AllPets from './components/AllPets'
import EditPet from './components/EditPet';
import OnePet from './components/OnePet';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<AllPets/>}></Route>
        <Route exact path='/pets/new' element={<AddPet/>}></Route>
        <Route exact path='/pets/edit/:id' element={<EditPet/>}></Route>
        <Route exact path='/pets/:id' element={<OnePet/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
