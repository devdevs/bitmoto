/**
 * Created by Blake on 12/26/2014. --> Improved by Devin :)
 */
// var blogNumber is declared on page
//var blogNumber = 1; // Haldeman Ford Auto Blog
var root = 'https://apps.bitmotomarketing.com/';
//var root = 'https://127.0.0.1/dealership-crm/';
var images = root + 'app/webroot/img/article-images/';
//var blogUrl = '';

// api function calls
var getBlog = root + 'BlogApi/getBlog/' + blogNumber + '.json';
var getArticle = root + 'BlogApi/getArticle/' + blogNumber + '/';
var getArticles = root + 'BlogApi/getArticles/' + blogNumber + '.json';
var getCategories = root + 'BlogApi/getCategories/' + blogNumber + '.json';
var getCategoryArticles = root + 'BlogApi/getCategoryArticles/' + blogNumber + '/';
var getRecentPosts = root + 'BlogApi/getRecentPosts/' + blogNumber + '.json';

/*
 * Dynamically load the css file
 */
function loadjscssfile(filename, filetype) {
    if (filetype == "js") { //if filename is a external JavaScript file
        var fileref = document.createElement('script');
        fileref.setAttribute("type", "text/javascript");
        fileref.setAttribute("src", filename)
    }
    else if (filetype == "css") { //if filename is an external CSS file
        var fileref = document.createElement("link");
        fileref.setAttribute("rel", "stylesheet");
        fileref.setAttribute("type", "text/css");
        fileref.setAttribute("href", filename)
    }
    if (typeof fileref != "undefined")
        document.getElementsByTagName("head")[0].appendChild(fileref)
}

/*
 * will get the params out of the url
 */
var get_params = function (search_string) {

    var parse = function (params, pairs) {
        var pair = pairs[0];
        var parts = pair.split('=');
        var key = decodeURIComponent(parts[0]);
        var value = decodeURIComponent(parts.slice(1).join('='));

        // Handle multiple parameters of the same name
        if (typeof params[key] === "undefined") {
            params[key] = value;
        } else {
            params[key] = [].concat(params[key], value);
        }

        return pairs.length === 1 ? params : parse(params, pairs.slice(1));
    };

    // Get rid of leading ?
    return search_string.length === 0 ? {} : parse({}, search_string.substr(1).split('&'));
};

/**
 * Create the elements within the blog-body
 */
function createBody() {
    console.log('started body');
    $('#bitmoto-blog-body').append(
        '<div id="bitmoto-blog-title" class="bitmoto-blog-title"></div>' +
        '<div id="bitmoto-blog-categories" class="bitmoto-blog-categories">' +
        '<h2 class="bitmoto-blog-categories-title">Browse Categories</h2>' +
        '</div>' +
        '<div id="bitmoto-blog-first-article" class="bitmoto-blog-first-article"></div>' +
        '<div class="bitmoto-blog-spacer"><hr></div>'
    );
}

function displaySingleArticle(data) {
    $('#bitmoto-blog-body').append(
        '<div id="bitmoto-blog-article-content" class="bitmoto-blog-article-content"></div>' +
        '<div class="bitmoto-blog-spacer"><hr></div>'
    );
    
    //var x = data.Article.created_on;
    var createdOn = new Date(data.Article.created_on);
    
    $('#bitmoto-blog-first-article').append(
        // img
        '<img class="bitmoto-blog-first-article"' +
        ' src="' + images + data.Image.name + '"' +
        ' alt="' + data.Image.alt_tag + '">' +
        
        // title
        '<h2>' + data.Article.title + '</h2>'

        // article info
        //'<br /><b>Author:</b> ' + data.User.first_name + ' ' + data.User.last_name +
        //'<br /><b>Posted:</b> ' + createdOn.toDateString()
    );    
    
    $('#bitmoto-blog-article-content').append(
        // contnet
        '<p>' + data.Article.content + '</p>'
    );
    
    $(document).ready(function () { // dom ready
      var title = $('title');
      if(!$(title).length) {
        $('head').append('<title></title>');
        title = $('title');
      }
      title.html(data.Article.title);
      
      var desc = $('meta[name=description]');
      if(!$(desc).length) {
        $('head').append('<meta name="description">');
        desc = $('meta[name=description]');
      }
      desc.attr('content', data.Article.exerpt);
    });
}

function displayFirstArticle(data) {
    $('#bitmoto-blog-first-article').append(
        // img
        '<a href="' + window.blogUrl + '?article=' + data.Article.id + '"' +
        ' title="Read more about ' + data.Article.title + '">' +
        '<img class="bitmoto-blog-first-article"' +
        ' src="' + images + data.Image.name + '"' +
        ' alt="' + data.Image.alt_tag + '">' +
        '</a>' +

        // title
        '<a class="bitmoto-blog-title-link"' +
        ' href="' + window.blogUrl + '?article=' + data.Article.id + '"' +
        ' title="Read more about ' + data.Article.title + '">' +
        '<h2 class="bitmoto-blog-title-link">' + data.Article.title + '</h2>' +
        '</a>' +

        // excerpt
        '<p>' + data.Article.excerpt + '</p>' +

        // read more button
        '<a class="bitmoto-blog-btn"' +
        ' href="' + window.blogUrl + '?article=' + data.Article.id + '"' +
        ' title="Read more about ' + data.Article.title + '">' +
        'Read Full Article' +
        '</a>'
    );
}

function displayArticleList(data) {    
    $('#bitmoto-blog-article-list').append(
        '<div class="bitmoto-blog-article">' +
        // img
        '<a href="' + window.blogUrl + '?article=' + data.Article.id + '"' +
        ' title="Read more about ' + data.Article.title + '">' +
        '<img class="bitmoto-blog-article"' +
        ' src="' + images + data.Image.name + '"' +
        ' alt="' + data.Image.alt_tag + '">' +
        '</a>' +

        // title
        '<a class="bitmoto-blog-title-link"' +
        ' href="' + window.blogUrl + '?article=' + data.Article.id + '"' +
        ' title="Read more about ' + data.Article.title + '">' +
        '<h2 class="bitmoto-blog-title-link">' + data.Article.title + '</h2>' +
        '</a>' +

        // excerpt
        '<p>' + data.Article.excerpt + '</p>' +
        '</div>'
    );
}

/**
 * This will retrieve the blog posts
 */
function retrieveArticles(articles) {
    $.getJSON(articles)
        .done(function (json) {
            $('#bitmoto-blog-body').append(
                '<div id="bitmoto-blog-article-list" class="bitmoto-blog-article-list"></div>' +
                '<div class="bitmoto-blog-spacer"><hr></div>'
            );
            
            $.each(json, function (id, data) {
                if (id === 0) {
                    // display first article
                    displayFirstArticle(data);
                } else {
                    // display article list
                    displayArticleList(data);
                }
            });
        })
        .fail(function (jqxhr, textStatus, error) {
            var err = textStatus + ", " + error;
            console.log("Request Failed: " + err);
        });
}

/*
 * This will retrieve the last 4 recent posts
 * but will check to see if the current article is in list
 * then will display the other 3 articles
 */
function retrieveRecentPosts() {
    $.getJSON(getRecentPosts)
        .done(function (json) {
            $('#bitmoto-blog-body').append(
                '<div id="bitmoto-blog-article-list" class="bitmoto-blog-article-list"></div>' +
                '<div class="bitmoto-blog-spacer"><hr></div>'
            );
            var i = 3; // limits the number of recent posts outputed
            $.each(json, function (id, data) {
                if (params["article"] != data.Article.id &&
                    i > 0) {
                    // display article list
                    displayArticleList(data);
                    i--;
                }
            });
        })
        .fail(function (jqxhr, textStatus, error) {
            var err = textStatus + ", " + error;
            console.log("Request Failed: " + err);
        });
}

/**
 * This will retrieve a blog post
 */
function retrieveArticle(article) {
    $.getJSON(article)
        .done(function (json) {
            console.log(json.length > 0);
            if(json.length > 0) {
                $.each(json, function (id, data) {
                    // display single article
                    displaySingleArticle(data);
                });
                
                // display recent post
                retrieveRecentPosts();
            } else {
                // the article did not exist
                $('#bitmoto-blog-body').append('<div class="BlogError">The article could not be found.</div>');
                retrieveArticles(getArticles);
            }
        })
        .fail(function (jqxhr, textStatus, error) {
            var err = textStatus + ", " + error;
            console.log("Request Failed: " + err);
        });
}

/**
 * This will retrieve the blog categories.
 */
function createCategoryList() {
    $.getJSON(getCategories)
        .done(function (json) {
            $('#bitmoto-blog-categories').append(
                '<ul id="bitmoto-blog-category-list" class="bitmoto-blog-category-list"><li>' +
                '<a href="' + window.blogUrl + '">Home</a>' + 
                '</li></ul>'
            );
            $.each(json, function (id, data) {
                console.log(data.Category.name);
                $('#bitmoto-blog-category-list').append(
                    '<li>' +
                    '<a href="' + window.blogUrl + '?category=' + data.Category.id + '">' + data.Category.name + '</a>' +
                    '</li>');
            });
        })
        .fail(function (jqxhr, textStatus, error) {
            var err = textStatus + ", " + error;
            console.log("Request Failed: " + err);
        });
}

/*
 *  This will retrieve the blog details
 */
function retrieveBlog(){
    $.getJSON(getBlog)
        .done(function (json) {
            console.log(json.length > 0);
            if(json.length > 0) {
                $.each(json, function (id, data) {                    
                    $('#bitmoto-blog-title').append(
                        '<h1 class="bitmoto-blog-title"> '+ data.Blog.title + '</h1>'
                    );
                    window.blogUrl = data.Blog.url;
                });
                
                // build the blog components
                buildBlog();
            } else {
                // the blog did not exist
                $('#bitmoto-blog-body').append('<div class="BlogError">The blog could not be found.</div>');
            }
        })
        .fail(function (jqxhr, textStatus, error) {
            var err = textStatus + ", " + error;
            console.log("Request Failed: " + err);
            return null;
        });
}

/*
 * This will also build the blog once the retrieveBlog finnishing its request
 */
function buildBlog(){
    // create the category list
    createCategoryList();
    
    // get params from url    
    params = get_params(location.search);
    if (params["article"] != null) {
        console.log('article');
        var article = getArticle + params["article"] + '.jsonp';
        retrieveArticle(article);
    } else if (params["category"] != null) { // check to see if the category param is null
        console.log('category');
        var category = getCategoryArticles + params["category"] + '.jsonp';
        retrieveArticles(category);
    } else {
        console.log('articles');
        retrieveArticles(getArticles);
    }
}

$(document).ready(function () {
    // dynamically load and add this .css file
    loadjscssfile("https://apps.bitmotomarketing.com/api/main.css", "css");
    
    // create the body
    createBody();
    
    // get the blog info
    retrieveBlog(); // will also build the blog
});
