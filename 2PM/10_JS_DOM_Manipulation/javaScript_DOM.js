1) Get any HTML Elements in JavaScript
--------------------------------------
Tag Selector
------------
HTML: <h2>Good Morning</h2>
JavaScript: let h2Element = document.querySelector('h2');
JQuery : let h2Element = $('h2');

ID Selector (Mostly Used)
------------
HTML: <h2 id="abc">Good Morning</h2>
JavaScript: let h2Element = document.querySelector('#abc');
JQuery: let h2Element = $('#abc');

Class Selector
------------
HTML: <h2 class="test">Good Morning</h2>
JavaScript: let h2Element = document.querySelector('.test');
JQuery: let h2Element = $('.test');

2) To Change the Plain Text Content
-----------------------------
HTML : <h2>Good Morning</h2>
JavaScript : let h2Element = document.querySelector('h2');
                 h2Element.textContent = "Good Evening";


3) To change the HTML Text / String
------------------------------------
HTML : <h2>Good Morning</h2>
JavaScript : let h2Element = document.querySelector('h2');
                 h2Element.innerHTML = "<span>Good Evening</span>";

4) To get any Attribute of a Tag
----------------------------------
HTML: <img src="abc.jpg">
JavaScript : let imgTag = document.querySelector('img');
             let address = imgTag.getAttribute('src'); // abc.jpg

5) To set any attribute of a Tag
---------------------------------
HTML: <img src="abc.jpg">
JavaScript : let imgTag = document.querySelector('img');
             imgTag.setAttribute('src','forest.jpg');

6) To get any form field data
-----------------------------
HTML : <input type='text' id='user'>
JavaScript : let inputTag = document.querySelector('#user');
             let textEntered = inputTag.value;

7) To change the CSS Styles
-------------------------------
HTML : <h2>Good Morning</h2>
JavaScript : let h2Element = document.querySelector('h2');
                 h2Element.style.color = 'white';
                 h2Element.style.backgroundColor = 'black';
                 h2Element.style.border = '2px solid red';
