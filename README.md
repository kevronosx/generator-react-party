# generator-react-party
> Generate a prototype app that uses React, Sass, Webpack, ES6, and React Router with Page Transitions 

## Installation
> For now, clone the repo, cd into the main folder and run ```npm install```

Then generate your new project:

```bash
yo react-party && webpack
```

And get up and running with:

```bash
npm start
```

## App Structure

```
├── app/                            # The source code of the application
│   ├── components/                 # The react components
|   |   |–– layouts/                # Layouts
|   |   |   |–– app-layout.js       # Main application layout
|   |   |–– pages/                  # Pages
|   │   │   ├── index.js            # The home page
|   │   │   ├── about.js            # The about page 
|   │   │   ├── contact.js          # The contact page
|   |   |   |–– no-match.js         # 404
│   ├── css/                        # Styles
|   │   ├── app.scss                # Main stylesheet
|   │   ├── page-transitions.scss   # Page Transitions
│   |── app.js                      # Renders the app and defines the routes
│   |── router.js                   # Contains all the routes
├── dist/                           # Build/processed files
├── node_modules/                   # Libraries/utilities
│–– index.html                      # The root html file
│── package.json                    # Application config and dependencies
│── webpack.config.js               # Build script
```

## License

MIT 
