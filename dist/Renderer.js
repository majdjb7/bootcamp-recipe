
var source = $('#ingredients-template').html();
var template = Handlebars.compile(source);

class Renderer {
    constructor(data) {
      this.data = data;
    }
  
    renderResultsForClient() {
        const mealsInfo = this.data;
        $(".RecipesList").empty();
        var newHTML = template(mealsInfo);
        $('.RecipesList').append(newHTML);
    }
}