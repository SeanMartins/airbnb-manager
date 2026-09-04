/* Shared inline-SVG icon set — minimal 1.8px stroke, currentColor, Lucide/Feather-inspired.
   Plain script (not a module) so it is available to inline onclick handlers and to the
   type="module" app scripts that run after it. Exposes window.ICONS and window.Icon(). */
(function (global) {
  var ICONS = {
    home: '<polyline points="3 11 12 4 21 11"/><path d="M5 10v9a1 1 0 0 0 1 1h3v-6h6v6h3a1 1 0 0 0 1-1v-9"/>',
    dashboard: '<rect x="3" y="3" width="7" height="9" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="12" width="7" height="9" rx="1.5"/><rect x="3" y="16" width="7" height="5" rx="1.5"/>',
    calendar: '<rect x="3" y="4" width="18" height="17" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="16" y1="2" x2="16" y2="6"/>',
    calendarCheck: '<rect x="3" y="4" width="18" height="17" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="16" y1="2" x2="16" y2="6"/><polyline points="8 14 11 17 16 11"/>',
    message: '<path d="M4 12a8 8 0 1 1 3.4 6.5L4 20l1.3-3.6A7.96 7.96 0 0 1 4 12Z"/>',
    sparkles: '<path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3Z"/><circle cx="19" cy="5" r="1" fill="currentColor" stroke="none"/><circle cx="5" cy="19" r="1" fill="currentColor" stroke="none"/>',
    tag: '<path d="M11.5 3H4a1 1 0 0 0-1 1v7.5a1 1 0 0 0 .3.7l9 9a1 1 0 0 0 1.4 0l7.5-7.5a1 1 0 0 0 0-1.4l-9-9a1 1 0 0 0-.7-.3Z"/><circle cx="7.3" cy="7.3" r="1.4" fill="currentColor" stroke="none"/>',
    trendingUp: '<polyline points="3 17 9 11 13 15 21 6"/><polyline points="15 6 21 6 21 12"/>',
    clipboard: '<rect x="5" y="4" width="14" height="17" rx="2"/><rect x="9" y="2" width="6" height="4" rx="1"/><line x1="8" y1="11" x2="16" y2="11"/><line x1="8" y1="15" x2="16" y2="15"/>',
    folder: '<path d="M3 6.5A1.5 1.5 0 0 1 4.5 5H9l2 2.5h8A1.5 1.5 0 0 1 20.5 9v8A1.5 1.5 0 0 1 19 18.5H4.5A1.5 1.5 0 0 1 3 17V6.5Z"/>',
    camera: '<path d="M4 8h3l1.5-2h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z"/><circle cx="12" cy="13.3" r="3.3"/>',
    star: '<path d="M12 3.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L12 16.8l-5.3 2.8 1-5.8-4.2-4.1 5.9-.9L12 3.5Z"/>',
    wallet: '<path d="M3 7.5A1.5 1.5 0 0 1 4.5 6h13A1.5 1.5 0 0 1 19 7.5V9h1.5A1.5 1.5 0 0 1 22 10.5v7a1.5 1.5 0 0 1-1.5 1.5h-16A1.5 1.5 0 0 1 3 17.5v-10Z"/><circle cx="17" cy="14" r="1.1" fill="currentColor" stroke="none"/>',
    fileText: '<path d="M6 2.5h8l4 4v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-17a1 1 0 0 1 1-1Z"/><polyline points="14 2.5 14 6.5 18 6.5"/><line x1="8" y1="9" x2="11" y2="9"/><line x1="8" y1="12.3" x2="16" y2="12.3"/><line x1="8" y1="15.6" x2="16" y2="15.6"/>',
    sliders: '<line x1="4" y1="6" x2="20" y2="6"/><circle cx="9" cy="6" r="2"/><line x1="4" y1="12" x2="20" y2="12"/><circle cx="15" cy="12" r="2"/><line x1="4" y1="18" x2="20" y2="18"/><circle cx="7" cy="18" r="2"/>',
    bell: '<path d="M6 10a6 6 0 0 1 12 0c0 3.5 1 5 2 6H4c1-1 2-2.5 2-6Z"/><path d="M10 19a2 2 0 0 0 4 0"/>',
    checkCircle: '<circle cx="12" cy="12" r="9"/><polyline points="8 12.5 11 15.5 16 9"/>',
    xCircle: '<circle cx="12" cy="12" r="9"/><line x1="9" y1="9" x2="15" y2="15"/><line x1="15" y1="9" x2="9" y2="15"/>',
    x: '<line x1="5" y1="5" x2="19" y2="19"/><line x1="19" y1="5" x2="5" y2="19"/>',
    shieldCheck: '<path d="M12 2.5 19 5.5v6c0 5-3 8.2-7 10-4-1.8-7-5-7-10v-6L12 2.5Z"/><polyline points="8.8 12 11 14.2 15.3 9.5"/>',
    landmark: '<line x1="3" y1="21" x2="21" y2="21"/><line x1="5" y1="21" x2="5" y2="10"/><line x1="9" y1="21" x2="9" y2="10"/><line x1="15" y1="21" x2="15" y2="10"/><line x1="19" y1="21" x2="19" y2="10"/><polygon points="12 2 21 8 3 8"/>',
    banknote: '<rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="3"/>',
    wrench: '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.8 2.8-2-2 2.8-2.8Z"/>',
    cart: '<circle cx="9" cy="20" r="1.3"/><circle cx="18" cy="20" r="1.3"/><path d="M2.5 3h2.5l2.6 12.4a2 2 0 0 0 2 1.6h8.4a2 2 0 0 0 2-1.6L21.5 8H6"/>',
    box: '<path d="M12 2.5 21 7v10l-9 4.5-9-4.5V7l9-4.5Z"/><polyline points="3.3 7 12 11.5 20.7 7"/><line x1="12" y1="11.5" x2="12" y2="21.5"/>',
    creditCard: '<rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/>',
    moreHorizontal: '<circle cx="5" cy="12" r="1.3" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1.3" fill="currentColor" stroke="none"/><circle cx="19" cy="12" r="1.3" fill="currentColor" stroke="none"/>',
    printer: '<polyline points="6 9 6 3 18 3 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="7"/>',
    paperclip: '<path d="M20 12.5 12.4 20a5 5 0 0 1-7-7L13 5.4a3.5 3.5 0 0 1 5 5L10.5 18a2 2 0 0 1-3-3L15 7.5"/>',
    send: '<polygon points="3 11 21 3 13 21 11 13 3 11"/>',
    lock: '<rect x="4.5" y="10.5" width="15" height="10" rx="2"/><path d="M8 10.5V7a4 4 0 0 1 8 0v3.5"/>',
    alertTriangle: '<path d="M12 3 22 20H2L12 3Z"/><line x1="12" y1="9" x2="12" y2="13.5"/><circle cx="12" cy="16.5" r="0.9" fill="currentColor" stroke="none"/>',
    refresh: '<path d="M21 12a9 9 0 0 1-15.3 6.4L3 16"/><polyline points="3 21 3 16 8 16"/><path d="M3 12a9 9 0 0 1 15.3-6.4L21 8"/><polyline points="21 3 21 8 16 8"/>',
    lightbulb: '<path d="M9 18h6"/><path d="M10 21h4"/><path d="M12 3a6 6 0 0 0-4 10.5c.6.6 1 1.4 1 2.5h6c0-1.1.4-1.9 1-2.5A6 6 0 0 0 12 3Z"/>',
    mapPin: '<path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z"/><circle cx="12" cy="9" r="2.3"/>',
    moon: '<path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z"/>',
    arrowLeft: '<line x1="19" y1="12" x2="5" y2="12"/><polyline points="11 6 5 12 11 18"/>',
    arrowRight: '<line x1="5" y1="12" x2="19" y2="12"/><polyline points="13 6 19 12 13 18"/>',
    plus: '<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>',
    logout: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>',
    check: '<polyline points="4 12 9 17 20 6"/>'
  };

  function Icon(name, opts) {
    opts = opts || {};
    var size = opts.size || 18;
    var cls = opts.cls ? ' ' + opts.cls : '';
    var sw = opts.sw || 1.8;
    var inner = ICONS[name] || '';
    return '<svg class="icon icon-' + name + cls + '" width="' + size + '" height="' + size +
      '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="' + sw +
      '" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + inner + '</svg>';
  }

  function StarIcon(filled, size) {
    size = size || 18;
    var fill = filled ? 'currentColor' : 'none';
    return '<svg class="icon icon-star" width="' + size + '" height="' + size +
      '" viewBox="0 0 24 24" fill="' + fill + '" stroke="currentColor" stroke-width="1.8" ' +
      'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + ICONS.star + '</svg>';
  }

  global.ICONS = ICONS;
  global.Icon = Icon;
  global.StarIcon = StarIcon;
})(window);
