//image shuffler

// Get the image element by its ID
const imageElement = document.getElementById('myImage');

// Create an array of image URLs
const images = [
  'A45s.png',
  'Hyundai i30.png',
  'sheepeyR8.png',
  'ttrs khayalami.png'
];

// Initialize an index to track the current image
let currentImageIndex = 0;

// Set an interval to change the image every 4000 milliseconds (4 seconds)
function nextImage()  {
  // Increment the index
  currentImageIndex++;

  // If the index exceeds the number of images, reset it to 0
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }

  // Change the source of the image element to the next image in the array
  imageElement.src = images[currentImageIndex];
}; // 4000 milliseconds = 4 seconds

function prevImage()  {
  // decrement the index
  currentImageIndex--;

  // If the index exceeds the number of images, reset it to 0
  if (currentImageIndex >= images.length) {
    currentImageIndex = imageElement;
  }

  // Change the source of the image element to the next image in the array
  imageElement.src = images[currentImageIndex];
}; // 4000 milliseconds = 4 seconds
