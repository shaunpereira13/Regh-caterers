import React from "react";
import Delicious from "./components/Delicious/Delicious"
import Services from "./components/Services/Services";
import Chef from "./components/Chef/Chef";
import Browse from "./components/Browse/Browse";
function App() {

  return (
    <div>
      <Delicious />
      <Services />
      <Chef />
      <Browse/>
    </div>
  );
}

export default App;
