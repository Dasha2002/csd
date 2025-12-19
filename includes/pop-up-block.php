<section id="popup-block" aria-hidden="true">
  <div class="block" role="dialog" aria-modal="true">
    <div class="block-form">
      <form>
        <div class="form-fields">
          <div class="name">
            <label for="name"></label>
            <input type="text" name="name" placeholder="Имя" id="name" required>
          </div>
          <div class="phone">
            <label for="phone"></label>
            <input type="tel" name="phone" placeholder="+7 (999) 999-99-99" id="phone" maxlength="21" required>
          </div>
          <div class="sum">
            <div class="sum-inner">
              <button type="button" class="counter-btn btnMinus">
                <img src="/assets/img/form-btn-one.svg" alt="">
              </button>
              <span class="counter-label">Сумма всех долгов</span>
              <button type="button" class="counter-btn btnPlus">
                <img src="/assets/img/form-btn-two.svg" alt="">
              </button>
            </div>
          </div>
        </div>

        <div class="form-footer">
          <div class="checkbox-block">
            <input type="checkbox" class="checkbox-input" id="data-consent">

            <label for="data-consent" class="checkbox-custom"></label>

            <label for="data-consent" class="checkbox-text">
              Даю согласие на обработку персональных<br> данных
            </label>
          </div>

          <div class="btn">
            <button type="submit">Отправить</button>
          </div>
        </div>
      </form>
    </div>

    <div class="block-img" aria-hidden="true">
      <img src="/assets/img/man-consultation.svg" alt="">
      <div class="btn-close">
        <button type="button" aria-label="Закрыть"><img src="/assets/img/cross.svg" alt=""></button>
      </div>
    </div>
  </div>
</section>