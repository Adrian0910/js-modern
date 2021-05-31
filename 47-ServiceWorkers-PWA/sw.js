
const nombreCache = 'apv-v4';
const archivos = [
    '/47-ServiceWorkers-PWA/',
    '/47-ServiceWorkers-PWA/index.html',
    '/47-ServiceWorkers-PWA/css/bootstrap.css',
    '/47-ServiceWorkers-PWA/css/styles.css',
    '/47-ServiceWorkers-PWA/js/app.js',
    '/47-ServiceWorkers-PWA/js/apv.js',
    '/47-ServiceWorkers-PWA/error.html'
];

//Cuando se instala el service worker
self.addEventListener('install', e=>{
    console.log('Instalado el service worker');
    
    e.waitUntil(
        caches.open(nombreCache)
            .then( cache => {
                console.log('cacheando');
                cache.addAll(archivos)
            })
    )

});

//Para activar el service worker
self.addEventListener('activate', e=>{
    console.log('Service worker Activado');
    
    e.waitUntil(
        caches.keys()
        .then( keys => {
            /* console.log(keys); */
            return Promise.all(
                keys.filter( key => key != nombreCache)
                .map( key => caches.delete(key))
            )
        })
    )
})

//registrar el fetch para descargar archivos estaticos

self.addEventListener('fetch', e=>{
    console.log('Fetch...', e);

    e.respondWith(
        caches.match(e.request)
        .then( respuestaCache => {
            return respuestaCache
        })
        .catch( () => caches.match('/47-ServiceWorkers-PWA/error.html'))
    )
})

