//procurar um botão.
document.querySelector("#add-time")
  //quando clicar no botão 
  .addEventListener('click', cloneField);



//execultar uma ação.
function cloneField() {
  //duplicar os campos. que Campos?
  const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true); //boolean: true ou false

  //pegar os campos.que campos?
  const fields = newFieldContainer.querySelectorAll('input');

  //para cada campo,limpar.Executa a ação especificada para cada elemento em uma matriz.
  fields.forEach(function (field) {
    field.value = "";
  });

  //colocar na caixa. onde ?
  document.querySelector('#schedule-items').appendChild(newFieldContainer);
}



//colocar na caixa. onde ?