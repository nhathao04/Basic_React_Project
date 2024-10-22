const orchidList = [
  {
    id: '1',
    name: 'Taichung beauty',
    rating: 5,
    isSpecial: true,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFOD3GVmtcJRlA0yFIIou7ZYSHK1yES872hw&s',
    color: 'pink',
    origin: 'Taiwan',
    category: 'Cattleya',
    link:'https://www.youtube.com/embed/VltxISbCJas?si=ST_3YTEQe-wYltU_'
  },
  {
    id: '2',
    name: 'Phalaenopsis',
    rating: 4,
    isSpecial: false,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT68VRwLI4dOvsBhPgK2PGZcwlVbYbk31HlBw&s',
    color: 'white',
    origin: 'Indonesia',
    category: 'Phalaenopsis',
    link:'https://www.youtube.com/embed/QfeQkDmiij0?si=SlPwtzwOVhevJeBn'

  },
  {
    id: '3',
    name: 'Dendrobium Nobile',
    rating: 4.5,
    isSpecial: false,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGRXvSHZmI5evjaJ_tAIm26aFPN9HYsc-lkA&s',
    color: 'purple',
    origin: 'Thailand',
    category: 'Dendrobium',
    link:'https://www.youtube.com/embed/f4zogg7Dmv4?si=1sN2GLdMS56yEZvo'

  },
  {
    id: '4',
    name: 'Cymbidium Elegans',
    rating: 4,
    isSpecial: true,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVU8x1ZvIyLXANORAFHJHNSHNW54O6kKX1eQ&s',
    color: 'yellow',
    origin: 'China',
    category: 'Cymbidium',
    link:'https://www.youtube.com/embed/1XGGj4Otu5c?si=lTQRHQ4j48PFgABZ'

  },
  {
    id: '5',
    name: 'Paphiopedilum Maudiae',
    rating: 5,
    isSpecial: true,
    image: 'https://theplantladysf.com/cdn/shop/products/IMG_2666.jpg?v=1672872712',
    color: 'green',
    origin: 'Vietnam',
    category: 'Paphiopedilum',
    link:'https://www.youtube.com/embed/cWFyQzJbGDg?si=l9DhDdZ4Ba59ARyg'

  },
  {
    id: '6',
    name: 'Vanda Blue Magic',
    rating: 4.8,
    isSpecial: true,
    image: 'https://static.wixstatic.com/media/b84a17_6dc97cd7dd1940f4ada9979cc7f23d49~mv2_d_1536_2048_s_2.jpg/v1/fill/w_480,h_644,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/b84a17_6dc97cd7dd1940f4ada9979cc7f23d49~mv2_d_1536_2048_s_2.jpg',
    color: 'blue',
    origin: 'India',
    category: 'Vanda',
    link:'https://www.youtube.com/embed/eQ2IZoI0kKQ?si=pD_1jr6Pb6Yc0tc_'

  },
  {
    id: '7',
    name: 'Miltonia Sunset',
    rating: 4.2,
    isSpecial: false,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlOGDC5n9pmOGmjr4QRurPpe_1q0jDnYhDzA&s',
    color: 'orange',
    origin: 'Brazil',
    category: 'Miltonia',
    link:'https://www.youtube.com/embed/xcUN__Gmtvw?si=6KE8Fb2dS7AWk-9O'

  },
  {
    id: '8',
    name: 'Oncidium Sharry Baby',
    rating: 5,
    isSpecial: true,
    image: 'https://media.greg.app/Y2FyZS1wbGFudC1wcm9maWxlL3VzZXJzLzgyMjE0L3BsYW50LXBob3Rvcy8zOTQ2MDkvMTY1NTMxNjQwOTgxNy1BMTU3OTQxOC02OEVGLTRENkMtOUNCQy0yNzQxRDJGQjRCRTUucG5n?format=pjpeg&optimize=high&auto=webp&width=450',
    color: 'red',
    origin: 'Mexico',
    category: 'Oncidium',
    link:'https://www.youtube.com/embed/EF1MYAdJKvo?si=zhtGifkYobQd6uL6'

  },
  {
    id: '9',
    name: 'Zygopetalum Maculatum',
    rating: 3.8,
    isSpecial: false,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTALTSqpxjgbOQC16hCw6ltz5bpBGMusK7jFw&s',
    color: 'brown',
    origin: 'Peru',
    category: 'Zygopetalum',
    link:'https://www.youtube.com/embed/2Nwx4E3SEvs?si=mek1mOH5Pes4ZpDG'

  },
  {
    id: '10',
    name: 'Brassavola Nodosa',
    rating: 4.5,
    isSpecial: false,
    image: 'https://orquideasdelturabo.com/cdn/shop/files/Screenshot-20240424-095545_Google.jpg?v=1714256961',
    color: 'white',
    origin: 'Venezuela',
    category: 'Brassavola',
    link:'https://www.youtube.com/embed/tRYXK9j8wvs?si=_HVgxSHlIM0nJYan'

  },
  {
    id: '11',
    name: 'Maxillaria Tenuifolia',
    rating: 4.3,
    isSpecial: true,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2yIhBTdiezbTOTQ3iEZutJIkidicv4eAYJg&s',
    color: 'red',
    origin: 'Costa Rica',
    category: 'Maxillaria',
    link:'https://www.youtube.com/embed/0wX53fF6J6E?si=2l8jkeTadr0n4kZC'

  },
  {
    id: '12',
    name: 'Cattleya RLC Goldenzelle',
    rating: 5,
    isSpecial: true,
    image: 'https://i.etsystatic.com/16747691/r/il/7f7a02/4520549248/il_fullxfull.4520549248_iyji.jpg',
    color: 'yellow',
    origin: 'Colombia',
    category: 'Cattleya',
    link:'https://www.youtube.com/embed/UdKDprNUODU?si=OUZGbvw-Pul0tv6L'

  },
  {
    id: '13',
    name: 'Laelia Purpurata',
    rating: 4.1,
    isSpecial: false,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD-pbdQHpR0HfKNvDnkuE7J5X4uX4BhK05Jw&s',
    color: 'purple',
    origin: 'Brazil',
    category: 'Laelia',
    link:'https://www.youtube.com/embed/qrg_xhJjhRI?si=n00h90A2DPf0Pg1E'

  },
  {
    id: '14',
    name: 'Encyclia Cochleata',
    rating: 4.6,
    isSpecial: true,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ7Dc5UsKHLWmxCBbG5JQs5WFNUv4RoaDGFA&s',
    color: 'green',
    origin: 'Belize',
    category: 'Encyclia',
    link:'https://www.youtube.com/embed/pAI8qLNmPf0?si=uc0AUxhDS14hQqih'

  },
  {
    id: '15',
    name: 'Sobralia Macrantha',
    rating: 3.9,
    isSpecial: false,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoRmi2o2OolyAi2gftNqpS1nOKQmvJWu0nbw&s',
    color: 'pink',
    origin: 'Guatemala',
    category: 'Sobralia',
    link:'https://www.youtube.com/embed/u-ngV_HvQfY?si=yzPnk-JKRuvTkOlS'

  },
  {
    id: '16',
    name: 'Lycaste Aromatica',
    rating: 5,
    isSpecial: true,
    image: 'https://i.pinimg.com/736x/61/10/6a/61106a1dc44e322ee87d43a3ae1cadcb.jpg',
    color: 'yellow',
    origin: 'Honduras',
    category: 'Lycaste',
    link:'https://www.youtube.com/embed/W8LdVhwKr6A?si=ouWgGaQ2denw7fpW'

  }
];

export default orchidList;

