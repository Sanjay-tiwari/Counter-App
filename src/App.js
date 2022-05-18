import React from 'react'
import Wrapper from "../src/component/Wrapper";
import Styles from "../src/styles/App.module.css";
const App = () => {
  return (
    <div className={Styles.app}>
      <header>
        <h1>Counter-App</h1>
      </header>
      <Wrapper />
    </div>
  );
};

export default App;