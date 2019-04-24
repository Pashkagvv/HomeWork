let tab, contentWrapper;



window.onload = function () {
    tab = document.getElementsByClassName('tab');
    content = document.getElementsByClassName('contentWrapper');
    notVisiblContent(1);
}
 

function notVisiblContent(x) {
    for (var i = x; i < content.length; i++) {
       content[i].classList.remove('seen');
       content[i].classList.add('notSeen');
       tab[i].classList.remove('active');
    }
    
}

function VisiblContent(i) {
    if (content[i].classList.contains('notSeen')) {
        notVisiblContent(0);
        tab[i].classList.add('active');
        content[i].classList.remove('notSeen');
        content[i].classList.add('seen');

    }
}

document.getElementById('tabs').onclick = function(event){
    var target = event.target;
    if ( false !== target.className.indexOf('tab') ) {
        for (var i = 0; i < tab.length; i++) {
           if(target == tab[i]){
               VisiblContent(i);
               break;
           }

       }
   }
}
