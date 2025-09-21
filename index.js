// Step 1: Simulate User Behavior
// - Add event listeners for button clicks and form submissions.
// - Use JavaScript to dynamically update the DOM based on user actions.
function addElementToDOM(containerId, text) {
    const container = document.getElementById(containerId)
    if (container) {
        const div = document.createElement('div')
        div.textContent = text
        container.appendChild(div)
    }
}

function removeElementFromDOM(elementId) {
    const el = document.getElementById(elementId)
    if (el && el.parentNode) {
        el.parentNode.removeChild(el)
    }
}

function simulateClick(containerId, message) {
    const container = document.getElementById(containerId)
    if (container) {
        container.textContent = message
    }
}

function handleFormSubmit(formId, containerId) {
    const input = document.getElementById('user-input')
    const container = document.getElementById(containerId)
    const error = document.getElementById('error-message')
    if (!input || !container || !error) return
    error.textContent = ''
    error.classList.add('hidden')

    const value = input.value.trim()
    if (!value) {
        error.textContent = 'Input cannot be empty'
        error.classList.remove('hidden')
        return
    }

    const div = document.createElement('div')
    div.textContent = value
    container.appendChild(div)
}

// Step 2: DOM Manipulation Functions
// - Implement functions to add, update, and remove DOM elements.
// - Ensure all elements are dynamically created with appropriate attributes and content.

// Step 3: Error Handling
// - Display error messages in the DOM for invalid inputs or missing elements.
// - Create reusable functions to handle common error cases.

// Step 4: Reusable Utilities
// - Create modular utility functions, such as createElement(tag, attributes).
// - Ensure all functions follow DRY principles for maintainability.


module.exports = {
    addElementToDOM,
    removeElementFromDOM,
    simulateClick,
    handleFormSubmit,
}