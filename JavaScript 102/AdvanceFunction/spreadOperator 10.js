 
 let studentNames = function(name1, name2, name3, name4){
     console.log(name1, name2, name3, name4)
 }

 names = ['Sara', 'Eman', 'Nora','Gadah']

// (...names) is spread  operator which is sent each element in array as a paramter 
 studentNames(...names)  //Sara Eman Nora Gadah