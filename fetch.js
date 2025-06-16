const url =  "https://newsapi.org/v2/everything?q=tesla&from=2025-04-02&sortBy=publishedAt&apiKey=7aee26f7e91544939d06b6ce51438f04"

async function getNews() {
  try {
    const res = await fetch(url);

    if(!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    const data = await res.json();
    const des = data.articles.map(articles => articles.description);
    console.log(des);
    return des;
  } catch(err) {
    console.error('Error fetching data: ', err);
  }
}

// getNews();


//using promises
fetch("https://icanhazdadjoke.com/slack")
.then((res) => {
  return res.json();
})
.then((data) => { 
  var joke = data.attachments[0].fallback;
  console.log(joke);
})
.catch((err) => {
  console.log(err);
});

fetch(url)
.then((res) => {
  return res.json();
})
.then((data) => {
  return data.articles.map(articles => articles.description);
})
.then((description) => {
  console.log(description); 
})
.catch((err) => console.log(err));