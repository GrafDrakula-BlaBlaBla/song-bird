export default class Resource {
    // 'нижнее подчеркивание' показывает что это приватная переменная которая не должна использоваться вне класса'
    // ...=BIRD_NAME(по латинскому названию птицы)

    _urlVoice = 'https://cors-anywhere.herokuapp.com/https://www.xeno-canto.org/api/2/recordings?query=';
    _urlImg = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=c48f2c557d4348c6afaa6bf1b364fb27&tag_mode=all&extras=url_m&format=json&nojsoncallback&tags=';
    _birdName = 'Troglodytes';

    //асинхронная функция получения данных
    async getDataVoice(url) {
        //ответ от сервера(await - ждет результат промиса)
        const response = await fetch(url);

        //проверка статуса ответа сервера
        if (!response.ok) {
            throw new Error(`Could not fetch Data Voice ${url}, received ${response.status}`)
        }
        // debugger
        const result = await response.json();

        return result;
    }

    async getDataImg(url) {
        const ex = /[\^\{](.+[\^\}])/;
        const responce = await fetch(url);

        if (!responce.ok) {
            throw new Error(`Could not fetch Data Img ${url}, received ${responce.status}`)
        }

        const stringData = await responce.text();

        const result = JSON.parse(stringData.match(ex)[0]);

        return result;
    }

    async getImgBird(birdName = 'Troglodytes', id) {

        const result = await this.getDataImg(`${this._urlImg}${birdName}`);

        return result.photos.photo[id];
    };

    async getVoiceBird(birdName = 'Troglodytes', id) {

        const result = await this.getDataVoice(`${this._urlVoice}${birdName}`);

        return result.recordings[id]
    }

    // async getDescription(birdName = 'Troglodytes', id) {

    //     const result = await this.getDataVoice(`${this._urlVoice}${birdName}&rmk:playback`);

    //     console.log('getDescription ', result)

    //     return result.recordings[id]
    // }
}