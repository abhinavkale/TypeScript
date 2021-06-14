// npx create-react-app ./ --template typescript

console.log('Hello World');


// Implicit Types
let helloType = "Hello TypeScript";
// helloType = 5;


// Explicit Types
let firstName: string = "XYZ";
let age: number = 20;
// firstName = 20;
// age = 'name';


// Tuple
type stringAndNumber = [string, number];

let exampleOne: stringAndNumber = ['Hello', 20];
// let exampleTwo: stringAndNumber = ['Hello', "20"]; 


// Enums
enum ICCTournament {
    ICC_CricketWorldCup,    // 0
    ICC_WorldT20,           // 1
    ICC_ChampionsTrophy,
    ICC_WorldTestChampionship,
    ICC_WomensWorldCup,
    ICC_WomensWorldT20
}

// usage
var june2021 = ICCTournament.ICC_WorldTestChampionship; // 3


// Interface
interface User {
    name: string;   //can use semi-colon
    id: number;
}

const user: User = {
    name: "Rohit Sharma",
    id: 45
    // age: 32
}


// Composing types (Union)
type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type OddNumberUnderTen = 1 | 3 | 5 | 7 | 9;

const oddOne: OddNumberUnderTen = 5;
// const oddTwo: OddNumberUnderTen = 6;

const getLength = (param: string | string[]) => {
    return param.length;
}

getLength('test');  // 4
getLength(['test', 'test1']);  //2
// getLength(5);






