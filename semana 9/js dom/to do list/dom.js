

const btn = document.createElement('button');
btn.className = 'btn btn-primary';
btn.textContent = 'click';


document.body.appendChild(btn)

const body = document.body;



btn.addEventListener('click' , ()=>{

    body.classList.toggle('bg-primary')

    btn.classList.toggle('btn-primary')
    btn.classList.toggle('btn-secondary')
    

})