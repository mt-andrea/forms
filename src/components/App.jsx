import React from "react";

function App() {
  return (
    <div className="container">
      <h1>Szia </h1>
      <form>
        <input name="vnev" placeholder="Vezetéknév" />
        <input name="knev" placeholder="Keresztnév" />
        <button type="button">Töröl</button>
      </form>
    </div>
  );
}

export default App;
