let dateReg = new RegExp(/[0-9]{2}[\/ -][0-9]{2}[\/ -][0-9]{4}/);
let dateMail = new RegExp(/[a-zA-Z_\.0-9]+@[a-z0-9]+\.[a-z]{2,5}/gm);
let datePhone = new RegExp(
  /[+]?[0-9][\ (]{1,2}?[0-9]{3}[\ )]{1,2}?[0-9]{3}\ ?[0-9]{2}\ ?[0-9]{2}/gm,
);

export function whatIsIt(inputText) {
  if (inputText) {
    if (dateReg.test(inputText)) {
      console.log(`input is date = ${inputText}`);
      return `input is date = ${inputText}`;
    } else if (dateMail.test(inputText)) {
      console.log(`input is mail = ${inputText}`);
      return `input is mail = ${inputText}`;
    } else if (datePhone.test(inputText)) {
      console.log(`input is phone = ${inputText}`);
      return `input is phone = ${inputText}`;
    } else {
      console.log(`I do not know`);
      return `I do not know`;
    }
  }
}
