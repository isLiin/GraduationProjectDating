import "./App.scss";
import React, { useState, useEffect } from "react";
import ViewHeader from "./Header/ViewHeader";

function App() {
  /**
   * Theme option
   *  true = light
   *  false = dark
   */
  const [themeToggle, setThemeToggle] = useState(true);
  let theme = themeToggle === true ? "light" : "dark";

  /**
   * Loader matches
   */
  const [userMatches, setUserMatches] = useState({});

  // useEffect(()=> setUserMatches({
    
  // }))


  return (
    <div className={`main ` + theme}>
      <ViewHeader
        theme={themeToggle}
        evt={setThemeToggle}
        userMatches={userMatches}
      />
      <div className="App">hello</div>
    </div>
  );
}

export default App;
