function add()
{
	var num1 = document.getElementById("input1").value;
	var num2 = document.getElementById("input2").value;

	var result= parseInt(num1) + parseInt(num2);
	document.getElementById("result").value=result;
	return result;
}
function sub()
{
	var num1 = document.getElementById("input1").value;
	var num2 = document.getElementById("input2").value;

	var result= parseInt(num1) - parseInt(num2);
	document.getElementById("result").value=result;
	return result;
}

function multiply()
{
	var num1 = document.getElementById("input1").value;
	var num2 = document.getElementById("input2").value;

	var result= parseInt(num1) * parseInt(num2);
	document.getElementById("result").value=result;
	return result;
}

function division()
{
	var num1 = document.getElementById("input1").value;
	var num2 = document.getElementById("input2").value;

	var result= parseInt(num1) / parseInt(num2);
	document.getElementById("result").value=result;
	return result;
}
