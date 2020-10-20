import axios from "axios";

import {
  GET_CHARACTERS,
  SELECT_CHARACTER,
  UNSELECT_CHARACTER,
  ADD_CHARACTER,
  GET_ERRORS,
  CLEAR_ERRORS,
  LOADING_CHARACTERS,
  CLEAR_SELECTION
} from "./types";

const url = "https://technology-fighters-z-api.herokuapp.com";

export const getCharacters = () => dispatch => {
  dispatch(setCharactersLoading());

  axios
    .get(url + "/api/characters")
    .then(res =>{
      console.log("pepe")
      console.log(res);
      dispatch({
        type: GET_CHARACTERS,
        payload: res.data
      })}
    )
    .catch((err) =>{
      console.log("pepe2")
      console.log(err);
      dispatch({
        type: GET_CHARACTERS,
        payload: err.response
      });}
    );
};

export const selectCharacter = characterId => dispatch => {
  dispatch({
    type: SELECT_CHARACTER,
    payload: characterId
  });
};

export const unselectCharacter = characterId => dispatch => {
  dispatch({
    type: UNSELECT_CHARACTER,
    payload: characterId
  });
};

export const addCharacter = character => dispatch => {
  dispatch(clearErrors());
  axios
    .post(url + "/api/characters", character)
    .then(res =>
      {
        console.log("pepe")
        console.log(res);
  
      dispatch({
        type: ADD_CHARACTER,
        payload: res.data
      })}
    )
    .catch(err =>{
      console.log("pepe2")
      console.log(err);

      dispatch({
        type: GET_ERRORS,
        payload: err.response
      })}
    );
};

// Set loading state
export const setCharactersLoading = () => {
  return {
    type: LOADING_CHARACTERS
  };
};

// Clear selection
export const clearSelection = () => {
  return {
    type: CLEAR_SELECTION
  };
};

// Clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};