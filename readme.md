<p align="center">
<img width="300" height="140"  src="https://github.com/kelvinkamau/Vibranium/blob/master/images/vibranium.png">
</p>

# Project Vibranium 🔥
This awesome Progressive Web App was created for DSC SSA Communities as a profile and a platform to showcase their success stories, upcoming and past events in pictures & event slides to the world.

[Live Demo](https://dsc-kisiiuni.firebaseapp.com)

### Creators 😎
* Kelvin Kamau - [DSC Kisii University](http://kisiiuniversity.ac.ke/dsc/) Lead 
* [DSC Sub Saharan Africa Leads](https://github.com/DSCLEADSAfrica)


### Usage
* Fork repository and clone it locally
* Replace values inside ```formfire.js``` with your own [firebase](https://firebase.google.com) config values.
```javascript
var config = {
    apiKey: "XXXXXXXXXXXXXXXXXXXXXX",
    authDomain: "XXXXXXXXXXXXXXXXXXXXXX",
    databaseURL: "XXXXXXXXXXXXXXXXXXXXXX",
    projectId: "XXXXXXXXXXXXXXXXXXXXXX",
    storageBucket: "XXXXXXXXXXXXXXXXXXXXXX",
    messagingSenderId: "XXXXXXXXXXXXXXXXXXXXXX"
};
```

###Firebase Hosting
Setup Environment
* Install Node.js (v8.9.4 or above)
* Install Firebase CLI: ```npm i -g firebase-tools```or  ```yarn global add firebase-tools```
* Install project dependencies: ```npm install or yarn```
* Create a new firebase project [here](https://console.firebase.google.com/)
* Login into Firebase CLI: ```firebase login```
* Publish ```firebase deploy```

### Improvements

* <s>Mobile site enhancements</s> ✔
* Auto-responder after user subscribes 💯
* <s>Progressive Web App support</s> ✔
* Push notifications support 📢

## Updating
Here is a git workflow for updating your fork (or downloaded copy) to the latest version:
```git
git remote add upstream https://github.com/kelvinkamau/Vibranium.git
git fetch upstream
git merge upstream/Vibranium
# resolve the merge conflicts in your editor
git add . -u
git commit -m 'Updated to the latest version'
```

## Contributing
Project Vibranium is an open source software project and I encourage developers to contribute patches and code for us to include in the main package of Project Vibranium. All contributions will be fully credited.

## Using GitHub Issues
* Feel free to use GitHub issues for questions, bug reports, and feature requests
* Use the search feature to check for an existing issue
* Include as much information as possible and provide any relevant resources (Eg. screenshots)
* For bug reports ensure you have a reproducible test case
    * A pull request with a breaking test would be super preferable here but isn't required

## Versioning
This project uses [semver](https://semver.org) for versioning. Current version: v1.0.0

###### Buy me a coffee [here](https://www.buymeacoffee.com/EqeRlzLSc) ☕

## License
```
Copyright (c) 2018 Project Vibranium 🔥

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
