// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response =>{
        console.log(response.data);
        const articles = Object.values(response.data.articles); //converted object to array
        for (const article of articles){ //loop through array of objects
            console.log(article)
                article.forEach(item =>{ 
                console.log(item);
                //select parent Element
                const parentElement = document.querySelector('.cards-container');
                //append cards to parent Element
                parentElement.appendChild(createCard(item));
            }) //end forEach Article loop
        } //end object array loop    
    })

    function createCard(item){ //create card for each article 
        //create elements
        const card = document.createElement('div'),
            headline = document.createElement('div'),
            author = document.createElement('div'),
            img_container = document.createElement('div'),
            img = document.createElement('img'),
            byAuthor = document.createElement('span');

        //add classes
        card.classList.add('card');
        headline.classList.add('headline');
        author.classList.add('author');
        img_container.classList.add('img-container');

        //add properties
        img.src = item.authorPhoto;

        //add content
        headline.textContent = item.headline;
        byAuthor.textContent = `By ${item.authorName}`;

        //append elements
        card.appendChild(headline);
        card.appendChild(author);
        author.appendChild(img_container);
        img_container.appendChild(img);
        author.appendChild(byAuthor);

        return card;
    } //end function