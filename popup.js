// Obtener referencias a los elementos del popup
const promptText = document.getElementById("promptText");
const promptCategory = document.getElementById("category");
const saveButton = document.getElementById("savePrompt");
const promptContainer = document.getElementById("promptContainer");
const searchInput = document.getElementById("filterCategory");
const exportarButton = document.getElementById("exportBtn");

// Cuando se abre el popup, mostrar los prompts guardados
document.addEventListener("DOMContentLoaded", showPrompts);

// Cuando el usuario hace clic en el botón, guardar el prompt
saveButton.addEventListener("click", function() {
    const text = promptText.value.trim();      // Lee el texto del prompt
    const category = promptCategory.value.trim(); // Lee la categoría

    if (text === "") return;                   // Si está vacío, no hace nada

    // Leer la lista actual desde localStorage
    let prompts = JSON.parse(localStorage.getItem("prompts")) || [];

    // Agregar el nuevo prompt al arreglo
    prompts.push({ text, category });

    // Guardar la lista actualizada en localStorage
    localStorage.setItem("prompts", JSON.stringify(prompts));

    // Limpiar los campos del formulario
    promptText.value = "";
    promptCategory.value = "";

    // Actualizar la lista visible
    showPrompts();
});

// Mostrar todos los prompts guardados
function showPrompts(list = null) {
  promptContainer.innerHTML = "";
  //const lprompts = JSON.parse(localStorage.getItem("prompts"))
  const prompts = JSON.parse(localStorage.getItem("prompts")) || [];
  prompts.forEach((item, index) => {
    const li = document.createElement("li");

    // Texto del prompt
    const textSpan = document.createElement("span");
    textSpan.textContent = `[${item.category || "Sin categoría"}] ${item.text}`;

    // Botón eliminar
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "🗑️";
    deleteBtn.style.marginLeft = "8px";
    deleteBtn.style.background = "none";
    deleteBtn.style.border = "none";
    deleteBtn.style.cursor = "pointer";

    // Acción al hacer clic en eliminar
    deleteBtn.addEventListener("click", function() {
      const allPrompts = JSON.parse(localStorage.getItem("prompts")) || [];
      allPrompts.splice(index, 1); // Elimina el prompt según su posición
      localStorage.setItem("prompts", JSON.stringify(allPrompts));
      showPrompts(); // Actualiza la lista
    });

    // Unimos todo
    li.appendChild(textSpan);
    li.appendChild(deleteBtn);
    promptContainer.appendChild(li);
  });
}


searchInput.addEventListener("input", function() {
  const query = searchInput.value.toLowerCase();  // Convertimos a minúsculas para comparar mejor
  const prompts = JSON.parse(localStorage.getItem("prompts")) || [];

  // Filtramos los prompts que incluyan el texto en su contenido o categoría
  const filtered = prompts.filter(item =>
    item.text.toLowerCase().includes(query) ||
    (item.category && item.category.toLowerCase().includes(query))
  );

  // Mostramos solo los que coinciden
  showPrompts(filtered);
});

// 1. Detectar clic en el botón de exportar
exportarButton.addEventListener("click", () => {
  const prompts = JSON.parse(localStorage.getItem("prompts")) || [];
  const promptsToText = JSON.stringify(prompts);
  const blob = new Blob([promptsToText], { type: "application/json" })
  var url = URL.createObjectURL(blob);
  var link = document.createElement('a');
        link.href = url;
        link.style.display = 'none'
        link.textContent = 'Descargar Prompts';
        link.setAttribute('download', 'prompts_backup.json');
        document.body.appendChild(link);
  
  const eventoClic = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    view: window
  });

  if (link) {
    link.dispatchEvent(eventoClic);
  }
  URL.revokeObjectURL(url);



});
  