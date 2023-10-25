            function startCountdown() {
                var countdown = document.getElementById("countdown");
                var tomb = document.getElementById("tomb");
                var seconds = 5;
                countdown.innerHTML = seconds + " seconds remaining";
                var countdownInterval = setInterval(function() {
                    seconds--;
                    countdown.innerHTML = seconds + " seconds remaining";
                    if (seconds == 0) {
                        clearInterval(countdownInterval);
                        tomb.src = "./image/cat4.png";
                        countdown.innerHTML = "Your cat back again!";
                    }
                }, 1000);
            }