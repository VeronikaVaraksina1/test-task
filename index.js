const banner = document.querySelector(".banner");
const closeBtn = document.querySelector(".close-button");

closeBtn.addEventListener('click', () => {
    banner.classList.add('hidden');
})