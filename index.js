const getArticles = () => {
  fetch('https://spaceflightnewsapi.net/api/v2/articles')
  .then(res => res.json())
  .then(data => {
    let artContainer = document.getElementById('articles-container')
    let output = `<h2>Latest Articles</h2>`
  })
}

document.addEventListener('DOMContentLoaded', getArticles());
