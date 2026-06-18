'use strict';

const FILE_META = {
    about:         { name: 'about_me.md',                   icon: '📄', status: 'Reading about_me.md' },
    meta:          { name: 'experience/01_meta.md',         icon: '📄', status: 'Reading 01_meta.md' },
    evidium:       { name: 'experience/02_evidium.md',      icon: '📄', status: 'Reading 02_evidium.md' },
    uci:           { name: 'experience/03_uci_research.md', icon: '📄', status: 'Reading 03_uci_research.md' },
    amazon:        { name: 'experience/04_amazon.md',       icon: '📄', status: 'Reading 04_amazon.md' },
    samsung:       { name: 'experience/05_samsung.md',      icon: '📄', status: 'Reading 05_samsung.md' },
    publications:  { name: 'publications.md',               icon: '📄', status: 'Reading publications.md' },
    proj_cyclegan: { name: 'projects/cycle_gan.py',         icon: '🐍', status: 'Viewing cycle_gan.py' },
    proj_chat:     { name: 'projects/dist_chat.java',       icon: '☕', status: 'Viewing dist_chat.java' },
    contact:       { name: 'contact.sh',                    icon: '⚡', status: 'Running contact.sh' },
};

function selectFile(el, section) {
    document.querySelectorAll('.tree-item').forEach(i => i.classList.remove('selected'));
    el.classList.add('selected');

    document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));

    const panel = document.getElementById('panel-' + section);
    if (!panel) return;
    panel.classList.add('active');
    panel.scrollTop = 0;

    const meta = FILE_META[section] || {};
    document.getElementById('tab-icon').textContent  = meta.icon   || '📄';
    document.getElementById('tab-name').textContent  = meta.name   || section;
    document.getElementById('status-text').textContent = meta.status || 'Reading...';

    const words = (panel.innerText || '').trim().split(/\s+/).filter(Boolean).length;
    document.getElementById('word-count').textContent = words.toLocaleString() + ' words';
}

function toggleFolder(el) {
    const li    = el.closest('li');
    const sub   = li.querySelector('.subtree');
    const arrow = el.querySelector('.arrow');
    if (!sub) return;
    const closed = sub.classList.toggle('closed');
    if (arrow) {
        arrow.classList.toggle('open',   !closed);
        arrow.classList.toggle('closed',  closed);
    }
}

function toggleSidebar() {
    document.querySelector('.file-tree').classList.toggle('collapsed');
}

function toggleTheme() {
    document.documentElement.classList.toggle('theme-dark');
    document.documentElement.classList.toggle('theme-light');
}

document.addEventListener('DOMContentLoaded', () => {
    const first = document.querySelector('[data-section="about"]');
    if (first) selectFile(first, 'about');
});
