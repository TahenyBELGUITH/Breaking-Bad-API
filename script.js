const api = "https://www.breakingbadapi.com/api/characters"

const header = document.querySelector('#header')
const content = document.querySelector('#content')

async function getData() {
 try{
  const response = await fetch (api)
 const data = await response.json()
 
 printData(data);
 }
 catch(e){
  console.log(e.message)
 }
}


function printData(data){
 header.innerHTML += `
 <select class="form-control" onchange ="getCharacter(this.value)">
    <option>Please select</option>
    ${data.map(character => `<option>${character.name}</option>`)}
 <select>`
}


async function getCharacter( name ){

 if(name != 'Please select')
 {
  // console.log(e)
   const response = await fetch( `${api}?name=${ name }`)
   const data = await response.json();

   content.innerHTML = ` 
   <h2>${data[0].name} (${data[0].nickname})</h2>
   <h4>${data[0].portrayed}</h4>
   <img src= "${data[0].img}" width ="250" loading= "lazy">
   `
 }

}


getData()