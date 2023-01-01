var one = +prompt('Введите 1ое число');3
var two = +prompt('Введите 2ое число');1
var three = +prompt('Введите 3ое число');2

if( one > two && one < three || one > three && one < two ) {
   alert("Среднее число " + one)
}else if(two > three && two < one || two < three && two > one){
    alert("Среднее число " + two)
}else if(three > one && three < two || three > two && three < one){
    alert("Среднее число " + three)
} else {
    alert('no founded')
}