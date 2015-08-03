# FCC Project Portfolio Boilerplate

A boilerplate for creating FreeCodeCamp project portfolio based on Agency theme based on [Agency bootstrap theme](http://startbootstrap.com/templates/agency/) and
[gulp-webapp](https://github.com/yeoman/generator-gulp-webapp).

## Previews

Bare Example: [http://dting.github.io/fccportfolio-boilerplate/](http://dting.github.io/fccportfolio-boilerplate/)  

Real Example: [http://dting.github.io/fccportfolio/](http://dting.github.io/fccportfolio/)

## Usage

Fork the repository or clone the repository and delete the .git folder and create a new repository to add as the origin.

    git clone https://github.com/dting/fccportfolio-boilerplate.git portfolio
    cd portfolio
    rm -rf .git

    git init
    git remote add origin git@github.com:<the new repository>.git
    git add -A
    git commit -m "Initial commit"

Install dependencies

    npm install && bower install
    
Update `apps/scripts/main.js` with title, brand, site, and social media urls. Add the url's of the projects you want to include. Source code links are optional.   
Delete the projects you want to omit.

Swap out the images in `app/images/` with images of your projects. If you use the same file names you won't have to edit as many places.  

## Previews

To preview the page locally:

    gulp && gulp serve
    
To preview the files that will be deployed:
  
    gulp && gulp serve:dist

## Deploy - Github Pages

To deploy the page to github pages:

    gulp deploy
    
Make sure you have added a github repository as the origin before running this command.

**Make sure you run gulp clean after you build or serve the files.**  
The `/dist` folder is not included in the `.gitignore` intentionally. This is required for the `gulp deploy` command to work.

