Contexto de Ejemplo:
Imagina una aplicación de clima en la que los usuarios pueden suscribirse para recibir notificaciones de cambios en el clima. Cuando el clima cambia, todos los usuarios suscritos deben ser notificados. En este caso, el servicio de clima es el sujeto y los usuarios son los observadores. El patrón Observer nos ayuda a gestionar esta relación de manera eficiente.

Explicación del Código:

Clase WeatherService (Sujeto):

Mantiene una lista de observadores.
Permite suscribir (subscribe()), desuscribir (unsubscribe()) y notificar (notify()) a los observadores.
El método setWeatherCondition() cambia el estado del clima y notifica a todos los observadores.

Clase User (Observador):

Los usuarios se suscriben al servicio de clima.
El método update() es llamado cada vez que el clima cambia.
Flujo de la Aplicación:

Creamos una instancia del WeatherService (sujeto).
Los User (observadores) se suscriben al servicio.
Cuando el clima cambia, el servicio notifica a los usuarios.
Un usuario puede desuscribirse para dejar de recibir actualizaciones.

Conclusión/Aprendizaje:
El patrón Observer permite un desacoplamiento entre el sujeto y los observadores. Los observadores reciben notificaciones automáticamente cuando el estado del sujeto cambia, lo que hace que este patrón sea adecuado para aplicaciones reactivas y escalables.