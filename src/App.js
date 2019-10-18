import React, {useState} from 'react';
import './App.css';
import Pet from './Pet';

function App() {
  const [food, setFood] = useState(0);
  const incrementFood = () => {
    setFood(food + 1)
  }
  return (
  <div className="App">
    <header className="App-header">
      <Pet incrementFood={incrementFood} />
      {food}
    </header>
  </div>
)};


export default App;
