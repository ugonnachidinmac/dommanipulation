document.querySelectorAll('.employeeAndRoles2 input[type="checkbox"]').forEach((checkbox) => {
    checkbox.addEventListener('change', function() {
        const searchInput = document.querySelector('.searchForm input[name="searchForm"]');

        // Get all checked checkboxes
        const selectedEmployees = Array.from(document.querySelectorAll('.employeeAndRoles2 input[type="checkbox"]:checked'))
            .map(checkbox => {
                return checkbox.closest('.employeeAndRoles2').querySelector('.erPara p:first-child').textContent;
            });

        // Update the input value with selected employee names and the role
        const role = "Senior Design Lead";
        searchInput.value = selectedEmployees.length > 0
            ? selectedEmployees.join(', ') + ` - ${role}`
            : ''; // Clear input if no checkboxes are checked
    });
});