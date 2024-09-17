const gallery = document.getElementById('background-gallery');
const editor = document.getElementById('editor');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const textInput = document.getElementById('text-input');
const saveBtn = document.getElementById('save-btn');

let selectedImage;

// عند النقر على صورة في المعرض
gallery.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        selectedImage = e.target;
        openEditor(selectedImage);
    }
});

// فتح المحرر مع الصورة المحددة
function openEditor(image) {
    editor.style.display = 'block';
    canvas.width = image.width;
    canvas.height = image.height;
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
}

// إضافة النص إلى الخلفية
textInput.addEventListener('input', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(selectedImage, 0, 0, canvas.width, canvas.height);
    ctx.font = '30px Arial';
    ctx.fillStyle = 'black';
    ctx.fillText(textInput.value, 50, 50); // تعديل الموقع هنا
});

// حفظ الصورة
saveBtn.addEventListener('click', () => {
    const link = document.createElement('a');
    link.download = 'edited-image.png';
    link.href = canvas.toDataURL();
    link.click();
});