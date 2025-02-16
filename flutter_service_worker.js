'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "784e2a57877b12a05ebaa77892229afe",
"version.json": "74c304af2207d67ebe2ba3b34c24af85",
"index.html": "0198db2ddb49fa7a4fc26c48fa545c1b",
"/": "0198db2ddb49fa7a4fc26c48fa545c1b",
"main.dart.js": "fba8668460860404f40725e030e66093",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "6d5e42ecc9dfcb12f1580bc8bcadaa40",
"assets/images/unicorn.png": "3f941e91200e37748ba7c2d51ec0fee6",
"assets/images/lets_spend_deck.png": "31399a9a14b781e7df02657434b653d0",
"assets/images/cf_bg_new2.png": "799e7aad908be83dc17b99a637e70508",
"assets/images/small_deals_bg.png": "f670ebef0ba90cd1fe78bead060a8765",
"assets/images/market_deck.png": "b555df464a72379ab6b66634a00515bd",
"assets/images/cloud3.png": "6648fba6d23fce792f386d900343a948",
"assets/images/cloud2.png": "714b3c49a8d16fe6f78ae0b3535d5689",
"assets/images/cloud1.png": "9fabf1d7c69e529b2afa16705f5dc5c9",
"assets/images/big_bg.png": "f6b18374d9f6d6e75c67585c5a4b737d",
"assets/images/cloud5.png": "2e5e4f84bddf98888d4c5a3b7e6a3e46",
"assets/images/small_deck.png": "4e9ecfebe9176b27ea4a543fcd8fb640",
"assets/images/cloud4.png": "9636d46f3828381fa42883d5c24183d8",
"assets/images/cloud6.png": "694b3a05031459269836abe10bc9263a",
"assets/images/big_deck.png": "5bde3464437f2a74f6468009c38ef082",
"assets/images/diamond1.png": "c1c4ebdab61ce325c9e303505c2eb1d7",
"assets/images/mouse.png": "faf032e138ef2273065491663f0637dc",
"assets/images/diamond3.png": "e77a054804ff80dbff04c55018b15b74",
"assets/images/diamond2.png": "11a14b001f0078935acc3c93db4bc027",
"assets/images/diamond6.png": "fb4d91a90c31acf9ba63cc872b6033e9",
"assets/images/cf_bg_new.png": "3fa038f3face1d786a90a972a0d4ec64",
"assets/images/frog.png": "f749fd9ab5feb38a76c4e8064c3311de",
"assets/images/humster.png": "e524924bbe71479428a331ff6d5d515b",
"assets/images/small_bg.png": "3045af7360ad4f11fdde5f6030222fc3",
"assets/images/diamond5.png": "60d5ab63e3128bb99a591ba5684cb385",
"assets/images/diamond4.png": "bca746a73545c249baff5b65eab18c5d",
"assets/images/cf_bg.png": "edd22a9f1354f44803f62afab6e7d076",
"assets/images/cashflow_bg.png": "dc3228982ca93360342b3b1238fa8ec5",
"assets/images/monkey.png": "b19d6ea11577839386a3b0ccaf3da10d",
"assets/images/fox.png": "20f16de7b547f76d20f9d87255057f6f",
"assets/images/fishka.png": "f97d866a366e042ac60cc15e33a98f3e",
"assets/AssetManifest.json": "e7ec0abc72cb11397e292fc6b6c353da",
"assets/NOTICES": "ad926b8a8c4953d7515b6f680decd01b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "b65414437a5177d739cb95ccad60692b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "50b847111e5f00e01afee235604f276c",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
