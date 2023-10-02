
import { useState } from 'react';

import Header from './components/header/Header.component';
import Form from './components/Form/Form.component';
import ResultTable from './components/ResultTable/ResultTable.component';

function App() {

  const [yearlyData, setYearlyData] = useState([]);

  const calculateHandler = (inputData) => {
    
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results


    let currentSavings = +inputData['current-savings']; 
    const yearlyContribution = +inputData['yearly-contribution']; 
    const expectedReturn = +inputData['expected-return'] / 100;
    const duration = +inputData['duration'];
    let totalInterest = 0;
    let totalInvestedCapital = 0;

    

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      totalInterest += yearlyInterest;
      totalInvestedCapital += yearlyContribution;

      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
        totalInterest: totalInterest,
        totalInvestedCapital: totalInvestedCapital,
      });
    }
    setYearlyData(yearlyData);
    // do something with yearlyData ...
  
  };

  return (
    <div>
      <Header />

      <Form calcHandler={calculateHandler} />

      {/* Todo: Show blow table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      <ResultTable yearlyData={yearlyData} />
    </div>
  );
}

export default App;
