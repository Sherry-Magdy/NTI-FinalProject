    var close = document.querySelector('.close');
        var menu = document.querySelector('.menu');
        var list = document.querySelector('ul');

        close.addEventListener('click', hide);
        function hide() {
            list.style.display = 'none';
        }

        menu.addEventListener('click',show);
        function show(){
            list.style.display='flex';
        }