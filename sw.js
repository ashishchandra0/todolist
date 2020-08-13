self.addEventListener("install",e=>{
    e.waitUntil(
        caches.open("static").then(cache=>{
            return cache.addAll([
                    "./", 
                    "./js/script1.js",
                    "./js/script2.js",
                    "./style/sheet.css",
                    "./image/1.png",
                    "./image/2.png"
                ]);
        })
    )
});

self.addEventListener("fetch", e=>{
    //console.log('intercepting fetch request for: ${e.request.url}');
    e.respondWith(
        caches.match(e.request).then(response =>{
            return response || fetch(e.request);
        })
    );
});

