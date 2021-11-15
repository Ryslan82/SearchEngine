export let html_entry ='';
class MainClass {

    render() {
       html_entry = `
       <div  class="class_mail" id="mail">
        <div class="class_mail1 vse_mail" id="mail1">Почта</div>
        <div class="class_mail2 vse_mail" id="mail2">
            Логин: <input type="text">
        </div>
        <div class="class_mail3 vse_mail" id="mail3">
            Пароль: <input type="password" name="Пароль" id="mail3_1">
        </div>
        <div class="class_mail4 vse_mail" id="mail4">
            Вход
        </div>
    </div> `;
        


       };

}


const mainClassPage = new MainClass();
