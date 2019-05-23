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
var maxNumberOnScreen = 4;
var currentTab = 'Movies';
var pageContainer=document.getElementById('pageContainer');

function showMovies(){
  var numberOfPages = Math.ceil(movies.length / maxNumberOnScreen);
  if (numberOfPages >1) {
    var pagination = document.getElementById('paginationMovies');
    for (var i = 0; i < numberOfPages; i++) {
      pagination.innerHTML +='<li class="page-item"><a class="page-link" href="#" onclick="clickOnPagination('+(i+1)+');">'+(i+1)+'</a></li>';
    }
  }
  if (maxNumberOnScreen > movies.length) {
    showMovieThumbnails(0,movies.length);
  } else {
    showMovieThumbnails(0,maxNumberOnScreen);
  }
}
showMovies();

function clickOnPagination(num){
  // console.log("You clicked on "+num+"page");
  var max = num * maxNumberOnScreen;
  var min = max - maxNumberOnScreen;

  if (max > movies.length) {
    max = movies.length;
  }

  showMovieThumbnails(min,max);
}

function pageNumber(start, end){
  for (var i = 0; i < movies[i]; i++) {
  }
}

function showMovieThumbnails(start, end){
  document.getElementById('moviesList').innerHTML='';
    for (var i = start; i < end; i++) {
      var movie =movies[i];

      var movieCard = '<div class="col-12 col-sm-6 col-md-3 mb-3 text-center ">';
        movieCard += '<div class="movieThumb card h-100 " onclick="showMoreMovie('+movie.id+');">';
          movieCard += '<img src="img/'+movie.poster+'" class="card-img-top" alt="">';
            movieCard+='<div class="card-body">';
              movieCard+= '<h5 class="card-title">'+movie.title+'</h5>';
            movieCard+= '</div>';
        movieCard += '</div>';
      movieCard +='</div>';

      document.getElementById('moviesList').innerHTML+=movieCard;
    }
///////////////// remember ordering!
    var movieThumbnails = document.getElementsByClassName('movieThumb2');
    for (var i = 0; i < movieThumbnails.length; i++) {
        movieThumbnails[i].onclick = function(){
          var id = parseInt(this.dataset.id);
          showMoreMovie(id);
        }
    }
}

function showMoreMovie(movieNumber){
  var singleMovie;
  for (var i = 0; i < movies.length; i++) {

    if (movies[i].id === movieNumber) {
      singleMovie = movies[i];
      break;
    }
  }

  console.log(singleMovie);
  document.getElementById('posterImg').src="img/"+singleMovie.poster;
  document.getElementById('movieTitle').innerText = singleMovie.title;
  document.getElementById('movieYear').innerText = singleMovie.year;
  document.getElementById('movieDirectors').innerHTML ='';
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
    document.getElementById('movieGenre').innerHTML += '<span class ="badge badge-'+genreColour+' mr-1">'+singleMovie.genre[i]+'</span>';
  }

   document.getElementById("moviePopup").style.display="flex";
   document.body.style.overflow = "hidden";
}

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


document.getElementById('close').onclick = function(){
     document.getElementById("moviePopup").style.display="none";
     document.body.style.overflow = "scroll";
  }

var pageTabs = document.getElementsByClassName('page-tab');
for (var i = 0; i < pageTabs.length; i++) {
  pageTabs[i].onclick = function(){
    for (var j = 0; j < pageTabs.length; j++) {
      if (pageTabs[j].classList.contains('active')) {
          pageTabs[j].classList.remove('active');
          break;
      }
    }
    if (!this.classList.contains('active')) {
      this.classList.add('active');
    }
    changeTab(this.innerText);

    // console.log(this.classList);
    // this.classList.add('newClass','secondNewClass');
    // console.log(this.classList.item(1));
    ///// exactly same thing! console.log(this.classList[1]); === console.log(this.classList[1]);
    // this.classList.remove('active');
    // this.classList.toggle('active');

  };
}

function changeTab(tabName){
  if (currentTab === tabName) {
      console.log("You are still on the same page");
  } else {
    currentTab = tabName;
    if (tabName === 'Director') {
        pageContainer.innerHTML = '';
      showDirctor();
    } else if (tabName === 'Movies') {
      pageContainer.innerHTML='<div id="moviesList" class="row"></div>';
      pageContainer.innerHTML+='<div class="row"><div class="col"><nav><ul id="paginationMovies" class="pagination justify-content-end"></ul></div></div>';
      pageContainer.innerHTML+='<div class ="row"><div class="col"><div class="dropdown" id="dropdownCards"><a class="btn btn-secondary dropdown-toggle" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Cards on screen</a></div></div></div>'
      showMovies();
    }
  }
}


function showDirctor(){
  console.log("show Director");
  pageContainer.innerHTML='<div class="row"><div class="col"><h2 class="display-4">Director</h2></div></div>';
}
