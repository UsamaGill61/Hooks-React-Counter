import React, { useState } from "react";

const App = () => {
  const [counter, changeCounter] = useState(0);
  const [usercounter, updateUserCounter] = useState('');
  console.log(usercounter)
  console.log(counter)

  return (
    <div>
      <div className="text-center">
        <h1> {counter}</h1>
      </div>
      <div className="container mt-5 text-center">
        <button
          className="btn btn-danger mr-3"
          onClick={() => changeCounter(counter + 1)}
        >
          + Counter
        </button>
        <button
          className="btn btn-primary"
          onClick={() => changeCounter(counter - 1)}
        >
          - Counter
        </button>
      </div>
      <div className="container mt-5">
        <div className="form-group">
          <label >Add Value To + Counter</label>
          <input
            type="text"
            className="form-control"
           
            onChange={(e) => updateUserCounter( e.target.value)}
          />
          <button
            className="btn btn-primary"
            onClick={() => changeCounter(usercounter)}
          >
             + Counter
          </button>
        </div>
        <div className="form-group">
          <label >Add Value To - Counter</label>
          <input
            type="text"
            className="form-control"
           
            onChange={(e) => updateUserCounter( e.target.value)}
          />
          <button
            className="btn btn-warning"
            onClick={() => changeCounter(counter-usercounter)}
          >
            - Counter
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
