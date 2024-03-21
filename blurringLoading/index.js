const bg = document.querySelector('.bg');
const text = document.querySelector('.text');

let load = 0;
let inter = setInterval(blurring, 30)

function blurring(){
    load++;
    if(load > 99){
        clearInterval(inter)
    }
    text.innerText = `${load}%`;
    text.style.opacity = scale(load, 0, 100, 1,0);
    bg.style.filter = `blur(${scale(load,0,100,30,0)}px)`;

}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
  
  