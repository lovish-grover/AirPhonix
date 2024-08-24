const scriptUrl = "https://script.google.com/macros/s/AKfycbzLmFnOdTZXjiyxnyIErXhqy52jEZUdbi-cuCKwc2VTnMpFpIuSRFwnfMR8MPJOglseJw/exec"
const form = document.forms['order-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptUrl , {method : 'POST' , body: new FormData(form)})
    .then(() => {window.location.reload()})
    .then(() => {window.location.assign("http://127.0.0.1:5500/index.html#");})
    .then(() => {alert("order done")})
    .catch(error => console.error('error', error.message))
})

