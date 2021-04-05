##Daily Journal 12

<b>What problems does the Observer Pattern seek to solve?</b>

<p></p>

<b>What are the three mechanisms of the observer pattern?</b>

<p>The subscribe method-Grabs a list of observed events and pushes them into an array.

  The unsubscribe method-Takes out whateve matches with the callback from the array.
  
  The broadcast method- Executes all of the callbacks.</p>

<b>Review the code generated from the bcw-template and reflect on the proxy objects from yesterday, and your understanding of the observer pattern today. With this knowledge, explain how the magic of the bcw-template uses these two concepts to manage and update the dom.</b>

<p>The bcw-template has the ability to put data into the DOM and remove it with the commands 'mkdir', 'touch', and 'rm'/'rf'. The user types in the command, the bcw-template executes the command and updates the DOM.</p>