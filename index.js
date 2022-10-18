const customDonationInput = document.getElementById("custom-donation");
const donationBtnElements = document.getElementsByClassName("donation-btn");

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


for(let i = 0; i < donationBtnElements.length; i++){
   donationBtnElements[i].addEventListener("click", function(e){
      e.preventDefault();
      customDonationInput.value = donationBtnElements[i].value;
   })
}

