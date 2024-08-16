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


// new employer 

document.getElementById('newEmployeeBtn').addEventListener('click', function() {
    document.getElementById('employeeForm').style.display = 'block';
});

function addEmployee() {
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const employeeId = document.getElementById('employeeId').value.trim();
    const role = document.getElementById('role').value.trim();
    const status = document.getElementById('status').value.trim();
    const teams = document.getElementById('teams').value.trim().split(',');

    // Validate form inputs
    if (!name || !email || !employeeId || !role || !status || teams.length === 0) {
        alert('Please fill in all fields before adding a new employee.');
        return;
    }

    // Create a new row
    const table = document.getElementById('employeeTable');
    const newRow = document.createElement('tr');
    newRow.classList.add('rowTwo');

    newRow.innerHTML = `
        <td class="dataOne"><input type="checkbox" name="checkbox"><img src="./images/image1.png" alt="">
            <div><p>${name}</p><p>${email}</p></div>
        </td>
        <td class="dataTwo"><p>${employeeId}</p></td>
        <td class="dataThree"><div><p>${role}</p><p>Full time</p></div></td>
        <td class="dataFour"><ul><li>${status}</li></ul></td>
        <td class="dataFive">${teams.map(team => `<span>${team}</span>`).join('')}</td>
        <td class="dataSix">
            <img src="./images/dotsDropdown.png" alt="dropdown" onclick="toggleDropdown(this)">
            <div class="dropdownMenu" style="display:none;">
                <ul>
                    <li onclick="deleteEmployee(this)">Delete</li>
                </ul>
            </div>
        </td>
    `;

    // Append the new row to the table
    table.appendChild(newRow);

    // Clear the form fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('employeeId').value = '';
    document.getElementById('role').value = '';
    document.getElementById('status').value = '';
    document.getElementById('teams').value = '';

    // Hide the form again
    document.getElementById('employeeForm').style.display = 'none';
}

function toggleDropdown(dropdownIcon) {
    const dropdownMenu = dropdownIcon.nextElementSibling;
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
}

function deleteEmployee(deleteOption) {
    const rowToDelete = deleteOption.closest('tr');
    rowToDelete.remove();
}


// ROLE PAGE

function togglePopup() {
    var blur = document.getElementById('blur');
    var popup = document.getElementById('popup');

    blur.classList.toggle('blur');
    popup.style.display = (popup.style.display === 'none' || popup.style.display === '') ? 'block' : 'none';
}



// changing table

document.getElementById('listView').addEventListener('click', function() {
    document.querySelector('.tableContainer').classList.remove('blockView');
});

document.getElementById('galleryView').addEventListener('click', function() {
    document.querySelector('.tableContainer').classList.add('blockView');
});


// PAGINATION

document.addEventListener('DOMContentLoaded', () => {
    const itemsPerPage = 8; // Number of items per page (change as needed)
    const allPages = document.querySelectorAll('.numberSet .page-number');
    let currentPage = 1;

    // Function to update the active page and content
    function updatePagination() {
        allPages.forEach(page => {
            page.classList.remove('active');
            if (parseInt(page.textContent) === currentPage) {
                page.classList.add('active');
            }
        });
        // Update the page content here based on `currentPage` (implement as needed)
    }

    // Add event listeners to page numbers
    allPages.forEach(page => {
        page.addEventListener('click', () => {
            currentPage = parseInt(page.textContent);
            updatePagination();
        });
    });

    // Handle 'Previous' button click
    document.getElementById('arrowLeft').addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            updatePagination();
        }
    });

    // Handle 'Next' button click
    document.getElementById('next').addEventListener('click', () => {
        if (currentPage < allPages.length) {
            currentPage++;
            updatePagination();
        }
    });

    // Initialize the pagination
    updatePagination();
});





let pageNumbers = document.querySelectorAll('.pageNumber');

pageNumbers.forEach((pageNumber) => {
    pageNumber.addEventListener('click', (e) => {
        // Remove gray background from all icons
        pageNumbers.forEach((item) => item.style.backgroundColor = '');

        // Add gray background to the clicked icon
        e.currentTarget.style.backgroundColor = '#EFEFEF';
    });
});



let icons = document.querySelectorAll('.icon');

icons.forEach((icon) => {
    icon.addEventListener('click', (e) => {
        // Remove gray background from all icons
        icons.forEach((item) => item.style.backgroundColor = '');

        // Add gray background to the clicked icon
        e.currentTarget.style.backgroundColor = '#EFEFEF';
    });
});


// background: #eff1f4;
// l

// Total number of items and items per page
// const totalItems = 100; // Example total number of items
// const itemsPerPage = 10;
// const numberOfPages = Math.ceil(totalItems / itemsPerPage);

// function createPagination() {
//     const paginationContainer = document.querySelector('.numberSet');
//     paginationContainer.innerHTML = ''; // Clear existing pagination

//     for (let i = 1; i <= numberOfPages; i++) {
//         const pageNumber = document.createElement('p');
//         pageNumber.textContent = i;

//         pageNumber.addEventListener('click', function() {
//             goToPage(i);
//         });

//         paginationContainer.appendChild(pageNumber);
//     }

//     // Add the dots and remaining numbers for styling
//     const dots = document.createElement('p');
//     dots.innerHTML = '<img src="./images/numberdots.png" alt="">';
//     paginationContainer.appendChild(dots);

//     for (let i = numberOfPages - 2; i <= numberOfPages; i++) {
//         const pageNumber = document.createElement('p');
//         pageNumber.textContent = i;
//         paginationContainer.appendChild(pageNumber);
//     }
// }

// function goToPage(pageNumber) {
//     // Handle the logic to display the items for the selected page
//     console.log('Go to page:', pageNumber);
//     // Fetch and display the corresponding items for the page number
// }

// // Initialize pagination
// createPagination();
