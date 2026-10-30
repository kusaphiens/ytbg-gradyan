// ==UserScript==
// @name         YouTube Monochrome Gradient
// @namespace    kusabi.youtube.gradient
// @version      2.0
// @description  Siyah-beyaz gradyan arka plan ve şeffaf YouTube arayüzü
// @match        https://www.youtube.com/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(() => {
    'use strict';

    const css = `
        /* Siyah-beyaz gradyan: yalnızca ana sayfa arka planı */
        html,
        body,
        ytd-app {
            background: linear-gradient(
                135deg,
                #000000 0%,
                #111111 35%,
                #292929 65%,
                #050505 100%
            ) fixed !important;
        }

        /* Arayüz katmanlarını şeffaf yap */
        ytd-watch-flexy,
        #columns,
        #primary,
        #secondary,
        #below,
        #above-the-fold,
        #contents,
        ytd-two-column-browse-results-renderer,
        ytd-section-list-renderer,
        ytd-rich-grid-renderer,
        ytd-rich-grid-row,
        ytd-rich-item-renderer,
        ytd-video-renderer,
        ytd-compact-video-renderer,
        ytd-comment-thread-renderer,
        ytd-comments,
        ytd-expander,
        #description,
        #description-inner,
        #meta,
        #content,
        #page-manager,
        ytd-masthead,
        #masthead-container,
        ytd-mini-guide-renderer,
        ytd-guide-renderer,
        #guide-content,
        #chips-wrapper,
        ytd-feed-filter-chip-bar-renderer {
            background: transparent !important;
            background-color: transparent !important;
            box-shadow: none !important;
        }

        /* Arama alanı */
        ytd-searchbox,
        #container.ytd-searchbox,
        #search-input {
            background: transparent !important;
        }

        /* Siyah-beyaz metin */
        body,
        yt-formatted-string,
        #video-title,
        #channel-name,
        #owner-text,
        #description,
        #content-text {
            color: #f5f5f5;
        }

        /* Kartlar hover sırasında hafifçe aydınlansın */
        ytd-rich-item-renderer,
        ytd-video-renderer,
        ytd-compact-video-renderer {
            transition: filter .2s ease;
        }

        ytd-rich-item-renderer:hover,
        ytd-video-renderer:hover,
        ytd-compact-video-renderer:hover {
            filter: brightness(1.12);
        }

        /* Oynatıcı çevresindeki sayfa alanları */
        ytd-watch-flexy[theater],
        #player-container-outer,
        #player-container-inner {
            background: transparent !important;
        }

        /* Video ilerleme çubuğu beyaz */
        .ytp-play-progress,
        .ytp-swatch-background-color {
            background: #ffffff !important;
        }

        /* Sayfa içi paneller */
        tp-yt-paper-dialog,
        ytd-popup-container,
        tp-yt-paper-listbox {
            background-color: #151515 !important;
        }
    `;

    const addStyle = () => {
        if (document.getElementById('kusabi-monochrome-gradient')) return;

        const style = document.createElement('style');
        style.id = 'kusabi-monochrome-gradient';
        style.textContent = css;
        (document.head || document.documentElement).appendChild(style);
    };

    addStyle();

    new MutationObserver(addStyle).observe(document.documentElement, {
        childList: true,
        subtree: true
    });
})();
