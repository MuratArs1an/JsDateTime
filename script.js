let name = prompt("adinizi giriniz: ");
let nameTag = document.querySelector("#name")
nameTag.innerHTML = name;

setInterval(() => {
    let date = new Date();
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    let day = date.getDay()

    let dayText;

    (day == 0) ? dayText = 'Pazar' :
        (day == 1) ? dayText = 'Pazartesi' :
            (day == 2) ? dayText = 'Sali' :
                (day == 3) ? dayText = 'Carsamba' :
                    (day == 4) ? dayText = 'Persembe' :
                        (day == 5) ? dayText = 'Cuma' :
                            (day == 6) ? dayText = 'Cumartesi' :
                                'Yanlis tarih'
    let dateTag = document.querySelector('#dateText');
    dateTag.innerHTML = hours + ':' + minutes + ':' + seconds+" "+dayText;
},1000)


