import Wrapper from "./Components/Wrapper";
import Styles from './Styles/App.module.css'
const App=()=> {
  return (
    <div className={Styles.app}>
      <header>
        <h1>Counter App</h1>
      </header>
      <Wrapper />
    </div>
  );
}

export default App;