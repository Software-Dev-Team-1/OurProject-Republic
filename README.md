# OurProject-Republic
All project code/components


Deployment: 

-Our application was developed and deployed locally.

-The app was developed on NodeJs; using express, passport, and mongoose packages

-In repo, ensure node, npm, express, passport, and mongoose packages are installed.

-In the terminal, input “node app.js”, this will launch and connect the app to our database.


Layout:

-OurProject(application)
    -config
        -all files for configuring our login authentication and Db connection

    -models
        -Schemes for writing to our Db

    -node_modules
        -node packages

    -routes
        .js drivers for routing of our pages

    -views
        -HTML views (rendered with .ejs)
        -patrtials (.ejs header,footer, and menu)
        
    app.js(node driver)
    package-lock.json
    package.json