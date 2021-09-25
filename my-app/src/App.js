import css from './App.module.css';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      <Sidebar word="World" first="Photos" second="Illustrations" third="Paintings"/>
    </div>
  );
}

export default App;