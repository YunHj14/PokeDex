// 11번 FAQ: 태그 버튼으로 질문을 분류하고 결과 위치로 이동합니다.
(function () {
  const items = Array.from(document.querySelectorAll('.faq-item'));
  const count = document.querySelector('#faq-result-count');
  const empty = document.querySelector('#faq-empty');
  const results = document.querySelector('#faq-results');
  const tagButtons = Array.from(document.querySelectorAll('[data-faq-tag]'));
  const actionButtons = Array.from(document.querySelectorAll('[data-faq-action]'));

  function filterFaq(tag) {
    let visibleCount = 0;
    items.forEach(function (item) {
      item.hidden = tag !== '' && !item.dataset.tags.split(',').includes(tag);
      if (!item.hidden) visibleCount += 1;
    });
    count.textContent = (tag ? '#' + tag + ' · ' : '') + '전체 ' + items.length + '개 중 ' + visibleCount + '개 질문';
    empty.hidden = visibleCount !== 0;
    tagButtons.forEach(function (button) {
      button.setAttribute('aria-pressed', String(button.dataset.faqTag === tag));
    });
    actionButtons.forEach(function (button) { button.disabled = visibleCount === 0; });
  }

  tagButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      filterFaq(button.dataset.faqTag);
      // 같은 페이지 안에서 필터링된 질문 목록으로 이동합니다.
      results.scrollIntoView({ block: 'start', behavior: 'auto' });
      results.focus({ preventScroll: true });
    });
  });
  document.querySelector('#faq-reset').addEventListener('click', function () {
    filterFaq('');
  });
  actionButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      const shouldOpen = button.dataset.faqAction === 'open';
      items.forEach(function (item) {
        if (!item.hidden) item.open = shouldOpen;
      });
    });
  });
  filterFaq('');
})();
