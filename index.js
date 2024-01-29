const inquirer = require('inquirer');
const fs = require('fs');

// Function to prompt user for project information
async function promptUser() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter the project title:',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a brief description of your project:',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose a license for your project:',
            choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause'],
        },
        // Add more prompts based on the acceptance criteria
    ]);
}


// Main function
async function init() {
    try {
        const answers = await promptUser();
        const readmeContent = generateReadme(answers);

        // Save to file example
        fs.writeFileSync('README.md', readmeContent);

        console.log('README.md generated successfully!');
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

















// // TODO: Include packages needed for this application

// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
