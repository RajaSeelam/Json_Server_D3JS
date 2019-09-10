var JsonURL;
var pageValue=1;
var ministryValue;
var sortby="";
var sorted=false;

function seturl(invoked_element)
{
if(invoked_element=="start")
{
JsonURL="http://localhost:3000/rajyasabha/?_page=1";
}
else if(invoked_element=="pagechange"&& ministryValue==null)
{
pageValue = document.getElementById('pagenumber').value;
JsonURL="http://localhost:3000/rajyasabha/?_page="+pageValue;
}
else
{
ministryValue= document.getElementById('ministry').value;
JsonURL="http://localhost:3000/rajyasabha/?ministry="+ministryValue+"&_page="+pageValue;
console.log(JsonURL);
pageValue+=1;
}

JsonURL=JsonURL+sortby;
console.log(JsonURL);

Table_Display();

}

function Sortby(column)
{ 
	if(!sorted);
	{
	if(column=="QUESTION NUMBER")
	{   
		if(sortby=="")
		{
		sortby="&_sort=question_no";
		JsonURL=JsonURL+sortby;
	    }
	    else if(sortby=="&_sort=ministry")
	    {
        JsonURL=JsonURL+",question_no";
        sorted=true;
	    }
	}

	else
	{
       if(sortby=="")
		{
		sortby="&_sort=ministry"
		JsonURL=JsonURL+sortby;
	    }
	    else if(sortby=="&_sort=question_no")
	    {
        JsonURL=JsonURL+",ministry";
        sorted=true;
	    }
	}

	console.log(JsonURL);

	Table_Display();
    }
}







function Table_Display()
{

var request=new XMLHttpRequest();
request.open('GET',JsonURL);
request.responseType='json';
request.send();
var data;

request.onload=function()
{
data=request.response;
const tableid=document.getElementById('table');
var tablehtml='';

console.log(data[0].id);
var b=data[0].id;

tablehtml="";
    			  
console.log(tablehtml);


for(let i=0;i<data.length;i++)
{

tablehtml += "<tr>"+"<td>"+data[i].id+"</td>"+
              "<td>"+data[i].ministry+"</td>"+
              "<td>"+data[i].question_no+"</td>"+
              "<td>"+data[i].question_by+"</td>"+"</tr>"             
}
                           
               

tableid.innerHTML=tablehtml;
}
}











