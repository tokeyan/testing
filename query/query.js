const getMethod = "SELECT * FROM asset";
const getMethodByBool = "SELECT * FROM asset WHERE active = $1";
const getMethodById = "SELECT * FROM asset WHERE ID = $1";
const nameCheck = "SELECT s FROM asset s WHERE s.name = $1";
const addMem = "INSERT INTO asset (name,active) VALUES ($1,$2)";
const delMem = "DELETE FROM asset WHERE ID = $1";
const updateStudent = "UPDATE asset SET name = $1,active = $2 WHERE ID = $3";
module.exports = {
    getMethod,
    getMethodByBool,
    getMethodById,
    nameCheck,
    addMem,
    delMem,
    updateStudent
}