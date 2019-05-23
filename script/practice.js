/**
 *@author       刘文军
 *@date         2019/5/23 10:39
 *@Copyright    天源迪科信息技术股份有限公司
 *@Description
 */
const fs=require("fs");
const path=require("path");
let rs=fs.createReadStream("src/assets/horse.jpg");
let ws=fs.createWriteStream("src/assets/aa.jpg");
rs.pipe(ws);


rs.on('err',err=>{
    console.log(err);
})


ws.on('finish',()=>{
    console.log("完成")
})


