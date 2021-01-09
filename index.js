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
          <p>${element.updatedAt.slice(0, 10)}
        </div>
      `
    })
    // artContainer.appendChild(output)
  })
}

document.addEventListener('DOMContentLoaded', fetchArticles());
