Contexto del Ejemplo:
Imaginemos que estamos desarrollando un sistema de registro de logs en el que necesitamos asegurarnos de que solo haya una única instancia de la clase Logger que controle todos los registros. Esto es útil para evitar que diferentes partes del sistema creen instancias duplicadas y aseguren que todos los logs se escriban en el mismo archivo. El Patrón Singleton garantiza que una clase tenga solo una instancia y que esta instancia sea accesible globalmente.

Explicación del Código:

Clase Logger (Implementación del Singleton)
Propiedad Estática instance: Se utiliza para almacenar la instancia única de la clase. Si ya existe una instancia de Logger, se reutiliza en lugar de crear una nueva.
Constructor Privado: Si ya hay una instancia de Logger, el constructor retorna esa instancia, asegurando que no se cree una nueva.
Método log(message): Permite agregar mensajes al registro, con una marca de tiempo.
Método getLogs(): Retorna todos los logs registrados en el sistema.

Archivo main.js (Prueba del Singleton)
Se crean dos instancias de Logger (logger1 y logger2), pero como el patrón Singleton asegura una única instancia, ambas variables apuntan a la misma instancia.
Se agregan registros de log usando ambos objetos, pero ambos objetos escriben en el mismo arreglo de logs porque apuntan a la misma instancia.
Se verifica que las dos instancias son la misma mediante console.log(logger1 === logger2), que imprimirá true.

Conclusión/Aprendizaje:
Este ejemplo demuestra cómo el Patrón Singleton asegura que una clase tenga solo una instancia y proporciona un acceso global a esa instancia. En este caso, el patrón garantiza que todos los registros de log sean manejados por una única instancia de la clase Logger, sin importar cuántas veces intentemos crear nuevos objetos. Este patrón es útil para recursos compartidos, como conexiones a bases de datos o sistemas de registro, donde solo debe existir una única instancia controlando esos recursos.