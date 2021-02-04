// Event Bubbling & Capturing


//As a developer I want...

//a form to appear in place of the 'Add Emoji' button when the 'Add Emoji' button is clicked
//an emoji can be entered into the input, submitted, and added to the "Emoji Bank"
//an alert saying "Emoji Submitted!" whenever an emoji is submitted
//the form turns back into the 'Add Emoji' button once an emoji has been successfully submitted
//an emoji I click on turns into '🤪'

// select the Add Emoji button 
// const addEmojiArea = () => document.querySelector('#add-emoji-area')
const addEmojiArea =  document.querySelector('#add-emoji-area')
const addEmojiBtn = document.getElementById('add-button')
const emojiBank = document.getElementById('emoji-bank')

// Add an event listener for a click to the button 
// addEmojiBtn.addEventListener('click', event => {
//     console.log(event)
// })

// addEmojiBtn.addEventListener('click', function (event){
//     console.log(event)
// })

// addEmojiBtn.addEventListener('click', (event) => handleClickEvent(event.target))

addEmojiArea.addEventListener('click', handleClick)

function handleClick(e){
    if(e.target.id === 'add-button'){
        // this.remove() or event.target.remove() or addEmojiButton.remove() are same thing
        //remove button
        // add the form
        handleClickEvent(e)

    }else if(e.target.id === 'create-emoji'){
        // add the emoji to the page 
        // remove form
        // put button back
        handleSubmit(e)
    }
    console.log("i was clicked")

}



// addEmojiBtn.addEventListener('click', handleClickEvent)

function handleClickEvent(event){
    // remove the button
    // addEmojiBtn.remove()
    addEmojiArea.innerHTML = `
        <form id="emoji-form">
            <input type="text" name="emoji" id="new-emoji"></input>
            <input id="create-emoji" type="submit" value="Create Emoji"></input>
        </form>
    `
    // create a form element 
    // document.createElement('form')
    // append it 
    
    // add event listener to the form 
    // const form = document.getElementById('emoji-form')
    // form.addEventListener('submit', handleSubmit)
}

function handleSubmit(event){
    console.log('in handle submit function')
    // prevent the defaul POST action
    event.preventDefault()
    // grab the emoji in the input field
    let emoji = document.getElementById('new-emoji').value
    // add that emoji to the list 
    emojiBank.innerHTML += `<li class="emoji">${emoji}</li>`
    // reset the page so that the form is gone & the button is back
  
    // addEmojiArea().innerHTML = `<button id="add-button">Add Emoji</button>`
    addEmojiArea.innerHTML = ""
    addEmojiArea.append(addEmojiBtn)
}
