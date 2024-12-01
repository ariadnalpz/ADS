Contexto del Ejemplo:
Vamos a crear una clase base Car que representa un coche básico. Luego, utilizaremos el patrón Decorator para agregarle funcionalidades adicionales, como un sunroof (techo corredizo) o navegación GPS, sin modificar la clase base.

Explicación del Código:
Clase base (Car):
Esta clase representa el coche básico, con propiedades como la descripción y el costo base. No tiene funcionalidades adicionales.

Decoradores (SunroofDecorator, GPSDecorator):
Los decoradores permiten agregar características al coche. Cada decorador toma un objeto Car (o un decorador previamente decorado) y le añade una nueva funcionalidad, como un techo corredizo o un sistema de navegación GPS.

main.js:
Creamos una instancia del coche base y luego lo decoramos. Primero, le agregamos un SunroofDecorator para añadir el techo corredizo, y luego le añadimos un GPSDecorator para incorporar el sistema de navegación. Cada decorador va extendiendo las capacidades del coche sin modificar su clase base.

Conclusión/Aprendizaje:
El patrón Decorator permite añadir funcionalidades de forma flexible y dinámica a un objeto sin cambiar su estructura original. En este caso, podemos extender las capacidades de un coche base mediante decoradores como SunroofDecorator y GPSDecorator sin modificar la clase Car. Esto sigue el principio de abierto/cerrado, que permite extender una clase sin necesidad de modificarla.

