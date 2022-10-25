function display(num){
    result.value+=num  //result.value=result.value+num
}
function allclear(){
    result.value=""
}
function evaluvateexp(){
    // exp=result.value
    // res=eval(exp)
    // result.value=res
    result.value=eval(result.value)
}
function backspace(){
    curr_exp=result.value
    result.value= curr_exp.slice(0,-1)
}