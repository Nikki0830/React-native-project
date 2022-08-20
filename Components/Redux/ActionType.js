import { FORM_DATA } from './Action'
// import * as actionTypes from './ActionTypes'

export const formdata = (payload) => {
    return {
        type: FORM_DATA,
        payload
    }
}