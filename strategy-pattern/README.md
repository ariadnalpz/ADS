Contexto del Ejemplo:
Imagina que estás desarrollando una calculadora de descuentos para una tienda en línea. Dependiendo de las diferentes estrategias de descuento (como descuento por porcentaje, descuento fijo o descuento por monto total), la calculadora debe aplicar un cálculo específico para determinar el precio final de una compra. El Patrón Strategy es ideal para este tipo de casos, ya que permite cambiar las estrategias de descuento de manera dinámica sin modificar la lógica de la calculadora.

Explicación del Código:

Definición de Estrategias de Descuento:
Se definen diferentes estrategias de descuento en clases separadas:
PercentageDiscount: Aplica un descuento porcentual sobre el monto total.
FixedDiscount: Aplica un descuento fijo sobre el monto total.
BulkDiscount: Aplica un descuento basado en la cantidad total de productos comprados.
Clase Calculator:
La clase Calculator actúa como el contexto y se encarga de calcular el precio final usando la estrategia de descuento actual.
setDiscountStrategy permite cambiar dinámicamente la estrategia de descuento.
El método calculateFinalPrice aplica el descuento correspondiente dependiendo de la estrategia seleccionada y calcula el precio final.

Conclusión/Aprendizaje:
El Patrón Strategy permite manejar múltiples estrategias de manera flexible y desacoplada, facilitando la extensión y modificación del código. En este ejemplo, las diferentes estrategias de descuento se implementan en clases separadas, lo que permite cambiar la estrategia de manera dinámica sin alterar la lógica central de la calculadora.