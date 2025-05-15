const year = document.querySelector('#year');
const thisYear = new Date().getFullYear();

year.setAttribute("datetime", thisYear);
year.textContent = thisYear;