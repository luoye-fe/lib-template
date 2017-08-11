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
            "default": "Awesome Project."
        },
        "author": {
            "type": "string",
            "message": "Author"
        },
        "moduleName": {
            "type": "string",
            "required": true,
            "message": "The name to use for the module. It must be a legal var.",
            "default": "myLibrary"
        },
        "less": {
            "type": "confirm",
            "message": "Need css/less?",
            "default": false
        }
    },
    "filters": {
        "src/index.less": "less"
    },
    "completeMessage": "To get started:\n\n  cd {{destDirName}}\n  npm install\n  npm run dev\n\n"
};
