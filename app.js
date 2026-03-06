// Datos consolidados (más sencillo y compatible)
const characters = ["Luke Skywalker", "Darth Vader", "Leia Organa"];
const planets = ["Tatooine", "Naboo", "Coruscant"];
const ships = ["Millennium Falcon", "X-Wing", "TIE Fighter"];

const dataMap = {
    characters,
    planets,
    ships
};

const contentDiv = document.getElementById("content");
const buttons = document.querySelectorAll(".nav-btn");

const render = (category) => {
    // 1. Limpiar placeholder y estado anterior
    buttons.forEach(btn => btn.classList.remove("active"));
    
    // 2. Activar botón seleccionado
    const selectedBtn = document.querySelector(`[data-category="${category}"]`);
    if (selectedBtn) selectedBtn.classList.add("active");

    // 3. Obtener los 3 nombres y ordenarlos
    const items = [...dataMap[category]].sort();

    // 4. Mostrar abajo los nombres de forma clara
    contentDiv.innerHTML = `
        <h2 style="color: #ffe81f; text-decoration: underline;">${category.toUpperCase()}</h2>
        <ul>
            ${items.map(name => `<li>${name}</li>`).join("")}
        </ul>
    `;
};

// Configurar los botones
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const category = button.dataset.category;
        render(category);
    });
});
