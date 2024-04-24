document.addEventListener("DOMContentLoaded", function() {
    // Selecting the sidebar and the toggle button
    const sidebar = document.getElementById("sidebar");
    const toggleButton = document.getElementById("toggle-sidebar");

    // Adding event listener to the toggle button
    toggleButton.addEventListener("click", function() {
        // Toggling the 'active' class to show/hide the sidebar
        sidebar.classList.toggle("active");
    });
});