const generateMarkdown = function(response,badge) {

  return `

# ${response.title.toUpperCase()}

# Description
${response.description}

# Table of Contents

[Title](#${response.title})

[Description](#description)

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
${response.license} 

${badge}

# Contribution
${response.contribution}

# Tests
${response.tests}

# Contact with Questions

GitHub Username: ${response.username} 

GitHub Link: https://wwww.github.com/${response.username}

Email: ${response.email}


`
}

module.exports = generateMarkdown
