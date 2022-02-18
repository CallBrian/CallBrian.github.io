'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "bb6973ee8e2d3328eadfe6277bfcc650",
"index.html": "81da8acaf3a3d2504773b4071aec0aee",
"/": "81da8acaf3a3d2504773b4071aec0aee",
"main.dart.js": "0fadb899918ad1015bc204821dd71e9c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "a7c358315300af9fea61b8e3fc61249a",
".git/config": "c2208426cf731e17ad7b00c9ffd7088b",
".git/objects/66/98e280dc3715f977ae348dbc89abf9a528c56f": "177222f77e9390247ddb035dcc058a47",
".git/objects/57/5e7617e58c79150c3459575ef05e38678f5909": "b38306251bd1e16060efb02068d28a3b",
".git/objects/57/2f8f2e872d70ea0944592724b86da507c90cdc": "7eb5063b01a91cac7285c4f2ad62faa1",
".git/objects/9e/7bb1cd156dff9a1a8d2024e798267a2480a271": "5f1636161145730e551b5be454408cd2",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/51/ec5765860713651ec16b23bfff4c0b6c6325d1": "00b99d1991b58c9fba0033bbf12228ec",
".git/objects/3d/71310c39dbe5e53c8d23d0727b4ee73e5a5d19": "429cf043f687c5688f3f200c33f2e8a9",
".git/objects/60/edf4becf5d608c044eef9684af1385410ddb46": "90dfbc238f018e94a58b2ffdb42d1a8f",
".git/objects/5a/92a604957bd065fb6fc653964ac355536dfd89": "fafa0c7c5f3954df1dc859a430b55160",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/bb/e52d09c970e5994045665f2d3fbff6a4195d36": "a8ea5f988158ff81c98dfa5b3a6c62d5",
".git/objects/be/2fbe259dde8baeda5c28c25a1375763438f4df": "ac5b7cbb9bc39cf6ec2a6751579a5712",
".git/objects/be/9d7508b1e60b778b320ee919b5796f6be0aef3": "36175e7d507a267ef519ea2d708fbb7e",
".git/objects/b3/acfc39547f53c47c8eff75822e1988ccdc1124": "1a7c4acbcebc01f1cbe5e36e43b367f3",
".git/objects/da/b368f7217c2116c2ab84496e4f181a1b8049f9": "860ca98121e73194bbcd8c2cf0983e82",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/11ec870c3c9ea4fd7579c1887b9a0bb49ba4ef": "19318da1f201fac9b6bc5e5e1a565903",
".git/objects/ae/f4c1d186e3ff0a78ebf4c5733d562d7c3a2e32": "44c6304cb835b81d0c6f12ff04eba655",
".git/objects/ae/abf3f8719bd2757e87e285177023f2df6fbf0c": "09f16ff1e1504ef2b872c7106e5659fc",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/66e6ab2f7995e6923e38c4eacdffd05fa459a9": "aaefa40a6505b81495defb4d583213dc",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/0784332916bcb2e47d39d7f8dacc545eef4ff5": "4c8b495406c9e975334b7076da45c643",
".git/objects/c9/8bf6ae8e11a33305c6e8b011cd38d2700f19cf": "8fdc3006de739af26049a3ae0190911e",
".git/objects/fc/db51f833d2de2263aaba97c9a498824f94edbf": "a3b71a1256c2dc3405e3a3269d78effa",
".git/objects/f2/fa0a8fe9b3ee50d94d132aea7b08422709d8f8": "900757a6772c9b4d760e695894c14b89",
".git/objects/f5/7488ad37ec6321e048ee5e7c1b73398cd80a37": "d229a51ebe0a671bd0d44132ae302095",
".git/objects/4e/50c5ed8633455d365a34031da109551e66fdee": "326ebd1b76d06130e309d9fa739416ba",
".git/objects/27/f14b850d404e7e680257c6d035570fbca3c75a": "d2c11f23c8f9a7145b1139c71f81c425",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/11/c2177b322129efee16649d4fe33c5245a93f40": "326c7a52afbfa1e6ad31ab22bde0c203",
".git/objects/73/21510e6df97e83a862a1cab83ea6684a432ddf": "1205fd8f0b26d2c0d8c278be49b4bc84",
".git/objects/8f/67a69bbf8631d79a13e3a6c22739ac756733fa": "17137dca946c64f05716996a75874928",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/0c9a7950112eadcfe3826c7f02dd5982a85ab4": "45e0f08641eaa632cc55012311e3253d",
".git/objects/10/fc001117dd999a534ce57937ebdc5aaf6c22a9": "b61cda48f9e1744684f943895fd46fc4",
".git/objects/4d/89365bb207e52da174bc5e99b95a01629595d7": "d2844d8b8df9a6782ff22fc9165c2948",
".git/objects/4d/24153027e4f112a758de39a8f20b1dfaed143a": "e075f9d08d0f8cfd819f80db1436b442",
".git/objects/4d/238be0ff26c8c0724479dd57ff9fc6aa00f521": "74ad4aabef8978c66f19ec69bd012f4e",
".git/objects/72/9a79e9e62c97e0fde9a1e881ff50ba76089189": "8e1804026a361b200547547068510f57",
".git/objects/2a/2289d74f6c3bc84b8a228623851c8fe51415e9": "0556193c7ed56fbdc4c278276a73abc6",
".git/objects/2a/b11b27c385e74c564dcd34af27c1e977ed5763": "a839a29ca49f434cb828f02d935282e3",
".git/objects/88/25b22b4dfe2f425aed07bb38ac5b220c7d4bc4": "1b1efa68f64ded64485ab878cbf75763",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/784b59f2c54913d82e720e1ec259710be4930d": "73649ca19dd3bb222403f1d6daa7172d",
".git/objects/38/f2dbdafb7ec3df2164bb4650af249fba3d0d6e": "dfadcd71a353d60489ede4ec6cae7aa7",
".git/objects/6e/c9b11197f993a32816645bac4558476e274932": "a58946b4178ebaa08c3894ac8da9d545",
".git/objects/9a/e7acc77644105b8b0031c8c3c9863159f9b44b": "0a79188c48e4e04fa156d72728a0ce43",
".git/objects/09/37270d18e01e314840cecbedd9c5407898db7a": "d09c96977e2fb25331234c157c9a7ce0",
".git/objects/65/b384c04ef7ee9fb9b7582b77377280c5d64cd5": "88422bbb2bc42436f8f242eb59c23af7",
".git/objects/3a/fba0c883aea036806cc1962816f312667a258f": "ff067ee44c55562f7509945217929df5",
".git/objects/30/d9aabf206af8cd0b9c2b598d59eb11ae7a04e1": "7eb7186d670ac9c47002f47d17e055cd",
".git/objects/6d/2b67319b2047042a0b728109a12186b5396a25": "2e0139304d7c6e89746aa2274bd3240d",
".git/objects/6d/5297ce697822c849bf692af77aab0dc094c730": "d84506e33188f1c6d070e9dfb485051d",
".git/objects/01/f6b8bf8742b93e3d454aa2c738e57473c4778c": "e487bfa75a0d19b5d386bb5c8f7d5b17",
".git/objects/dc/76a91a7e91b2fd8985a46d574b21607078e13b": "adfa8e77732e2aa9218e9eb2ca85bc95",
".git/objects/d5/45eead0b9b1bd8d4630d7b1992b920e41fc744": "bfd2c42be0bae75278da9e0e35f6a6fc",
".git/objects/aa/ad27d68c5c2e45108b5d54f9f8d354280dea1e": "5edb5daf4ec78f0a145903aa4da9fedd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/c22cdaf59adcc10a3e5e0f14aefce8876471b5": "e776452cc8d1034d21ba6cde4169500f",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/de/b47c772595a03547a9de525c0cdf6e88099c51": "e0cf7dd842ea2f8f9455d6c2d80c1d7c",
".git/objects/b0/64e39fa8d9db07e572d0bbdbcb7740f2db45cd": "24487d9b5336f063f8a3c6eb10212ed3",
".git/objects/b0/aeaba1cfdcb5600acec4b5301c014c400db87c": "6220d97ded88a178d1426ff746b19874",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/cd/d2fda1f1c88790235ce4fb9127ce26f55f2652": "8e56eb04677da8971ad63c9ef1759784",
".git/objects/fa/870813262aa3ea0ef9da4141637076a446e6f7": "a3bb68688f2aecf545adc04b2ae90278",
".git/objects/f1/a743a33648c7e3bf7d41465689956879ef076e": "c8a3affe16074da0e67bb7f1462d7dc2",
".git/objects/e7/97c792bf7e538b953581b979698521adf10bb7": "170c5c1bc889c14252908c9479b44dcc",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/1b/55c881360d6c421d4bf404b93edd6a61e303d7": "182c3b08a8956791f7228ac2fadb1dca",
".git/objects/77/c0e013c3ab26a3363c1da34773505bd19cff70": "b8e0790f1d2c5a05efc697a997d4168d",
".git/objects/48/df0471af96bdee62a73122c071b5cb2dc49611": "9ff13ab75b30600900ed093bf6555d9e",
".git/objects/1e/59c405185220969673054a9fb46d339ad67553": "4e165446750abe7514711f50a82446c9",
".git/objects/15/8775b71ebbffe4430f17195dbd692fa28c7276": "c48975abccf21ef5a9a501584c033fd6",
".git/objects/8c/145affc91be4d4e6734666bc612a0eb95c9c5d": "4abcaf212c8316968d2b560c040bf65e",
".git/objects/40/140807c6690d2a3a24a1f1466a373ca321718a": "68e636ed9cb05200633d8d1678f9091e",
".git/objects/2e/1eb0ce5d18d7d18fc4366232a0597f4f327657": "14bbad2fe325e7a04097477138b75519",
".git/objects/47/4bfbaf34fbaf99dbc782972ddf69337dfc8dcc": "596bf8b0da86a121043c79b2d63f7422",
".git/objects/13/28de1a680771a208b020178c2916d4c3f119f2": "0f46b876e7edf84daeecffdf8c2e9029",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d0e90511b112b512a1d07eec310e1e7a",
".git/logs/refs/heads/master": "d0e90511b112b512a1d07eec310e1e7a",
".git/logs/refs/remotes/origin/master": "46b1cb9356493d316fad9dc17cf7072d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "16ea79a3507aff166f7bb7845643e2f7",
".git/refs/remotes/origin/master": "16ea79a3507aff166f7bb7845643e2f7",
".git/index": "625781be7cd8c3b5d4103a8c857b7513",
".git/COMMIT_EDITMSG": "9e58ae0a8922374391eb333ae081999b",
"assets/AssetManifest.json": "d69494c1481bc0433770e273db95ccc2",
"assets/NOTICES": "5b13714323a2d8f58ab5f79f40e4b065",
"assets/FontManifest.json": "b96ed4654c306af00bc2b5da14b61955",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/upload_files.png": "3cfb189587b16102088bc9654bff4afc",
"assets/assets/images/down_arrow.png": "42ffae7ac549799ea3cf575d10c8a9f2",
"assets/assets/images/cliam.svg": "c8a54c0909e28799815a226be5f5ac3d",
"assets/assets/images/email_popup_web.png": "d631619f7e178da241a983ded4e122b3",
"assets/assets/images/home.svg": "a75eeeda9ade2f41e89c6be5dcf9700c",
"assets/assets/images/eye_hidden.png": "ede6cf89901663bc596f8884c41b9f0d",
"assets/assets/images/thanks_general_photo_poopup.png": "c08bb9ae384d175faf679448ac015207",
"assets/assets/images/upload__icon.svg": "1ba2305ff8ecc2a84f389de470022e6b",
"assets/assets/images/left_arrow.svg": "f00698c2f710f017018eb851b4738ffa",
"assets/assets/images/email_popup.png": "8446f125eb6d9b74368f1a6acd9e5075",
"assets/assets/images/call_back_popup.png": "86419f0fb55542550610336ede9e3bb4",
"assets/assets/images/inbox_icon.png": "a08c90ad1e61a3bdbaff7c870503d8d6",
"assets/assets/images/add.svg": "c73191eebe3dcff2c8fa88b67604e9b0",
"assets/assets/images/eye_view.png": "d7b229d7a945a893aa86f36e3a975f52",
"assets/assets/images/browse.svg": "91c4897f7e4b911809adb798c6ea3917",
"assets/assets/images/close_icon.svg": "a40a5af9d52cceeb30cc8ac7098b7d54",
"assets/assets/images/logo.png": "d65288735b55d0d9cddc0059325ebc59",
"assets/assets/images/right_arrow_circle.svg": "0c90b51f7fd8e6653cfd5c09d37b2919",
"assets/assets/images/splash_screen.png": "780108504683ebe22971232ec9bc45bb",
"assets/assets/images/calendar_icon.png": "3b05c9dea1f4aeeeb86241dd9b128d58",
"assets/assets/images/clock.png": "54a3f1884baa28b789a69c384a7c5c95",
"assets/assets/images/pencil.svg": "8da415790dcbdf550d117135caeaba87",
"assets/assets/images/thanks_web_popup.png": "59c1c426d832bdc867f97062a49e478c",
"assets/assets/images/call.svg": "c523e427394de6483ff191378c92b0af",
"assets/assets/images/right_arrow_circle_grey.svg": "cbb0e6d0e78e4902c9288516dae0e76d",
"assets/assets/images/call_back_web_popup.png": "b98ad3c58becbff7001ff276d7361e35",
"assets/assets/images/profile.svg": "a4d5ad3ede59fb77127e3e4618ede82c",
"assets/assets/images/star.png": "1dd4dda454d1031aad0e03c8421dd7f4",
"assets/assets/images/close_round.svg": "46a8868db23385f1bc19b410a917a5eb",
"assets/assets/images/lock_icon.png": "fc5d4085b6e96f4fd73227ab899870f8",
"assets/assets/images/left_back.svg": "1f302ec899fb9e1bd45bf64d2e954b87",
"assets/assets/images/web_close.svg": "6373c530b3db6afcdb2ef772489241eb",
"assets/assets/images/cancel_image.svg": "9f90c0e6ce5bd3f1db1691b3ceec1b6c",
"assets/assets/images/right_back.svg": "dcfc41a5853505a7f40c974f785ca026",
"assets/assets/images/profile_blank.svg": "e392802dca813c158ca032cb614913bf",
"assets/assets/cfg/configurations.json": "327a7a897a2ff3dcdee9f33737d07680",
"assets/assets/ttficon/call.ttf": "39e6eb8ba42f2ded0dea7d1ef05b789d",
"assets/assets/ttficon/home.ttf": "99db122f6ca366a10c424f81ea651daa",
"assets/assets/ttficon/claim.ttf": "a56e032e351005aa0bbba459b7b2756b"
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
