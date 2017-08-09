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
        "moduleName": {
            "type": "string",
            "required": true,
            "message": "The name to use for the module. It must be a legal var.",
            "default": "myLibrary"
        }
    },
    "completeMessage": "To get started:\n\n  cd {{destDirName}}\n  yarn install\n  yarn run dev\n\n"
};
