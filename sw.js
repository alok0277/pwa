// Service Worker Events.

self.addEventListener('install', (event)=>{
    console.log("Install event triggered.", event);
});

self.addEventListener('activate', (event)=>{
    console.log("Activate event triggered.", event);
});

self.addEventListener('fetch', (event)=>{
    console.log("Fetch event triggered.", event);
});