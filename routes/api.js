const express = require('express')
const urllib = require('urllib')

const router = express.Router()

const teamToIDs = {
    "lakers": "1610612747",
    "warriors": "1610612744",
    "heat": "1610612748",
    "suns": "1610612756"
}



router.get('/sanity', function (request, response) {

    response.send("OK")

    
})

router.get('/recipes/:ingredient', function (request, response) {
    const ingredient = request.params.ingredient
    
    urllib.request(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}`, function (err, data, res) {
        const recipeData = data.toString()
        const jsonData = JSON.parse(recipeData)

        const resultsNeeded = jsonData.results.map((item) => {
            return {
                ingredients: item.ingredients,
                title: item.title,
                thumbnail: item.thumbnail,
                href: item.href
            }
        })
        response.send(resultsNeeded)
    });
    
})



router.get('/teams/:teamName', function (request, response) {
    const myTeam = request.params.teamName
    const myTeamId = teamToIDs[myTeam]
    
    urllib.request('http://data.nba.net/10s/prod/v1/2018/players.json', function (err, data, res) {
        const teamData = data.toString()
        const jsonData = JSON.parse(teamData)

        const matchingTeamName = (t) => ( t.teamId === myTeamId && t.isActive == true)
        let allPlayers = jsonData.league.standard.filter(matchingTeamName)

        const finalTeamInfo = allPlayers.map((player) => {
            return {
                firstName: player.firstName,
                lastName: player.lastName,
                jersey: player.jersey,
                position: player.pos,
                photo: `https://nba-players.herokuapp.com/players/${player.lastName}/${player.firstName}`
            }
        })
        response.send(finalTeamInfo)
    });
    
})

module.exports = router