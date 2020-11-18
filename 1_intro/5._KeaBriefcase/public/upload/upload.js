/*
const currentYear = new Date().getFullYear(); 

const footerCopyright = document.getElementById("footer-copyright"); 
const copyrightElement = document.createTextNode("@" + currentYear);

footerCopyright.appendChild(copyrightElement); 
*/

function validateForm(){
    return true; 
}

//This function becomes irrelevant if <form> is used in the HTML
/*
function handleSubmit(){
    const output = document.getElementById("form-message").value;
    $.ajax({
        type: "POST",
        url: "/form",
        data: {formMessage}

      });

}
*/

/*
function output(){
    const textArea = document.getElementById("form-message").value;
    console.log(textArea);
    $.get("/form?message="+formMessage, (response) => {
        console.log(response)
    });
}
*/
/*
function outpost(){
    const textArea = document.getElementById("form-message").value;
    console.log(textArea);
    $.post("/form?message="+formMessage, (response) => {
        console.log(response)
    });
    }
*/
