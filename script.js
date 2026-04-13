// script.js — Renders publications & courses from data.js; handles theme toggle.
// Data source: data.js (must be loaded before this script).

(function () {
  'use strict';

  /* ── Theme toggle ──────────────────────────────────────── */
  const THEME_KEY = 'mono-academic-theme';
  const toggle = document.getElementById('theme-toggle');
  const root   = document.documentElement;

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    toggle.textContent = theme === 'dark' ? '☀' : '☽';
    toggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  }

  // Initialise from localStorage or system preference
  const stored = localStorage.getItem(THEME_KEY);
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(stored || (prefersDark ? 'dark' : 'light'));

  toggle.addEventListener('click', function () {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem(THEME_KEY, next);
  });

  /* ── Utility: render **bold** markers in an author string ── */
  function renderAuthors(str) {
    // Replace **...** with <strong>...</strong>
    return str.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  }

  /* ── Utility: escape HTML special chars ─────────────────── */
  function esc(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  /* ── Render publications ─────────────────────────────────── */
  const pubList = document.getElementById('pub-list');
  if (pubList && typeof PUBLICATIONS !== 'undefined') {
    pubList.innerHTML = PUBLICATIONS.map(function (pub, i) {
      const num     = '[' + (i + 1) + ']';
      const title   = esc(pub.title);
      const authors = renderAuthors(esc(pub.authors));
      const venue   = esc(pub.venue);
      const year    = esc(String(pub.year));
      const url     = esc(pub.url);

      return [
        '<li class="pub-item">',
        '  <span class="pub-num">' + num + '</span>',
        '  <div class="pub-body">',
        '    <a class="pub-title" href="' + url + '" target="_blank" rel="noopener">' + title + '</a>',
        '    <span class="pub-authors">' + authors + '</span>',
        '    <span class="pub-venue"><em>' + venue + '</em><span class="pub-year">' + year + '</span></span>',
        '  </div>',
        '</li>'
      ].join('\n');
    }).join('\n');
  }

  /* ── Render courses ──────────────────────────────────────── */
  const courseList = document.getElementById('course-list');
  if (courseList && typeof COURSES !== 'undefined') {
    courseList.innerHTML = COURSES.map(function (course, i) {
      const bullet = '// ' + String(i + 1).padStart(2, '0');
      const title  = esc(course.title);
      const desc   = esc(course.description || '');

      return [
        '<li class="course-item">',
        '  <span class="course-bullet">' + bullet + '</span>',
        '  <div class="course-body">',
        '    <span class="course-title">' + title + '</span>',
        desc ? '    <span class="course-desc">' + desc + '</span>' : '',
        '  </div>',
        '</li>'
      ].join('\n');
    }).join('\n');
  }
})();
