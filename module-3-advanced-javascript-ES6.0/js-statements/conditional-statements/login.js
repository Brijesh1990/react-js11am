function loginApp() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var user = document.getElementById('user').value;

  if (user == 'admin') {
    if (email == 'admin@gmail.com' && password == 'admin123') {
      window.location = 'dashboard.html';
    } else {
      Swal.fire({
        title: 'Error ?',
        text: 'Email & Password are Incorrect',
        icon: 'error',
      });
    }
  }

  if (user == 'user') {
    if (email == 'user@gmail.com' && password == 'user123') {
      window.location = 'dashboard.html';
    } else {
      Swal.fire({
        title: 'Error ?',
        text: 'Email & Password are Incorrect',
        icon: 'error',
      });
    }
  }

  if (user == 'guest') {
    if (email == 'guest@gmail.com' && password == 'guest123') {
      window.location = 'dashboard.html';
    } else {
      Swal.fire({
        title: 'Error ?',
        text: 'Email & Password are Incorrect',
        icon: 'error',
      });
    }
  }
}
