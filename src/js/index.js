import './components/Navigation';
import './vendors/Swiper';
import './components/Map';


window.fbAsyncInit = function () {
  FB.init({
    appId: '1329746923830171',
    autoLogAppEvents: true,
    xfbml: true,
    status: true,
    version: 'v3.2'
  });


  const renderPosts = (posts) => {

    posts.forEach(post => {
      document.body.innerHTML += '<p>' + post.message + '</p>';
      // const postImg = document.createElement('IMG');
      // postImg.src = post.full_picture;
      // document.body.appendChild(postImg);
    });



  };

  var pageAccessToken = 'EAAS5ZAdUJO5sBAEJ2erHnBckJhTMvvdc31Mbt4OxkPNRSKh76ucOVqT2JqRMRqiGlsOhMa0rbSZBPAMybf8rEUkWNp91JLRhVhPpVTq66UZBi4ZCxqRyNL2SN2YZCZBosib0ANUWHJrruzLk52KiI3rXhn1zLZBF9m8ZC1ZAL0q8YsAZDZD';
  var query = 'IcebreakersBand/posts';
  FB.api('/' + query, {
    access_token: pageAccessToken,
    fields: 'full_picture,picture,message,created_time'
  }, function (response) {
    const posts = response.data;

    renderPosts(posts);

  });
};