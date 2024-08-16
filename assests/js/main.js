// for toggle
var nav_menu=document.getElementById('nav_menu'),
nav_toggle=document.getElementById('nav_toggle'),
nav_close=document.getElementById('nav_close')


if(nav_toggle){
    nav_toggle.addEventListener('click',()=>{
        nav_menu.classList.add('show_menu')
    })
}

if(nav_close){
    nav_close.addEventListener('click',()=>{
        nav_menu.classList.remove('show_menu')
    })
}


// when we click each nav link we need to remove the show_menu
 var all_nav_link=document.querySelectorAll('.nav_link')
 function linkAction(){
    var nav_menu=document.getElementById('nav_menu')
    nav_menu.classList.remove('show_menu')

 }

 all_nav_link.forEach((n)=>{
    n.addEventListener('click',linkAction)
 })

// about js for tabs btns

var tabs=document.querySelectorAll('[data-target]'),
tabsContent=document.querySelectorAll('[data-content]')

tabs.forEach((tab)=>{
    tab.addEventListener('click',()=>{
        var target=document.querySelector(tab.dataset.target)
        console.log(target)
        tabsContent.forEach((tabsCont)=>{
            tabsCont.classList.remove('tab__active')
        })
        target.classList.add('tab__active')


        tabs.forEach((tab)=>{
            tab.classList.remove('tab__active')
        })

        tab.classList.add('tab__active')
        
    })
   
})

var contactForm=document.getElementById('contact_form'),
contactName=document.getElementById('contact_name'),
contactEmail=document.getElementById('contact_email'),
contactSubject=document.getElementById('contact_subject'),
contactMessage=document.getElementById('contact_message'),
errorMessage=document.getElementById('error_message')

var sendEmail=(e)=>{
    e.preventDefault()
    if(contactName.value==='' || contactEmail.value==='' || contactSubject.value==='' ||
        contactMessage.value===''){
            errorMessage.textContent='Fill all the inputs'
        }
    else{
        emailjs.sendForm('service_2zz3l03','template_r1tdgd2','#contact_form','t7tDs1r9m4DtCJ-Ej').then(
            ()=>{
                errorMessage.classList.add('color-first');
                errorMessage.textContent='Message sent '
                setTimeout(()=>{
                    errorMessage.textContent=''
                },5000)
                contactForm.reset()
            },(error)=>{
                alert('oops! something went wrong...',error)
            }

        )
        contactName.value=''
        contactEmail.value=''
        contactSubject.value=''
        contactMessage.value=''
    }
}

contactForm.addEventListener('submit',sendEmail)


// change background of header

function scrollHeader(){
    const header=document.getElementById('header')
    if(this.scrollY>=47)header.classList.add('scroll_header')
    else header.classList.remove('scroll_header')
}
window.addEventListener('scroll',scrollHeader)


