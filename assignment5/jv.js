var check = 1;
function postFunction()
{
	if (check == 1)
	{
	var link = document.getElementById("post1");
	var comment1 = document.getElementById("text1").value;
	link.innerHTML = comment1;
	check++;
	return;
	}
	if (check == 2)
	{
	var link = document.getElementById("reply1");
	var comment1 = document.getElementById("text1").value;
	link.innerHTML = comment1;
	check++;
	return;
	}
	if (check == 3)
	{
	var link = document.getElementById("reply2");
	var comment1 = document.getElementById("text1").value;
	link.innerHTML = comment1;
	check++;
	return;
	}
}

function clearFunction()
{
	var link1 = document.getElementById("post1");
	var link2 = document.getElementById("reply1");
	var link3 = document.getElementById("reply2");
	link1.innerHTML = "";
	link2.innerHTML = "";
	link3.innerHTML = "";
	check = 1;
}