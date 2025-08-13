const menu = [
    { id: 1, title: "Pancakes", category: "breakfast", price: "$5", img: "https://via.placeholder.com/300x150", desc: "Fluffy pancakes with syrup." },
    { id: 2, title: "Burger", category: "lunch", price: "$8", img: "https://via.placeholder.com/300x150", desc: "Juicy beef burger with fries." },
    { id: 3, title: "Steak", category: "dinner", price: "$15", img: "https://via.placeholder.com/300x150", desc: "Grilled steak with veggies." },
    { id: 4, title: "Coffee", category: "drinks", price: "$3", img: "https://via.placeholder.com/300x150", desc: "Freshly brewed coffee." },
    { id: 5, title: "Omelette", category: "breakfast", price: "$4", img: "https://via.placeholder.com/300x150", desc: "Cheese and tomato omelette." },
    { id: 6, title: "Pasta", category: "lunch", price: "$9", img: "https://via.placeholder.com/300x150", desc: "Creamy Alfredo pasta." },
    { id: 7, title: "Pizza", category: "dinner", price: "$12", img: "https://via.placeholder.com/300x150", desc: "Cheesy pepperoni pizza." },
    { id: 8, title: "Smoothie", category: "drinks", price: "$4", img: "https://via.placeholder.com/300x150", desc: "Fresh fruit smoothie." }
];

const menuContainer = document.getElementById("menu");
const filterBtns = document.querySelectorAll(".filter-btn");

// Display menu items
function displayMenuItems(items) {
    menuContainer.innerHTML = items.map(item => `
        <div class="menu-item">
            <img src="${item.img}" alt="${item.title}">
            <div class="menu-info">
                <h3>${item.title} <span>${item.price}</span></h3>
                <p>${item.desc}</p>
            </div>
        </div>
    `).join("");
}

// Filter functionality
filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const category = btn.dataset.category;
        if (category === "all") {
            displayMenuItems(menu);
        } else {
            const filteredMenu = menu.filter(item => item.category === category);
            displayMenuItems(filteredMenu);
        }
    });
});

// Load all items initially
displayMenuItems(menu);
