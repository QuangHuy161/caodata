const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')
const fs = require('fs')

const PORT = 8080
const app = express()

axios.get('http://www.nomfoundation.org/nom-project/Chinh-Phu-Ngam-Khuc/Chinh-Phu-Ngam-Khuc-Text/Chinh-Phu-Ngam-Khuc-Text?uiLang=en')
    .then((response) => {
        const html = response.data

        // var htmlObj = document.createElement('div');
        // htmlObj.innerHTML = html;
        // let t = htmlObj.querySelectorAll('.hnText');
        // console.log(t)

        fs.writeFile('chinhphungam.txt', html, err => {
            if (err) {
                console.error(err)
                return
            }
        })
    })


app.listen(PORT, () => { console.log(`running on ${PORT}`) })