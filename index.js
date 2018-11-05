//TODO:make loading spinner;
//turn links at the top into a list.
//remove the status coloumn from study courses.
//Git is not controlled through C language it's cli

var md = window.markdownit();
var markdownItContainer = window.markdownitContainer
var gitRepo = "cv";
var gitUser = "theodore-q";

md.use(markdownItContainer, 'links', {

  validate: function(params) {
    return params.trim().match(/links/);
  }
});

md.use(markdownItContainer, 'tags', {

  validate: function(params) {
    return params.trim().match(/tags/);
  }
});

console.log(md.render(`::: tags
 * hey
 * you
 * get off my cloud
:::`));



$.ajax({
  url:
    "https://raw.githubusercontent.com/" +
    gitUser +
    "/" +
    gitRepo +
    "/master/README.md",
  success: function(result) {
    result = result.replace(
      "https://github.com/" + gitUser + "/" + gitRepo + "/blob",
      "https://raw.githubusercontent.com/" + gitUser + "/" + gitRepo
    ); //switchout images

    var resultHtml = md.render(result);
    setTimeout(function(){ 
      $("#content").html(resultHtml); 
    }, 2000);
    
  }
});
