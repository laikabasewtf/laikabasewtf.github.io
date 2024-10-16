const element = document.getElementById('nGnKf1Zm0s1xPtlh');
const textToCopy = "0x0000000000000000000000000000000000000000";

element.addEventListener('click', () => {
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            Toastify({
                text: "Contract Copied!",
                duration: 3000, // Duration in milliseconds
                close: true,
                gravity: "top", // 'top' or 'bottom'
                position: 'center', // 'left', 'center' or 'right'
                backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)", // Custom background color
            }).showToast();
        })
        .catch(err => {
            console.error('Error copying text: ', err);
        });
});
