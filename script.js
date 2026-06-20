const commands = [
    { cmd: "git init", desc: "Starts a brand new local repository.", cat: "Setup" },
    { cmd: "git clone <url>", desc: "Downloads an existing project from GitHub.", cat: "Setup" },
    { cmd: "git status", desc: "Shows modified files waiting to be saved.", cat: "Daily" },
    { cmd: "git add .", desc: "Stages all changes for the next commit.", cat: "Daily" },
    { cmd: "git commit -m 'msg'", desc: "Saves staged changes into local history.", cat: "Daily" },
    { cmd: "git push origin main", desc: "Sends your local changes up to GitHub.", cat: "Daily" },
    { cmd: "git log --oneline", desc: "Shows a clean, one-line history of commits.", cat: "History" },
    { cmd: "git stash", desc: "Saves uncommitted work to clean your workspace.", cat: "Advanced" },
    { cmd: "git reset --hard HEAD~1", desc: "⚠️ Destroys your last commit and undoes changes.", cat: "Danger" }
];

const grid = document.getElementById('commandGrid');
const search = document.getElementById('searchBar');

function displayCommands(filterText = "") {
    grid.innerHTML = "";
    const filtered = commands.filter(item => 
        item.cmd.toLowerCase().includes(filterText.toLowerCase()) || 
        item.desc.toLowerCase().includes(filterText.toLowerCase()) ||
        item.cat.toLowerCase().includes(filterText.toLowerCase())
    );
    
    filtered.forEach(item => {
        grid.innerHTML += `
            <div class="card">
                <span class="badge ${item.cat.toLowerCase()}">${item.cat}</span>
                <h3>${item.cmd}</h3>
                <p>${item.desc}</p>
                <button class="copy-btn" onclick="copyText('${item.cmd}')">📋 Copy Command</button>
            </div>
        `;
    });
}

function copyText(text) {
    navigator.clipboard.writeText(text);
    alert(`Copied to clipboard: ${text}`);
}

search.addEventListener('input', (e) => displayCommands(e.target.value));
displayCommands();