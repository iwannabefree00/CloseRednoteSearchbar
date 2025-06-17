// ==UserScript==
// @name         关闭小红书网页版搜索框
// @namespace    https://www.xiaohongshu.com/
// @version      1.0
// @description  关闭小红书网页版搜索框
// @match        https://www.xiaohongshu.com/*
// @grant        none
// @run-at       document-start
// @author       iwannabefree00
// ==/UserScript==

/*
 * Copyright © 2025 iwannabefree00 <your.email@example.com>
 * All Rights Reserved.
 * No warranty, explicit or implied.
 * First created: 2025-06-17
 * Purpose: Remove search suggestions from Xiaohongshu/Rednote web search.
 */

(function() {
    'use strict';
    // 要隐藏的 CSS 选择器
    const css = `
      .sug-container-wrapper,
      .sug-wrapper,
      .sug-pad,
      .hotspot-tag {
        display: none !important;
      }
    `;
    // 将样式注入到页面
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style); // 页面尚未完全加载时也能生效

    // 定义隐藏函数，用于初次隐藏和后续动态节点
    function hideSuggestions() {
        document.querySelectorAll(
          '.sug-container-wrapper, .sug-wrapper, .sug-pad, .hotspot-tag'
        ).forEach(el => {
            el.style.setProperty('display', 'none', 'important');
        });
    }

    // 初次执行
    hideSuggestions();

    // 监控后续 DOM 变化
    const observer = new MutationObserver(hideSuggestions);
    observer.observe(document.documentElement, {
        childList: true,
        subtree: true
    });
})();
