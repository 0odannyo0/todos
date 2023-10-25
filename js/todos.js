window.onload = function() {
  const form = document.querySelector('#my-form')
  const errormsg = document.querySelector('.errormsg')
  const date = document.querySelector('#date');
  const time = document.querySelector('#time');
  const thing = document.querySelector('#thing');
  const userList = document.querySelector('#user');

  form.addEventListener('submit', onsubmit);
  
  function onsubmit(e) {
    e.preventDefault();

    if ( date.value === '' || time.value === '' || thing.value === '' ) {
      errormsg.classList.add('error');
      errormsg.innerHTML = 'Plase input your data'

      setTimeout(() => errormsg.remove(), 5000);
    } else {
      const li = document.createElement('li');
      li.appendChild(document.createTextNode(`${date.value}：${time.value}：${thing.value}`));
      li.classList.add('font-color');
      userList.appendChild(li);

      date.value = '';
      time.value = '';
      thing.value = '';
    }

  }


}