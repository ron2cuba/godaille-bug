const  detectPrice = ()=>{
    if(document.querySelector('input.radio')){
        
        document.querySelectorAll('input-radio').forEach((elem)=>{
            elem.addEventListener('change', (e)=>{
                let item = e.target.value;
                console.log(item);
            })
        })
        

    }

}

detectPrice();