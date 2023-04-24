function calculateBill(units) {
    let rate, fixedCost, subsidy, totalCost;
  
    if (units <= 100) {
      rate = 0;
      fixedCost = 0;
    } else if (units <= 200) {
      rate = 3.75;
      fixedCost = 100;
    } else if (units <= 350) {
      rate = 4;
      fixedCost = 250;
    } else if (units <= 450) {
      rate = 4.25;
      fixedCost = 300;
    } else {
      rate = 5;
      fixedCost = 400;
    }
  
    totalCost = fixedCost + (units - 150) * rate;
    subsidy = 250;
  
    if (totalCost - subsidy <= 0) {
      subsidy = totalCost;
    }
  
    const netAmount = totalCost - subsidy + 50;
  
    console.log(`Consumed Units: ${units}`);
    console.log(`Total Current Charges Rs. ${totalCost.toFixed(1)}`);
    console.log(`Current Charges Rs. ${fixedCost.toFixed(1)}`);
    console.log(`Fixed Cost Rs.(+) 50.0`);
    console.log(`Subsidy Fixed Cost Rs.(-) 0.0`);
    console.log(`New Subsidy Rs.(-) ${subsidy.toFixed(1)}`);
    console.log(`Net Amount Rs. ${netAmount.toFixed(1)}`);
  }
  