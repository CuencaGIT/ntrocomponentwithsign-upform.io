let Form = document.getElementById('form');

Form.addEventListener('submit', function (e) {
  e.preventDefault();
  var fname = document.getElementById('Fname');
  var lname = document.getElementById('Lname');
  var eemail = document.getElementById('email');
  var pass = document.getElementById('password').value;
  var er1 = document.getElementById('error1');
  var er2 = document.getElementById('error2');
  var er3 = document.getElementById('error3');
  var er4 = document.getElementById('error4');
  if (fname.value == '' || fname.value == null) {
    document.getElementById('Fname').style.border = '1px solid red';
    document.getElementById('Fname').placeholder = '';
    er1.style.display = 'block';
    er2.style.display = 'block';
    er3.style.display = 'block';
    er4.style.display = 'block';
  } else {
    document.getElementById('Fname').style.border = '1px solid #5d54a3';
    er1.style.display = 'none';
    er2.style.display = 'none';
    er3.style.display = 'none';
    er4.style.display = 'none';
  }

  if (lname.value == '' || lname.value == null) {
    document.getElementById('Lname').style.border = '1px solid red';
    document.getElementById('Lname').placeholder = '';
    er1.style.display = 'block';
    er2.style.display = 'block';
    er3.style.display = 'block';
    er4.style.display = 'block';
  } else {
    document.getElementById('Lname').style.border = '1px solid #5d54a3';
    er1.style.display = 'none';
    er2.style.display = 'none';
    er3.style.display = 'none';
    er4.style.display = 'none';
  }
  if (eemail.value.match(eemail)) {
    document.getElementById('email').style.border = '1px solid #5d54a3';
    er1.style.display = 'none';
    er2.style.display = 'none';
    er3.style.display = 'none';
    er4.style.display = 'none';
  } else {
    document.getElementById('email').style.border = '1px solid red';
    document.getElementById('email').placeholder = 'email@example/com';

    er1.style.display = 'block';
    er2.style.display = 'block';
    er3.style.display = 'block';
    er4.style.display = 'block';
  }
  if (pass.length == '') {
    document.getElementById('password').style.border = '1px solid red';
    document.getElementById('password').placeholder = '';
  } else {
    document.getElementById('password').style.border = '1px solid #5d54a3';
    er1.style.display = 'none';
    er2.style.display = 'none';
    er3.style.display = 'none';
    er4.style.display = 'none';
  }
});
