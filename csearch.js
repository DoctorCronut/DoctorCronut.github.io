// regState();
// function regState(){
//     ul = document.getElementById('myUL');
//     li = ul.getElementsByTagName('li');

//     for (i = 0; i < li.length; i++)
//     {
//         li[i].style.display = "none";
//     }
// }

function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    console.log(input);
    filter = input.value.toUpperCase();
    // if(filter.length == 0)
    // {
    //     for (i = 0; i < li.length; i++)
    //     {
    //         li[i].style.display = "none";
    //     }
    // }
    ul = document.getElementById('myUL');
    li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++)
    {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.className;
        if(txtValue.toUpperCase().indexOf(filter) > -1)
        {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}