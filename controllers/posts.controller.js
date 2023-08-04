const pool = require('../database/index')

const postsControlller = {
  getAll: async (req,res)=>{
    try{
        const [rows,fields] = await pool.query("select * from posts")
       res.json({
        data:rows
       })
    }catch(error){
        res.json({
            state:"error"
        })
       console.log(error)
    }
  },
  getById: async (req,res) =>{
    try{
        const { id } = req.params
        const [rows,fields] = await pool.query("select * from posts where id = ?",[id])
        res.json({
            data:rows
        })

    }catch(error){
        res.json({
            state:"error"
        })
        console.log(error)
    }
  },
  create:async (req,res) =>{
    try{
       const { title, content } = req.body
       console.log(req.body.title)
    // const title = "artur 2005"
    // const content = "2000"
       const sql = "insert into posts (title, content) values (?, ?)"
       const [rows,fields] = await pool.query(sql,[title, content])
       res.json({
        data:rows
       })
    }catch(error){
        res.json({
            state:"error"
        })
        console.log(error)
    }
  },
  update:async(req,res)=>{
    try{
        const { title, content} = req.body
        const { id } = req.params
        const sql = "update posts set title = ?, content = ? where id = ?"
        const [rows,fields] = await pool.query(sql,[title,content,id])
        res.json({
            data:rows
        })
    }catch(error){
        res.json({
            state:"error"
        })
        console.log(error)
    }
  },
  delete:async (req,res)=>{
    try{
        const { id } = req.params
        const [rows, fields] = await pool.query("delete posts where id = ?", [id])
    }catch(error){
        res.json({
            state:"error"
        })
        console.log(error)
    }
   }
}


module.exports = postsControlller