class User{
    constructor(name){
        this._name = name;

    }
    //getters
    get name(){
       return this._name;
    }
    //settters
    set name(newName){
      this._name = newName;  
    }
}
class Rank extends User{
    constructor(name, rankPoints){
        super(name);
        this._rankPoints = rankPoints;
    }
    //getter
    get rankPoints (){
        return this._rankPoints = rankPoints;
    }
    //setter
    set(points){
        this._rankPpoints = points;
    }
    
}
class School extends User{
    constructor(name, schoolName){
        super(name);
        this._schoolName = schoolName;
    }
    //getter
    get(){
        return this._schoolName;
    }
    set(newSchoolName){
        this.schoolName = newSchoolName;
    }
}

