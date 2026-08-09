// https://www.codewars.com/kata/56896f078dcf3e886c000067

// Generate HTML links

// We need a HTML menu.... but writing HTML over and-over-again is boooring... Let's just generate it instead!
// Task:

// Write a function generateMenu() with the following inputs/output:

// Inputs:

// menuItems: An array of objects (with url and text properties), which represents our menu items

// Output:

// A string of HTML containing an anchor tag for each element of menuItems (with the appropriate href attribute and text content)

function generateMenu (menuItems) {
    var html = ""
    if (menuItems.length === 0) return html
    for (var i = 0; i < menuItems.length; i++) {
        html += '<a href=\"'+ menuItems[i].url +'\">'+ menuItems[i].text +'</a>'
    }
    return html
}