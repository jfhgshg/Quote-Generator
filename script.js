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
},{
    quote: `“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”`,
    writer: `- J.K. Rowling, Harry Potter and the Goblet of Fire`
},{
    quote: `“A friend is someone who knows all about you and still loves you.”`,
    writer: `-  Elbert Hubbard`
},{
    quote: `“It is better to be hated for what you are than to be loved for what you are not.”`,
    writer: `-  Andre Gide, Autumn Leaves`
},{
    quote: `“Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring.”`,
    writer: `-  Marilyn Monroe`
},{
    quote: `“Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.”`,
    writer: `-  Neil Gaiman, Coraline`
},{
    quote: `“I have not failed. I've just found 10,000 ways that won't work.”`,
    writer: `-  Thomas A. Edison`
},{
    quote: `“There is no greater agony than bearing an untold story inside you.”`,
    writer: `-  Maya Angelou, I Know Why the Caged Bird Sings`
},{
    quote: `“Never put off till tomorrow what may be done day after tomorrow just as well.”`,
    writer: `-  Mark Twain`
},{
    quote: `“We don't see things as they are, we see them as we are.”`,
    writer: `-  Anaïs Nin`
},{
    quote: `“Life isn't about finding yourself. Life is about creating yourself.”`,
    writer: `-  George Bernard Shaw`
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
