import React from "react";
import "./App.css";
import FileDataList from "./components/fileDataList";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand bg-danger">
        <a href="/" className="navbar-brand App-link p-2">
          Toolbox Challenge React App
        </a>
      </nav>
      <React.StrictMode>
        <FileDataList />
      </React.StrictMode>
    </div>
  );
}

export default App;
