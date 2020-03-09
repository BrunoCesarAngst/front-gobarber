// separando o valor inicial do estado dentro de uma variável
const INITIAL_STATE = {
  token: '123',
};

// reducer sempre é uma função
export default function auth(state = INITIAL_STATE, action) {
  // state recebe o valor inicial do estado
  switch (action.type) {
    // retorna o valor do state alterado conforme cada action
    default:
      return state;
  }
}
