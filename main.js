let newsFetch=document.getElementById("newsFetch")



let apiKey='95f1270a8bf84148bff6b04f85d0f0e1';
let source="bbc-news"
let url=
  `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${apiKey}`

function getData(){
  

fetch(url).then((res)=>{
return res.json();
}).then((data)=>{
  let articles=data.articles
// for (let i=0;i<=article.length;i++)
// console.log(article[i].title)
//  console.log(data)
//  console.log(articles);
// console.log(data.articles)
let newsHTML="";
// for (let news in articles)
// console.log(articles[news])

articles.forEach(function(element,index) {

  // console.log(element["description"])
  // console.log(element.news)
  // console.log(element)
  let news=`
              <p>
          
              <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample${index}" aria-expanded="false" aria-controls="multiCollapseExample${index}"> ${element["title"]}   </button>
              <div class="col">
                <div class="collapse multi-collapse" id="multiCollapseExample${index}">
                  <div class="card card-body">
                  ${element.description}.<a href="${element.url}" target="_blank">Read More Here</a>
                  </div>
                </div>
              </div>

              </p>
`

newsHTML+=news;
});


newsFetch.innerHTML=newsHTML;


})

} 

getData();


