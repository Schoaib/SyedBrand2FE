This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>

## Folder Structure

```
SyedBrand2FE/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.png
  src/
    App/
      images/
      styles.css
      App.js
      App.test.js
    styles.css
    index.js
```

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

## Catalog Component

The project uses a react based catalog component to render the products catalog.

### `npm install --save syedcommonfe`

Required props for catalog componets are :<br>
Path to the backend APi ==> backendApi: PropTypes.string.isRequired<br>
Path to the product images ==> productImagePath: PropTypes.string.isRequired

## Docker Support

### Create Image
### `docker build -t syedbrand2fe:1.0 .`

### Create Container
### `docker run -p 4001:5000 --name syedbrand2fe syedbrand2fe:1.0`
