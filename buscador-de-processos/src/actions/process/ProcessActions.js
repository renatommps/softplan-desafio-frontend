import axios from 'axios';
import consts from '../../consts';

export const selectProcess = (process) => {
    return {
        type: "PROCESS_SELECTED",
        payload: process
    }
};

export function getProcessById(id) {
    let url = `${consts.API_URL}/processo/${id}`;

    return function (dispatch) { 
        axios.get(url)
        .then((response) => dispatch({
            type: 'PREOCESSES_FETCHED',
            payload: response.data
        }))
        .catch((response) => dispatch({
            type: 'PREOCESSES_FETCHED_ERROR',
            error: response.error
        }))
    }
}

export function getProcessBySearchTerm(searchTerm) {
    let url = `${consts.API_URL}/processo?q=${searchTerm}`;

    return function (dispatch) { 
        axios.get(url)
        .then((response) => dispatch({
            type: 'PREOCESSES_FETCHED',
            payload: response.data
        }))
        .catch((response) => dispatch({
            type: 'PREOCESSES_FETCHED_ERROR',
            error: response.error
        }))
    }
}

export function submitProcess(process) {
    let url = `${consts.API_URL}/processo`;
    let body = process;
    let headers =  {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    };
    return function (dispatch) { 
        axios.post(url, body, headers)
        .then((response) => dispatch({
            type: 'PROCESS_SUBMISSION_SUCESS',
            payload: response.data
        }))
        .catch((response) => dispatch({
            type: 'PROCESS_SUBMISSION_ERROR',
            error: response.error
        }))
    }
}

export function deleteProcessById(id) {
    let url = `${consts.API_URL}/processo/${id}`;

    return function (dispatch) { 
        axios.delete(url)
        .then((response) => dispatch({
            type: 'PREOCESSES_DELETED_SUCESS',
            payload: response.data
        }))
        .catch((response) => dispatch({
            type: 'PREOCESSES_DELETED_ERROR',
            error: response.error
        }))
    }
}
