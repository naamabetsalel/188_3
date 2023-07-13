const { PASSWORD } = require('./DB.config');
const SQL = require('./web');
const path = require('path');


    const dropTable = (req,res)=>{
        const Q2 = 'drop TABLE `Students`;';    
        SQL.query(Q2, (err,mysqlres)=>{
            if (err) {
                console.log(err);
                res.status(400).send(err);
                return;
            }
            res.send("hi - table dropped");
            return;
        })};





        const login = (req,res)=>{
            const newLogin = {
                name : req.query.Username,
                password : req.query.userPassword
            }
            const data = [newLogin.name,newLogin.password];
            const Q5 = 'SELECT COUNT(*) FROM Students Where username = ? and password = ?'
            SQL.query(Q5, data, (err,mysqlres)=>{
                if (err) {
                    console.log(err);
                    res.status(400).send(err);
                    return;
                }
                console.log(mysqlres);
                var y = mysqlres;    
            })
            if(y==1){
                res.cookie("userName", req.query.Username);
                res.redirect("/showSubject");
                return;
            }

            console.log("can not login");
            res.render("HomePage")
        
        };



        const showSubject = (req,res)=>{
            const studentName = req.cookies.userName;
            const Q6 = 'Select bestsubject FROM Students WHERE username = ?'
            SQL.query(Q6, studentName, (err,mysqlres)=>{
                if (err) {
                    console.log(err);
                    res.status(400).send(err);
                    return;
                }
                res.render('page2', {v1:mysqlres})
            })};
    



            const newReview = (req,res)=>{
                const newreview = {
                    review : req.query.newrev
                }
                const Q7 = 'INSERT INTO Reviews SET ?'

                SQL.query(Q7, newreview, (err,mysqlres)=>{
                    if (err) {
                        console.log(err);
                        res.status(400).send(err);
                        return;
                    }
                    console.log("review inserted");
                    res.render('reviews', {v2:"Thank you, Hope we can improve now!"})
                })};
            
        

        





        const createNewUser = (req,res)=>{
            //res.send(req.query);
            // validate info exists
        
            // pull info frin req.query to json object
            const NewSignUp = {
                name: req.query.newFullName,
                email: req.query.newEmail, 
                username: req.query.newUserName,
                password: req.query.newPassword
                
            };
            // run insert query
            const Q1 = "INSERT INTO Students SET ?";
            SQL.query(Q1, NewSignUp, (err, mysqlres)=>{
                if (err) {
                    console.log(err);
                    res.send("something went wrong");    
                    return;
                }
                res.cookie("userName", req.query.newUserName);
                res.redirect("/page1");
                return;
            });};







            const changeTable = (req,res)=>{
                 // get cookie
                const UserName = req.cookies.userName;
                const newSubjects = {
                    username2 : UserName,
                    g1 : req.query.G1,
                    g2 : req.query.G2,
                    g3 : req.query.G3,
                    g4 : req.query.G4,
                    g5 : req.query.G5,
                    g6 : req.query.G6
                }
                const Q2 = "SELECT COUNT(*) FROM Subjects WHERE UserName=username2";
                SQL.query(Q2, UserName, (err, mysqlres)=>{
                    if (err) {
                        console.log(err);
                        res.status(400).send('cannot count');
                        return;
                    }
                    const x = mysqlres;
                });
                if(x==0){
                    var Q3 = "INSERT INTO Subjects SET ?"
                }
                if(x==1){
                    Q3 = "UPDATE Subjects SET ? WHERE UserName=username2"
                }
                else{
                    console.log("the count didn't work");
                    return;
                }
                SQL.query(Q3, newSubjects, (err, mysqlres)=>{
                    if (err) {
                        console.log(err);
                        res.status(400).send('cannot change Subjects');
                        return;
                    }
                    console.log("Subjects is changed");
                    res.render("/bestSubject")
                });
            }







            const bestSubject = (req,res)=>{
                const grade1 = req.query.G1;
                const grade2 = req.query.G2;
                const grade3 = req.query.G3;
                const grade4 = req.query.G4;
                const grade5 = req.query.G5;
                const grade6 = req.query.G6;
                const easiness1 = 2;
                const easiness2 = 2.5;
                const easiness3 = 3.5;
                const easiness4 = 2.5;
                const easiness5 = 5.5;
                const easiness6 = 5;
                const points1 = 6;
                const points2 = 5.5;
                const points3 = 2;
                const points4 = 5;
                const points5 = 2.5;
                const points6 = 3;
  
                const score1 = 90 * easiness1 - grade1 * points1;
                const score2 = 90 * easiness2 - grade2 * points2;
                const score3 = 90 * easiness3 - grade3 * points3;
                const score4 = 90 * easiness4 - grade4 * points4;
                const score5 = 90 * easiness5 - grade5 * points5;
                const score6 = 90 * easiness6 - grade6 * points6;
  
                // Find the subject with the highest score
                let bestSubject = '';
                let bestScore = -Infinity;
  
                if (score1 > bestScore) {
                    bestScore = score1;
                    bestSubject = 'חדווא';
                }
                if (score2 > bestScore) {
                    bestScore = score2;
                    bestSubject = 'פיזיקה';
                }
                if (score3 > bestScore) {
                    bestScore = score3;
                    bestSubject = ' מעם למדינה';
                }
                if (score4 > bestScore) {
                    bestScore = score4;
                    bestSubject = 'אווירודינמיקה';
                }
                if (score5 > bestScore) {
                    bestScore = score5;
                    bestSubject = 'מטאורולוגיה';
                }
                if (score6 > bestScore) {
                    bestScore = score6;
                    bestSubject = 'פלטפורמה';
                }

                Q4 = "UPDATE Students SET bestsubject = ?"
                SQL.query(Q4, bestSubject, (err, mysqlres)=>{
                    if (err) {
                        console.log(err);
                        res.status(400).send('cannot set best subject');
                        return;
                    }
                    console.log("best subjects is changed");
                    res.render('page2', {v1:mysqlres})
                });
            }
        

            module.exports = {createNewUser, dropTable, login, showSubject, newReview, changeTable, bestSubject}