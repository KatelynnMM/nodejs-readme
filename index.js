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
        {
            type: 'input',
            name: 'usage',
            message: 'How is your project used?:',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Are there and installation instructions for your project?:',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your contactact email for further questions:',
        },
        {
            type: 'input',
            name: 'username',
            message: 'Enter your Github username:',
        }
        // Add more prompts based on the acceptance criteria
    ]);
}

// Function to generate README content
function generateReadme(answers) {
    return `
# ${answers.title}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}


## Usage
${answers.usage}

## License
This project is licensed under the ${answers.license} License.

## Contributing
<!-- Add contribution guidelines here -->

## Tests
<!-- Add test instructions here -->

## Questions
For questions, please contact ${answers.email}.
GitHub: [${answers.username}](https://github.com/${answers.username})
  `;
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

// Run the application
init();















// // TODO: Include packages needed for this application

// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
