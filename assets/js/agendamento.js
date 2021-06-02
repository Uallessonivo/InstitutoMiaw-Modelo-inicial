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
      status.innerHTML = "Enviado! Aguarde nosso retorno!";
      alert('Cadastro Solicitado')
      form.reset();
    })
    .catch((error) => {
      status.innerHTML = "Oops! Erro durante a solicitação!";
      alert('Erro durante a solicitação, confira os campos!')
    });
}
form.addEventListener("submit", handleSubmit);


function myFunction() {
  var x = document.getElementById("myDIV");
  var form = document.querySelector(".myFORM");
  form.classList.add('myFORM2')

  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  
}
