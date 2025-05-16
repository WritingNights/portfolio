import blog from "../Websites/MernBlog.png";
import amzn from "../Websites/Amazon.png";
import tic from "../Websites/Tic-Tac-Toe.png";
import univ from "../Websites/Universal.png";
import curr from "../Websites/Currency.png";
import network from "../Websites/Network.png";
import mail from "../Websites/Mail.png";
import comm from "../Websites/Commerce.png";
import wiki from "../Websites/Wiki.png";
import goog from "../Websites/Search.png";
import mine from "../Websites/Minesweeper.png";

import xo from "../icons/XO.png";
import bomb from "../icons/Bomb.png";
import sudokuIcon from "../icons/SudokuIcon.svg";

import netthumb from "../thumbnails/Network.svg";
import xothumb from "../thumbnails/XO thumbnail.png";
import minethumb from "../thumbnails/Minesweeper thumbnail.png";
import sudokuthumb from "../thumbnails/Sudoku.svg";

const websites = [
    {
      title: 'Network',
      personal: true,
      tools: ['HTML', 'CSS', 'JavaScript', 'Python', 'Django'],
      image: network,
      thumbnail: netthumb,
      description: [
        'Network is the beginnings of a social media app.',
        'My introduction to AJAX, I designed the original version in Python. This updated version comes with a fresh look and sleek animations.',
      ],
      gitLink: 'https://github.com/me50/WritingNights/tree/web50/projects/2020/x/network',
      youtubeLink: 'https://youtu.be/sDkqIoyUZ3M'
    },
    /*{
      title: 'Currency (CS50x final)',
      personal: true,
      tools: ['HTML', 'CSS', 'Python', 'Flask'],
      image: curr,
      description: [
        'My first personal project helped me understand the basics of Flask (my first framework) and utilize Python backend to handle unique user sessions.',
        'I based my project on the idea of building currency in a fluctuating market. In the background of the app, a function uses the time of day, day of the month, and month of the year to determine fluctuating prices.',
        'Its a basic application with very little variety, but a strong start.'
      ],
      gitLink: 'https://github.com/me50/WritingNights/tree/cs50/problems/2020/x/project',
      youtubeLink: 'https://youtu.be/PZjBfZdohSc'
    },
    {
      title: 'Search',
      personal: true,
      tools: ['HTML', 'CSS'],
      image: goog,
      description: [
        'This was my first project as a part of the CS50 Web course where I was tasked with recreating the Google search page.',
        'I made it using only HTML and CSS. This was my first experience with connecting search inputs, which google uses to create/filter each search.'
      ],
      gitLink: 'https://github.com/me50/WritingNights/tree/web50/projects/2020/x/search',
      youtubeLink: 'https://youtu.be/Mjt3Ene4XCc'
    },
    {
      title: 'Wiki',
      personal: true,
      tools: ['HTML', 'CSS', 'Python', 'Django'],
      image: wiki,
      description: [
        'With this project, I was tasked with using markdown to create a Wikipedia replica. I was my first exposure to markdown.',
        'I created a sidebar navigation with a search that looked for all instances of a string and not just exact matches.',
        'As well, users could also create their own entries converted from markdown, and edit existing ones too.'
      ],
      gitLink: 'https://github.com/me50/WritingNights/tree/web50/projects/2020/x/wiki',
      youtubeLink: 'https://youtu.be/-sxVXifkaOk'
    },
    {
      title: 'Commerce',
      personal: true,
      tools: ['HTML', 'CSS', 'Python', 'Django'],
      image: comm,
      description: [
        'I was tasked to create an eBay replica using the technologies they taught so far. This is where I learned a wider range of things about Django.',
        'I learned how to create/use the admin page and creating links using variables on templates.',
        'It was the first time I added user input options with a lot of ways to sort and track info per user.'
      ],
      gitLink: 'https://github.com/me50/WritingNights/tree/web50/projects/2020/x/commerce',
      youtubeLink: 'https://youtu.be/Rzd3jwOAF8Y'
    },
    {
      title: 'Mail',
      personal: true,
      tools: ['HTML', 'CSS', 'JavaScript', 'Python', 'Django'],
      image: mail,
      description: [
        'This project was my first deep dive into the connection between Javascript and the DOM.',
        'I also used AJAX to move the user around the page as they follow certain action buttons.'
      ],
      gitLink: 'https://github.com/me50/WritingNights/tree/web50/projects/2020/x/mail',
      youtubeLink: 'https://youtu.be/Rw2MzehrpVM'
    },
    {
      title: 'Universal: World Builder',
      personal: true,
      tools: ['HTML', 'CSS', 'JavaScript', 'Python', 'Django'],
      image: univ,
      description: [
        'My most recent project, and most complex, Universal is an app for those desinging a story world for any kind of thing. While it has basic features, the ability of the user to build out ideas is grand.',
        'I pushed Django templates to the limit (limit for me) to make two separate forms. Coupled my learning of React to do DOM rendering with vanilla JS while the Django database was scalable to match the user\'s needs.',
        'This project was a triumph of my CSS skills as I learned techniques to tagret elements with a few new psuedo-selectors.',
        'Another task was to make the pages mobile friendly, which pushed me to think about a new set of rules and restrictions for each screen size. Now I use mobile responsiveness in my current projects, as well as push for accessibility standards.'
      ],
      gitLink: 'https://github.com/me50/WritingNights/tree/web50/projects/2020/x/capstone',
      youtubeLink: 'https://youtu.be/D-I8_pMc8Co'
    },*/
    {
      title: 'Tic-Tac-Toe',
      game: true,
      tools: ['HTML', 'CSS', 'JavaScript', 'React'],
      thumbnail: xothumb,
      icon: xo,
      image: tic,
      description: [
        'The first project I made on my own in React after creating my original portfolio.',
        'I used a 2D array to store values of "X", "O", or "". When a box is clicked, that point in the array updates and in the state.',
        'My goal for this was to make something intuitive and clean.'
      ],
      gitLink: 'https://github.com/WritingNights/tic-tac-toe',
      youtubeLink: null
    },
    /*{
      title: 'Amazon Prime Sign-up Clone',
      personal: true,
      tools: ['HTML', 'CSS', 'JavaScript', 'React'],
      image: amzn,
      description: [
        'I built this project while being considered for a position at Amazon. It was a personal project to understand how the main pages worked for customers.',
        'I learned more about background-images and custom icons while also making more component-based elements.'
      ],
      gitLink: 'https://github.com/WritingNights/amazon',
      youtubeLink: null
    },
    {
      title: 'MERN-Stack Blog',
      personal: true,
      tools: ['HTML', 'CSS', 'JavaScript', 'React', 'Express', 'Node', 'MongoDB', 'GSAP'],
      image: blog,
      description: [
        'This was my first attempt at making a full stack application. I used a tutorial to learn the basics, but adjusted it for the needs of this project.',
        'The backend communicates with three collections on the database with full CRUD capabilities.',
        'The frontend uses animation to give a clean feel and complimenting colors to maintain brand.'
      ],
      gitLink: 'https://github.com/WritingNights/blog',
      youtubeLink: null
    },*/
    {
      title: 'Minesweeper',
      game: true,
      tools: ['HTML', 'CSS', 'JavaScript', 'React', 'GSAP'],
      thumbnail: minethumb,
      icon: bomb,
      image: mine,
      description: [
        'This version of minesweeper is fully keyboard accessible. The game is traditionally played with only the mouse. I didn\'t think that was enough.',
        'It was a challenge beyond what I\'ve created before to develop the level of interactivity.'
      ],
      gitLink: 'https://github.com/WritingNights/minesweeper',
      youtubeLink: null
    },/*
    {
      title: 'Sudoku',
      game: true,
      tools: ['HTML', 'CSS', 'JavaScript', 'React'],
      thumbnail: sudokuthumb,
      icon: sudokuIcon,
      image: '',
      description: [
        'A childhood passion, sudoku was a favored pasttime.',
        'Now '
      ],
      gitLink: '',
      youtubeLink: ''
    }*/
  ];

export default websites;