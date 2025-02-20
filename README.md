# Localidades Argentinas

Bienvenido a la API de **Localidades de Argentina**. Esta te permite acceder a información sobre _provincias_, _departamentos_ y _localidades_ del país.
Fué creada debido a la falta de información completa, no óptima y difícil implementación en proyectos que necesiten delimitar un terriorio específico.

Cuenta con un total de **24 archivos .json**, los cuales se dividen en **1** archivo con **todas las Provincias** y **23** archivos divididos por **cada Provincia**.
<br>
<br>

## Endpoints 📌

Es posible acceder a **5 endpoints** diferentes, los cuales te permiten obtener diferente información dependiendo de lo que se requiera.
<br>
<br>

- ### Obtener Todas las Provincias

**URL:** `/api/provincias`
<br>
<br>
**Método:** `GET`
<br>
<br>
**Descripción:** Devuelve una lista de todas las Provincias.
<br>
<br>
**EJEMPLO DE SOLICITUD:**
`https://localidades-argentinas-data.vercel.app/api/provincias`
<br>
<br>
**EJEMPLO DE RESPUESTA:**
<br>

<img src="assets/imgs/todas-las-provincias.png" alt="Todas las Provincias" style="scale: 0.8;">
<br>
<br>

- ### Obtener una Provincia específica

**URL:** `/api/{provincia}`
<br>
<br>
**Método:** `GET`
<br>
<br>
**Descripción:** Devuelve una Provincia específica.
<br>
<br>
**EJEMPLO DE SOLICITUD:**
`https://localidades-argentinas-data.vercel.app/api/buenos_aires`
<br>
<br>
**EJEMPLO DE RESPUESTA:**
<br>

<img src="assets/imgs/provincia-especifica.png" alt="Provincia Específica" style="scale: 0.8;">
<br>
<br>

- ### Obtener Departamentos de una Provincia

**URL:** `/api/{provincia}/departamentos`
<br>
<br>
**Método:** `GET`
<br>
<br>
**Descripción:** Devuelve una Provincia específica.
<br>
<br>
**EJEMPLO DE SOLICITUD:** `https://localidades-argentinas-data.vercel.app/api/buenos_aires/departamentos`
<br>
<br>
**EJEMPLO DE RESPUESTA:**
<br>

<img src="assets/imgs/departamentos-de-una-provincia.png" alt="Departamentos de una Provincia" style="scale: 0.8;">
<br>
<br>

- ### Obtener Localidades de un Departamento

**URL:** `/api/{provincia}/departamentos/{departamento}/localidades`
<br>
<br>
**Método:** `GET`
<br>
<br>
**Descripción:** Devuelve una Provincia específica.
<br>
<br>
**EJEMPLO DE SOLICITUD:** `https://localidades-argentinas-data.vercel.app/api/buenos_aires/departamentos/Alberti/localidades`
<br>
<br>
**EJEMPLO DE RESPUESTA:**
<br>

<img src="assets/imgs/localidades-de-un-departamento.png" alt="Localidades de un Departamento" style="scale: 0.8;">
<br>
<br>

- ### Obtener Información de una Localidad Específica

**URL:** `/api/{provincia}/departamentos/{departamento}/localidades/{localidad}`
<br>
<br>
**Método:** `GET`
<br>
<br>
**Descripción:** Devuelve una Provincia específica.
<br>
<br>
**EJEMPLO DE SOLICITUD:** `https://localidades-argentinas-data.vercel.app/api/buenos_aires/departamentos/Alberti/localidades/Villa_Ortíz`
<br>
<br>
**EJEMPLO DE RESPUESTA:**
<br>

<img src="assets/imgs/localidad-específica.png" alt="Localidad Específica" style="scale: 0.8;">
<br>
<br>
<br>

## Errores 📌

**404 Not Found**<br>
**500 Internal Server Error**<br>
**400 Bad Request**
<br>
<br>


## Tecnologías 📌

<div display="inline">
  <img src = "https://img.shields.io/badge/-HTML5-E34F26?style=flat&logo=html5&logoColor=white"> 
  <img src = "https://img.shields.io/badge/-CSS3-1572B6?style=flat&logo=css3&logoColor=white">
  <img src="https://img.shields.io/badge/-JavaScript-eed718?style=flat&logo=javascript&logoColor=ffffff">
  <img src="https://img.shields.io/badge/-Node.js-3C873A?style=flat&logo=Node.js&logoColor=white">
  <img src="https://img.shields.io/badge/-Express.js-787878?style=flat">
  <img src="https://img.shields.io/badge/-Vercel-black?style=flat&logo=vercel&logoColor=white">
</div>

---

**Muchas Gracias por utilizar la API y mostrar interes en ella!**
<br>
<br>

**Visitá la Web oficial para obtener más información: <a href="https://localidades.vercel.app/" target="_blank">Localidades Argentinas</a>**
<br>
<br>

**Te agradecería si quieres dar apoyo y marcar con una ⭐ el repositorio. Eres más que bienvenido a realizar cualquier tipo de cambio para que el proyecto crezca y mejore!**
<br>

### No dudes en contactarme

- **LinkedIn:** 👉​<a href="https://www.linkedin.com/in/nicolasatapiedev30" target="_blank">LinkedIn</a>
- **Instagram:** 👉​<a href="https://www.instagram.com/nicotapie1/" target="_blank">Instagram</a>
  <br>

<p align="center" style="font-size: 1.5em; font-weight: bold;"><b>Un fuerte abrazo ❤️</b></p>
