const generateMarkdown = function(response,badge) {

  return `

${badge}

# ${response.title.toUpperCase()}

# Description
${response.description}

# Table of Contents

[Installation](#installation)

[Usage](#usage)

[License](#license)

[Contribution](#contribution)

[Tests](#tests)

[Contact with Questions](#contact-with-questions)

# Installation

${response.installation}

# Usage

${response.usage}

# License

This project is under the ${response.license} license. 

# Contribution
${response.contribution}

# Tests
${response.tests}

# Contact with Questions

GitHub Username: ${response.username} 

GitHub Link: www.github.com/${response.username}/

Email: ${response.email}


`
}

module.exports = generateMarkdown
