
let ele = document.querySelector('.two');
let dataa = document.querySelector('.mainn');
let nodes = [];

// Function to load and render saved nodes from localStorage
function renderElementsToScreen() {
    if (localStorage.getItem('nodes')) {
        nodes = JSON.parse(localStorage.getItem('nodes'));
        nodes.forEach(node => {
            addNodeToScreen(node);
        });
    }
}
// Call render function when the page loads
renderElementsToScreen();

let y = document.querySelector('.butt');
y.addEventListener('click', () => {
    // Check if form exists; show it if it does, otherwise create it
    let existingForm = document.querySelector('.formm');
    if (existingForm) {
        existingForm.style.display = 'block';
        //existingForm.style.display = 'flex';
        return;
    }
    y.style.backgroundColor = 'white';
    y.style.color = 'black';
    // Remove any image or h4 elements if they exist
    let imgElement = document.querySelector('.immg');
    if (imgElement) {
        imgElement.remove();
    }
    let h4Element = document.querySelector('.hhh');
    if (h4Element) {
        h4Element.remove();
    }

    let div1 = document.createElement('div');
    div1.className = 'formm';
    let int = document.createElement('input');
    int.className = 'inputt1';
    int.id = 'aa';
    int.placeholder = 'Enter Title';
    let tex = document.createElement('textarea');
    tex.rows = '10';
    tex.placeholder = 'Enter your comment here';
    tex.className = 'inputt';
    let butt1 = document.createElement('button');
    butt1.textContent = 'Add Node';
    butt1.className = 'bb';
    div1.appendChild(int);
    div1.appendChild(tex);
    div1.appendChild(butt1);
    ele.appendChild(div1);

    // Handle Add Node button click
    butt1.addEventListener('click', () => {
        // Get input values for title and description
        let titleValue = document.querySelector('.inputt1').value;
        let descriptionValue = document.querySelector('.inputt').value;

        // Validate title and description
        if (!titleValue) {
            alert('Please fill out the title.');
            return;
        }
        if (!descriptionValue) {
            alert('Please fill out the description.');
            return;
        }

        // Change button style
        butt1.style.backgroundColor = 'white';
        butt1.style.color = 'black';

        // Create node object
        let node = {
            title: titleValue,
            des: descriptionValue,
            tasks: [] // Add tasks array to store tasks related to the node
        };

        // Hide form after submission
        div1.style.display = 'none';

        // Add the node to the screen and localStorage
        addNodeToScreen(node);
        addNoteToLocalStorage(node);

        // Clear form inputs after adding the node
        document.querySelector('.inputt1').value = '';
        document.querySelector('.inputt').value = '';
    });
});

y.addEventListener('mouseout', () => {
    y.style.backgroundColor = 'black';
    y.style.color = 'white';
});

// Function to add a new note element to the screen
function addNodeToScreen(node) {
   
    let divv = document.createElement('div');
    divv.className = 'mm';
    let title1 = document.createElement('h4');
    title1.innerText = node.title;
    let dess = document.createElement('p');
    dess.innerText = node.des;
    dess.className = 'xx';

    divv.appendChild(title1);
    divv.appendChild(dess);

    // Append the new node element to the main container
    dataa.append(divv);

    // Show title, description, and tasks on mouseover
    divv.addEventListener('mouseover', () => {

       /* let existingForm = document.querySelector('.formm');
        if (existingForm) {
            existingForm.remove()
        }*/
        // Clear previous content if any
        divv.innerHTML = '';

        // Create title and description elements
        let title = document.createElement('h4');
        title.innerText = node.title;

        let description = document.createElement('p');
        description.innerText = node.des;

        // Create a list to display tasks
        let ul = document.createElement('ul');
        node.tasks.forEach(task => {
            let li = document.createElement('li');
            li.innerText = task;
            //li.style.fontWeight = 'bolder';
            ul.appendChild(li);
        });

        // Append title, description, and tasks to divv
        divv.appendChild(title);
        divv.appendChild(description);
        divv.appendChild(ul);
    });

    // Hide title, description, and tasks when mouse leaves
    divv.addEventListener('mouseout', () => {
        divv.innerHTML = ''; // Clear the content on mouseout
        divv.appendChild(title1); // Restore original title
        divv.appendChild(dess);   // Restore original description
    });

    // Handle click event for further interaction
    divv.addEventListener('click', () => {
        // Remove any existing image or h4 elements
        let imgElement = document.querySelector('.immg');
        if (imgElement) {
            imgElement.remove();
        }
        let h4Element = document.querySelector('.hhh');
        if (h4Element) {
            h4Element.remove();
        }
        let existingForm = document.querySelector('.formm');
        if (existingForm) {
            existingForm.remove()
        }

        // Close any other open node details
        let openNodes = document.querySelectorAll('.ab');
        openNodes.forEach(openNode => openNode.remove());

        // Prevent multiple div5 creation
        if (!divv.querySelector('.ab')) {
            let div5 = document.createElement('div');
            div5.className = 'ab';
            let div2 = document.createElement('div');
            div2.className = 'cc';
            let div4 = document.createElement('div');
            div4.className = 'ii';
            div4.innerText = node.title;
            let div6 = document.createElement('div');
            let div3 = document.createElement('div');
            div3.className = 'ee';
            div3.innerText = node.des;
            div3.className = 'dd';
            let butt3 = document.createElement('button');
            butt3.className = 'ff';
            butt3.textContent = 'Add Task';
            let butt4 = document.createElement('button');
            butt4.className = 'gg';
            butt4.textContent = 'Delete Node';
            let brr = document.createElement('hr');
            brr.className = 'hrr';

            ele.append(div5);
            div5.append(div2);
            div5.append(brr);
            div5.append(div3);
            div2.append(div4);
            div2.append(div6);
            div6.append(butt3);
            div6.append(butt4);

            // Create a list to display tasks
            let ul = document.createElement('ul');
            node.tasks.forEach(task => {
                let li = document.createElement('li');
                li.innerText = task;
                li.style.fontWeight = 'bolder';
                ul.appendChild(li);
            });
            div5.appendChild(ul);

            // Handle Add Task button
            butt3.addEventListener('click', () => {
                // Prevent multiple task input forms
                let taskForm = div5.querySelector('.jj');
                if (taskForm) {
                    taskForm.style.display = 'flex'; // Show the form again if it exists
                    taskForm.style.justifyContent = 'center'
                    
                } else {
                    let div8 = document.createElement('div');
                    div8.className = 'jj';
                    div8.style.display = 'flex';
                    div8.style.justifyContent = 'center'; // Center the task form
                    let inputt22 = document.createElement('input');
                    inputt22.placeholder = 'Enter Task';
                    inputt22.className = 'kk';
                    let ul1 = document.createElement('ul');
                    //ul1.style.fontWeight = 'bolder';
                    div8.appendChild(inputt22);
                    div8.appendChild(ul1);
                    div5.appendChild(div8); // Append task form to div5

                    let butt5 = document.createElement('button');
                    butt5.className = 'll';
                    butt5.textContent = 'Add Task';
                    div8.appendChild(butt5);

                    // Add Task button click
                    butt5.addEventListener('click', () => {
                        let task = inputt22.value;
                        if (task) {
                            let li1 = document.createElement('li');
                            li1.innerText = task;
                            ul1.appendChild(li1);

                            node.tasks.push(task); // Add task to node object
                            updateNoteInLocalStorage(node);

                            // Add the task to parent elements (div5 and divv)
                            div5.appendChild(ul1);
                            divv.appendChild(ul1);

                            // Hide the task form after task is added
                            div8.style.display = 'none';
                        }
                        inputt22.value = ''; // Clear input field
                    });
                }
            });

            // Handle Delete Node button
            butt4.addEventListener('click', () => {
                divv.remove(); // Remove the node element
                div5.remove(); // Remove the expanded view
                let taskForm = document.querySelector('.jj');
                if (taskForm) {
                    taskForm.remove(); // Remove the task form if it exists
                }
                removeNodeFromLocalStorage(node);
            });
        }
    });
}

// Function to save the nodes in localStorage
function addNoteToLocalStorage(node) {
    nodes.push(node);
    localStorage.setItem('nodes', JSON.stringify(nodes));
}

// Function to update a node's tasks in localStorage
function updateNoteInLocalStorage(updatedNode) {
    nodes = nodes.map(node => node.title === updatedNode.title ? updatedNode : node);
    localStorage.setItem('nodes', JSON.stringify(nodes));
}

// Function to remove a node from localStorage
function removeNodeFromLocalStorage(nodeToRemove) {
    nodes = nodes.filter(node => node.title !== nodeToRemove.title);
    localStorage.setItem('nodes', JSON.stringify(nodes));
}
