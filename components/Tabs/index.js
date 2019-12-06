// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response=>{
        console.log(response.data); 
        response.data.topics.forEach(element => {   
            //create new tab component
            function createTab(element){
                const tab = document.createElement('div'); //create element
                tab.classList.add('tab'); //add class
                tab.textContent = element; //add content
                return tab;
            }
            //select parent element
            const parentElement = document.querySelector('.topics');
            parentElement.appendChild(createTab(element));

        });//end loop
        
    })