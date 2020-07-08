const generateMarkdown = response => {

  return `

# ${response.title.toUpperCase()}

# ${response.description}

# Table of Contents

[Contribution] (#contribution)

${response.installation}

${response.usage}

# ${response.license}

# Contribution
${response.contribution}

# ${response.tests}

# Questions: Please Contact

GitHub Username: ${response.username} 

GitHub Link: https://wwww.github.com/${response.username}

xEmail: ${response.email}


`
}

module.exports = generateMarkdown
