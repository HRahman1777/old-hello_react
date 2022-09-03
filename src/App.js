import './App.css';
import Calculator from './components/Boil/Calculator';
import Clock from './components/Clock';
import Form from './components/Form';

function App() {
  return (
    <div>
      <h1><u>Clock</u></h1>
      <Clock/>
      <br/>
      <hr />
      <h1><u>Form</u></h1>
      <Form/>
      <br />
      <hr />
      <h1><u>Boiling Calculator</u></h1>
      <Calculator/>
    </div>
  );
}

export default App;
