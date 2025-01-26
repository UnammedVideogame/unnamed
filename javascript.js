const targetDate1 = new Date("2025-07-21T00:00:01").getTime(); // Cuenta atrás 1
    const targetDate2 = new Date("2025-11-21T00:00:01").getTime(); // Cuenta atrás 2

    function updateCountdown(targetDate, daysId, hoursId, minutesId, secondsId) {
      const now = new Date().getTime();
      const timeLeft = targetDate - now;

      if (timeLeft < 0) {
        document.getElementById(daysId).textContent = "00";
        document.getElementById(hoursId).textContent = "00";
        document.getElementById(minutesId).textContent = "00";
        document.getElementById(secondsId).textContent = "00";
        return;
      }

      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      document.getElementById(daysId).textContent = days.toString().padStart(2, "0");
      document.getElementById(hoursId).textContent = hours.toString().padStart(2, "0");
      document.getElementById(minutesId).textContent = minutes.toString().padStart(2, "0");
      document.getElementById(secondsId).textContent = seconds.toString().padStart(2, "0");
    }

    function startCountdowns() {
      setInterval(() => {
        updateCountdown(targetDate1, "days1", "hours1", "minutes1", "seconds1");
        updateCountdown(targetDate2, "days2", "hours2", "minutes2", "seconds2");
      }, 1000);
    }

    // Iniciar las cuentas atrás
    startCountdowns();

    var clic = 1;

function divLogin(){ 
    var registro = document.getElementById("register");

    if(clic == 1){
        // Mostrar el formulario con una animación
        registro.style.display = "block";    
        registro.classList.remove("animate__fadeOut");  // Eliminar cualquier animación anterior
        registro.classList.add("animate__animated", "animate__backInDown");  // Añadir la animación de entrada
        clic = 2;
    } else {
        // Ocultar el formulario con una animación
        registro.classList.remove("animate__fadeIn");
        registro.classList.add("animate__fadeOut");  // Añadir la animación de salida
        setTimeout(function() {
            registro.style.display = "none";  // Después de la animación, ocultamos el formulario
        }, 1000); // 1 segundo de duración de la animación
        clic = 1;
    }
}

