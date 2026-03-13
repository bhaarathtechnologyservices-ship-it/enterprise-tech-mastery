/**
 * TestimonialsManager — shared localStorage module for Enterprise Tech Mastery
 * All testimonial read/write/render logic lives here.
 * Storage key: etm_testimonials
 */
const TestimonialsManager = (() => {
  const KEY = 'etm_testimonials';

  const COURSE_LABELS = {
    'linux-fundamentals': 'Linux Fundamentals',
    'rhel': 'Red Hat Enterprise Linux',
    'suse': 'SUSE Linux Enterprise',
    'ai-infra': 'AI Infrastructure',
    'ai-knowledge': 'AI Knowledge',
    'ai-ops': 'AI Operations',
    'docker': 'Docker',
    'kubernetes': 'Kubernetes',
    'container-ops': 'Container Operations',
    'general': 'General / Platform'
  };

  function getAll() {
    try {
      return JSON.parse(localStorage.getItem(KEY) || '[]');
    } catch (e) {
      return [];
    }
  }

  function _save(arr) {
    try {
      localStorage.setItem(KEY, JSON.stringify(arr));
      return true;
    } catch (e) {
      return false; // QuotaExceededError or SecurityError — handled silently
    }
  }

  function add(obj) {
    const arr = getAll();
    arr.push(obj);
    return _save(arr);
  }

  function getPublic(limit) {
    limit = limit || 50;
    return getAll()
      .filter(function(t) { return t.public; })
      .sort(function(a, b) { return b.timestamp - a.timestamp; })
      .slice(0, limit);
  }

  function getByCourse(courseSlug, limit) {
    limit = limit || 10;
    return getAll()
      .filter(function(t) { return t.course === courseSlug; })
      .sort(function(a, b) { return b.timestamp - a.timestamp; })
      .slice(0, limit);
  }

  function getCourseLabel(slug) {
    return COURSE_LABELS[slug] || slug;
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function renderCard(t) {
    var filled = '★'.repeat(t.rating);
    var empty = '☆'.repeat(5 - t.rating);
    var scoreHTML = t.score ? '<span style="color:var(--nvidia-green);font-weight:700">' + t.score + '%</span> &bull; ' : '';
    var courseHTML = t.courseLabel
      ? '<span style="font-size:0.75rem;color:var(--nvidia-text3)">' + escapeHtml(t.courseLabel) + '</span>'
      : '';
    var timeAgo = _timeAgo(t.timestamp);
    return '<div class="proof-card dynamic-testimonial">' +
      '<div class="proof-stars">' + filled + empty + '</div>' +
      '<div class="proof-text">&ldquo;' + escapeHtml(t.text) + '&rdquo;</div>' +
      '<div class="proof-author">&mdash; ' + escapeHtml(t.author) + '</div>' +
      '<div style="margin-top:8px;font-size:0.78rem;color:var(--nvidia-text3)">' + scoreHTML + courseHTML + (courseHTML ? ' &bull; ' : '') + timeAgo + '</div>' +
      '</div>';
  }

  function _timeAgo(ts) {
    var diff = Math.floor((Date.now() - ts) / 1000);
    if (diff < 60) return 'just now';
    if (diff < 3600) return Math.floor(diff / 60) + 'm ago';
    if (diff < 86400) return Math.floor(diff / 3600) + 'h ago';
    if (diff < 2592000) return Math.floor(diff / 86400) + 'd ago';
    return Math.floor(diff / 2592000) + 'mo ago';
  }

  return {
    add: add,
    getAll: getAll,
    getPublic: getPublic,
    getByCourse: getByCourse,
    getCourseLabel: getCourseLabel,
    renderCard: renderCard,
    escapeHtml: escapeHtml
  };
})();
