const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const styles = `<style>
      .gallery {
        list-style: none;
        padding: 0;
        margin: 0;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
      }

      .gallery__item {
        border-radius: 15px;
        overflow: hidden;
      }

      .gallery__image {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    </style>`;

const headRef = document.head;
const galleryRef = document.querySelector('.gallery');

headRef.insertAdjacentHTML('beforeend', styles);

const markup = images
  .map(
    ({ url, alt }) =>
      `<li class=gallery__item ><img class=gallery__image src=${url} alt=${alt}></li>`
  )
  .join('');

galleryRef.insertAdjacentHTML('beforeend', markup);
