const commands = [
    { cmd: "git init", desc: "Starts a brand new local Git repository." },
    { cmd: "git status", desc: "Shows modified files waiting to be saved." },
    { cmd: "git add .", desc: "Stages all your changes to prepare for a commit." },
    { cmd: "git commit -m 'msg'", desc: "Saves your changes locally into your history." },
    { cmd: "git push origin main", desc: "Sends your local changes up to GitHub." }
];

const grid = document.getElementById('commandGrid');
const search = document.getElementById('searchBar');

function displayCommands(filterText = "") {
    grid.innerHTML = "";
    const filtered = commands.filter(item => 
        item.cmd.toLowerCase().includes(filterText.toLowerCase()) || 
        item.desc.toLowerCase().includes(filterText.toLowerCase())
    );
    
    filtered.forEach(item => {
        grid.innerHTML += `
            <div class="card">
                <h3>${item.cmd}</h3>
                <p>${item.desc}</p>
            </div>
        `;
    });
}

search.addEventListener('input', (e) => displayCommands(e.target.value));
displayCommands();
