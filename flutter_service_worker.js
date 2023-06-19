'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "07e9812b9f82ffe4e8fc057a4ded7881",
".git/config": "6bfa6bd2e12c76a6f6e1484c5a829e5c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "6400501adc17d42ebaef39e145d28bd5",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0bbc8626c681fa3d77705e6eb46980b8",
".git/logs/refs/heads/main": "b159e1a5aaf9968813fa7e4a3c011eff",
".git/logs/refs/remotes/origin/main": "ff1bdf0b11683c9ae0579918c4e2aae3",
".git/objects/06/bda8551e072a5a2f9810253c0a4bfa0db9f0b1": "5000b43b838c80c44162696f71b3ae65",
".git/objects/0a/d1b94702f00f7f1cacad31b9ee740fd6a32c48": "94bf12ef9eb3e89620178d05a6745799",
".git/objects/0b/5be3a3c27c9e7c1a0f7c99f157561c19fca6b0": "d02ea427ea49467ebeceb9d4018163ab",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/12/8c0da98ec621179025e30147bdec9542a1e0f9": "42229a5ff219d5691f272af2ecd152a6",
".git/objects/15/71de9eddd1234d9137fe0c83a47d9f0cf9b92f": "9364ff9b04a57098f5110886c100a53b",
".git/objects/22/8061d7b30a53868d7f84b515f6fa9096565d17": "538c53425b0fd8549bf61a09834538cd",
".git/objects/22/8f7bb649ad31ee3646fde1e0d2fb8449f0f159": "87125447b5cd9f717af4fc0885bf1763",
".git/objects/27/73d18d2eca7c5f408be246189b88da36694867": "703adcd02ae6e460651768fc483c6445",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/3b/4498a2ffdf253844d5662e5d83a7cb2f5035a8": "eaf2a4deab43a424d8d0cd3b8027bb19",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/44/6d91590a32fe75075e2ed7d9fce20ecf6d0523": "587608b305223f229c9d52b04145e4d8",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/dfb6ee2d4e481c19991095fec0322938a9c486": "6465b5441d011a2af357c0efecf1b59a",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4c/9bb589cd1cd49a80a9a038f94657201b08ef37": "737e3b137b95bbb81adbb74db06cc22f",
".git/objects/50/b4b656af5e947d8435320e373c7530cfd3ab98": "a8b575d267053c5d47482dbb0155b964",
".git/objects/50/f19880144f8a4770272e9da3a91946e7ea9dec": "35cd964180ae8e4dadf479150eb244ea",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/58/dd52908b32ebfdbbb47db1c9ec4540880fd0eb": "585ea0579f504a99169d0611b5c9fcbf",
".git/objects/61/15db3c18e9f8a6c611d5d73585c9ac34efb6eb": "cce7cb90c9b5fadf4f3039988010aab0",
".git/objects/61/e83e17698e30d35c3ed5ebbd8371ac6472ff20": "6d4013c68b7a9745742986c616184833",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6a/cf2a8443ced805a6c2d31a25071a909cb5ec43": "3c19a3f3e1cad244dca438ef31063549",
".git/objects/6e/eb4090583e49ce8e3a4e88b02c156d1bd01138": "d50d463af9efb3b2e06a6217829353d2",
".git/objects/73/98d512f98e4466d6e1d27af98af9be8da71a26": "9bde41f77809c2321a6b4fbd095289d7",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/75/1c48c42ec5ff28c34bde55c079276b890d3d68": "69321513593af8d6cb5bb9bc49e63fcd",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/13640d108bd020d7bc809041725ce8e5581f70": "3293f56a97e65ebdf97e573cdcf234ab",
".git/objects/80/a7ab191fe676380b9dfe0616b8c66cd2f8673e": "6ec3bc48a410f4fd2bcee17d0e6151fa",
".git/objects/8b/ac91cdedfc1c16d4a3a0790a9e2c2b4912acc0": "cc77e48e50e94f800cef4d8253c9f3d7",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/94/adb6e8d9d17a6b98310d4365dbfaed4c6d682f": "e097b93612791ef889f987351f1b2337",
".git/objects/9e/9bafd5cd4af3e1455ad2701963e99fb77b1f7f": "7d35ab3778340a78d3af1234e4046efc",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b7/8cd6b1ef0b62bdc35102f8bfc9313ded5c24fc": "d8f572a47d4ac8dae7a7ebfbaf6cb5c3",
".git/objects/e3/e9aeee0508e51eb1c0e3a6aab81abd0e54c8bb": "9b378e9d79a7d244ef2b5b36cd019869",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ea/d9b37ff26c44e87c5365bd5a812e57943e1bfb": "d273198f046ead6fb75af69dec04fb29",
".git/objects/f2/001dd24dcb9bf786d3a76c977cd692b5f7513f": "0be9a6ecd9242a7cdc31248cf0c5a3b9",
".git/objects/f3/8fc0b6984f0f7eb35084a04a54ab5f3c9bd32b": "7044fb1a4560dc00ad35e728c814668c",
".git/objects/f8/e1fb0c5fb5cb363aa4ebbb562f13cdd4513279": "6ddcec2a61f48bdfa77570f1969bae45",
".git/refs/heads/main": "e1513da521a18aed054975c1a271a0d7",
".git/refs/remotes/origin/main": "e1513da521a18aed054975c1a271a0d7",
"assets/AssetManifest.json": "596d9bb3a68a3a476241ab69db35e29e",
"assets/assets/BloodArt.png": "12f480f9ce71fa2fc4b86ea9f9500d89",
"assets/assets/Bphoto.jpg": "7f483cf58a66facc82e8a015927099be",
"assets/assets/driver_licence.jpg": "b27c6b2c112d2e0d94708aac9c1ea739",
"assets/assets/GiveBlood.png": "c0e07c1e23bb2587a3777db0680fb7d1",
"assets/assets/group_icon.png": "757dcbbc9d11761d9c95a505c6e16f21",
"assets/assets/ic_giveblood.svg": "b026104537fb62e28b391aef6228d164",
"assets/assets/ic_instagram.svg": "17a15a748b8e00e1e1eeb5e07dbcc0cd",
"assets/assets/ic_org.svg": "d8163a06d6cdfc19e5bae85c9c898783",
"assets/assets/ic_posts.svg": "c762e07644abb2aae61d2cb8e0afa4ba",
"assets/assets/ic_user_verified.svg": "5bfd6b12e78332421f9b606f03503c13",
"assets/assets/profile_image.jpg": "088ba18b145f3207d61170323f688e1c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "d15fcd1b18dc309af19b61619af79be9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "84cb760075f6b3be64d04c8208a89e27",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "0561912da095b2c15250996b0e4ab83d",
"icons/Icon-512.png": "554ede3f6e7d2799db1e0a133b41fc3d",
"icons/Icon-maskable-192.png": "0561912da095b2c15250996b0e4ab83d",
"icons/Icon-maskable-512.png": "554ede3f6e7d2799db1e0a133b41fc3d",
"index.html": "412059e74061e23b7e35a2f2cf0b04ff",
"/": "412059e74061e23b7e35a2f2cf0b04ff",
"main.dart.js": "704324542fb0fcaf0546ba4f279cbc09",
"manifest.json": "c18a07f45cdb19750ab5ea9009c0ee57",
"version.json": "4dcf05c10a2553787d9fe05c72670d25"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
