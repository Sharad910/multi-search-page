const searchengine=document.querySelector('#searchEngine');
const input=document.querySelector('input');
const button=document.querySelector('button');
const Engicon=document.querySelector('#engineIcon');
let icon=document.querySelector('img');
let url= new URL('https://www.google.com/search');

input.addEventListener('input',function(e){
    if(input.value.toLowerCase().startsWith('youtube ')){
        searchengine.innerText='Search Youtube';
        url =new URL('https://www.youtube.com/results');
        url.searchParams.set('search_query',`${input.value.slice(8)}`);
        icon.setAttribute('src','./imgs/youtube.jpg');
    }
    else if(input.value.toLowerCase().startsWith('github ')){
        searchengine.innerText='Search Github';
        url =new URL('https://github.com/search');
        url.searchParams.set('q',`${input.value.slice(7)}`);
        icon.setAttribute('src','./imgs/github.jpg');
    }
    else if(input.value.toLowerCase().startsWith('docs ')){
        searchengine.innerText='Search Docs';
        url= new URL('https://www.google.com/search');
        url.searchParams.set('q',`${'site:docs.google.com '+`${input.value.slice(5)}`}`);
        icon.setAttribute('src','./imgs/docs.jpg');
    }
    else if(input.value.startsWith('slides ')){
        searchengine.innerText='Search Slides';
        url= new URL('https://www.google.com/search');
        url.searchParams.set('q',`${'site:docs.google.com/presentation '+`${input.value.slice(7)}`}`);
        icon.setAttribute('src','./imgs/slides.jpg');
    }
    else if(input.value.startsWith('sheets ')){
        searchengine.innerText='Search Sheets';
        url= new URL('https://www.google.com/search');
        url.searchParams.set('q',`${'site:docs.google.com/spreadsheets '+`${input.value.slice(7)}`}`);
        icon.setAttribute('src','./imgs/sheets.png');
    }
    else {
        searchengine.innerText='Search Google';
        url= new URL('https://www.google.com/search');
        url.searchParams.set('q',`${input.value}`);
        icon.setAttribute('src','./imgs/google.png');

    }
})

button.addEventListener('click',function(e){
    e.preventDefault();
    if(input.value===''){
        window.alert('Error! SearchBox is Empty')
    }
    else{
    window.open(url,'_self');
    }
})
