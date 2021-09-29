
 // variable for testing  mode of feedback(enabel or disabel)
 var enbel = false;
 //whene click feedback btn to enabel or disabel the mode
 function activeFeedback() {
    enbel = !enbel;
 }

// function to make a border for mouse position 
 function showborder(){
     //console.log(event.target.tagName);
     if(enbel){ 
            $(event.target).removeAttr("href").toggleClass("mystyle").click(function () {
                         $("#MyPopup").modal("show");
                    });
     }
 }

//click to close the modal
function closeModal() {
    // Place the above code inside this block
    $('#btnClosePopup').click(function() {
        enbel = false;
        $('#MyPopup').modal('hide');

    });
 };
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
