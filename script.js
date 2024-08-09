// Function to handle drag and drop
const dropZone = document.getElementById('drop-zone');
const uploadForm = document.getElementById('upload-form');
const fileInput = document.getElementById('file-input');
const predictButton = document.getElementById('predict-button');
const imageContainer = document.getElementById('image-container');
const uploadedImage = document.getElementById('uploaded-image');
const predictedLabel = document.getElementById('predicted-label');

dropZone.addEventListener('dragover', (event) => {
    event.preventDefault();
    dropZone.classList.add('hover');
});

dropZone.addEventListener('dragleave', () => {
    dropZone.classList.remove('hover');
});

dropZone.addEventListener('drop', (event) => {
    event.preventDefault();
    dropZone.classList.remove('hover');
    const file = event.dataTransfer.files[0];
    fileInput.files = event.dataTransfer.files;
    showImage(file);
});

// Function to handle file input change
fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    showImage(file);
});

// Function to show uploaded image
function showImage(file) {
    const reader = new FileReader();
    reader.onload = function (event) {
        uploadedImage.src = event.target.result;
        imageContainer.style.display = 'block';
    }
    reader.readAsDataURL(file);
}

// Function to handle predict button click
predictButton.addEventListener('click', () => {
    predictLabel();
});

// Function to predict label
function predictLabel() {
    predictedLabel.textContent = 'Predicting...';
    predictedLabel.style.display = 'block';
    const formData = new FormData(uploadForm);
    fetch('/', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json()) // Parse response as JSON
        .then(data => {
            // Display predicted label
            predictedLabel.innerHTML = `Predicted Label: ${data.predicted_label}`;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}