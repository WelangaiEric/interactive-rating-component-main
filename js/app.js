const optBtns=document.querySelectorAll(".option")
const rateShow = document.querySelector('.rateLevel')
const complete = document.querySelector('.result')
const rateCard = document.querySelector('.rateCard')
optBtns.forEach(option =>
     option.addEventListener("mouseout", () => option.classList.toggle("move"))
)


optBtns.forEach(option =>
    option.addEventListener('click', function(e){
        const rate=option.textContent
        var rateLevel

        switch (rate) {
            
            case '1':
                rateLevel ="You selected "+ rate+ " out of 5"  
                
                break;
            case '2':
                rateLevel ="You selected "+ rate+ " out of 5"  
                
                break;
            case '3':
                rateLevel ="You selected "+ rate+ " out of 5"  
            
                break;
            case '4':
                rateLevel ="You selected "+ rate+ " out of 5"  
            
                break;
            case '5':
                rateLevel ="You selected "+ rate+ " out of 5"  
                // console.log(rateLevel)
            
                break;
            

            default:
                rateLevel='You have not made a selection'

                break;
        }
        
        
        
    const subBtn=document.querySelector('.submitBtn')
    subBtn.addEventListener('click',function(e){
        e.preventDefault();
        
        rateShow.textContent =rateLevel
        complete.style.display='flex'
        rateCard.style.display='none'
        
    
    
    })


    })
)