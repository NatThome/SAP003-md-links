const fs = require('fs');
// eslint-disable-next-line no-useless-escape
const regex = /\[(.+?)\]\((https?:\/\/[^\)]*)\)/gm;

// eslint-disable-next-line arrow-body-style
const mdLinks = (path) => {
  // eslint-disable-next-line consistent-return
  return new Promise((resolve, reject) => {
    if (!path) {
      // eslint-disable-next-line prefer-promise-reject-errors
      return reject('Caminho nao encontrado');
    }
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        // eslint-disable-next-line prefer-promise-reject-errors
        return reject('Erro no arquivo');
      }
      const links = data.match(regex)
        .map((item) => {
          const splited = item.split('](');
          return {
            text: splited[0].slice(1),
            href: splited[1].slice(0, -1),
          };
        });
      resolve(links);
    });
  });
};

module.exports = mdLinks;

// function mdLinks() {
//   return new Promise((resolve, reject) => {
//     const soma = 2 + 6;
//     const lerOarquivo = 'blablaa';
//     const resultado = [{ href: 'www.blabla.com', text: 'texto' }];
//     // if ('deuErro') {
//     //   // eslint-disable-next-line prefer-promise-reject-errors
//     //   reject('DEU RUIM');
//     // }
//     resolve(resultado);
//   });
// }

// module.exports = mdLinks;
