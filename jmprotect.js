// jmprotect.js — versión pantalla completa
(function () {
    const SECRET = "admin001"; // 🔑 Código correcto
    const STORAGE_KEY = "jmprotect_verified"; // Guarda verificación en localStorage

    // Si ya se verificó, no mostrar nada
    if (localStorage.getItem(STORAGE_KEY) === "true") return;

    // Crear overlay blanco
    const overlay = document.createElement("div");
    overlay.style = `
        position:fixed;left:0;top:0;width:100%;height:100%;
        background:white;z-index:999999;
        display:flex;align-items:center;justify-content:center;
        flex-direction:column;
        font-family:Arial,sans-serif;color:black;
    `;

    const title = document.createElement("h2");
    title.innerText = "🔒 Ingresá el código para entrar";
    title.style = "margin-bottom:15px;";

    const input = document.createElement("input");
    input.type = "password";
    input.placeholder = "Escribí el código...";
    input.style = `
        padding:10px;font-size:16px;
        border:1px solid #ccc;border-radius:5px;
        text-align:center;
        width:200px;
        margin-bottom:10px;
    `;

    const btn = document.createElement("button");
    btn.innerText = "Entrar";
    btn.style = `
        padding:8px 20px;font-size:15px;
        background:black;color:white;
        border:none;border-radius:5px;
        cursor:pointer;
    `;

    const msg = document.createElement("div");
    msg.style = "color:red;margin-top:8px;display:none;";

    btn.onclick = () => {
        if (input.value.trim() === SECRET) {
            localStorage.setItem(STORAGE_KEY, "true");
            overlay.remove();
        } else {
            msg.innerText = "Código incorrecto ❌";
            msg.style.display = "block";
        }
    };

    input.addEventListener("keypress", (e) => {
        if (e.key === "Enter") btn.click();
    });

    overlay.appendChild(title);
    overlay.appendChild(input);
    overlay.appendChild(btn);
    overlay.appendChild(msg);
    document.body.appendChild(overlay);
})();
