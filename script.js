// =========================
// 数学アーカイブの検索
// =========================

const searchInput = document.getElementById("search-input");

const articles = document.querySelectorAll("article");

searchInput.addEventListener("input", function () {

  const keyword = searchInput.value.toLowerCase();

  articles.forEach(function (article) {

    const text = article.textContent.toLowerCase();

    if (text.includes(keyword)) {
      article.style.display = "";
    } else {
      article.style.display = "none";
    }

  });

});
