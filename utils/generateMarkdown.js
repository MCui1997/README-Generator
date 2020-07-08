const generateMarkdown = response => {

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

[Questions](#questions)

# Installation

${response.installation}

# Usage

${response.usage}

# License
${response.license}

# Contribution
${response.contribution}

# Tests
${response.tests}

# Questions: Please Contact

GitHub Username: ${response.username} 

GitHub Link: https://wwww.github.com/${response.username}

Email: ${response.email}


`
}

module.exports = generateMarkdown
