class Resource {

    // 'нижнее подчеркивание' показывает что это приватная переменная которая не должна использоваться вне класса'
    // ...=BIRD_NAME(по латинскому названию птицы)
    _urlVoice = `https://www.xeno-canto.org/api/2/recordings?query=`;
    _urlImg = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=YOUR API KEY&tag_mode=all&extras=url_m&format=json&nojsoncallback&tags=`;
    _birdName = `Troglodytes`;

    //асинхронная функция получения данных
    async getData() {
        //ответ от сервера(await - ждет результат промиса)
        const response = await fetch(url);

        //проверка статуса ответа сервера
        if (!response.ok) {
            throw new Error(`Could not fetch ${url}, received ${response.status}`)
        }

        const result = await response.json();

        return result;
    }

    getVoiceBird() {
        return this.getData(`${_urlVoice}${birdName}`);
    }

    getImgBird() {
        return this.getData(`${_urlImg}${birdName}`)
    };
}
