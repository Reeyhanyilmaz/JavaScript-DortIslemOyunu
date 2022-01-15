var Number1,
  Number2,
  Operator,
  result,
  answer,
  True = 0,
  False = 0; // bildirim yaptık


//HTML nesnelerine ulastık
Number1 = document.querySelector("#Number1");
Number2 = document.querySelector("#Number2");
Operator = document.querySelector("#Operator");
result = document.querySelector("#result");
answer = document.querySelector("#answer");
True = document.querySelector("#True");
False = document.querySelector("#False");

// answer.addEventListener("click", alrtFunc);

//random function
function RandomNumber(min, max) {
  var number = Math.floor(Math.random() * (max - min)) + min; //floor ile bi alta yuvarladık. ondalık sayı olmasın diye
  return number;
}

//oyun baslayınca veya tahmin sonrası yeni sayı üreten function
function newQuestion() {
  var operation = ["+", "-", "*", "/"]; // aradaki islem isaretinin degismesi için
  Operator.textContent = operation[RandomNumber(0, 4)]; //yukarda arraydeki + - * / ler için. 0 mesela +.  mesela - operatoru.
  Number1.textContent = RandomNumber(0, 50); // 0-50 arasında random sayı üret
  Number2.textContent = RandomNumber(0, 50);

  // kalansız bolme yapmak için kosul
  if (Operator.textContent == "/") {
    while (true) {
      //sonsuz donguye girer
      Number2.textContent = RandomNumber(0, 50); // kalansız sayı bulana kadar sürekli dongu halinde olacak
      if (Number1.textContent % Number2.textContent == 0) {
        // number1 number2 ye kalansız bolunuyorsa
        break; // while dongusunden çık
      }
    }
  }
};

//sayfa yuklenınce yeni sayı ureten fonksiyon çalışsın diye
window.onload = function () {
  newQuestion();
};

//cevapla butonuna basıldığında değerlendirme işlemi yapma
answer.onclick = function () {
  alrtFunc();
  var ans, n1, n2;
  n1 = Number(Number1.textContent);
  n2 = Number(Number2.textContent);
  switch (Operator.textContent) {
    case "+":
      ans = n1 + n2;
      break;
    case "-":
      ans = n1 - n2;
      break;
    case "*":
      ans = n1 * n2;
      break;
    case "/":
      ans = n1 / n2;
      break;
    default:
      break; //hicbiri degilse cık programdan
  }
  if (result.value == ans) {
    True.textContent = Number(True.textContent) + 1; //number veri türüne cevir true span'ının içine yaz
  } else {
    False.textContent = Number(False.textContent) + 1;
  } 
  result.value = ""; //her sorudan sonra input'u temizledik. 
  newQuestion(); //doğru yanlıştan sonra newQ. func. çalıştır.
};

//enter tuşu ilede işlemi yaptırmamız için
result.onkeydown = function (e) {
  if (e.keyCode === 13) { //keycode 13 enter tusu anlamına gelir
    answer.click();   
  }
};

//boş veya sayı girmediğimizde uyarı versin. ÇALIŞMADI BUNA BAKICAM
function alrtFunc(){
    if (result.value == "" && result.value == " " && result.value != Number){
        confirm("Bir rakam giriniz!")
    } else {
        newQuestion();
    }
};


