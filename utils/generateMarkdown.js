// generatemarkdown.js

// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }

  let badge;
  switch (license) {
    case 'MIT':
      badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'Apache 2.0':
      badge = '[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'GPL 3.0':
      badge = '[![License: GPL 3.0](https://img.shields.io/badge/License-GPL%203.0-blue.svg)](https://opensource.org/licenses/GPL-3.0)';
      break;
    case 'BSD 3-Clause':
      badge = '[![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
      break;
    default:
      badge = '';
  }

  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }

  // Implement logic to return the appropriate license link for the given license
  // Example: return `[License](https://opensource.org/licenses/MIT)`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }

  // Implement logic to return the license section content for the given license
  // Example: return `## License\nThis project is licensed under the [MIT License](https://opensource.org/licenses/MIT).`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);

  console.log('License Badge:', licenseBadge);
  console.log('License Link:', licenseLink);
  console.log('License Section:', licenseSection);


  return `# ${data.title}

${licenseBadge}
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
${licenseLink ? '- [License](#license)\n' : ''}- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
<!-- Add installation instructions here -->

## Usage
<!-- Add usage information here -->

${licenseSection}

## Contributing
<!-- Add contribution guidelines here -->

## Tests
<!-- Add test instructions here -->

## Questions
For questions, please contact ${data.email}.
GitHub: [${data.username}](https://github.com/${data.username})
  `;
}

module.exports = generateMarkdown;

