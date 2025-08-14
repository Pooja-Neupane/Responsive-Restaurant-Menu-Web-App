const menu = [
    { id: 1, title: "Pancakes", category: "breakfast", price: "$5", img: "https://tse3.mm.bing.net/th/id/OIP.LFM50PXoXnzvIC0amGUB1AHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3", desc: "Fluffy pancakes with syrup." },
    { id: 2, title: "Burger", category: "lunch", price: "$8", img: "https://tse3.mm.bing.net/th/id/OIP.hbzB7RC8rcfdb2eomSRwCgHaHO?r=0&rs=1&pid=ImgDetMain&o=7&rm=3", desc: "Juicy beef burger with fries." },
    { id: 3, title: "Steak", category: "dinner", price: "$15", img: "https://tse1.mm.bing.net/th/id/OIP.MxtY2oQ8P9jom7GuGme9YgHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3", desc: "Grilled steak with veggies." },
    { id: 4, title: "Coffee", category: "drinks", price: "$3", img: "https://tse3.mm.bing.net/th/id/OIP.kh6pUf_FKNibhozFLYeFGgHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3", desc: "Freshly brewed coffee." },
    { id: 5, title: "Omelette", category: "breakfast", price: "$4", img: "https://th.bing.com/th/id/R.b2625d00bab990f6f4c21f6f382e7b16?rik=2ud%2bYv6Tho1row&pid=ImgRaw&r=0", desc: "Cheese and tomato omelette." },
    { id: 6, title: "Pasta", category: "lunch", price: "$9", img: "https://tse2.mm.bing.net/th/id/OIP.J1YHZsi9sFLXPnOt0SPbcgHaEG?r=0&rs=1&pid=ImgDetMain&o=7&rm=3", desc: "Creamy Alfredo pasta." },
    { id: 7, title: "Pizza", category: "dinner", price: "$12", img: "https://tse1.mm.bing.net/th/id/OIP.ivIc0cBQgaG8cdfiVptZsAHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3", desc: "Cheesy pepperoni pizza." },
    { id: 8, title: "Smoothie", category: "drinks", price: "$4", img: "https://th.bing.com/th/id/R.01434f25049ac1689f18c37780d63947?rik=IPjdCsa%2fHAUomg&pid=ImgRaw&r=0", desc: "Fresh fruit smoothie." }
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
