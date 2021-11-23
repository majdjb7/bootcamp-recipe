
let wasAPICalled = false

$("#submit").on("click", function () {
    wasAPICalled = true
    let ingredient = $("#ingredient").val()


    $.get(`recipes/${ingredient}`, function (response) {
        let dataAboutTeams = {"recipes": response}

        if(wasAPICalled == true) {
            setTimeout(function() {
                const render = new Renderer(dataAboutTeams);
                console.log(dataAboutTeams)
                render.renderResults();

                }, 500);
            ;}
      });




})