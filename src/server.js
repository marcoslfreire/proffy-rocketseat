const proffys = [{
    name: "José Vitor",
    avatar: "https://scontent.ffln1-1.fna.fbcdn.net/v/t1.0-1/p100x100/47289362_2186344954986386_6214335554348122112_o.jpg?_nc_cat=100&_nc_sid=dbb9e7&_nc_eui2=AeHz6JE-Z4yV4Ik4lGle-a2iN9MthvbGAAs30y2G9sYAC7KVpScINnIWMwQK9J29kZLQabG2j0rBQh1qVLWHzhVq&_nc_ohc=1IIVGmZKqoUAX_dU1CZ&_nc_ht=scontent.ffln1-1.fna&_nc_tp=6&oh=1c48d1a10a5363caf5b9d0f0bb5625ce&oe=5F52CBBA",
    whatsapp: "91983249909",
    bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratórioe por mudar a vida das pessoas através de experiências.Mais de 200.000 pessoas já passaram por uma das minhasexplosões",
    subject: "Quimica",
    cost: "20",
    weekday: [0],
    time_fron: [720],
    time_to: [1250]
  },

  {
    name: "victor Hugor",
    avatar: "https://scontent.ffln1-1.fna.fbcdn.net/v/t1.0-1/p100x100/103089430_3964188236985825_5880523129993672114_n.jpg?_nc_cat=103&_nc_sid=dbb9e7&_nc_eui2=AeHw4FMaEHsKm408_rm-IgsmhfBSyD4x2oGF8FLIPjHagdSVmNHxjnrfOgJc3mg8E0trpKvNHwCIRlLRsuC2f4-L&_nc_ohc=e4ohZD2HLkAAX9V4khu&_nc_ht=scontent.ffln1-1.fna&_nc_tp=6&oh=07e71ad9a907ee9805daddc35bfbcf36&oe=5F5532E1",
    whatsapp: "91983249909",
    bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratórioe por mudar a vida das pessoas através de experiências.Mais de 200.000 pessoas já passaram por uma das minhasexplosões",
    subject: "Quimica",
    cost: "20",
    weekday: [1],
    time_fron: [720],
    time_to: [1250]
  },
  {
    name: "Marcos Luciano",
    avatar: "https://avatars1.githubusercontent.com/u/58455190?s=400&u=3cf99cf254c34a1db1da14431d11a1ab09a94fbf&v=4",
    whatsapp: "91983249909",
    bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratórioe por mudar a vida das pessoas através de experiências.Mais de 200.000 pessoas já passaram por uma das minhasexplosões",
    subject: "Quimica",
    cost: "20",
    weekday: [1],
    time_fron: [720],
    time_to: [1250]
  }

];

function pageLanding(req, res) {
  return res.render("study.html", {
    proffys,


  });
}

function pageStudy(req, res) {
  return res.render("study.html");
}

function pageGiveClassees(req, res) {
  return res.render("give-classes.html");
}



const express = require('express');
const server = express();

//configurar nunjucks
const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
  express: server,
  noCache: true,
});

server
  //configurar arquivos estaticos (css,cripts,imagens)
  .use(express.static("public"))
  .get("/", pageLanding)
  .get("/study", pageStudy)
  .get("/give-classes", pageGiveClassees)
  .listen(5500);