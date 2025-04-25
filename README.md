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
<p style="display: block; width: fit-content; margin: 0 auto;">Rule Set</p><br />


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


<h2>Box Model</h2><br />
<img src = "https://www.hubspot.com/hs-fs/hubfs/css%20box%20model_2.webp?width=700&height=480&name=css%20box%20model_2.webp" alt = "box model" width = "50%" style = "display : block; margin : auto">
<br /><br />

**box-sizing** - <br />

*`border-box`* : width and height specified include the content, padding, and border, and the browser adjusts the content area to fit within those dimensions. <br />
*`content-box`* : the width and height specified are for the content area only, and padding and borders are added on top of that, increasing the overall size.

**Note** - We can check our element's box model in the dev tools, in the computed tab.

**Margin And Padding**

Ways to set margins and paddings - <br />
1. Shorthand property 
```css
h1
{
    margin: 10px; /* all sides */
    padding: 10px 20px; /* top/bottom 10px, right/left 20px */
    margin: 10px 20px 30px; /* top, right/left, bottom */
    padding: 10px 20px 30px 40px; /* top, right, bottom, left */
}
```
<br />

2. Individual sides
```css
h1{
    margin-top: 10px;
    padding-right: 20px;
    padding-bottom: 30px;
    margin-left: 40px;
}
```
<br />

3. Using `auto` for centering

```css
h1{
    margin: 0 auto; /* horizontally centers a block element */
    padding : 0 auto;
}
```
<br />

**Border**<br />

Ways to set border - <br />

1. Shorthand border property
```css
h1{
    /* syntax: border: [width] [style] [color]; 
        This sets all 4 sides */
    border: 2px solid black;
}
```
<br />

2. Individual sides
```css
h1{
    border-top: 2px dashed red;
    border-right: 3px solid green;
    border-bottom: 1px dotted blue;
    border-left: 4px double purple;
}
```
<br />

3. Separate properties<br />

You can control border width, style, and color individually:
```css
h1{
    border-width: 2px;
    border-style: solid;
    border-color: black;
}
```

Or for individual sides:
```css
h1{
    border-top-width: 2px;
    border-right-style: dashed;
    border-left-color: blue;
}
```
<br />

4. Border radius (rounded corners)
```css
h1{
    border-radius: 10px;            /* all corners */
    border-radius: 10px 0 10px 0;   /* top-left, top-right, bottom-right, bottom-left */
}
```
<br />

5. Border image
```css
h1{
    border: 10px solid transparent;
    border-image: url(border.png) 30 round;
}
```
<br />

**Note** - `outline` is also written like border but it's not part of the box model. We can offest the outline using the property `outline-offset`. 

<h2>Texts and Fonts</h2>
<br />

**Note** - forms and buttons do not inherit font by default and we need to explicitly mention that.

**Text Properties**

1. *Text Decoration*

<table class="min-w-full" data-start="111" data-end="838"><thead data-start="111" data-end="199"><tr data-start="111" data-end="199"><th data-start="111" data-end="139">Property</th><th data-start="139" data-end="184">Values</th><th data-start="184" data-end="199">Description</th></tr></thead><tbody data-start="289" data-end="838"><tr data-start="289" data-end="436"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="289" data-end="317"><code data-start="291" data-end="308">text-decoration</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)] min-w-[calc(var(--thread-content-max-width)/3)]" data-start="317" data-end="389"><code data-start="319" data-end="325">none</code>, <code data-start="327" data-end="338">underline</code>, <code data-start="340" data-end="350">overline</code>, <code data-start="352" data-end="366">line-through</code>, <code data-start="368" data-end="375">blink</code> (deprecated)</td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)] min-w-[calc(var(--thread-content-max-width)/3)]" data-start="389" data-end="436">Shorthand to add or remove decorative lines</td></tr><tr data-start="437" data-end="541"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="437" data-end="465"><code data-start="439" data-end="461">text-decoration-line</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="465" data-end="510"><code data-start="467" data-end="478">underline</code>, <code data-start="480" data-end="490">overline</code>, <code data-start="492" data-end="506">line-through</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="510" data-end="541">Controls which line appears</td></tr><tr data-start="542" data-end="639"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="542" data-end="570"><code data-start="544" data-end="567">text-decoration-style</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="570" data-end="618"><code data-start="572" data-end="579">solid</code>, <code data-start="581" data-end="589">dotted</code>, <code data-start="591" data-end="599">dashed</code>, <code data-start="601" data-end="609">double</code>, <code data-start="611" data-end="617">wavy</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="618" data-end="639">Style of the line</td></tr><tr data-start="640" data-end="734"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="640" data-end="668"><code data-start="642" data-end="665">text-decoration-color</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="668" data-end="713">Any color value (<code data-start="687" data-end="692">red</code>, <code data-start="694" data-end="700">#000</code>, <code data-start="702" data-end="709">rgb()</code>)</td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="713" data-end="734">Color of the line</td></tr><tr data-start="735" data-end="838"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="735" data-end="763"><code data-start="737" data-end="760">text-underline-offset</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="763" data-end="808"><code data-start="765" data-end="769">px</code>, <code data-start="771" data-end="775">em</code>, etc.</td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="808" data-end="838">Moves underline up or down</td></tr></tbody></table>
<br /><br />

2. *Text Transform*
<table class="min-w-full" data-start="871" data-end="1093"><thead data-start="871" data-end="935"><tr data-start="871" data-end="935"><th data-start="871" data-end="890">Property</th><th data-start="890" data-end="920">Values</th><th data-start="920" data-end="935">Description</th></tr></thead><tbody data-start="1001" data-end="1093"><tr data-start="1001" data-end="1093"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="1001" data-end="1020"><code data-start="1003" data-end="1019">text-transform</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="1020" data-end="1069"><code data-start="1022" data-end="1028">none</code>, <code data-start="1030" data-end="1041">uppercase</code>, <code data-start="1043" data-end="1054">lowercase</code>, <code data-start="1056" data-end="1068">capitalize</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="1069" data-end="1093">Changes case of text</td></tr></tbody></table>

Capatalize makes the first letter of each word capital
<br /><br />

3. *Text Align*
<table class="min-w-full" data-start="1122" data-end="1694"><thead data-start="1122" data-end="1194"><tr data-start="1122" data-end="1194"><th data-start="1122" data-end="1141">Property</th><th data-start="1141" data-end="1179">Values</th><th data-start="1179" data-end="1194">Description</th></tr></thead><tbody data-start="1269" data-end="1694"><tr data-start="1269" data-end="1371"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="1269" data-end="1288"><code data-start="1271" data-end="1283">text-align</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="1288" data-end="1343"><code data-start="1290" data-end="1296">left</code>, <code data-start="1298" data-end="1305">right</code>, <code data-start="1307" data-end="1315">center</code>, <code data-start="1317" data-end="1326">justify</code>, <code data-start="1328" data-end="1335">start</code>, <code data-start="1337" data-end="1342">end</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="1343" data-end="1371">Aligns text horizontally</td></tr><tr data-start="1372" data-end="1484"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="1372" data-end="1391"><code data-start="1374" data-end="1390">vertical-align</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)] min-w-[calc(var(--thread-content-max-width)/3)]" data-start="1391" data-end="1447"><code data-start="1393" data-end="1403">baseline</code>, <code data-start="1405" data-end="1410">top</code>, <code data-start="1412" data-end="1420">middle</code>, <code data-start="1422" data-end="1430">bottom</code>, <code data-start="1432" data-end="1437">sub</code>, <code data-start="1439" data-end="1446">super</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="1447" data-end="1484">Aligns inline elements vertically</td></tr><tr data-start="1485" data-end="1582"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="1485" data-end="1504"><code data-start="1487" data-end="1504">text-align-last</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="1504" data-end="1543"><code data-start="1506" data-end="1512">left</code>, <code data-start="1514" data-end="1521">right</code>, <code data-start="1523" data-end="1531">center</code>, <code data-start="1533" data-end="1542">justify</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="1543" data-end="1582">Aligns the last line in a paragraph</td></tr><tr data-start="1583" data-end="1694"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="1583" data-end="1602"><code data-start="1585" data-end="1596">direction</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="1602" data-end="1640"><code data-start="1604" data-end="1609">ltr</code>, <code data-start="1611" data-end="1616">rtl</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)] min-w-[calc(var(--thread-content-max-width)/3)]" data-start="1640" data-end="1694">Sets left-to-right or right-to-left text direction</td></tr></tbody></table>
<br /><br />

There are many other properties too like `text-indent`, `word-spacing`, `letter-spacing`, `line-height` etc.
<br /><br />

**Font Properties**

<table class="min-w-full" data-start="165" data-end="715"><thead data-start="165" data-end="198"><tr data-start="165" data-end="198"><th data-start="165" data-end="183">Property</th><th data-start="183" data-end="198">Description</th></tr></thead><tbody data-start="232" data-end="715"><tr data-start="232" data-end="306"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="232" data-end="250"><code data-start="234" data-end="247">font-family</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)] min-w-[calc(var(--thread-content-max-width)/3)]" data-start="250" data-end="306">Sets the font type (e.g. Arial, Georgia, sans-serif)</td></tr><tr data-start="307" data-end="391"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="307" data-end="325"><code data-start="309" data-end="320">font-size</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)] min-w-[calc(var(--thread-content-max-width)/3)]" data-start="325" data-end="391">Controls the size of the font (e.g. <code data-start="363" data-end="369">16px</code>, <code data-start="371" data-end="378">1.2em</code>, <code data-start="380" data-end="388">larger</code>)</td></tr><tr data-start="392" data-end="480"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="392" data-end="410"><code data-start="394" data-end="407">font-weight</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)] min-w-[calc(var(--thread-content-max-width)/3)]" data-start="410" data-end="480">Controls the thickness of the font (<code data-start="448" data-end="456">normal</code>, <code data-start="458" data-end="464">bold</code>, <code data-start="466" data-end="471">100</code>–<code data-start="472" data-end="477">900</code>)</td></tr><tr data-start="481" data-end="561"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="481" data-end="499"><code data-start="483" data-end="495">font-style</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)] min-w-[calc(var(--thread-content-max-width)/3)]" data-start="499" data-end="561">Sets italic or normal text (<code data-start="529" data-end="537">normal</code>, <code data-start="539" data-end="547">italic</code>, <code data-start="549" data-end="558">oblique</code>)</td></tr><tr data-start="562" data-end="628"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="562" data-end="580"><code data-start="564" data-end="578">font-variant</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="580" data-end="628">Controls small-caps (<code data-start="603" data-end="611">normal</code>, <code data-start="613" data-end="625">small-caps</code>)</td></tr><tr data-start="629" data-end="715"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="629" data-end="647"><code data-start="631" data-end="644">line-height</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)] min-w-[calc(var(--thread-content-max-width)/3)]" data-start="647" data-end="715">Controls the vertical spacing between lines (e.g. <code data-start="699" data-end="704">1.5</code>, <code data-start="706" data-end="712">20px</code>)</td></tr></tbody></table>
<br /><br />

*Shorthand*: `font`
```css
font: italic small-caps bold 16px/1.5 "Helvetica", sans-serif;
```

**Note** - We can provide multiple font families in a single property. This makes the first one the main family and down the line every font becomes a backup with decresing priority.

**Web Safe Fonts** -Web-safe fonts are fonts that are pre-installed on most operating systems and devices, so you can safely use them in CSS without worrying too much about compatibility.
<br /><br />

**<u>Loading External Fonts</u>**
<br />
*Using Link* - Get the link tag from the font site like Google fonts and paste it before you link your stylesheet.
<br />
*Using Import* - Get the import url and paste it on the top of your css file.

<br />

<h3>Hypertext Links</h3>

Links are underlined by default. We can remove that by using -
```css
a{
    text-decoration : none;
}
```
<br>
We can change the color of the links in various states like default, visited and active (holding down mouse1 on the link)

```css
a{
    color : red;
}

a:visited{
    color: purple;
}

a:hover{
    color: darkred;
    opacity : 0.8;
}
```

`visited`, `active`, `focus` and `hover` are pseudo classes.<br />
These pseudo classes have same specificity, so their order matters.

We can chain pseudo classes like `a:visited:hover`.<br />

We can change other things as well like `background`.

<h2>List Styles</h2>
<table class="min-w-full" data-start="163" data-end="538"><thead data-start="163" data-end="189"><tr data-start="163" data-end="189"><th data-start="163" data-end="174">Property</th><th data-start="174" data-end="189">Description</th></tr></thead><tbody data-start="217" data-end="538"><tr data-start="217" data-end="290"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="217" data-end="237"><code data-start="219" data-end="236">list-style-type</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)] min-w-[calc(var(--thread-content-max-width)/3)]" data-start="237" data-end="290">Defines the type of marker (bullet, number, etc.)</td></tr><tr data-start="291" data-end="386"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="291" data-end="315"><code data-start="293" data-end="314">list-style-position</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)] min-w-[calc(var(--thread-content-max-width)/3)]" data-start="315" data-end="386">Specifies whether the marker is inside or outside the list item box</td></tr><tr data-start="387" data-end="469"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="387" data-end="408"><code data-start="389" data-end="407">list-style-image</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)] min-w-[calc(var(--thread-content-max-width)/3)]" data-start="408" data-end="469">Replaces the default bullet or number with a custom image</td></tr><tr data-start="470" data-end="538"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="470" data-end="485"><code data-start="472" data-end="484">list-style</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)] min-w-[calc(var(--thread-content-max-width)/3)]" data-start="485" data-end="538">A shorthand to combine the above three properties</td></tr></tbody></table>

We can add attributes like `start` and `reversed` to `ol` tag which allows us to start the start the list from the desired number and reverse the numeric order respectively.


```css
ul {
  list-style-type: disc;         /* options: disc, circle, square, none */
  list-style-position: outside;  /* options: inside, outside */
}

ol {
  list-style-type: decimal;      /* options: decimal, lower-roman, upper-alpha, etc. */
}

ul.custom {
  list-style-image: url('bullet.png');
}
```
<br />

`list-style-position` is a CSS property that controls where the bullet or number appears in relation to the content of a list item 

```css
list-style-position: inside | outside;
```

**Relevant Pseudo Classes**
<br />

*Item Position*
```css
li:first-child      /* First <li> in the list */
li:last-child       /* Last <li> in the list */
li:nth-child(2)     /* 2nd <li> */
li:nth-child(odd)   /* Odd-numbered <li>s */
li:nth-child(even)  /* Even-numbered <li>s */
li:nth-of-type(3)   /* 3rd <li> of its type */
```

<br />

*Negation*
```css
li:not(:last-child) /* All but the last <li> */
```
<br />

*Empty List Items*
```css
li:empty            /* Selects <li> elements with no content */
```
<br />

**Relevant Pseudo Element**

`::marker` targets the bullet (•) of `ul` or the number (1., 2., etc.) of `ol` list items.

```css
ul
{
    list-style-type : none;
}

li::marker {
    color: red;
    font-size: 1.2em;
    content: "🔥 ";
}
```

<h2>Display Properties</h2>
<br />

There are 3 type of diplay properties - `block`, `inline` and `inline-block`
<br />

`block` - Block level elements have 100% width (of what is available to them, not necessarily the viewport) and some margin by default.<br />They stack over each other.


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
<p style="display: block; width: fit-content; margin: 0 auto;">Rule Set</p><br />


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


<h2>Box Model</h2><br />
<img src = "https://www.hubspot.com/hs-fs/hubfs/css%20box%20model_2.webp?width=700&height=480&name=css%20box%20model_2.webp" alt = "box model" width = "50%" style = "display : block; margin : auto">
<br /><br />

**box-sizing** - <br />

*`border-box`* : width and height specified include the content, padding, and border, and the browser adjusts the content area to fit within those dimensions. <br />
*`content-box`* : the width and height specified are for the content area only, and padding and borders are added on top of that, increasing the overall size.

**Note** - We can check our element's box model in the dev tools, in the computed tab.

**Margin And Padding**

Ways to set margins and paddings - <br />
1. Shorthand property 
```css
h1
{
    margin: 10px; /* all sides */
    padding: 10px 20px; /* top/bottom 10px, right/left 20px */
    margin: 10px 20px 30px; /* top, right/left, bottom */
    padding: 10px 20px 30px 40px; /* top, right, bottom, left */
}
```
<br />

2. Individual sides
```css
h1{
    margin-top: 10px;
    padding-right: 20px;
    padding-bottom: 30px;
    margin-left: 40px;
}
```
<br />

3. Using `auto` for centering

```css
h1{
    margin: 0 auto; /* horizontally centers a block element */
    padding : 0 auto;
}
```
<br />

**Border**<br />

Ways to set border - <br />

1. Shorthand border property
```css
h1{
    /* syntax: border: [width] [style] [color]; 
        This sets all 4 sides */
    border: 2px solid black;
}
```
<br />

2. Individual sides
```css
h1{
    border-top: 2px dashed red;
    border-right: 3px solid green;
    border-bottom: 1px dotted blue;
    border-left: 4px double purple;
}
```
<br />

3. Separate properties<br />

You can control border width, style, and color individually:
```css
h1{
    border-width: 2px;
    border-style: solid;
    border-color: black;
}
```

Or for individual sides:
```css
h1{
    border-top-width: 2px;
    border-right-style: dashed;
    border-left-color: blue;
}
```
<br />

4. Border radius (rounded corners)
```css
h1{
    border-radius: 10px;            /* all corners */
    border-radius: 10px 0 10px 0;   /* top-left, top-right, bottom-right, bottom-left */
}
```
<br />

5. Border image
```css
h1{
    border: 10px solid transparent;
    border-image: url(border.png) 30 round;
}
```
<br />

**Note** - `outline` is also written like border but it's not part of the box model. We can offest the outline using the property `outline-offset`. 

<h2>Texts and Fonts</h2>
<br />

**Note** - forms and buttons do not inherit font by default and we need to explicitly mention that.

**Text Properties**

1. *Text Decoration*

<table class="min-w-full" data-start="111" data-end="838"><thead data-start="111" data-end="199"><tr data-start="111" data-end="199"><th data-start="111" data-end="139">Property</th><th data-start="139" data-end="184">Values</th><th data-start="184" data-end="199">Description</th></tr></thead><tbody data-start="289" data-end="838"><tr data-start="289" data-end="436"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="289" data-end="317"><code data-start="291" data-end="308">text-decoration</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)] min-w-[calc(var(--thread-content-max-width)/3)]" data-start="317" data-end="389"><code data-start="319" data-end="325">none</code>, <code data-start="327" data-end="338">underline</code>, <code data-start="340" data-end="350">overline</code>, <code data-start="352" data-end="366">line-through</code>, <code data-start="368" data-end="375">blink</code> (deprecated)</td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)] min-w-[calc(var(--thread-content-max-width)/3)]" data-start="389" data-end="436">Shorthand to add or remove decorative lines</td></tr><tr data-start="437" data-end="541"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="437" data-end="465"><code data-start="439" data-end="461">text-decoration-line</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="465" data-end="510"><code data-start="467" data-end="478">underline</code>, <code data-start="480" data-end="490">overline</code>, <code data-start="492" data-end="506">line-through</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="510" data-end="541">Controls which line appears</td></tr><tr data-start="542" data-end="639"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="542" data-end="570"><code data-start="544" data-end="567">text-decoration-style</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="570" data-end="618"><code data-start="572" data-end="579">solid</code>, <code data-start="581" data-end="589">dotted</code>, <code data-start="591" data-end="599">dashed</code>, <code data-start="601" data-end="609">double</code>, <code data-start="611" data-end="617">wavy</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="618" data-end="639">Style of the line</td></tr><tr data-start="640" data-end="734"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="640" data-end="668"><code data-start="642" data-end="665">text-decoration-color</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="668" data-end="713">Any color value (<code data-start="687" data-end="692">red</code>, <code data-start="694" data-end="700">#000</code>, <code data-start="702" data-end="709">rgb()</code>)</td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="713" data-end="734">Color of the line</td></tr><tr data-start="735" data-end="838"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="735" data-end="763"><code data-start="737" data-end="760">text-underline-offset</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="763" data-end="808"><code data-start="765" data-end="769">px</code>, <code data-start="771" data-end="775">em</code>, etc.</td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="808" data-end="838">Moves underline up or down</td></tr></tbody></table>
<br /><br />

2. *Text Transform*
<table class="min-w-full" data-start="871" data-end="1093"><thead data-start="871" data-end="935"><tr data-start="871" data-end="935"><th data-start="871" data-end="890">Property</th><th data-start="890" data-end="920">Values</th><th data-start="920" data-end="935">Description</th></tr></thead><tbody data-start="1001" data-end="1093"><tr data-start="1001" data-end="1093"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="1001" data-end="1020"><code data-start="1003" data-end="1019">text-transform</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="1020" data-end="1069"><code data-start="1022" data-end="1028">none</code>, <code data-start="1030" data-end="1041">uppercase</code>, <code data-start="1043" data-end="1054">lowercase</code>, <code data-start="1056" data-end="1068">capitalize</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="1069" data-end="1093">Changes case of text</td></tr></tbody></table>

Capatalize makes the first letter of each word capital
<br /><br />

3. *Text Align*
<table class="min-w-full" data-start="1122" data-end="1694"><thead data-start="1122" data-end="1194"><tr data-start="1122" data-end="1194"><th data-start="1122" data-end="1141">Property</th><th data-start="1141" data-end="1179">Values</th><th data-start="1179" data-end="1194">Description</th></tr></thead><tbody data-start="1269" data-end="1694"><tr data-start="1269" data-end="1371"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="1269" data-end="1288"><code data-start="1271" data-end="1283">text-align</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="1288" data-end="1343"><code data-start="1290" data-end="1296">left</code>, <code data-start="1298" data-end="1305">right</code>, <code data-start="1307" data-end="1315">center</code>, <code data-start="1317" data-end="1326">justify</code>, <code data-start="1328" data-end="1335">start</code>, <code data-start="1337" data-end="1342">end</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="1343" data-end="1371">Aligns text horizontally</td></tr><tr data-start="1372" data-end="1484"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="1372" data-end="1391"><code data-start="1374" data-end="1390">vertical-align</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)] min-w-[calc(var(--thread-content-max-width)/3)]" data-start="1391" data-end="1447"><code data-start="1393" data-end="1403">baseline</code>, <code data-start="1405" data-end="1410">top</code>, <code data-start="1412" data-end="1420">middle</code>, <code data-start="1422" data-end="1430">bottom</code>, <code data-start="1432" data-end="1437">sub</code>, <code data-start="1439" data-end="1446">super</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="1447" data-end="1484">Aligns inline elements vertically</td></tr><tr data-start="1485" data-end="1582"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="1485" data-end="1504"><code data-start="1487" data-end="1504">text-align-last</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="1504" data-end="1543"><code data-start="1506" data-end="1512">left</code>, <code data-start="1514" data-end="1521">right</code>, <code data-start="1523" data-end="1531">center</code>, <code data-start="1533" data-end="1542">justify</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="1543" data-end="1582">Aligns the last line in a paragraph</td></tr><tr data-start="1583" data-end="1694"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="1583" data-end="1602"><code data-start="1585" data-end="1596">direction</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="1602" data-end="1640"><code data-start="1604" data-end="1609">ltr</code>, <code data-start="1611" data-end="1616">rtl</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)] min-w-[calc(var(--thread-content-max-width)/3)]" data-start="1640" data-end="1694">Sets left-to-right or right-to-left text direction</td></tr></tbody></table>
<br /><br />

There are many other properties too like `text-indent`, `word-spacing`, `letter-spacing`, `line-height` etc.
<br /><br />

**Font Properties**

<table class="min-w-full" data-start="165" data-end="715"><thead data-start="165" data-end="198"><tr data-start="165" data-end="198"><th data-start="165" data-end="183">Property</th><th data-start="183" data-end="198">Description</th></tr></thead><tbody data-start="232" data-end="715"><tr data-start="232" data-end="306"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="232" data-end="250"><code data-start="234" data-end="247">font-family</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)] min-w-[calc(var(--thread-content-max-width)/3)]" data-start="250" data-end="306">Sets the font type (e.g. Arial, Georgia, sans-serif)</td></tr><tr data-start="307" data-end="391"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="307" data-end="325"><code data-start="309" data-end="320">font-size</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)] min-w-[calc(var(--thread-content-max-width)/3)]" data-start="325" data-end="391">Controls the size of the font (e.g. <code data-start="363" data-end="369">16px</code>, <code data-start="371" data-end="378">1.2em</code>, <code data-start="380" data-end="388">larger</code>)</td></tr><tr data-start="392" data-end="480"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="392" data-end="410"><code data-start="394" data-end="407">font-weight</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)] min-w-[calc(var(--thread-content-max-width)/3)]" data-start="410" data-end="480">Controls the thickness of the font (<code data-start="448" data-end="456">normal</code>, <code data-start="458" data-end="464">bold</code>, <code data-start="466" data-end="471">100</code>–<code data-start="472" data-end="477">900</code>)</td></tr><tr data-start="481" data-end="561"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="481" data-end="499"><code data-start="483" data-end="495">font-style</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)] min-w-[calc(var(--thread-content-max-width)/3)]" data-start="499" data-end="561">Sets italic or normal text (<code data-start="529" data-end="537">normal</code>, <code data-start="539" data-end="547">italic</code>, <code data-start="549" data-end="558">oblique</code>)</td></tr><tr data-start="562" data-end="628"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="562" data-end="580"><code data-start="564" data-end="578">font-variant</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="580" data-end="628">Controls small-caps (<code data-start="603" data-end="611">normal</code>, <code data-start="613" data-end="625">small-caps</code>)</td></tr><tr data-start="629" data-end="715"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="629" data-end="647"><code data-start="631" data-end="644">line-height</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)] min-w-[calc(var(--thread-content-max-width)/3)]" data-start="647" data-end="715">Controls the vertical spacing between lines (e.g. <code data-start="699" data-end="704">1.5</code>, <code data-start="706" data-end="712">20px</code>)</td></tr></tbody></table>
<br /><br />

*Shorthand*: `font`
```css
font: italic small-caps bold 16px/1.5 "Helvetica", sans-serif;
```

**Note** - We can provide multiple font families in a single property. This makes the first one the main family and down the line every font becomes a backup with decresing priority.

**Web Safe Fonts** -Web-safe fonts are fonts that are pre-installed on most operating systems and devices, so you can safely use them in CSS without worrying too much about compatibility.
<br /><br />

**<u>Loading External Fonts</u>**
<br />
*Using Link* - Get the link tag from the font site like Google fonts and paste it before you link your stylesheet.
<br />
*Using Import* - Get the import url and paste it on the top of your css file.

<br />

<h3>Hypertext Links</h3>

Links are underlined by default. We can remove that by using -
```css
a{
    text-decoration : none;
}
```
<br>
We can change the color of the links in various states like default, visited and active (holding down mouse1 on the link)

```css
a{
    color : red;
}

a:visited{
    color: purple;
}

a:hover{
    color: darkred;
    opacity : 0.8;
}
```

`visited`, `active`, `focus` and `hover` are pseudo classes.<br />
These pseudo classes have same specificity, so their order matters.

We can chain pseudo classes like `a:visited:hover`.<br />

We can change other things as well like `background`.

<h2>List Styles</h2>
<table class="min-w-full" data-start="163" data-end="538"><thead data-start="163" data-end="189"><tr data-start="163" data-end="189"><th data-start="163" data-end="174">Property</th><th data-start="174" data-end="189">Description</th></tr></thead><tbody data-start="217" data-end="538"><tr data-start="217" data-end="290"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="217" data-end="237"><code data-start="219" data-end="236">list-style-type</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)] min-w-[calc(var(--thread-content-max-width)/3)]" data-start="237" data-end="290">Defines the type of marker (bullet, number, etc.)</td></tr><tr data-start="291" data-end="386"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="291" data-end="315"><code data-start="293" data-end="314">list-style-position</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)] min-w-[calc(var(--thread-content-max-width)/3)]" data-start="315" data-end="386">Specifies whether the marker is inside or outside the list item box</td></tr><tr data-start="387" data-end="469"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="387" data-end="408"><code data-start="389" data-end="407">list-style-image</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)] min-w-[calc(var(--thread-content-max-width)/3)]" data-start="408" data-end="469">Replaces the default bullet or number with a custom image</td></tr><tr data-start="470" data-end="538"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="470" data-end="485"><code data-start="472" data-end="484">list-style</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)] min-w-[calc(var(--thread-content-max-width)/3)]" data-start="485" data-end="538">A shorthand to combine the above three properties</td></tr></tbody></table>

We can add attributes like `start` and `reversed` to `ol` tag which allows us to start the start the list from the desired number and reverse the numeric order respectively.


```css
ul {
  list-style-type: disc;         /* options: disc, circle, square, none */
  list-style-position: outside;  /* options: inside, outside */
}

ol {
  list-style-type: decimal;      /* options: decimal, lower-roman, upper-alpha, etc. */
}

ul.custom {
  list-style-image: url('bullet.png');
}
```
<br />

`list-style-position` is a CSS property that controls where the bullet or number appears in relation to the content of a list item 

```css
list-style-position: inside | outside;
```

**Relevant Pseudo Classes**
<br />

*Item Position*
```css
li:first-child      /* First <li> in the list */
li:last-child       /* Last <li> in the list */
li:nth-child(2)     /* 2nd <li> */
li:nth-child(odd)   /* Odd-numbered <li>s */
li:nth-child(even)  /* Even-numbered <li>s */
li:nth-of-type(3)   /* 3rd <li> of its type */
```

<br />

*Negation*
```css
li:not(:last-child) /* All but the last <li> */
```
<br />

*Empty List Items*
```css
li:empty            /* Selects <li> elements with no content */
```
<br />

**Relevant Pseudo Element**

`::marker` targets the bullet (•) of `ul` or the number (1., 2., etc.) of `ol` list items.

```css
ul
{
    list-style-type : none;
}

li::marker {
    color: red;
    font-size: 1.2em;
    content: "🔥 ";
}
```

<h2>Display Properties</h2>
<br />

There are many types of diplay properties, 4 of them are  - `block`, `inline`, `inline-block` and `none`.
<br />

`none` - hides the elements. This interrupts accessibility.

`block` - Block level elements have 100% width (of what is available to them, not necessarily the viewport) and some margin by default. They stack over each other.<br />

`inline` - Inline level elements just takes the space of the content inside them. We can only apply left/right margin or height.

`inline-block` - It a mix of both inline and block.It allows inline elements to have margins and height without overlapping other elements.

<table class="min-w-full" data-start="1035" data-end="1638"><thead data-start="1035" data-end="1120"><tr data-start="1035" data-end="1120"><th data-start="1035" data-end="1065">Feature</th><th data-start="1065" data-end="1082"><code data-start="1067" data-end="1075">inline</code></th><th data-start="1082" data-end="1100"><code data-start="1084" data-end="1091">block</code></th><th data-start="1100" data-end="1120"><code data-start="1102" data-end="1116">inline-block</code></th></tr></thead><tbody data-start="1208" data-end="1638"><tr data-start="1208" data-end="1284"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="1208" data-end="1238">Flows inline with text</td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="1238" data-end="1254">✅</td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="1254" data-end="1279">❌ (starts on new line)</td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="1279" data-end="1284">✅</td></tr><tr data-start="1285" data-end="1370"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="1285" data-end="1317">Respects <code data-start="1296" data-end="1303">width</code> and <code data-start="1308" data-end="1316">height</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="1317" data-end="1333">❌</td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="1333" data-end="1351">✅</td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="1351" data-end="1370">✅</td></tr><tr data-start="1371" data-end="1456"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="1371" data-end="1401">Accepts margin/padding</td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="1401" data-end="1419">Only left/right</td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="1419" data-end="1437">✅</td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="1437" data-end="1456">✅</td></tr><tr data-start="1457" data-end="1540"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="1457" data-end="1487">Stacks with other elements</td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="1487" data-end="1503">✅</td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="1503" data-end="1521">❌</td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="1521" data-end="1540">✅</td></tr><tr data-start="1541" data-end="1638"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="1541" data-end="1571">Use cases</td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="1571" data-end="1589">Links, spans</td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="1589" data-end="1608">Divs, sections</td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="1608" data-end="1638">Buttons, badges, nav items</td></tr></tbody></table>

<h2>Floats and Clears</h2>

The `float` property moves an element to the left or right, allowing text and inline elements to wrap around it.

```HTML
<img src="food.jpg" class="float-img">
<p>This text wraps around the image.</p>
```
```css
.float-img {
  float: left;
  margin-right: 1rem;
  width: 200px;
}
```

We can use the `clear` property to the space around `float`. 

**Note** - Floated elements are removed from the normal document flow. This might create problems when `float` is inside a container. The container might collapse if there is nothing execpt the `float` element inside it.<br />
To fix this we can use the `display : flow-root` property in the container.
<br />

<h2>Columns</h2>
CSS Columns let you flow content into multiple vertical columns, automatically splitting the content.

<table class="min-w-full" data-start="620" data-end="1231"><thead data-start="620" data-end="716"><tr data-start="620" data-end="716"><th data-start="620" data-end="640">Property</th><th data-start="640" data-end="680">What it does</th><th data-start="680" data-end="716">Example</th></tr></thead><tbody data-start="814" data-end="1231"><tr data-start="814" data-end="910"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="814" data-end="833"><code data-start="816" data-end="830">column-count</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="833" data-end="874">Number of columns</td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="874" data-end="910"><code data-start="876" data-end="894">column-count: 2;</code></td></tr><tr data-start="911" data-end="1033"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="911" data-end="930"><code data-start="913" data-end="927">column-width</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)] min-w-[calc(var(--thread-content-max-width)/3)]" data-start="930" data-end="997">Desired width of each column (browser adjusts number of columns)</td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="997" data-end="1033"><code data-start="999" data-end="1021">column-width: 200px;</code></td></tr><tr data-start="1034" data-end="1130"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="1034" data-end="1053"><code data-start="1036" data-end="1048">column-gap</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="1053" data-end="1094">Space between columns</td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="1094" data-end="1130"><code data-start="1096" data-end="1116">column-gap: 1.5em;</code></td></tr><tr data-start="1131" data-end="1231"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="1131" data-end="1150"><code data-start="1133" data-end="1146">column-rule</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)] min-w-[calc(var(--thread-content-max-width)/3)]" data-start="1150" data-end="1196">Adds a line between columns (like a border)</td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="1196" data-end="1231"><code data-start="1198" data-end="1228">column-rule: 1px solid #ccc;</code></td></tr></tbody></table>


**Note** - `column` automatically adds margin on top and bottom of its child elements. The bottom margin of an element overlaps with the top margin of the next element (margin collapsing).  
<br /><br />
*Adding Headers to Columns*<br />

`break-inside: avoid` -> prevents the header to split between columns. <br /><br />
`break-before: column` -> This will always keep header on the top of a column. But this creates an issue when viewport can only have one column, since this forces a column break, it will reduce the font size to make columns.<br /><br />
`column-span: all;` → allows an element (like a heading) to span across all columns.


<h2>Position Property</h2>

<table class="min-w-full" data-start="445" data-end="1109"><thead data-start="445" data-end="539"><tr data-start="445" data-end="539"><th data-start="445" data-end="460">Value</th><th data-start="460" data-end="539">Description</th></tr></thead><tbody data-start="635" data-end="1109"><tr data-start="635" data-end="729"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="635" data-end="650"><code data-start="637" data-end="645">static</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)] min-w-[calc(var(--thread-content-max-width)/3)]" data-start="650" data-end="729">Default value. The element stays in normal document flow. No offset allowed.</td></tr><tr data-start="730" data-end="824"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="730" data-end="745"><code data-start="732" data-end="742">relative</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)] min-w-[calc(var(--thread-content-max-width)/3)]" data-start="745" data-end="824">Element stays in flow, <strong data-start="770" data-end="791">but can be nudged</strong> using <code data-start="798" data-end="803">top</code>, <code data-start="805" data-end="811">left</code>, etc.</td></tr><tr data-start="825" data-end="919"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="825" data-end="840"><code data-start="827" data-end="837">absolute</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)] min-w-[calc(var(--thread-content-max-width)/3)]" data-start="840" data-end="919">Removed from flow, positioned <strong data-start="872" data-end="915">relative to nearest positioned ancestor</strong>.</td></tr><tr data-start="920" data-end="1014"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="920" data-end="935"><code data-start="922" data-end="929">fixed</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)] min-w-[calc(var(--thread-content-max-width)/3)]" data-start="935" data-end="1014">Removed from flow, positioned <strong data-start="967" data-end="995">relative to the viewport</strong> (screen).</td></tr><tr data-start="1015" data-end="1109"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="1015" data-end="1030"><code data-start="1017" data-end="1025">sticky</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)] min-w-[calc(var(--thread-content-max-width)/3)]" data-start="1030" data-end="1109">Acts like <code data-start="1042" data-end="1052">relative</code> until it hits a scroll threshold, then <strong data-start="1092" data-end="1102">sticks</strong>.</td></tr></tbody></table>


**Note** - `absolute` - If no ancestor is found with `position : relative|absolute|fixed` property, it positions relative to <html> (the document).


`z-index` - If 2 elements overlap, the one declared later in the HTML will be rendered on top unless we use the `z-index` property to explicitly decide which element should be on top. Higher number = in front  


Accessibility using `absolute` - We can use `position: absolute` to position an element very far away from the viewport but it will still be part of our HTML so it will be processed by a screen reader.