// https://www.codewars.com/kata/62ad72443809a4006998218a

// Create a function that takes in a list of button inputs and returns the final state.

function likeOrDislike(buttons) {
    return buttons
            .reduce( (state,button) => button===state ? Nothing : button , Nothing );
}