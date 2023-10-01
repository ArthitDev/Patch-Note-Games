document.addEventListener("DOMContentLoaded", function () {
    const prevPageButton = document.getElementById("prevPage");
    const nextPageButton = document.getElementById("nextPage");
    const page1 = document.getElementById("page1");
    const page2 = document.getElementById("page2");
    const page3 = document.getElementById("page3");

    const totalPages = 3; // Set the total number of pages here
    let currentPage = 1;

    // Function to show the specified page
    function showPage(pageNumber) {
        page1.style.display = "none";
        page2.style.display = "none";
        page3.style.display = "none";
        document.getElementById("page" + pageNumber).style.display = "flex";
    }

    // Function to create and update the page number buttons
    function updatePageButtons() {
        const pageNumbersContainer = document.getElementById("pageNumbers");
        pageNumbersContainer.innerHTML = ""; // Clear existing buttons

        for (let i = 1; i <= totalPages; i++) {
            const pageNumberButton = document.createElement("button");
            pageNumberButton.textContent = i;
            pageNumberButton.addEventListener("click", function () {
                currentPage = i;
                showPage(currentPage);
                updatePageButtons();
            });

            // Highlight the current page button
            if (i === currentPage) {
                pageNumberButton.classList.add("active");
            }

            pageNumbersContainer.appendChild(pageNumberButton);
        }
    }

    // Initial page display and page number buttons
    showPage(currentPage);
    updatePageButtons();

    // Event listener for the "Previous" button
    prevPageButton.addEventListener("click", function () {
        if (currentPage > 1) {
            currentPage--;
            showPage(currentPage);
            updatePageButtons();
        }
    });

    // Event listener for the "Next" button
    nextPageButton.addEventListener("click", function () {
        if (currentPage < totalPages) {
            currentPage++;
            showPage(currentPage);
            updatePageButtons();
        }
    });
});
