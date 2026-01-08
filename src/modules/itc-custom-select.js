export default {
  init() {
    class ItcCustomSelect {
      static EL = 'itc-select';
      static EL_SHOW = 'itc-select_show';
      static EL_OPTION = 'itc-select__option';
      static EL_OPTION_SELECTED = 'itc-select__option_selected';
      static DATA = '[data-select]';
      static DATA_TOGGLE = '[data-select="toggle"]';

      static template(params) {
        const { name, options, targetValue } = params;
        const items = [];
        let selectedIndex = -1;
        let selectedValue = '';
        let selectedContent = 'Выберите из списка';

        options.forEach((option, index) => {
          let selectedClass = '';
          if (option[0] === targetValue) {
            selectedClass = ` ${this.EL_OPTION_SELECTED}`;
            selectedIndex = index;
            selectedValue = option[0];
            selectedContent = option[1];
          }
          items.push(
            `<li class="itc-select__option${selectedClass}" data-select="option"
              data-value="${option[0]}" data-index="${index}">${option[1]}</li>`
          );
        });

        return `<button type="button" class="itc-select__toggle" name="${name}"
          value="${selectedValue}" data-select="toggle" data-index="${selectedIndex}">
          ${selectedContent}</button><div class="itc-select__dropdown">
          <ul class="itc-select__options">${items.join('')}</ul></div>`;
      }

      static hideOpenSelect() {
        document.addEventListener('click', (e) => {
          if (!e.target.closest(`.${this.EL}`)) {
            document.querySelectorAll(`.${this.EL_SHOW}`).forEach((el) => {
              el.classList.remove(this.EL_SHOW);
            });
          }
        });
      }

      constructor(target, params) {
        this._el = typeof target === 'string' ? document.querySelector(target) : target;
        this._params = params || {};
        this._onClickFn = this._onClick.bind(this);

        if (this._params.options) {
          this._el.innerHTML = this.constructor.template(this._params);
          this._el.classList.add(this.constructor.EL);
        }

        this._elToggle = this._el.querySelector(this.constructor.DATA_TOGGLE);
        this._el.addEventListener('click', this._onClickFn);
      }

      _onClick(e) {
        const { target } = e;
        const elWithData = target.closest(this.constructor.DATA);
        if (!elWithData) return;

        const type = elWithData.dataset.select;
        if (type === 'toggle') {
          this.toggle();
        } else if (type === 'option') {
          this._changeValue(target);
        }
      }

      _updateOption(el) {
        const elOption = el.closest(`.${this.constructor.EL_OPTION}`);
        const elOptionSel = this._el.querySelector(`.${this.constructor.EL_OPTION_SELECTED}`);
        if (elOptionSel) elOptionSel.classList.remove(this.constructor.EL_OPTION_SELECTED);

        elOption.classList.add(this.constructor.EL_OPTION_SELECTED);
        this._elToggle.textContent = elOption.textContent;
        this._elToggle.value = elOption.dataset.value;
        this._elToggle.dataset.index = elOption.dataset.index;

        this._el.dispatchEvent(new CustomEvent('itc.select.change'));
        if (this._params.onSelected) this._params.onSelected(this, elOption);

        return elOption.dataset.value;
      }

      _changeValue(el) {
        if (el.classList.contains(this.constructor.EL_OPTION_SELECTED)) return;
        this._updateOption(el);
        this.hide();
      }

      show() {
        document.querySelectorAll(`.${this.constructor.EL_SHOW}`).forEach((el) => {
          el.classList.remove(this.constructor.EL_SHOW);
        });
        this._el.classList.add(this.constructor.EL_SHOW);
      }

      hide() {
        this._el.classList.remove(this.constructor.EL_SHOW);
      }

      toggle() {
        this._el.classList.contains(this.constructor.EL_SHOW) ? this.hide() : this.show();
      }
    }

    ItcCustomSelect.hideOpenSelect();
    new ItcCustomSelect('#select-1');

    const options = document.querySelectorAll('.itc-select__option');
    const btn = document.querySelector('.itc-select__toggle');

    // ---- ТОЛЬКО index и ukr ----
    const path = window.location.pathname;
    const isIndex = path === '/' || path.endsWith('/index.html');
    const isUkr = path.endsWith('/ukr.html');

    // выставляем корректное значение на кнопке при загрузке
    if (btn) {
      if (isUkr) {
        btn.dataset.index = '1';
        btn.dataset.value = 'Ukr';
        btn.textContent = 'Ukr';
      } else {
        // по умолчанию index
        btn.dataset.index = '0';
        btn.dataset.value = 'Rus';
        btn.textContent = 'Rus';
      }
    }

    options.forEach((opt) => {
      opt.addEventListener('click', () => {
        const v = opt.dataset.value;

        if (v === 'index') {
          window.location.href = '/';
        } else if (v === 'ukr') {
          window.location.href = '/ukr.html';
        }
      });
    });
  }
};
