# Demos-Vibe-Coding

## Demostración: Por qué el "Vibe Coding" no funciona (aún)

Este repositorio sirve como una demostración práctica de las limitaciones actuales del concepto de "Vibe Coding" (programar solo "vibrando" o pidiendo cosas a la IA esperando que todo funcione mágicamente sin conocimientos técnicos).

### ¿Qué se intentó hacer?
El objetivo era sencillo: crear una aplicación web completa con las siguientes características:
-   **Frontend**: Angular.
-   **Backend**: Spring Boot (Java).
-   **Base de Datos**: MongoDB.
-   **Funcionalidad**: Un CRUD (Crear, Leer, Actualizar, Borrar) para gestionar `Personas` y `Celulares`, donde cada persona tiene un celular asociado.

### ¿Por qué no funcionó el "Vibe Coding"?
A pesar de que la IA generó todo el código necesario (controladores, modelos, servicios, componentes de frontend), la experiencia de "solo pedir y que funcione" falló por varias razones técnicas y de entorno que la IA no puede resolver por sí sola:

1.  **Incompatibilidad de Entorno**: El código generado asumía Java 17 (el estándar actual), pero el entorno local tenía Java 11. Esto provocó errores de compilación inmediatos (`Fatal error compiling: error: release version 17 not supported`) que requerían conocimientos técnicos para entender y corregir editando archivos de configuración (`pom.xml`).
2.  **Complejidad de la Ejecución**: Levantar una arquitectura Full Stack no es automático. Requiere:
    -   Tener la base de datos (MongoDB) instalada y corriendo.
    -   Compilar y ejecutar el Backend en un puerto específico.
    -   Instalar dependencias de Node.js, compilar y servir el Frontend en otro puerto.
    -   Navegar correctamente entre carpetas en la terminal.
3.  **La Barrera de la Terminal**: Para un enfoque de "Vibe Coding", tener que ejecutar comandos como `mvn spring-boot:run`, entender rutas relativas, o saber por qué un comando `cd` falla por un error de tipeo, es una barrera bloqueante.

### Conclusión
El código generado es funcional y correcto, pero la brecha entre "tener el código" y "tener la app funcionando" sigue requiriendo intervención humana, configuración de entorno y conocimientos básicos de terminal y herramientas de desarrollo. El "Vibe Coding" choca con la realidad de la configuración de software local.