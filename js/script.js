
var movies = [
  {
    id:1,
    title: "Avengers Infinity War",
    year: 2018,
    director: ["Anthony Russo","Joe Russo"],
    bio: "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
    length: 149,
    poster:"infinityWar.jpg",
    genre: ["fantasy", "sci-fi"]
  },
  {
    id:2,
    title: "Get Out",
    year: 2017,
    director: "Jordan Peele",
    bio: "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.",
    length: 104,
    poster:"getout.jpg",
    genre: ["mystery", "thriller"]
  },
  {
    id:3,
    title: "The Notebook",
    year: 2004,
    director: "Nick Cassavetes",
    bio: "A poor yet passionate young man falls in love with a rich young woman, giving her a sense of freedom, but they are soon separated because of their social differences.",
    length: 123,
    poster: "notebook.jpg",
    genre: ["drama", "romance"]
  },
  {
    id:4,
    title: "Searching",
    year: 2018,
    director: "Aneesh Chaganty",
    bio: "After his 16-year-old daughter goes missing, a desperate father breaks into her laptop to look for clues to find her.",
    length: 102,
    poster: "searching.jpg",
    genre: ["mystery", "thriller"]
  },
  {
    id:5,
    title: "La La Land",
    year: 2016,
    director:"Damien Chazelle" ,
    bio: "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.",
    length: 128,
    poster: "lalaland.jpg",
    genre: ["comedy", "drama","music"]
  },
  {
    id:6,
    title: "Coco",
    year: 2017,
    director:[" Lee Unkrich", "Adrian Molina"] ,
    bio: "Aspiring musician Miguel, confronted with his family's ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather, a legendary singer.",
    length: 105,
    poster: "coco.jpg",
    genre: ["fantasy", "mystery"]
  },
  {
    id:7,
    title: "Avengers: Endgame",
    year: 2019,
    director: ["Anthony Russo","Joe Russo"],
    bio: "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to undo Thanos' actions and restore order to the universe.",
    length: 181,
    poster:"endgame.jpg",
    genre: ["action", "adventure", "sci-fi"]
  },
  {
    id:8,
    title: "How to Train Your Dragon: The Hidden World",
    year: 2019,
    director: "Dean DeBlois",
    bio: "When Hiccup discovers Toothless isn't the only Night Fury, he must seek 'The Hidden World', a secret Dragon Utopia before a hired tyrant named Grimmel finds it first.",
    length: 104,
    poster:"dragon.jpg",
    genre: ["animation", "action", "adventure"]
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


  //////////// -------- way#1 under simple way instead of above code based on the bootstrap ///

  // moviesList.innerHTML+='<div class="col-12 col-sm-6 col-md-4">';
  //   moviesList.innerHTML += '<div class="card">';
  //
  //   moviesList.innerHTML += '</div>';
  // moviesList.innerHTML+='</div>';


  //////////// -------- way#2 kind of make a one long string for making smaller code; giant string version.
  var genreClass ='';
  var text ='';
  console.log(movie.genre[0]);
  if (movie.genre[0] === 'fantasy') {
      genreClass = 'border-primary';
      text = 'Fantasy';
  } else if (movie.genre[0] === 'drama') {
      genreClass ='border-success';
      text = 'Drama';
  } else if (movie.genre[0] === 'mystery') {
      genreClass = 'border-danger';
      text = 'Mystery';
  } else if (movie.genre[0]==='comedy') {
      genreClass ='border-warning';
      text = 'Comedy';
  } else{
    genreClass='border-dark';
    text = 'Other';
  }
  /////////////// sorting genre as border-colour, also if I want to add icon or tag thing I can do it inside of if statement .


  var movieCard = '<div class="col-12 col-sm-6 col-md-3 mb-3 text-center ">';
    ////// way#1 movieCard += '<div class="movieThumb card '+genreClass+' " onclick="showMoreMovie();">';
    movieCard += '<div class="movieThumb movieThumb2 card '+genreClass+' ">';

      movieCard += '<img src="img/'+movie.poster+'" class="card-img-top" alt="">';
        movieCard+='<div class="card-body">';
          movieCard+= '<h5 class="card-title">'+movie.title+'</h5>';
          movieCard+= '<p>'+text+'</p>';
        movieCard+= '</div>';
    movieCard += '</div>';
  movieCard +='</div>';
  ///////////////  following bootstrap card source : card >img > card-body > card-title > card -text>

  console.log(movieCard);
  moviesList.innerHTML += movieCard;

  //////////// -------- way#3 create variable but exactly same result with way#2
  // var columns = document.createElement('div');
  // var columnsAttr = document.createAttribute("class");
  // columnsAttr. value = 'col-12 col-sm-6 col-md-4';
  // columns.setAttributeNode(columnsAttr);
  //
  // var card = document.createElement('div');
  // var cardAttr = document.createAttribute('class');
  // cardAttr.value = 'card';
  // card.setAttributeNode(cardAttr);
  //
  // var cardBody = document.createElement('div');
  // var cardBodyAttr = document.createAttribute('class');
  // cardBodyAttr.value = 'card-body';
  // cardBody.setAttributeNode(cardBodyAttr);
  //
  //
  // var cardTitle = document.createElement('h5');
  // var cardTitleAttr = document.createAttribute('class');
  // cardTitleAttr.value = 'card-title';
  // cardTitle.setAttributeNode(cardTitleAttr);
  // var cardTitleText = document.createTextNode(movie.title);
  //
  // /////////// do it backward  ///////// append means add to //
  // cardTitle.appendChild(cardTitleText);
  // cardBody.appendChild(cardTitle);
  // card.appendChild(cardBody);
  // columns.appendChild(card);
  //
  // moviesList.appendChild(columns);
}


function showMoreMovie(){
  // console.log("You have clicked on a movie");

  ////////////////// Q.javascript how to change div style? googling!  find answer from stackoverflow
   document.getElementById("moviePopup").style.display="flex";
  ////////////////// Q.javascript how to change style of body find answer from W3school
   document.body.style.overflow = "hidden";
}

////// caution ::::: getElementsByClassName - Elements (all Elements) also, movieThumbs is prevent both working other movieThumb;
var movieThumbnails = document.getElementsByClassName('movieThumb2');
// console.log(movieThumbnails);
for (var i = 0; i < movieThumbnails.length; i++) {
  // console.log(movieThumbnails[i]);
    movieThumbnails[i].onclick = showMoreMovie;
   //  movieThumbnails[i].onclick = function(){
   //    showMoreMovie();
   //  }
   //
}



document.getElementById('close').onclick = function(){
     document.getElementById("moviePopup").style.display="none";
     document.body.style.overflow = "scroll";
  }
