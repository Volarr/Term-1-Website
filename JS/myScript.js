var el  = document.getElementById('edit');
var inp = document.getElementById('inp');
el.addEventListener('click', function(){
    inp.disabled = false;
    inp.focus(); // set the focus on the editable field
});
// http://stackoverflow.com/questions/18386495/make-form-fields-editable-on-button-click
