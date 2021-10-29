/*
    For this section of the assessment you will be putting together a
    cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
var gitDefinition = ("Git is a free useful and powerful, version control system desgined to work in conjucntion with command line/terminal to navigate and modify your system directories and it's contents")

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
var gitHubDefinition = ("GitHub is a mostly free, virtual version control system, that operatesmuch like cloud storage with the ability to share your projects with others")

//////////////////PROBLEMS 3 - 8////////////////////
/*
    For the next several problems you will be creating objects containing
    information about different git commands.
    Each object should contain 'description' and 'code' properties.
    The 'description' property will be a string with a description
    of what that git command does.  The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

//CODE HERE

let init = {'DESCRIPTION: Initializes a local repository in the current folder your are in.':'CODE: git init'}


//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

//CODE HERE

let clone = {'DESCRIPTION: Clones a local repo into a newly created directory and creates remote-tracking branches for cloned repository':'CODE: git clone'}

//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

//CODE HERE

let status = {'DESCRIPTION: tells the user about the status of the current repo':'CODE: git status'}

//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

//CODE HERE

let add = {'DESCRIPTION: adds file to be tracked by git':'CODE: git add'}

//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

//CODE HERE

let commit = {'DESCRIPTION: creates a snapshot of the file to be pushed to GitHub':'CODE: git commit'}
let commitM = {'DESCRIPTION: allows user to add a note or comment regarding the commit':'CODE: git commit -m'}
//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

//CODE HERE

let push = {'DESCRIPTION: uploads/updates the local repo(s) to your GitHub repo(s)':'CODE: git push'}
let pushU = {'DESCRIPTION: uploads a new local repo to your GitHub':'CODE: git push -u'}