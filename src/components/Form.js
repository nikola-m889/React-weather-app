import React from "react";

export default function Form(props) {
  return (
    <div className="form-container">
      <div className="form-header">
        <h1 className="appname">React weather app</h1>
      </div>
      <div className="form-input">
        <form className="region" onSubmit={(e) => props.changeRegion(e)}>
          <input
            className="locationinput"
            placeholder="Enter a city..."
            onChange={(e) => {
              props.changeInput(e.target.value);
            }}
          />
        </form>
      </div>
    </div>
  );
}
