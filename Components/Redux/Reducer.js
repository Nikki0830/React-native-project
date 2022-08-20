import React from "react";
import { connect } from "react-redux";
import { FORM_DATA } from "./Action";
// import * as actionCreators from "./Actions";

const initialState = {
  userDetails: [

  ]
};

 export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FORM_DATA:
      console.log(state.userDetails)
      return {  
        ...state,userDetails:[...state.userDetails,action.payload]
      };
    default:
      return state
  }
};