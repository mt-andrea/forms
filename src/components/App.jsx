import React, {useState} from "react";

function App() {

  const [nev,setVnev]=useState("")

  function beallit(event) {
    setVnev(event.target.value)
  }

  return (
    <div className="container">
      <h1>Szia {vnev} </h1>
      <form>
        <input 
        onChange={beallit}
        name="vnev" 
        placeholder="Vezetéknév" 
        value={vnev}/>
        <input name="knev" placeholder="Keresztnév" />
        <button type="button">Töröl</button>
      </form>
    </div>
  );
}

export default App;
