import { Request } from "./request.js";
import { News } from "./card.js"

const dataBaseNews = await Request.getNews()
const listaNews = document.querySelector(".container")
const div = document.querySelector(".container__banner")

News.renderNews(dataBaseNews, listaNews)
News.bannerNews(dataBaseNews, div)

