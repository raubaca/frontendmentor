const shareBtn = document.getElementById('share')
const links = document.getElementById('share-links')

shareBtn.addEventListener('click', () => links.classList.toggle('active'))