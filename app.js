function nol(son) {
    if (son < 10) {
        son = "0" + son;
        return son;
    } else {
        return son;
    }
}

setInterval(() => {



    let date = new Date();
    let day = date.getDate()
    let month = date.getMonth()
    let year = date.getFullYear()
    let weekd = date.getDay()

    let hour = date.getHours()
    let minut = date.getMinutes()
    let second = date.getSeconds()
    let msecond = date.getMilliseconds() / 10


    let aTime = new Date(`${year + 1}-01-01T00:00:00`) - Date.now();
    // console.log(aTime);
    let days = Math.floor(aTime / (1000 * 60 * 60 * 24));
    let hours = Math.floor((aTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((aTime % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((aTime % (1000 * 60)) / 1000);

    document.querySelector('.mainMinut').textContent = `${days} kun ${nol(hours)} soat`
    document.querySelector('.mainMinut2').textContent = `${nol(minutes)} minut ${nol(seconds)} sekund`

    document.querySelector('.days').textContent = `${day} - ${month+1} - ${year}`;
    document.querySelector('.seconds').textContent = `${nol(hour)} : ${nol(minut)} : ${nol(second)} : ${Math.floor(nol(msecond))}`;
}, 10)