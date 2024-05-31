const menu = {
    _meal: "",
    _price: 0,
    /**
     * @param {string} mealToCheck
     */
    set meal(mealToCheck) {
      if (typeof mealToCheck === "string") {
        return (this._meal = mealToCheck);
      }
    },
    /**
     * @param {number} priceToCheck
     */
    set price(priceToCheck) {
      if (typeof priceToCheck === "number") {
        return (this._price = priceToCheck);
      }
    },
    get todaysSpecial (){
      if(this._meal && this._price){
        return `Today's Special is ${this._meal} for only ${this._price} pesos, Buy now!`;
      }else{
        return 'Meal or price was not set correctly!';
      }
    }
  };
  
  menu.meal = "Donut";
  menu.price = 250;
  console.log(menu.todaysSpecial)
  console.log(menu);
  