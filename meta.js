module.exports = {
    "prompts": {
        "name": {
            "type": "string",
            "required": true,
            "message": "Project name"
        },
        "description": {
            "type": "string",
            "required": false,
            "message": "Project description",
            "default": "my library"
        },
        "author": {
            "type": "string",
            "message": "Author"
        },
        "lint": {
            "type": "confirm",
            "message": "Use ESLint to lint your code?"
        },
        "lintConfig": {
            "when": "lint",
            "type": "list",
            "message": "Pick an ESLint preset",
            "choices": [{
                "name": "Standard (https://github.com/feross/standard)",
                "value": "standard",
                "short": "Standard"
            }, {
                "name": "Airbnb (https://github.com/airbnb/javascript)",
                "value": "airbnb",
                "short": "Airbnb"
            }, {
                "name": "none (configure it yourself)",
                "value": "none",
                "short": "none"
            }]
        },
        "moduleName": {
            "type": "string",
            "required": true,
            "message": "The name to use for the module. It must be a legal var.",
            "default": "myLibrary"
        }
    },
    "filters": {
        ".eslintrc.js": "lint",
        ".eslintignore": "lint"
    },
    "completeMessage": "To get started:\n\n  cd {{destDirName}}\n  yarn install\n  yarn run dev\n\n"
};
