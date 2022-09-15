let input = prompt('What would you like to do?')
const todo = [ " Chicekn Eggs", "Berry bells", "Red Grapes", " Black seeds"]
while ( input !== "quit" && input !== "q")
{
    if ( input == "list"){
       for( let i=0; i<todo.length; i++){
        console.log(`${i} : ${todo[i]}`);
       }


    }
    else if(input == "add"){
        todoNew = prompt(' enter the value you want to add')
        todo.push(todoNew)
        console.log(` ${todoNew} : added to the list`);
    }
    else if( input == "delete"){
        index = prompt(' enter the index number you want to delete')
        todo.splice(index,1);
        console.log(` ${index}: " Deleted " `);
    }
    input = prompt( 'What would you like to do?')

}
console.log(" OKAY I QUIT")