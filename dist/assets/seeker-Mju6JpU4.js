import"./modulepreload-polyfill-9p4a8sJU.js";let o=document.querySelector(".container_center_box_img_hero"),a=document.querySelector(".box_cub_img_1"),i=document.querySelector(".box_cub_img_2"),c=document.querySelector(".title_one"),l=document.querySelector(".title_two"),s=document.querySelector(".text_one"),_=document.querySelector(".text_two"),b=document.querySelector(".cub_text_1"),m=document.querySelector(".cub_text_2"),r="girl",n=document.querySelector(".box_girl"),x=document.querySelector(".box_boy");n.addEventListener("click",g);const e={girl:{src:"./src/assets/player_interface/seeker/girl.gif",titleOne:"Battle Mage",textOne:"Battle Mage is a ranged combat class, capable of dealing damage with fire and ice magic. Needs nanoparticles to use abilities",titleTwo:"Bio",textTwo:"Anna appeared as a result of the concord of two elementals from the planet Gulduar, where combat magic is practiced",imgMana1:"./src/assets/player_interface/seeker/mana1.png",imgMana2:"./src/assets/player_interface/seeker/mana2.png",cub_text_1:"Ice",cub_text_2:"Fiery"},boy:{src:"./src/assets/player_interface/seeker/boy.gif",titleOne:"Warrior",textOne:"Warrior is a type of seeker who uses melee weapons as well as shields to hold off enemy advances",titleTwo:"Bio",textTwo:"Kaskad arrived from the planet Earth, he is the ancestor of the first people who began to explore the vastness of space",imgMana1:"./src/assets/player_interface/seeker/mana3.png",imgMana2:"./src/assets/player_interface/seeker/mana4.png",cub_text_1:"Warrior",cub_text_2:"Defender"}};function g(){if(this.innerText==="Warrior"){if(r==="boy")return;let t=n.querySelector(".container_left_box_elms_border");t.classList.contains("container_left_box_elms_border_active")&&t.classList.remove("container_left_box_elms_border_active"),x.querySelector(".container_left_box_elms_border").classList.add("container_left_box_elms_border_active"),o.src=e.boy.src,o.classList.add("container_center_box_img_hero_boy"),o.classList.remove("container_center_box_img_hero"),c.textContent=e.boy.titleOne,l.textContent=e.boy.titleTwo,s.textContent=e.boy.textOne,_.textContent=e.boy.textTwo,b.textContent=e.boy.cub_text_1,m.textContent=e.boy.cub_text_2,a.src=e.boy.imgMana1,i.src=e.boy.imgMana2,console.log("it is boy")}if(this.innerText==="Battle Mage"){if(r==="girl")return;let t=x.querySelector(".container_left_box_elms_border");t.classList.contains("container_left_box_elms_border_active")&&t.classList.remove("container_left_box_elms_border_active"),n.querySelector(".container_left_box_elms_border").classList.add("container_left_box_elms_border_active"),o.src=e.girl.src,o.classList.add("container_center_box_img_hero"),o.classList.remove("container_center_box_img_hero_boy"),c.textContent=e.girl.titleOne,l.textContent=e.girl.titleTwo,s.textContent=e.girl.textOne,_.textContent=e.girl.textTwo,b.textContent=e.girl.cub_text_1,m.textContent=e.girl.cub_text_2,a.src=e.girl.imgMana1,i.src=e.girl.imgMana2,console.log("it is girl")}if(r==="girl")return r="boy";if(r==="boy")return r="girl"}function u(t){t.preventDefault(),console.log(r),localStorage.setItem("hero",r),window.location.href="game.html"}document.querySelector(".form_seeker").addEventListener("submit",t=>u(t));