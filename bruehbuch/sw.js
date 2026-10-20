// Brühbuch ist umgezogen nach /Bruehbuch/: dieser Service Worker räumt sich selbst weg.
self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x.startsWith('bb-')).map(x=>caches.delete(x)))).then(()=>self.registration.unregister()).then(()=>self.clients.matchAll()).then(cs=>cs.forEach(c=>c.navigate('/Bruehbuch/'))))});
