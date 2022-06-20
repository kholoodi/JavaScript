function replace()
{
    let serachText = document.getElementById("sreach").value //the text we want looking for (replacted)
    let replaceText = document.getElementById("replace").value//a new text which we want add
    let text = document.getElementById("text").innerHTML //text in HTML page
    let newtext = document.getElementById("text")// the text after replaced

    let reg = new RegExp(serachText,'gi')// looking for searchText (gi => flags)
    text = text.replace(reg, replaceText) //replace text
    newtext.innerHTML = text // add new text in HTML


}
