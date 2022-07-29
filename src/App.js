import './App.css';
import Header from './components/Header';
import Services from './components/Services';
import Services2 from './components/Services2';
import Safe_Service from './components/Safe_Service';
import ServiceType2 from './components/ServiceType2';
import ServiceType2_1 from './components/ServiceType2_1';
import ServiceType2_2 from './components/ServiceType2_2';
import Assured from './components/Assured';
import Service3 from './components/Service3';
import Service50 from './components/Service50';

function App() {
  return (
    <div className="App">

      <Header></Header>
      <Services></Services>
      <Services2></Services2>
      <Safe_Service></Safe_Service>
      <ServiceType2></ServiceType2>
      <ServiceType2_1></ServiceType2_1>
      <Assured></Assured>
      <ServiceType2_2></ServiceType2_2>
      <Service3></Service3>
      <Service50></Service50>
    </div>
  );
}

export default App;
