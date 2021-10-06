const ex1 = `
    ======= if else 문 =======
    
    if(number > 0){
    
        kind = '양수';

    }else{

        kind = '음수';

    }
    
    ======= 삼항연삭식으로 변환 =======
    
    =>
`;
$("#ex1").html(ex1);
const ex2 = 
`
switch문은 변수로 들어오는 값과 같은 값을 가진 case문을 실행하기 때문에 위의 if else 문은 switch문으로 전환하는게 불가능함.

(number변수가 어떤값으로 넘어올지 모르기 때문에 양수 와 음수 모든 경우를 다 써야 됨)

반면 switch 문을 if else 문으로 전환하는 경우 === 을 쓰면 됨.

======= 책 예제 08-09 if else 문으로 변경하기 =======


==> 이런 경우 switch 문과 삼항연산식을 쓰는게 가독성이 훨씬 좋음. 상황에 따라 잘 쓰자.
`
$("#ex2").html(ex2);

const ex3 =
`
기본 형태

for (변수 선언 및 할당; 조건; 증감) {

    실행되는 코드

}

==== 별 찍기 ====

반복문 사용해서 찍어보기
1.
*
**
***
****
*****

2.
   *
  ***
 *****
  ***
   *

`;

$("#ex3").html(ex3);

const ex4 =
`
    const array = [1,3,5,7,9,2,4,6,8,10];

    const evenArray = [];

    let index = -1;

    for(let i=0; i<array.length; i++){
        
        // 1. array에서 숫자 8의 인덱스를 찾고 싶다.

        if(array[i] === 8){

            index = i;

            break;

        }

        // 2. array 에서 짝수일 경우만 골라 새로운 배열에 넣고싶다.(홀수는 필요없다.)

        if(array[i] % 2 === 1){

            continue;

        }

        evenArray.push(array[i]);
    }
`;
$("#ex4").html(ex4);