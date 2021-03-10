import axios from 'axios';
import {fetchAction, AddFetchConfiguration, AddSingleCategie, AddSingleModel} from '../actions/actions';


const initialState = {isDataLoaded: false, isConfigLoaded: false, setOpen: false}
const app_id =  process.env.REACT_APP_APP_ID || 1


function fetchUrl() {
    return ('https://api-test.innoloft.com//product/6781/');
  }
function fetchConfiguration(){
    return fetch(`https://api-test.innoloft.com/configuration/${app_id}/`)
}



export default function myFetcher(state = initialState, action){
    switch(action.type){
        case '/fetcher/loaded':{
            return  {...state, data:action.payload, isDataLoaded: true}
        }
        case '/fetcher/addConfig':{
            return   {...state, config: action.payload, isConfigLoaded: true }
        }
        case 'nav/setOpen':{
            return   {...state, setOpen: !state.setOpen }
        }
        case '/fetcher/addCateg':{
            return  {...state, data:{...state.data, categories: [...state.data.categories,{name: action.payload}]}}
        }
        case '/fetcher/addModel':{
            return  {...state, data:{...state.data, businessModels: [...state.data.businessModels,{name: action.payload}]}}
        }
        default: return {...state}
    }
}


export function fetchData(dispatch){
    fetch(fetchUrl())
 .then(response => response.json())
 .then( data=>dispatch(fetchAction(data)))
}

export function fetchConfig(dispatch){
    fetchConfiguration()
    .then(response=>response.json())
    .then(data=>dispatch(AddFetchConfiguration(data)))
}


export function addCategorie(text) {
    return (dispatch) => {
      return axios
        .put(fetchUrl(), text)
        .then((responseFromHell) => {
          dispatch(AddSingleCategie(responseFromHell.config.data));
        });
    };
  };

  export function addBusinessModel(text) {
    return (dispatch) => {
      return axios
        .put(fetchUrl(), text)
        .then((responseFromHell) => {
          dispatch(AddSingleModel(responseFromHell.config.data));
        });
    };
  };
