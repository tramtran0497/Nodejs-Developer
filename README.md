# nodejs-develope

### Install
- Installing all.
```
    npm install
```
#### FS and Command Line Args
- Getting input from users
```
    console.log(process.argv)
```
Terminal
```
    node app.js Tram 
    // Because of console.log, it shows 
    [
        '/opt/homebrew/Cellar/node/17.7.1/bin/node',
        '/Users/tramtran/Desktop/nodejs-developer/app.js',
        'Tram'
    ]
```
Notes: it can not take your words as you want, so we use "Yargs" npm.
- Install "Yargs" npm ``` npm install yargs ```
