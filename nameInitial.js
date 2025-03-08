function getInitials(name) {
    return name.split(' ').map(part => part[0].toUpperCase()).join('');
}

const name = "John Doe";
const initials = getInitials(name);
console.log(`Inisial nama: ${initials}`);
