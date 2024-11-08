customElements.get('show-more-button') ||
  customElements.define(
    'show-more-button',
    class extends HTMLElement {
      constructor() {
        super(),
          this.querySelector('button').addEventListener('click', (event) => {
            this.expandShowMore(event);
            const nextElementToFocus = event.target
              .closest('.parent-display')
              .querySelector('.show-more-item');
            nextElementToFocus &&
              !nextElementToFocus.classList.contains('hidden') &&
              nextElementToFocus.querySelector('input') &&
              nextElementToFocus.querySelector('input').focus();
          });
      }
      expandShowMore(event) {
        const parentDisplay = event.target
            .closest('[id^="Show-More-"]')
            .closest('.parent-display'),
          parentWrap = parentDisplay.querySelector('.parent-wrap');
        this.querySelectorAll('.label-text').forEach((element) =>
          element.classList.toggle('hidden')
        ),
          parentDisplay
            .querySelectorAll('.show-more-item')
            .forEach((item) => item.classList.toggle('hidden')),
          this.querySelector('.label-show-less') ||
            this.classList.add('hidden');
      }
    }
  );
//# sourceMappingURL=/cdn/shop/t/6/assets/show-more.js.map?v=135784227224860024771700898871
