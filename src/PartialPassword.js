import React from "react";
import "./App.css";

function partialPassword() {
  var partialPassword = 0; // this will be the password sent to user
  var setPartialPassword; // this is set below by what user enters
   

  /* function checkPassword() {
    //will need to actually check user name / password etc
    setLoading(true)
   
    .then(res => {
      console.log({ res })
      history.push("/success");
    })
    .catch(err => {
      console.log(err)
      setLoading(false)
    })
  }*/

  
  return (
    <div
    className="App"
    style={{
      backgroundImage: `linear-gradient(0deg,rgba(20,100,20,0.5), rgba(9, 93, 225, 0.5)), url(https://www.creativefabrica.com/wp-content/uploads/2018/11/Cyber-Lock-security-padlock-Background-by-ojosujono96-580x387.jpg)`
    }}
  >
    <h1 className="title">One Time Two Factor Authentication</h1>

    <div className="field">
      <label className="label">Partial Password</label>
      <div className="field">
        <div className="control">
          <input
            className="textinput"
            type="partialPassword"
            onChange={event => setPartialPassword(event.target.value)}
            placeholder="partial password"
          />
        </div>
      </div>
    </div>
    <button
        //disabled={loading || !partialPassword.trim()}
        //className={`${loading && "is-loading"} is-warning button`}
        //onClick={checkPassword}
      >
        Submit
      </button>
    </div>
  );
}

export default partialPassword;