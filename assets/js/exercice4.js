function verifPassword(){
  var password = document.getElementById('password').value;
  var confirmPassword = document.getElementById('confirmPassword'). value;

  var regex = /^[a-zA-ZÀ-ÿ0-9._¨^*-]+$/

  if (regex.test(password) && regex.test(confirmPassword)) {
    if (password === confirmPassword) {
      document.getElementById('password').style.border='1px solid green';
      document.getElementById('confirmPassword').style.border='1px solid green';
    }else {
      document.getElementById('password').style.border='1px solid red';
      document.getElementById('confirmPassword').style.border='1px solid red';
    }

  }else {
    alert('Veuillez entrer un mot de passe valide')
  }
}
