const ex1 = `
    var a = '10' + 1;

    a = ?

    a = '10' - 1;

    a = ?

    
    전 장에서 보았던 논리값으로 변환되는것도 암묵적 타입 변환
    어떠한 string 값이 빈문자열이 아닐 경우에만 실행하고 싶다.
    
    var string;

    if(string !== ''){

    }
    =>
    if(string){

    }
`;
$("#ex1").html(ex1);

const ex2 = 
`
    let str = '1';
    let number = Number(str);
    let pInt = parseInt(str);

    console.log('Number = ' + number);
    console.log('parseInt = ' + pInt);

    str = '2021년';
    number = Number(str);
    pInt = parseInt(str);

    console.log('Number = ' + number);
    console.log('parseInt = ' + pInt);

    str = '가나2021년';
    number = Number(str);
    pInt = parseInt(str);

    console.log('Number = ' + number);
    console.log('parseInt = ' + pInt);

    str = '10.1212';

    number = Number(str);
    pInt = parseInt(str);

    console.log('Number = ' + number);
    console.log('parseInt = ' + pInt);

    //차이점 parseInt는 숫자로 시작하는 문자열에서 정수만을 숫자로 변환(parseFloat을 사용하면 실수로 변환 가능), Number는 문자열이 숫자로만 되어있을때 그대로 숫자로 변환
`;

$("#ex2").html(ex2);