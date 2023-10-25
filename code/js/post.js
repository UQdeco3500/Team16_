document.addEventListener('DOMContentLoaded', function() {
    var cancelButton = document.querySelector('.button-group button:nth-child(2)');
    cancelButton.addEventListener('click', function(event) {
        event.preventDefault();
        var saveConfirmation = confirm('Do you need to save it?');
        if (!saveConfirmation) {
            window.location.href = 'community.html';
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    var publishButton = document.querySelector('.button-group button:nth-child(1)');
    var textarea = document.querySelector('.form-group textarea');
    publishButton.addEventListener('click', function(event) {
        event.preventDefault();
        localStorage.setItem('postText', textarea.value);
        window.location.href = 'community.html';
    });
});