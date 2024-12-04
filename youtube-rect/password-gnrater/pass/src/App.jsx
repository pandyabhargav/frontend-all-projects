import { useState, useCallback, useRef } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef();

  const generatePassword = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      const charIndex = Math.floor(Math.random() * str.length);
      generatedPassword += str.charAt(charIndex);
    }
    setPassword(generatedPassword);
  }, [length, numberAllowed, charAllowed]);

  const copyPasswordToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert('Password copied to clipboard');
  };

  return (
    <div className="container mt-5">
      <div className="card bg-dark text-warning mb-5">
        <div className="card-body">
          <h1 className="text-white text-center my-3">Password Generator</h1>
          <div className="input-group mb-4 shadow-sm">
            <input
              type="text"
              value={password}
              className="form-control"
              placeholder="Password"
              readOnly
              ref={passwordRef}
            />
            <button
              onClick={copyPasswordToClipboard}
              className="btn btn-primary"
            >
              Copy
            </button>
          </div>
          <div className="d-flex justify-content-between">
            <div className="d-flex align-items-center">
              <input
                type="range"
                min={6}
                max={100}
                value={length}
                className="form-range me-2"
                onChange={(e) => setLength(e.target.value)}
              />
              <label>Length: {length}</label>
            </div>
            <div className="form-check me-2">
              <input
                className="form-check-input"
                type="checkbox"
                defaultChecked={numberAllowed}
                id="numberInput"
                onChange={() => setNumberAllowed((prev) => !prev)}
              />
              <label className="form-check-label" htmlFor="numberInput">
                Numbers
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultChecked={charAllowed}
                id="characterInput"
                onChange={() => setCharAllowed((prev) => !prev)}
              />
              <label className="form-check-label" htmlFor="characterInput">
                Characters
              </label>
            </div>
          </div>
          <button onClick={generatePassword} className="btn btn-success mt-3">
            Generate Password
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
