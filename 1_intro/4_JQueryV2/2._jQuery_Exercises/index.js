""
//Check whether Javascript is applied
console.log($);

/*
Styling
1. Change the body tag so that everything on the page is centered.
2. Change the text of "Old title" to "New title".
3. Change the background color of the subtitle box to any color you like.
4. Make sure that the temp-subtitle isn't displayed without actually removing the element from DOM. Hint: ZGlzcGxheTogbm9uZQ==
5. Put a dashed border box of any pixel width around any div that has the class "reason"
*/

//1. Jquery selecter (which takes body). Uses CSS to align everything in center
$("body").css("text-align", "center");
//2. Jquery selecter takes title h2 and changes the old text to new
$("#title h2").text("New Title");
//3. Jquery selecter - subtitle box
$(".subtitle-box").css("background-color", "lightgreen");
//4. Jquery Selecter -> .temp class -> set visibility to hidden through css
$(".temp").css("visibility", "hidden");
//5.
$(".first-list li:[1]").css("border-style", "dashed");














/*
//Jquery selecter temp 
$(".temp").css("visibility", "hidden");

$("#first-list li").css("font-weight", "bold");

//7 
$("#first-list").children().last().css("text-decoration", "underline");
//8
$("#first-list li:nth-child(2)").css("text-decoration", "line-through");

//11
$("#unused-label").remove(); 
//12
$(".unused-box").append("<p>Second Sentence</p>");
//13
$(".unused-box").prepend("<p>First Sentence</p>");

$(".unused-box").attr("class", "used-box");

//15. You know what. Let's additionally add a class name on the box called used-boxed-clicked. Every time the box is clicked it should toggle this class (add if not there or remove if there).
$(".used-box").on("click", (event) => {
    console.log($(event.currenntTarget).parent());
    $(event.currenntTarget).toggleClass("used-box-clicked");
});

*/
/* Assignment
Hints are Base64 encoded.
Using jQuery only and without modifying the html, do the following:

Styling
1. Change the body tag so that everything on the page is centered.
2. Change the text of "Old title" to "New title".
3. Change the background color of the subtitle box to any color you like.
4. Make sure that the temp-subtitle isn't displayed without actually removing the element from DOM. Hint: ZGlzcGxheTogbm9uZQ==
5. Put a dashed border box of any pixel width around any div that has the class "reason"

Ordered list: Traversing the DOM
6. Change the li's inside of the ordered list to be bold. Hint: RGlyZWN0IGNoaWxkIHNlbGVjdG9ycw==
7. Change the last li to be underlined.  Hint: cHNldWRvIHNlbGVjdG9ycw==
8. Change the second li element to have a line through it.

Unordered List
9: Change all the elements inside of the second-list to italics in one query. Hint: VGhlIGNoaWxkcmVuIHNlbGVjdG9yLiBBbmQgbXVsdGlwbGUgc2VsZWN0b3I=
10. Change the span font size in the unordered list to be half as small. Using em is better than pixels. Why is that?
Unused-box: Adding and removing DOM nodes, Dynamic content, When the document is ready
11. Remove the first label element in the unused box.
12. Add a paragraph that says "Second Sentence".
13. After finishing 12 add a paragraph before it that says "First Sentence".
14. You can finally change the class name of unused-box to used-box.
15. You know what. Let's additionally add a class name on the box called used-boxed-clicked. Every time the box is clicked it should toggle this class (add if not there or remove if there).

Button, Event-handling
16. On mousing over the submit-button add a title property that says "You're ready to click." Remove the text when the mouse isn't over the button anymore.
17. On mouse click add a reason to the ordered list. The reason should start from Reason 4 and count up after every click.
18. Console log the parent div when the button is clicked using a direct reference to the button inside of the event handler scope. Hint: JCh0aGlzKS5wYXJlbnQoKTs=
Extra challenges (No jquery needed, just edit the HTML or the CSS in the head)

19. Extra challenge: Style the website until you think it looks good.
20. Add a tooltip to the button. You can apply it directly to the HTML and add CSS.
21. Figure out how to animate the border of the box from exercise 5 like a "neon sign". You are allowed to use code snippets found online but you are required to understand what each thing does to your element.

Extra challenge with FLEX
22. Use flex. Remove the "text-align: center;" value from the first assignment. Have the titles be centered with full page width.
    Place first-list to the left. It automatically takes a lot of width. Try to limit it. Hint VHJ5IHVzaW5nICdkaXNwbGF5OiBpbmxpbmUtYmxvY2s7Jw==
    Place second-list to the right of the previously list.
    Place the button group at the lower right of the page.


*/