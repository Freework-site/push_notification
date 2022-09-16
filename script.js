const button = document.querySelector('button');
button.addEventListener('click', () => {
    Notification.requestPermission().then(prem =>{
        if(prem === "granted")
        {
            new Notification("Adobe Pay Figma $20B");
        }
    })
})