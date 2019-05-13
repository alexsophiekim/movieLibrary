
var movies = [
  {
    id:1,
    title: "Avengers Infinity War",
    year: 2018,
    director: ["Anthony Russo","Joe Russo"],
    bio: "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
    length: 149,
    poster:"infinityWar.jpg"
  },
  {
    id:2,
    title: "Get Out",
    year: 2017,
    director: "Jordan Peele",
    bio: "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.",
    length: 104,
    poster:"getout.jpg"
  },
  {
    id:3,
    title: "The Notebook",
    year: 2004,
    director: "Nick Cassavetes",
    bio: "A poor yet passionate young man falls in love with a rich young woman, giving her a sense of freedom, but they are soon separated because of their social differences.",
    length: 123,
    poster: "notebook.jpg"
  },
  {
    id:4,
    title: "Searching",
    year: 2018,
    director: "Aneesh Chaganty",
    bio: "After his 16-year-old daughter goes missing, a desperate father breaks into her laptop to look for clues to find her.",
    length: 102,
    poster: "searching.jpg"
  },
  {
    id:5,
    title: "La La Land",
    year: 2016,
    director:"Damien Chazelle" ,
    bio: "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.",
    length: 128,
    poster: "lalaland.jpg"
  },
  {
    id:6,
    title: "Coco",
    year: 2017,
    director:[" Lee Unkrich", "Adrian Molina"] ,
    bio: "Aspiring musician Miguel, confronted with his family's ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather, a legendary singer.",
    length: 105,
    poster: "coco.jpg"
  }
]


console.log(movies);


////// under var moviesList is for making a variable as whole write on the page///
var moivesList = document.getElementById('moivesList');

for (var i = 0; i < movies.length; i++) {
  // console.log(movies[i]);
  var movie = movies[i];
  // console.log(movie.title);
  //////////// ------- under document one is for checking as basic way without styling
  // document.getElementById('moviesList').innerHTML += '<P>'+movie.title+'</P>';

  //////////// ------- under tring styling  ///
  // document.getElementById('moviesList').innerHTML += '<div class="col-12 col-sm-6 col-md-4">';

  // document.getElementById('moviesList').innerHTML += '</div>';


  //////////// -------- way#1 under simple way  instead of above code based on the bootstrap ///

  // moviesList.innerHTML+='<div class="col-12 col-sm-6 col-md-4">';
  //   moviesList.innerHTML += '<div class="card">';
  //
  //   moviesList.innerHTML += '</div>';
  // moviesList.innerHTML+='</div>';


  //////////// -------- way#2 kind of make a one long string for making smaller code;

  // var movieCard = '<div class="col-12 col-sm-6 col-md-4">';
  //   movieCard += '<div class="card">';
  //       movieCard+='<div class="card-body">';
  //         movieCard+= '<h5 class="card-title">'+movie.title+'</h5>';
  //       movieCard+= '</div>';
  //   movieCard += '</div>';
  // movieCard +='</div>';
  //
  // console.log(movieCard);
  // moviesList.innerHTML += movieCard;

  //////////// -------- way#3 shorter but exactly same result.
  var columns = document.createElement('div');
  var columnsAttr = document.createAttribute("class");
  columnsAttr. value = 'col-12 col-sm-6 col-md-4';
  columns.setAttributeNode(columnsAttr);

  var card = document.createElement('div');
  var cardAttr = document.createAttribute('class');
  cardAttr.value = 'card';
  card.setAttributeNode(cardAttr);

  var cardBody = document.createElement('div');
  var cardBodyAttr = document.createAttribute('class');
  cardBodyAttr.value = 'card-body';
  cardBody.setAttributeNode(cardBodyAttr);


  var cardTitle = document.createElement('h5');
  var cardTitleAttr = document.createAttribute('class');
  cardTitleAttr.value = 'card-title';
  cardTitle.setAttributeNode(cardTitleAttr);
  var cardTitleText = document.createTextNode(movie.title);
  cardTitle.appendChild(cardTitleText);
  cardBody.appendChild(cardTitle);
  //////// do it backward
  card.appendChild(cardBody);
  columns.appendChild(card);

  ///////// append means add to //
  moviesList.appendChild(columns);


}
