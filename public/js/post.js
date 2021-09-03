const postFormHandler = async (event) => {
    event.preventDefault();

    const newBreed = document.querySelector('#newBreed').value.trim();
    const newGender = document.querySelector('#newGender').value.trim();
    const newContact = document.querySelector('#newContact').value.trim();
    const newDetails = document.querySelector('#newDetails').value.trim();
    const newFile = document.querySelector('#file-upload').value.trim();
    if (newBreed && newGender && newContact) {
        const response = await fetch('/api/pet', {
            method: 'POST',
            body: JSON.stringify({ newBreed, newGender, newContact, newDetails, newFile}),
            headers: { 'Content-Type': 'application/json' },
        });
console.log(response)
        if (response.ok) {
            // document.location.replace('/dashboard');
        } else {
            alert('Failed upload');
        }
    }
};

document
    .querySelector('#post-form')
    .addEventListener('submit', postFormHandler);