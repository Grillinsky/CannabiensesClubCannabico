
        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js";
        import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-analytics.js";
        import {getDatabase, ref, set} from "https://www.gstatic.com/firebasejs/9.2.0/firebase-database.js"
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries
      
        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        const firebaseConfig = {
          apiKey: "AIzaSyAYTlPPjaB7qw5EF4Cumb5rPRPrjfY4bgc",
          authDomain: "club-cannabico-cannabienses.firebaseapp.com",
          databaseURL: "https://club-cannabico-cannabienses-default-rtdb.firebaseio.com",
          projectId: "club-cannabico-cannabienses",
          storageBucket: "club-cannabico-cannabienses.appspot.com",
          messagingSenderId: "642631473089",
          appId: "1:642631473089:web:d56954dd854b65a426c140",
          measurementId: "G-8X8LK55M0V"
        };
      
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);
        const database = getDatabase(app);

        let form = document.getElementById("formularioContacto");
        form.addEventListener("submit", (e)=>{
            e.preventDefault(e);
            //Get VAlues

            var date = new Date();
            var email = document.getElementById("correoInput").value;
            // console.log(email, date)

            // VALIDATION
            if (email === ""){
                alert("Por favor completa con tu  email");
            }else{
                set(ref(database, "Nuevo adherente: " + date),{
                    email: email,
                    date: date
                });
                alert("Gracias! Nos comunicamos con vos a la brevedad");
                form.reset();
            }});