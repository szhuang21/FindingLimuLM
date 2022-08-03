const puppeteer = require('puppeteer');
const express = require("express");
const app = express();
app.use(express.json());

const cors = require('cors')
app.use(cors())

export default async function handler(req, res) {
    if (req.method === 'POST') {
        console.log("in post request")
        console.log(req);
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        console.log("search: ")
        console.log(req.body.search);
        const search = await req.body.search;
        const url = 'https://github.com/search?q=' + search;
        await page.goto(url);
        const zip = (...arr) => Array(Math.max(...arr.map(a => a.length))).fill().map((_,i) => arr.map(a => a[i]));  


        console.log(url);
        
        const titles = await page.evaluate(() =>
            Array.from(document.querySelectorAll("a.v-align-middle")).filter(function (el) {
                return el.innerText != null;
            }).map(val => val.innerText)
        );
        
        console.log(titles)

        const links = await page.evaluate(() =>
        Array.from(document.querySelectorAll("a.v-align-middle")).filter(function (el) {
            return el.href != null;
            }).map(val => val.href)
        );

        const summaries = await page.evaluate(() =>
            Array.from(document.querySelectorAll("p.mb-1")).filter(function (el) {
                return el.innerText != null;
            }).map(val => val.innerText)
        );

        const dates = await page.evaluate(() =>
        Array.from(document.querySelectorAll("relative-time")).filter(function (el) {
        return el.innerText != null;
        }).map(val => val.innerText)
        );  

        const data = await zip(titles, summaries, links, dates).map(val => ({
            title: val[0],
            summary: val[1],
            link: val[2],
            date: val[3]
        }));

        console.log(data);

        res.json(data);
        } else {

        }
  }



/**
 * title: document.querySelector("a.v-align-middle").innerText
 * link: document.querySelector("a.v-align-middle").href
 * summary: document.querySelector("p.mb-1").innerText
 * date: document.querySelector("relative-time").innerText
 */