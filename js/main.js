
// imgs slider

var imgs=Array.from(document.querySelectorAll('.item img'));
var layer=document.querySelector('.layer');
var closeIcon=document.getElementById('close');
var prevIcon=document.getElementById('prev');
var nextIcon=document.getElementById('next');
var layerItem=document.querySelector('.layer-item')

var currentIndex=0;

for(var i=0;i<imgs.length;i++){
    imgs[i].addEventListener('click',function(e){
        openLayer(e);
    })
}
function openLayer(e){
    currentIndex=imgs.indexOf(e.target);
    var currentSrc=e.target.src;
        layer.style.display='flex';
        layerItem.style.backgroundImage=`url(${currentSrc})`;
}
closeIcon.addEventListener('click',closeLayer);
function closeLayer(){
    layer.style.display='none';
}
nextIcon.addEventListener('click',getNextImg);
function getNextImg(){
    currentIndex++;
    if(currentIndex==imgs.length){
        currentIndex=0;
    }
    var currentSrc=imgs[currentIndex].src;
    layerItem.style.backgroundImage=`url(${currentSrc})`;

}
prevIcon.addEventListener('click',getPrevImg);
function getPrevImg(){
    currentIndex--
    if(currentIndex<0){
        currentIndex=imgs.length-1;
    }
    var currentSrc=imgs[currentIndex].src;
    layerItem.style.backgroundImage=`url(${currentSrc})`;

}
document.addEventListener('keydown',function(e){
    if(e.key=='ArrowRight'){
        getNextImg();
    }
    else if(e.key=='ArrowLeft'){
        getPrevImg();
    }
    else if(e.key=='Escape'){
        closeLayer();
    }
})


