## Find recipes App

## Avialble Scripts
In the project directory, you can run:

### `npm run dev`
Runs the App with vite

### `npm run build`
Build the project to the dist directory

### `npm run lint`
Runs esLint with your custom properties

### `npm run preview`
Runs a local wev server that serves the built solution from dist 



The main idea of an app is to find some new dishes and look on their recipes.

App have several pages with routing between them.

First of all you'll see the search page with autofocus search component. 

When you input some text on this component and click on search Icon or Enter, 
App would find the dishes that suit your search request.
Then you will see List page with dishes cards that describe the dish
Card have some actions on this page: you have star and trash icon buttons that change each other( When you click star, you add dish to favorites; When you click on trash you delete dish from favorites)
Then if you click on the card you'll redirect to recipe page with whole info about dish and where you also have a functionality to add or remove dish to/from favorite List.


