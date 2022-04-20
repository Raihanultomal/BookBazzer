#MERN Bookbazzer

#Steps:

1.  Introduction
2.  Install Tools
3.  Create React App
4.  Create Git Repository
5.  List Product

    1. create product array
    2. add product image
    3. render product
    4. style product

6.  Add Routing

    1. npm i react-router-dom
    2. create router for home screen
    3. create router for product screen

7.  Create Node.js Server

    1. run npm init in root folder(backend terminal)
    2. Update package.json set type: module
    3. Add .js to imports
    4. npm install express(backend e install kora hoyse)
    5. create server.js
    6. add start command as node backend/server.js
    7. require express
    8. create route for / return backend is ready
    9. move products.js from frontend to backend
    10. create route for /api/products
    11. return products
    12. product list dekhar jonne server.js comment likhte hobe
    <!-- backend kichu change korle seta start korar jonne bar bar server stop kore abr start korte hoy.
       ei shomossa somadhaner jonne nodemon install korte hobe
    -->
    13. npm install nodemon --save-dev
    <!--ekhane (-den) use kora hoyse karon nodemon just development er jonne use kora hobe.
    development er pore r use kora hobe na -->
    14. ekhon nodemon use korte hobe.backend er package.json er scripts e start:nodemon server.js likhte hobe.
    15. run npm start

8.  Fetch Products From Backend
    <!-- proxy use er maddome backend theke data frontend e ana hobe.
    ekhane proxy dia 3000 port er modde amader backend er 5000 port er dsata run korano hobe. -->

    1. set proxy in package.json(frontend er)
    2. npm install axios(frontend e)
    3. use state hook
    4. use effect hook
    5. use reducer hook

9.  Manage State By Reducer Hook
    <!-- useState er cheye useReducer valo tai replace kora holo -->
    <!-- jokhn complex state er kaj hobe tokhn useReducer -->
    <!-- jokhn next state depend kore previous state er upor tokhn useReducer -->

    1. define reducer
    2. update fetch data
    3. get state from useReducer
       <!-- state changes gula dekhar jonne useReducer logger use hoy -->
       <!-- logger use kore state er kaj thik vabe hocce kina debug kora jay -->
    4. npm install use-reducer-logger --force <!-- force karon react17 e eita kaj kore na-->

10. Add bootstrap UI Framework
    <!-- frontend folder e react-boostrap & react-router-bootstrap install korte hobe -->
    1. npm intall react-bootstrap bootstrap
    2. npm install react-router-bootstrap
    3. update App.js
11. Create Product and Rating Component
    1. create Rating component
    2. create Product component
    3. use Rating component
12. Create Product Details Screen
    1. fetch product from backend.
    2. create 3 columns for image, info and action.
    3. npm install react-helmet-async <!--jei product details e dhukbo seta browser er bar e dekhabe-->
13. Create Loading and Message Component
    1. create loading component.
    2. use spinner component.
    3. create message component.
    4. create utils.js to define getError function.
