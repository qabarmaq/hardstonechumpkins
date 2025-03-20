let slides=0
function nazad(){
    let b=document.querySelectorAll('.odin')
    slides--
    if(slides<0){slides=2}
    for(let j=0;j<b.length;j++){
        b[j].style.display="none"
    }
    b[slides].style.display="inline"    
    
    if(slides==0) {document.getElementById("schet").innerHTML="ОРЕХОВАЯ ЛЮБОВЬ"}
        
        
        
    if(slides==1) {document.getElementById("schet").innerHTML="DEEEZ NUTS (FT. DR. DRE)"}
    if(slides==2) {document.getElementById("schet").innerHTML="БРОДЯГА"}
    if(slides==3) {document.getElementById("schet").innerHTML="ОРЕХОВАЯ ЛЮБОВЬ"}
    
}
function vpered(){
    let b=document.querySelectorAll('.odin')
    slides++
    if(slides>2){slides=0}
    for(let j=0;j<b.length;j++){
        b[j].style.display="none"
    }
    b[slides].style.display="inline"
    document.getElementById("schet").innerHTML=slides+1+'/4'

    if(slides==0) {document.getElementById("schet").innerHTML="ОРЕХОВАЯ ЛЮБОВЬ"}
    if(slides==1) {document.getElementById("schet").innerHTML="DEEEZ NUTS (FT. DR. DRE)"}
    if(slides==2) {document.getElementById("schet").innerHTML="БРОДЯГА"}
    if(slides==3) {document.getElementById("schet").innerHTML="ОРЕХОВАЯ ЛЮБОВЬ"}
    

}
function knn1(){
    let b=document.querySelectorAll('.odin')
    slides=0
    for(let j=0;j<b.length;j++){
        b[j].style.display="none"
    }
    b[slides].style.display="inline"
    
    document.getElementById("schet").innerHTML='ОРЕХОВАЯ ЛЮОВЬ'

    document.getElementById("kn1").style.backgroundColor="red"
    document.getElementById("kn2").style.backgroundColor="gray"
    document.getElementById("kn3").style.backgroundColor="gray"
    document.getElementById("kn4").style.backgroundColor="gray"
}

function knn2(){
    let b=document.querySelectorAll('.odin')
    slides=1
    for(let j=0;j<b.length;j++){
        b[j].style.display="none"
    }
    b[slides].style.display="inline"
    
    document.getElementById("schet").innerHTML='2/4'

    document.getElementById("kn1").style.backgroundColor="gray"
    document.getElementById("kn2").style.backgroundColor="red"
    document.getElementById("kn3").style.backgroundColor="gray"
    document.getElementById("kn4").style.backgroundColor="gray"
}

function knn3(){
    let b=document.querySelectorAll('.odin')
    slides=2
    for(let j=0;j<b.length;j++){
        b[j].style.display="none"
    }
    b[slides].style.display="inline"
    
    document.getElementById("schet").innerHTML='3/4'

    document.getElementById("kn1").style.backgroundColor="gray"
    document.getElementById("kn2").style.backgroundColor="gray"
    document.getElementById("kn3").style.backgroundColor="red"
    document.getElementById("kn4").style.backgroundColor="gray"
}

function knn4(){
    let b=document.querySelectorAll('.odin')
    slides=3
    for(let j=0;j<b.length;j++){
        b[j].style.display="none"
    }
    b[slides].style.display="inline"
    
    document.getElementById("schet").innerHTML='4/4'

    document.getElementById("kn1").style.backgroundColor="gray"
    document.getElementById("kn2").style.backgroundColor="gray"
    document.getElementById("kn3").style.backgroundColor="gray"
    document.getElementById("kn4").style.backgroundColor="red"
}