const root = document.getElementById("root");
const lineTemplate = document.querySelectorAll(".line")[0]

let runned = false;

const users = [
    {
        name: "Victor Oliveira",
        content: "Oi mãe!<br><br>Gostaria de lhe parabenizar não só pelo seu dia, mas por continuar realizando diariamente a missão de ser mãe até hoje! Sou muito grato por ter você como minha mãe nessa jornada, obrigado por todo apoio, carinho, incentivo e compreensão. <br><br> Sem dúvidas você é a mãe e mulher mais incrível que já conheci!<br><br>Feliz dia do <b>“Volta que horas? / Está onde? / Vai dormir em casa?”</b>.<br><br>Brincadeirinha rs, feliz dia das mães, <b>te amo muito!</b>❤️👩🏽‍🍼🥰  <br> <br>",
        item: "",
    },
    {
        name: "Julia Oliveira",
        content: "Feliz dia das mães meu amor, não tenho palavras pra descrever o meu amor por você, sou grata a Deus por ter você como mãe. Muito obrigada por todo apoio, por todo cuidado, eu não seria quem sou hoje se não fosse por você! Eu, Gabriel e Lavínia te amamos muito ❤",
    },
    {
        name: "Julio Alves",
        content: "Parabéns a você meu amor companheira de todas as horas pelo seu dia",
    },
    {
        name: "Joselma Oliveira",
        content: "Oi minha querida  irmã. <br> <br>Hoje é o dia das mães e como não lembra de você que é essa mãe,tia irmã tão generosa , não conheço ninguém com tamanha generosidade .Quando nos encontramos você nos transmite muita paz , em sua doçura de falar ,somos em 12 irmãos,cada um com seu jeito e você tem a doçura de mãe. Agradeço a Deus nosso pai por ter você em minha vida obrigada por tudo .Que Deus nosso pai lhe cubra com o manto sagrado lhe dando muita saúde e paz.bjs te amo, feliz dia das mães, minha irmã.",
    },
    {
        name: "Vaninha Oliveira",
        content: "Jó ti desejo um dias das mães  maravilhoso cheio de muito amor",
    },
    {
        name: "Joselia Oliveira",
        content: "Feliz dia das mães, que deus continue te abençoando, amo você!.",
    },
    {
        name: "Zé Erivaldo",
        content: "Jô, Estou passando para lhe desejar um feliz dia das mães minha querida irmã,você que é irmã,amiga,mãe e uma grande mulher. Lhe desejo que Deus lhe abençoe sempre e continue iluminando essa mulher especial que você é. Feliz diz das mães com chuvas de graça do nosso senhor Jesus Cristo,que o divino espirito santo reine em seu coração e sua vida. Amo você .",
    },
    {
        name: "Beguinha Oliveira",
        content: "Nada mais contraditório do q ser mulher... <br> <br>Mulher q pensa com o coração, age pela emoção e vence pelo amor. <br>Q vive milhões de emoções num só dia e transmite cada uma delas num único olhar. <br> <br>Quando olhamos pra nossos filhos, es uma mãe guerreira, cheia de luz ,q Deus te ilumine todos os dias...<br> <br>FELIZ DIA DAS MÃES MINHA IRMÃ...<br> <br>BJS <br> <br>Beguinha .",
    },
    {
        name: "Lourdes Oliveira",
        content: "Parabens minha irmã por esse dia tão lindo que e o dia dais mães é. A palavra mais linda do univeso vc e uma rosa que nasceu no meu jardim parabéns mamãe ❤❤❤",
    },
    {
        name: "Nalva Oliveira",
        content: "Oi minha irmã parabéns por este dia. Que este dia seja repleto de coisas boas de muita paz e saúde  te amo",
    },
]






const changeContent = (user, line, className) => {
    const nameElement = line.querySelectorAll("."+className)[0];
    nameElement.innerHTML = user[className] || "";
}

const changeProfilePicture = (user, line) => {
    const { name } = user;
    const firstName = (name.split(" ")[0]).toLowerCase();
    
    const image = line.querySelectorAll("img")[0];
    image.src = "assets/"+firstName+"-profile.jpg"
}


users.forEach((user, index) => {
    const line = runned ? lineTemplate.cloneNode(true) : lineTemplate;
    changeContent(user, line, "name");
    changeContent(user, line, "content");
    changeProfilePicture(user, line);

    root.appendChild(line);
    runned = true;
})


function photo2() {
    const text = document.getElementById('msg');
    const img = document.createElement('img');
    const img1 = img.src='./assets/victor.jpg'
    text.appendChild(img);
}

photo2()