document.getElementById('account-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p>Compte généré avec succès !</p>
                           <p>Nom d'utilisateur : ${username}</p>
                           <p>Email : ${email}</p>
                           <p>Mot de passe : ${password}</p>`;
});
