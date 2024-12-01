Contexto del Ejemplo:
Imaginemos que estamos diseñando una máquina expendedora de bebidas. El comportamiento de la máquina varía dependiendo del estado en que se encuentre, como cuando está esperando dinero, esperando una selección, vendiendo una bebida o fuera de servicio. El Patrón State es ideal para este escenario, ya que permite cambiar el comportamiento de la máquina según su estado actual sin necesidad de usar condicionales extensos.

Explicación del Código:

Máquina Expendedora (Contexto Principal)

La máquina tiene un estado actual que determina cómo debe comportarse en cada momento. Los métodos de la máquina delegan la lógica al estado correspondiente.
La máquina tiene métodos como insertMoney, makeSelection, y vendDrink que cambian el estado de la máquina según las interacciones del usuario.

Clases de Estado (Cada estado tiene su propia clase)

WaitingForMoney: Este estado maneja el comportamiento cuando la máquina espera que el usuario ingrese dinero. Solo permite insertar dinero.
WaitingForSelection: En este estado, la máquina espera que el usuario seleccione una bebida después de haber insertado dinero. Solo permite hacer la selección.
Selling: La máquina entra en este estado cuando está dispensando la bebida al usuario. Una vez dispensada la bebida, la máquina vuelve al estado WaitingForMoney.
OutOfOrder: Este estado se activa cuando la máquina está fuera de servicio y no puede realizar ninguna acción.

Conclusión/Aprendizaje:
El Patrón State permite que el comportamiento de un objeto varíe según su estado interno, lo que es ideal en situaciones donde el comportamiento debe cambiar de manera predecible y organizada. En este caso, la máquina expendedora cambia su comportamiento en función de los estados en los que se encuentra, delegando la lógica de cada estado a clases separadas. Esto desacopla el código, reduce los condicionales y facilita la expansión para agregar nuevos estados en el futuro. El patrón proporciona una manera flexible y mantenible de gestionar el comportamiento de objetos con diferentes estados.