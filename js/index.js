
let searchInput = document.querySelector('.search2 input');
let allTask = document.querySelectorAll('.tableContainer td');

searchInput.addEventListener('keyup', (e)=>{
    let lowerInput = String(searchInput.value).toLocaleLowerCase();
    
    allTask.forEach(td => {
        let lowerTask = String(td.firstElementChild.textContent).toLocaleLowerCase();
        if(lowerTask.includes(lowerInput)){
            td.style.display = 'flex';
        } else{
            td.style.display = 'none';
        }
    })
    console.log(searchInput.value)
})
// let searchInput = document.querySelector('.search2 input');
// let allTask = document.querySelectorAll('.tableContainer td');

// searchInput.addEventListener('keyup', (e)=>{
//     let lowerInput = String(searchInput).toLocaleLowerCase();

//     allTask.forEach(td => {
//         let lowerTask = String(td.textContent).toLocaleLowerCase();
//         if(td.textContent.includes('Emeto')){
//             console.log(td)
//         } 
//     })
//     console.log(searchInput.value)
// })

// console.log(searchInput, allTask);
// console.log(allTask.textContent);



// let searchInput = document.querySelector('.search2 input');
// let allTask = document.querySelectorAll('.tableContainer td');

// searchInput.addEventListener('keyup', (e)=>{
//     let lowerInput = String(searchInput.value).toLocaleLowerCase();
    
//     allTask.forEach(td => {
//         let lowerTask = String(td.querySelector('div p:first-child').textContent).toLocaleLowerCase();
//         if(lowerTask.includes(lowerInput)){
//             console.log(td);
//         } else{
//             // console.log('Not found');
//         }
//     })
//     console.log(searchInput.value)
// })