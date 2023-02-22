const pool = require('../db')
const queries = require('../query/query')

const getMethod = (req,res) => {
    pool.query(queries.getMethod,(err,data) => {
        if(err) throw err;
        res.status(200).json(data.rows)
    })
}


const getMethodByActive = (req,res) => {
    const Active = req.params.active
    console.log(Active)
    pool.query(queries.getMethodByBool,[Active],(err,data) => {
        if(err) throw err;
        res.status(200).json(data.rows)
    })
}

const addName = (req,res) => {
    const {name,active} = req.body
    console.log(name,active)
    pool.query(queries.addMem,[name,active],(err,data) => {
        if(err) throw err;
        res.status(200).json("added succesfully")
    })
}

const removeStudent = (req,res) => {
    const id =req.params.id
    pool.query(queries.getMethodById,[id],(err,data) => {
        if(err) throw err;
        if(!data.rows.length){
            res.send("no id found");
        }
        else{
            pool.query(queries.delMem,[id],(err,data) => {
                if(err) throw err;
                res.send("deleted successfully");
            })
        }
    })
} 

const updateStudent = (req,res) => {
    const id = req.params.id
    const {name,active} = req.body
    console.log(name,active)
    pool.query(queries.getMethodById,[id],(err,data) => {
        if(err) throw err;
        if(!data.rows.length){
            res.send("no id found");
        }
        else{
            pool.query(queries.updateStudent,[name,active,id],(err,data) => {
                if(err) throw err;
                res.send("updated successfully");
            })
        }
    })
} 


module.exports = {getMethod,updateStudent,removeStudent,addName,getMethodByActive}