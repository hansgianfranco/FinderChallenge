var autocomplete;

function searchForm() {
    loadJSON(JSON_FILE,function(data){
        JSON_ARTICLES = data;
        articleList();
    });
};

function articleList(){
    var dataArray = [];
    var out = "";
    var i;
    for(i = 0; i < 9; i++) {
        dataArray.push(JSON_ARTICLES.data[i].title);
        out += '<article class="result-item pure-u-1-3"><img src="'+JSON_ARTICLES.data[i].image+'"><h2>'+JSON_ARTICLES.data[i].title+'</h2><p>'+JSON_ARTICLES.data[i].teaser+'</p></article>';
    }
    document.getElementById("resultList").innerHTML = out;
    var input = document.getElementById("searchInput");
    autocomplete = new Awesomplete(input,{
        list:dataArray,
        maxItems: 7,
        minChars: 3,

    });

};

function searchData(){
    document.getElementById('resultList').innerHTML = '';
    var text = document.getElementById('searchInput').value.toLowerCase();
    var dataArray = [];
    var out = "";
    var i;
    var count = JSON_ARTICLES.data.length;
    for(i = 0; i < count; i++) {
        dataArray.push(JSON_ARTICLES.data[i].title);
        if (JSON_ARTICLES.data[i].title.toLowerCase().indexOf(text) >= 0 ){
            out += '<article class="result-item pure-u-1-3"><img src="'+JSON_ARTICLES.data[i].image+'"><h2>'+JSON_ARTICLES.data[i].title+'</h2><p>'+JSON_ARTICLES.data[i].teaser+'</p></article>';
        }
    }
    document.getElementById("resultList").innerHTML = out;
};

var searchInput = document.getElementById('searchInput');
searchInput.addEventListener("keyup", function (e) {
    var textLength = searchInput.value.length;
    if ((e.keyCode || e.which) == 13 && textLength > 2) {
        searchData();
    }
    if(textLength > 2){
        document.getElementById('searchBtn').disabled = false;
    }
    else{
        document.getElementById('searchBtn').disabled = true;
    }

});
var searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener("click", function (e) {
    searchData();
});
