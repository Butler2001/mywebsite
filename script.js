function buttonAction(buttonNumber) {
    alert("Button " + buttonNumber + " clicked!");
}



function buttonAction(action) {
    const section = document.getElementById(action);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}


function buttonAction(action) {
    const modal = document.getElementById(action + 'Modal');
    if (modal) {
        modal.style.display = 'block';
    }
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}




<script>
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        
        const formMessage = document.getElementById('formMessage');
        formMessage.classList.remove('hidden');
        formMessage.textContent = "Thank you for reaching out! I'll get back to you soon.";

        // Clear form fields after submission
        this.reset();
    });
</script>
