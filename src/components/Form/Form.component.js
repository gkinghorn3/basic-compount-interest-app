import {useState} from 'react';


const Form = ({calcHandler, resetTable}) => {

    const [userInput, setUserInput] = useState({});




    const submitHandler = (event) => {
        event.preventDefault();
        calcHandler(userInput);   
        
    }

    const resetHandler = () => {
        setUserInput({});
        resetTable();
        
    }
    
    const inputChangeHandler = (input, value) => {
        setUserInput((prevState) => {
            return {...prevState, [input]: value}
            
        })
      
      
        
    }


  return (
    <form className='form' onSubmit={submitHandler}>
      <div className='input-group'>
        <p>
          <label htmlFor='current-savings'>Current Savings (£)</label>
          <input type='number' id='current-savings' onChange={(event) => inputChangeHandler('current-savings', event.target.value)} value={userInput['current-savings']} />
        </p>
        <p>
          <label htmlFor='yearly-contribution'>Yearly Savings (£)</label>
          <input type='number' id='yearly-contribution' onChange={(event) => inputChangeHandler('yearly-contribution', event.target.value)} value={userInput['yearly-contribution']}/>
        </p>
      </div>
      <div className='input-group'>
        <p>
          <label htmlFor='expected-return'>
            Expected Interest (%, per year)
          </label>
          <input type='number' id='expected-return' onChange={(event) => inputChangeHandler('expected-return', event.target.value)} value={userInput['expected-return']}/>
        </p>
        <p>
          <label htmlFor='duration'>Investment Duration (years)</label>
          <input type='number' id='duration' onChange={(event) => inputChangeHandler('duration', event.target.value)} value={userInput['duration']} />
        </p>
      </div>
      <p className='actions'>
        <button onClick={resetHandler} type='reset' className='buttonAlt'>
          Reset
        </button>
        <button type='submit' className='button'>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default Form;