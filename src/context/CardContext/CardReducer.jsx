// Dentro de este componente vamos a colocar las funciones que vamos a llamar desde el estado.

import React from 'react';
import { GET_CARDINFO, GET_CARDSSPREAD } from '../types';

export default (state, action) => {
    const { payload, type } = action;

    switch(type) {
        case GET_CARDSSPREAD:
            return {
                ...state,
                cards: payload
            }
        case GET_CARDINFO:
            return {
                ...state,
                selectedCard: payload
            }
        default:
            return state
    }
};