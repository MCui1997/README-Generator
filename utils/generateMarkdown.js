const generateMarkdown = response => {

  return `

# ${response.title.toUpperCase()}


# ${response.description}

# ${response.table}

# ${response.installation}

# ${response.usage}

# ${response.license}

# ${response.contribution}

# ${response.tests}

# Questions: Please Contact

GitHub Username: ${response.username} 

GitHub Link: github.com/${response.username}

Please Email: ${response.email}


`
}

module.exports = generateMarkdown
