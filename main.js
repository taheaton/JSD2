function Calc1(){
VField1=eval(document.calcform.field1.value)
VField2=eval(document.calcform.field2.value)
d=VField1+VField2
document.calcform.field3output.value = d;
}

function Calc2(){
VField1=eval(document.calcform.field1.value)
VField2=eval(document.calcform.field2.value)
d=VField1-VField2
document.calcform.field3output.value = d;
}

function Calc3(){
VField1=eval(document.calcform.field1.value)
VField2=eval(document.calcform.field2.value)
d=VField1*VField2
document.calcform.field3output.value = d;
}

function Calc4(){
VField1=eval(document.calcform.field1.value)
VField2=eval(document.calcform.field2.value)
d=VField1/VField2
document.calcform.field3output.value = d;
}
