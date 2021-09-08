/*
  Exercise 01
  -----------
  Add a new row to the table with the details: 'Sean Reyes' (@sreyes)
*/
const row = document.createElement('tr');
['6', 'Sean', 'Reyes', '@sreyes'].forEach(element => {
  const col = document.createElement('td')
  col.innerText = element;
  row.appendChild(col)

});
document.querySelector('table').appendChild(row);


/*
  Exercise 02
  ------------
  Update Leona Dixon's handle to @dixonl
*/
document.querySelector('table tr:nth-child(4) td:nth-child(4)').innerText = '@dixonl'

/*
  Exercise 03
  -----------
  Move Rosa Reed to the top of the table and ensure all the number entries in the
   first column are updated accordingly.
*/
const rosa = document.querySelector('table tr:nth-child(5)');
document.querySelector('table tr:nth-child(1)')
  .insertAdjacentElement('afterEnd', rosa);

Array.from(document.querySelectorAll('table tr td:nth-child(1)'))
  .forEach((col, index) => col.innerText = index + 1);

/*
  Exercise 04
  -----------
  Move the handle column including all of it's rows of contents to be the second column in the table
   (after the # column)
*/
Array.from(document.querySelectorAll('table tr'))
  .forEach(row => {
    const handlecol = row.querySelector('td:nth-child(4),th:nth-child(4)');
    const indexcol = row.querySelector('td:nth-child(1),th:nth-child(1)');
    indexcol.insertAdjacentElement('afterEnd', handlecol);

  })

/*
  Exercise 05
  -----------
  To make the table easier to read, make every other row on the table to have a darker, shaded colour e.g. #f2f2f2
*/
Array.from(document.querySelectorAll('table tr')).forEach((row, index) => {
  if ((index + 1) % 2 === 0) {
    row.style['background-color'] = '#f2f2f2';
  }
})

// document.querySelector('table').classList.add('table-stripped');