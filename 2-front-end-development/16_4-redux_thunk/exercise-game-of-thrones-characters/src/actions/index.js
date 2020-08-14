import charAPI from "../services/charAPI";


export const REQUEST_INFOS = 'REQUEST_INFOS';
export const RECEIVE_INFOS = 'RECEIVE_INFOS';
export const FAILED_REQUEST = 'FAILED_REQUEST';

export const requestInfos = () => ({ type: REQUEST_INFOS });

export const receiveInfos = (infos) => ({
  type: RECEIVE_INFOS,
  infos,
});

export const failedRequest = (error) => ({
  type: FAILED_REQUEST,
  error 
})

export const fetchInfos = (char) => {
  return (dispatch) => {
    dispatch(requestInfos());
    // console.log('requeting');
    return (
      charAPI(char)
      .then(response => {
        // console.log(receiveInfos(response))
        dispatch(receiveInfos(response))})
      .catch(error => failedRequest(error))
      );
  }
}
