function selectExample(exampleName) {
    // Get the example code from a server or a file
    // and insert it into the user code textarea
    var exampleCode = getExampleCode(exampleName);
    document.getElementById('user-code').value = exampleCode;
  }
  
function refactorCode() {
// Get the user's code from the textarea
var userCode = document.getElementById('user-code').value;

// Send the user's code to the server for refactoring
var refactoredCode = sendCodeForRefactoring(userCode);

// Display the refactored code in the pre element
document.getElementById('refactored-code').innerText = refactoredCode;
}

// async function refactorCode() {
//     const userCode = encodeURIComponent(document.getElementById("user-code").value);
//     const example = encodeURIComponent(selectedExample);
//     const url = `https://example.com/refactor?user_code=${userCode}&example=${example}`;
//     const response = await fetch(url);
//     const refactoredCode = await response.text();
//     document.getElementById("refactored-code").textContent = refactoredCode;
//   }
  

function getExampleCode(exampleName) {
// This function can retrieve the example code from a server
// or a file, based on the exampleName parameter
// and return it as a string
// For simplicity, we are returning hardcoded examples here

if (exampleName == 'example1') {
    return 'console.log("Hello, world!");';
} else if (exampleName == 'example2') {
    return 'var x = 5; var y = 10; var sum = x + y;';
} else if (exampleName == 'example3') {
    return 'function addNumbers(a, b) { return a + b; }';
}
}

function sendCodeForRefactoring(userCode) {
// This function can send the user's code to a server for
// refactoring using an AJAX request or a WebSocket
// For simplicity, we are just returning the original code here
return userCode;
}