const express = require('express');
const { PASSWORD } = require('./DB.config');
const SQL = require('./web');
const path = require('path');
const cookieParser = require('cookie-parser');
const app = express();
app.use(cookieParser());
const createTables = (req,res)=>{
const Q11 = 'CREATE TABLE IF NOT EXISTS `Students` (name varchar(225) NOT NULL, email varchar(255) NOT NULL, username varchar(255) NOT NULL, password varchar(255) NOT NULL,  bestsubject varchar(255) DEFAULT "not inserted", PRIMARY KEY (email, username)) ENGINE=InnoDB DEFAULT CHARSET=utf8';
SQL.query(Q11, (err, result) => {
    if (err) throw err;
    console.log("Table created");
});
const Q12 = 'CREATE TABLE IF NOT EXISTS `Subjects` (username2 varchar(255) NOT NULL PRIMARY KEY, g1 varchar(225) NOT NULL, g2 varchar(255) NOT NULL, g3 varchar(255) NOT NULL, g4 varchar(255) NOT NULL, g5 varchar(255) NOT NULL, g6 varchar(255) NOT NULL) ENGINE=InnoDB DEFAULT CHARSET=utf8';
SQL.query(Q12, function (err, result) {
    if (err) throw err;
    console.log("Table2 created");
});
const Q13 = 'CREATE TABLE IF NOT EXISTS `Reviews` (id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,review varchar(1000) NOT NULL) ENGINE=InnoDB DEFAULT CHARSET=utf8';
SQL.query(Q13, function (err, result) {
    if (err) throw err;
    console.log("Table3 created");
});
res.render('HomePage')
}

    const dropTable = (req,res)=>{
        const Q2 = 'DROP TABLE IF EXISTS Students, Subjects, Reviews';    
        SQL.query(Q2, (err,mysqlres)=>{
            if (err) {
                console.log(err);
                res.status(400).send(err);
                return;
            }
            res.send("hi - tables dropped");
            return;
        })};

        const login = (req, res) => {
            var USERNAME = req.query.Username;
            const newLogin = {
              name: req.query.Username,
              password: req.query.userPassword
            };
            const data = [newLogin.name, newLogin.password];
            const Q5 = 'SELECT COUNT(*) AS count FROM Students WHERE username = ? and password = ?';
            SQL.query(Q5, [newLogin.name, newLogin.password], (err, mysqlres) => {
              if (err) {
                console.log(err);
                res.status(400).send(err);
                return;
              }
              const Count = mysqlres[0].count;
              console.log(Count);
              if (Count == 1) {
                res.cookie('userName', USERNAME);
                res.redirect("/showSubject");
                return;
              } else {
                console.log("cannot login");
                res.render("HomePage");
              }
            });
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
                const BestSubject = mysqlres[0].bestsubject;
                res.render('page2', {v1:BestSubject})
                console.log(BestSubject);
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
                    res.render('reviews', {r1:"Thank you, Hope we can improve now!"})
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
                    res.send("email/username invalid");    
                    return;
                }
                res.cookie("userName", req.query.newUserName);
                res.render("page1");
                return;
            });};







            const changeTable = (req, res) => {
                const userName = req.cookies.userName;
                const newSubjects = {
                  username2: userName,
                  g1: req.query.G1,
                  g2: req.query.G2,
                  g3: req.query.G3,
                  g4: req.query.G4,
                  g5: req.query.G5,
                  g6: req.query.G6
                };
              
                const Q2 = "SELECT COUNT(*) AS count FROM Subjects WHERE username2 = ?";
              
                SQL.query(Q2, userName, (err, result) => {
                  if (err) {
                    console.log(err);
                    res.status(400).send("Cannot count");
                    return;
                  }
              
                  const count = result[0].count;
              
                  let Q3;
                  if (count === 0) {
                    Q3 = "INSERT INTO Subjects SET ?";
                  } else if (count === 1) {
                    Q3 = "UPDATE Subjects SET ? WHERE username2 = ?";
                  } else {
                    console.log("The count didn't work");
                    return;
                  }
              
                  SQL.query(Q3, [newSubjects, userName], (err, mysqlres) => {
                    if (err) {
                      console.log(err);
                      res.status(400).send("Cannot change Subjects");
                      return;
                    }
                    console.log("Subjects have been changed");
                    res.redirect("/checkBestSubject");
                  });
                });

                res.cookie("Grade1",req.query.G1);
                res.cookie("Grade2",req.query.G2);
                res.cookie("Grade3",req.query.G3);
                res.cookie("Grade4",req.query.G4);
                res.cookie("Grade5",req.query.G5);
                res.cookie("Grade6",req.query.G6);
              };






const checkBestSubject = (req, res) => {
    const grade1 = req.cookies.Grade1;
    const grade2 = req.cookies.Grade2;
    const grade3 = req.cookies.Grade3;
    const grade4 = req.cookies.Grade4;
    const grade5 = req.cookies.Grade5;
    const grade6 = req.cookies.Grade6;
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
    var bestSubject = '';
    var bestScore = 0-Infinity;

    if (score1 > bestScore) {
        bestScore = score1;
        bestSubject = 'Math';
    }
    if (score2 > bestScore) {
        bestScore = score2;
        bestSubject = 'Physics';
    }
    if (score3 > bestScore) {
        bestScore = score3;
        bestSubject = 'history';
    }
    if (score4 > bestScore) {
        bestScore = score4;
        bestSubject = 'Aerodynamics';
    }
    if (score5 > bestScore) {
        bestScore = score5;
        bestSubject = 'meteorology';
    }
    if (score6 > bestScore) {
        bestScore = score6;
        bestSubject = 'platform';
    }

    const Q4 = "UPDATE Students SET bestsubject = ?"
    SQL.query(Q4, bestSubject, (err, mysqlres) => {
        if (err) {
            console.log(err);
            res.status(400).send('cannot set best subject');
            return;
        }
        console.log("best subjects is changed");
        
    });
    res.render('page2', {v1:bestSubject})
}


            module.exports = {createTables, createNewUser, dropTable, login, showSubject, newReview, changeTable, checkBestSubject}