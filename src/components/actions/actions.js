export function changeOpen(){
    return{
        type: 'nav/setOpen'
    }
}

export function fetchAction(data){
    return{
        type:'/fetcher/loaded',
        payload: data
    }
}
export function AddFetchConfiguration(data){
    return{
        type:'/fetcher/addConfig',
        payload: data
    }
}