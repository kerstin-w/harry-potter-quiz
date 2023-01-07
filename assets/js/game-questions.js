'use strict';
/**
 * Question array for each Hogwards House
 */
const questionsArray = {
    'gryffindor': [{
            question: 'Who was the founder of the house of Gryffindor?',
            choice1: 'Godric Gryffindor',
            choice2: 'Ginerva Gryffindor',
            choice3: 'Garvin Gryffindor',
            choice4: 'Griselda Gryffindor',
            correctAnswer: 1
        },
        {
            question: 'Which animal belongs to the house of Gryffindor?',
            choice1: 'assets/images/game-questions/animal-2.png',
            choice2: 'assets/images/game-questions/animal-3.png',
            choice3: 'assets/images/game-questions/animal-4.png',
            choice4: 'assets/images/game-questions/animal-1.png',
            correctAnswer: 4
        },
        {
            question: 'Which on is the Gryffindor resident ghost?',
            choice1: 'assets/images/game-questions/headlessnick.webp',
            choice2: 'assets/images/game-questions/fatfair.webp',
            choice3: 'assets/images/game-questions/baron.webp',
            choice4: 'assets/images/game-questions/myrtle.webp',
            correctAnswer: 1
        },
        {
            question: 'Who is the Gryffindor Head of House at Hogwarts today?',
            choice1: 'Professor Sybill Trelawney',
            choice2: 'Professor Minerva McGonagall',
            choice3: 'Professor Pomona Sprout',
            choice4: 'Professor Quirrell',
            correctAnswer: 2
        },
        {
            question: 'Where is the entrance to the Gryffindor common room?',
            choice1: 'Behind a stone wall in the dungeons',
            choice2: 'In the astronomy tower',
            choice3: 'Behind the portrait of the Fat Lady',
            choice4: 'Next to a bookshelf in the library',
            correctAnswer: 3
        },
        {
            question: 'Who was the captain of the Gryffindor Quidditch team between 1991 and 1992?',
            choice1: 'Oliver Wood',
            choice2: 'Harry Potter',
            choice3: 'Katie Bell',
            choice4: 'Angelina Johnson',
            correctAnswer: 1
        },
        {
            question: "How many times did the Gryffindor win the Quidditch cup during Harry Potter's school days?",
            choice1: '4',
            choice2: '3',
            choice3: '2',
            choice4: '5',
            correctAnswer: 2
        },
        {
            question: "Which of these students is NOT a Gryffindor?",
            choice1: 'Lavender Brown',
            choice2: 'Cormac McLaggen',
            choice3: 'Dean Thomas',
            choice4: 'Cho Chang',
            correctAnswer: 4
        },
        {
            question: "What safety mechanism is activated when the boys try to sneak into the girls' dormitory?",
            choice1: 'The stairs become a slide',
            choice2: 'A loud bell rings',
            choice3: 'An invisible wall appears',
            choice4: 'A light shock spell is released',
            correctAnswer: 1
        },
        {
            question: "Which wizard/witch from Gryffindor House owned the Sorting Hat before it was bewitched?",
            choice1: 'Albus Dumbledore',
            choice2: 'James Potter',
            choice3: 'Minerva McGonagall',
            choice4: 'Godric Gryffindor',
            correctAnswer: 4
        }
    ],
    'huffelpuff': [{
            question: 'What was the name of the founder of Hufflepuff House?',
            choice1: 'Helga Huffelpuff',
            choice2: 'Helena Huffelpuff',
            choice3: 'Hestia Huffelpuff',
            choice4: 'Helia Huffelpuff',
            correctAnswer: 1
        },
        {
            question: 'Which animal belongs to the house of Huffelpuff?',
            choice1: 'assets/images/game-questions/animal-2.png',
            choice2: 'assets/images/game-questions/animal-3.png',
            choice3: 'assets/images/game-questions/animal-4.png',
            choice4: 'assets/images/game-questions/animal-1.png',
            correctAnswer: 1
        },
        {
            question: 'Who is the head of the Hufflepuff house?',
            choice1: 'Professor Minerva McGonagall',
            choice2: 'Pomona Sprout',
            choice3: 'Professor Filius Flitwick',
            choice4: 'Salazar Slytherin',
            correctAnswer: 2
        },
        {
            question: 'Which on is the Hufflepuff resident ghost?',
            choice1: 'assets/images/game-questions/headlessnick.webp',
            choice2: 'assets/images/game-questions/fatfair.webp',
            choice3: 'assets/images/game-questions/baron.webp',
            choice4: 'assets/images/game-questions/myrtle.webp',
            correctAnswer: 2
        },
        {
            question: 'Which Quidditch position did their captain Cedric Diggory play?',
            choice1: 'Seeker',
            choice2: 'Chaser',
            choice3: 'Beater',
            choice4: 'Keeper',
            correctAnswer: 1
        },
        {
            question: 'Where in Hogwarts is the Hufflepuff common room?',
            choice1: 'Behind the Gryffindor tower',
            choice2: 'Above the main entrance',
            choice3: 'Next to the kitchen in the basement',
            choice4: 'Next to the Whomping Willow',
            correctAnswer: 3
        },
        {
            question: "Where was Helga Hufflepuff's golden chalice kept?",
            choice1: "In Albus Dumbledore's safe",
            choice2: "Bellatrix Lestrange's vault at Gringotts bank",
            choice3: 'Buried in the Hogwarts gardens',
            choice4: 'Up in the branches of the Whomping Willow',
            correctAnswer: 2
        },
        {
            question: 'Which of the following people are not in Hufflepuff house?',
            choice1: 'Luna Lovegood',
            choice2: 'Nymphadora Tonks',
            choice3: 'Hannah Abbott',
            choice4: 'Newt Scamander',
            correctAnswer: 1
        },
        {
            question: "What happens to people if they enter the Hufflepuff common room when they're not supposed to?",
            choice1: 'A ghost chases them away',
            choice2: 'They get covered in vinegar',
            choice3: 'They fall through a trapdoor',
            choice4: 'Nothing',
            correctAnswer: 2
        },
        {
            question: 'In which film does Hufflepuffer Newt Scamander appear?',
            choice1: 'Harry Potter and the Prisoner of Azkaban',
            choice2: 'Fantastic Beasts and Where to Find Them',
            choice3: "Harry Potter and the Philosopher's Stone",
            choice4: 'Harry Potter and the Half-Blood Prince',
            correctAnswer: 1
        }
    ],
    'ravenclaw': [{
            question: 'Which animal belongs to the house of Ravenclaw?',
            choice1: 'assets/images/game-questions/animal-2.png',
            choice2: 'assets/images/game-questions/animal-3.png',
            choice3: 'assets/images/game-questions/animal-4.png',
            choice4: 'assets/images/game-questions/animal-1.png',
            correctAnswer: 2
        },
        {
            question: "What are Ravenclaw's house colours?",
            choice1: 'Scarlet and gold',
            choice2: 'Blue and bronze (or grey in the films)',
            choice3: 'Red and white',
            choice4: 'Black and pink',
            correctAnswer: 2
        },
        {
            question: "What's the name of the founder of Ravenclaw?",
            choice1: 'Joanne Ravenclaw',
            choice2: 'Rowena Ravenclaw',
            choice3: 'Rita Ravenclaw',
            choice4: 'Ray Von Klaw',
            correctAnswer: 2
        },
        {
            question: "What's the name of the ghost who roams the Ravenclaw common room?",
            choice1: 'The Grey Lady',
            choice2: 'The Fat Friar',
            choice3: 'Nearly Headless Nick',
            choice4: 'Casper',
            correctAnswer: 1
        },
        {
            question: 'Which member of Gryffindor was almost placed in Ravenclaw?',
            choice1: 'assets/images/game-questions/harrypotter.webp',
            choice2: 'assets/images/game-questions/neville.webp',
            choice3: 'assets/images/game-questions/ronweasley.webp',
            choice4: 'assets/images/game-questions/hermione.webp',
            correctAnswer: 4
        },
        {
            question: 'What characteristics are Ravenclaw students known for?',
            choice1: 'Hard work, patience, justice, and loyalty',
            choice2: 'Wisdom, cleverness, and wit',
            choice3: 'Courage, bravery, nerve, and chivalry',
            choice4: 'Ambition, shrewdness and cunning',
            correctAnswer: 2
        },
        {
            question: 'On her Chocolate Frog card, what is Rowena Ravenclaw described as?',
            choice1: 'A bit of a joker',
            choice2: 'The most brilliant witch of her time',
            choice3: 'A great cook',
            choice4: 'A kind, gentle person',
            correctAnswer: 2
        },
        {
            question: "What's the name of the Ravenclaw professor who predicted the birth of the Chosen One, Harry Potter?",
            choice1: 'Sybill Trelawney',
            choice2: 'Ignatia Wildsmith',
            choice3: 'Millicent Bagnold',
            choice4: 'Garrick Ollivander',
            correctAnswer: 1
        },
        {
            question: "What role did Luna Lovegood play in Quidditch?",
            choice1: 'Seeker',
            choice2: 'Beater',
            choice3: 'Match commentator',
            choice4: 'Keeper',
            correctAnswer: 3
        },
        {
            question: "Which Ravenclaw excelled in potions?",
            choice1: 'Myrtle Warren',
            choice2: 'Laverne de Montmorency',
            choice3: 'Millicent Bagnold',
            choice4: 'Albus Dumbledore',
            correctAnswer: 2
        },
    ],
    'slytherin': [{
        question: 'Who is the founder of the house of Slytherin?',
        choice1: 'Keith Slytherin',
        choice2: 'Salazar Slytherin',
        choice3: 'Severus Slytherin',
        choice4: 'Thomas Slytherin',
        correctAnswer: 2
    },
    {
        question: 'Which of these people was not a head of Slytherin house?',
        choice1: 'Severus Snape',
        choice2: 'Salazar Slytherin',
        choice3: 'Horace Slughorn',
        choice4: 'Albus Dumbledore',
        correctAnswer: 4
    },
    {
        question: 'What qualities do Slytherin students possess?',
        choice1: 'Ambition, shrewdness and cunning',
        choice2: 'Courage, bravery, nerve and chivalry',
        choice3: 'Hard work, patience, justice, and loyalty',
        choice4: 'Intelligence, creativity, learning, and wit',
        correctAnswer: 1
    },
    {
        question: 'Where is the Slytherin common room located?',
        choice1: 'West Tower',
        choice2: 'Dark Tower',
        choice3: 'In the dungeons of Hogwarts Castle and underneath the Black Lake',
        choice4: 'Turris Magnus',
        correctAnswer: 3
    },
    {
        question: 'In the French translation of the Harry Potter books, what is Slytherin called?',
        choice1: "Un cochon d'Inde",
        choice2: 'Serpentard',
        choice3: 'Un perroquet',
        choice4: 'Un lapin noir',
        correctAnswer: 2
    },
    {
        question: 'Which famous wizard was part of Slytherin house?',
        choice1: 'Doctor Strange',
        choice2: 'Merlin',
        choice3: 'Gandalf',
        choice4: 'The Crimson King',
        correctAnswer: 2
    },
    {
        question: 'Which animal belongs to the house of Stlytherin?',
        choice1: 'assets/images/game-questions/animal-2.png',
        choice2: 'assets/images/game-questions/animal-3.png',
        choice3: 'assets/images/game-questions/animal-4.png',
        choice4: 'assets/images/game-questions/animal-1.png',
        correctAnswer: 3
    },
    {
        question: 'Which on is the Slytherin resident ghost?',
        choice1: 'assets/images/game-questions/headlessnick.webp',
        choice2: 'assets/images/game-questions/fatfair.webp',
        choice3: 'assets/images/game-questions/baron.webp',
        choice4: 'assets/images/game-questions/myrtle.webp',
        correctAnswer: 3
    },
    {
        question: "What animal is featured on Salazar's locket, which became Voldemort's third horcrux?",
        choice1: 'Lion',
        choice2: 'Badger',
        choice3: 'Serpent',
        choice4: 'Raven',
        correctAnswer: 3
    },
    {
        question: 'Who was not part of Slytherin house?',
        choice1: 'Narcissa Malfoy',
        choice2: 'Bellatrix Lestrange',
        choice3: 'Dolores Umbridge',
        choice4: 'Sirius Black',
        correctAnswer: 4
    },
]
};