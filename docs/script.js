// Getting Elements
const qrBox = document.querySelector(".qr_box ")
const qrImage = document.getElementById("qr_image");
const generateBtn = document.querySelector(".btn");
const userInput = document.getElementById("user_input")

// Creating Functions
function generateQR() {
    if (userInput.value.length >0) {
        
        
            qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + userInput.value;
            qrBox.classList.remove("max-h-0");
            qrBox.classList.add("max-h-80")
        } else{
        qrBox.classList.add("max-h-0");
        qrBox.classList.remove("max-h-80")
        
        userInput.classList.add("animate-ping");
        setTimeout(() => {
            userInput.classList.remove("animate-ping");
        }, 200);

    }
    
}

// Calling Functions
generateBtn.addEventListener("click",generateQR )