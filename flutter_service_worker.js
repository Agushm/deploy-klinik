'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "f2044c6471adefb46e5c881bc6f30667",
".git/config": "fd4c6eed19c630d5f13bea83aee1fc26",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "86d390ab1c6b2d3b3aedb455de4063c1",
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
".git/index": "84a1de455be81c2956256384285c7867",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5c38a8be89aafcc0a3f85ae9afb19eb9",
".git/logs/refs/heads/main": "bbe77c5e0fa756fa07591b367544f027",
".git/logs/refs/remotes/origin/main": "39c9277f5794eaefb0be492e60132739",
".git/objects/3c/c14d574e794dd5f39754d052ae44f0eef38823": "4615c9921723322bc04e45e79c092da4",
".git/objects/80/3bbe7f29c9faeb73c6ce1d6c93bca070fae1fc": "4dbb4e791d1219d7fd821af6fe44dfee",
".git/objects/b4/eadb37f352827048c68936a8166901937abe43": "c52174a6833157df24c2381f0ec66d20",
".git/objects/00/947f9b007a04030231591d15a23b491a31bd5b": "c54f68edb0ed182186e8531d44ce060b",
".git/objects/03/e4f77a39b206e016e0d788b77e30c5bb9e505d": "6e514810de1b42f55c14272ae001d735",
".git/objects/04/af71dbf284c5c02a34b9564684fb2cd4b419d9": "a54a252177f9160e8fbdcf3a9ec55a7e",
".git/objects/09/a5106b69f3b5ceb62fb8e7a0a7cda19e7dc77b": "9d1658f870ce4c981862b723e4dceeb4",
".git/objects/0b/e6aa5c1e87920791576317361e933f74a07a83": "6bdb8699337bf11a2f06e2302ea1f3cc",
".git/objects/0d/7490d5eb4936c78cab72a5c93e21f5d256ccbe": "2939b4da7cf6711bdfcdd30029bb9bda",
".git/objects/14/b888798d960112eb12e786aefb74dbaf9c9e5a": "559dba97773bcf8565ef1b6e7d7a51b6",
".git/objects/16/629d2916676c128ea3e8fc23a76d417d330460": "408fafa547d6c0e34d65d6b3a4e2bb72",
".git/objects/1a/ba996b70212495123835ee75ee5180f764e14b": "e251c1345b823fc01b674d422acd75f6",
".git/objects/1e/efb7156a8690f85c04dc47e65e431b481aecd0": "79299753b48eccbe27322753621216ae",
".git/objects/1f/3ae1696e833bfa7c9e4834afb4b48f985718c8": "bcda5f4a55f247f91699947e69e29bdc",
".git/objects/1f/3ef291a3ad58e5381338771334e3672db29cdd": "4ce288c526f7b1c03e59628df193af79",
".git/objects/20/1979e2c8ebceeae8ff64b9cbc06c6bfb00f62e": "863699e4598fa04afc0b7718a88a47fe",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/e141819897480b2d753860e53163b84c0dc2fc": "884813ea8c0bf2aed8d96fe942d42ba9",
".git/objects/22/50384582f1929d9a72a8ae128ed250c74c42e7": "3bc0119b0d0bf3fbab412d463d795b67",
".git/objects/24/6f1405551a3d6f076dc15bba0612e17f38facf": "3022e619511ae984cad88a67303d0e19",
".git/objects/2f/04ae44231b6eede60a92179033b5f5338a9c6d": "fb41b5eb0417cfbebf13a6ba8e63804a",
".git/objects/30/887e0d7ce99a90ac66c8b1f1e3923380604688": "6e9bb3943df064f3f359ee4672d85dac",
".git/objects/30/aac0c48fe8b6a24f41a8aadb5263e9ed5516f5": "8738e77986364d505b946e4ecf6b5135",
".git/objects/31/173396f126b38ebbccabe57b8e0abbacc59955": "ac4cbba0facf86b9e3d66ba6e0e72b0a",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/32/8538f504c6f0e506f63874f08eb212d4e4c1ce": "65c35c7d815bf8a5682d0f00874e1603",
".git/objects/33/3ffbc177700df1e4d48ded9499545d336a4024": "66baeec1e0be3873e9c35fa336a787fc",
".git/objects/35/acacdb711f6cf7baa79e2545008bd593ad60ae": "e011606806fde0d594c65d6f4d15b0de",
".git/objects/36/4b6e36440d35ad609c3a6164ca415ba56fea93": "5376d9f947b4f21865f0bf6f59fc4b05",
".git/objects/37/ff70a067a397fb28bc7d5700879a3cbe599a8f": "9500785ae739c45a9a6ef6b95991d221",
".git/objects/38/6d4ce4fe4dbac37cc13c08fe0b5ccd2f834c19": "ecaf9c707ce9725da3a94c2809296f27",
".git/objects/38/d66004703e12742a176e13d888ef14f4673653": "2265ab00944df1e8575ba36031cd4de7",
".git/objects/3a/1fda037716a4a0bae2c20329d70f88bde37667": "121b1ce5081ec989f01b02ff94e6044b",
".git/objects/81/afc3c77ba0792b72301ca6c8c4a720b634d8ad": "432f90b9e77c0ff4a106e459cb41ab07",
".git/objects/84/19fb4ded9f0c89fa2b69b297b1618b7f782da8": "b8f2ca7665913ec64ca82fe4e747aca3",
".git/objects/84/6fff5ca452cd0424b913f6b5c1edc0a592ca00": "aa08a72571205410bf6928e04ed3b0cc",
".git/objects/85/6a74ec2764bf4cc01d9c7fba1d1bef14d345e4": "e3ff6682e15ad68ef2545d3d82d15910",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/2d96d2e6df6d0eb69d2d67738b21e97de01e9b": "92f10009829f1b666e9867063185d2a6",
".git/objects/90/899be352a9a32c99563ce4cb248ff8ad39c714": "7d56b19d49082a03d32fbd67557ead91",
".git/objects/96/56e4f39781e6ac71708865c0e47f8cb7f50cd2": "b04d0564bec709c1017ba9cfd43d0cec",
".git/objects/97/f84b743a97e3ea71c2cd260c97917e3913680b": "c5328d278dbfece995a84947ca22bfad",
".git/objects/97/fa49fe672b87672699272b5fa168fd9fe38310": "3059bf1e44460ca746a4bd5fa3866573",
".git/objects/99/d786da8ada9d1c5e4c2523ac5ff0ae3c154a2f": "5a860f2b83c6306de283ceb023de4ea0",
".git/objects/9a/ac6a5841ce70e29924257edbef2a2ab6b5e4d9": "039f862020b2ecc0c35e9110c92fad10",
".git/objects/9c/17a89ae7364df70383440686ffc3c51ec78844": "c8012e048f712a35af8644b3a8848083",
".git/objects/9d/0b5cc63e032ad44d924665560035a97f035a0b": "d689f0eda60efe9b7c8cabe65a55a4ae",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/9564771d7182fb11c7c62936b58710c137e567": "09708c3238e062410eda7ad4376642c7",
".git/objects/a2/d9e5238496f5e10527c0e3b42f35c7c4fd9271": "79fa752049879eab742ac38fbf1c6714",
".git/objects/a4/1ef558ec2d63159f78745da716975cec6227b7": "28a9ce1790b9b2207f88acadad701a7e",
".git/objects/a7/770661929965fc48a6eea47672bf7040350fb9": "7267369fd84394f115b52ef2094db13d",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a9/aabb4a1d6ed3ee346cae31bb3c53a347d47464": "b79886c5fb494f82b46fdf019c904e97",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ae/c4a6d79d0633b88ab74cce4818e9af831a1039": "63b061993cfd61dc871b119bfac2eca2",
".git/objects/b0/82914aecf550121fc6888134fe87ad2150c253": "332a5248fb55ad3f3a6a81b2b6429b58",
".git/objects/b2/a076f9f64bae2d4c5d3c3deedfd7b4eb6dcd90": "e8a0cfd74878b4cf76f85df7d07fad7d",
".git/objects/b3/3eb3237e6c9d5a4dad503b4c3c851bd76a399a": "eea021f345f1a4f582aa01d91cb97a30",
".git/objects/3e/e0e0e4c235da0eb2848799df6846acdde59557": "7748327becc63dfc2f59ae178e4ff066",
".git/objects/44/fdc28229b1a3a1d918f7809f96f6e780aab756": "9d632f28e46ccd79e4bfecff290ecf3f",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/5845689d701303ade8f53a380bd269f6d60c0e": "ab8ccc610721eb0623d0399ae6209714",
".git/objects/48/891814c11fea075b8512fc67ab3e33b419cfec": "b2222a9bfb7743fa698455180d3b3795",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4d/a78bee932bc008f1d90d9502604e94f7e32491": "cdf03c5ee5dabbb353bcbb3d5d367cb7",
".git/objects/4d/e21e80afd1253b359b0a3b04a909339acf90cc": "4d9d3bba41c377e95a280aba3b4b7c8e",
".git/objects/4f/ae1ff48b1c00520b17488a50456721852618ab": "33dcfad13a9859e05288531e7d70b4fd",
".git/objects/52/6aa7ec6287f60412379d66bdba70a6ce2bf1ac": "86420ffe0a39e52ef0c7f5ffd02f38f2",
".git/objects/52/a07113eb239aabe614bb0a8a9d30560a2bee1f": "9623442747902e84cc29b5944a5c549f",
".git/objects/57/6bae591180cbbbd923ff68e2939fe8caa98ead": "8f9587243196acb488f5a86dc9f15bb3",
".git/objects/61/2ae6ca86341b3504bfa81cfe0d8bf45df63b44": "5bb2c1cfdd0e1c164734da2d8245b4d9",
".git/objects/61/cb238febafe5273d395469fdfb362cecf9b2c6": "021dee0a21f2e6880fd1457415131622",
".git/objects/62/7c600924b9f8d64c29a7af983abcd82a9c85db": "97199f925f14b4dba0c7424e2dbe4a8e",
".git/objects/62/821dcf9d16a3a5d92289bda4ee46ddd583f8ba": "92657f33e7d04bc72fa9dade9d0cb338",
".git/objects/63/3ffce2b5d00f6e505b60476b2ceb31519226d1": "ae8b4a0ac3adbf8e0286533bc7b52e15",
".git/objects/65/4cefbb4a263dd859bdf3452a433e494e6abf76": "7dc4ee36bb606c138b076bacdfa34217",
".git/objects/65/97ba18643af6994b1e7ac0d0bb46967a76488a": "a1f7389272cb13769a7afcb1dd4ed30f",
".git/objects/67/acf6b89b4a7cac8a045da5677073ecf748a6e2": "518e628e7e366f04acaa156fc830c2c7",
".git/objects/68/5be48f872a0372f607603a9d4ec30d0a338cac": "1699d5008211054d7914aee0377d4ede",
".git/objects/69/0062d75c3361fb0f8b682c4722cc3d0df230ff": "81336948c40f5a515f06881aca2782ec",
".git/objects/6c/7f66bb6a584658e40c485ecaea83287fcfca6f": "7e1601bfd8bc87000247399b9d0d236e",
".git/objects/71/46337bbfddb27b35a573896a26e9c635f1719d": "c918d74b24d1fa37337a0e94a9da9cbc",
".git/objects/72/91a9293494f5f2c446f64635fb04a8f3946350": "2933725a4db7808e2f1d10f3b48cc157",
".git/objects/76/21d1897a6951b0523b67550482cb0679e64cd7": "5965480d4607b6f38fb5ee27900d42a8",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/0aed8a3f739e371ea86cb99bd4bf0164a49b95": "52553b1b81d0c297f5fd8c97165d62cb",
".git/objects/7d/ecc2bc5267344d2ff2619da651e9b78461680c": "15817cb4ceca6d2bbbec2bac26389693",
".git/objects/7e/94a4b0528d63506658ef20062cb0b9b78db370": "29a84865ba8a93b73a632815e3b37622",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bb/dd1686e8239b76fd85ee544c237679200f8058": "572db289f33cf3e1577dd8348271d60f",
".git/objects/bd/dd98ef877e31b38d92c5958b370cbbae25195c": "992b2d42f235c5b06e44db1573a0b1a3",
".git/objects/be/6d63bcf62dea923b5d9643f0d4e9310d6c458b": "905498c1655dd1d5701a85745c48cd1c",
".git/objects/be/ba699681ca05d33734183f4975c31c47af8944": "a565121ebe5c8cc1cbc3231f62f97193",
".git/objects/bf/086883591a126e0adef4e7e64b26d87066431a": "5fce5afcc32c194afb7a0ea60139266b",
".git/objects/cb/6f06b61deac785185345a2e4ac766cbf01f252": "9ba36cee82afebd9e314161431ae3477",
".git/objects/d3/389a85622f9b7bbbea84a91dd6ac04cf26f09d": "a73fca01d6da81bc55c1fa5e24789ed2",
".git/objects/d3/7ffcf53c2d0ed3e513127bc9bf49643e1f5c7d": "18c20dd65ae442c2a75de8e394d4691a",
".git/objects/d4/a5c8f824d1ec7b80b285f72e15698d72e12ef5": "f325284870fba3e397cad97e58fb7fbe",
".git/objects/da/00729de1d495aedc510edad2fb4bd6dd13018d": "4d97e234731a4404e53a8d75f4cad15f",
".git/objects/db/8060164b9ccaf64081fc773d956e389486d488": "e55c513ac78003e3b234fdca375ba213",
".git/objects/de/7372c280362297b9a25bac31e7ec22a9f22479": "2c199733b589a3846fcae7521ebee819",
".git/objects/e1/d30808fca9e0d3335581b43f1c76903adcf9b9": "3df2f3d1a2648b7153ad25df4dc4ed95",
".git/objects/e4/3c0f015a891829c8209d14fbb94fb7a91fc948": "6dc6ebbfd13b63dae6e69fe5f7457a52",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ed/0218df3b3f0d241b1b42beb22c1f22dc1a6310": "e82b5b1fca8d9cc66decf86b65df954b",
".git/objects/ed/2529df021237d25928e1d60c00c4da243d9fd6": "de45c18506ec2fae0a8285a4558cbff2",
".git/objects/ee/3fb39d30f0b0205e81c39740f3cefca1c9840b": "c8b060fefb5c363ba8e0e68f9637d253",
".git/objects/ef/b9442cccc2ea746e38c46b523e561ef0091bcf": "432e2628a83f88b052e2bacf56df9f5d",
".git/objects/f6/462c68eff233798e66e9c489b413c5c33ead11": "204c399243515f23563922e3dad08bcf",
".git/objects/f8/e754802e4d0a3f6b0298a7232316d4e7998e7a": "e4572bb0d3c0dc9b3e50b60fccb8f973",
".git/objects/fb/2e35455f28f9adf336e0e6a813c93b3fe4deab": "5f6d2f4be623b9996d0177c09aa45110",
".git/objects/fd/781bdb33f8afd7dbb98d9924916bf178a5a43c": "df6b2a3d02aa0fc0b17b7f919cfbfe51",
".git/objects/fe/c5e615600d2a861221dbde6a60b9b6063307bb": "97fe1e8e6b89e94187caaee83df6327a",
".git/ORIG_HEAD": "134cde666bdb748a9f6f0119e5657950",
".git/refs/heads/main": "3c73c5153dbd29cf330e53bd945076f8",
".git/refs/remotes/origin/main": "3c73c5153dbd29cf330e53bd945076f8",
"assets/AssetManifest.json": "fe60facdb5b5b41b7c8aa6833aceb122",
"assets/assets/icons/bank.png": "622a573c29ec1898692c06c502a47120",
"assets/assets/icons/bundle.png": "3d9aadd31dca428fd592e238978f75d6",
"assets/assets/icons/category.png": "4c698a116cec8aeda973370ac4e4343b",
"assets/assets/icons/doctor.png": "255e26fae728c9b4b67213d39d3575e4",
"assets/assets/icons/drugs.png": "dfc7b1635da674d40af1e49706bb63b7",
"assets/assets/icons/empty.png": "9e22738fe7f4f7c508b93269f0361998",
"assets/assets/icons/google.png": "7098eaaec24afc9e6e207ab5acac6c51",
"assets/assets/icons/history.png": "e8a9c8d0ced1941cf50a44be9274e3d5",
"assets/assets/icons/home.png": "8107dd52e1920f15bde592b12c4cf665",
"assets/assets/icons/logo.png": "f4101edd557e01883eec7a29f9cfc34b",
"assets/assets/icons/news.png": "50cab69d3821dc2746a2597b9a576b40",
"assets/assets/icons/notification.png": "07d55762bd0d41442bffcc98ebc2e69d",
"assets/assets/icons/profile.png": "c663957ca943bfe9daa3fe47c0ba3cd6",
"assets/assets/icons/tools.png": "059aa8ea55e8a9f49eb71ad15d2dc888",
"assets/assets/icons/transaction.png": "b06fa84364bd4d1ee9c93136779d06db",
"assets/assets/icons/user-group.png": "693dcd52becd8b5fa5b8c97c3896de4c",
"assets/assets/icons/user-man.png": "b5f33b8e45f5b085b8974d947ece596b",
"assets/assets/icons/user-woman.png": "228a646acb21d250b5bc285bb3dc54bf",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "98bf6e588badde50897f9e30ed48c182",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "469c806998075d97e75203034ac75f8b",
"/": "469c806998075d97e75203034ac75f8b",
"main.dart.js": "a9e08605d29ead524812af36dfc3d500",
"manifest.json": "635edf9414d18aaa92c1ac48cabe7dcc",
"style.css": "c1a4f78f69bd4c6d26bb2e0a52fe33b8",
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
