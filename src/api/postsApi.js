import 'whatwg-fetch';

export function getPosts(){
   return get('https://blogappv2.herokuapp.com/posts');
}

function get(url){
   return fetch(url).then(onSuccess, onError);
}

function onSuccess(response){
   return response.json();
}

function onError(e){
   console.log(e); //eslint-disable-line no-console
}
