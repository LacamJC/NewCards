const container = document.getElementById('container');

const data = [
    {
        url_img : "img/facebook_logo.svg",
        alt_txt : "Icone do facebook",
        body_text : "O Facebook é uma rede social que permite conversar com amigos e compartilhar mensagens, links, vídeos e fotografias",
        a_link : "#",
        site_name : "Facebook"
    },

    {
        url_img : "img/instagram_logo.svg",
        alt_txt : "Icone do Instagram",
        body_text : "O Instagram é uma rede social online de compartilhamento de fotos e vídeos entre seus usuários.",
        a_link : "#",
        site_name : "Instagram"
    }, 
    
    {
        url_img : "img/whatsapp_logo.svg",
        alt_txt : "Icone do Whatsapp",
        body_text : "WhatsApp é um aplicativo multiplataforma de mensagens instantâneas e chamadas de voz para smartphones.",
        a_link : "#",
        site_name : "Whatsapp"
    }
]




for(let i =0; i < data.length; i++)
{
    var template=`
    <div class="card">
        <div class="card__header">
            <img src="${data[i].url_img}" class="card__header--img" alt="${data[i].alt_txt}">
        </div>
        
        <div class="card__body">
            <p class="card__body--text">${data[i].body_text}</p>
        </div>
        <div class="card__footer">
            <a href="${data[i].a_link}" class="card__footer--btn">${data[i].site_name}<div class="line"></div></a>
        </div> `

        container.innerHTML += template
}




