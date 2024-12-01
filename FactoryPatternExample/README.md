Contextode Ejemplo:
Se desarrolla una plataforma para enviar notificaciones. Necesitamos manejar diferentes tipos de notificaciones (Email, SMS y Push) sin depender directamente de sus clases específicas. Utilizaremos el patrón Factory para centralizar la creación de estos objetos.

Explicación del Código:

Superclase Notification:
Es la clase base que define un contrato (método send) que todas las subclases deben implementar.

Clases concretas (EmailNotification, SMSNotification, PushNotification):
Cada una implementa el método send con la lógica específica para su tipo de notificación.

Clase NotificationFactory:
Centraliza la creación de objetos. Según el tipo de notificación (email, sms, push) pasado como argumento, retorna la instancia correspondiente.

main.js:
Prueba el patrón Factory creando diferentes tipos de notificaciones y enviándolas.

Conclusión/Aprendizaje:
El patrón Factory centraliza la creación de objetos, facilitando la adición de nuevos tipos de notificaciones sin cambiar el código existente. Esto mejora la mantenibilidad y escalabilidad del sistema.