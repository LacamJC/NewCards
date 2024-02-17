const container = document.getElementById('container');

const data = [
    {
<<<<<<< HEAD
        id : "facebook",
        url_img : "/img/facebook_logo.svg",
=======
        url_img : "img/facebook_logo.svg",
>>>>>>> a6dc357cb98d60671c871c8566132a937660c4df
        alt_txt : "Icone do facebook",
        body_text : "O Facebook é uma rede social que permite conversar com amigos e compartilhar mensagens, links, vídeos e fotografias",
        a_link : "https://www.facebook.com/",
        site_name : "Facebook"
    },

    {
        id : "instagram",
        url_img : "img/instagram_logo.svg",
        alt_txt : "Icone do Instagram",
        body_text : "O Instagram é uma rede social online de compartilhamento de fotos e vídeos entre seus usuários.",
        a_link : "https://www.instagram.com/",
        site_name : "Instagram"
    }, 
    
    {
        id : "whatsapp",
        url_img : "img/whatsapp_logo.svg",
        alt_txt : "Icone do Whatsapp",
        body_text : "WhatsApp é um aplicativo multiplataforma de mensagens instantâneas e chamadas de voz para smartphones.",
        a_link : "https://www.whatsapp.com/",
        site_name : "Whatsapp"
    },
    
    {
        id : "linkedin",
        url_img : "img/linkedin_logo.svg",
        alt_txt : "Icone do Linkedin",
        body_text : "O LinkedIn é uma plataforma de rede social profissional utilizada para conectar profissionais e construir redes de contatos.",
        a_link: " https://www.linkedin.com/",
        site_name : "Linkedin"
    },

    {
        id : "youtube",
        url_img : "img/youtube_logo.svg",
        alt_txt : "Icone do Youtube",
        body_text :  "O YouTube é uma plataforma online de compartilhamento de vídeos.",
        a_link : "https://www.youtube.com/",
        site_name : "Youtube"
    },

    {
        id : "github",
        url_img : "img/git_hub_logo.svg",
        alt_txt : "Icone do Github",
        body_text : "O GitHub é uma plataforma de hospedagem de código-fonte usando Git. Facilita colaboração, controle de versão e integração contínua para projetos de software.",
        a_link : "https://github.com/",
        site_name : "Github"
    }
]




for(let i =0; i < data.length; i++)
{
    var template=`
    <div class="card" id="${data[i].id}">
        <div class="card__header">
            <img src="${data[i].url_img}" class="card__header--img" alt="${data[i].alt_txt}">
        </div>
        
        <div class="card__body">
            <h1 class="card__body--title">${data[i].site_name}</h1>
            <p class="card__body--text">${data[i].body_text}</p>
        </div>
        <div class="card__footer">
            <a href="${data[i].a_link}" target="_blank" title="Ir para ${data[i].site_name}" class="card__footer--a"><div class="card__footer--btn">
            Visitar 
            <div class="line"></div>
            </div></a>
        </div> `

        container.innerHTML += template
}




