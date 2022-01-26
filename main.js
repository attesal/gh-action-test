const mode = import.meta.env.MODE;
const message = import.meta.env.VITE_MESSAGE;

document.querySelector('#app').innerHTML = `
  <h1>MODE: ${mode}</h1>
  <h2>MESSAGE: ${message}</h2>
`;
