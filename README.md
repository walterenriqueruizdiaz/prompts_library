# 🧠 Extensión de Prompts

Una extensión para Google Chrome que permite **guardar, organizar y reutilizar prompts** como si fueran notas rápidas.  
Ideal para creadores de contenido, docentes y usuarios de inteligencia artificial que desean mantener sus mejores ideas siempre a mano.

---

## 🚀 Funcionalidades principales

- 📝 Guardar nuevos prompts con título, contenido y categoría.  
- 🗂️ Organizar los prompts en **categorías** (Educación, Creatividad, Escritura, etc.).  
- 🏷️ Añadir **etiquetas personalizadas** para clasificar por tema o uso (#ChatGPT, #Guion, #Docentes...).  
- 🔍 Buscar y filtrar prompts fácilmente.  
- 📋 Copiar cualquier prompt al portapapeles con un solo clic.  
- 🧹 Editar o eliminar prompts guardados.  
- ☁️ (Opcional) Sincronizar datos con la cuenta de Google mediante `chrome.storage.sync`.  
- ⚙️ (Opcional) Exportar e importar los prompts como archivo `.json`.

---

## 🧱 Estructura del proyecto
extensión-de-prompts/
│
├── manifest.json # Configuración principal de la extensión
├── popup.html # Interfaz principal (ventana emergente)
├── popup.js # Lógica del popup (agregar, editar, copiar, borrar)
├── popup.css # Estilos visuales del popup
├── background.js # Tareas en segundo plano (opcional)
├── options.html # Página de configuración (modo oscuro, exportar, etc.)
└── icons/ # Íconos de la extensión


---

## 💾 Estructura de los datos

Cada prompt se guarda en el almacenamiento de Chrome (`chrome.storage.local` o `chrome.storage.sync`) con el siguiente formato:

{
  "id": "001",
  "titulo": "Prompt para crear guion educativo",
  "contenido": "Actúa como docente de primaria y crea un guion sobre...",
  "categoria": "Educación",
  "etiquetas": ["ChatGPT", "Guion", "Docentes"]
}

⚙️ Permisos necesarios

En el archivo manifest.json se deben incluir los siguientes permisos:

"permissions": [
  "storage",
  "clipboardWrite"
]


Estos permiten:

Guardar y recuperar datos del usuario.

Copiar texto al portapapeles desde la extensión.

🧩 Flujo de uso

El usuario hace clic en el ícono de la extensión.

Se abre el popup con la lista de prompts guardados.

Desde allí puede:

Buscar o filtrar por categoría/etiqueta.

Agregar un nuevo prompt.

Editar o borrar uno existente.

Copiar el contenido al portapapeles.

Opcionalmente, desde la página de configuración puede exportar o importar sus prompts.

🌈 Ideas de mejoras futuras

🔄 Sincronización automática entre dispositivos.

📎 Integración con sitios web (por ejemplo, ChatGPT o Notion).

🌙 Modo oscuro personalizable.

💬 Sistema de notas rápidas o plantillas.

📊 Estadísticas de uso (prompts más usados, categorías más frecuentes).

👨‍💻 Autor

Proyecto Extensión de Prompts
Desarrollado con fines educativos y de productividad personal.

📄 Licencia

Este proyecto está bajo la licencia MIT — libre para usar, modificar y compartir.
