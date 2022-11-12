const createNewUser = () => {
    let name = prompt("Enter your name");
    let lastName = prompt("Enter your lastName");
    let newUser;
    newUser = {
        name: name,
        lastName: lastName,
        getLogin(name,lastName) {
            return  name[0].toLowerCase() + lastName.toLowerCase();
            // return  this.name[0].toLowerCase() + this.lastName.toLowerCase();
        }
    };
    return newUser.getLogin(name,lastName);
}

console.log(createNewUser());
