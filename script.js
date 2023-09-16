let accessKey = "eQMvliVwso9Do61DDdRxA8x61NA4fPs77ut3fLMNDdc";
const searchForm = document.getElementById("search-form");
const searchResult = document.getElementById("search-result");
let searchBox = document.getElementById("input-section");
const showMore = document.getElementById("show-more-button");

let keyWord = "";
let page = 1;

async function searchImage() {
  keyWord = searchBox.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=
  ${keyWord}&client_id=${accessKey}&per_page=12`;

  const response = await fetch(url);
  const data = await response.json();
  // console.log(data);
  if (page === 1) {
    searchResult.innerHTML = "";
  }
  const results = data.results;
  console.log(results);

  results.map((result) => {
    const image = document.createElement("img");
    image.src = result.urls.small;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";

    imageLink.appendChild(image);
    searchResult.appendChild(imageLink);
  });
  showMore.style.display = "block";
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchImage();
});

///

showMore.addEventListener("click", () => {
  page++;
  searchImage();
});
