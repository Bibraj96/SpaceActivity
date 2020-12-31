const getArticles = () => {
  fetch('https://spaceflightnewsapi.net/api/v2/articles')
  .then(res => res.json())
  .then(data => {
    let artContainer = document.getElementById('articles-container')
    let output = `<h2>Latest Articles</h2>`
    data.forEach((element) => {
      output += `
        <h3>${element.title}</h3>
        <p>${element.summary}</p>
      `
      console.log(element.title)
    })
  })
}

document.addEventListener('DOMContentLoaded', getArticles());
