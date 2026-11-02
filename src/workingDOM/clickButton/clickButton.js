import { isHiddenButton } from '../isHiddenButton/isHiddenButton';

export function clickButton(event) {
  let inputEl = document.querySelector('.inputEl');
  let btnEl = document.querySelector('.btnEl');

  if (inputEl.value != '') {
    const divP = document.querySelector('.divP');
    const newP = document.createElement('p');
    newP.innerText = inputEl.value;
    divP.append(newP);

    inputEl.value = '';

    if (divP.children.length > 5) {
      divP.children[0].remove();
    }
  }
  btnEl.hidden = isHiddenButton(inputEl.value);
}
