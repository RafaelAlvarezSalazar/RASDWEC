# MPA (Multiple page application)

Sistema tradicional y obsoleto. El navegador se descarga el HTML, lo lee y posteriormente el resto de os archivos que se encuentra.
- Se utiliza si se necesita SEO
- Toda la logica esta en el backend, lo que las hace mas seguras.
- Mas lentas
- Suelen usar Ajax y JQuery
- Usa tecnicas de caching para disminuir el tiempo de renderizado.

# SPA(Single page application)

Sistema mas moderno que descarga un HTML minimo y Javascript que genera toda la interfaz en el cliente y realizara las peticiones obteniendo archivos .json o .js

React, Angular o Vue utilizan SPA. Son Frameworks Client Side Rendering.

# CORS (Cross-origin resource sharing)

Las paginas web suelen realizar solicitudes para cargar recursos en otros servidores.

Cors es un mecanismo a traves del que se pueden solicitar recursos en una pagina web desde otro dominio pertiendo a los servidores determinar quien puede acceder a sus archivos.

Desde una pagina web esta prohibido abrir datos ubicados en servidores ajenos, salvo como comun acuerdo entre propietarios.Lo prohibe SOP (politica de seguridad), segun la cual los datos referentes al origen que deben coincidir son tres: host, puerto y protocolo.

Cros regula la posible colaboracion dando permiso, permitiendo hacer excepciones a la prohibicion en aquellas situaciones en las que las solicitudes son necesarias y aceptables. **Regula por tanto, las peticiones HTTP asincronas.**

Peticiones GET suelen estar permitidas pero PATCH, PUT y DELETE suelen considerarse riesgos.

Para no tener CORS activado temporalmente se puede instalar la extension ALLOW CORS. Muy util para desarrolladores pero solo funciona en nuestro equipo.