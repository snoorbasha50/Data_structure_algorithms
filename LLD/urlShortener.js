
// url shortnener
class UrlMapping{
    constructor(shortcode,longUrl){
        this.shortcode=shortcode
        this.longUrl=longUrl
    }
}

class CodeGenerator{
  constructor(length = 6) {
    this.length = length;
    this.chars =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  }

  generateCode() {
    let code = "";
    for (let i = 0; i < this.length; i++) {
      const idx = Math.floor(Math.random() * this.chars.length);
      code += this.chars[idx];
    }
    return code;
  }
}

class UrlRepository{
    constructor(){
        this.map=new Map()
    }
    save(shortCode,longUrl){
      this.map.set(shortCode,longUrl) 
    }
    get(shortCode){
      return this.map.get(shortCode)
    }
    exists(shortCode){
        return this.map.has(shortCode)
    }
}

class UrlShortenerService{
    constructor(repository,codeGenerator,baseUrl){
        this.repository=repository
        this.codeGenerator=codeGenerator
        this.baseUrl=baseUrl
    }
    createShortUrl(longUrl){
        let shortCode;
        shortCode=this.codeGenerator.generateCode()
        this.repository.save(shortCode,longUrl)
        return this.baseUrl+shortCode
    }
    getOriginalUrl(shortCode){
        return this.repository.get(shortCode)
    }
}

const repo=new UrlRepository()
console.log("repo",repo)
const generator=new CodeGenerator()
console.log("generator",generator)
const service=new UrlShortenerService(repo,generator,"https://neokred.com")

console.log("service",service)

let ShortUrl=service.createShortUrl("https:neokred.com/notify/validate/notify-32r34r8u349ru")
console.log("shortUrl",ShortUrl)
let shortCode=ShortUrl.replace("https://neokred.com","")
console.log(shortCode,"shortcode")

let longUrl=service.getOriginalUrl(shortCode)
console.log("long url",longUrl)