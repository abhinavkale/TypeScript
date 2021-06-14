// npx create-react-app ./ --template typescript
console.log('Hello World');
// Implicit Types
var helloType = "Hello TypeScript";
// helloType = 5;
// Explicit Types
var firstName = "XYZ";
var age = 20;
var exampleOne = ['Hello', 20];
// let exampleTwo: stringAndNumber = ['Hello', "20"]; 
// Enums
var ICCTournament;
(function (ICCTournament) {
    ICCTournament[ICCTournament["ICC_CricketWorldCup"] = 0] = "ICC_CricketWorldCup";
    ICCTournament[ICCTournament["ICC_WorldT20"] = 1] = "ICC_WorldT20";
    ICCTournament[ICCTournament["ICC_ChampionsTrophy"] = 2] = "ICC_ChampionsTrophy";
    ICCTournament[ICCTournament["ICC_WorldTestChampionship"] = 3] = "ICC_WorldTestChampionship";
    ICCTournament[ICCTournament["ICC_WomensWorldCup"] = 4] = "ICC_WomensWorldCup";
    ICCTournament[ICCTournament["ICC_WomensWorldT20"] = 5] = "ICC_WomensWorldT20";
})(ICCTournament || (ICCTournament = {}));
// usage
var june2021 = ICCTournament.ICC_WorldTestChampionship; // 3
var user = {
    name: "Rohit Sharma",
    id: 45
    // age: 32
};
var oddOne = 5;
// const oddTwo: OddNumberUnderTen = 6;
var getLength = function (param) {
    return param.length;
};
getLength('test'); // 4
getLength(['test', 'test1']); //2
// getLength(5);
