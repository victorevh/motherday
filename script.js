const root = document.getElementById("root");
const lineTemplate = document.querySelectorAll(".line")[0]

let runned = false;

const users = [
    {
        name: "Victor Oliveira",
        content: "Oi mãe!<br><br>Gostaria de lhe parabenizar não só pelo seu dia, mas por continuar realizando diariamente a missão de ser mãe até hoje! Sou muito grato por ter você como minha mãe nessa jornada, obrigado por todo apoio, carinho, incentivo e compreensão. <br><br> Sem dúvidas você é a mãe e mulher mais incrível que já conheci!<br><br>Feliz dia do <b>“Volta que horas? / Está onde? / Vai dormir em casa?”</b>.<br><br>Brincadeirinha rs, feliz dia das mães, <b>te amo muito!</b> <br> <br> ❤️👩🏽‍🍼🥰",
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
        name: "Vaninha Oliveira",
        content: "Jó ti desejo um dias das mães  maravilhoso cheio de muito amor",
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