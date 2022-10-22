// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [];

function init() {
  // This is mine below and their starter code above.
  const generateREADME = ({
    title,
    overview,
    functionality,
    code,
    comments,
    repository,
    url,
    viewing,
    usage,
    license,
    contributing,
    questions,
  }) =>
    `# PROJECT TITLE: ${title}
    

    # Overview ${overview}
    
    ## Table of Contents
    Here is the table of contents to make it easy for user to find what they need.
    •Functionality
    •code
    •comments
    •Repository
    •URL
    •Viewing
    •Usage
    •License
    •Contributing
    •Questions
    
    ## Functionality
    ${functionality}
    The user types a city name in the search box and is lead to 5 days weather forecast of the city. It shows the forecast of wind in MPH, temperature in farenheit, humidity in % and weather icon. On the right side the user is shown in a large box day 1 forecast so that user can see what his day looks like. Rest from there 5 days forecast if shown below. As the user types the city, it is saved below the search button so that it can be easily accessiable. When user refreshes the application all the search city are gone, so that he can enter new citites.

    
    ## Code
    ${code}
    The application uses local storage to store persistent data. The cities that a user search is saved in a local storage. It also uses third party API, openweathermap.org which shows the weather details. This project uses semantic html, CSS, and JavaScript.

    ## Comments
    ${comments}
    I have included notes on on JavaScript to make it more clear where the code is being applied to and what each code does.

    ## Repository
    ${repository}
    The code for this project can be found on GitHub :bhttps://github.com/rdsherpa/My-Weather-Application

    ## URL
    ${url}
    If you want to test the application you can follow this link: https://rdsherpa.github.io/My-Weather-Application/

    ## Viewing
    ${viewing}
    My Weather Application can be viewed in any screen size. You can also view code for Html, CSS and JavaScript.

    ## Questions
    ${questions}
    If you have any questions, you can reach me at sherpariwa@gmail.com



  `;

  // import to generate questions
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "Add a unique title for the application.",
      },
      {
        type: "input",
        name: "overview",
        message: "Provide an overview of what the applicaiton does.",
      },
      {
        type: "input",
        name: "functionality",
        message:
          "Explain the functionality and steps in how someone uses the application.",
      },
      {
        type: "input",
        name: "code",
        message:
          "Which files are contained in the computer code? For example, list if the code contain an html page, a css page, a Javascript page, etc. List any third party APIs the project uses.",
      },
      {
        type: "input",
        name: "comments",
        message:
          "Expalin how the project uses comments in the various pages of the code, such as in the HTML code, CSS code and JavaScript code.",
      },
      {
        type: "input",
        name: "comments",
        message:
          "Expalin how the project uses comments in the various pages of the code, such as in the HTML code, CSS code and JavaScript code.",
      },
      {
        type: "input",
        name: "repository",
        message: "Provide a link to the github repository for the application.",
      },
      {
        type: "input",
        name: "url",
        message: "Provide a link to the url of the deployed application.",
      },
      {
        type: "input",
        name: "usage",
        message:
          "Add a link to an image that shows the web application apperance and functionality.",
      },
      {
        type: "choice",
        name: "license",
        message:
          "What type of license does the application have? Choose one of the following licenses?",
        choices: ["Public", "Private"],
      },
      {
        type: "input",
        name: "contributing",
        message:
          "Please list the names of any contributors to the application.",
      },
      {
        type: "input",
        name: "questions",
        message:
          "Please type your email address for questions relating to the application.",
      },
    ])

    .then((answers) => {
      const readmePageContent = generateREADME(answers);

      fs.writeFile("README.md", readmePageContent, (err) =>
        err ? console.log(err) : console.log("Successfully created README.md")
      );
    });
}

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
init();
