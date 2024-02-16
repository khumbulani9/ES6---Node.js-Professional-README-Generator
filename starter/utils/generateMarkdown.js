// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  https://github.com/${data.Username}/${data.Title}
  #Description
  ${data.Description}
  # Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  # Installation
The following necessary dependencies must be installed to run the application.
# Usage
Inorder to use this app, ${data.Usage}
# License
This project is licensed under the ${data.license} license.
![Github license](https://img.shields.io/badge/license-MIT-blue.svg)
# Contributing
contributors: ${data.contributing}
# Tests
The following is needed to the run tests: ${data.Tests}
# Questions 
If you have any questions about the repo, open an issue or contact ${data.Questions}

`
}
module.exports = generateMarkdown;
