
function f_clickbisubmit_Fucn() {
    
    const binary = document.getElementById("inputed_binary").value;
    const decimal = document.getElementById("bitodeci_output");

    var flag = true; 

    for(var i = 0; i < binary.length; i++) {
        if((String(binary).charAt(i)!= 0 )&& (String(binary).charAt(i) != 1)) {
            console.log(String(binary).charAt(i));
            flag = false;
            break;  
        }
    }

    if(flag) {
        decimal.innerText = '\u00a0' + "decimal = " + parseInt(binary, 2);
    } else {
        decimal.innerText = '\u00a0' + " 2진수가 아닙니다.";
    }
}

function f_clickocsubmit_Fucn() {
    
    const octal = document.getElementById("inputed_octal").value;
    const decimal = document.getElementById("octaltodeci_output");

    var flag = true; 

    for(var i = 0; i < octal.length; i++) {
        if((0 >(String(octal).charAt(i)) || ( 8 < (String(octal).charAt(i))))){
            console.log(String(octal).charAt(i));
            flag = false;
            break;  
        }
    }

    if(flag) {
        decimal.innerText = '\u00a0' + "decimal = " + parseInt(octal, 8);
    } else {
        decimal.innerText = '\u00a0' + " 8진수가 아닙니다.";
    }
}

function f_clickhexsubmit_Fucn() {
    
    const hexa = document.getElementById("inputed_hexadeci").value;
    const decimal = document.getElementById("hexatodeci_output");

    var flag = true; 

    if(hexa.length < 3 || hexa.length >8) flag = true;
	if(!(hexa.indexOf('0x')==0 || hexa.indexOf('0X')==0)) flag = true;	// 0x로 시작하지 않으면
	var str = hexa.substring(2,hexa.length);
	if (/^[a-fA-F0-9]+/.test(str)){
		flag = false;
	} else flag = true; 

    
    if(flag) {
        decimal.innerText = '\u00a0' + "decimal = " + parseInt(hexa, 16);
    } else {
        decimal.innerText = '\u00a0' + " 16진수가 아닙니다.";
    }
}