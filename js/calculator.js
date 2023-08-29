function SendVal(val){
    const screen_result = document.getElementById('screen-res')
    if(screen_result.innerHTML == "0"){
        screen_result.innerHTML = "";
        screen_result.innerHTML = screen_result.innerHTML + val;
    }
    else
    screen_result.innerHTML = screen_result.innerHTML + val;
}

function Solve(equation){
    console.log(equation);

    if(equation.includes('/') || equation.includes('*')){
        let timesOperator = equation.indexOf('*'), divideOperator = equation.indexOf('/');
        if(timesOperator > 0 && divideOperator > 0){
            if(timesOperator < divideOperator){
                Solve(getProduct(equation, timesOperator));
            }else{
                Solve(getQuotient(equation, divideOperator));
            }
        }
        else if(timesOperator > 0)
            Solve(getProduct(equation, timesOperator));
        else if(divideOperator > 0)
            Solve(getQuotient(equation, divideOperator));
    }    
    else if(equation.includes('+') || equation.includes('-')){
        let plusOperator = equation.indexOf('+'), minusOperator = equation.indexOf('-');
        if(plusOperator > 0 && minusOperator > 0){
            if(plusOperator < minusOperator){
                Solve(getSum(equation, plusOperator));
            }else{
                Solve(getDifference(equation, minusOperator));
            }
        }
        else if(plusOperator > 0)
            Solve(getSum(equation, plusOperator));
        else if(minusOperator > 0)
            Solve(getDifference(equation, minusOperator));
    }

    if(equation.length == 1)
        return equation[0];
}

function GetVal(){
    const screen_display = document.getElementById('screen-res')
    equation = screen_display.innerHTML.split(' ');
    if (CheckIfValidEquation(equation))
        screen_display.innerHTML = Solve(equation);
    else
        screen_display.innerHTML = "error";
}

function Clear(){
    document.getElementById('screen-res').innerHTML = "0";
}

function BackSpace(){
    var string = document.getElementById('screen-res').innerHTML;
    if(string.length > 1)
        if(string[string.length-1] == ' ')
            if(string.length > 3)
                document.getElementById('screen-res').innerHTML = string.slice(0, -3);
            else
                document.getElementById('screen-res').innerHTML = 0;
        else
            document.getElementById('screen-res').innerHTML = string.slice(0, -1);
    else{
        document.getElementById('screen-res').innerHTML = 0;
    }
}

function CheckIfValidEquation(){
    let isValid = false;
    let equationLength = equation.length;
    if(equationLength % 2 == 1 && !equation.includes(''))
        isValid = true;
    return isValid;
}

function getProduct(equation, operator){
    let product = equation[operator-1] * equation[operator+1];
    equation[operator-1] = product;
    equation.splice(operator, 2);
    return equation;
}

function getQuotient(equation, operator){
    let quotient = equation[operator-1] / equation[operator+1];
    equation[operator-1] = quotient;
    equation.splice(operator, 2);
    console.log(equation);
    return equation;
}

function getSum(equation, operator){
    let sum = parseInt(equation[operator-1]) + parseInt(equation[operator+1]);
    equation[operator-1] = sum;
    equation.splice(operator, 2);
    console.log(equation);
    return equation;
}

function getDifference(equation, operator){
    let difference = equation[operator-1] - equation[operator+1];
    equation[operator-1] = difference;
    equation.splice(operator, 2);
    console.log(equation);
    return equation;
}