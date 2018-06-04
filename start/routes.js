'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')
const Hotel = use('App/Models/dummy/HotelDummy')

Route.group(() => {
  /**
   * Obtener todos los hoteles
   */
  Route.get('hotels', async ({ request, response }) => {
    let hotels = await Hotel.all()
    return hotels;
  })
  /**
   * Obtener todos los hoteles segun criterio de busqueda
   */
  Route.get('hotels/search', async ({ request, response }) => {
    const filters = request.only(['name', 'stars', 'allStars'])
    let hotels = await Hotel.search(filters.name, filters.stars, filters.allStars)
    return hotels;
  })
  /**
   * Obtener por hotel por id
   */
  Route.get('hotels/:id', async ({ params, response }) => {
    const hotel = await Hotel.find(params.id)
    return response.json(hotel)
  })
  /**
   * Agregar nuevo hotel
   */
  Route.put('hotels/:id', async ({ params, request, response }) => {
    const hotelInfo = request.only(['name', 'stars', 'price', 'image', 'amenities'])

    const hotel = await Hotel.find(params.id)
    hotel.name = hotelInfo.name
    hotel.stars = hotelInfo.stars
    hotel.price = hotelInfo.price
    hotel.image = hotelInfo.image
    hotel.amenities = hotelInfo.amenities

    // await hotel.save()

    return response.status(200).json(hotel)
  })
  /**
   * Actualiza un hotel
   */
  Route.post('hotels/:id', async ({ params, request, response }) => {
    const hotelInfo = request.only(['name', 'stars', 'price', 'image', 'amenities'])

    const hotel = await Hotel.find(params.id)
    hotel.name = hotelInfo.name
    hotel.stars = hotelInfo.stars
    hotel.price = hotelInfo.price
    hotel.image = hotelInfo.image
    hotel.amenities = hotelInfo.amenities

    // await hotel.save()

    return response.status(200).json(hotel)
  })
  /**
   * Eliminar un hotel
   */
  Route.delete('hotels/:id', async ({ params, response }) => {
    const hotel = await Hotel.find(params.id)
    if (!hotel) {
      return response.status(404).json(null)
    }
    // await hotel.delete()

    return response.status(204).json(null)
  })
}).prefix('api/v1');
