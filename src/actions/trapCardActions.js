import {
    GET_ALL_TRAP_CARDS,
    ADD_TRAP_CARD,
    DELETE_TRAP_CARD,
    EDIT_TRAP_CARD
} from "./types";
import {
    MAIN_PROXY_URL
} from "../config/config";
import axios from "axios";

export const getAllTrapCards = () => {
    return async (dispatch) => {
        try {
            const res = await axios.get(`${MAIN_PROXY_URL}/trap-cards`);
    
            const cards = res.data.data;
    
            return dispatch({
                type: GET_ALL_TRAP_CARDS,
                payload: {
                    cards
                }
            })
        } catch (error) {
            
        }
    }
}

export const addTrapCard = (newCard) => {
    return async (dispatch) => {
        try {
            const {name, categoryID, description, imageURL} = newCard;
            const res = await axios.post(`${MAIN_PROXY_URL}/trap-cards/add`, {name, categoryID, description, imageURL});
    
            const card = res.data.data;
    
            return dispatch({
                type: ADD_TRAP_CARD,
                payload: {
                    card
                }
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const editTrapCard = (cardID, updatedCard) => {
    return async (dispatch) => {
        try {
            const {name, categoryID, description, imageURL} = updatedCard;
            const res = await axios.put(`${MAIN_PROXY_URL}/trap-cards/edit/${cardID}`, {name, categoryID, description, imageURL});
    
            const card = res.data.data;
    
            return dispatch({
                type: EDIT_TRAP_CARD,
                payload: {
                    card
                }
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const deleteTrapCard = (cardID) => {
    return async (dispatch) => {
        try {
            const res = await axios.delete(`${MAIN_PROXY_URL}/trap-cards/delete/${cardID}`);
    
            const card = res.data.data;
    
            return dispatch({
                type: DELETE_TRAP_CARD,
                payload: {
                    card
                }
            })
        } catch (error) {
            console.log(error)
        }
    }
}