const logItem = () => {
  console.log("works")
}

const addListeners = () => {
  document.querySelectorAll('.article-item').forEach(element => {
    element.addEventListener("click", logItem)
  }); 
}

const fetchArticles = () => {
  fetch('https://spaceflightnewsapi.net/api/v2/articles')
  .then(res => res.json())
  .then(data => {
    let articleContainer = document.getElementById('articles-container')
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
    addListeners()
  })
}

const init = () => {
  fetchArticles()
}

document.addEventListener('DOMContentLoaded', init);


const toUtc = (date) => {
  return new Date(date).toUTCString()
}
