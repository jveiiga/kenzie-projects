export class Request {
    static urlBase = "https://kenzie-news-api.herokuapp.com/api/news"

    static async getNews() {
        const data = await fetch(`${this.urlBase}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(resp => resp.json())
            .catch(err => console.log(err))

        return data
    }
}

