# 🌌 Git Flow Star Wars Demo

Este proyecto es una demostración práctica del flujo de trabajo **Git Flow** utilizando una aplicación interactiva de Star Wars.

## 🚀 Guía de Inicio Rápido

Para ver la aplicación en funcionamiento, sigue estos pasos:

### 1. Requisito de Seguridad del Navegador
Debido a que el proyecto utiliza archivos JavaScript, la mayoría de los navegadores modernos requieren que el proyecto se ejecute a través de un **servidor local** (no basta con arrastrar el archivo `index.html` al navegador).

### 2. Cómo ejecutarlo (Opciones):

*   **VS Code (Recomendado):** Instala la extensión **"Live Server"**, abre `index.html` y haz clic en **"Go Live"** (esquina inferior derecha).
*   **Node.js:** Ejecuta `npx serve .` en la carpeta del proyecto.
*   **Python:** Ejecuta `python -m http.server` en la carpeta del proyecto.

---

## 🛠️ Estructura de Git Flow Implementada

Este repositorio sigue rigurosamente el modelo de ramificación de Vincent Driessen:

*   **`main`**: Rama de producción (Software estable).
*   **`develop`**: Rama de integración (Nuevas funcionalidades).
*   **`feature/*`**: Desarrollo de características (Menú, personajes, etc.).
*   **`hotfix/*`**: Correcciones críticas inmediatas (Simplificación de carga de datos).

### Visualizar el Historial de Git
Para ver cómo se han cruzado las ramas y los commits, ejecuta este comando en tu terminal:
```bash
git log --oneline --graph --all
```

## 💻 Características de la App
- Interfaz interactiva basada en botones.
- Carga dinámica de Personajes, Planetas y Naves.
- Diseño responsivo con temática Dark/Star Wars.

---
*Que la Fuerza (gitflow) te acompañe.* 🌌✨
