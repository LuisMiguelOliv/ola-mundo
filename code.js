document.addEventListener("DOMContentLoaded", () => {
    const texto = document.body.querySelector("#texto");
    texto.addEventListener("click", () => {
        if (texto.textContent === "jerso.")
            texto.textContent = "barril 😨";
        else
            texto.textContent = "jerso.";



    });
});