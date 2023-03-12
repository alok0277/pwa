
// Registering Service Worker 

if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js')
    .then((reg)=>{
        console.log("Service Worker registered....", reg)
    })
    .catch((err)=>{
        console.log("Failed service worker registered....", err)
    })
}