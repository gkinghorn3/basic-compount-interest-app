import {useState} from 'react';


const Form = (props) => {

    const [userInput, setUserInput] = useState({});

    const submitHandler = (event) => {
        event.preventDefault();
        console.log('submit')
    }

    const resetHandler = () => {
        console.log('reset');
    }
    
    const inputChangeHandler = (input, value) => {
        setUserInput((prevState) => {
            return {...prevState, [input]: value}
            
        })
        
    }


  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings (£)</label>
          <input type="number" id="current-savings" onChange={(event) => inputChangeHandler('current-savings', event.target.value)} />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings (£)</label>
          <input type="number" id="yearly-contribution" onChange={(event) => inputChangeHandler('yearly-contribution', event.target.value)} />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input type="number" id="expected-return" onChange={(event) => inputChangeHandler('expected-return', event.target.value)}/>
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input type="number" id="duration" oonChange={(event) => inputChangeHandler('duration', event.target.value)} />
        </p>
      </div>
      <p className="actions">
        <button onClick={resetHandler} type="reset" className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default Form;