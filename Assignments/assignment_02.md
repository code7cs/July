1. em Vs rem

While `em` is relative to the font-size of its direct or nearest parent, 
`rem` is only relative to the html (root) font-size.

2. css selectors:

`.class`
Selects all elements that have the given class attribute.

 `#id`
 Selects an element based on the value of its id attribute. 
 There should be only one element with a given ID in a document.

`div ~ p`
The ~ combinator selects siblings. 
This means that the second element follows the first (though not necessarily immediately), 
and both share the same parent.

`div p`
The   (space) combinator selects nodes that are descendants of the first element.

`div > p`
The > combinator selects nodes that are direct children of the first element.

`div + p`
The + combinator selects adjacent siblings. 
This means that the second element directly follows the first, 
and both share the same parent.

`[target]`
Selects all elements that have the given attribute.

`p:first-child`
The :first-child CSS pseudo-class represents the first element among a group of sibling elements.

`p::first-letter`
The ::first-letter CSS pseudo-element applies styles to the first letter of the first line of a block-level element, 
but only when not preceded by other content (such as images or inline tables).

`p::first-line`
The ::first-line CSS pseudo-element applies styles to the first line of a block-level element. 
Note that the length of the first line depends on many factors, 
including the width of the element, the width of the document, and the font size of the text.

`p::first-of-type`
The :nth-of-type() CSS pseudo-class matches elements of a given type (tag name), 
based on their position among a group of siblings.

`input:readonly`
The :read-only CSS pseudo-class represents an element (such as input or textarea) that is not editable by the user.

`input:required`
The :required CSS pseudo-class represents any `<input>, <select>, or <textarea>` element that has the required attribute set on it.
