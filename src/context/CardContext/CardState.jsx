import React from 'react';
import axios from 'axios';
import { useReducer } from 'react';
import CardReducer from './CardReducer';
import CardContext from './CardContext';
import { GET_CARDINFO, GET_CARDSSPREAD } from '../types';

const CardState = ({children}) => {

    const initialState = {
        cards : [],
        selectedCard: null,
    };

    const getCardSpread = async () => {
        const res = await axios.get("https://tarot-api-3hv5.onrender.com/api/v1/");
        dispatch({
            type: GET_CARDSSPREAD,
            payload: res.data.cards,
        });
        console.log(res.data.cards);
        return res.data.cards
    };

    const getCardInfo = async (value) => {
       const res = await axios.get(`https://tarot-api-3hv5.onrender.com/api/v1/${value}`);
       dispatch({
        type: GET_CARDINFO,
        payload: res.data.cards
       })
    }

    const [ state, dispatch ] = useReducer(CardReducer, initialState)

  return (
    <>
    <CardContext.Provider value={{
        cards: state.cards,
        selectedCard: state.selectedCard,
        getCardSpread,
        getCardInfo,
    }} >
        {children}
    </CardContext.Provider>
    </>
  )
}

export default CardState