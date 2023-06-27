const steps = Array.from(document.querySelectorAll("form .step"));
const nextBtn = document.querySelectorAll("form .next-btn");
const prevBtn = document.querySelectorAll("form .previous-btn");
const form = document.querySelector("form");

nextBtn.forEach((button) => {
  button.addEventListener("click", () => {
    changeStep("next");
  });
});
prevBtn.forEach((button) => {
  button.addEventListener("click", () => {
    changeStep("prev");
  });
});

function changeStep(btn) {
  let index = 0;
  const active = document.querySelector(".active");
  index = steps.indexOf(active);
  steps[index].classList.remove("active");
  if (btn === "next") {
    index++;
  } else if (btn === "prev") {
    index--;
  }
  steps[index].classList.add("active");
}

function check() {
	var question1 = document.getElementById("question1").value;


	if (question1 == "1") {
		document.getElementById("message").innerHTML = "1";
        document.getElementById("advancedpay").innerHTML = "$10";
        document.getElementById("latepay").innerHTML = "$15";
}
	if (question1 == "2") {
		document.getElementById("message").innerHTML = "2";
        document.getElementById("advancedpay").innerHTML = "$20";
        document.getElementById("latepay").innerHTML = "$30";
}	
	if (question1 == "3") {
		document.getElementById("message").innerHTML = "3";
        document.getElementById("advancedpay").innerHTML = "$30";
        document.getElementById("latepay").innerHTML = "$45";
	}

    if (question1 == "4") {
       document.getElementById("message").innerHTML = "4";
        document.getElementById("advancedpay").innerHTML = "$30";
        document.getElementById("latepay").innerHTML = "$50";
    }
	}

$ (document).ready(function(){
    $("#confirm").click(function(){
      var payment=$("#payment");
      if(payment.val () === "advanced") {
        $("#paypal").show()
      }
    })
});