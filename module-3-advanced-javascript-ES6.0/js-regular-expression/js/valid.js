function validations() {
  if (document.frm.name.value == '') {
    alert('PLease enter your Name here');
    document.frm.name.focus();
    return false;
  }

  // applied regular expression for check only alphabetic character accept
  var nm = /^[A-Za-z]+$/;
  if (!nm.test(document.frm.name.value)) {
    alert('PLease enter name only alphabetic characters');
    document.frm.name.focus();
    return false;
  }

  if (document.frm.email.value == '') {
    alert('PLease enter your Email here');
    document.frm.email.focus();
    return false;
  }

  // check valid email address using regular expression
  var em = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!em.test(document.frm.email.value)) {
    alert('PLease enter your valid email address');
    document.frm.email.focus();
    return false;
  }

  if (document.frm.password.value == '') {
    alert('PLease enter your Password here');
    document.frm.password.focus();
    return false;
  }

  if (document.frm.phone.value == '') {
    alert('PLease enter your Phone here');
    document.frm.phone.focus();
    return false;
  }

  // create a RE for check a proper phone numbers
  var ph = /^\d{10}$/;
  if (!ph.test(document.frm.phone.value)) {
    alert('PLease enter phone numbers in digits only on 10 digits or numbers');
    document.frm.phone.focus();
    return false;
  }
}
