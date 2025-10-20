document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".glass-container");

    // Solo aplica el efecto en dispositivos que no sean táctiles (como PC)
    if (!("ontouchstart" in window)) {
        container.addEventListener("mousemove", (e) => {
            const { clientX, clientY } = e;
            const { offsetWidth, offsetHeight, offsetLeft, offsetTop } = container;

            // Calcula la posición del mouse relativa al centro de la tarjeta
            const x = clientX - (offsetLeft + offsetWidth / 2);
            const y = clientY - (offsetTop + offsetHeight / 2);

            // Define la intensidad de la inclinación
            const maxTilt = 8; // Grados

            // Calcula la rotación
            const rotateY = (x / (offsetWidth / 2)) * maxTilt;
            const rotateX = -(y / (offsetHeight / 2)) * maxTilt;

            // Aplica la transformación 3D
            container.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        // Resetea la tarjeta cuando el mouse sale
        container.addEventListener("mouseleave", () => {
            container.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
        });
    }
});