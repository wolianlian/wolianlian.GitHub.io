window.onload=function(){
    const container=document.querySelector(".container");
    const list=document.querySelectorAll(".dots li");
    const viewheight=document.body.clientHeight;
    var index=0;
    const navli=document.querySelectorAll(".navlist li")
    


    document.addEventListener("mousewheel",function(e){
        if(e.wheelDelta===-150){
            index++;
            if(index>list.length-1){
                index=list.length-1;
            }
            container.style.top=-index*viewheight+"px";
        }

        if(e.wheelDelta===150){
            index--;
            if(index<0){
                index=0;
            }
            container.style.top=-index*viewheight+"px";
        }

        
        document.querySelector("li.active").className=" ";
        list[index].className="active"


    })

    for(var i=0;i<list.length;i++){
        list[i].num=i;
        list[i].onclick=function(){
            document.querySelector("li.active").className=" ";
            list[this.num].className="active";
            index=this.num;
            container.style.top=-this.num*viewheight+"px";
      
        }
        
    }
    // for(var i=0;i<navli.length;i++){
    //     navli.num=i;
    //     navli[i].onclick=function(){
    //         document.querySelector("li.active").className=" ";
    //         this.className="active";
    //         index=this.num;
    //         container.style.top=-index*viewheight+"px";


    //     }
    // }

}