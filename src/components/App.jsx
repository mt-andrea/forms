import React, { useState } from "react";

function App() {

  const [teljesNev, setTeljesnev] = useState({
    vnev: "",
    knev: ""
  })

  function beallit(event) {
    const {value, name}=event.target

    if (name==="vnev") {
      setTeljesnev({
        vnev:value,
        knev: teljesNev.knev
      })
    }else if (name==="knev") {
      setTeljesnev({
        vnev:teljesNev.vnev,
        knev: value
      })
    }

  }

  return (
    <div className="container">
      <h1>Szia {teljesNev.vnev} {teljesNev.knev} </h1>
      <form>
        <input
          onChange={beallit}
          name="vnev"
          placeholder="Vezetéknév"
          value={vnev} 
          />
        <input 
        onChange={beallit}
        name="knev" 
        placeholder="Keresztnév"
        value={teljesNev.knev} 
        />
        <button type="button">Töröl</button>
      </form>
    </div>
  );
}

export default App;
