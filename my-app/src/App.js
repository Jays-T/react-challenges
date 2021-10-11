import css from './App.module.css';
import EventsClass from './components/EventsClass';
import EventsFunctional from './components/EventsFunctional';
import NavBarSimple from './components/NavBarSimple';
import Sidebar from './components/Sidebar';
import ConditionalRenderingFunctional from './components/ConditionalRenderingFunctional';
import ConditionalRenderingClass from './components/ConditionalRenderingClass';
import NestingComponents from './components/NestingComponents';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className = {css.App} >
      {/* Add your components here */}
      {/* <NavBarSimple /> */}
      <NavBar />
      <Sidebar word="World" first="Photos" second="Illustrations" third="Paintings"/>
      {/* <ConditionalRenderingFunctional connected={true} /> */}
      {/* <ConditionalRenderingClass isLoaded={false} /> */}
      {/* <NestingComponents /> */}
      {/* <EventsFunctional />
      <EventsClass /> */}
    </div>
  );
}

export default App;