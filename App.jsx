import React from 'react';
import { Route, Routes } from "react-router-dom";
import About from './About';
// import Home from "./Home";

const App = () => {
  const Name = () => {
    <h5>hello world</h5>;
  };
  return (
    <>
      <h1>jishfii</h1>
      <Routes>
        {/* <Route exact path='/' component={Home} /> */}
        <Route path='/Name' component={Name} />
        <Route exact path='/' component={() => <About name=" ABOUT_PROPS" />} />
      </Routes>
    </>
  );
};
export default App;


