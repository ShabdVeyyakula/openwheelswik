$(document).ready(function () {

  let url = "https://newsapi.org/v2/everything?q=f1&apikey=13fd928fdb35413aa06338060d7f6fd2";

  $.ajax({
    url: url,
    method: "GET",
    dataType: "JSON",

    beforeSend: function () {
      $(".progress").show();
    },

    complete: function () {
      $(".progress").hide();
    },

    success: function (newsdata) {
      let output = "";
      let latestNews = newsdata.articles;
      for (var i in latestNews) {
        output += `
        <a href="${latestNews[i].url}" target=”_blank”>
        <div class="event">
        <hr style=" height: 0.1px; border: none;
        height: 0.1px;
        background: rgb(219, 219, 219); margin-bottom: 30px; ">
        <ul style="list-style-type: none; display: flex;">
            <li>
              <img src="${latestNews[i].urlToImage}" alt="" style= "width: 400px">

            </li>
            <li>
                <div style="width: 40px;">

                </div>
            </li>
            <li>
                <div>
                  <h1 >${latestNews[i].title}</h1>
                  <p >${latestNews[i].description}</p>
                  <p style=" color: rgb(211, 9, 9);"><strong><b>By:</b>${latestNews[i].author} </strong></p>
                  <p ><b>Published:</b>${latestNews[i].publishedAt}</p>

                </div>
            </li>
        </ul>


        <hr style=" height: 0.1px; border: none;
        height: 0.1px;
        background: rgb(219, 219, 219); margin-bottom: 30px; ">
    </div>

        </a>
        `;
      }

      if (output !== "") {
        $(output).appendTo("#newsResults");
      }

    },

    error: function () {
      let errorMsg = `<div class="errorMsg center">Some error occured</div>`;
      $("#newsResults").html(errorMsg);
    }
  })

});
