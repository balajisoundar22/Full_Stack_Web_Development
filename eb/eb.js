function calculateBill() {
  const subsidyAmount = 250;
  const consumedUnits = parseFloat(document.getElementById('units').value);
  let totalCost = 0;
  let fixedCost = 0;
  let subsidyFixedCost = 0;
  let newSubsidy = 0;

  if (consumedUnits <= 100) {
    totalCost = 0;
  } else if (consumedUnits <= 200) {
    totalCost = (consumedUnits - 100) * 3.75 + 100;
  } else if (consumedUnits <= 400) {
    totalCost = 100 * 3.75 + 100;
    totalCost += (consumedUnits - 200) * 4 + 250;
  } else if (consumedUnits <= 600) {
    totalCost = 100 * 3.75 + 100;
    totalCost += 200 * 4 + 250;
    totalCost += (consumedUnits - 400) * 4.25 + 300;
  } else {
    totalCost = 100 * 3.75 + 100;
    totalCost += 200 * 4 + 250;
    totalCost += 400 * 4.25 + 300;
    totalCost += (consumedUnits - 600) * 5 + 400;
  }

  fixedCost = 50;
  newSubsidy = subsidyAmount;
  subsidyFixedCost = 0;

  const netAmount = totalCost + fixedCost - subsidyFixedCost - newSubsidy;

  const result = `
    <p>Consumed Units: ${consumedUnits.toFixed(1)}</p>
    <p>Total Current Charges Rs. ${totalCost.toFixed(1)}</p>
    <p>Current Charges Rs. ${totalCost.toFixed(1)}</p>
    <p>Fixed Cost Rs.(+) ${fixedCost.toFixed(1)}</p>
    <p>Subsidy Fixed Cost Rs.(-) ${subsidyFixedCost.toFixed(1)}</p>
    <p>New Subsidy Rs.(-) ${newSubsidy.toFixed(1)}</p>
    <p>Net Amount Rs. ${netAmount.toFixed(1)}</p>
  `;

  document.getElementById('result').innerHTML = result;
}
