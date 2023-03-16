/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.post('/register', 'Authentication/RegisterController.index')
Route.post('/login', 'Authentication/LoginController.index')
Route.get('/logout', 'Authentication/LogoutController.index').middleware('auth:api')
Route.get('/check', async ({ auth, response }) => {
  try {
    const isLoggedIn = auth.use('api').isLoggedIn
    const user = auth.use('api').user!
    return response.ok({ isLoggedIn, user })
  } catch (error) {
    return response.badRequest(error)
  }
})

Route.group(() => {
  Route.resource('/admin/services', 'Admin/ServicesController')
  Route.resource('/admin/articles', 'Admin/ArticlesController')
  Route.resource('/admin/about', 'Admin/AboutsController')
}).middleware('auth:api')

Route.get('/dashboard/services', 'DashboardController.services')

Route.get('/services', 'ServicesController.index')
Route.get('/services/:id', 'ServicesController.show')
Route.get('/services/images/:image', 'ServicesController.image')
Route.get('/articles', 'ArticlesController.index')
Route.get('/articles/:id', 'ArticlesController.show')
Route.get('/about', 'AboutsController.index')

Route.post('/save-notification-subscription', 'NotificationsController.saveSubscription')
Route.get('/send-notification', 'NotificationsController.send')
