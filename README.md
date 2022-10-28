# Aplicativo de testes/avaliações

## Live adress: https://react-assessment-vitosdeveloper.netlify.app/

## Como coloco minhas perguntas, opções e respostas?

Edite o arquivo chamado `perguntas.js`. \
Nele, você pode adicionar e editar perguntas, opções e respostas no formato de objeto js. \

```js
export const perguntas = [
  {
    pergunta: 'Qual método é utilizado para criar componentes?',
    options: [
      'React.makeComponent()',
      'React.createComponent()',
      'React.createElement()',
    ],
    resposta: 'React.createElement()',
    id: 'p1',
  },
  {
    pergunta: 'Como importamos um componente externo?',
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: 'p2',
  },
];
```

id: Número da página da pergunta. \
 pergunta: Autoexplicativo. \
 options: Array com as opções de resposta para cada pergunta. \
 resposta: Resposta a checada como correta. \
 Você pode colocar o número de perguntas que quiser, o aplicativo incrementa páginas automaticamente, \
 e claro, você também pode entregar esses dados usando um backend.
