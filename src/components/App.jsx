import React, { useState } from "react";

function App() {

  const [adatok, steAdatok] = useState({
    vnev: "",
    knev: "",
    email:""
  })

  function beallit(event) {
    const { value, name } = event.target

    steAdatok({
      ...adatok,
      [name]:value
    })
  }

  function torol() {
    steAdatok({ vnev: "", knev: "",email:"" })
  }

  return (
    <div className="container">
      <h1>Szia {adatok.vnev} {adatok.knev} </h1>
      <p>{adatok.email}</p>
      <form>
        <input
          onChange={beallit}
          name="vnev"
          placeholder="Vezetéknév"
          value={adatok.vnev}
        />
        <input
          onChange={beallit}
          name="knev"
          placeholder="Keresztnév"
          value={adatok.knev}
        />
        <input
          onChange={beallit}
          name="email"
          placeholder="e-mail"
          value={adatok.email}
        />
        <button onClick={torol} type="button">Töröl</button>
      </form>
    </div>
  );
}

export default App;
