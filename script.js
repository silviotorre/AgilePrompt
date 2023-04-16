/**
 * This script handles the form submission and dynamically generates a prompt based on the user input.
 * It listens for the 'submit' event on the form, prevents the default form submission action, and retrieves the form values.
 * Then, it checks if the values exist before appending them to the prompt. If the 'add-code' checkbox is checked, it adds the code snippet text to the prompt.
 * Finally, it creates a new paragraph element and sets the generated prompt as the content before appending it to the document body.
 *
 * Form elements:
 * - 'active-user': The role of the active user (e.g., Engineer, Manager, etc.)
 * - 'action': The action/s to perform (e.g., write a script, create a diagram, etc.)
 * - 'auspicious-result': The expected result or output of the action
 * - 'conditions': The conditions for accepting the result
 * - 'add-code': A checkbox to determine if a code snippet should be included in the prompt
 *
 * Example prompt output:
 * Act as Engineer and do these: write a script to obtain this: list of active connections. The acceptance conditions are: must use PowerShell. Add this code snippet: // your code here
 */
const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const activeUser = form.elements['active-user'].value;
  const action = form.elements['action'].value;
  const auspiciousResult = form.elements['auspicious-result'].value;
  const conditions = form.elements['conditions'].value;
  const addCode = form.elements['add-code'].checked;

  let prompt = "";

  if (activeUser) {
    prompt += `Act as ${activeUser} `;
  }

  if (action) {
    prompt += `and do these: ${action} `;
  }

  if (auspiciousResult) {
    prompt += `to obtain this: ${auspiciousResult}. `;
  }

  if (conditions) {
    prompt += `The acceptance conditions are: ${conditions}.`;
  }

  if (addCode) {
    prompt += " Add this code snippet: // your code here";
  }

  const promptOutput = document.createElement('p');
  promptOutput.textContent = prompt;

  document.body.appendChild(promptOutput);
});

