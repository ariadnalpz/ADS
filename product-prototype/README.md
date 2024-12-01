Contexto del Ejemplo:
El Patrón Prototype permite clonar objetos sin necesidad de conocer su clase exacta. En lugar de crear un objeto desde cero, se hace una copia de uno existente, lo cual puede ser más eficiente y rápido. Es útil cuando se necesita crear copias de objetos complejos, o cuando se requieren pequeñas modificaciones sin afectar el objeto original.

Explicación del Código:

Clase Product (Objeto Base):
Representa un producto con propiedades como name, price y quantity. Incluye el método clone() que retorna una nueva instancia con los mismos datos.

Clase ProductPrototype (Patrón Prototype):
Recibe un producto y contiene el método clone() que se encarga de clonar el producto base.

Archivo index.js:
Crea un producto, lo clona usando ProductPrototype, y luego muestra tanto el producto original como el clonado. Se pueden hacer modificaciones al producto clonado sin afectar al original.

Conclusión/Aprendizaje:
El Patrón Prototype facilita la creación de copias exactas de objetos existentes. El método clone() simplifica el proceso, lo que mejora la eficiencia y flexibilidad al permitir cambios en los clones sin modificar el objeto original.

