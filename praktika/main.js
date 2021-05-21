let day = prompt("Hafta kunini kiriting");
day*=1;5
let nameDay = "";
switch(day){
	case 1:
		nameDay = "Dushanba";
			break;
	case 2:
		nameDay = "Sechanba";
			break;
	case 3:
		nameDay = "Chorshanba";
			break;
	case 4:
		nameDay = "Payshanba";
			break;
	case 5:
		nameDay = "Juma";
			break;
	case 6:
		nameDay = "shanba";
			break;
	case 7:
		nameDay = "yakshanba";
			break;
	default:
		document.write("<h1>"+'Bunday hafta kuni yoq iltmos togirlab kiritin8'+"</h1>");
}
document.write("<h1>"+nameDay+"</h1>");