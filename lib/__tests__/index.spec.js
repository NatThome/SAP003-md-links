/* eslint-disable arrow-body-style */
// eslint-disable-next-line import/no-unresolved
const mdLinks = require('../index.js');

describe('mdLinks', () => {
  it('É uma function', () => {
    // eslint-disable-next-line no-unused-expressions
    expect(typeof mdLinks).toBe('function');
  });
});

it('A função deve trazer um objeto com um texto e um link', () => {
  return expect(mdLinks('./lib/__tests__/text.md'))
    // eslint-disable-next-line jest/valid-expect
    .resolves.toStrictEqual([
      {
        text: 'learnyounode',
        href: 'https://github.com/workshopper/learnyounode',
      },
      {
        text: 'how-to-npm',
        href: 'https://github.com/workshopper/how-to-npm',
      },
      {
        text: 'promise-it-wont-hurt',
        href: 'https://github.com/stevekane/promise-it-wont-hurt',
      }]);
});

it('Caminho nao encontrado', () => {
  // eslint-disable-next-line jest/valid-expect
  expect(mdLinks(''))
    .rejects.toEqual(
      'Caminho nao encontrado',
    );
});

it('Erro no arquivo', (done) => {
  mdLinks('.*/lib/__tests__/text.md')
    .catch((result) => {
      expect(result).toEqual('Erro no arquivo');
      done();
    });
});
