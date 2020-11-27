/** code by Larrick*/

let colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

const quoteArray = [{quote: '“If you have a dream, don’t just sit there. Gather courage to believe that you can succeed and leave no stone unturned to make it a reality.”', author: 'Dr Roopleen'}, {quote: '“A story is a letter that the author writes to himself, to tell himself things that he would be unable to discover otherwise.”', author: 'Carlos Ruiz Zafón'}, {quote: '“Don’t let mental blocks control you. Set yourself free. Confront your fear and turn the mental blocks into building blocks.”', author: 'Dr Roopleen'}, {quote: '“Quiet people have the loudest minds.”', author: 'Stephen King'}, {quote: '“Be yourself; everyone else is already taken.”', author: 'Oscar Wilde'}, {quote: '“You\'ve gotta dance like there\'s nobody watching, Love like you\'ll never be hurt, Sing like there\'s nobody listening, And live like it\'s heaven on earth.”', author: 'William W. Purkey'}, {quote: '“Be the change that you wish to see in the world.”', author: 'Mahatma Gandhi'}, {quote: '“No one can make you feel inferior without your consent.”', author: 'Eleanor Roosevelt'}, {quote: '“Live as if you were to die tomorrow. Learn as if you were to live forever.”', author: 'Mahatma Gandhi'}, {quote: '“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”', author: 'Martin Luther King Jr'}, {quote: '“Without music, life would be a mistake.”', author: 'Friedrich Nietzsche'}, {quote: '“Imperfection is beauty, madness is genius and it\'s better to be absolutely ridiculous than absolutely boring.”', author: 'Marilyn Monroe'}, {quote: '“There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.”', author: 'Albert Einstein'}, {quote: '“Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.”', author: 'Bill Keane'}, {quote: '“I have not failed. I\'ve just found 10,000 ways that won\'t work.”', author: 'Thomas A. Edison'}, {quote: '“I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.”', author: 'Albert Einstein'}, {quote: '“Everything you can imagine is real.”', author: 'Pablo Picasso'}, {quote: '“You can never get a cup of tea large enough or a book long enough to suit me.”', author: 'C.S. Lewis'}, {quote: '“To the well-organized mind, death is but the next great adventure.”', author: 'J.K. Rowling'},{quote: '“Life isn\'t about finding yourself. Life is about creating yourself.”', author: 'George Bernard Shaw'}, {quote: '“Do what you can, with what you have, where you are.”', author: 'Theodore Roosevelt'}];

// function component
const getQuote = () => {
  
  let randQuote = Math.floor(Math.random() * quoteArray.length);
  
  let newQuote = quoteArray[randQuote];
  
  const colored = Math.floor(Math.random() * colors.length);

  const textcolor = colors[colored];
  
  $(".quote-text").animate({
          opacity: 0
        }, 500,
        function() {
          $(this).animate({
            opacity: 1
          }, 500);
          $('#text').text(newQuote.quote);
        });

      $(".quote-author").animate({
          opacity: 0
        }, 500,
        function() {
          $(this).animate({
            opacity: 1
          }, 500);
          $('#author').html(newQuote.author);
        });

      $("html body").animate({
        backgroundColor: textcolor,
        color: textcolor
      }, 1000);
      $(".button").animate({
        backgroundColor: textcolor
      }, 1000);
 }
  
$(document).ready(function(){
  getQuote();
  $('#new-quote').on('click', getQuote);
  $('#tweet-quote').on('click', function(){
    $(this).attr('href', "http://twitter.com/intent/tweet");
    $('.fa-twitter').css('color', 'blue');
  });
  $('#like-quote').on('click', function(){
    let increment = 0;
    increment++;
 $('#incre').text(increment);
    $('.fa-thumbs-up').css('color', 'blue');
  });
  $('#dislike-quote').on('click', function(){
    let decrement = 0;
    decrement++;
 $('#decre').text(decrement);
    $('.fa-thumbs-down').css('color', 'blue');
  });
  $('#love').on('click', function(){
 $('.fa-heart').css('color', 'red');
  });
});