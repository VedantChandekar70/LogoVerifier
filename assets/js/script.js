function checkLogo() {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = 'Checking...';

    // Simulate a delay for demonstration purposes
    setTimeout(() => {
        resultDiv.innerHTML = 'Result: Fake Logo (Sample result for demonstration)';
    }, 2000); // Simulating a 2-second delay
}
