let cd = ["cd1","cd2","cd3","music1","music2","music3","music4","music5"];

changeCD = () =>
{

    let prevAttr = $(".disk img").attr("src");
    let index = Math.floor((Math.random() * 8));
    let currAttr = `./images/${cd[index]}.png`;

    if(prevAttr === currAttr)
    {
        if(index === 0) index++;
        else index--;
         
    }

    console.log(index)

  console.log($(".disk img").attr("src",`./images/${cd[index]}.png`))  
}