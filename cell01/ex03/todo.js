const ft_list = document.getElementById('ft_list');
const newBtn = document.getElementById('newBtn');

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + encodeURIComponent(cvalue) + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function saveTasksToCookie() {
    const tasks = [];
    const divs = ft_list.getElementsByTagName('div');
    for (let i = 0; i < divs.length; i++) {
        tasks.push(divs[i].textContent);
    }
    setCookie("todo_list", JSON.stringify(tasks), 7);
}

function addTask(text, save = true) {
    if (!text || text.trim() === "") return;

    const taskDiv = document.createElement('div');
    taskDiv.className = 'todo-item';
    taskDiv.textContent = text;

    taskDiv.onclick = function() {
        const confirmDelete = confirm("Do you want to remove this TO DO?");
        if (confirmDelete) {
            this.remove();
            saveTasksToCookie();
        }
    };

    ft_list.insertBefore(taskDiv, ft_list.firstChild);

    if (save) {
        saveTasksToCookie();
    }
}

newBtn.onclick = function() {
    const text = prompt("Enter a new TO DO:");
    addTask(text);
};

window.onload = function() {
    const savedCookie = getCookie("todo_list");
    if (savedCookie) {
        try {
            const tasks = JSON.parse(savedCookie);
            for (let i = tasks.length - 1; i >= 0; i--) {
                addTask(tasks[i], false); 
            }
        } catch (e) {
            console.error(e);
        }
    }
};