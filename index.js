const getArticles = () => {
  fetch('https://spaceflightnewsapi.net/api/v2/articles')
  .then(res => res.json())
  .then(data => {
    let artContainer = document.getElementById('articles-container')
    let output = document.createElement('div')
    data.forEach((element) => {
      output.innerHTML += `
        <img src="${element.imageUrl}">
        <h3>${element.title}</h3>
        <p>${element.summary}</p>
      `
    })
    artContainer.appendChild(output)
  })
}

document.addEventListener('DOMContentLoaded', getArticles());
