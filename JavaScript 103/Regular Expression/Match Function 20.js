//Regular Expression function
//Match function تقم بارجاع القيم المطابقة للوصف في مووصوفه 
//Match retuns array 

const str = `RegExr was created by gskinner.com, and is proudly hosted by Media Temple. 
            Edit the Expression & Text to see matches. Roll over matches or the expression for details. 
            PCRE & JavaScript flavors of RegEx are supported. Validate your expression with Tests mode. 
            The side bar includes a Cheatsheet, full Reference, and Help.
            You can also Save & Share with the Community, and view patterns you create or favorite in My Patterns.
            Explore results with the Tools below. Replace & List output custom results. Details lists capture groups.
            Explain describes your expression in plain English.`
            
let regex = str.match(/and/g) //returrn all and 
console.log(regex)//['and', 'and', 'and']
console.log(regex.length)//3