import {GET_IDS_FAILURE, GET_IDS_STARTED, GET_IDS_SUCCESS} from "../types/types";

export const getIdsStarted = () => ({
    type: GET_IDS_STARTED
})

export const getIdsSuccess = (result) => ({
    type: GET_IDS_SUCCESS,
    payload: result
})

export const getIdsFailure = (error) => ({
    type: GET_IDS_FAILURE,
    payload: error
})
