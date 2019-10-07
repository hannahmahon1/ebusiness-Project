import React from "react";
import "./App.css";
import axios from "axios";

function App({ history }) {
  const [number, setNumber] = React.useState(null);
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  function sendMessage() {
    //sends message to phone number entered
    //will need to add check user name / password etc
    setLoading(true)
    axios.post("http://localhost:4000/api/message", {number, password})
    .then(res => {
      console.log({ res })
      history.push("/partialPassword");
    })
    .catch(err => {
      console.log(err)
      setLoading(false)
    })


  }
  return (
    <div
    //aesthetic html code
      className="App"
      style={{
        backgroundImage: `linear-gradient(0deg,rgba(20,100,20,0.5), rgba(9, 93, 225, 0.5)), url(https://www.creativefabrica.com/wp-content/uploads/2018/11/Cyber-Lock-security-padlock-Background-by-ojosujono96-580x387.jpg)`
      }}
    >
      <h1 className="title">One Time Two Factor Authentication</h1>

      <div className="field">
        <label className="label">Phone Number</label>
        <div className="field">
          <div className="control">
            <input
              className="textinput"
              type="number"
              onChange={event => setNumber(event.target.value)}
              placeholder="What's your number?"
            />
          </div>
        </div>
      </div>

      <div className="field">
        <label className="label">Username</label>
        <div className="field">
          <div className="control">
            <input
              className="textinput"
              type="username"
              onChange={event => setUsername(event.target.value)}
              placeholder="user name"
            />
          </div>
        </div>
      </div>

      <div className="field">
        <label className="label">Password</label>
        <div className="control">
          <textarea
            className="textinput"
            onChange={event => setPassword(event.target.value)}
            placeholder="..."
          />
        </div>
      </div>
      <button
      // button can only be pressed when password field and number are not empty and loading = false
        disabled={loading || !password.trim() || !number}
        className={`${loading && "is-loading"} is-warning button`}
        onClick={sendMessage} //will need to include check password function 
      >
        Submit
      </button>
    </div>
  );
}

export default App;
