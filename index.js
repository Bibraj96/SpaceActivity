const fetchArticles = () => {
  fetch('https://spaceflightnewsapi.net/api/v2/articles')
  .then(res => res.json())
  .then(data => {
    let articleContainer = document.getElementById('articles-container')
    // let output = document.createElement('div')
    data.forEach((element) => {
      articleContainer.innerHTML += `
        <div class="article-item">
          <img src="${element.imageUrl}">
          <h3>${element.title}</h3>
          <p>${element.summary}</p>
          <p class="date">${toUtc(element.updatedAt.slice(0, 10)).slice(0, 16)}</p>
          <p class="site">${element.newsSite}</p>
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
