# Editorial
본 프로젝트는 [이미 존재하는 프로젝트](https://html5up.net/editorial)를 보고 UI 및 애니메이션을 유추하여 클론 코딩하였습니다.

html을 공부하면서 개인적으로 기억해둬야 할 것만 정리했습니다.

## Viewport
html에서 meta data에 viewport 설정을 해주지 않는 다면,
``` html
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
</html>
```

css에서 다음과 같은 반응형 작업이 작동하지 않았습니다.
``` css
@media all and (min-width:1680px){ ... }
```
데스크탑에서 사용하는 웹브라우저의 경우에는 동작을 하였지만, 모바일 기기에서는 작동하지 않았습니다.    
모바일 기기 크기에 따라 반응형 웹을 작업할 경우 viewport 데이터를 반드시 작성해야 했습니다.

## SideMenu
SideMenu에 해당하는 태그(여기서는 aside를 사용하였습니다.)가 active 클래스를 가진 경우 도출되고, 가지지 않은 경우 화면 바깥으로 이동하도록 하였습니다.

[menubar.css](https://github.com/HanGyeolee/Editorial/blob/main/css/menubar.css)
``` css
aside{
    transform: translateX(-100);
}
aside.active{
    transform: translateX(0);
}
```

SideMenu가 도출되기 위해 Hamburger 클래스가 클릭되면 SideMenu의 active를 껐다 켰다 합니다.

[menubar.js](https://github.com/HanGyeolee/Editorial/blob/main/js/menubar.js)
``` javascript
$('.hamburger').click(function(){
    if($('aside').hasClass('active')){
        if(window.innerWidth > 1280){
            $('aside').removeClass('active');
            $('body>div').addClass('active');
        }else{
            $('aside').removeClass('active');
        }
    }
    else{
        if(window.innerWidth > 1280){
            $('aside').addClass('active');
            $('body>div').removeClass('active');
        }else{
            $('aside').addClass('active');
        }
    }
})
```

## Radio and CheckBox Customize
스스로 이 부분이 제일 마음에 듭니다.
+ 선택이 되지 않았을 때, ![image](https://user-images.githubusercontent.com/46367614/135958699-d16a0732-6c05-4edb-8189-76b8ecfa22ea.png)
+ 선택이 되었을 때, ![image](https://user-images.githubusercontent.com/46367614/135958668-5e025659-2083-46b6-86db-443d9c6079a7.png)

해당하는 radio button의 before 가상 요소에
1. 체크 SVG 삽입
2. 테두리 그리기
3. 체크 되었을 때 배경색 변경
을 통해서 이미 기존에 존재하는 marker 부분을 가리고, 새로 커스텀된 이미지를 최상단에 보여주는 형식으로 input을 customize 할 수 있었습니다.

[element.css](https://github.com/HanGyeolee/Editorial/blob/main/css/element.css)
``` css
input[type="radio"]::before{
  ...
  content: url(../svg/check-solid.svg);
  background-color: white;
  border-radius: 50%;
  border:  1px solid var(--main-font-color);
}
input[type="radio"]:checked::before{
    background-color: var(--title-font-color);
    border:  1px solid var(--title-font-color);
}
```

checkbox 또한 마찬가지 방식으로 꾸몄습니다.
