const getArticles = () => {
  fetch('https://spaceflightnewsapi.net/api/v2/articles')
  .then(res => res.json())
  .then(data => console.log(data))
}

document.addEventListener('DOMContentLoaded', getArticles());