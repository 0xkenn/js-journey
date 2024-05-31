// currying

// const add = (a) => b => a + b;

// const addOne = add(1);

// console.log(addOne(10));

const players = [
    { age: 5, sport: "soccer", city: "Chicago", dateJoined: new Date('2021-01-20') },
    { age: 6, sport: "baseball", city: "Boulder", dateJoined: new Date('2019-12-30') },
    { age: 10, sport: "soccer", city: "Chicago", dateJoined: new Date('2020-11-12') },
    { age: 11, sport: "handball", city: "San Francisco", dateJoined: new Date('2020-08-21') },
    { age: 6, sport: "soccer", city: "Chicago", dateJoined: new Date('2021-07-06') },
    { age: 8, sport: "softball", city: "Boulder", dateJoined: new Date('2019-02-27') },
    { age: 7, sport: "tennis", city: "San Francisco", dateJoined: new Date('2019-05-31') },
    { age: 4, sport: "handball", city: "San Francisco", dateJoined: new Date('2018-03-10') }
]

const setPlayer = playerarr => key => value => playerarr.filter(x => x[key] === value);
const filterPlayers = setPlayer(players);
const filterPlayerSport = filterPlayers('sport');
const filterPlayerSoccer = filterPlayerSport('soccer');
const filterPlayerCity = filterPlayers('city');
const filterPlayerChicago = filterPlayerCity('Chicago');

const sortArrayByValue = sortArray => sortKey => {
    return sortArray.sort(function(a, b){
        if(a[sortKey] < b[sortKey]) { return -1; }
        if(a[sortKey] > b[sortKey]) { return 1; }
        return 0;
    });
}
 
const sortSanFrancisco = sortArrayByValue(filterPlayerChicago);
const sortSFByDateJoined = sortSanFrancisco("dateJoined");
console.log(sortSFByDateJoined);
