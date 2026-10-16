document.addEventListener("DOMContentLoaded", function () {
    // Menú para celulares
    const menuToggle = document.getElementById("menuToggle");
    const navigation = document.getElementById("navigation");

    if (menuToggle && navigation) {
        menuToggle.addEventListener("click", function () {
            navigation.classList.toggle("active");

            const menuAbierto = navigation.classList.contains("active");
            menuToggle.setAttribute("aria-expanded", menuAbierto);
        });

        // Cerrar el menú al seleccionar una opción
        navigation.querySelectorAll("a").forEach(function (enlace) {
            enlace.addEventListener("click", function () {
                navigation.classList.remove("active");
                menuToggle.setAttribute("aria-expanded", "false");
            });
        });
    }

    // Descubrir un bioma aleatorio
    const discoverButton = document.getElementById("discoverButton");
    const discoveryResult = document.getElementById("discoveryResult");

    const biomas = [
        {
            nombre: "Bosque",
            descripcion: "Un lugar lleno de árboles donde podés conseguir madera y encontrar animales."
        },
        {
            nombre: "Desierto",
            descripcion: "Una zona seca con arena, cactus y templos que podés explorar."
        },
        {
            nombre: "Jungla",
            descripcion: "Un bioma con árboles enormes, vegetación abundante y animales."
        },
        {
            nombre: "Taiga",
            descripcion: "Un bosque frío con abetos y, en algunas zonas, nieve."
        },
        {
            nombre: "Llanuras",
            descripcion: "Un terreno abierto ideal para construir tu casa y encontrar animales."
        },
        {
            nombre: "Océano",
            descripcion: "Un mundo acuático donde podés explorar arrecifes y encontrar criaturas marinas."
        },
        {
            nombre: "Montañas",
            descripcion: "Zonas elevadas donde podés encontrar piedra, minerales y paisajes increíbles."
        }
    ];

    if (discoverButton && discoveryResult) {
        discoverButton.addEventListener("click", function () {
            const numeroAleatorio = Math.floor(Math.random() * biomas.length);
            const biomaElegido = biomas[numeroAleatorio];

            discoveryResult.innerHTML = `
                <h3>🌍 ${biomaElegido.nombre}</h3>
                <p>${biomaElegido.descripcion}</p>
            `;

            discoveryResult.classList.add("show");
        });
    }

    console.log("Minecraft: JavaScript cargado correctamente.");
});