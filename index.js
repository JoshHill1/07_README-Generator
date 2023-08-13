// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer')

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, () => {})
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'user',
      message: 'What is your GitHub username?'
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?'
    },
    {
      type: 'input',
      name: 'title',
      message: 'What is your project name?'
    }, 
    {
      type: 'input',
      name: 'desc',
      message: 'Please write a short description of your project:'
    }, 
    {
      type: 'list',
      name: 'license',
      message: 'What license will your project have?',
      choices: ['MIT', 'APACHE', 'GLP 3.0', 'BSD 3', 'None']
    },
    {
      type: 'input',
      name: 'comandRun',
      message: 'What command should be run to install dependencies'
      // Shouls have a default that prints "(npm i)" so that when we press enter, it outputs "npm i"
    },
    {
      type: 'input',
      name: 'testRun',
      message: 'What command should be run to to run tests?'
      // Shouls have a default that prints "(npm test)"  then the user can put for example: npm testmenow; and then it outputs "npm testmenow"
    } ,
    {
      type: 'input',
      name: 'needToKnowUsage',
      message: 'What does the user need to know about using this repo?'
    },
    {
      type: 'input',
      name: 'needToKnowContribute',
      message: 'What does the user need to know about contributing to this repo?'
    }
  ])
  .then((answers) => {
  let licenseBadge = ''
  switch(answers.license){
    case 'MIT':
      licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
      break;
    case 'APACHE':
      licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
      break;
    case 'GLP 3.0':
      // licenseBadge = ''
      break;
    case 'BSD 3':
      licenseBadge = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
      break;
    case 'None':
      break;
  }
  //                                                                      ${user}                                                                                           fix this if needed                             ${answers.needToKnowUsage}                                                                        ${needToKnowContribute}                                  ${testRun}
  const text = `# ${answers.title} \n${answers.desc} \nLike my work? go to  to see more! \n${licenseBadge} \n## Installation \nTo install the necessary dependencies, run this command:\n${answers.comandRun} \n## Usage \n \n## License \nThis project is licensed under the ${answers.license} license. \n## Contributing \n \n## Test \nTo run tests, run the following command: \n \n## Questions \nIf you have any questions about the repo, open an issue or contact me directly at ${answers.email}.
`
  
    writeToFile('New-README.md', text);
  })


}

// Function call to initialize app
init();
