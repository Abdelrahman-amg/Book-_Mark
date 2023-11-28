var siteName =document.getElementById('Site Name');
var siteUrl=document.getElementById('Site URL');

var siteContainer=[];

if(localStorage.getItem('website')!=null)
{
    siteContainer=JSON.parse(localStorage.getItem('website'));
    displayData();
}

function addSite()
{
    var webSite={
        Name:siteName.value,
        Url:siteUrl.value
    }
    siteContainer.push(webSite);
    localStorage.setItem('website',JSON.stringify(siteContainer));
    displayData();
}

function displayData()
{
    var data=``;
    for(var i=0;i<siteContainer.length;i++)
    {
        data+=` <tr>
        <td>${siteContainer[i].Name}</td>
        <td>${siteContainer[i].Url}</td>
        <td><button class="btn btn-warning"> <a class="text-decoration-none" href= "${siteContainer[i].Url}">visit</a> </button></td>
        <td><button onclick="deleteItem(${i})" class="btn btn-danger">delete</button></td>
    </tr>`
    }
    document.getElementById('tbody').innerHTML=data;
}

function deleteItem(Index)
{
  siteContainer.splice(Index,1);
  localStorage.setItem('website',JSON.stringify(siteContainer));
  displayData();
}

