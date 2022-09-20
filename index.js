const customDonationInput = document.getElementById("custom-donation");
const donationBtnsArr = [200,100,50,30,10,5];
let donationsObjs = [];

class Donate {
   constructor( amountDonated, clicked = false){
      this.amountDonated = amountDonated;
      this.clicked = clicked;
   }
}

$(".once-btn").click(function(){
   $(".monthly-btn").removeClass("btn-success");
   $(".monthly-btn").addClass("btn-secondary");
   $(".once-btn").removeClass("btn-secondary");
   $(".once-btn").addClass("btn-success");
})

$(".monthly-btn").click(function(){
   $(".once-btn").removeClass("btn-success");
   $(".once-btn").addClass("btn-secondary");
   $(".monthly-btn").removeClass("btn-secondary");
   $(".monthly-btn").addClass("btn-success");
})


donationBtnsArr.map(donation =>{
   let donateBtn = document.getElementById(donation);
   let _donation = new Donate( donateBtn.value);
   return donationsObjs.push(_donation);
})


for(let i = 0; i < donationBtnsArr.length; i ++){
   let donateBtn = document.getElementById(donationBtnsArr[i]);
   donationBtnsArr[i] === donateBtn.value?console.log(donationBtnsArr[i])
   :console.log("no match")
   donateBtn.addEventListener("click",function(e){
      e.preventDefault();
      
   })
}
