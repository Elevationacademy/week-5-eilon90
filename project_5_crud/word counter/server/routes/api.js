//Exercise 1:
const express = require('express');
const router = express.Router();

router.get('/sanity', function(req, res) {
    console.log('hi');
    res.send('Server up and running');
})

//Exercise 2:
let wordCounter = {};
router.get('/word/:word', function(req, res) {
    const myword = req.params.word;
    if (wordCounter[myword]) {
        res.send({count: wordCounter[myword]});
    } 
    else {
        res.send({count: 0});
    }
})

//Exercise 3:
router.post('/word/:word', function (req, res) {
    const myword = req.params.word;
    if (wordCounter[myword]) {
        wordCounter[myword]++;
    }
    else {
        wordCounter[myword] = 1;
    }
    console.log(wordCounter)
    res.send({text: `Added ${req.params.word}`, currentCount: wordCounter[req.params.word]});
})

//Exercise 4:
router.post('/words/:sentence', function (req, res) {
    const mySentence = req.params.sentence;
    const mywords = mySentence.split(' ');
    let numNewWords = 0
    let numOldWords = 0
    mywords.forEach(m => {
        if (wordCounter[m]) {
            wordCounter[m]++;
            numOldWords++;
        }
        else {
            wordCounter[m] = 1;
            numNewWords++;
        }
    })
    console.log(wordCounter);
    res.send({text: `Added ${numNewWords} words, ${numOldWords} already existed`, currentCount: -1})
})

//Exercise 5:
router.get('/total', function(req, res) {
    const wordsArr = Object.values(wordCounter);
    const sum = 0;
    wordsArr.forEach(w => sum += w);
    console.log(wordsArr);
    res.send({text: "Total count", count: sum});
})

module.exports = router;