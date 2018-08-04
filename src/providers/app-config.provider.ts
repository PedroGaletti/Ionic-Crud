export class AppConfig {
    private url: string;
    public produtos: string;

    constructor() {
        this.url = 'http://localhost:8080/';
        // this.url = 'http://54.207.115.112:8080';
        this.produtos = this.url + 'produto/';
    }
}