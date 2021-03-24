window.onscroll = () => {
  const nav = document.querySelector('#navbar');
  if(this.scrollY > (this.innerHeight)*0.7) {
    console.log(this.scrollY);
    nav.classList.add("scroll");
  } else {
    nav.classList.remove("scroll");
  }
};