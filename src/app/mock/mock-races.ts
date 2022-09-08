import { Race } from "./../race";

export const RACES: Race[] = [
    {id_race: 1, location: 'Rouen', date: new Date(), ponies: [
        {id: 1, name: 'rainbow', color: 'black', age: 6},
        {id: 2, name: 'nigthmare', color: 'white', age: 9},
        {id: 3, name: 'baby', color: 'butterscotch', age: 32},
        {id: 4, name: 'toto', color: 'chelou', age: 1}
    ]},
    {id_race: 2, location: 'Tokyo', date: new Date(), ponies: [
        {id: 1, name: 'rainbow', color: 'black', age: 6},
        {id: 2, name: 'nigthmare', color: 'white', age: 9},
        {id: 3, name: 'baby', color: 'butterscotch', age: 32},
        {id: 4, name: 'toto', color: 'chelou', age: 1}
    ]}
];