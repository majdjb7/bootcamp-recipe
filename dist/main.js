
let wasAPICalled = false

$("#submit").on("click", function () {
    wasAPICalled = true
    let ingredient = $("#ingredient").val()

    $.get(`recipes/${ingredient}`, function (response) {
        let dataAboutTeams = {"recipes": response}

        if(wasAPICalled == true) {
            setTimeout(function() {
                const render = new Renderer(dataAboutTeams);
                render.renderResultsForClient();
                }, 500);
            ;}
      });
})


$(document).on('click','.imageClick',function() {
    let relevantInputValue = $(this).closest(".mealDiv").find("li")[0].innerHTML;
    alert(`THIS is the first ingredient: ${relevantInputValue}`)

})