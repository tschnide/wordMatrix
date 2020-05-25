import React from "react";
import InteractiveTable from "./InteractiveTable";
import ButtonPanel from "./ButtonPanel";
import "./App.css";

const App = () => {
    return (
        <div className="row App">
            <ButtonPanel/>
            <InteractiveTable/>
            
        </div>
      );
}
 
export default App; 