import '../scss/index.scss';

// var myPopUP = document.querySelector('.popup');
// var closeBtn = document.querySelector('.popup .close');
// var onedayCheck = document.querySelector('#popupclose');

// function setCookie(name, value, day){
//     var date = new Date();
//     date.setDate(date.getDate() + day);

//     var mycookie = '';
//     mycookie += name + '=' + value +';';
//     mycookie += 'expires=' + date.toUTCString();

//     document.cookie = mycookie;
//     //alert(document.cookie);
// }

// checkCookie('ABC'); 

// function checkCookie(name){
//   var currentCookie = document.cookie.split(';');

//       //모든번째 쿠기에 원하는 문자가 없다면
//       //모든번째 쿠키에 원하는 문자가 하나라도 있다면
//       var visited = false;
  
//       for(var i = 0; i < currentCookie.length; i++){
//           if(currentCookie[i].search(name) > -1){
//           //방문한 적이 있으면
//           visited = true;                    
//           } 
//       }
      
//       if(visited){
//           myPopUP.style.display = 'none'; //재방문                    
//       }else{
//           myPopUP.style.display = 'block'; //신규방문                   
//       }
  
// }

// function delCookie(name){
//   var date = new Date();
//   date.setDate(date.getDate() -1);

//   var mycookie ='';
//   mycookie += 'CookieName=Value;';
//   mycookie += 'expires='+ date.toUTCString();
//   mycookie += 'Path=/cookietest'

//   document.cookie = mycookie;
//   //alert(name +'쿠키가 삭제됨');
// } 

// closeBtn.addEventListener('click', function(){
            
//   if(!onedayCheck.checked){ //checkbox 체크되어 있지 않으면, 팝업을 다시 보고싶다. 쿠기 지운다.
//       delCookie('ABC');
//       myPopUP.style.display = 'none';
//       //alert('쿠키삭제');
//   } else{ //checkbox 체크되어 있으면, 팝업을 다시 안본다. 쿠키 안 지우기
//       setCookie('ABC','corp',7); //7일간 유지되는 쿠키 생성
//       myPopUP.style.display = 'none';               
//   }
  
// });

function setCookie( name, value, expiredays ) {
  var todayDate = new Date();
  todayDate.setDate( todayDate.getDate() + expiredays );
  document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";"
}
function closeWin() {
  if ( document.forms[0].Notice.checked )

  //만약 새창에서 여러개의 form 을 사용하고 있으면 forms[0] 에서 공지창 안띄우기 form의 순서(0부터 시작)로 고쳐줍니다. 예: forms[4]

  setCookie( "Notice", "done" , 1);

  self.close();
}