// ==UserScript==
// @name         Hide the tutorial video please
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  we hate it!
// @author       bglrk
// @match        https://elearning.uni-obuda.hu/main/my/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=uni-obuda.hu
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    const video_player = document.getElementById('inst294955');
    video_player.style.display = 'none';

})();
