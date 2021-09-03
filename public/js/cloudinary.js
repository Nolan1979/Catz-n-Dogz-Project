const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/catz-n-dogz/upload';
const CLOUDINARY_UPLOAD_PRESET = 'lhxcc2tl';

var imgPreview = document.getElementById('img-preview');
var fileUpload = document.getElementById('file-upload');
let picUrl;

fileUpload.addEventListener('change', function (event) {
    var file = event.target.files[0];
    var formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

    axios({
        url: CLOUDINARY_URL,
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: formData

    }).then(function (res) {
        console.log(res);
        imgPreview.src = res.data.secure_url;
        picUrl = res.data.url;

    }).catch(function (err) {
        console.log(err)
    });

});


const postFormHandler = async (event) => {
    event.preventDefault();

    const newBreed = document.querySelector('#newBreed').value.trim();
    const newGender = document.querySelector('#newGender').value.trim();
    const newContact = document.querySelector('#newContact').value.trim();
    // const newDetails = document.querySelector('#newDetails').value.trim();
    const newType = document.querySelector('#animal-type').value.trim();
    const newFile = picUrl;
    if (newBreed && newGender && newContact) {
        const response = await fetch('/api/pet', {
            method: 'POST',
            body: JSON.stringify({ newBreed, newGender, newContact, newFile, newType}),
            headers: { 'Content-Type': 'application/json' },
        });
console.log(response)
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed upload');
        }
    }
};

document
    .querySelector('#post-form')
    .addEventListener('submit', postFormHandler);








// let apiKey = 912125249931395

// function getImage() {
//     fetch('https://912125249931395:Zv42XUvs5fnPjeqvRtD9BjkAl-U@api.cloudinary.com/v1_1/catz-n-dogz/resources/search')

//     .then(function (res) {
        
//         console.log(res)
//     })
// };

// getImage();