const  paragraphe_question=document.querySelectorAll(".paragraphe-question")
const cote=document.getElementById("cote")
const input_field = document.querySelectorAll('input[name="contact"]');
const label_field = document.querySelectorAll('label');
const timer_id=document.getElementById("timer-id")
const timer=document.getElementById("timer")
const Submit=document.querySelector(".container-form input[type='submit']")
const Submit_button_following=document.querySelector(".btn-flex-suivant input:nth-child(2)")
const Submit_button_leaving=document.querySelector(".btn-flex-suivant input:nth-child(2)")
const btn_home=document.querySelector(".home")
const form =document.querySelector(".form-control")
const form_container =document.querySelector(".container-form")
const form_control_field=document.querySelector(".form-control-field")
const form_question =document.querySelector(".form-question")
const text_and_title =document.querySelector(".text-and-title")
const valeur1 = document.querySelectorAll('input[name="contact"]');

let Name=form.name;
let Email=form.email;
let Name_tite=document.getElementById("name-title")
let Email_tite=document.getElementById("email-title")

let sum
let error_message;
let success_message;
let Form_value;
const timer_bar_progression = () =>{
    timer.style.width="10px"
    if( timer.style.width="10px"){
        setInterval(()=>{
            timer.classList.add(".timer2")
            timer.style.width="10px"
        })
    }
    
}

const second_question_form=()=>{
    timer_bar_progression()
    timer_down_up()
    paragraphe_question[1].innerHTML="Question 2/15";
    paragraphe_question[0].innerHTML="Quelle est la fonction la mieux déclarée";
    label_field[2].innerHTML="trim())";
    label_field[3].innerHTML="trim(()))";
    label_field[4].innerHTML="trim()))";
    setInterval(third_question_form,60000) 

}
const third_question_form=()=>{
    timer_bar_progression()
    timer.style.display="block"
    paragraphe_question[1].innerHTML="Question 3/15";
    paragraphe_question[0].innerHTML="Que signifie jsx";
    label_field[2].innerHTML="javascript xml";
    label_field[3].innerHTML="javascript xtensible";
    label_field[4].innerHTML="javascript subject xtensible";
    setInterval(fourth_question_form,60000)

}
const fourth_question_form=()=>{
    timer_down_up()
    paragraphe_question[1].innerHTML="Question 4/15";
    paragraphe_question[0].innerHTML="Quelle est l'objet le mieux déclaré";
    label_field[2].innerHTML="location";
    label_field[3].innerHTML="window()";
    label_field[4].innerHTML="document";
    setInterval(fiefth_question_form,60000)
}

const fiefth_question_form=()=>{
    timer_down_up()
    paragraphe_question[1].innerHTML="Question 5/15";
    paragraphe_question[0].innerHTML="Quelle est la meilleure synthaxe";
    label_field[2].innerHTML="trim()).location";
    label_field[3].innerHTML="trim((location())))";
    label_field[4].innerHTML="location.trim()))";
    setInterval(sixth_question_form,60000)
}

const sixth_question_form=()=>{
    timer_down_up()
    paragraphe_question[1].innerHTML="Question 6/15";
    paragraphe_question[0].innerHTML="Quelle est la methode javascript qui suprimer les élements d'un tableau au debut";
    label_field[2].innerHTML="trim()";
    label_field[3].innerHTML="pop()";
    label_field[4].innerHTML="shift";
    setInterval(seventh_question_form,60000)

}
const seventh_question_form=()=>{
    timer_down_up()
    paragraphe_question[1].innerHTML="Question 7/15";
    paragraphe_question[0].innerHTML="Quelle est l'unique moyen de devlare une balise script";
    label_field[2].innerHTML="head";
    label_field[3].innerHTML="body";
    label_field[4].innerHTML="footer";
    setInterval(eightth_question_form,60000)

}
const eightth_question_form=()=>{
    timer_down_up()
    paragraphe_question[1].innerHTML="Question 8/15";
    paragraphe_question[0].innerHTML="En quelle année js est entrer sur le marcher";
    label_field[2].innerHTML="1999";
    label_field[3].innerHTML="1995";
    label_field[4].innerHTML="1990";
    setInterval(nineth_question_form,60000)

}

const nineth_question_form=()=>{
    timer_down_up()
    paragraphe_question[1].innerHTML="Question 9/15";
    paragraphe_question[0].innerHTML="Quelle est la methode js ";
    label_field[2].innerHTML="trim())";
    label_field[3].innerHTML="length";
    label_field[4].innerHTML="map()";
    setInterval(tenth_question_form,60000)

}
const tenth_question_form=()=>{
    timer_down_up()
    paragraphe_question[1].innerHTML="Question 10/15";
    paragraphe_question[0].innerHTML="Quelle est la propriété js ";
    label_field[2].innerHTML="pop";
    label_field[3].innerHTML="prop";
    label_field[4].innerHTML="concat";
    setInterval(eleventh_question_form,60000)
}
const eleventh_question_form=()=>{
    timer_down_up()
    paragraphe_question[1].innerHTML="Question 11/15";
    paragraphe_question[0].innerHTML="Quelle est la fonction la mieux déclarée";
    label_field[2].innerHTML="trim()()";
    label_field[3].innerHTML="pop(()))";
    label_field[4].innerHTML="push((()))";
    setInterval(twelventh_question_form,60000)

}
const twelventh_question_form=()=>{
    timer_down_up()
    paragraphe_question[1].innerHTML="Question 12/15";
    paragraphe_question[0].innerHTML="Quelle est la methode la mieux déclarée";
    label_field[2].innerHTML="math.number.prototype";
    label_field[3].innerHTML="string.split('')";
    label_field[4].innerHTML="string.length";
    setInterval(thirteeth_question_form,60000)
}

const thirteeth_question_form=()=>{
    timer_down_up()
    paragraphe_question[1].innerHTML="Question 13/15";
    paragraphe_question[0].innerHTML="Quelle est l'objet js";
    label_field[2].innerHTML="xhtpps";
    label_field[3].innerHTML="open()";
    label_field[4].innerHTML="New malo()";
    setInterval(fourteeth_question_form,60000)

}
const fourteeth_question_form=()=>{
    timer_down_up()
    paragraphe_question[1].innerHTML="Question 14/15";
    paragraphe_question[0].innerHTML="js est un langage informatique utilise sur les objets";
    label_field[2].innerHTML="Vrai";
    label_field[3].innerHTML="Faux";
    label_field[4].innerHTML="Aucune bonne réponse";
    setInterval(fiefteeth_question_form,60000)

}

const fiefteeth_question_form=()=>{
    timer_down_up()
    paragraphe_question[1].innerHTML="Question 15/15";
    paragraphe_question[0].innerHTML="javscript est un langage poo";
    label_field[2].innerHTML="Vrai";
    label_field[3].innerHTML="Faux";
    label_field[4].innerHTML="Aucune bonne réponse";
    setInterval(result,60000)
}

const result=()=>{
    form.style.display="none"
    document.querySelector(".success-failure-icon").style.display="flex"

}

Submit_button_following.onclick=(e)=>{
    e.preventDefault()
     second_question_form()
}



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
    
    const startminutes = 1;
    let temps = startminutes * 60;

    const timerElement = document.getElementById("timer")

     setInterval(() => {
    let minutes = parseInt(temps / 60, 10)
    let secondes = parseInt(temps % 60, 10)

    minutes = minutes < 10 ? "6" + minutes : minutes
    secondes = secondes <=0 ? "6" + secondes : secondes
      
    timer_id.innerText = `${secondes}`
    temps = temps <= 0 ? 0 : temps - 1
   
     }, 1000)
   

}
const second_form=()=>{

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

form_question.onmouseover=()=>{}