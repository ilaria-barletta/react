import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreeting';
import EventsClass from './components/EventsClass';
import EventsFunctional from './components/EventsFunctional';
import EventBinding from './components/EventBinding';
import ConditionalRenderingClass from './components/ConditionalRenderingClass';
import ConditionalRenderingFunctional from './components/ConditionalRenderingFunctional';

function App() {
  return (
    <div className="App">
      <StatefulGreeting greeting="this is how i work, call it magic!" name="ily" />
      <FunctionalGreeting />
      <FunctionalGreetingWithProps greeting="good to meet you" name="Ily" />
      <EventsFunctional />
      <EventsClass />
      <EventBinding />
      <ConditionalRenderingClass />
      <ConditionalRenderingFunctional connected={true} />
      
    </div>
  );
}

export default App;
