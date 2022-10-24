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
    description,
    functionality,
    code,
    comments,
    repository,
    url,
    viewing,
    usage,
    license,
    questions,
  }) =>
    `# PROJECT TITLE: 
    ${title}
    My-Weather-Application

    # Overview ${overview}
    The repository shows a weather application that displays 5 days weather forecast of any city the user types.

    ## Description
    ${description}

  Main motivation behind was to challange my self with Java Script. I feel like I need to work more on Java Script as there is lots of logic involve and this challenge would help me understand how Java Script actually works.

  I wanted to build this project so that people can easily access 5 days weather forecast when they search for any city in US. I also wanted to explore more about how Java Script works and the ways it can grab elements from HTML AND CSS.

  People can easily access 5 days weather of any US city and this also helps me to improve my skills.

  I learned more about making a code clean, styling and doing more research for CSS and Java Script. Patient is the key is what I learned from this challenge. Give your best to try solving this problem and if doubts as your tutor and get feedback. Never hesitate to ask for help.

  I also learned how to use third party APIs and how to fetch them in JavaScript. I had a better understanding of JavaScript through this project. Although this project took me 3 weeks to finish, but knowledge that I gained was immense.

    ## Table of Contents
    Here is the table of contents to make it easy for user to find what they need.
    - [Functionality] (#functionality)
    - [Code] (#code)
    - [Comments] (#comments)
    - [Repository] (#repository)
    - [URL] (#url)
    - [Viewing] (#viewing)
    - [Usage] (#usage)
    - [License] (#license)
    - [Contributing] (#contributing)
    - [Questions] (#questions)
    
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

    ## Usage
    ${usage}
    Below is the screenshot of My-Weather-Application
    ![alt text](/My-Professional-README%20folder/images/Screen%20Shot%202022-10-22%20at%208.54.27%20AM.png)

    ## License
    ${license}
    Anyone willing to learn about how this weather application and taking it as an inspiration is fine. Plagarism is not accepted. You can take my code as a refrence and learn from it copying a pasting and making it as your work is not highly accepted.



    ## Viewing
    ${viewing}
    My Weather Application can be viewed in any screen size. You can also view code for Html, CSS and JavaScript.
    Video link of READ ME walk through: https://drive.google.com/file/d/14gbXBzoM6rEfLEbzWwvdcXIjw9i3zfA0/view
    

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
        name: "description",
        message:
          "Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide.",
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
