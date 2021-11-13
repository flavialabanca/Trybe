function estadosBrasileiros() {
  let estados = document.getElementById('input-estado');
  let siglasEstados = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

  for (let index = 0; index < siglasEstados.length; index += 1) {
    let siglas = document.createElement('option');
    estados.appendChild(siglas).innerText = siglasEstados[index];
    estados.appendChild(siglas).value = siglasEstados[index];
  }
}

estadosBrasileiros();