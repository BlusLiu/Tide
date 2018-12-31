    function Show1(){
        document.getElementById('modal-signup').classList.remove('hide');
    }
    function Hide1(){
        document.getElementById('modal-signup').classList.add('hide');
    }


    function Show2(){
        document.getElementById('modal-login').classList.remove('hide');
    }
    function Hide2(){
        document.getElementById('modal-login').classList.add('hide');
    }

    function tlogIn(){
        Hide1();
        Show2();
    }
    function logIn(){
        Hide2();
        document.getElementById('login_left').classList.add('hide');
        document.getElementById('logined_left').classList.remove('hide');
    }
    function logOut(){
        
      
        document.getElementById('login_left').classList.remove('hide');
        document.getElementById('logined_left').classList.add('hide');
    }