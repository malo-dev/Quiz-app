const form =document.querySelector(".form-control")
const form_container =document.querySelector(".container-form")
const form_control_field=document.querySelector(".form-control-field")
const form_question =document.querySelector(".form-question")

const Submit=document.querySelector(".container-form input[type='submit']")
const btn_home=document.querySelector(".home")
const timer_id=document.getElementById("timer-id")
const timer=document.getElementById("timer")
const text_and_title =document.querySelector(".text-and-title")

let Name=form.name;
let Email=form.email;
let Name_tite=document.getElementById("name-title")
let Email_tite=document.getElementById("email-title")

let error_message;
let success_message;

const validateName= function(){

     error_message=Name.nextElementSibling;
     success_message=Name.nextElementSibling;

    if(Name.value !==""){
        if(Name.value.length<=3){
            Name.style.border="1px solid #FF3838"
            error_message.classList.add("container-form-error")  
            error_message=error_message.innerHTML="Vous devriez avoir un nom possédant au moins trois caractere."
            return false

        }else if(!(/^[A-Z]/.test(Name.value) )){ 
            Name.style.border="1px solid #FF3838"
            error_message.classList.add("container-form-error")  
            error_message=error_message.innerHTML="Votre nom doit commencer par une lettre majuscule"
            return false

        }if(/^[0-9]/.test(Name.value)){
            Name.style.border="1px solid #FF3838"
            error_message.classList.add("container-form-error")  
            error_message=error_message.innerHTML="Votre nom ne doit pas contenir un caractere numerique comme 1,2..."
            return false
            
        }else{
            Name.style.border="1px solid #028A3D"
            success_message.classList.add("container-form-success")
            success_message=error_message.innerHTML="Votre nom est valide"
            return true
        }
    }if(Name.value===""){
        Name.style.border="1px solid #FF3838"
        error_message.classList.add("container-form-error")
        error_message=error_message.innerHTML="N’oubliez pas de renseigner votre nom avant de commencer le Quiz."
        return false
         
    }else{
        Name.style.border="1px solid #028A3D"
        success_message.classList.add("container-form-success")
        success_message=error_message.innerHTML="Votre nom est valide"
        return true
    }
}

const ValidateEmail= function(){
    Emailtrim=Email.value.trim()
    error_message=Email.nextElementSibling;
    success_message=Email.nextElementSibling;
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (reg.test(Email.value.trim())){
        Email.style.border="1px solid #028A3D"
        success_message.classList.add("container-form-success")
        success_message=error_message.innerHTML="Votre email est valide"
        return true

    }else if(Email.value === ""){
        Email.style.border="1px solid #FF3838"
        error_message.classList.add("container-form-error")
        error_message=error_message.innerHTML="N’oubliez pas de renseigner votre email avant de commencer le Quiz."
        return false

    }else if(!(reg.test(Email.value.trim()))){
        Email.style.border="1px solid #FF3838"
        error_message.classList.add("container-form-error")
        error_message=error_message.innerHTML="Votre email n'est pas valide suite aux espaces vides"
        return false
        
    }else if(!(reg.test(Email.value))){
        Email.style.border="1px solid #FF3838"
        error_message.classList.add("container-form-error")
        error_message=error_message.innerHTML="Votre email n'est pas valide "
        return false
    }  
}

const timer_down_up =()=>{
    
    const departMinutes = 1;
    let temps = departMinutes * 60;

    const timerElement = document.getElementById("timer")

    setInterval(() => {
    let minutes = parseInt(temps / 60, 10)
    let secondes = parseInt(temps % 60, 10)

    minutes = minutes < 10 ? "6" + minutes : minutes
    secondes = secondes <=0 ? "6" + secondes : secondes
    timer.style.width="15px"   
    timer_id.innerText = `${secondes}`
    temps = temps <= 0 ? 0 : temps - 1
    
    }, 1000)
   
    return true
}







// if(timer_down_up()){
//     console.log('rrr')
// }
let timer2_down= () =>{
    
    timer_down_up()
    document.querySelector(".btn-flex-suivant input[type='Submit']:nth-child(2)").onclick=(e)=>{
        
        e.preventDefault()
        document.querySelector(".form2").style.display="flex"
    
        if(document.querySelector(".form2").style.display="flex"){
            timer_down_up()         
            document.querySelector(".form1").style.display="none"

              document.querySelector(".btn-following-two").onclick=(e)=>{
                e.preventDefault()            
                document.querySelector(".form3").style.display="flex"
                if(document.querySelector(".form3").style.display="flex"){ 
                    timer_down_up()
                    document.querySelector(".form2").style.display="none"
                }
            }
    
            document.querySelector(".btn-following-three").onclick=(e)=>{
                e.preventDefault()            
                document.querySelector(".form4").style.display="flex"
                if(document.querySelector(".form4").style.display="flex"){ 
                    window.onload=()=>{
                        timer_down_up() 
                    }
                    timer_down_up()
                    document.querySelector(".form3").style.display="none"
                }
            }

            document.querySelector(".btn-following-four").onclick=(e)=>{
                e.preventDefault()            
                document.querySelector(".form5").style.display="flex"
                if(document.querySelector(".form5").style.display="flex"){ 
                    timer_down_up()
                    document.querySelector(".form4").style.display="none"
                }
            }

            document.querySelector(".btn-following-five").onclick=(e)=>{

                e.preventDefault()            
                document.querySelector(".form6").style.display="flex"
                if(document.querySelector(".form6").style.display="flex"){ 
                    timer_down_up()
                    document.querySelector(".form5").style.display="none"
                }
            }


            document.querySelector(".btn-following-six").onclick=(e)=>{
                e.preventDefault()            
                document.querySelector(".form7").style.display="flex"
                if(document.querySelector(".form7").style.display="flex"){ 
                    timer_down_up()
                    document.querySelector(".form6").style.display="none"
                }
            }
            
            document.querySelector(".btn-following-seven").onclick=(e)=>{
                e.preventDefault()            
                document.querySelector(".form8").style.display="flex"
                if(document.querySelector(".form8").style.display="flex"){ 
                    timer_down_up()
                    document.querySelector(".form7").style.display="none"
                }
            }


            document.querySelector(".btn-following-eight").onclick=(e)=>{
                e.preventDefault()            
                document.querySelector(".form9").style.display="flex"
                if(document.querySelector(".form9").style.display="flex"){ 
                    timer_down_up()
                    document.querySelector(".form8").style.display="none"
                }
            }          

            document.querySelector(".btn-following-nine").onclick=(e)=>{
                e.preventDefault()            
                document.querySelector(".form10").style.display="flex"
                if(document.querySelector(".form10").style.display="flex"){ 
                    timer_down_up()
                    document.querySelector(".form9").style.display="none"
                }
            }  

            document.querySelector(".btn-following-ten").onclick=(e)=>{
                e.preventDefault()            
                document.querySelector(".form11").style.display="flex"
                if(document.querySelector(".form11").style.display="flex"){ 
                    timer_down_up()
                    document.querySelector(".form10").style.display="none"
                }
            }

            document.querySelector(".btn-following-eleven").onclick=(e)=>{
                e.preventDefault()            
                document.querySelector(".form12").style.display="flex"
                if(document.querySelector(".form12").style.display="flex"){ 
                    timer_down_up()
                    document.querySelector(".form11").style.display="none"
                }
            }

            document.querySelector(".btn-following-twelve").onclick=(e)=>{
                e.preventDefault()            
                document.querySelector(".form13").style.display="flex"
                if(document.querySelector(".form13").style.display="flex"){ 
                    timer_down_up()
                    document.querySelector(".form12").style.display="none"
                }
            }


            document.querySelector(".btn-following-thirteen").onclick=(e)=>{
                e.preventDefault()            
                document.querySelector(".form14").style.display="flex"
                if(document.querySelector(".form14").style.display="flex"){ 
                    document.querySelector(".form13").style.display="none"
                }
            }

            document.querySelector(".btn-following-fourteen").onclick=(e)=>{
                e.preventDefault()            
                document.querySelector(".form15").style.display="flex"
                if(document.querySelector(".form15").style.display="flex"){ 
                    timer_down_up()
                    document.querySelector(".form14").style.display="none"
                }
            }

            document.querySelector(".btn-following-fifteen").onclick=(e)=>{
                e.preventDefault()  
                document.querySelector(".form15").style.display="none"                     
                if(document.querySelector(".form15").style.display="none"){ 
                    timer_down_up()
                    document.querySelector(".success-failure-icon").style.display="flex"
                    // document.getElementById("container-box-firstcode").style.display="none"
                   
                }
            }
        }      
    }
}


const Result = () =>{

}

Name.addEventListener('change',()=>{
    validateName()
    Name_tite.innerHTML=Name.value
    
    })
Email.addEventListener('change',()=>{
    ValidateEmail()
    Email_tite.innerHTML=Email.value
    })
    Submit.addEventListener('click',(e)=>{
        e.preventDefault();
        if(validateName() || ValidateEmail()){
            form_control_field.style.display="none"
            text_and_title.style.display="none"
            form_question.style.display="flex"
            Submit.style.display="none"
        }
       })
btn_home.addEventListener("click",()=>{
  window.location.href="index.html"

}) 

//  Window.onload=()=>{

//  }
form_question.onmouseover=()=>{
    timer2_down()
    if(timer2_down){
        form_question.onmouseover=()=>{
            setInterval(()=>{
                document.querySelector(".form2").style.display="flex"
                if(document.querySelector(".form2").style.display="flex"){
                    document.querySelector(".form1").style.display="none"
                }
            },60000)
        } 
}
}
document.querySelector(".form2").onmouseover=()=>{
    if(document.querySelector(".form2").style.display="flex"){
        console.log(timer_down_up)
    }

}
