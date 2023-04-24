const parts = [
  ['Monitors', 'LCD Screens', 'LED Screens', 'Vibrant Colors'],
  ['Motherboards', 'Fast'],
  ['Chips', 'i9', 'i7', 'i5', 'i3', 'Core2Duo', 'Pentium', 'Very Fast'],
  ['Hard Drives', '2TB', '1TB', '100-500 GB', 'Fast Reading'],
  ['DVD-ROMs', 'Burn CDs', 'Burn DVDs'],
  ['Cases', 'ATX', 'AT', 'Mini', 'Other Sizes', 'Choice of Colors'],
  ['Power Supplies', 'we can get one for any computer!']
];

const partsList = document.getElementById('computer-parts');

parts.forEach(part => {
  const partName = part[0];
  const partFeatures = part.slice(1).join(', ');
  const partItem = document.createElement('div');
  partItem.innerHTML = `${partName}: ${partFeatures}<br>`;
  partsList.appendChild(partItem);
});
