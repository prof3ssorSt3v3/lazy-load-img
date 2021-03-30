document.addEventListener('DOMContentLoaded', () => {
  //when the HTML has finished loading
  console.log('got the HTML');
  let images = document.querySelectorAll('p img');
  images.forEach((img) => {
    img.addEventListener('load', (ev) => {
      console.log(`loaded ${ev.target.src}`);
    });
  });
});

window.addEventListener('load', () => {
  //when the HTML, css, js, fonts,
  //and images that are NOT lazy are finished loading
  console.log('loaded the page and assets, NOT counting lazy images');
  //start getting more images...
  let main = document.querySelector('main');
  let section = document.createElement('section');
  let lorem = `Architecto, asperiores, ipsum modi unde iusto sunt reprehenderit
          aliquam quo labore provident laboriosam obcaecati fugiat doloribus
          vero quisquam odit cum perferendis sequi nostrum assumenda iste
          aliquid sapiente expedita nobis! Nulla.`;
  for (let i = 5; i <= 40; i++) {
    let p = document.createElement('p');
    p.append(createImage(i), lorem);
    section.append(p);
  }
  main.append(section); //repaint
});

function createImage(num) {
  let img = document.createElement('img');
  img.loading = 'lazy';
  img.addEventListener('load', (ev) => {
    let url = new URL(ev.target.src);
    console.log(`Finished loading ${url.pathname}`);
  });
  img.addEventListener('error', (ev) => {
    let url = new URL(ev.target.src);
    console.log(`Failed to load ${url.pathname}`);
  });
  img.src = `./img/pexels-${num}.jpeg`;
  return img;
}
