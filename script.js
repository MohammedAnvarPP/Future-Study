
const counterDiv=document.querySelectorAll(".counter-div");

console.log(counterDiv);
function hello(){


counterDiv.forEach((counter)=>{
    counter.innerText="0";
    function counterUpdate(){
        const target=+counter.getAttribute("data-target");
        const c=+counter.innerText;
        const increment=target/500;

        if(c<target){
           counter.innerText=`${Math.ceil(c+increment)}`;
            setTimeout(counterUpdate,6);
           
        }
        
        else{
            counter.innerText=target;
        }
        }
 counterUpdate();
})

}
