import css from './App.module.css';
import EventsClass from './components/EventsClass';
import EventsFunctional from './components/EventsFunctional';
import NavBarSimple from './components/NavBarSimple';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className = {css.App} >
      {/* Add your components here */}
      <NavBarSimple />
      <Sidebar word="World" first="Photos" second="Illustrations" third="Paintings"/>
      <EventsFunctional />
      <EventsClass />
    </div>
  );
}

export default App;