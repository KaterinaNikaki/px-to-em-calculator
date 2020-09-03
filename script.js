// em = required / parent 

displayResult = () => {
    var required = document.getElementById('required').value;
    var parent = document.getElementById('parent').value;
    var em = required / parent;

    // to protect against any empty fields resulting in errors
    if (!parent | !required) {
        alert('Please fill in all fields');
    } else {
        document.getElementById('result').innerHTML = em;
    }
}
var btnConvert = document.querySelector('button');
btnConvert.addEventListener('click', displayResult);