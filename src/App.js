import logo from './logo.svg';
import './App.css';
import { MyList } from './Components/MyList';
import  VehicleMakeList from './Components/VehicleMakeList';
import VehicleModelList from './Components/VehicleModelList';

function App() {



  return (
    <div className="App">
      <div style={{padding: "30px 20% 0 20%"}}>
        <VehicleMakeList />
        <div />
        <VehicleModelList />
      </div>

    </div>
  );
}

export default App;
