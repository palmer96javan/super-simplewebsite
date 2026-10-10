/**
 * Javanware Website Security & Anti-Ripping Protection Module
 * Protects website media, text, and structure against casual scraping, inspecting, and ripping.
 */
(function () {
    'use strict';

    // 1. Disable Right-Click Context Menu
    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
        return false;
    });

    // 2. Disable Key Combinations (F12, Ctrl+U, Ctrl+S, Ctrl+Shift+I/J/C)
    document.addEventListener('keydown', function (e) {
        // F12 key
        if (e.keyCode === 123) {
            e.preventDefault();
            return false;
        }
        // Ctrl+U (View Source)
        if (e.ctrlKey && e.keyCode === 85) {
            e.preventDefault();
            return false;
        }
        // Ctrl+S (Save Page)
        if (e.ctrlKey && e.keyCode === 83) {
            e.preventDefault();
            return false;
        }
        // Ctrl+Shift+I (DevTools)
        if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
            e.preventDefault();
            return false;
        }
        // Ctrl+Shift+J (Console)
        if (e.ctrlKey && e.shiftKey && e.keyCode === 74) {
            e.preventDefault();
            return false;
        }
        // Ctrl+Shift+C (Inspect Element)
        if (e.ctrlKey && e.shiftKey && e.keyCode === 67) {
            e.preventDefault();
            return false;
        }
    });

    // 3. Disable Dragging of Images
    document.addEventListener('dragstart', function (e) {
        if (e.target.nodeName === 'IMG') {
            e.preventDefault();
            return false;
        }
    });

    // 4. Inject CSS to Prevent Text Selection and Image Dragging
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = 'body { -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; } img { -webkit-user-drag: none; -khtml-user-drag: none; -moz-user-drag: none; -o-user-drag: none; user-drag: none; pointer-events: auto; }';
    document.getElementsByTagName('head')[0].appendChild(style);

})();
