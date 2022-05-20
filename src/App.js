import { useEffect } from "react";
import { useState } from "react";
import "./scss/style.scss";

function App() {
  const [password, setPassword] = useState("");

  const symbols =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=|/?.,~`';:№".split(
      ""
    );

  function getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
  }

  function passwordFun(lengthPass) {
    for (let i = 1; i < lengthPass; i++) {
      setPassword(
        (previousPassword) =>
          previousPassword + symbols[~~getRandomFloat(1, 87)]
      );
    }
  }
  useEffect(() => {
    setPassword("");
    passwordFun(25);
  }, []);

  return (
    <div className="App">
      <div className="container">
        <input
          type="text"
          value={password}
          onChange={console.log(password)}
          className="password"
        />
        <button
          onClick={() => {
            var rng1 = document.getElementById("myRange");
            setPassword("");
            passwordFun(rng1.value);
          }}
          className="button"
        >
          Generation
        </button>
        <br />
        <input
          type="range"
          min="1"
          max="50"
          defaultValue="25"
          className="slider"
          id="myRange"
          onInput={() => {
            var rng2 = document.getElementById("myRange");
            var p = document.getElementById("value");
            p.innerHTML = rng2.value;
            setPassword("");
            passwordFun(rng2.value);
          }}
        ></input>
        <div id="value">25</div>
      </div>
    </div>
  );
}

export default App;
