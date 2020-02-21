// Ex6 : 노드조작 : 메뉴추가(CreatTextNode, Element) (32강 - 텍스트 노드를 동적으로 추가/삭제)
window.addEventListener("load", function(){
    var section6 = document.querySelector("#section6");
    var titleInput = section6.querySelector(".title-input");
    var menuListDiv = section6.querySelector(".menu-list");
    var addButton = section6.querySelector(".add-button");
    var delButton = section6.querySelector(".del-button");

    addButton.onclick = function(){
        var title = titleInput.value;
        var txtNode = document.createTextNode(title); // node 생성
        menuListDiv.appendChild(txtNode); // child node 추가
    };

    delButton.onclick = function(){
        var txtNode = menuListDiv.childNodes[0];
        menuListDiv.removeChild(txtNode); // node 삭제


    };

});

// Ex5 : 엘리먼트 노드의 속성 변경(30강:엘리먼트 노드의 속성변경 예제 - 사진 변경)
window.addEventListener("load", function(){
    var section5 = document.querySelector("#section5");
    var srcInput = section5.querySelector(".src-input");
    var imgSelect = section5.querySelector(".img-select");
    var changeButton = section5.querySelector(".change-button");
    var img = section5.querySelector(".img");
    var colorInput = section5.querySelector(".color-input");
    
    changeButton.onclick = function(){
        img.src = "images/" + srcInput.value;
        // img.src = "images/" + imgSelect.value;

        // CSS 약속 규칙에 따라 사용
        // img.style["border-color"] = colorInput.value;
        img.style.borderColor = colorInput.value;
        console.log(img.className);
    };
});

// Ex4 : childNodes 를 이용한 노드선택
window.addEventListener("load", function(){
    var section4 = document.querySelector("#section4");
    var inputs = section4.querySelector("input");
    var box = section4.querySelector(".box");

    // childNodes 는 주석, 공백까지 노드로 인식해서 처리
    // childeren 은 <> 형식만 노드로 인식
    var input1 = box.children[0] // box.childNodes[0];
    var input2 = box.children[1] // box.childNodes[1];

    input1.value = "hello";
    input2.value = "okay";
});

// Ex3 : CSS Selector API Level 1
window.addEventListener("load", function(){
    var section3 = document.getElementById("section3")
    /* 1. CSS Selector 문법
        . 은 클래스
        # 은 ID
    */
    
    // 2. CSS input name 을 이용한 선택방법
    // ".txt-x" 또는 "input[name='x']" 선택 가능
    var txtX = section3.querySelector(".txt-x");
    // var txtX = section3.querySelector("input[name='x']");

    var txtY = section3.querySelector(".txt-y");
    var btnAdd = section3.querySelector(".btn-add");
    var txtSum = section3.querySelector(".txt-sum");

    // 3. input type 을 이용해서 input 타입 전체 배열선택
    var inputs = section3.querySelectorAll("input");
    var txtX = inputs[0];
    var txtY = inputs[1];
    var btnAdd = inputs[2];
    var txtSum = inputs[3];
    
    btnAdd.onclick = function() {

        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);
        txtSum.value = x + y;
        console.log("Ex3 add sum = %d",txtSum.value);
    }
});

// Ex2 : 엘리먼트 선택방법 개선하기
// 'id' 는 전체문서에서 유니크한 이름을 사용해야함
// 'calss' 는 해당하는 section 영역에서만 사용하기에 getElementsByClassName는 section2 영역만 검색함
window.addEventListener("load", function(){
    var section2 = document.getElementById("section2")
    // getElementsByClassName 는 배열타입으로 return
    var txtX = section2.getElementsByClassName("txt-x")[0];
    var txtY = section2.getElementsByClassName("txt-y")[0];
    var btnAdd = section2.getElementsByClassName("btn-add")[0];
    var txtSum = section2.getElementsByClassName("txt-sum")[0];
    /*
    // Tag input 를 배열로 return
    var inputs = section2.getElementsByTagName("input");
    var txtX = inputs[0];
    var txtY =  inputs[1];
    var btnAdd =  inputs[2];
    var txtSum =  inputs[3];
    */
    btnAdd.onclick = function() {

        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);
        txtSum.value = x + y;
        console.log("Ex2 add sum = %d",txtSum.value);
    }
});

// Ex1 : 계산기 프로그램

window.addEventListener("load", function(){
    var txtX = this.document.getElementById("txt-x");
    var txtY = this.document.getElementById("txt-y");
    var btnAdd = this.document.getElementById("btn-add");
    var txtSum = this.document.getElementById("txt-sum");
 
    btnAdd.onclick = function() {

        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);
        txtSum.value = x + y;
        console.log("Ex1 add sum = %d",txtSum.value);
    }
});

// window.onload = function{};