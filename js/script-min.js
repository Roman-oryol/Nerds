var link=document.querySelector(".contacts-button"),popup=document.querySelector(".modal"),close=popup.querySelector(".modal-close"),form=popup.querySelector("form"),user_name=form.querySelector("[name=name]"),email=form.querySelector("[name=email]"),message=form.querySelector("[name=message]"),isStorageSupport=!0,storage_name="",storage_email="",slider=document.querySelector(".slider");try{storage_name=localStorage.getItem("user_name"),storage_email=localStorage.getItem("email")}catch(e){isStorageSupport=!1}if(link.addEventListener("click",function(e){e.preventDefault(),popup.classList.remove("hidden"),storage_name&&storage_email?(user_name.value=storage_name,email.value=storage_email,message.focus()):user_name.focus()}),close.addEventListener("click",function(e){e.preventDefault(),popup.classList.add("hidden"),popup.classList.remove("modal-error")}),form.addEventListener("submit",function(e){user_name.value&&email.value&&message.value?isStorageSupport&&(localStorage.setItem("user_name",user_name.value),localStorage.setItem("email",email.value)):(e.preventDefault(),popup.classList.remove("modal-error"),popup.offsetWidth=popup.offsetWidth,popup.classList.add("modal-error"))}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),popup.classList.add("hidden"),popup.classList.remove("modal-error"))}),slider){var slides=slider.querySelectorAll(".slider-item"),switch_list=slider.querySelector(".slider-controls"),switches=switch_list.querySelectorAll(".slide-switch");switch_list.classList.remove("hidden");for(var toggle_handler=function(t){switches[t].addEventListener("click",function(e){for(var s=0;s<switches.length;s++)switches[s]===e.currentTarget?(console.log(s,t),switches[s].classList.add("slide-switch-active"),slides[s].classList.remove("hidden")):(switches[s].classList.remove("slide-switch-active"),slides[s].classList.add("hidden"))})},i=0;i<switches.length;i++)toggle_handler(i)}