class Resource {
    // 'нижнее подчеркивание' показывает что это приватная переменная которая не должна использоваться вне класса'
    // ...=BIRD_NAME(по латинскому названию птицы)

    _urlVoice = 'https://cors-anywhere.herokuapp.com/https://www.xeno-canto.org/api/2/recordings?query=';
    _urlImg = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=c48f2c557d4348c6afaa6bf1b364fb27&tag_mode=all&extras=url_m&format=json&nojsoncallback&tags=';
    _birdName = 'Troglodytes';

    //Получение звуков
    async getDataVoice(url) {
        //ответ от сервера(await - ждет результат промиса)
        const response = await fetch(url);

        //проверка статуса ответа сервера
        if (!response.ok) {
            throw new Error(`Could not fetch Data Voice ${url}, received ${response.status}`)
        }

        const result = await response.json();

        return result;
    }

    //Получение картинок
    async getDataImg(url) {
        const ex = /[\^\{](.+[\^\}])/;
        const responce = await fetch(url);

        if (!responce.ok) {
            throw new Error(`Could not fetch Data Img ${url}, received ${response.status}`)
        }

        //Ответ в виде текста
        const stringData = await responce.text();

        //Преобразование ответа в JSON
        const result = JSON.parse(stringData.match(ex)[0]);

        return result
    }

    getVoiceBird() {
        return this.getDataVoice(`${this._urlVoice}${this._birdName}`);
    }

    getImgBird() {
        return this.getDataImg(`${this._urlImg}${this._birdName}`);
    };
}

const res = new Resource();

res.getVoiceBird().then((body) => {
    console.log(body);
})

res.getImgBird().then((body) => {
    console.log(body);
})