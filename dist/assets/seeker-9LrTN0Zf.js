import"./modulepreload-polyfill-9p4a8sJU.js";let n=document.querySelector(".container_center_box_img_hero"),i=document.querySelector(".box_cub_img_1"),l=document.querySelector(".box_cub_img_2"),s=document.querySelector(".title_one"),c=document.querySelector(".title_two"),_=document.querySelector(".text_one"),b=document.querySelector(".text_two"),t="girl",o=document.querySelector(".box_girl"),a=document.querySelector(".box_boy");o.addEventListener("click",m);a.addEventListener("click",m);const e={girl:{src:"./src/assets/player_interface/seeker/girl.gif",titleOne:"Battle Mage",textOne:"Battle Mage is a ranged combat class, capable of dealing damage with fire and ice magic. Uses nanoparticles to use abilities",titleTwo:"Bio",textTwo:"Anna appeared as a result of the mixing of two races from the planet Gulduar, where combat magic is practiced.",imgMana1:"./src/assets/player_interface/seeker/mana1.png",imgMana2:"./src/assets/player_interface/seeker/mana2.png"},boy:{src:"./src/assets/player_interface/seeker/boy.gif",titleOne:"Warrior",textOne:"Warriors are a type of seeker who use melee weapons as well as shields to hold off advances.",titleTwo:"Bio",textTwo:"Kaskad arrived from planet Earth, he is the ancestor of the first people who began to explore the vastness of space",imgMana1:"./src/assets/player_interface/seeker/mana3.png",imgMana2:"./src/assets/player_interface/seeker/mana4.png"}};function m(){if(this.innerText==="Warrior"){if(t==="boy")return;let r=o.querySelector(".container_left_box_elms_border");r.classList.contains("container_left_box_elms_border_active")&&r.classList.remove("container_left_box_elms_border_active"),a.querySelector(".container_left_box_elms_border").classList.add("container_left_box_elms_border_active"),n.src=e.boy.src,s.textContent=e.boy.titleOne,c.textContent=e.boy.titleTwo,_.textContent=e.boy.textOne,b.textContent=e.boy.textTwo,i.src=e.boy.imgMana1,l.src=e.boy.imgMana2,console.log("it is boy")}if(this.innerText==="Battle Mage"){if(t==="girl")return;let r=a.querySelector(".container_left_box_elms_border");r.classList.contains("container_left_box_elms_border_active")&&r.classList.remove("container_left_box_elms_border_active"),o.querySelector(".container_left_box_elms_border").classList.add("container_left_box_elms_border_active"),n.src=e.girl.src,s.textContent=e.girl.titleOne,c.textContent=e.girl.titleTwo,_.textContent=e.girl.textOne,b.textContent=e.girl.textTwo,i.src=e.girl.imgMana1,l.src=e.girl.imgMana2,console.log("it is girl")}if(t==="girl")return t="boy";if(t==="boy")return t="girl"}
