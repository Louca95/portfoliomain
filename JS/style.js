// Initialiser EmailJS avec votre User ID
(function () {
  emailjs.init({publicKey:"ORxMbFSOHpY7YCOJi"}); // Remplacez par votre User ID
})();

document.getElementById("contactForm").addEventListener("submit", function (e) {
	e.preventDefault(); // Empêche le formulaire de recharger la page

	// Récupère les données du formulaire
	const name = document.getElementById("name").value;
  	const prenom = document.getElementById("prenom").value;
	const email = document.getElementById("email").value;
  	const telephone = document.getElementById("telephone").value;
  	const objet = document.getElementById("objet").value;
	const commentaire = document.getElementById("commentaire").value;

	// Préparer les paramètres pour EmailJS
	// On récupère les valeurs des input dans un objet
	// Adaptez à vos propres champs de texte
	const templateParams = {
		name: name,
    prenom: prenom,
		email: email,
    telephone: telephone,
    objet: objet,
		commentaire: commentaire,
	};

	// Envoyer l'email via EmailJS
	emailjs.send("service_uzax4jp", "template_6jqr2f9", templateParams).then(
		function (response) {
			alert("Message envoyé avec succès !");
		},
		function (error) {
			alert("Erreur lors de l'envoi du message : " + error.text);
		},
	);

	// Réinitialise le formulaire après l'envoi
	document.getElementById("contactForm").reset();
});
const carouselSlide = document.querySelector('.carousel-slide');
const projects = document.querySelectorAll('.project');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let counter = 0;

nextBtn.addEventListener('click', () => {
    counter = (counter + 1) % projects.length;
    carouselSlide.style.transform = 'translateX(' + (-counter * 100) + '%)';
});

prevBtn.addEventListener('click', () => {
    counter = (counter - 1 + projects.length) % projects.length;
    carouselSlide.style.transform = 'translateX(' + (-counter * 100) + '%)';
});




const toggleButton = document.getElementById('navbar-toggle');
const menu = document.getElementById('navbar-menu');

// Ajoute un événement pour afficher/masquer le menu
toggleButton.addEventListener('click', () => {
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
});

document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('navbar-toggle');
    const menu = document.getElementById('navbar-menu');

    toggleButton.addEventListener('click', function () {
        menu.classList.toggle('active');
    });
});



