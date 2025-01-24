// Basic functionality for row selection and pagination controls

// Handle Select All checkbox
const selectAllCheckbox = document.querySelector('.select-all');
selectAllCheckbox.addEventListener('change', (event) => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:not(.select-all)');
    checkboxes.forEach(checkbox => {
        checkbox.checked = event.target.checked;
    });
});

// Example of simple pagination (mock-up functionality)
let currentPage = 1;
const rowsPerPageSelect = document.querySelector('.rows-per-page');
const prevPageButton = document.querySelector('.prev-page');
const nextPageButton = document.querySelector('.next-page');
const pageInfo = document.querySelector('.page-info');

rowsPerPageSelect.addEventListener('change', updatePagination);
prevPageButton.addEventListener('click', prevPage);
nextPageButton.addEventListener('click', nextPage);

function updatePagination() {
    const rowsPerPage = parseInt(rowsPerPageSelect.value);
    const totalRows = document.querySelectorAll('.orders-table tbody tr').length;
    const totalPages = Math.ceil(totalRows / rowsPerPage);
    
    pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        updatePagination();
    }
}

function nextPage() {
    const rowsPerPage = parseInt(rowsPerPageSelect.value);
    const totalRows = document.querySelectorAll('.orders-table tbody tr').length;
    const totalPages = Math.ceil(totalRows / rowsPerPage);
    
    if (currentPage < totalPages) {
        currentPage++;
        updatePagination();
    }
}

// Initial pagination setup
updatePagination();
