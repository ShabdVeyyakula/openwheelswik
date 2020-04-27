$(document).ready(function() {
  let url = "https://newsapi.org/v2/everything?q=f1&apikey=13fd928fdb35413aa06338060d7f6fd2";

  $.ajax({
    url:url,
    method:"GET"
    dataType: "JSON"
  })

  success:function (newsdata) {
    let output = ""
    let latestNews = newsdata.articles

    output += `
    <div class="main-news">
      <img src="${latestNews[0].urlToImage}" alt="" style= "width: 600px">



    </div>

    <div class="main-news-description">
        <p>
            ${latestNews[0].content}
        </p>

    </div>

    `
  }

  if (output !== "") {
    $(output).appendTo("#mainNews");
  }

  },

})
