var consoleMessages = ["Hey hey there buddy! :)", "👀 I 👀 see 👀 you 👀", "Hope you're having a great day 😊", "How do you comfort a JavaScript bug? You console it 😎"],
    consoleMessage = consoleMessages[Math.floor(Math.random() * consoleMessages.length)];
console.log(consoleMessage);
self.addEventListener('fetch', function (event) {
    event.respondWith(caches.open('cache').then(function (cache) {
        return cache.match(event.request).then(function (response) {
            console.log("cache request: " + event.request.url);
            var fetchPromise = fetch(event.request).then(function (networkResponse) {
                console.log("fetch completed: " + event.request.url, networkResponse);
                if (networkResponse) {
                    console.debug("updated cached page: " + event.request.url, networkResponse);
                    cache.put(event.request, networkResponse.clone());
                }
                return networkResponse;
            }, function (e) {
                console.log("Error in fetch()", e);

                e.waitUntil(
                    caches.open('cache').then(function (cache) {
                        return cache.addAll([
                            '/',
                            'blog/index.html',
                            'blog/index.html?homescreen=1',
                            '/?homescreen=1',
                            'css/animate.css',
                            'css/bootstrap.min.css',
                            'css/fontawesome-all.min.css',
                            'css/ionicons.min.css',
                            'css/magnific-popup.css ',
                            'css/owl.carousel.min.css ',
                            'css/responsive.css ',
                            'css/styles.css ',
                            'css/swiper.min.css ',
                            'images/assets/partners/github.svg ',
                            'images/assets/partners/google-developers.svg ',
                            'images/assets/partners/google.svg ',
                            'images/assets/partners/jetbrains.svg ',
                            'images/assets/team/anne.jpg ',
                            'images/assets/team/kelvin.jpg ',
                            'images/assets/team/teresa.png ',
                            'images/assets/technologies/android.png ',
                            'images/assets/technologies/cloud.png ',
                            'images/assets/technologies/web.png ',
                            'images/assets/hero-1-2.png ',
                            'images/assets/logo.png ',
                            'images/assets/logo2.png ',
                            'js/custom.js ',
                            'js/formfire.js ',
                            'manifest.json',
                            'js/sw.js',
                            'js/vendors/bootstrap.bundle.min.js ',
                            'js/vendors/jquery.easing.min.js ',
                            'js/vendors/jquery.magnific-popup.min.js ',
                            'js/vendors/jquery.min.js ',
                            'js/vendors/owl.carousel.min.js ',
                            'js/vendors/swiper.min.js '
                        ]);
                    })
                );
            });
            return response || fetchPromise;
        });
    }));
});