/* 
démarrage du DOM 
*/
$(document).ready((e)=>{
    e.preventDefault;
    //console.dir(document);
    const el = $("html body")
    console.log(el.children())
    console.log(el.children().first().children())
    //el.children().first().children().append("Cours jQuery")
    let title_main = $("header h1")   //let title_mains = document.querySelector("header h1")
    title_main.append("Cours jQuery")
  
    const content = `Depuis sa création en 2006 et notamment à cause de la complexification croissante des interfaces Web, 
    jQuery a connu un large succès auprès des développeurs Web et son apprentissage est aujourd’hui un des fondamentaux de la formation aux technologies du Web. Il est à l’heure actuelle la bibliothèque front-end la plus utilisée au monde (plus de la moitié des sites Internet en ligne intègrent jQuery).`
    
    const user_date = {
        el_add: $("<aside>"),
        image: $("<img>"),
        date: new Date().getFullYear()
    }
    console.table(user_date)
    let el_content = $("section p")
    el_content.eq(1).text(content).hide()
    el_content.eq(1).text(content).wrapInner("<em></em>") //fonction enveloppe le text avec la balise "em"

    $("<a>").appendTo("section") //createElement("a")
    
    $("a").attr({ //attribues
        "href":"#",
        "class" : "warning"
    }).text("Click here")
    //placer l'image
    user_date.image.prependTo("figure")
    $("img").attr({
        "src" : "./asset/jquery_plain_wordmark_logo_icon_146445.png",
        "alt" : "Logo jQuery"
    })
    $("figure figcaption").children("h2").text("Détails du langage")
    $("figure figcaption").children("p").text("Ce langage demande l'utilisation d'un cdn jquery qu'on appelle bibliothèque : ")
    $("<a>").appendTo("figure figcaption p")

    $("figcaption a").attr({ //attribues
        "href":"https://releases.jquery.com",
        "class" : "warning"
    }).text("CDN jQuery")


    
    
    /* event click */
    $("section").children(1).css({"user-select" : "none"})
    $("header h1").css({
                "cursor" : "pointer",
                "user-select" : "none"
            })
    $("header h1").on("click",(e)=>{
        Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
          )
        e.stopPropagation()
          //console.log(this)
    })
    //event section
    $("section").children("a").text("+ Open")
    $("section").children(3).on("click",(e)=>{
        el_content.eq(1).delay(1000) //paragraphe
        el_content.eq(1).slideToggle(500); 
        // slideDown() | slideUp() | slide.toggle()
        $("section a").text() == "+ Open" ?  $("section a").text("- Closed") : $("section a").text("+ Open")
        e.stopPropagation()
    })
    //event document
    $("html").on("click",()=>{
        el_content.eq(1).delay(1000)
        el_content.eq(1).slideUp(500);
        $("section").children("a").text("+ Open")
    })
    
    //footer footer > p > copyright + date
    $("<footer>").insertAfter("main").html(`<p>&copy; - JS - ${user_date.date}</p>`)
    $("footer p").wrapInner("<time></time>")
    $("time").attr({
        "datetime" : `${user_date.date}`,
        "aria-datetime" : `${user_date.date}`
    })
});
