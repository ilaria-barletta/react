import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreeting';

function App() {
  return (
    <div className="App">
      <StatefulGreeting greeting="this is how i work, call it magic!" name="ily" />
      <FunctionalGreeting />
      <FunctionalGreetingWithProps greeting="good to meet you" name="Ily" />
    </div>
  );
}

export default App;
