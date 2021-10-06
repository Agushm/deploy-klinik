'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "aa1066d729fce2bb8798336cc1007bae",
".git/config": "2231b6550091739c8f071ed4c1e74e1a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "6ced5bb4da0a142926d413752376aaf6",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "028b34718fe65749949eec74c5c15419",
".git/logs/refs/heads/main": "e8718f17408166fd6c7e51768d161603",
".git/logs/refs/remotes/origin/main": "dd7237c2e6d4b38c08e0c200370aecf6",
".git/objects/04/af71dbf284c5c02a34b9564684fb2cd4b419d9": "a54a252177f9160e8fbdcf3a9ec55a7e",
".git/objects/0d/7490d5eb4936c78cab72a5c93e21f5d256ccbe": "2939b4da7cf6711bdfcdd30029bb9bda",
".git/objects/1e/efb7156a8690f85c04dc47e65e431b481aecd0": "79299753b48eccbe27322753621216ae",
".git/objects/1f/3ef291a3ad58e5381338771334e3672db29cdd": "4ce288c526f7b1c03e59628df193af79",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/22/50384582f1929d9a72a8ae128ed250c74c42e7": "3bc0119b0d0bf3fbab412d463d795b67",
".git/objects/30/887e0d7ce99a90ac66c8b1f1e3923380604688": "6e9bb3943df064f3f359ee4672d85dac",
".git/objects/30/aac0c48fe8b6a24f41a8aadb5263e9ed5516f5": "8738e77986364d505b946e4ecf6b5135",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/52/6aa7ec6287f60412379d66bdba70a6ce2bf1ac": "86420ffe0a39e52ef0c7f5ffd02f38f2",
".git/objects/57/6bae591180cbbbd923ff68e2939fe8caa98ead": "8f9587243196acb488f5a86dc9f15bb3",
".git/objects/61/2ae6ca86341b3504bfa81cfe0d8bf45df63b44": "5bb2c1cfdd0e1c164734da2d8245b4d9",
".git/objects/62/7c600924b9f8d64c29a7af983abcd82a9c85db": "97199f925f14b4dba0c7424e2dbe4a8e",
".git/objects/63/3ffce2b5d00f6e505b60476b2ceb31519226d1": "ae8b4a0ac3adbf8e0286533bc7b52e15",
".git/objects/65/4cefbb4a263dd859bdf3452a433e494e6abf76": "7dc4ee36bb606c138b076bacdfa34217",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7e/94a4b0528d63506658ef20062cb0b9b78db370": "29a84865ba8a93b73a632815e3b37622",
".git/objects/80/3bbe7f29c9faeb73c6ce1d6c93bca070fae1fc": "4dbb4e791d1219d7fd821af6fe44dfee",
".git/objects/84/19fb4ded9f0c89fa2b69b297b1618b7f782da8": "b8f2ca7665913ec64ca82fe4e747aca3",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/2d96d2e6df6d0eb69d2d67738b21e97de01e9b": "92f10009829f1b666e9867063185d2a6",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/d9e5238496f5e10527c0e3b42f35c7c4fd9271": "79fa752049879eab742ac38fbf1c6714",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bd/dd98ef877e31b38d92c5958b370cbbae25195c": "992b2d42f235c5b06e44db1573a0b1a3",
".git/objects/d3/389a85622f9b7bbbea84a91dd6ac04cf26f09d": "a73fca01d6da81bc55c1fa5e24789ed2",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ee/3fb39d30f0b0205e81c39740f3cefca1c9840b": "c8b060fefb5c363ba8e0e68f9637d253",
".git/objects/f6/462c68eff233798e66e9c489b413c5c33ead11": "204c399243515f23563922e3dad08bcf",
".git/refs/heads/main": "9278a12cb48d00618e0055a2989f3d9c",
".git/refs/remotes/origin/main": "9278a12cb48d00618e0055a2989f3d9c",
"assets/AssetManifest.json": "1aa439257899042f96bd45c5cb880bba",
"assets/assets/icons/empty.png": "9e22738fe7f4f7c508b93269f0361998",
"assets/assets/icons/google.png": "7098eaaec24afc9e6e207ab5acac6c51",
"assets/assets/icons/history.png": "e8a9c8d0ced1941cf50a44be9274e3d5",
"assets/assets/icons/home.png": "8107dd52e1920f15bde592b12c4cf665",
"assets/assets/icons/news.png": "50cab69d3821dc2746a2597b9a576b40",
"assets/assets/icons/notification.png": "07d55762bd0d41442bffcc98ebc2e69d",
"assets/assets/icons/profile.png": "c663957ca943bfe9daa3fe47c0ba3cd6",
"assets/assets/icons/user-man.png": "b5f33b8e45f5b085b8974d947ece596b",
"assets/assets/icons/user-woman.png": "228a646acb21d250b5bc285bb3dc54bf",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "efdb769082876e27c37c8e799e6ef90c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "f8d9a4214a2a6f9f6c284d1eccdd41c1",
"/": "f8d9a4214a2a6f9f6c284d1eccdd41c1",
"main.dart.js": "27c6a5886ee50d2c123b9a592a54e41c",
"manifest.json": "40fd6271be3adb5be570f3ffa313aa2b",
"version.json": "75717bba295feb090686bd67b40fd242"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
