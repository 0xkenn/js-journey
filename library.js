//start parent class
class Media {
    constructor(title, isCheckedOut = false, ratings = []) {
      this._title = title;
      this._isCheckedOut = isCheckedOut;
      this._ratings = ratings;
    }
    ///getters
    get title() {
      return this._title;
    }
    get isCheckedOut() {
      return this._isCheckedOut;
    }
    get ratings() {
      return this._ratings;
    }
    //setters
    set isCheckedOut(item){
      this._isCheckedOut = item;
    }
    //methods
    getAverageRating() {
        const total = this._ratings.reduce((acc, rating) => acc + rating, 0);
        const lengthArr = this._ratings.length;
        let res = lengthArr > 0 ? total / lengthArr : 0;
         return res.toFixed(2);
      }
     //end average method
  
    toggleCheckOutStatus() {
        this._isCheckedOut = !this._isCheckedOut;
    } //end toggle method
    addRating(rating) {
      if(rating <= 5){
        this._ratings.push(rating);
      }else{
        console.log( `Error, ${rating} is not a proper way of rating, must be 1-5.`);
      } 
      //end Rating Method
  }
}
  //end parent class
  
  //start book subclass
  class Book extends Media {
    constructor(author, title, pages) {
      super(title);
      this._author = author;
      this._pages = pages;
    }
  
    get pages() {
      return this._pages;
    }
  
    get author() {
      return this._author;
    }
  }
  //end book subclass
  
  //start movie subclass
  class Movie extends Media {
    constructor(title, director, runTime) {
      super(title);
      this._director = director;
      this._runTime = runTime;
    }
    //getters
    get director() {
      return this._director;
    }
    get runTime() {
      return this._runTime;
    }
  }
  //end movie subclass
  
  //start CD subclass
  class CD extends Media {
    constructor(title, isCheckedOut, ratings, artist, songs) {
      super(title, isCheckedOut, ratings);
      this._artist = artist;
      this._songs = songs;
    }
    //getters
    get artist() {
      return this._artist;
    }
    get songs() {
      return this._songs;
    }
  }
  //end CD subclass
  
  const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 99);
  historyOfEverything.toggleCheckOutStatus();
  console.log(historyOfEverything.isCheckedOut);
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
   
   
      console.log(historyOfEverything.getAverageRating());
const speed = new Movie('Speed', 'Jan de Bont', 116);
  speed.toggleCheckOutStatus();
  console.log(speed.isCheckedOut);
  speed.addRating(1);
    speed.addRating(3);
      speed.addRating(4);
      console.log(speed.getAverageRating());
      console.log(speed.ratings)