document.querySelector('#app').innerHTML = `
  <h1>MODE: ${import.meta.env.MODE}</h1>
  <h2>MESSAGE: ${import.meta.env.VITE_MESSAGE}</h2>
`;
