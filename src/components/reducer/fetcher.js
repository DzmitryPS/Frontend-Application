import axios from 'axios';
const initialState = {isLoaded: false}
const app_id =  process.env.REACT_APP_APP_ID || 1



function fetchUrl() {
    return fetch('https://api-test.innoloft.com//product/6781/');
  }
function fetchConfiguration(){
    return fetch(`https://api-test.innoloft.com/configuration/${app_id}/`)
}

export function fetchAction(data){
    return{
        type:'/fetcher/loaded',
        payload: data
    }
}
function AddFetchConfiguration(data){
    return{
        type:'/fetcher/addConfig',
        payload: data
    }
}


export default function myFetcher(state = initialState, action){
    switch(action.type){
        case '/fetcher/loaded':{
            return  {...state, data:action.payload, isLoaded: true}
        }
        case '/fetcher/addConfig':{
            return   {...state, config: action.payload }
        }
        default: return {...state}
    }
}


export function  fetchData(dispatch){
 const response =  fetchUrl()
 .then(response => response.json())
 .then( data=>dispatch(fetchAction(data)))
}

export function fetchConfig(dispatch){
    const response = fetchConfiguration()
    .then(response=>response.json())
    .then(data=>dispatch(AddFetchConfiguration(data)))
}

// export function handleCategoriesForm(text){
//     return function sendToCategories(dispatch){
//       const newCategorie = {text}
//      const response = fetch('https://api-test.innoloft.com//product/6781/',{
//         method: 'PUT',
//         body: newCategorie 
//      })
//      .then(response=>response.json())
//      .then(data=>dispatch( addCategorie(data)))
//     }
//   }

// export const handleCategoriesForm =(text) =>{
// return dispatch=>{
// axios.put('https://api-test.innoloft.com//product/6781/',{text})
// .then(res=>console.log(res.data))
// }
// }


// try {
//     const response = await fetch(url, {
//       method: 'POST', // или 'PUT'
//       body: JSON.stringify(data), // данные могут быть 'строкой' или {объектом}!
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });
//     const json = await response.json();
//     console.log('Успех:', JSON.stringify(json));
//   } catch (error) {
//     console.error('Ошибка:', error);
//   }

// try {
//     const response = await fetch('https://example.com/profile/avatar', {
//       method: 'PUT',
//       body: formData
//     });
//     const result = await response.json();
//     console.log('Успех:', JSON.stringify(result));
//   } catch (error) {
//     console.error('Ошибка:', error);
//   }