document.addEventListener("DOMContentLoaded", function() {
    const categoryLinks = document.querySelectorAll(".side-filter a");
    const productCards = document.querySelectorAll(".product-card");
    const priceRange = document.getElementById("priceRange");
    const minPriceInput = document.getElementById("minPrice");
    const maxPriceInput = document.getElementById("maxPrice");
    const sideFilter = document.querySelector(".side-filter");

    categoryLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            const selectedCategory = link.getAttribute('data-category');
            filterProducts(selectedCategory);
            updateSelectedCategory(selectedCategory);
        });
    });

    priceRange.addEventListener('input', function() {
        updatePriceRange();
        filterProducts();
    });

    minPriceInput.addEventListener('input', function() {
        updatePriceRange();
        filterProducts();
    });

    maxPriceInput.addEventListener('input', function() {
        updatePriceRange();
        filterProducts();
    });

    function updateSelectedCategory(category) {
        const categories = document.querySelectorAll('.side-filter ul li a');
        categories.forEach(function(cat) {
            cat.classList.remove('selected');
            if (cat.getAttribute('data-category') === category) {
                cat.classList.add('selected');
            }
        });
    }

    function updatePriceRange() {
        const minPrice = parseInt(minPriceInput.value);
        const maxPrice = parseInt(maxPriceInput.value);
        const priceText = `$${minPrice} - $${maxPrice}`;
        document.getElementById("priceValue").textContent = priceText;
        // Smooth animation for price value change
        document.getElementById("priceValue").style.transition = "opacity 0.3s ease-in-out";
        document.getElementById("priceValue").style.opacity = "0";
        setTimeout(function() {
            document.getElementById("priceValue").style.opacity = "1";
        }, 300);
    }

    function filterProducts(category = null) {
        productCards.forEach(function(card) {
            const cardCategory = card.classList.contains('server') ? 'server' :
                                card.classList.contains('hardware') ? 'hardware' : '';
            const cardPrice = parseInt(card.getAttribute('data-price'));

            if ((!category || cardCategory === category) &&
                cardPrice >= parseInt(minPriceInput.value) &&
                cardPrice <= parseInt(maxPriceInput.value)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Toggle sidebar visibility
    document.querySelector('.nav-toggle').addEventListener('click', function() {
        sideFilter.classList.toggle('show');
    });
});
