// Notificaciones nativas en JS, se deben acepatar los permisos para hacerlo

const notificarBtn = document.querySelector('#notificar');

notificarBtn.addEventListener('click', () => {
    Notification
        .requestPermission()
        .then( resultado => {
            console.log('El resultado es ', resultado);
        })
});

const verNotificacion = document.querySelector('#verNotificacion');
verNotificacion.addEventListener('click', () => {
    if(Notification.permission === 'granted'){
        const notificacion = new Notification('Código con Juan', {
            icon: 'img/ccj.png',
            body: 'Aprende con proyectos reales'
        });

        notificacion.onclick = function() {
            window.open('https://www.youtube.com');
        }

    }
});




