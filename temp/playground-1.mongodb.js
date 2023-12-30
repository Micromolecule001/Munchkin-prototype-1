

// Select the database to use
const db = client.db('Munchkin');

// Create the "Races" collection and insert the races
db.collection('Races').insertMany([
    {
        raceId: 1,
        name: 'Human',
        abilities: 'None',
        image: '*link to image*',
        cardType: 'door',
    },
    {
        raceId: 2,
        name: 'Elf',
        abilities: ['1 run away', '1 level up for the help to another player'],
        image: '*link to image*',
        cardType: 'door',
    },
    {
        raceId: 3,
        name: 'Dwarf',
        abilities: ['6 card in hand', 'many isBig items'],
        image: '*link to image*',
        cardType: 'door',
    },
    {
        raceId: 4,
        name: 'Halfling',
        abilities: [
            'double price first item each turn',
            'reroll dice to run away for 1 card',
        ],
        image: '*link to image*',
        cardType: 'door',
    },
]);

// Create the "Classes" collection and insert the classes
db.collection('Classes').insertMany([
    {
        classId: 1,
        name: 'Warrior',
        abilities: ['+1 bonus for each big item'],
        image: '*link to image*',
        cardType: 'door',
    },
    {
        classId: 2,
        name: 'Thief',
        abilities: ['steal item from another player'],
        image: '*link to image*',
        cardType: 'door',
    },
    {
        classId: 3,
        name: 'Wizard',
        abilities: ['+5 to fight with monster'],
        image: '*link to image*',
        cardType: 'door',
    },
    {
        classId: 4,
        name: 'Cleric',
        abilities: ['+3 to fight with undead monster'],
        image: '*link to image*',
        cardType: 'door',
    },
]);

// Close the connection
client.close();

