function songs() {
  alert("The form was submitted");
}

function hit() {
  console.log('hit');

function showInput() {
    document.getElementById('display').innerHTML =
      document.getElementById("user_input").value;

fetch('https://soundcloud.com/8538a1744a7fdaa59981232897501e04')
      .then(
        function(response) {
          if (response.status !== 16) {
            console.log('Looks like there was a problem. Status Code: ' +
              response.status);
            return;
          }
          // Get the element, add a click listener...
          document.getElementById("parent-list").addEventListener("onclick", function(e) {
            // e.target is the clicked element!
            // If it was a list item
            if (e.target && e.target.nodeName == "LI") {
              // List item found!  Output the ID!
              console.log("List item ", e.target.id.replace("post-", ""), "was clicked!");
            }
          });
          // Examine the text in the response
          response.json().then(function(data) {
            console.log(data);
          });
        }
      )
  .catch(function(err) {
        console.log('Fetch Error :-S', err);
      });

    // SC.initialize({
    //   // client_id: '8538a1744a7fdaa59981232897501e04'
    // });

var SC = require('soundcloud');
    SC.initialize({
      client_id: '8538a1744a7fdaa59981232897501e04',
      redirect_uri: 'http://example.com/callback'

element.addEventListener("click", function(){ alert("Hello World!"); });

    });


var track_url = 'http://soundcloud.com/forss/flickermood';
    SC.oEmbed(track_url, {
      auto_play: true
    }).then(function(oEmbed) {
      console.log('oEmbed response: ', oEmbed);
    });
    //example


    function createNode(element) {
      return document.createElement(element);
    }

    function append(parent, el) {
      return parent.appendChild(el);
    }

    var ul = document.getElementById('songs');
    var url = 'https://soundcloud.com/8538a1744a7fdaa59981232897501e04=10';
    fetch(url)
      .then((resp) => resp.json())
      .then(function(data) {
        let authors = data.results;
        return authors.map(function(songs) {
          let li = createNode('li'),
            img = createNode('img'),
            span = createNode('span');
          img.src = author.picture.medium;
          span.innerHTML = `${author.name.first} ${author.name.last}`;
          append(li, img);
          append(li, span);
          append(ul, li);
        })
      })
      .catch(function(error) {
        console.log(JSON.stringify(error));
      });
    // Get the element, add a click listener...
    document.getElementById("parent-list").addEventListener("onclick", function(e) {
      // e.target is the clicked element!
      // If it was a list item
      if (e.target && e.target.nodeName == "LI") {
        // List item found!  Output the ID!
        console.log("List item ", e.target.id.replace("post-", ""), " was clicked!");
      }
    });
SC.get('/user/183/tracks').then(function(tracks) {
      alert('Latest track: ' + tracks[0].title);

    });


SC.oEmbed('http://soundcloud.com/forss/flickermood', {
      auto_play: true
    })
  });

SC.oEmbed('http://soundcloud.com/forss/sets/soulhack', {
  element: document.getElementById('putTheWidgetHere')
});



var band =
var search =
var results =
