async function getRik(url) {
    let response = await fetch(url);
    let res = await response.json();
    return res
}
const tex = document.querySelector('.ia')
getRik("https://rickandmortyapi.com/api/character")
.then(res=>{

    console.log(res)
    res.results.forEach((result) => {
       console.log(result)
       if (result.type == "") {
        result.type = "No"
       }
     tex.innerHTML += `<div class="tex">
     <img src="${result.image}" alt="">
     <div class="box1">
         <div class="tex1">
             <p>${result.name}</p>
             <p>${result.species}</p>
             <p>${result.gender}</p>
             <p>${result.created}</p>
             <p>${result.type}</p>
         </div>
     </div>
 </div>`
    });
});




