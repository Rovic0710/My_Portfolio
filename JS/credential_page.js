// Certificates
const previous_btn = document.querySelector(".previous");
const next_btn = document.querySelector(".next");
const box_item = document.querySelectorAll(".box");
const dots = document.querySelectorAll(".dot");

let current_index = 0;

function show_item(index) {
    box_item.forEach((item, i) => {
        item.classList.toggle('active', i === index);
    });

    update_dots(index);
}

function update_dots(index) {
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

previous_btn.addEventListener('click', () => {
    current_index--;
    if (current_index < 0) {
        current_index = box_item.length - 1;
    }
    show_item(current_index);
});

next_btn.addEventListener('click', () => {
    current_index++;
    if (current_index >= box_item.length) {
        current_index = 0;
    }
    show_item(current_index);
});

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        current_index = i;
        show_item(current_index);
    });
})

// Skills
const box_item2 = document.querySelectorAll(".box2");
const lines = document.querySelectorAll(".line");

const items_per_page = 8;
const total_items = box_item2.length;
const total_pages = Math.ceil(total_items / items_per_page);

let current_page = 0;

function show_page(page) {
    box_item2.forEach((box, i) => {
        const start = page * items_per_page;
        const end = start + items_per_page;
        box.style.display = (i >= start && i < end) ? "block" : "none";
    });
    update_line(page);
}

function update_line(page) {
    lines.forEach((line, i) => {
        line.classList.toggle("active", i === page);
    });
}

lines.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        current_page = i;
        show_page(current_page);
    });
});
show_page(0);