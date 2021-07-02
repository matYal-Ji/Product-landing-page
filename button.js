const boxin_box = document.querySelector('.boxin-box');
const box = document.querySelector('#button');
// const header = document.querySelector('.header.container');
const a = document.getElementsByTagName('a');

console.log(a[0]);

// for(int i=0;i<a.length();a++)

box.addEventListener('click',()=>{
    boxin_box.classList.toggle('active');
    box.classList.toggle('close');
})
