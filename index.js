const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');
const PORT = 8000;

const app = express();
const url = 'https://ikman.lk/en/ads/sri-lanka/cars?sort=relevance&buy_now=0&urgent=0&query=tank&page=1';

axios(url)
    .then(response=>{
        const html = response.data;
        const $ = cheerio.load(html);
        let title = '';
        let price = '';
        $('.heading-2--1OnX8',html).each(function(){
            title = $(this).text();
            console.log(title);
        })
        $('.price--3SnqI',html).each(function(){
            price = $(this).find('span').text();
            console.log(price);
        })
    })

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})