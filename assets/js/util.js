/* Utility functions */
(function() {
    'use strict';

    window.skel = {
        // Breakpoint detection
        canUse: function(feature) {
            return true; // Simplified implementation
        },
        
        // Browser detection
        vars: {
            mobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
            os: navigator.platform,
            osVersion: '',
            touch: 'ontouchstart' in window
        },
        
        // Utility methods
        on: function(event, callback) {
            if (event === 'ready') {
                if (document.readyState === 'loading') {
                    document.addEventListener('DOMContentLoaded', callback);
                } else {
                    callback();
                }
            } else if (event === 'resize') {
                window.addEventListener('resize', callback);
            }
        }
    };

    // Basic polyfills and utilities
    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function(callback) {
            return setTimeout(callback, 1000 / 60);
        };
    }

})();