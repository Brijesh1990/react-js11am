function validations() {
  if (document.frm.name.value == '') {
    alert('PLease eneter your Name here');
    document.frm.name.focus();
    return false;
  }

  if (document.frm.email.value == '') {
    alert('PLease enter your Email here');
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
}
