# generator-react-party
> Generate a web app that uses React, Sass, Gulp, Browserify, and ES6

## Installation
> For now, clone the repo, cd into the main folder and run ```bash npm install```

Then generate your new project:

```bash
yo react-party
```

And get up and running with:

```bash
gulp
```

## Result

What you get:

```
├── app/                            # The source code of the application
│   ├── css/                        # Styles
|   │   ├── app.scss                # Main stylesheet
|   │   ├── page-transitions.scss   # Page Transitions
│   ├── components/                 # The react components
|   |   |–– layouts/                # Layouts
|   |   |   |–– app-layout.js       # Main application layout
|   |   |–– pages/                  # Pages
|   |   |   |–– no-match.js         # 404
|   │   │   ├── index.js            # The home page
|   │   │   ├── about.js            # The about page 
|   │   │   ├── contact.js          # The contact page
│   ├── index.html                  # The root html file
│   |── app.js                      # Renders the app and defines the routes
│   |── router.js                   # Renders the app and defines the routes
├── build/                          # Build/processed files
├── node_modules/              # Libraries/utilities
│── gulpfile.js                # Build script
│── package.json               # Application config and dependencies
```

What it looks like:

![Result](https://raw.githubusercontent.com/sgbj/generator-react-sass-es2015/master/result.png)

## License

MIT 
