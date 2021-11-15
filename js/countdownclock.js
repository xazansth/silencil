    var endDate = new Date().getTime()+1800000;
    var timer = setInterval(function() {
 
        let now = new Date().getTime(); 
        let t = endDate - now;
        
        if (t >= 0) {
 
            let gunler = Math.floor(t / (1000 * 60 * 60 * 24));
            let saatler = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let dakikalar = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
            let saniyeler = Math.floor((t % (1000 * 60)) / 1000);

            document.getElementById("timer-gunler").innerHTML = gunler + 
            "";

            document.getElementById("timer-saatler").innerHTML= ("0" + saatler).slice(-2) +
            "";

            document.getElementById("timer-dakikalar").innerHTML= ("0" + dakikalar).slice(-2) +
            "";

            document.getElementById("timer-saniyeler").innerHTML= ("0" + saniyeler).slice(-2) +
            "";
        }
        else { 
            document.getElementById("timer").innerHTML = "Time is over !"; 
        }
        
        
    }, 1000);