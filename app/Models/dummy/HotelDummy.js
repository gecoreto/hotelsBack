'use strict'
const hotels = require('./data.json')

class HotelDummy {
    static all() {
        return hotels;
    }
    static find(id) {
        return hotels.find((hotel) => { return hotel.id == id });
    }
    static search(name, stars, allStars) {
        return hotels.filter((hotel) => {
            if(name == undefined && allStars == 0){
                return false;
            }
            //Filtro por el nombre seleccionado
            let validateNameHotel = (name !== undefined) ? (hotel.name.toUpperCase().indexOf(name.toUpperCase()) > -1) : true;
            //Filtro por las estrellas seleccionadas
            let validateStars = (stars !== undefined) ? (stars.indexOf(hotel.stars) > -1) : true;
            //Devuelvo las validaciones correxpondientes
            return validateNameHotel && validateStars;
        });
    }
    static save() {
        return true;
    }
    static delete() {
        return true;
    }
}

module.exports = HotelDummy
