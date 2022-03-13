var express=require('express');
var mongo=require('mongodb').MongoClient;



var app=express();

app.use(express.static("TEAMX"));

app.listen(3000,(err)=>{
    if(err)console.log("error");
    else console.log("listened");
});

app.get("/css",(req,res)=>{
    res.sendFile(__dirname+"/Interzion/Interzion/CSS/index.css");
})

app.get("/css2",(req,res)=>{
    res.sendFile(__dirname+"/facebook-clone/style2.css")
})


app.get("/js",(req,res)=>{
    res.sendFile(__dirname+"/Interzion/Interzion/index.js");
})

function insertuser(uname,upassword,uemail){

mongo.connect('mongodb://127.0.0.1:27017/',(err,db)=>{
    if(err)console.log(err);
    console.log("mongo connected");
    var dbo=db.db("mydb");
    dbo.collection("user_details").insertOne({name:uname,password:upassword,email:uemail},(err,res)=>{
        console.log("inserted");
        dbo.collection("user_details").find({}).toArray((err,result)=>{
            console.log(result);
    });
    
    })

})
}
var finalname="hi";
function insertlog(upassword,uemail){

    mongo.connect('mongodb://127.0.0.1:27017/',(err,db)=>{
        if(err)console.log(err);
        console.log("mongo connected");
        var dbo=db.db("mydb");
        
        dbo.collection("user_details").find({email:uemail,password:upassword},{name:1,_id:0}).toArray((err,result)=>{
            if(err){
                console.log("user not found");
            }
            finalname=result[0].name;
        })
    
    })
    }

app.get("/home",(req,res)=>{
    
        console.log("page declared");
        console.log(req.query.name);
        //insertuser("sanjeev","Sanju@123","7904798396","sanjuuhuihl");
        res.sendFile(__dirname+"/Interzion/Interzion/index.html");
    
});
var final="X";
app.get("/join",(req,res)=>{
    var flag=req.query.flag;
    if(flag=="2"){
        var uemail=req.query.uemail;
        var upassword=req.query.upassword;

        mongo.connect('mongodb://127.0.0.1:27017/',(err,db)=>{
        if(err)console.log(err);
        console.log("mongo connected");
        var dbo=db.db("mydb");
        
        dbo.collection("user_details").find({email:uemail,password:upassword},{name:1,_id:0}).toArray((err,result)=>{
            if(err){
                console.log("user not found");
            }
         res.send("Hi "+result[0].name+"\n\n still we are working on it lets see the design of our upcoming pages");
            
        })
    
    })
        
    }
    else{
        var user=req.query.Name;
        var email=req.query.Email;
        var pass=req.query.Password;
        
       insertuser(user,pass,email); 
       
    res.sendFile(__dirname+"/Interzion/Interzion/index.html")
    }
    ;
})

app.get("/namereq",(req,res)=>{ 
    console.log("final"); 
    app.get("/namereq/log",(req,res)=>{ 
        console.log("hi");
        res.send("hellooooo");
    })
    res.send(final);
})
