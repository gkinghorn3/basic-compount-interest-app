
import Header from './components/header/Header.component';
import Form from './components/Form/Form.component';
import ResultTable from './components/ResultTable/ResultTable.component';

function App() {


  const calculateHandler = (userInput) => {
    
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results


    let currentSavings = +userInput['current-savings']; 
    const yearlyContribution = +userInput['yearly-contribution']; 
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    console.log(currentSavings);

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    // do something with yearlyData ...
  
  };

  return (
    <div>
      <Header />

      <Form />

      {/* Todo: Show blow table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      <ResultTable />
    </div>
  );
}

export default App;
