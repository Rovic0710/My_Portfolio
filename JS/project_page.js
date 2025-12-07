// SELECTORS
const boxes = document.querySelectorAll(".box");
const dots  = document.querySelectorAll(".dot");
const prev  = document.querySelector(".previous");
const next  = document.querySelector(".next");

// SETTINGS
const items_per_page = 3;
const max_index = boxes.length - items_per_page;

// STATE
let current_index = 0;

// FUNCTIONS
function show_items(index) {
    boxes.forEach((box, i) => {
        box.style.display = (i >= index && i < index + items_per_page) 
                            ? "block" 
                            : "none";
    });

    update_dots(index);
}

function update_dots(index) {
    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
    });
}

// EVENTS
next.addEventListener("click", () => {
    current_index = (current_index >= max_index) ? 0 : current_index + 1;
    show_items(current_index);
});

prev.addEventListener("click", () => {
    current_index = (current_index <= 0) ? max_index : current_index - 1;
    show_items(current_index);
});

dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        current_index = i;
        show_items(current_index);
    });
});

// INIT
show_items(current_index);
    