function loadUser() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUsers(data));
}

function displayUsers(data) {
    const ol = document.getElementById('user-list');
    for (const user of data) {
        const li = document.createElement('li');
        li.innerText = user.name;
        ol.appendChild(li);
    }
}

function loadId() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(id => displayId(id));
}

function displayId(id) {
    const ul = document.getElementById('userID');
    for (const item of id) {
        li = document.createElement('li');
        li.innerText = item.email;
        ul.appendChild(li);

    }
}