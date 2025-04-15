<center><h1>CSS</h1></center>
Cascading Style Sheets is a stylesheet language used to describe the presentation of a document written in markup languages like HTML, XML, etc.<br />
<br />
There are 3 ways of applying CSS to our document
<ul>
    <li>external stylesheet 
    <li>internal stylesheet
    <li>inline styling
</ul>

If we use all the ways together, inline styling has the highest priority. The other 2 have same priority and the one that is given priority depends upon which is declared later. Priority is only checked if the properties are clashing, otherwise all of them will be applied.


<img src = "./CSS_Anatomy.png" width = 400px style = "display : block; margin : auto" alt = "CSS Anatomy" /><br />
<center>Rule Set</center><br />


**Errors**<br />
If there is some error in CSS, it will just be ignored. One way to know the errors is to validate your css online on platforms like W3C.


<h2>Selectors</h2>
1) <b>Element Selector</b> - Selects all the elements of that type in the document. Example : 

```css
body{
}; 
p{
}
```
<hr />
2) <b>Class Selector</b> - Selects all elements that have the specified class name. We need to put a period (.) before the class name. Example : 

```css
.grey{
}
```
<hr />
3) <b>ID Selector</b> - Selects the element with the specified ID. We need to put a hash(#) before the id name. Example : 

```css
#itlics{
} 
```
<br />
We should avoid using ID Selectors in CSS.<hr />
4) <b>Universal Selector</b> - Selects all the elements. Ex - 

```css
*{
}
```
<hr><br>

**Group and Combinators**<br />

We can group selectors like - 
<br />Same properties applied to both type of elements
```css
h1, h2{}
```
<br />

We can select nested elements like so - 
```css
h1 h2{}
```
This will give us all the h2 inside an h1<br /><br />

We can select direct child like -

```css
h1>h2{}
```
<br /><br />
We can select adjacent siblings with -
```css
h1+h2{}
```
<br /><br />
We can select general seblings with - 
```css
h1~h2{}
```
<br /><br />
**Cascading and Specificity** - 
CSS reads from top to down applying rules, that means whichever rule is applied last will override the same rule if mentioned before it as well.This only applied to selectors of same specificity. Classes have more specificty than elements so they will override element rules even if they are written before the element rules.

*Note* - 1) You can check which CSS properties are applied and which are ignored using dev tools on the browser.<br />
2) `!Important` can overrider specificity but this should not be used

**Inheritance** - When we apply a property to a parent element is inherited by the children. Not all properties can be inherited.

*Note* - Form elements do not inherit properties by default. We can explicitly make them inherit by - <br />

```css
    button, input, textarea, select{
        font : inherit;
    }
```

<h2>Colors</h2>

**Background Color** 
```css
body{
    background-color: papayawhip;
    background: papayawhip;
}
```
We can use both the property names. `background-color` is only to set color while `background` lets us set other properties too.


**Font Color**
```css
body{
    color : #FFF;
}
```

**Different ways of setting colors**
```css
body{
    color : #0F11A3;
    color : #FA0;   /*if the pairs match, we can write hex code in short -> FFAA00*/
    color: red;
    color : rgb(123,230,55);
    color : rgba(123,230,55, 0.5);
    color: hsl(360, 39%, 46%);
}
```
There are more ways of representing colors but these are the common ones.

Use <a href = "https://coolors.co/">Coolers</a> website to generate color palletes and check contrast.


<h2>Units and Sizes</h2>

**Absolute Units**
<table>
<thead>
<tr>
<th>Unit</th>
<th>Name</th>
<th>Equivalent to</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>cm</code></td>
<td>Centimeters</td>
<td>1cm = 37.8px = 25.2/64in</td>
</tr>
<tr>
<td><code>mm</code></td>
<td>Millimeters</td>
<td>1mm = 1/10th of 1cm</td>
</tr>
<tr>
<td><code>Q</code></td>
<td>Quarter-millimeters</td>
<td>1Q = 1/40th of 1cm</td>
</tr>
<tr>
<td><code>in</code></td>
<td>Inches</td>
<td>1in = 2.54cm = 96px</td>
</tr>
<tr>
<td><code>pc</code></td>
<td>Picas</td>
<td>1pc = 1/6th of 1in</td>
</tr>
<tr>
<td><code>pt</code></td>
<td>Points</td>
<td>1pt = 1/72nd of 1in</td>
</tr>
<tr>
<td><code>px</code></td>
<td>Pixels</td>
<td>1px = 1/96th of 1in</td>
</tr>
</tbody>
</table>
<br>
The only value that is commonly used is px (pixels).<br /><br />

```css
p{
    font-size: 20px ; /*default size = 16px*/
}
```
**Note** - We should not use absolute font size as it takes away the ability of the user to change the font size from browser settings. There are ohter places we can use px like - border : 2px etc.
<br /><br />
**Relative units**

*percentage*
```css
h1{
    width : 50%
}
```
h1 will take 50% of its parent i.e 50% of what is available to it.
<br /><br />
*rem* - font size of the root element<br />
*em* - font size of the parent element

```css
p{
    font-size : 1.5rem
}

p{
    font-size : 1.5em
}
```
**Imp** - It's good practice to use `rem` instead of `em`. We can use `em` for things like margins and padding. When the font-size is set on an element, then `em` doesn't look at the parent it looks at the element itself.

```css
h1{
    font-size : 3rem;
    padding : 0.5em;    /*0.5 of the font size of h1*/
}
```
<br /><br />
**CSS Reset**
The browser adds some default css to our elements. We can remove that if we want.
```css
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}
```
<br /><br />
*vh* - 1% of the viewport heigth<br />
*vw* - 1% of the viewport width

```css
main{
    width:50vw;
}
```
Use `dvh` and `dvw` instead of `vh` and `vw` as it<br />
    ->Doesn’t shrink when mobile UI (like the address bar) shows/hides.<br />
    ->Provides consistent behavior, especially on mobile devices.