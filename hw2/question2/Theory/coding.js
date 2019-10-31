function display2_1() {
  var myanswer  = "My answer goes here: Outputs: saiyan.dragonbal -> undefined, null== undefined -> true, null===undefined -> false. " +
  "== is a check to see if the values are athe same. === checks if the types of the values are the same. null and undefined " + 
  "have the same value, but are not the same type." // TODO 2.1: Fill in Answer here after the :
  document.getElementById("21answer").innerHTML = myanswer; // Do not change
}
function display2_2() {
  var myanswer  = "My answer goes here: Original Output: ReferenceError: assignment to undeclared variable x. Output without \"using strict\""+
  " does not result in an error. \"using strict \" makes it so that variables must be defined before they are used, or in this case reassigned. " +
  "That is why there was an error in the first case, but not the second." // TODO 2.2: Fill in Answer here
  document.getElementById("22answer").innerHTML = myanswer; // Do not change
}

function display2_5() {
  var myanswer  = "My answer goes here: The children that the method finds is based on the tag that is passes in, not what we can see on the page." +
  " This is why we get returned children that are set to display none, not just html tags that we can see. We also only see direct children with this "+
  "because it is not getting all child nodes of an element, just direct children." // TODO 2.5: Fill in Answer here
  document.getElementById("25answer").innerHTML = myanswer; // Do not change
}

function countDiv() { // Do not add or remove lines to this function
    var divs = document.getElementsByTagName('div'); // TODO: Question 2.3: Use the document Object to get the number of divs in the HTML page. Replace dummyMethod with the correct one.
    alert("Number of divs in this page is: " + divs.length); // Do not change 
}

function makeOrange() { // Do not add or remove lines to this function
    var narutos = document.getElementsByName('naruto'); // TODO: Question 2.4: Use the document Object to get all tags named "naruto" in the HTML page. Replace dummyMethod with the correct one.
    for(var i=0; i< narutos.length; i++) { // Do not change
        narutos[i].style.color = 'orange'; // Do not change
    }
}

function getChildrenTags() { // Do not add or remove lines to this function
  var children = document.getElementById("div_1134").children; // TODO: Question 2.5 Use the appropriate function to get all the children of a div named 'div_1134'
  var tagNames = ""; // Do not change
  for (var i = 0; i < children.length; i++) {// Do not change
    console.log(children[i].tagName);// Do not change
    tagNames += children[i].tagName +", " ;// Do not change
  }// Do not change
  alert(children.length); // Do not change
  alert("The tags that I found are: " + tagNames);// Do not change
}

