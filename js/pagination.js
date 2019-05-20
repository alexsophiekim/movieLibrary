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


var maxNumberOnScreen = 8;
var numberOfPages = Math.ceil(movies.length / maxNumberOnScreen);

if (numberOfPages >1) {
  var pagination = document.getElementById('paginationMovies');
  for (var i = 0; i < numberOfPages; i++) {
    pagination.innerHTML +='<li class="page-item"><a class="page-link" href="#">'+(i+1)+'</a></li>'
  }
}
if (maxNumberOnScreen > movies.length) {
  // console.log("There are not enough movies tin the database to fil the entire screen.")
  showMovieThumbnails(0,movies.length);
} else {
  // console.log("There is more movies than the max on screen.")
  showMovieThumbnails(0,maxNumberOnScreen);
}

function showMovieThumbnails(start, end){
    console.log(start);
    console.log(end);
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
}
