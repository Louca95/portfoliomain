document.addEventListener("DOMContentLoaded", function () {
    // let img = document.getElementById("lightbulb");
    // img.src = "./img/off.png";
    // img.alt =  "Ampoule";

    let button1 = document.getElementById("toggle-button");
    let title = document.querySelector("div");
    let body = document.querySelector("body");
    let h1 = document.querySelector("#p1");
    let article = document.querySelector("article");
    let light = false;
    


    button1.addEventListener("click", function () {
        let img = document.getElementById("lightbulb");
        let man = document.getElementById("man")
        switch(light){
            case true:
            img.src = "/IMG/pngtree-sun-cartoon-cute-doodle-summer-png-image_6646856.png";
            man.src ="/IMG/téléchargement (6).png"
             img.alt =  "Le Soleil";
             body.style.backgroundColor = "#edd37c";
             title .style.color = "black"
             h1.innerHTML="le jour";
             light = false
             break;
             case false:
                img.src = "/IMG/pngtree-realistic-illustration-of-crescent-moon-png-image_6561470.png";
                man.src= "/IMG/téléchargement (5).png"
             img.alt =  "La Lune";
             body.style.backgroundColor = "black";
            title .style.color = "red";
            article .style.color = "red";
            h1.innerHTML="la nuit ";
            light = true
            break;
        }
           
            
        });

});    

document.addEventListener("DOMContentLoaded", function () {
    let button1 = document.getElementById("toggle-button");
    let player = 0;
    let h1 = document.querySelector("#p1");
    let houses1 = document.querySelectorAll(".maison1");
    let houses2 = document.querySelectorAll(" .maison2");
    let houses3 = document.querySelectorAll(".maison3");
    let wolf = document.getElementById("wolf");
    let round = 1;
    let score = 0;
    let hidingHouse = null;



    houses1.addEventListener("click", function () {
        player = 1;
        wolfjs(player);
    });
    houses2.addEventListener("click", function () {
        player = 2;
        wolfjs(player);
    });
    houses3.addEventListener("click", function () {
        player = 3;
        wolfjs(player);
    });

    function wolfjs() {
         wolf = Math.floor(Math.random() * 3) + 1;
        if (player === wolf) {
            alert("Le loup a trouvé l'homme ! Score: " + score);
        } else {
            score++;
            alert("Le loup a raté ! Score: " + score);
        }
        startNewRound();
    }
        wolfjs(player);


    function hideMan() {
        hidingHouse = Math.floor(Math.random() * houses.length);
        man.style.display = "none";
        houses[hidingHouse].setAttribute("data-hiding", "true");
        h1.innerHTML = "La nuit tombe... Le loup doit choisir une maison !";
    }
    function startNewRound() {
        round++;
        h1.innerHTML = "Round " + round + ": Cache l'homme dans une maison et passe à la nuit.";
        man.style.display = "block";
        randomizePositions([...houses]);
        hidingHouse = null;

        houses.forEach(house => {
            house.removeEventListener("click", wolfGuess);
        });

        button1.disabled = false;
    }

    // button1.addEventListener("click", function () {
    //     if (!hidingHouse) {
    //         hideMan();
    //         button1.disabled = true;

    //         houses.forEach(house => {
    //             house.addEventListener("click", wolfGuess);
    //         });
    //     }
    // });

    // Initialize game
    h1.innerHTML = "Round " + round + ": Cache l'homme dans une maison et passe à la nuit.";
    randomizePositions([...houses]);
});  
        // if (light){
        //     img.src = "./img/on.png";
        //     img.alt =  "Ampoule eteinte";
        // }
        // else if(!light){
        //     img.src = "./img/off.png";
        //     img.alt =  "Ampoule allumer";
        //     modifier()
        // }


