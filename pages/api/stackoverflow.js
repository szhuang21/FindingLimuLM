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
      const url = 'https://stackoverflow.com/questions/tagged/' + search;
      await page.goto(url);
  
      const data = await page.evaluate(() =>
          Array.from(document.querySelectorAll("div.s-post-summary--content"))
          .map(post => ({
              title: post.querySelector("h3.s-post-summary--content-title").innerText,
              summary: post.querySelector("div.s-post-summary--content-excerpt").innerText,
              link: post.querySelector("h3.s-post-summary--content-title a").href,
              date: post.querySelector("span.relativetime").outerText
          }))
      );

      console.log(data);
      res.json(data);
    } else {

    }
  }

