function generateForm() {
    const city = document.getElementById('city').value.toLowerCase();
    let maxItems;

    switch (city) {
        case 'chennai':
            maxItems = 15;
            break;
        case 'coimbatore':
        case 'madurai':
            maxItems = 12;
            break;
        case 'salem':
            maxItems = 8;
            break;
        case 'tiruchirappalli':
            maxItems = 6;
            break;
        case 'thoothukudi':
            maxItems = 2;
            break;
        default:
            alert('Please enter a valid city name.');
            return;
    }

    const itemList = document.getElementById('item-list');
    itemList.innerHTML = '';

    for (let i = 1; i <= maxItems; i++) {
        const label = document.createElement('label');
        label.for = `item-${i}`;
        label.innerText = `Item ${i}: `;

        const input = document.createElement('input');
        input.type = 'text';
        input.id = `item-${i}`;
        input.name = `item-${i}`;
        input.min = '0';

        const br = document.createElement('br');

        itemList.appendChild(label);
        itemList.appendChild(input);
        itemList.appendChild(br);
    }
}