
class Renderer {
    constructor(data) {
      this.data = data;
    }
  
    renderResults() {
      const ourData = this.data;
  
        $(".RecipesList").empty();
        var source = $('#ingredients-template').html();
        var template = Handlebars.compile(source);
        var newHTML = template(ourData);
        $('.RecipesList').append(newHTML);
    }
  }