import React from 'react';
import { useContext, useEffect } from 'react';
import CardContext from '../context/CardContext/CardContext';

const CardSpread = () => {

  const { cards, selectedCard, getCardSpread, getCardInfo } = useContext(CardContext);

  useEffect( () => {
    getCardSpread()
    console.log(cards);
  }, []);

  return (
    <>
    <div>
      <p className='lead'>
      Dentro de este componente vamos a meter la tirada con las tres cartas.
      </p>
      <div>
        { cards.map(card => {
          return(
            <div className='card p-2 mt-2'>
              <h4>{card.name}</h4>
              <p>{card.meaning_up}</p>
              {/* <p>{card.desc}</p> */}
            </div>
          )
        })}
      </div>
    </div>
    </>
  )
}

export default CardSpread