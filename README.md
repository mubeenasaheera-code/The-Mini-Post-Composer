Project Challenge: The Mini-Post Composer
The Goal
Build a text box where a user can type a post, with a character counter that changes behavior when they go over a 20-character limit.
The Requirements
The Input Box (Events & State):
Create a <textarea> or <input> box. Use an onChange event to update a state variable called text every time she types.
The Live Counter (State):
Display the current number of characters typed underneath the box (e.g., "Characters: 12").
The Limit Alert (useEffect):
Use a useEffect that "watches" the text state. If the character count goes over 20 characters, update a different state variable (like isOverLimit) to true.
Visual Change:
If isOverLimit is true, display a warning message like "Too long! Please shorten your post." or change the text color to red.
