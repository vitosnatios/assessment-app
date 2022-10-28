import { useState, Fragment } from 'react';
import './Styles/App.css';
import Input from './Form/Input';
import Button from './Form/Button';
import Title from './Form/Title';
import Li from './Form/Li';
import Paragraph from './Form/Paragraph';
import { formStyle } from './Styles/Estilos';
import { perguntas } from './perguntas';
import Footer from './Form/Footer';

function App() {
  const [page, setPage] = useState('p1');
  const [choice, setChoice] = useState([]);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(0);
  const [resultColor, setResultColor] = useState([]);

  const respostas = perguntas.map((perg) => perg.resposta);
  const totalDePerguntas = perguntas.length;
  const ultimaQuestao = 'p' + totalDePerguntas;
  const resultPage = 'p' + (totalDePerguntas + 1);

  const pageForward = (index) => {
    setPage((prev) => {
      const pageArray = [...prev];

      if (choice[index]) {
        return pageArray[0] + ++pageArray[1];
      } else {
        setError('Por favor, selecione uma opção.');
        return prev;
      }
    });
  };

  const handleClick = (e, index) => {
    e.preventDefault();
    if (page === ultimaQuestao) {
      respostas.forEach((resposta, index) => {
        if (choice[index] === resposta) {
          setResult((prev) => ++prev);
          setResultColor((prev) => [...prev, 'green']);
        } else {
          setResultColor((prev) => [...prev, '#ed6e6e']);
        }
      });
      pageForward(index);
    } else {
      pageForward(index);
    }
  };

  const resetIt = () => {
    setPage('p1');
    setChoice([]);
    setResult(0);
    setResultColor([]);
  };

  return (
    <div className='App'>
      <form style={formStyle}>
        <Title style={{ fontSize: '2rem', margin: 0 }}>React.JS</Title>
        {perguntas.map(
          ({ pergunta, options, resposta, id }, index) =>
            page === id && (
              <Fragment key={index}>
                <Title>{index + 1 + '. ' + pergunta}</Title>
                {options.map((option, index2) => (
                  <Input
                    key={index2}
                    label={option}
                    id={option}
                    value={choice}
                    setState={setChoice}
                    resposta={resposta}
                    index={index}
                    onClick={() => setError(null)}
                    type='radio'
                  />
                ))}
                {error && <Paragraph color='#ed6e6e'>{error}</Paragraph>}
                <Button onClick={(e) => handleClick(e, index)}>
                  {page !== ultimaQuestao ? 'Próxima' : 'Ver resultado'}
                </Button>
              </Fragment>
            )
        )}
        {page === resultPage && (
          <>
            <Title>
              Você acertou: {result} de {totalDePerguntas}.
            </Title>
            <Paragraph>Suas respostas:</Paragraph>
            {choice.map((c, index) => (
              <Li key={index} color={resultColor[index]}>
                {c}
              </Li>
            ))}
            <Button onClick={resetIt}>Reiniciar</Button>
          </>
        )}
      </form>
      <Footer />
    </div>
  );
}

export default App;
