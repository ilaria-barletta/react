import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreeting';
import EventsClass from './components/EventsClass';
import EventsFunctional from './components/EventsFunctional';
import EventBinding from './components/EventBinding';


function App() {
  return (
    <div className="App">
      <StatefulGreeting greeting="this is how i work, call it magic!" name="ily" />
      <FunctionalGreeting />
      <FunctionalGreetingWithProps greeting="good to meet you" name="Ily" />
      <EventsFunctional />
      <EventsClass />
      <EventBinding />
      
    </div>
  );
}

export default App;
