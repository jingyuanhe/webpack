
module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
    },
    "settings": {
        "react": {                  
             "version": "detect" // React version. "detect" automatically picks the version you have installed.                                               
                                 // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.                                              
                                 // default to latest and warns if missing                                             
                                 // It will default to "detect" in the future                 
        }
   }
};