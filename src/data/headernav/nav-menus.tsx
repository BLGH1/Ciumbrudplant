import { NavMenuItem } from "@/interFace/interFace";

const nav_menus_list:NavMenuItem[] = [
  
  {id:1,
    link: '/',
    title: 'Acasă',
    hasDropdown: false,
    megamenu: false,
    dropdownItems: [
      { link: '/', title: 'Home Style 01' },
      { link: '/home-two', title: 'Home Style 02' },
      { link: '/home-three', title: 'Home Style 03' },
    ]
  },
  {id:2,
    link: '/',
    title: 'Pomi Fructiferi',
    hasDropdown: true,
    megamenu: false,
    dropdownItems: [
      { link: 'https://www.4garden.ro/pomi-fructiferi/mar/', title: 'Măr' },
      { link: 'https://www.4garden.ro/pomi-fructiferi/par/', title: 'Păr' },
      { link: 'https://www.4garden.ro/pomi-fructiferi/cais/', title: 'Cais' },
      { link: 'https://www.4garden.ro/pomi-fructiferi/cires/', title: 'Cireș' },

      { link: 'https://www.4garden.ro/pomi-fructiferi/visin/', title: 'Vișin' },
      { link: 'https://www.4garden.ro/pomi-fructiferi/gutui/', title: 'Gutui' },
      { link: 'https://www.4garden.ro/pomi-fructiferi/prun/', title: 'Prun' },
      { link: 'https://www.4garden.ro/pomi-fructiferi/piersic/', title: 'Piersic' },

      { link: 'https://www.4garden.ro/pomi-fructiferi/migdal/', title: 'Migdal' },
      { link: 'https://www.4garden.ro/pomi-fructiferi/nectarin/', title: 'Nectarin' },
      { link: 'https://www.4garden.ro/pomi-fructiferi/pom-fructifer-smochin/', title: 'Smochin' },
      { link: 'https://www.4garden.ro/pomi-fructiferi/pom-fructifer-kaki/', title: 'Kaki' },

      { link: 'https://www.4garden.ro/pomi-fructiferi/pom-fructifer-mosmon/', title: 'Mosmon' },
    ]
  },
  {
    id:3,
    link: '/',
    title: 'Butași Trandafiri',
    hasDropdown: true,
    megamenu: false,
    dropdownItems: [
      { link: 'https://www.4garden.ro/butasi-trandafiri/teahibrizi/', title: 'Teahibrizi' },
      { link: 'https://www.4garden.ro/butasi-trandafiri/de-dulceata/', title: 'De Dulceață' },
      { link: 'https://www.4garden.ro/butasi-trandafiri/englezesti/', title: 'Englezești' },
      { link: 'https://www.4garden.ro/butasi-trandafiri/floribunda/', title: 'Floribunda / Polyantha / Multiflora' },

      { link: 'https://www.4garden.ro/butasi-trandafiri/de-parc/', title: 'De parc / Minirose / Acoperitori' },
      { link: 'https://www.4garden.ro/butasi-trandafiri/urcatori/', title: 'Urcători' },
      { link: 'https://www.4garden.ro/butasi-trandafiri/trandafir-tip-pom/', title: 'Tip Pom' },
      
    ]
  },
  {id:4,
    link: '/',
    title: 'Butași Viță de Vie',
    hasDropdown: true,
    megamenu: false,
    dropdownItems: [
      { link: 'https://www.4garden.ro/butasi-vita-de-vie/alba-de-masa/', title: 'Albă de masă' },
      { link: 'https://www.4garden.ro/butasi-vita-de-vie/alba-de-vin/', title: 'Albă de vin' },
      { link: 'https://www.4garden.ro/butasi-vita-de-vie/neagra-de-masa/', title: 'Neagră de masă' },
      { link: 'https://www.4garden.ro/butasi-vita-de-vie/rosie-de-masa/', title: 'Roșie de masă' },

      { link: 'https://www.4garden.ro/butasi-vita-de-vie/rosie-de-vin/', title: 'Roșie de vin' },
      { link: 'https://www.4garden.ro/butasi-vita-de-vie/vita-fara-samburi/', title: 'Viță fără sâmburi' },
      
    ]
  },
  {id:5,
    link: '/',
    title: 'Arbuști Fructiferi',
    hasDropdown: true,
    megamenu: false,
    dropdownItems: [
      { link: 'https://www.4garden.ro/arbusti-fructiferi/agris/', title: 'Agriș' },
      { link: 'https://www.4garden.ro/arbusti-fructiferi/coacaz/', title: 'Coacăz' },
      { link: 'https://www.4garden.ro/arbusti-fructiferi/mur/', title: 'Mur' },
      { link: 'https://www.4garden.ro/arbusti-fructiferi/zmeur/', title: 'Zmeur' },

      { link: 'https://www.4garden.ro/arbusti-fructiferi/arbusti-fructiferi-tip-pom/', title: 'Tip Pom' },
      { link: 'https://www.4garden.ro/arbusti-fructiferi/aronia/', title: 'ARONIA' },
      
    ]
  },
  {id:6,
    link: '/contact',
    title: 'Contact',
  },
]

{/* 
const nav_menus_list:NavMenuItem[] = [
  {id:1,
    link: '/',
    title: 'Acasa',
    hasDropdown: false,
    megamenu: false,
    dropdownItems: [
      { link: '/', title: 'Home Style 01' },
      { link: '/home-two', title: 'Home Style 02' },
      { link: '/home-three', title: 'Home Style 03' },
    ]
  },
  {id:2,
    link: '/shop',
    title: 'Catalog produse',
    hasDropdown: false,
    megamenu: false,
    dropdownItems: [
      { link: '/shop', title: 'Shop' },
      { link: '/wishlist', title: 'Wishlist' },
      { link: '/cart', title: 'Cart' },
      { link: '/checkout', title: 'Checkout' },
    ]
  },
  {
    id:3,
    link: '/',
    title: 'Pagini',
    hasDropdown: true,
    megamenu: false,
    dropdownItems: [
      { link: '/about', title: 'About' },
      { link: '/team', title: 'Team' },
      
    ]
  },
  {id:4,
    link: '/blog',
    title: 'Blog',
  },
  {id:5,
    link: '/contact',
    title: 'Contact',
  },
]
*/}
export default nav_menus_list;