# eklabs.angularStarterPack 0.2.4

Starter pack Basic sur angular 


### How to start
1. Open terminal, go to your folder
1. sudo npm install  
2. sudo npm install -g bower install
3. sudo bower install --allow-root or sudo bower install
4. copy demo/config.dist.js to demo/config.js and add references if you need
5. Insert folder bower_components in demo/
5. grunt dev or grunt dev --force

### How to build page
1. add page description on demo/data/pages.json
2. add information into the files demo/app/routing.js
3. create a repository in pages
4. create a controller / view / code folder with directive
5. add the controller reference to index.html

### How to build a release
1. Make sure than you have in clean base ( all files add and committed )
2. Make sur you are on master branch
3. Open your terminal, go to angularStarterPack folder
4. grunt release

## Model Page
```
{
  "name"        : "name of your page", // --- Mandatory
  "description" : "Text to explain",
  "state"       : "ui.state",
  "isTitle"     : "Boolean",
  "icon"        : "material-design icon name",
  "subIcon"     : "material-design icon name for all subPages"
  "subPages"    " [Page]
}
```




