console.log(1);
const button=document.querySelector('button');//указал что на странице есть кнопка
const output=document.querySelector('.output');//на странице есть место

button.addEventListener('click', function(){// событие для кнопки что пользователь нажимает для выполненя инструкции и появляется текст
    output.innerHTML= 'Ух-ты';
});