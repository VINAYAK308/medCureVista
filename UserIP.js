document.getElementById('proceed-button').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const reference = document.getElementById('reference').value;

    if (name && phone && address && reference) {
        alert(`Name: ${name}\nPhone Number: ${phone}\nAddress: ${address}\nReference: ${reference}`);
    } else {
        alert('Please fill in all fields.');
    }
});
document.getElementById('proceed-button').addEventListener('click', function() {
    // You can also add form validation here if needed
    window.location.href = 'User2.html'; // Change to the desired page
});