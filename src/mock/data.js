/* eslint-disable prettier/prettier */
import { nanoid } from 'nanoid';

// PROJECTS DATA
export const projectsData = [{
        id: nanoid(),
        img: 'project.jpg',
        title: 'TheCollegeBee',
        info: 'A full stack application for college students, where they can explore, show interests and get informed about various events going on in their college.',
        info2: 'TheCollegeBee mobile application is developed on Flutter and is available for both IOS and Android.',
        url: 'https://thecollegebee.com',
        repo: 'https://github.com/thecollegebee', // if no repo, the button will not show up
    },
    {
        id: nanoid(),
        img: 'urlshortener.jpg',
        title: 'Sh0r.tk - Simple URL shortener',
        info: 'A simple URL shortener made using Node.js, HTML, MongoDB and Express.',
        info2: 'A simple one day project',
        url: 'http://sh0r.tk',
        repo: 'https://github.com/shivsarthak/sh0r.tk', // if no repo, the button will not show up
    }
];

// CONTACT DATA
export const contactData = {
    cta: '',
    btn: '',
    email: 'me@shivsarthak.com',
};

// FOOTER DATA
export const footerData = {
    networks: [{
            id: nanoid(),
            name: 'linkedin',
            url: 'https://www.linkedin.com/in/shivsarthak/',
        },
        {
            id: nanoid(),
            name: 'github',
            url: 'https://github.com/shivsarthak',
        },
        {
            id: nanoid(),
            name: 'instagram',
            url: 'https://www.instagram.com/shivsarthak/',
        },
    ],
};