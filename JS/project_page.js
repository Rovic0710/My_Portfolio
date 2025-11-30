// Projects
const boxes = document.querySelectorAll(".box");
const dots = document.querySelectorAll(".dot");
const previous_btn = document.querySelector(".previous");
const next_btn = document.querySelector(".next");

const items_per_page = 3;
const total_items = boxes.length;
const total_pages = Math.ceil(total_items / items_per_page);

let current_page = 0;

function show_page(page) {
    boxes.forEach((box, i) => {
        const start = page * items_per_page;
        const end = start + items_per_page;
        box.style.display = (i >= start && i < end) ? "block" : "none";
    });
    update_dots(page);
}

function update_dots(page) {
    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === page);
    });
}

dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        current_page = i;
        show_page(current_page);
    });
});
show_page(0);

previous_btn.addEventListener('click', () => {
    current_page--;
    if (current_page < 0) {
        current_page = total_pages - 1;
    }
    show_page(current_page);
});

next_btn.addEventListener('click', () => {
    current_page++;
    if (current_page >= total_pages) {
        current_page = 0;
    }
    show_page(current_page);
});