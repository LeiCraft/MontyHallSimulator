
class MontyHallSimulator {

    static simulate(rounds = 100000) {

        let stayWins = 0;
        let switchWins = 0;

        for (let i = 0; i < rounds; i++) {
            const doors = [0, 1, 2];
            const carDoor = doors[Math.floor(Math.random() * 3)];
            const playerChoice = doors[Math.floor(Math.random() * 3)];

            // Moderator opening the door
            const remainingDoors = doors.filter(door => door !== playerChoice && door !== carDoor);
            const revealedDoor = remainingDoors[Math.floor(Math.random() * remainingDoors.length)];

            // wenn player stays
            if (playerChoice === carDoor) {
                stayWins++;
            }

            // wenn player switches
            const switchChoice = doors.find(door => door !== playerChoice && door !== revealedDoor);
            if (switchChoice === carDoor) {
                switchWins++;
            }
        }

        console.log(`After ${rounds} Rounds:`);
        console.log(`- chance of winning by staying: ${(stayWins / rounds * 100).toFixed(2)}%`);
        console.log(`- Chance to win when switching: ${(switchWins / rounds * 100).toFixed(2)}%`);
    }
}


MontyHallSimulator.simulate(1_000_000);
