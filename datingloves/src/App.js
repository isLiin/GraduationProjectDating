import './App.scss';
import React, { useState } from 'react';
import ViewHeader from './Header/ViewHeader';

function App() {

  /**
   * Theme option
   *  true = light
   *  false = dark
   */
  const [themeToggle, setThemeToggle] = useState(true);

  let theme = (themeToggle === true) ? 'light' : 'dark';

  return (
    <div className={`main ` + theme}>
      <ViewHeader
        theme={themeToggle}
        evt={setThemeToggle} />
      <div className="App">
        hello
      </div>
    </div>
  );
}

export default App;
