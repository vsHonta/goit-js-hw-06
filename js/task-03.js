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


const refGallery = document.querySelector('.gallery')

const tags = images.reduce((acc, obj) => {
  const image = `<img src=${obj.url} alt='${obj.alt}' class=img width=300 height=200>`
  acc += image
  return acc
}, ``)

refGallery.insertAdjacentHTML("afterbegin", tags)
  
refGallery.style.display = 'flex';
refGallery.style.gap = '15px';
refGallery.style.flexDirection = 'column';


// const tags = images.map(obj => `<img src=${obj.url} alt=${obj.alt} class=img width=300 height=200> `).join('')
// refGallery.insertAdjacentHTML("afterbegin", tags)



