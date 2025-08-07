document.addEventListener("DOMContentLoaded", () => {
  const rangeSlider = document.getElementById('range');
  const rangeValue = document.querySelector('.form__input-range-value-number');

  rangeSlider.addEventListener('input', function () {
    rangeValue.textContent = `${this.value}%`;

    const percent = this.value / (this.max - this.min);
    const trackWidth = this.offsetWidth;
    const thumbSize = 24;
    const position = percent * (trackWidth - thumbSize) + thumbSize / 2;

    rangeValue.style.left = `${position}px`;
  });

  rangeSlider.dispatchEvent(new Event('input'));
})