// Após a instalação, vamos criar uma arquivo index.js e importar o Redux:
// const Redux = require('redux');

// Agora vamos criar uma pequena store e vamos acessá-la, retornando o estado que guardamos nela e criando uma action para alterá-lo.
// Primeiro vamos criar e retornar a nossa store :
// const store = Redux.createStore();

// Uma store só funciona se passarmos uma função que será responsável por alterar os dados dela: o reducer . O reducer recebe como primeiro parâmetro um state, sendo que seu retorno substituirá o state da store . Para fins didáticos, iremos montar o reducer no mesmo arquivo, mas a boa prática é fazer em um arquivo separado.
// const reducer = (state) => {
//   return state;
// };
  
// const store = Redux.createStore(reducer); 

// Inicialmente o state vem como undefined , e não queremos isto. Então iremos atribuir a ele um valor padrão.
// const reducer = (state = { login: false, email: "" }) => {
//   return state;
// };

// const store = Redux.createStore(reducer);

// Agora sim, nosso reducer está pronto! Mas o que acontece se nosso valor inicial (que podemos chamar de estado inicial) ficar muito grande? Nosso código vai ficar "bagunçado" né?! Então podemos reescrevê-lo.

// const ESTADO_INICIAL = {
//   login: false,
//   email: "",
// };
  
// const reducer = (state = ESTADO_INICIAL) => {
//   return state;
// };
  
// const store = Redux.createStore(reducer);

// final:
const fazerLogin = (email) => ({
  type: "LOGIN",
  email});

const ESTADO_INICIAL = {
  login: false,
  email: "",
};

const reducer = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        login: !state.login,
        email: action.email,
      };
    default: // No switch, sempre precisamos ter um caso default!
      return state;
  }
};

const store = Redux.createStore(reducer);

store.dispatch(fazerLogin("alguem@email.com"));

console.log(store.getState());

// { login: true, email: 'alguem@email.com' }