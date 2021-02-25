let admin_knopka                                 = document.getElementById("admin_knopka");
let nadpis_dobavit_stix                          = document.getElementById("nadpis_dobavit_stix");
let nazva_stixa_area                             = document.getElementById("nazva_stixa");
let text_stixa_area                              = document.getElementById("text_stixa");
let tekst_stixa, nazvanie_stixa, nazv_stix_click;  
let ul_tag                                       = document.getElementById("ul_tag");
let button_dobavit_stix                          = document.getElementById("button_dobavit_stix");
let article_stariy                               = document.getElementById("content");
let razdel_lubov                                 = document.getElementById("razdel_lubov");
let x, y, z, li, x_y, spasenie;
spasenie                                         = false;

let menu_stixi_pro_lubov_array   = new Array();
let nazvi_strong                 = new Array();
let br_1_array                   = new Array();

let stixi = new Array(); 
let index_of_stix; 





function voyti(){ /*Ну это типо система Входа */
	let login = prompt("Введите логин!");
	if (login == "KingArtur1000"){
		alert("Поздравляю! Вы вошли в систему, мой хозяин. Но логин было очень просто угадать! А что насчет пароля? ;)");
		let password = prompt("Введите пароль, мой хозяин.");
		if (password == "27hegahoarturdmitriev"){
			alert("Вау! Вы и вправду мой хозяин! Проходите, добавляйте и редактируйте стихотворения!");
			admin_knopka.style.visibility = "visible";
			
		} else if (password == "hack"){
			alert("Ты взаправду думаешь, что это сработало? Что ж, ты весьма наивный. ;)");
		} else if (password == "" || password == null || password == undefined){
			return;
		} else{
			alert("Вы не мой хозяин!");
		}
		
	} else if (login == "Pavel_Zhuk"){
		alert("Хм, вы ввели логин правильно, но что насчет пароля? :)");
		let password2 = prompt("Введите пароль.");
		if (password2 == "YampJRQ24"){
			alert("Вау! Вы и вправду администратор! Проходите, добавляйте и редактируйте стихотворения!");
			admin_knopka.style.visibility = "visible";
			
		} else if (password2 == "hack"){
			alert("Ты взаправду думаешь, что это сработало? Ты весьма наивный. ;)");
		} else if (password == "" || password == null || password == undefined){
			return;
		} else{
			alert("Вы не администратор!");
		}
	} else if (login == "hack"){
		alert("Как думаешь? Взлом сработал?! :)");
	} else if (login == "" || login == null || login == undefined){
		return;
	} else {
		alert("Вы ввели неправильный логин! Или вы просто пытаетесь подобрать логин, я прав? ;)");
	}
}




function command_admin_index(){
	alert("Чтобы добавить или редактировать стих, вам нужно: 1) Перейти в тот раздел где вы хотите добавить или редактировать стих. 2) Опять нажать кнопку войти внизу и ввести данные. 3) Если вы ввели все данные правильно у Вас появится красная кнопка 'Для Администраторов'. 4) Нажмите на эту кнопку.");
}


function command_admin(){
	
	button_dobavit_stix.style.visibility = "visible";
	button_dobavit_stix.style.position   = "static";
    text_stixa_area.style.visibility     = "visible";
    text_stixa_area.style.position       = "static";
    nazva_stixa_area.style.visibility    = "visible";
    nazva_stixa_area.style.position      = "static";	
	
}



function dobavit_stix(){ /*Когда мы нажимаем на кнопку "Добавить стихотворение, то" */
    
	let nazva_stixa = nazva_stixa_area.value;
	let tekst_stixa = text_stixa_area.value;
	
	razdel_lubov.insertAdjacentHTML('beforeEnd', '<li onclick="stix_click()" class="menu_stixi_pro_lubov"></li>');
	ul_tag.insertAdjacentHTML('beforeEnd', '<li class="stixi"><strong class="nazvi_strong"></strong><br class="br_1"></li>');
	
	/* Nazva_razdela paste */
	
	menu_stixi_pro_lubov_array       = document.getElementsByClassName("menu_stixi_pro_lubov");
	menu_stixi_pro_lubov_array_index = menu_stixi_pro_lubov_array.length - 1;
	menu_stixi_pro_lubov_array[menu_stixi_pro_lubov_array_index].innerHTML = nazva_stixa;
	
	/* Nazva Stixa paste */
	
	nazvi_strong           = document.getElementsByClassName("nazvi_strong");
	nazvi_strong_index     = nazvi_strong.length - 1;
	nazvi_strong[nazvi_strong_index].innerHTML = nazva_stixa;
	
	/* Tekst Stixa paste */
	
	br_1_array             = document.getElementsByClassName("br_1");
	br_1_array_index       = br_1_array.length - 1;
	br_1_array[br_1_array_index].insertAdjacentHTML('afterEnd', tekst_stixa);
	
	
	
	
	
}  
  

function stix_click(){
	button_dobavit_stix.style.visibility = "hidden";
	button_dobavit_stix.style.position   = "absolute";
    text_stixa_area.style.visibility     = "hidden";
    text_stixa_area.style.position       = "absolute";
    nazva_stixa_area.style.visibility    = "hidden";
    nazva_stixa_area.style.position      = "absolute";
	
	razdel_lubov.onclick = function(e){

	    index_of_stix = [].indexOf.call(this.children, (e ? e.target : event.srcElement) );
		
		
		stixi                                 = document.getElementsByClassName("stixi");
	    stixi[index_of_stix].style.visibility = "visible";
	    stixi[index_of_stix].style.position   = "static" ;
        
		let stixi_length = stixi.length - 1; /* Change stixi length for good script */
		
		/* It is my spasenie ('-0^0-') */
		while ( stixi_length >= 1 ){
			
			index_of_stix = [].indexOf.call(this.children, (e ? e.target : event.srcElement) );
			
			if (index_of_stix >= 0){
				while (stixi_length > index_of_stix ){
				index_of_stix = index_of_stix + 1;
				stixi[index_of_stix].style.visibility = "hidden"  ;
				stixi[index_of_stix].style.position   = "absolute";
				}
				
				index_of_stix = [].indexOf.call(this.children, (e ? e.target : event.srcElement) );
				
				while (stixi_length <= index_of_stix){
				index_of_stix = index_of_stix - 1;
				stixi[index_of_stix].style.visibility = "hidden"  ;
				stixi[index_of_stix].style.position   = "absolute";
				}
			}
			
		    
			
			
			stixi_length = stixi_length - 1;
		}
	};
	window.scrollTo(0, 0);
}





















function onPress_Enter() {
    let key = window.event.keyCode;

    // If the user has pressed enter
    if (key === 13) {
        document.getElementById("text_stixa").value = document.getElementById("text_stixa").value + "</br>";
        return false;
    }
    else {
        return true;
    }
}