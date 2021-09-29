
 var enbel = false;
 function active() {
    enbel = !enbel;
 }
 function showborder(){
     if(enbel){
        $(event.target).toggleClass("mystyle").click(function () {
            $("#MyPopup").modal("show");
        });
     }
        
        // $(function () {
        //     $(event.target).click(function () {
        //         // $("#MyPopup").modal("show");
        //         // return false;
        //     });
        // }); 
 }

// function showborder(){
//     document.body.addEventListener('mouseover',function(e){
//     let tagName = e.target.nodeName;
//     tagName.classList.toggle("mystyle")
//    //console.log(tagName)
// });
// }


    //var x =document.getElementsByTagName(tag);
    // console.log(tag);
    
    // console.log(tag.classList.value);
    // if(tag.classList.value=="mystyle"){
    //     tag.classList.toggle("nullstyle");
    //     console.log(tag);
    // }else{
    //     tag.classList.add("mystyle");
    //     console.log(tag);
    // }
    // if(tag.style.border=="2px solid green"){
    //     tag.style.border="";
    // }else{
    //     tag.style.border="2px solid green"
    // }
