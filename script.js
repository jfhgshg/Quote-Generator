const quotes = [{
    quote: `"You only live once, but if you do it right, once is enough."`,
    writer: `- Mae West`
}, {
    quote: `"If you want to live a happy life, tie it to a goal, not to people or things."`,
    writer: `- Albert Einstein`
}, {
    quote: `"Never let the fear of striking out keep you from playing the game."`,
    writer: `- Babe Ruth`
}, {
    quote: `"Your time is limited, so don't waste it living someone else’s life."`,
    writer: `- Steve Jobs`
}, {
    quote: `"In order to write about life first you must live it."`,
    writer: `- Ernest Hemingway`
}, {
    quote: `"Life is not a problem to be solved, but a reality to be experienced."`,
    writer: `- Soren Kierkegaard`
}, {
    quote: `"The unexamined life is not worth living."`,
    writer: `- Socrates`
}, {
    quote: `"Turn your wounds into wisdom."`,
    writer: `- Oprah Winfrey`
}, {
    quote: `"The purpose of our lives is to be happy."`,
    writer: `- Dalai Lama`
}, {
    quote: `"Live for each second without hesitation."`,
    writer: `- Elton John`
}, {
    quote: `"Ignorance more often begets confidence than knowledge."`,
    writer: `-  Charles Darwin`
},{
    quote: `"The future belongs to those who believe in the beauty of their dreams."`,
    writer: `-  Eleanor Roosevelt`
},{
    quote: `"Do not go where the path may lead, go instead where there is no path and leave a trail."`,
    writer: `-  Ralph Waldo Emerson`
},{
    quote: `"Always remember that you are absolutely unique. Just like everyone else."`,
    writer: `-  Margaret Mead`
},{
    quote: `"Go confidently in the direction of your dreams! Live the life you've imagined."`,
    writer: `-  Henry David Thoreau`
},{
    quote: `"Love the life you live. Live the life you love."`,
    writer: `-  Bob Marley`
},
]





let btn = document.querySelector("#Qbtn");

let quote = document.querySelector(".quote");

let writer = document.querySelector(".writer");






btn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * quotes.length);
    
    
    quote.innerHTML = quotes[random].quote;

    
    writer.innerHTML = quotes[random].writer;
})
