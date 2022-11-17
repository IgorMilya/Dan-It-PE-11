const createNewUser = () => {
    let name = prompt("Enter your name");
    let lastName = prompt("Enter your lastName");
    const newUser = {
        firstName: name,
        lastName: lastName,
        getLogin(name, lastName) {
            return (name[0] + lastName).toLowerCase();
            // return  (this.firstName[0] + this.lastName).toLowerCase();
        }
    };
    return newUser.getLogin(name, lastName);
}

console.log(createNewUser());
