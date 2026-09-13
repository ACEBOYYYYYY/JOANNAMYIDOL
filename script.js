// Press the camera button to "take a photo": flash the light, then eject the photo.

const shutterButton = document.getElementById('button');
const flashLight = document.getElementById('circle');
const photo = document.getElementById('photo');

if (shutterButton && flashLight && photo) {
  shutterButton.addEventListener('click', () => {
    flashLight.classList.remove('flash-animation');
    photo.classList.remove('eject-photo');

    // Restart the animations even on repeated clicks.
    // Forcing reflow lets the class be re-added right away instead of
    // waiting a fixed timeout, which felt sluggish on touch devices.
    void flashLight.offsetWidth;

    flashLight.classList.add('flash-animation');
    photo.classList.add('eject-photo');
  });
}
