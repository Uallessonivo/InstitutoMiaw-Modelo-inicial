var form = document.getElementById("my-form-contact");
    
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status-contact");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    status.innerHTML = "Obrigado pelo contato!";
    form.reset()
  }).catch(error => {
    status.innerHTML = "Oops! Algum erro durante o envio do contato!"
  });
}
form.addEventListener("submit", handleSubmit)




var form = document.getElementById("my-form");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      status.innerHTML = "Em breve retornaremos confirmando o agendamento!";
      form.reset();
    })
    .catch((error) => {
      status.innerHTML = "Oops! Captamos algum erro durante a solicitação!";
    });
}
form.addEventListener("submit", handleSubmit);


