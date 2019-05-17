
var movies = [
  {
    id:1,
    title: "Avengers Infinity War",
    year: 2018,
    director: ["Anthony Russo","Joe Russo"],
    bio: "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
    movieLength: 149,
    poster:"infinityWar.jpg",
    genre: ["fantasy", "sci-fi"]
  },
  {
    id:2,
    title: "Get Out",
    year: 2017,
    director: ["Jordan Peele"],
    bio: "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.",
    movieLength: 104,
    poster:"getout.jpg",
    genre: ["mystery", "thriller"]
  },
  {
    id:3,
    title: "The Notebook",
    year: 2004,
    director: ["Nick Cassavetes"],
    bio: "A poor yet passionate young man falls in love with a rich young woman, giving her a sense of freedom, but they are soon separated because of their social differences.",
    movieLength: 123,
    poster: "notebook.jpg",
    genre: ["drama", "romance"]
  },
  {
    id:4,
    title: "Searching",
    year: 2018,
    director: ["Aneesh Chaganty"],
    bio: "After his 16-year-old daughter goes missing, a desperate father breaks into her laptop to look for clues to find her.",
    movieLength: 102,
    poster: "searching.jpg",
    genre: ["mystery", "thriller"]
  },
  {
    id:5,
    title: "La La Land",
    year: 2016,
    director:["Damien Chazelle"],
    bio: "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.",
    movieLength: 128,
    poster: "lalaland.jpg",
    genre: ["comedy", "drama","music"]
  },
  {
    id:6,
    title: "Coco",
    year: 2017,
    director:["Lee Unkrich", "Adrian Molina"] ,
    bio: "Aspiring musician Miguel, confronted with his family's ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather, a legendary singer.",
    length: 105,
    poster: "coco.jpg",
    genre: ["fantasy", "mystery","animation"]
  },
  {
    id:7,
    title: "Avengers: Endgame",
    year: 2019,
    director: ["Anthony Russo","Joe Russo"],
    bio: "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to undo Thanos' actions and restore order to the universe.",
    movieLength: 181,
    poster:"endgame.jpg",
    genre: ["sci-fi","action", "adventure"]
  },
  {
    id:8,
    title: "How to Train Your Dragon: The Hidden World",
    year: 2019,
    director: ["Dean DeBlois"],
    bio: "When Hiccup discovers Toothless isn't the only Night Fury, he must seek 'The Hidden World', a secret Dragon Utopia before a hired tyrant named Grimmel finds it first.",
    movieLength: 104,
    poster:"dragon.jpg",
    genre: ["animation", "action", "adventure"]
  },
  {
    id:9,
    title: "Amy",
    year: 2015,
    director: ["Asif Kapadia"],
    bio: "Archival footage and personal testimonials present an intimate portrait of the life and career of British singer/songwriter Amy Winehouse.",
    movieLength: 128,
    poster:"amy.jpg",
    genre: ["music", "biography", "documentary "]
  },
  {
    id:10,
    title: "Interstellar",
    year: 2014,
    director: ["Christopher Nolan"],
    bio: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    movieLength: 169,
    poster:"interstellar.jpg",
    genre: ["adventure", "drama", "sci-fi"]
  },
  {
    id:11,
    title: "Venom",
    year: 2018,
    director: ["Ruben Fleischer"],
    bio: "A failed reporter is bonded to an alien entity, one of many symbiotes who have invaded Earth. But the being takes a liking to Earth and decides to protect it.",
    movieLength: 112,
    poster:"venom.jpg",
    genre: ["thriller", "action", "sci-fi"]
  },
  {
    id:12,
    title: "The Hangover part 3",
    year: 2013,
    director: ["Todd Phillips"],
    bio: "When one of their own is kidnapped by an angry gangster, the Wolf Pack must track down Mr. Chow, who has escaped from prison and is on the run.",
    movieLength: 100,
    poster:"hang3.jpg",
    genre: ["adventure", "crime", "comedy"]
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
  var genreClass = getGenreColour(movie.genre[0]);
  // var text ='';
  // console.log(movie.genre[0]);
  // if (movie.genre[0] === 'fantasy') {
  //     genreClass = 'border-primary';
  //     text = 'Fantasy';
  // } else if (movie.genre[0] === 'drama') {
  //     genreClass ='border-success';
  //     text = 'Drama';
  // } else if (movie.genre[0] === 'mystery') {
  //     genreClass = 'border-danger';
  //     text = 'Mystery';
  // } else if (movie.genre[0]==='comedy') {
  //     genreClass ='border-warning';
  //     text = 'Comedy';
  // } else{
  //   genreClass='border-dark';
  //   text = 'Other';
  // }
  /////////////// sorting genre as border-colour, also if I want to add icon or tag thing I can do it inside of if statement .


  var movieCard = '<div class="col-12 col-sm-6 col-md-3 mb-3 text-center ">';
    /////// way#1
    movieCard += '<div class="movieThumb card h-100 border-'+genreClass+' " onclick="showMoreMovie('+movie.id+');">';
    // movieCard += '<div class="movieThumb movieThumb2 card '+genreClass+' " data-id="'+movie.id+'" data-name="'+movie.title+'">';
    //////// adding data- (data attribute) - adding on something else not on the screen.
      movieCard += '<img src="img/'+movie.poster+'" class="card-img-top" alt="">';
        movieCard+='<div class="card-body">';
          movieCard+= '<h5 class="card-title">'+movie.title+'</h5>';
          // movieCard+= '<p>'+text+'</p>';
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


function showMoreMovie(movieNumber){
  var singleMovie;
  // console.log("You have clicked on a movie");
  console.log(movieNumber);
  for (var i = 0; i < movies.length; i++) {

    if (movies[i].id === movieNumber) {
      console.log(movies[i]);
      singleMovie = movies[i];
      break;
      //////break; - only use inside of loop, if statement. jumps out of a loop! make the loop stop earlier.
    }
  }

  console.log(singleMovie);
  document.getElementById('posterImg').src="img/"+singleMovie.poster;
  document.getElementById('movieTitle').innerText = singleMovie.title;
  document.getElementById('movieYear').innerText = singleMovie.year;
  document.getElementById('movieDirectors').innerHTML ='';
  //////////// - director is array! need looping!
  for (var i = 0; i < singleMovie.director.length; i++) {
    console.log(singleMovie.director[i]);
    document.getElementById('movieDirectors').innerHTML += '<li class ="list-inline-item">'+singleMovie.director[i]+'</li>';
  }
  document.getElementById('movieBio').innerText = singleMovie.bio;
  document.getElementById('movieLength').innerText = singleMovie.movieLength;
  document.getElementById('movieGenre').innerHTML ='';
  var genreColour;
  for (var i = 0; i < singleMovie.genre.length; i++) {
    var genreColour = getGenreColour(singleMovie.genre[i]);
  //   // if (singleMovie.genre[i]=== 'mystery') {
  //   //     genreColour = 'badge-primary';
  //   // } else if (singleMovie.genre[i]=== 'fantasy') {
  //   //     genreColour='badge-secondary';
  //   // } else if (singleMovie.genre[i]==='drama') {
  //   //     genreColour='badge-warning';
  //   // } else if (singleMovie.genre[i]==='adventure') {
  //   //     genreColour='badge-info';
  //   // } else {
  //   //   genreColour='badge-dark';
  //   // }
    document.getElementById('movieGenre').innerHTML += '<span class ="badge badge-'+genreColour+' mr-1">'+singleMovie.genre[i]+'</span>';
  }



  ////////////////// Q.javascript how to change div style? googling!  find answer from stackoverflow
   document.getElementById("moviePopup").style.display="flex";
  ////////////////// Q.javascript how to change style of body find answer from W3school
   document.body.style.overflow = "hidden";
}

////// caution ::::: getElementsByClassName - Elements (all Elements) also, movieThumbs is prevent both working other movieThumb;
var movieThumbnails = document.getElementsByClassName('movieThumb2');
for (var i = 0; i < movieThumbnails.length; i++) {
  // console.log(movieThumbnails[i]);
  // console.log(movieThumbnails[i].dataset.id);

  // movieThumbnails[i].onclick = showMoreMovie;

    movieThumbnails[i].onclick = function(){
      var id = parseInt(this.dataset.id);
      /////////////(this.dataset.id); === (this.dataset.['id']);
      showMoreMovie(id);
    }
}



document.getElementById('close').onclick = function(){
     document.getElementById("moviePopup").style.display="none";
     document.body.style.overflow = "scroll";
  }


  // ///////////////// -Q) Write 1 function which will give us the Genre colours needed to use for the badges,
  // /////////////////      borders and anythihg else we might want to use those colour names for in the future.

function getGenreColour(genre){
  if (genre === 'fantasy') {
      return 'primary';
  } else if (genre === 'drama') {
      return 'success';
  } else if (genre === 'mystery') {
      return 'danger';
  } else if (genre ==='comedy') {
      return 'warning';
  } else if (genre === 'sci-fi') {
      return 'info'
  } else if (genre === 'animation') {
      return 'secondary'
  } else{
  return 'dark';
  }
}
