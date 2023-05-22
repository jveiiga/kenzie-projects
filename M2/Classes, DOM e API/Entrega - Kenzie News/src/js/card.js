export class News {
    static renderNews(arrNews, container) {
        arrNews.forEach((noticia) => {
            const card = News.cardNews(noticia)
            container.appendChild(card)
        });
    }

    static bannerNews(arrNews, container) {

        arrNews.forEach((noticia) => {

            if(noticia.id === 3) {
         
                let titulo          = noticia.titulo
                let resumo          = noticia.resumo
                let noticiaCompleta = noticia.noticia_completa
                let categoria       = noticia.categoria
                let fonte           = noticia.fonte
                let imagem          = noticia.imagem

                const h2                   = document.createElement("h2")
                const h3                   = document.createElement("h3")
                const noticia_completaNews = document.createElement("a")
                const categoriaNews        = document.createElement("span")
                const fonteNews            = document.createElement("p")
                const img                  = document.createElement("img")
                const div                  = document.createElement("div")
                const divImgBanner         = document.createElement("div")
                const divBanner            = document.createElement("div")

                h2.classList.add("container__h2__banner")
                h3.classList.add("container__h3__news")
                noticia_completaNews.classList.add("container__noticia_completaNews__banner")
                categoriaNews.classList.add("container__categoria__news")
                fonteNews.classList.add("container__fonteNews__banner")
                img.classList.add("container__imagen__banner")
                div.classList.add("container__banner__dom")
                divImgBanner.classList.add("container__divImg__banner")
                divBanner.classList.add("container__div__banner")

                h2.innerText                   = titulo
                noticia_completaNews.innerText = noticiaCompleta
                categoriaNews.innerText        = categoria
                fonteNews.innerText            = `Fonte: ${fonte}`
                img.src                        = imagem
                img.alt                        = titulo
                noticia_completaNews.href      = noticiaCompleta
                noticia_completaNews.target    = "_blank"
                noticia_completaNews.innerText = resumo

                divImgBanner.appendChild(img)
                divBanner.append(div, categoriaNews, h2, h3, noticia_completaNews, fonteNews,)
                container.append(divBanner, divImgBanner)
            }
        })
    }   
    
    static cardNews(noticia) {

        let titulo          = noticia.titulo
        let resumo          = noticia.resumo
        let noticiaCompleta = noticia.noticia_completa
        let categoria       = noticia.categoria
        let fonte           = noticia.fonte
        let imagem          = noticia.imagem

        const li                   = document.createElement("li")
        const h2                   = document.createElement("h2")
        const h3                   = document.createElement("h3")
        const noticia_completaNews = document.createElement("a")
        const categoriaNews        = document.createElement("span")
        const fonteNews            = document.createElement("p")
        const img                  = document.createElement("img")
        const div                  = document.createElement("div")

        img.classList.add("container__imagen__news")
        categoriaNews.classList.add("container__categoria__news")
        noticia_completaNews.classList.add("container__noticia__completa")
        fonteNews.classList.add("container__fonte__news")
        div.classList.add("container__news")

        h2.innerText                   = titulo
        noticia_completaNews.innerText = noticiaCompleta
        categoriaNews.innerText        = categoria
        fonteNews.innerText            = `Fonte: ${fonte}`
        img.src                        = imagem
        img.alt                        = titulo
        noticia_completaNews.href      = noticiaCompleta
        noticia_completaNews.target    = "_blank"
        noticia_completaNews.innerText = resumo

        li.append(img, div)
        div.append(categoriaNews, h2, h3, noticia_completaNews, fonteNews)

        return li
    }
}