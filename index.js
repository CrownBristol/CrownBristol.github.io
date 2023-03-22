function selectExample(exampleName) {
    var exampleCode = getExampleCode(exampleName);
    document.getElementById('user-code').value = exampleCode;
}


function refactorCode() {
    const userCode = encodeURIComponent(document.getElementById("user-code").value);
    const url = `http://127.0.0.1:3000/refactor`;
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ userCode: userCode }),
    })
        .then((response) => response.text())
        .then((refactoredCode) => {
            document.getElementById("refactored-code").textContent = refactoredCode;
        })
        .catch((error) => console.error(error));
}


function getExampleCode(exampleName) {
    if (exampleName == 'example1') {
        return 'console.log("Hello, world!");';
    } else if (exampleName == 'example2') {
        return 'var x = 5; var y = 10; var sum = x + y;';
    } else if (exampleName == 'example3') {
        return 'function addNumbers(a, b) { return a + b; }';
    }
}
