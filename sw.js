if(!self.define){let e,s={};const f=(f,w)=>(f=new URL(f+".js",w).href,s[f]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=f,e.onload=s,document.head.appendChild(e)}else e=f,importScripts(f),s()})).then((()=>{let e=s[f];if(!e)throw new Error(`Module ${f} didn’t register its module`);return e})));self.define=(w,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let a={};const c=e=>f(e,r),b={module:{uri:r},exports:a,require:c};s[r]=Promise.all(w.map((e=>b[e]||c(e)))).then((e=>(o(...e),a)))}}define(["./workbox-3f2e2419"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"package-lock.json",revision:"09dcb1ef9e592ccec3756c1cb2b41ede"},{url:"package.json",revision:"d040642e4f17fb70d93329a05f899b44"},{url:"platforms/browser/browser.json",revision:"4523284683884f5676a3c77cc2b13897"},{url:"platforms/browser/platform_www/manifest.json",revision:"eec23e8bc58f9bfbb4652c04a860bc98"},{url:"platforms/browser/www/css/fontawesome/css/all.min.css",revision:"325672b036bab9b57f6873aed5eccc43"},{url:"platforms/browser/www/css/fontawesome/webfonts/fa-brands-400.ttf",revision:"70e65a0c310df9eafd22e37477b34fa8"},{url:"platforms/browser/www/css/fontawesome/webfonts/fa-brands-400.woff2",revision:"ea24446014ea86d85129883a9511629f"},{url:"platforms/browser/www/css/fontawesome/webfonts/fa-duotone-900.ttf",revision:"0f6e1cda5d98807d8677ee997c098b0f"},{url:"platforms/browser/www/css/fontawesome/webfonts/fa-duotone-900.woff2",revision:"e61f5122477485b8bf639e06b6b40b03"},{url:"platforms/browser/www/css/fontawesome/webfonts/fa-light-300.ttf",revision:"bd2b394b0ece2133a059b46f87617b1b"},{url:"platforms/browser/www/css/fontawesome/webfonts/fa-light-300.woff2",revision:"b7412eb0b0d0a37deffbb70250b4011d"},{url:"platforms/browser/www/css/fontawesome/webfonts/fa-regular-400.ttf",revision:"6bf63c80836c0b844942bb35544e28c8"},{url:"platforms/browser/www/css/fontawesome/webfonts/fa-regular-400.woff2",revision:"a927362a975051e5d7361d860d8ffba7"},{url:"platforms/browser/www/css/fontawesome/webfonts/fa-solid-900.ttf",revision:"e7f19ca67a615cf1b46937d0fb06f8df"},{url:"platforms/browser/www/css/fontawesome/webfonts/fa-solid-900.woff2",revision:"6ebcf9f18ded9c54f71ec1198c32aa52"},{url:"platforms/browser/www/css/fontawesome/webfonts/fa-thin-100.ttf",revision:"ec3bc0faf8aff3cb9a1a2214e77f40cc"},{url:"platforms/browser/www/css/fontawesome/webfonts/fa-thin-100.woff2",revision:"0f5eb70634120c0e705ba4e0526cbd82"},{url:"platforms/browser/www/css/fontawesome/webfonts/fa-v4compatibility.ttf",revision:"9c2c1167cfa7f507c61032ae3a741eed"},{url:"platforms/browser/www/css/fontawesome/webfonts/fa-v4compatibility.woff2",revision:"c960b99465bb31fecdbf0fd600f0e1de"},{url:"platforms/browser/www/css/index.css",revision:"7fea6ed27858cdfcc561b7b86c2b4ccf"},{url:"platforms/browser/www/html/app.html",revision:"c93a660b720f0712a191ab2ae7281a0c"},{url:"platforms/browser/www/html/base64/base64.html",revision:"3deff679838974bc084ae3855d863cf2"},{url:"platforms/browser/www/html/conversor-base/conversor-base.html",revision:"64178e619399632ad658f4983e29f980"},{url:"platforms/browser/www/html/hash/hash.html",revision:"bcc5e01b84ae1685ea9d538632bb1730"},{url:"platforms/browser/www/html/jwt/jwt.html",revision:"375cccb91675c8013e540a186634ba81"},{url:"platforms/browser/www/html/NumerosPerfectos/NumerosPerfectos.html",revision:"3e5a470f92bdfbefc8aee2e1d61c5740"},{url:"platforms/browser/www/html/pass/pass.html",revision:"44966928e756032660dad99a1aa95b0c"},{url:"platforms/browser/www/html/pi/pi.html",revision:"562de46e35b24475469a7da5cf142942"},{url:"platforms/browser/www/html/qrs/qrs.html",revision:"5f11b4f9394ab2cddd352cb9e3c135fd"},{url:"platforms/browser/www/img/logo.png",revision:"7e34c95ac701f8cd9f793586b9df2156"},{url:"platforms/browser/www/index.html",revision:"e68ed5b5da28513f4251f2b68d0a9219"},{url:"platforms/browser/www/manifest.json",revision:"eab78aa138e28576f4be96b20d88d7ed"},{url:"plugins/browser.json",revision:"6169f02ea3d9568d6804ae6628f355b9"},{url:"plugins/cordova-unique-device-id/package.json",revision:"f4f1e37e62cc20aff025776e33374952"},{url:"plugins/fetch.json",revision:"cd6fee9cabeb5dcfda68b00d3f132536"},{url:"www.src/css/fontawesome/css/all.min.css",revision:"325672b036bab9b57f6873aed5eccc43"},{url:"www.src/css/fontawesome/webfonts/fa-brands-400.ttf",revision:"70e65a0c310df9eafd22e37477b34fa8"},{url:"www.src/css/fontawesome/webfonts/fa-brands-400.woff2",revision:"ea24446014ea86d85129883a9511629f"},{url:"www.src/css/fontawesome/webfonts/fa-duotone-900.ttf",revision:"0f6e1cda5d98807d8677ee997c098b0f"},{url:"www.src/css/fontawesome/webfonts/fa-duotone-900.woff2",revision:"e61f5122477485b8bf639e06b6b40b03"},{url:"www.src/css/fontawesome/webfonts/fa-light-300.ttf",revision:"bd2b394b0ece2133a059b46f87617b1b"},{url:"www.src/css/fontawesome/webfonts/fa-light-300.woff2",revision:"b7412eb0b0d0a37deffbb70250b4011d"},{url:"www.src/css/fontawesome/webfonts/fa-regular-400.ttf",revision:"6bf63c80836c0b844942bb35544e28c8"},{url:"www.src/css/fontawesome/webfonts/fa-regular-400.woff2",revision:"a927362a975051e5d7361d860d8ffba7"},{url:"www.src/css/fontawesome/webfonts/fa-solid-900.ttf",revision:"e7f19ca67a615cf1b46937d0fb06f8df"},{url:"www.src/css/fontawesome/webfonts/fa-solid-900.woff2",revision:"6ebcf9f18ded9c54f71ec1198c32aa52"},{url:"www.src/css/fontawesome/webfonts/fa-thin-100.ttf",revision:"ec3bc0faf8aff3cb9a1a2214e77f40cc"},{url:"www.src/css/fontawesome/webfonts/fa-thin-100.woff2",revision:"0f5eb70634120c0e705ba4e0526cbd82"},{url:"www.src/css/fontawesome/webfonts/fa-v4compatibility.ttf",revision:"9c2c1167cfa7f507c61032ae3a741eed"},{url:"www.src/css/fontawesome/webfonts/fa-v4compatibility.woff2",revision:"c960b99465bb31fecdbf0fd600f0e1de"},{url:"www.src/css/index.css",revision:"7fea6ed27858cdfcc561b7b86c2b4ccf"},{url:"www.src/html/app.html",revision:"c93a660b720f0712a191ab2ae7281a0c"},{url:"www.src/html/base64/base64.html",revision:"3deff679838974bc084ae3855d863cf2"},{url:"www.src/html/conversor-base/conversor-base.html",revision:"64178e619399632ad658f4983e29f980"},{url:"www.src/html/hash/hash.html",revision:"bcc5e01b84ae1685ea9d538632bb1730"},{url:"www.src/html/jwt/jwt.html",revision:"375cccb91675c8013e540a186634ba81"},{url:"www.src/html/NumerosPerfectos/NumerosPerfectos.html",revision:"3e5a470f92bdfbefc8aee2e1d61c5740"},{url:"www.src/html/pass/pass.html",revision:"44966928e756032660dad99a1aa95b0c"},{url:"www.src/html/pi/pi.html",revision:"562de46e35b24475469a7da5cf142942"},{url:"www.src/html/qrs/qrs.html",revision:"5f11b4f9394ab2cddd352cb9e3c135fd"},{url:"www.src/img/logo.png",revision:"7e34c95ac701f8cd9f793586b9df2156"},{url:"www.src/index.html",revision:"6f31f74c7a56013d2f28203aef20c6c8"},{url:"www.src/manifest.json",revision:"eab78aa138e28576f4be96b20d88d7ed"},{url:"www.src/scss/styles.scss",revision:"a27265fcb03ea5cf9189937480d61906"},{url:"www/css/fontawesome/css/all.min.css",revision:"325672b036bab9b57f6873aed5eccc43"},{url:"www/css/fontawesome/webfonts/fa-brands-400.ttf",revision:"70e65a0c310df9eafd22e37477b34fa8"},{url:"www/css/fontawesome/webfonts/fa-brands-400.woff2",revision:"ea24446014ea86d85129883a9511629f"},{url:"www/css/fontawesome/webfonts/fa-duotone-900.ttf",revision:"0f6e1cda5d98807d8677ee997c098b0f"},{url:"www/css/fontawesome/webfonts/fa-duotone-900.woff2",revision:"e61f5122477485b8bf639e06b6b40b03"},{url:"www/css/fontawesome/webfonts/fa-light-300.ttf",revision:"bd2b394b0ece2133a059b46f87617b1b"},{url:"www/css/fontawesome/webfonts/fa-light-300.woff2",revision:"b7412eb0b0d0a37deffbb70250b4011d"},{url:"www/css/fontawesome/webfonts/fa-regular-400.ttf",revision:"6bf63c80836c0b844942bb35544e28c8"},{url:"www/css/fontawesome/webfonts/fa-regular-400.woff2",revision:"a927362a975051e5d7361d860d8ffba7"},{url:"www/css/fontawesome/webfonts/fa-solid-900.ttf",revision:"e7f19ca67a615cf1b46937d0fb06f8df"},{url:"www/css/fontawesome/webfonts/fa-solid-900.woff2",revision:"6ebcf9f18ded9c54f71ec1198c32aa52"},{url:"www/css/fontawesome/webfonts/fa-thin-100.ttf",revision:"ec3bc0faf8aff3cb9a1a2214e77f40cc"},{url:"www/css/fontawesome/webfonts/fa-thin-100.woff2",revision:"0f5eb70634120c0e705ba4e0526cbd82"},{url:"www/css/fontawesome/webfonts/fa-v4compatibility.ttf",revision:"9c2c1167cfa7f507c61032ae3a741eed"},{url:"www/css/fontawesome/webfonts/fa-v4compatibility.woff2",revision:"c960b99465bb31fecdbf0fd600f0e1de"},{url:"www/css/index.css",revision:"7fea6ed27858cdfcc561b7b86c2b4ccf"},{url:"www/html/app.html",revision:"c93a660b720f0712a191ab2ae7281a0c"},{url:"www/html/base64/base64.html",revision:"3deff679838974bc084ae3855d863cf2"},{url:"www/html/conversor-base/conversor-base.html",revision:"64178e619399632ad658f4983e29f980"},{url:"www/html/hash/hash.html",revision:"bcc5e01b84ae1685ea9d538632bb1730"},{url:"www/html/jwt/jwt.html",revision:"375cccb91675c8013e540a186634ba81"},{url:"www/html/NumerosPerfectos/NumerosPerfectos.html",revision:"3e5a470f92bdfbefc8aee2e1d61c5740"},{url:"www/html/pass/pass.html",revision:"44966928e756032660dad99a1aa95b0c"},{url:"www/html/pi/pi.html",revision:"562de46e35b24475469a7da5cf142942"},{url:"www/html/qrs/qrs.html",revision:"5f11b4f9394ab2cddd352cb9e3c135fd"},{url:"www/img/logo.png",revision:"7e34c95ac701f8cd9f793586b9df2156"},{url:"www/index.html",revision:"e68ed5b5da28513f4251f2b68d0a9219"},{url:"www/manifest.json",revision:"eab78aa138e28576f4be96b20d88d7ed"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
