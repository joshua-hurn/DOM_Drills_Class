document.addEventListener('DOMContentLoaded', function (event) {
    let addButton = document.getElementsByClassName('add-list-btn');
    // Creating DOM elements and text nodes.
    let headerContainer = document.createElement('div');
    document.body.appendChild(headerContainer);

    let ul = document.createElement('ul');
    document.body.appendChild(ul);
    let liNumber = 1;
    
    let h1 = document.createElement('h1');
    h1.classList.add('h1');
    let h1TextNode = document.createTextNode('This is an h1');
    h1.append(h1TextNode);
    headerContainer.appendChild(h1);

    let h2 = document.createElement('h2');
    h2.classList.add('h2');
    let h2TextNode = document.createTextNode('This is and h2');
    h2.append(h2TextNode);
    headerContainer.appendChild(h2);

    let h3 = document.createElement('h3');
    h3.classList.add('h3');
    let h3TextNode = document.createTextNode('This is and h3');
    h3.append(h3TextNode);
    headerContainer.appendChild(h3);

    let h4 = document.createElement('h4');
    h4.classList.add('h4');
    let h4TextNode = document.createTextNode('This is and h4');
    h4.append(h4TextNode);
    headerContainer.appendChild(h4);

    let h5 = document.createElement('h5');
    h5.classList.add('h5');
    let h5TextNode = document.createTextNode('This is and h5');
    h5.append(h5TextNode);
    headerContainer.appendChild(h5);

    let h6 = document.createElement('h6');
    h6.classList.add('h6');
    let h6TextNode = document.createTextNode('This is and h6');
    h6.append(h6TextNode);
    headerContainer.appendChild(h6);

    let headingArray = [h1, h2, h3, h4, h5, h6];
    headingArray.forEach(function (element) {
        element.addEventListener('dblclick', function () {
            changeColor(element);
        });
    });

    addButton[0].addEventListener('click', addListItem);

    // Generate a random color from the array.
    let colorArray = ['green', 'yellow', 'blue', 'red', 'orange', 'pink', 'brown', 'purple']
    function generateRandomColor() {
        return Math.floor((Math.random() * 8));
    }

    function changeColor(element) {
        let randomNumber = generateRandomColor();
        element.style.color = colorArray[randomNumber];
    }

    function addListItem() {
        // Creating and adding the id and inner text of the list item.
        let newListItem = document.createElement('li');
        newListItem.id = liNumber;
        newListItem.innerText = `This is the list item ${liNumber}`;

        // Event listener to change the li's color.
        newListItem.addEventListener('click', function() {
            let randomNumber = generateRandomColor();
            newListItem.style.color = colorArray[randomNumber];
        });

        // Event Listener to remove the li that is double-clicked.
        newListItem.addEventListener('dblclick', function() {
            removeListItem(newListItem);
        });

        // Appending the li to the dom.
        ul.appendChild(newListItem);

        // increasing the variable used to differentiate the li's from one another.
        liNumber++

        function removeListItem(li) {
            li.parentNode.removeChild(li);
        }
    }
});
