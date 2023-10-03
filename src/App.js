
import { useState } from 'react';

import Header from './components/header/Header.component';
import Form from './components/Form/Form.component';
import ResultTable from './components/ResultTable/ResultTable.component';

function App() {

  const [yearlyData, setYearlyData] = useState([]);
  
  const resetTable = (childState) => {
    setYearlyData([]);
  }

  


  const calculateHandler = (inputData) => {
    
  

    const userData = [];


    let currentSavings = +inputData['current-savings']; 
    const yearlyContribution = +inputData['yearly-contribution']; 
    const expectedReturn = +inputData['expected-return'] / 100;
    const duration = +inputData['duration'];
    let totalInterest = 0;
    let totalInvestedCapital = 0;

    

    // calculate yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      totalInterest += yearlyInterest;
      totalInvestedCapital += yearlyContribution;

      userData.push({
        
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
        totalInterest: totalInterest,
        totalInvestedCapital: totalInvestedCapital,
      });
    }
    setYearlyData(userData);
    
  
  };

  return (
    <div>
      <Header />

      <Form calcHandler={calculateHandler} resetTable={resetTable}  />


      {yearlyData.length === 0 && (<p className='no-data-msg'>No data to show</p>)}
      {yearlyData.length > 0 && (<ResultTable yearlyData={yearlyData} />)}
    </div>
  );
}

export default App;
