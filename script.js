// Function to initiate UPI transaction
function initiateUPITransaction() {
    const upiID = 'ruposi.8393@waaxis';  

    // Create the UPI URL
    const upiURL = `upi://pay?pa=${upiID}&cu=INR`;

    // Redirect the user to the UPI URL
    window.location.href = upiURL;
}

// Function to copy UPI ID to clipboard
function copyUPIID() {
    const upiID = 'ruposi.8393@waaxis'; 

    // Create a temporary input element to copy the text
    const tempInput = document.createElement('input');
    tempInput.value = upiID;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    // Feedback to user (you can customize this)
    const copyButton = document.getElementById('copyUPIID');
    copyButton.textContent = 'UPI ID Copied!';
    setTimeout(() => {
        copyButton.textContent = 'Copy UPI ID';
    }, 2000);  // Reset after 2 seconds
}
