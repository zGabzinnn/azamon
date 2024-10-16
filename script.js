document.addEventListener("DOMContentLoaded", () => {
    const toggleButtons = document.querySelectorAll('.toggle-info');

    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const moreInfo = button.nextElementSibling;
            if (moreInfo.style.display === "none" || moreInfo.style.display === "") {
                moreInfo.style.display = "block";
                setTimeout(() => {
                    moreInfo.style.opacity = 1;
                }, 10);
                button.textContent = "▲";
            } else {
                moreInfo.style.opacity = 0;
                setTimeout(() => {
                    moreInfo.style.display = "none";
                }, 500);
                button.textContent = "▼";
            }
        });
    });

    const form = document.getElementById("cadastroForm");
    const mensagemSucesso = document.getElementById("mensagemSucesso");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        mensagemSucesso.textContent = "Cadastro realizado com sucesso!";
        form.reset();
    });
});
