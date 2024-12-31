const share = document.getElementById('share');
const mobileShare = document.getElementById('mobile-share');

share.addEventListener('click', socialLinks);
mobileShare.addEventListener('click', socialLinks);

function socialLinks() {
  const social = document.querySelector('.author-profile--active');
  const profileShare = document.querySelector('.author-profile__share');
  const profileImg = document.querySelector('.author-profile__img');
  

  social.classList.toggle('display-none');

  if (social.classList.contains('display-none')) {
    profileShare.style.backgroundColor = "var(--cl-light-grayish-blue)";
    profileImg.classList.remove("white-icon");
  } else {
    profileShare.style.backgroundColor = "var(--cl-dark-blue)";
    profileImg.classList.add("white-icon");
  }

}
