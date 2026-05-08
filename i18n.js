// i18n — translation helper. Loaded before periodic-table.js

window.LOCALES = window.LOCALES || {};

let _locale = 'en';

function t(key, vars) {
  const activeDic = window.LOCALES[_locale] || {};
  const fallbackDic = window.LOCALES['en'] || {};

  let value = Object.prototype.hasOwnProperty.call(activeDic, key)
    ? activeDic[key]
    : Object.prototype.hasOwnProperty.call(fallbackDic, key)
      ? fallbackDic[key]
      : key;

  // Plural shapes: { one: "...", other: "..." }
  if (value !== null && typeof value === 'object') {
    if (vars && typeof vars.count !== 'undefined') {
      value = vars.count === 1 ? value.one : value.other;
    } else {
      value = value.other !== undefined ? value.other : key;
    }
  }

  // Interpolation: replace {varName} with vars.varName
  if (vars && typeof value === 'string') {
    value = value.replace(/\{(\w+)\}/g, function (_, name) {
      return Object.prototype.hasOwnProperty.call(vars, name) ? vars[name] : '{' + name + '}';
    });
  }

  return typeof value === 'string' ? value : key;
}

function currentLocale() {
  return _locale;
}

function setLocale(locale) {
  _locale = locale;
  localStorage.setItem('pt_locale', locale);
  document.documentElement.lang = locale;
  applyLocale();
  window.rerenderAll?.();
}

function applyLocale() {
  // Update elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    el.textContent = t(el.dataset.i18n);
  });

  // Update attributes with data-i18n-attr (value format: "attrName:i18nKey")
  document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
    var parts = el.dataset.i18nAttr.split(':');
    if (parts.length >= 2) {
      var attrName = parts[0];
      var i18nKey = parts.slice(1).join(':');
      el.setAttribute(attrName, t(i18nKey));
    }
  });

  // Update page title
  document.title = t('ui.pageTitle');
}

// tEl: get a translatable field from an element object.
// Prefers the locale dict; falls back to the field on the element object itself.
// Handles the 'disc' field: translates the 'Ancient' sentinel via era.ancient.
function tEl(el, field) {
  const dictKey = 'element.' + el.n + '.' + field;
  const activeDic = window.LOCALES[_locale] || {};
  const enDic = window.LOCALES['en'] || {};
  if (Object.prototype.hasOwnProperty.call(activeDic, dictKey)) return activeDic[dictKey];
  if (Object.prototype.hasOwnProperty.call(enDic, dictKey)) return enDic[dictKey];
  // Fallback to element array data
  if (field === 'disc') return el.disc === 'Ancient' ? t('era.ancient') : el.disc;
  if (field === 'uses') return el.uses; // array — caller handles
  return el[field] !== undefined ? String(el[field]) : dictKey;
}

// tOr: like t() but returns fallback instead of the raw key when no translation exists
function tOr(key, fallback, vars) {
  const activeDic = window.LOCALES[_locale] || {};
  const enDic = window.LOCALES['en'] || {};
  if (!Object.prototype.hasOwnProperty.call(activeDic, key) && !Object.prototype.hasOwnProperty.call(enDic, key)) {
    return fallback;
  }
  return t(key, vars);
}

// Expose functions globally
window.t = t;
window.tEl = tEl;
window.tOr = tOr;
window.currentLocale = currentLocale;
window.setLocale = setLocale;
window.applyLocale = applyLocale;

// Language switcher UI + locale initialization
document.addEventListener('DOMContentLoaded', function () {
  // Build language switcher
  var h1 = document.querySelector('h1');
  if (h1) {
    var h1Parent = h1.parentElement;

    var switcher = document.createElement('div');
    switcher.className = 'lang-switcher';
    switcher.style.cssText = 'position:absolute;top:1rem;right:1rem;display:flex;gap:0.5rem;';

    var locales = ['en', 'es'];
    var labels = { en: 'EN', es: 'ES' };

    locales.forEach(function (loc) {
      var btn = document.createElement('button');
      btn.dataset.locale = loc;
      btn.textContent = labels[loc];

      if (loc === 'es' && Object.keys(window.LOCALES.es || {}).length === 0) {
        btn.classList.add('coming-soon');
        btn.title = 'Coming soon!';
      }

      btn.addEventListener('click', function () {
        setLocale(loc);
        switcher.querySelectorAll('button').forEach(function (b) {
          b.classList.toggle('active', b.dataset.locale === loc);
        });
      });

      switcher.appendChild(btn);
    });

    // Insert switcher after the h1's parent wrapper
    if (h1Parent && h1Parent.parentElement) {
      h1Parent.parentElement.style.position = 'relative';
      h1Parent.insertAdjacentElement('afterend', switcher);
    } else {
      // Fallback: append to body
      document.body.appendChild(switcher);
    }
  }

  // Locale initialization
  var stored = localStorage.getItem('pt_locale');
  var detected = stored
    || (navigator.language && navigator.language.startsWith('es') ? 'es' : 'en');

  var initial = window.LOCALES[detected] !== undefined ? detected : 'en';

  _locale = initial;
  localStorage.setItem('pt_locale', initial);
  document.documentElement.lang = initial;

  // Update active button state
  var switcher = document.querySelector('.lang-switcher');
  if (switcher) {
    switcher.querySelectorAll('button').forEach(function (b) {
      b.classList.toggle('active', b.dataset.locale === initial);
    });
  }

  // Apply static data-i18n attrs, then let periodic-table.js re-render dynamic content
  applyLocale();
  window.rerenderAll?.();
});
