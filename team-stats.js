const team = {
    _players: [
      {
        firstName: "Ken",
        lastName: "Yu",
        age: 20,
      },
      {
        firstName: "Bob",
        lastName: "Mocs",
        age: 22,
      },
      {
        firstName: "Jet",
        lastName: "Mendoza",
        age: 21,
      },
    ],
  
    _games: [
      {
        opponent: "Lakers",
        teamPoints: 100,
        opponentPoints: 99,
      },
      {
        opponent: "Wolves",
        teamPoints: 150,
        opponentPoints: 124,
      },
      {
        opponent: "Piston",
        teamPoints: 49,
        opponentPoints: 65,
      },
    ],
  
    //getter
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
    addPlayer(newFirstName, newLastName, newAge) {
      const player = {
        newFirstName,
        newLastName,
        newAge,
      };
      this._players.push(player);
    },
    addGame(newOpponent, newTeampoints, newOpponentPoints) {
      const game = {
        newOpponent,
        newTeampoints,
        newOpponentPoints,
      };
      this._games.push(game);
    },
  };
  team.addPlayer("Bugs", "Bunny", 76);
  team.addGame("Titans", 100, 98);
  console.log(team);
  