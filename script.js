function customSearchRedirect() {
    var query = document.getElementById("searchInput").value.toLowerCase().trim();

    // Specific subcategories first
    if (query.includes("men bags")) {
        window.location.href = "men-bags.html";
    } else if (query.includes("men hoodies")) {
        window.location.href = "men-hoodies.html";
    } else if (query.includes("men shoes")) {
        window.location.href = "men-shoes.html";
    } else if (query.includes("women shoes")) {
        window.location.href = "women-shoes.html";
    } else if (query.includes("women bags")) {
        window.location.href = "women-bags.html";
    } else if (query.includes("women dresses")) {
        window.location.href = "women-dresses.html";


    // If they typed anything random (not empty)
    } else if (query !== "") {
        var myModal = new bootstrap.Modal(document.getElementById('searchNotFoundModal'));
        myModal.show();

    // If they pressed Enter on empty search
    } else {
        window.location.href = "shop.html";
    }

    return false; // prevent default form action
}

function redirectHome() {
    window.location.href = "index.html";
}









// ai


// Toggle AI assistant panel with animation
function toggleAssistantMenu() {
    var panel = document.getElementById("aiAssistantPanel");
    if (panel.classList.contains("active")) {
        panel.classList.remove("active");
        setTimeout(() => panel.style.display = "none", 300);  // Wait for animation to finish
    } else {
        panel.style.display = "flex";
        setTimeout(() => panel.classList.add("active"), 10);  // Allow display:flex before animating
    }
}


// Redirect logic
function goToPage(url) {
    window.location.href = url;
}





// ----------------- Contact Page Thank You Logic -----------------
function showThankYou() {
    var myModal = new bootstrap.Modal(document.getElementById('thankYouModal'));
    myModal.show();

    // Clear form
    document.querySelector('.contact-form').reset();

    return false;
}

