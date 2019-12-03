/* eslint-disable arrow-body-style */
/* eslint-disable consistent-return */
/* eslint-disable prefer-promise-reject-errors */
const fs = require('fs');

// eslint-disable-next-line no-useless-escape
const regex = /\[(.+?)\]\((https?:\/\/[^\)]*)\)/gm;

const mdLinks = (path) => {
  return new Promise((resolve, reject) => {
    if (!path) {
      return reject('Caminho nao encontrado');
    }
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
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
