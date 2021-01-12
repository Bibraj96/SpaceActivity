const fetchArticles = () => {
  fetch('https://spaceflightnewsapi.net/api/v2/articles')
  .then(res => res.json())
  .then(data => {
    let articleContainer = document.getElementById('articles-container')
    // let output = document.createElement('div')
    data.forEach((article) => {
      articleContainer.innerHTML += `
        <div class="article-item" data-id="${article.id}">
          <img src="${article.imageUrl}">
          <h3 class="title">${article.title}</h3>
          <p class="summary">${article.summary}</p>
          <p class="date">${toUtc(article.updatedAt.slice(0, 10)).slice(0, 16)}</p>
          <p class="site">${article.newsSite}</p>
        </div>
      `
    })
    // artContainer.appendChild(output)
  })
}

document.addEventListener('DOMContentLoaded', fetchArticles());

const toUtc = (date) => {
  return new Date(date).toUTCString()
} 
