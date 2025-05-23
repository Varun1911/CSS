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


<h2> Flexbox </h2>

**Container Properties (applied to the flex parent)**

<table class="min-w-full" data-start="626" data-end="1056"><thead data-start="626" data-end="660"><tr data-start="626" data-end="660"><th data-start="626" data-end="645">Property</th><th data-start="645" data-end="660">Description</th></tr></thead><tbody data-start="696" data-end="1056"><tr data-start="696" data-end="743"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="696" data-end="715"><code data-start="698" data-end="713">display: flex</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="715" data-end="743">Activates Flexbox layout</td></tr><tr data-start="744" data-end="787"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="744" data-end="763"><code data-start="746" data-end="762">flex-direction</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="763" data-end="787">Row or column layout</td></tr><tr data-start="788" data-end="840"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="788" data-end="807"><code data-start="790" data-end="807">justify-content</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="807" data-end="840">Aligns items along the <strong data-start="822" data-end="838">Main axis</strong></td></tr><tr data-start="841" data-end="891"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="841" data-end="860"><code data-start="843" data-end="856">align-items</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="860" data-end="891">Aligns items along the <strong data-start="875" data-end="889">Cross axis</strong></td></tr><tr data-start="892" data-end="951"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="892" data-end="911"><code data-start="894" data-end="909">align-content</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="911" data-end="951">Aligns multiple rows (when wrapping)</td></tr><tr data-start="952" data-end="1008"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="952" data-end="971"><code data-start="954" data-end="965">flex-wrap</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="971" data-end="1008">Allows items to wrap to next line</td></tr><tr data-start="1009" data-end="1056"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="1009" data-end="1028"><code data-start="1011" data-end="1016">gap</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="1028" data-end="1056">Sets space between items</td></tr></tbody></table>
<br />

Shorthand -> 
`flex-flow` = `flex-direction` + `flex-wrap`
<br /><br /><br />


**Item Properties (applied to children of flex container)**
<table class="min-w-full" data-start="1127" data-end="1627"><thead data-start="1127" data-end="1161"><tr data-start="1127" data-end="1161"><th data-start="1127" data-end="1146">Property</th><th data-start="1146" data-end="1161">Description</th></tr></thead><tbody data-start="1197" data-end="1627"><tr data-start="1197" data-end="1278"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="1197" data-end="1216"><code data-start="1199" data-end="1205">flex</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)] min-w-[calc(var(--thread-content-max-width)/3)]" data-start="1216" data-end="1278">Shorthand for <code data-start="1232" data-end="1243">flex-grow</code>, <code data-start="1245" data-end="1258">flex-shrink</code>, and <code data-start="1264" data-end="1276">flex-basis</code></td></tr><tr data-start="1279" data-end="1349"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="1279" data-end="1298"><code data-start="1281" data-end="1292">flex-grow</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)] min-w-[calc(var(--thread-content-max-width)/3)]" data-start="1298" data-end="1349">Controls how much item grows relative to others</td></tr><tr data-start="1350" data-end="1423"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="1350" data-end="1369"><code data-start="1352" data-end="1365">flex-shrink</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)] min-w-[calc(var(--thread-content-max-width)/3)]" data-start="1369" data-end="1423">Controls how much item shrinks when space is tight</td></tr><tr data-start="1424" data-end="1487"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="1424" data-end="1443"><code data-start="1426" data-end="1438">flex-basis</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="1443" data-end="1487">Initial size before growing or shrinking</td></tr><tr data-start="1488" data-end="1554"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="1488" data-end="1507"><code data-start="1490" data-end="1502">align-self</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)] min-w-[calc(var(--thread-content-max-width)/3)]" data-start="1507" data-end="1554">Overrides <code data-start="1519" data-end="1532">align-items</code> for individual item</td></tr><tr data-start="1555" data-end="1627"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="1555" data-end="1574"><code data-start="1557" data-end="1564">order</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)] min-w-[calc(var(--thread-content-max-width)/3)]" data-start="1574" data-end="1627">Changes order of appearance without changing HTML</td></tr></tbody></table>

<br />

Shorthand -> 
`flex` = `flex-grow` + `flex-shrink` + `flex-basis`
<br /><br /><br />


**justify-content (horizontal alignment)**
<table class="min-w-full" data-start="2061" data-end="2515"><thead data-start="2061" data-end="2116"><tr data-start="2061" data-end="2116"><th data-start="2061" data-end="2079">Value</th><th data-start="2079" data-end="2116">Description</th></tr></thead><tbody data-start="2174" data-end="2515"><tr data-start="2174" data-end="2230"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="2174" data-end="2193"><code data-start="2176" data-end="2188">flex-start</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="2193" data-end="2230">Items align to the left/start</td></tr><tr data-start="2231" data-end="2287"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="2231" data-end="2250"><code data-start="2233" data-end="2243">flex-end</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="2250" data-end="2287">Items align to the right/end</td></tr><tr data-start="2288" data-end="2344"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="2288" data-end="2307"><code data-start="2290" data-end="2298">center</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="2307" data-end="2344">Items centered</td></tr><tr data-start="2345" data-end="2401"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="2345" data-end="2364"><code data-start="2347" data-end="2362">space-between</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="2364" data-end="2401">Equal space between items</td></tr><tr data-start="2402" data-end="2458"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="2402" data-end="2421"><code data-start="2404" data-end="2418">space-around</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="2421" data-end="2458">Equal space around items</td></tr><tr data-start="2459" data-end="2515"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="2459" data-end="2478"><code data-start="2461" data-end="2475">space-evenly</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="2478" data-end="2515">Equal space between and around</td></tr></tbody></table>

<br /><br />

**align-items (vertical alignment)**
<table class="min-w-full" data-start="2565" data-end="2961"><thead data-start="2565" data-end="2619"><tr data-start="2565" data-end="2619"><th data-start="2565" data-end="2580">Value</th><th data-start="2580" data-end="2619">Description</th></tr></thead><tbody data-start="2676" data-end="2961"><tr data-start="2676" data-end="2737"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="2676" data-end="2692"><code data-start="2678" data-end="2687">stretch</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)] min-w-[calc(var(--thread-content-max-width)/3)]" data-start="2692" data-end="2737">(default) Items stretch to fill container</td></tr><tr data-start="2738" data-end="2793"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="2738" data-end="2754"><code data-start="2740" data-end="2752">flex-start</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="2754" data-end="2793">Align items to the top/start</td></tr><tr data-start="2794" data-end="2849"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="2794" data-end="2810"><code data-start="2796" data-end="2806">flex-end</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="2810" data-end="2849">Align items to the bottom/end</td></tr><tr data-start="2850" data-end="2905"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="2850" data-end="2866"><code data-start="2852" data-end="2860">center</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="2866" data-end="2905">Align items vertically center</td></tr><tr data-start="2906" data-end="2961"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="2906" data-end="2922"><code data-start="2908" data-end="2918">baseline</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="2922" data-end="2961">Align by text baseline</td></tr></tbody></table>
<br /><br />

**flex-wrap**
<table class="min-w-full" data-start="3034" data-end="3262"><thead data-start="3034" data-end="3078"><tr data-start="3034" data-end="3078"><th data-start="3034" data-end="3044">Value</th><th data-start="3044" data-end="3078">Description</th></tr></thead><tbody data-start="3124" data-end="3262"><tr data-start="3124" data-end="3170"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="3124" data-end="3145"><code data-start="3126" data-end="3134">nowrap</code> (default)</td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="3145" data-end="3170">All items on one line</td></tr><tr data-start="3171" data-end="3216"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="3171" data-end="3182"><code data-start="3173" data-end="3179">wrap</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="3182" data-end="3216">Items wrap onto multiple lines</td></tr><tr data-start="3217" data-end="3262"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="3217" data-end="3234"><code data-start="3219" data-end="3233">wrap-reverse</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="3234" data-end="3262">Wrap in reverse order</td></tr></tbody></table>

<h2>Grid</h2>
CSS Grid is a powerful 2D layout system — perfect for creating both rows and columns at the same time, unlike Flexbox which is one-dimensional (row or column).<br /><br />
Now the container becomes a grid parent, and its direct children are grid items.<br /><br />

**Grid Container Properties**
<table class="min-w-full" data-start="176" data-end="1374"><thead data-start="176" data-end="213"><tr data-start="176" data-end="213"><th data-start="176" data-end="187" style="text-align: left;">Property</th><th data-start="187" data-end="202" style="text-align: left;">What it does</th><th data-start="202" data-end="213" style="text-align: left;">Example</th></tr></thead><tbody data-start="231" data-end="1374"><tr data-start="231" data-end="323"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="231" data-end="249" style="text-align: left;"><code data-start="233" data-end="248">display: grid</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="249" data-end="288" style="text-align: left;">Enables grid layout on the container</td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="288" data-end="323" style="text-align: left;"><code data-start="290" data-end="321">.container { display: grid; }</code></td></tr><tr data-start="324" data-end="423"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="324" data-end="350" style="text-align: left;"><code data-start="326" data-end="349">grid-template-columns</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="350" data-end="380" style="text-align: left;">Defines columns in the grid</td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="380" data-end="423" style="text-align: left;"><code data-start="382" data-end="421">grid-template-columns: 200px 1fr 2fr;</code></td></tr><tr data-start="424" data-end="516"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="424" data-end="447" style="text-align: left;"><code data-start="426" data-end="446">grid-template-rows</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="447" data-end="474" style="text-align: left;">Defines rows in the grid</td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="474" data-end="516" style="text-align: left;"><code data-start="476" data-end="514">grid-template-rows: 100px auto 50px;</code></td></tr><tr data-start="517" data-end="649"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="517" data-end="554" style="text-align: left;"><code data-start="519" data-end="524">gap</code> (or <code data-start="529" data-end="538">row-gap</code>, <code data-start="540" data-end="552">column-gap</code>)</td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="554" data-end="595" style="text-align: left;">Adds space between rows and/or columns</td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)] min-w-[calc(var(--thread-content-max-width)/3)]" data-start="595" data-end="649" style="text-align: left;"><code data-start="597" data-end="609">gap: 20px;</code> or <code data-start="613" data-end="647">row-gap: 10px; column-gap: 15px;</code></td></tr><tr data-start="650" data-end="765"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="650" data-end="674" style="text-align: left;"><code data-start="652" data-end="673">grid-template-areas</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="674" data-end="707" style="text-align: left;">Defines named areas for layout</td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)] min-w-[calc(var(--thread-content-max-width)/3)]" data-start="707" data-end="765" style="text-align: left;"><code data-start="709" data-end="763">grid-template-areas: "header header" "sidebar main";</code></td></tr><tr data-start="766" data-end="848"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="766" data-end="785" style="text-align: left;"><code data-start="768" data-end="784">grid-auto-rows</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="785" data-end="820" style="text-align: left;">Size of rows added automatically</td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="820" data-end="848" style="text-align: left;"><code data-start="822" data-end="846">grid-auto-rows: 100px;</code></td></tr><tr data-start="849" data-end="940"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="849" data-end="871" style="text-align: left;"><code data-start="851" data-end="870">grid-auto-columns</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="871" data-end="909" style="text-align: left;">Size of columns added automatically</td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="909" data-end="940" style="text-align: left;"><code data-start="911" data-end="938">grid-auto-columns: 200px;</code></td></tr><tr data-start="941" data-end="1025"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="941" data-end="960" style="text-align: left;"><code data-start="943" data-end="959">grid-auto-flow</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="960" data-end="996" style="text-align: left;">Controls auto-placement direction</td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="996" data-end="1025" style="text-align: left;"><code data-start="998" data-end="1023">grid-auto-flow: column;</code></td></tr><tr data-start="1026" data-end="1113"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="1026" data-end="1044" style="text-align: left;"><code data-start="1028" data-end="1043">justify-items</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="1044" data-end="1085" style="text-align: left;">Aligns items horizontally inside cells</td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="1085" data-end="1113" style="text-align: left;"><code data-start="1087" data-end="1111">justify-items: center;</code></td></tr><tr data-start="1114" data-end="1195"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="1114" data-end="1130" style="text-align: left;"><code data-start="1116" data-end="1129">align-items</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="1130" data-end="1169" style="text-align: left;">Aligns items vertically inside cells</td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="1169" data-end="1195" style="text-align: left;"><code data-start="1171" data-end="1193">align-items: center;</code></td></tr><tr data-start="1196" data-end="1291"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="1196" data-end="1216" style="text-align: left;"><code data-start="1198" data-end="1215">justify-content</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="1216" data-end="1254" style="text-align: left;">Aligns the entire grid horizontally</td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="1254" data-end="1291" style="text-align: left;"><code data-start="1256" data-end="1289">justify-content: space-between;</code></td></tr><tr data-start="1292" data-end="1374"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="1292" data-end="1310" style="text-align: left;"><code data-start="1294" data-end="1309">align-content</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="1310" data-end="1346" style="text-align: left;">Aligns the entire grid vertically</td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="1346" data-end="1374" style="text-align: left;"><code data-start="1348" data-end="1372">align-content: center;</code></td></tr></tbody></table>
<br /><br />

**Grid Item Properties**
<table class="min-w-full" data-start="1431" data-end="2118"><thead data-start="1431" data-end="1468"><tr data-start="1431" data-end="1468"><th data-start="1431" data-end="1442" style="text-align: left;">Property</th><th data-start="1442" data-end="1457" style="text-align: left;">What it does</th><th data-start="1457" data-end="1468" style="text-align: left;">Example</th></tr></thead><tbody data-start="1486" data-end="2118"><tr data-start="1486" data-end="1611"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="1486" data-end="1528" style="text-align: left;"><code data-start="1488" data-end="1507">grid-column-start</code> / <code data-start="1510" data-end="1527">grid-column-end</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="1528" data-end="1564" style="text-align: left;">Where item starts/ends on columns</td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)] min-w-[calc(var(--thread-content-max-width)/3)]" data-start="1564" data-end="1611" style="text-align: left;"><code data-start="1566" data-end="1609">grid-column-start: 1; grid-column-end: 3;</code></td></tr><tr data-start="1612" data-end="1722"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="1612" data-end="1648" style="text-align: left;"><code data-start="1614" data-end="1630">grid-row-start</code> / <code data-start="1633" data-end="1647">grid-row-end</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="1648" data-end="1681" style="text-align: left;">Where item starts/ends on rows</td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="1681" data-end="1722" style="text-align: left;"><code data-start="1683" data-end="1720">grid-row-start: 2; grid-row-end: 4;</code></td></tr><tr data-start="1723" data-end="1798"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="1723" data-end="1739" style="text-align: left;"><code data-start="1725" data-end="1738">grid-column</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="1739" data-end="1773" style="text-align: left;">Shorthand for start/end columns</td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="1773" data-end="1798" style="text-align: left;"><code data-start="1775" data-end="1796">grid-column: 1 / 3;</code></td></tr><tr data-start="1799" data-end="1865"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="1799" data-end="1812" style="text-align: left;"><code data-start="1801" data-end="1811">grid-row</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="1812" data-end="1843" style="text-align: left;">Shorthand for start/end rows</td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="1843" data-end="1865" style="text-align: left;"><code data-start="1845" data-end="1863">grid-row: 2 / 4;</code></td></tr><tr data-start="1866" data-end="1968"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="1866" data-end="1880" style="text-align: left;"><code data-start="1868" data-end="1879">grid-area</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="1880" data-end="1913" style="text-align: left;">Name or manually place an item</td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)] min-w-[calc(var(--thread-content-max-width)/3)]" data-start="1913" data-end="1968" style="text-align: left;"><code data-start="1915" data-end="1935">grid-area: header;</code> or <code data-start="1939" data-end="1966">grid-area: 1 / 2 / 3 / 4;</code></td></tr><tr data-start="1969" data-end="2045"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="1969" data-end="1986" style="text-align: left;"><code data-start="1971" data-end="1985">justify-self</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="1986" data-end="2021" style="text-align: left;">Align a single item horizontally</td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="2021" data-end="2045" style="text-align: left;"><code data-start="2023" data-end="2043">justify-self: end;</code></td></tr><tr data-start="2046" data-end="2118"><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="2046" data-end="2061" style="text-align: left;"><code data-start="2048" data-end="2060">align-self</code></td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="2061" data-end="2094" style="text-align: left;">Align a single item vertically</td><td class="max-w-[calc(var(--thread-content-max-width)*2/3)]" data-start="2094" data-end="2118" style="text-align: left;"><code data-start="2096" data-end="2116">align-self: start;</code></td></tr></tbody></table>
<br /><br />

**repeat()** function 
```css
    /* repeat(count, value) */
    grid-template-columns: repeat(3, 1fr);
    /* Same as: 1fr 1fr 1fr */
```
<br />

`place-content` -> shorthand for `align-content` + `justify-content`
 
<h2>Background Images</h2>

Always give some width and height to the images in the html file. This is recommended as it tells the browser to reserve space for the image. It wouldn't really use that value as we will override it in the css file but if the css fails to load the borwser will still reserve some space.


Images leave a little space below them. This is just like characters which have something below them like 'p', 'g' etc. There is some space below the base even if we dont give any padding. <br />
This is because images are inline elements and it was originally imagined to be used with some text, thus leaving some space below it. <br />
To remove this we can reset the images in the css like so :
```css
    display : block;
```
<br />

**Note** - Set some bg color under bg images as a backup in case the images do not load.
<br /><br />

**Background Repeat**

```css
background-repeat: repeat | repeat-x | repeat-y | no-repeat | space | round;
```

`repeat`: (default) The background image is repeated both horizontally and vertically.

`repeat-x`: The background image is repeated only horizontally.

`repeat-y`: The background image is repeated only vertically.

`no-repeat`: The background image is not repeated.

`space`: The image is repeated as many times as will fit without clipping, and extra space is distributed around the images.

`round`: The image is scaled so that it fits exactly an integer number of times in the container.
<br /><br /><br />

**Background Size**

```css
background-size: auto | cover | contain | <length> | <percentage>;
```

`auto`: (default) Keeps the image's original size.

`cover`: Scales the image to cover the entire container, possibly cropping it.

`contain`: Scales the image to fit entirely within the container, preserving aspect ratio.

`<length>` (e.g., `100px` `50px`): Sets the width and height explicitly.

`<percentage>` (e.g., `100%` `50%`): Relative to the size of the container.
<br /><br /><br />

**Background Position**

```css
background-position: <x-position> <y-position>;
```
<br /> 

Keywords: `left`, `right`, `top`, `bottom`, `center`

Lengths: `px`, `em`, `rem`, etc.

Percentages: Relative to the container size
<br /> <br /> <br /> 

**Background Image**

<table data-start="99" data-end="2371" class="w-fit min-w-(--thread-content-width)"><thead data-start="99" data-end="288"><tr data-start="99" data-end="288"><th data-start="99" data-end="127" data-col-size="sm"><strong data-start="101" data-end="115">Value Type</strong></th><th data-start="127" data-end="205" data-col-size="md"><strong data-start="129" data-end="140">Example</strong></th><th data-start="205" data-end="288" data-col-size="md"><strong data-start="207" data-end="222">Description</strong></th></tr></thead><tbody data-start="480" data-end="2371"><tr data-start="480" data-end="668"><td data-start="480" data-end="508" data-col-size="sm"><code data-start="482" data-end="488">none</code></td><td data-col-size="md" data-start="508" data-end="586"><code data-start="510" data-end="535">background-image: none;</code></td><td data-col-size="md" data-start="586" data-end="668">No background image is applied.</td></tr><tr data-start="669" data-end="857"><td data-start="669" data-end="697" data-col-size="sm"><code data-start="671" data-end="678">url()</code></td><td data-col-size="md" data-start="697" data-end="775"><code data-start="699" data-end="736">background-image: url("image.jpg");</code></td><td data-col-size="md" data-start="775" data-end="857">Loads an external image file.</td></tr><tr data-start="858" data-end="1046"><td data-start="858" data-end="886" data-col-size="sm">Multiple <code data-start="869" data-end="876">url()</code></td><td data-col-size="md" data-start="886" data-end="964"><code data-start="888" data-end="941">background-image: url("img1.png"), url("img2.jpg");</code></td><td data-col-size="md" data-start="964" data-end="1046">Applies multiple background images in layers.</td></tr><tr data-start="1047" data-end="1235"><td data-start="1047" data-end="1075" data-col-size="sm"><code data-start="1049" data-end="1068">linear-gradient()</code></td><td data-col-size="md" data-start="1075" data-end="1153"><code data-start="1077" data-end="1134">background-image: linear-gradient(to right, red, blue);</code></td><td data-col-size="md" data-start="1153" data-end="1235">Creates a linear color gradient.</td></tr><tr data-start="1236" data-end="1424"><td data-start="1236" data-end="1264" data-col-size="sm"><code data-start="1238" data-end="1257">radial-gradient()</code></td><td data-col-size="md" data-start="1264" data-end="1342"><code data-start="1266" data-end="1330">background-image: radial-gradient(circle, red, yellow, green);</code></td><td data-col-size="md" data-start="1342" data-end="1424">Creates a radial color gradient.</td></tr><tr data-start="1425" data-end="1613"><td data-start="1425" data-end="1453" data-col-size="sm"><code data-start="1427" data-end="1445">conic-gradient()</code></td><td data-col-size="md" data-start="1453" data-end="1531"><code data-start="1455" data-end="1521">background-image: conic-gradient(from 0deg, red, yellow, green);</code></td><td data-col-size="md" data-start="1531" data-end="1613">Creates a conic (angular) gradient.</td></tr><tr data-start="1614" data-end="1802"><td data-start="1614" data-end="1642" data-col-size="sm"><code data-start="1616" data-end="1629">image-set()</code></td><td data-col-size="md" data-start="1642" data-end="1720"><code data-start="1644" data-end="1713">background-image: image-set(url("low.jpg") 1x, url("high.jpg") 2x);</code></td><td data-col-size="md" data-start="1720" data-end="1802">Provides multiple image sources for different resolutions.</td></tr><tr data-start="2183" data-end="2371"><td data-start="2183" data-end="2211" data-col-size="sm">CSS Functions with comma</td><td data-col-size="md" data-start="2211" data-end="2290"><code data-start="2213" data-end="2289">background-image: url("img.png"), linear-gradient(to bottom, white, gray);</code></td><td data-col-size="md" data-start="2290" data-end="2371">Combines image layers and gradients for complex backgrounds.</td></tr></tbody></table>
<br /><br />

`-webkit-background-clip: text` or `background-clip: text` to make the bg appeart just behind the text.
<br /><br /><br />

<h2>Media Queries</h2>

Media queries let you apply styles conditionally based on the device's characteristics, such as screen width, height, orientation, resolution, etc.

The meta tag *viewport* allows us to use media queries

Syntax : <br />
`@media` media type `and` (condition : breakpoint) {<br />
    //css rules<br />
}

```css
 @media screen and (min-width : 481px) {
    //we can override styles here
 }
```

`min-width` - starting from <br />
`max-width` - upto <br />

**Note** - Usually we design for mobiles first (smallest first) and then for tablets and desktops.<br /><br />

**Common Media Features**
<table data-start="640" data-end="1406" class="w-fit min-w-(--thread-content-width)"><thead data-start="640" data-end="734"><tr data-start="640" data-end="734"><th data-start="640" data-end="659" data-col-size="sm">Feature</th><th data-start="659" data-end="685" data-col-size="sm">Example</th><th data-start="685" data-end="734" data-col-size="md">Description</th></tr></thead><tbody data-start="831" data-end="1406"><tr data-start="831" data-end="926"><td data-start="831" data-end="850" data-col-size="sm"><code data-start="833" data-end="844">max-width</code></td><td data-start="850" data-end="877" data-col-size="sm"><code data-start="852" data-end="870">max-width: 768px</code></td><td data-col-size="md" data-start="877" data-end="926">Applies if screen width is ≤ 768px</td></tr><tr data-start="927" data-end="1022"><td data-start="927" data-end="946" data-col-size="sm"><code data-start="929" data-end="940">min-width</code></td><td data-start="946" data-end="973" data-col-size="sm"><code data-start="948" data-end="967">min-width: 1024px</code></td><td data-col-size="md" data-start="973" data-end="1022">Applies if screen width is ≥ 1024px</td></tr><tr data-start="1023" data-end="1118"><td data-start="1023" data-end="1042" data-col-size="sm"><code data-start="1025" data-end="1038">orientation</code></td><td data-start="1042" data-end="1069" data-col-size="sm"><code data-start="1044" data-end="1067">orientation: portrait</code></td><td data-start="1069" data-end="1118" data-col-size="md">Portrait or landscape orientation</td></tr><tr data-start="1119" data-end="1214"><td data-start="1119" data-end="1138" data-col-size="sm"><code data-start="1121" data-end="1133">max-height</code></td><td data-col-size="sm" data-start="1138" data-end="1165"><code data-start="1140" data-end="1159">max-height: 500px</code></td><td data-col-size="md" data-start="1165" data-end="1214">Applies if screen height is ≤ 500px</td></tr><tr data-start="1215" data-end="1310"><td data-start="1215" data-end="1234" data-col-size="sm"><code data-start="1217" data-end="1233">min-resolution</code></td><td data-col-size="sm" data-start="1234" data-end="1261"><code data-start="1236" data-end="1259">min-resolution: 2dppx</code></td><td data-col-size="md" data-start="1261" data-end="1310">High-resolution displays (like Retina)</td></tr><tr data-start="1311" data-end="1406"><td data-start="1311" data-end="1330" data-col-size="sm"><code data-start="1313" data-end="1320">hover</code></td><td data-col-size="sm" data-start="1330" data-end="1357"><code data-start="1332" data-end="1345">hover: none</code></td><td data-col-size="md" data-start="1357" data-end="1406">Checks if hovering is possible (e.g. touch)</td></tr></tbody></table>
<br /><br />

**Common Media Types**
<table data-start="457" data-end="867" class="w-fit min-w-(--thread-content-width)"><thead data-start="457" data-end="524"><tr data-start="457" data-end="524"><th data-start="457" data-end="474" data-col-size="sm"><strong data-start="459" data-end="473">Media Type</strong></th><th data-start="474" data-end="524" data-col-size="md"><strong data-start="476" data-end="491">Description</strong></th></tr></thead><tbody data-start="593" data-end="867"><tr data-start="593" data-end="660"><td data-start="593" data-end="610" data-col-size="sm"><code data-start="595" data-end="600">all</code></td><td data-col-size="md" data-start="610" data-end="660">Applies to all devices (default)</td></tr><tr data-start="661" data-end="728"><td data-start="661" data-end="678" data-col-size="sm"><code data-start="663" data-end="671">screen</code></td><td data-col-size="md" data-start="678" data-end="728">Applies to screens (phones, tablets, desktops)</td></tr><tr data-start="729" data-end="797"><td data-start="729" data-end="746" data-col-size="sm"><code data-start="731" data-end="738">print</code></td><td data-col-size="md" data-start="746" data-end="797">Applies when printing or in print preview</td></tr><tr data-start="798" data-end="867"><td data-start="798" data-end="815" data-col-size="sm"><code data-start="800" data-end="808">speech</code></td><td data-col-size="md" data-start="815" data-end="867">Applies to screen readers or speech synthesizers</td></tr></tbody></table>


### Common Media Query breakpoints:
| Breakpoint | Description |
| -------- | ---------- |
| < 481px | Mobile devices |
| 481px — 768px | iPads, Tablets |
| 769px — 1024px | Small screens, laptops |
| 1025px — 1200px | Desktops, large screens |
| 1201px and greater | Extra large screens, TV |

### Bootstrap breakpoints:
| Breakpoint | Description |
| -------- | ---------- |
| < 576px | xs |
| >=576px | small |
| >=768px | medium |
| >=992px | large |
| >=1200px | xl |
| >=1400px | 2xl |

### Tailwind breakpoints:
| Breakpoint | Description |
| -------- | ---------- |
| < 640px | xs |
| >=640px | small |
| >=768px | medium |
| >=1024px | large |
| >=1280px | xl |
| >=1536px | 2xl |

<br />

<h2>Pseudo Selectors</h2>
Pseudo-selectors (more precisely, pseudo-classes and pseudo-elements) let you style elements based on a special state or part of the element, without needing to add extra classes or markup.

<br />

1. **Pseudo-classes** (:)<br />
These target a specific state of an element.<br />
<table data-start="198" data-end="1305" class="w-fit min-w-(--thread-content-width)"><thead data-start="198" data-end="238"><tr data-start="198" data-end="238"><th data-start="198" data-end="213" data-col-size="sm">Pseudo-Class</th><th data-start="213" data-end="227" data-col-size="sm">Description</th><th data-start="227" data-end="238" data-col-size="sm">Example</th></tr></thead><tbody data-start="280" data-end="1305"><tr data-start="280" data-end="366"><td data-start="280" data-end="291" data-col-size="sm"><code data-start="282" data-end="290">:hover</code></td><td data-start="291" data-end="326" data-col-size="sm">When user hovers over an element</td><td data-start="326" data-end="366" data-col-size="sm"><code data-start="328" data-end="364">button:hover { background: blue; }</code></td></tr><tr data-start="367" data-end="442"><td data-start="367" data-end="379" data-col-size="sm"><code data-start="369" data-end="378">:active</code></td><td data-col-size="sm" data-start="379" data-end="412">While element is being clicked</td><td data-col-size="sm" data-start="412" data-end="442"><code data-start="414" data-end="440">a:active { color: red; }</code></td></tr><tr data-start="443" data-end="539"><td data-start="443" data-end="454" data-col-size="sm"><code data-start="445" data-end="453">:focus</code></td><td data-start="454" data-end="493" data-col-size="sm">When element (e.g. input) is focused</td><td data-col-size="sm" data-start="493" data-end="539"><code data-start="495" data-end="537">input:focus { border: 2px solid green; }</code></td></tr><tr data-start="540" data-end="602"><td data-start="540" data-end="553" data-col-size="sm"><code data-start="542" data-end="552">:visited</code></td><td data-start="553" data-end="568" data-col-size="sm">Visited link</td><td data-col-size="sm" data-start="568" data-end="602"><code data-start="570" data-end="600">a:visited { color: purple; }</code></td></tr><tr data-start="603" data-end="689"><td data-start="603" data-end="620" data-col-size="sm"><code data-start="605" data-end="619">:first-child</code></td><td data-start="620" data-end="646" data-col-size="sm">First child of a parent</td><td data-start="646" data-end="689" data-col-size="sm"><code data-start="648" data-end="687">li:first-child { font-weight: bold; }</code></td></tr><tr data-start="690" data-end="767"><td data-start="690" data-end="706" data-col-size="sm"><code data-start="692" data-end="705">:last-child</code></td><td data-start="706" data-end="731" data-col-size="sm">Last child of a parent</td><td data-start="731" data-end="767" data-col-size="sm"><code data-start="733" data-end="765">li:last-child { color: gray; }</code></td></tr><tr data-start="768" data-end="869"><td data-start="768" data-end="786" data-col-size="sm"><code data-start="770" data-end="785">:nth-child(n)</code></td><td data-col-size="sm" data-start="786" data-end="824">Selects nth element (e.g. 2nd, odd)</td><td data-col-size="sm" data-start="824" data-end="869"><code data-start="826" data-end="867">li:nth-child(odd) { background: #eee; }</code></td></tr><tr data-start="870" data-end="959"><td data-start="870" data-end="889" data-col-size="sm"><code data-start="872" data-end="888">:not(selector)</code></td><td data-col-size="sm" data-start="889" data-end="917">Excludes specific element</td><td data-col-size="sm" data-start="917" data-end="959"><code data-start="919" data-end="957">li:not(:first-child) { color: red; }</code></td></tr><tr data-start="960" data-end="1051"><td data-start="960" data-end="973" data-col-size="sm"><code data-start="962" data-end="972">:checked</code></td><td data-start="973" data-end="1007" data-col-size="sm">Checked inputs (checkbox/radio)</td><td data-col-size="sm" data-start="1007" data-end="1051"><code data-start="1009" data-end="1049">input:checked { accent-color: green; }</code></td></tr><tr data-start="1052" data-end="1128"><td data-start="1052" data-end="1066" data-col-size="sm"><code data-start="1054" data-end="1065">:disabled</code></td><td data-start="1066" data-end="1089" data-col-size="sm">Disabled form fields</td><td data-start="1089" data-end="1128" data-col-size="sm"><code data-start="1091" data-end="1126">button:disabled { opacity: 0.5; }</code></td></tr><tr data-start="1129" data-end="1209"><td data-start="1129" data-end="1140" data-col-size="sm"><code data-start="1131" data-end="1139">:empty</code></td><td data-start="1140" data-end="1175" data-col-size="sm">Element with no children/content</td><td data-col-size="sm" data-start="1175" data-end="1209"><code data-start="1177" data-end="1207">div:empty { display: none; }</code></td></tr><tr data-start="1210" data-end="1305"><td data-start="1210" data-end="1238" data-col-size="sm"><code data-start="1212" data-end="1223">:required</code> / <code data-start="1226" data-end="1237">:optional</code></td><td data-col-size="sm" data-start="1238" data-end="1262">Form input validation</td><td data-col-size="sm" data-start="1262" data-end="1305"><code data-start="1264" data-end="1303">input:required { border-color: red; }</code></td></tr></tbody></table>
<br /><br />

2. **Pseudo-elements** (::)<br />
These target a part of an element that doesn’t exist in the HTML structure.<br />
<table data-start="1353" data-end="2040" class="w-fit min-w-(--thread-content-width)"><thead data-start="1353" data-end="1395"><tr data-start="1353" data-end="1395"><th data-start="1353" data-end="1370" data-col-size="sm">Pseudo-Element</th><th data-start="1370" data-end="1384" data-col-size="sm">Description</th><th data-start="1384" data-end="1395" data-col-size="md">Example</th></tr></thead><tbody data-start="1439" data-end="2040"><tr data-start="1439" data-end="1521"><td data-start="1439" data-end="1452" data-col-size="sm"><code data-start="1441" data-end="1451">::before</code></td><td data-start="1452" data-end="1486" data-col-size="sm">Adds content <strong data-start="1467" data-end="1477">before</strong> element</td><td data-start="1486" data-end="1521" data-col-size="md"><code data-start="1488" data-end="1519">h2::before { content: "🔸"; }</code></td></tr><tr data-start="1522" data-end="1600"><td data-start="1522" data-end="1534" data-col-size="sm"><code data-start="1524" data-end="1533">::after</code></td><td data-start="1534" data-end="1567" data-col-size="sm">Adds content <strong data-start="1549" data-end="1558">after</strong> element</td><td data-start="1567" data-end="1600" data-col-size="md"><code data-start="1569" data-end="1598">h2::after { content: "✔"; }</code></td></tr><tr data-start="1601" data-end="1692"><td data-start="1601" data-end="1620" data-col-size="sm"><code data-start="1603" data-end="1619">::first-letter</code></td><td data-start="1620" data-end="1650" data-col-size="sm">Styles first letter of text</td><td data-start="1650" data-end="1692" data-col-size="md"><code data-start="1652" data-end="1690">p::first-letter { font-size: 200%; }</code></td></tr><tr data-start="1693" data-end="1773"><td data-start="1693" data-end="1710" data-col-size="sm"><code data-start="1695" data-end="1709">::first-line</code></td><td data-start="1710" data-end="1738" data-col-size="sm">Styles first line of text</td><td data-col-size="md" data-start="1738" data-end="1773"><code data-start="1740" data-end="1771">p::first-line { color: red; }</code></td></tr><tr data-start="1774" data-end="1859"><td data-start="1774" data-end="1790" data-col-size="sm"><code data-start="1776" data-end="1789">::selection</code></td><td data-start="1790" data-end="1818" data-col-size="sm">Styles text when selected</td><td data-col-size="md" data-start="1818" data-end="1859"><code data-start="1820" data-end="1857">::selection { background: yellow; }</code></td></tr><tr data-start="1860" data-end="1954"><td data-start="1860" data-end="1873" data-col-size="sm"><code data-start="1862" data-end="1872">::marker</code></td><td data-start="1873" data-end="1903" data-col-size="sm">Styles list bullets/numbers</td><td data-start="1903" data-end="1954" data-col-size="md"><code data-start="1905" data-end="1952">li::marker { color: blue; font-size: 1.5em; }</code></td></tr><tr data-start="1955" data-end="2040"><td data-start="1955" data-end="1973" data-col-size="sm"><code data-start="1957" data-end="1972">::placeholder</code></td><td data-start="1973" data-end="1999" data-col-size="sm">Styles placeholder text</td><td data-start="1999" data-end="2040" data-col-size="md"><code data-start="2001" data-end="2038">input::placeholder { color: gray; }</code></td></tr></tbody></table>
<br /><br />


The **:is()** pseudo-class allows you to group multiple selectors together and apply the same styles to all of them 
```css
nav :is(a:hover, a:focus) {
  color: hsla(0, 0%, 20%, 0.6);
}
```
<br />
The :where() pseudo-class lets you group multiple selectors like :is(), **but with zero specificity.


<h2>CSS Varibales</h2>
CSS variables — also called custom properties — let you define reusable values in your CSS.<br /><br />

Syntax-

```css
:root {
  --main-color: #3498db;
  --padding: 1rem;
}
```

<br />

Using a variable
```css
button {
  background-color: var(--main-color);
  padding: var(--padding);
}
```

**Scoped Variables** :<br /> 
Variables can be scoped to elements, not just global:<br /> 
```css
.card {
  --border-radius: 8px;
  border-radius: var(--border-radius);
}
```
<br>

**Nesting Varibles** : 
```css
:root {
  --base-color: #3498db;
  --button-bg: var(--base-color);
}
```

**Note** - We can also override varibales inside specific classes 


<h2>Functions</h2>

We have math fucntions like `min()`, `max()`, `clamp()` & `calc()`.<br>
Color functions like `rgb()`, `rgba()`, `hsla()`, `color-mix()`, `color()`<br>
Transform & shape functions like `translate()`, `scale()`, `rotate()` & `skew()`.<br>
Utility functions like `var()` and `attr()`.
Filter fucntions like `brightness()`, `contrast()`, `blur()`, `drop-shadow()` etc.
<br/><br/>

<h2>Transition and Animations</h2>

CSS **Transition** allows you to animate changes in CSS properties smoothly over time. You can customize the property, duration, timing function, and delay.

CSS transition Shorthand Syntax
```css
transition: [property] [duration] [timing-function] [delay];
```
<br/><br/>

**Transition Properties**
<table data-start="400" data-end="904" class="w-fit min-w-(--thread-content-width)"><thead data-start="400" data-end="481"><tr data-start="400" data-end="481"><th data-start="400" data-end="422" data-col-size="sm"><strong data-start="402" data-end="414">Property</strong></th><th data-start="422" data-end="481" data-col-size="md"><strong data-start="424" data-end="439">Description</strong></th></tr></thead><tbody data-start="564" data-end="904"><tr data-start="564" data-end="651"><td data-start="564" data-end="588" data-col-size="sm"><code data-start="566" data-end="587">transition-property</code></td><td data-col-size="md" data-start="588" data-end="651">Specifies the property to animate (e.g. <code data-start="630" data-end="637">width</code>, <code data-start="639" data-end="648">opacity</code>)</td></tr><tr data-start="652" data-end="734"><td data-start="652" data-end="676" data-col-size="sm"><code data-start="654" data-end="675">transition-duration</code></td><td data-start="676" data-end="734" data-col-size="md">Time to complete the transition (e.g. <code data-start="716" data-end="722">0.3s</code>, <code data-start="724" data-end="731">500ms</code>)</td></tr><tr data-start="735" data-end="820"><td data-start="735" data-end="766" data-col-size="sm"><code data-start="737" data-end="765">transition-timing-function</code></td><td data-start="766" data-end="820" data-col-size="md">Speed curve (e.g. <code data-start="786" data-end="792">ease</code>, <code data-start="794" data-end="802">linear</code>, <code data-start="804" data-end="817">ease-in-out</code>)</td></tr><tr data-start="821" data-end="904"><td data-start="821" data-end="845" data-col-size="sm"><code data-start="823" data-end="841">transition-delay</code></td><td data-col-size="md" data-start="845" data-end="904">Time to wait before the transition starts</td></tr></tbody></table>
<br/><br/>


**Common Timing Functions**
<table data-start="1155" data-end="1748" class="w-fit min-w-(--thread-content-width)"><thead data-start="1155" data-end="1220"><tr data-start="1155" data-end="1220"><th data-start="1155" data-end="1171" data-col-size="sm">Value</th><th data-start="1171" data-end="1220" data-col-size="md">Behavior</th></tr></thead><tbody data-start="1287" data-end="1748"><tr data-start="1287" data-end="1352"><td data-start="1287" data-end="1303" data-col-size="sm"><code data-start="1289" data-end="1295">ease</code></td><td data-start="1303" data-end="1352" data-col-size="md">Default. Slow start, fast middle, slow end</td></tr><tr data-start="1353" data-end="1418"><td data-start="1353" data-end="1369" data-col-size="sm"><code data-start="1355" data-end="1363">linear</code></td><td data-col-size="md" data-start="1369" data-end="1418">Constant speed</td></tr><tr data-start="1419" data-end="1484"><td data-start="1419" data-end="1435" data-col-size="sm"><code data-start="1421" data-end="1430">ease-in</code></td><td data-col-size="md" data-start="1435" data-end="1484">Starts slow, ends fast</td></tr><tr data-start="1485" data-end="1550"><td data-start="1485" data-end="1501" data-col-size="sm"><code data-start="1487" data-end="1497">ease-out</code></td><td data-start="1501" data-end="1550" data-col-size="md">Starts fast, ends slow</td></tr><tr data-start="1551" data-end="1616"><td data-start="1551" data-end="1567" data-col-size="sm"><code data-start="1553" data-end="1566">ease-in-out</code></td><td data-col-size="md" data-start="1567" data-end="1616">Slow start and end</td></tr><tr data-start="1617" data-end="1682"><td data-start="1617" data-end="1650" data-col-size="sm"><code data-start="1619" data-end="1649">cubic-bezier(x1, y1, x2, y2)</code></td><td data-col-size="md" data-start="1650" data-end="1682">Custom timing curve</td></tr><tr data-start="1683" data-end="1748"><td data-start="1683" data-end="1700" data-col-size="sm">`steps(n, start</td><td data-start="1700" data-end="1707" data-col-size="md">end)`</td></tr></tbody></table>
<br/><br/>

**Multiple Transitions**
```css
transition: background-color 0.3s ease, transform 0.4s linear;
```
<br/><br/>
CSS **Animations** let you animate transitions from one style configuration to another using the @keyframes rule.

**Basic Structure**
```css
.element {
  animation-name: myAnimation;
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-fill-mode: forwards;
  animation-play-state: running;
}

@keyframes myAnimation {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(200px);
  }
}
```

<br><br>
**Animation Properties**
<table data-start="637" data-end="1703" class="w-fit min-w-(--thread-content-width)"><thead data-start="637" data-end="741"><tr data-start="637" data-end="741"><th data-start="637" data-end="666" data-col-size="sm"><strong data-start="639" data-end="651">Property</strong></th><th data-start="666" data-end="741" data-col-size="md"><strong data-start="668" data-end="679">Purpose</strong></th></tr></thead><tbody data-start="848" data-end="1703"><tr data-start="848" data-end="953"><td data-start="848" data-end="877" data-col-size="sm"><code data-start="850" data-end="866">animation-name</code></td><td data-col-size="md" data-start="877" data-end="953">Name of the <code data-start="891" data-end="903">@keyframes</code> to use</td></tr><tr data-start="954" data-end="1059"><td data-start="954" data-end="983" data-col-size="sm"><code data-start="956" data-end="976">animation-duration</code></td><td data-col-size="md" data-start="983" data-end="1059">How long the animation runs (<code data-start="1014" data-end="1017">s</code> or <code data-start="1021" data-end="1025">ms</code>)</td></tr><tr data-start="1060" data-end="1165"><td data-start="1060" data-end="1089" data-col-size="sm"><code data-start="1062" data-end="1089">animation-timing-function</code></td><td data-col-size="md" data-start="1089" data-end="1165">Controls speed curve (<code data-start="1113" data-end="1119">ease</code>, <code data-start="1121" data-end="1129">linear</code>, etc.)</td></tr><tr data-start="1166" data-end="1271"><td data-start="1166" data-end="1195" data-col-size="sm"><code data-start="1168" data-end="1185">animation-delay</code></td><td data-start="1195" data-end="1271" data-col-size="md">Wait before animation starts</td></tr><tr data-start="1272" data-end="1377"><td data-start="1272" data-end="1301" data-col-size="sm"><code data-start="1274" data-end="1301">animation-iteration-count</code></td><td data-col-size="md" data-start="1301" data-end="1377">Number of times the animation runs (<code data-start="1339" data-end="1342">1</code>, <code data-start="1344" data-end="1354">infinite</code>, <code data-start="1356" data-end="1359">3</code>, etc.)</td></tr><tr data-start="1378" data-end="1484"><td data-start="1378" data-end="1407" data-col-size="sm"><code data-start="1380" data-end="1401">animation-direction</code></td><td data-col-size="md" data-start="1407" data-end="1484">Direction of play (<code data-start="1428" data-end="1436">normal</code>, <code data-start="1438" data-end="1447">reverse</code>, <code data-start="1449" data-end="1460">alternate</code>, <code data-start="1462" data-end="1481">alternate-reverse</code>)</td></tr><tr data-start="1485" data-end="1597"><td data-start="1485" data-end="1514" data-col-size="sm"><code data-start="1487" data-end="1508">animation-fill-mode</code></td><td data-start="1514" data-end="1597" data-col-size="md">Defines styles before/after animation (<code data-start="1555" data-end="1561">none</code>, <code data-start="1563" data-end="1573">forwards</code>, <code data-start="1575" data-end="1586">backwards</code>, <code data-start="1588" data-end="1594">both</code>)</td></tr><tr data-start="1598" data-end="1703"><td data-start="1598" data-end="1627" data-col-size="sm"><code data-start="1600" data-end="1622">animation-play-state</code></td><td data-col-size="md" data-start="1627" data-end="1703">Controls animation play (<code data-start="1654" data-end="1663">running</code>, <code data-start="1665" data-end="1673">paused</code>)</td></tr></tbody></table>
<br/><br/>

**@keyframes Syntax**
```css
@keyframes slide {
  0%   { transform: translateX(0); }
  50%  { transform: translateX(100px); }
  100% { transform: translateX(0); }
}
```
You can use:<br>
Percentages (`0%`, `50%`, `100%`)<br>
Or `from` / `to` as shortcuts for `0%` and `100%`.


<h2>Organizing CSS</h2>

-- Follow Your Team

-- Use comments to create headers

-- Sort properties alphabetically ABCSS

-- Larger projects follow a naming convention methodology. For example: BEM - Block, Element, Modifier

<h2>Misc</h2>

**`:is()` Selector** - The `:is()` selector in CSS is a pseudo-class function that simplifies writing large, complex selectors by allowing you to group multiple selectors together.
<br><br>

```css
:is(h1, h2, h3) {
  color: navy;
  font-weight: bold;
}
```
This applies the same styles to all `<h1>,` `<h2>`, and `<h3>` elements.<br><br>

```css
article :is(h1, h2, h3) {
  margin-top: 1em;
}
```
This targets any `<h1>`, `<h2>`, or `<h3>` inside an `<article>`.
<br><br>

**Improves specificity control**: Unlike using multiple selectors separated by commas, :is() only applies the specificity of the most specific argument.<br><br>


**`:where()` Selector** - The `:where()` selector in CSS is very similar to `:is()`, but it has zero specificity, regardless of what selectors you put inside it.
<br><br>

```css
:where(h1, h2, h3) {
  margin-top: 0;
}
```
This will apply` margin-top: 0`to all `<h1>`, `<h2>`, and `<h3>` elements, but won't increase specificity — so other rules can easily override it.
<br><br>

**Common Use Case**<br>
Setting default or reset styles without "fighting" other styles:
```css
:where(article, section, aside) {
  padding: 1rem;
  background: #f8f8f8;
}
```
<br><br>

**`:has()` Selector** - The `:has()` selector in CSS is a relational pseudo-class that allows you to select an element based on its descendants or sub-elements — something that wasn’t possible with pure CSS before.
<br><br>

```css
/* Select any <div> that contains an <img> */
div:has(img) {
  border: 2px solid green;
}
```
