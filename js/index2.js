let searchInput = document.querySelector('.search2 input');
let allRows = document.querySelectorAll('.tableContainer tr');

searchInput.addEventListener('keyup', (e) => {
    let lowerInput = searchInput.value.toLowerCase();
    
    allRows.forEach(row => {
        let rowText = row.textContent.toLowerCase();
        if (rowText.includes(lowerInput)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });

    console.log(searchInput.value);
});