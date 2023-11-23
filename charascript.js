window.addEventListener("load", function() {
    var charaImg = document.getElementById('charaimgID');
    var charaName = document.getElementById('charaname');
    var charaDesc = document.getElementById("charadesc");

    document.getElementById('tab1').onclick = function() {
        charaImg.src = 'imgs/chara1.png';
        charaName.innerHTML = 'ALEAR';
        charaDesc.innerHTML = `Alear is the adopted child of Lumera, the queen of dragons and ruler of the holy land of Lythos. They are a veteran of the war with their birth father, malvolent King Sombron who tried to gather powerful artifacts called the Emblem Rings in an attempt to access the multiverse so he could return to his homeworld and seek revenge upon those who wronged him, while causing countless deaths on his path.<br>
        <br>
        Alear defeated him during the war, but was heavily wounded in the process. Nursed back to health and turned into a half divine dragon-half fell dragon hybrid by their adoped mother, Alear was tasked to find the Emblem Rings and stop Sombron after the latter's return and Lumera's death.`
    };
    document.getElementById('tab2').onclick = function() {
        charaImg.src = 'imgs/chara2.png';
        charaName.innerHTML = 'EIRIKA';
        charaDesc.innerHTML = `Eirika is the princess of Renais, daughter of King Fado and twin sister of Crown Prince Ephraim. Exiled from her kingdom during Grado's initial onslaught of Renais, she was a leader of the effort to defeat Grado and protect the Sacred Stones it sought to destroy.<br>
        <br>
        She gathered many companions on her journey, and after arriving at Frelia and meeting her friend Tana, she decided to travel to Grado and find her brother.<br>
        <br>
        After a reunion, the two returned to Frelia to plan for their next course of action. Eirika went to Jehanna with Innes with the purpose of warning Jehanna of the war. The two soon reunited, and went to Renais to receive the two sacred weapons. Eirika received the sacred sword Sieglinde. Together, the twins managed to defeat the Demon King, Fomortiis.`
    };
    document.getElementById('tab3').onclick = function() {
        charaImg.src = 'imgs/chara3.png';
        charaName.innerHTML = 'CAEDA';
        charaDesc.innerHTML = `Caeda is the princess of Talys, daughter of its first king Mostyn. She befriended Marth of Altea during his two-year exile to Talys in the War of Shadows, calling upon him when the Galder pirates launch an assault on the nation, and subsequently joining his forces when he departs to raise an army against the Dolhr oppression.<br>
        <br>
        After the war, she and Marth become engaged, and she moves to Altea to live with him and assist in the restoration of the nation. When the army of Archanea comes to conquer Altea, Marth's sister Elice convinces Caeda to flee in order to find and alert Marth as to Altea's fate, and assists him throughout the rest of the War of Heroes.`
    };
    document.getElementById('tab4').onclick = function() {
        charaImg.src = 'imgs/chara4.png';
        charaName.innerHTML = 'SELIPH';
        charaDesc.innerHTML = `Seliph is the son of the late Sigurd and Deirdre, heir to Grannvale's former House Chalphy, and the half-brother of Imperial Prince Julius and Princess Julia of the Grannvale Empire. He is a descendant of both the Crusader Baldr through Sigurd, and of Saint Heim of the ruling Belhalla dynasty through Deirdre; as the eldest of Deirdre's children, he was as such the true heir to the Grannvale throne. Born in Agustria in the year 759 during its occupation by the Grannvale forces led by his father, he was sent into hiding in the ouskirts of Isaach for his own protection, taken by Oifey and Isaach's Prince Shannan, along with Larcei, Scáthach and Diarmuid. There in the aftermath of the Battle of Belhalla, he lived in hiding in the village of Tirnanog for seventeen years, raised by Edain – who acted as a surrogate mother – and Oifey, and taught martial arts by Shannan.<br>
        <br>
        As the years passed and Shannan began to organize a resistance army against the tyranny of the Grannvale Empire from Tirnanog, Seliph's existence slowly became known to the people of Isaach and he became a figure of hope for the oppressed masses, dubbed the "Scion of Light". This culminated in the year 777, when the Grannvale forces occupying Isaach learned of his existence and of his whereabouts and dispatched soldiers to Tirnanog to subjugate it; in response, Seliph led a small group out to combat the occupation forces and from there, on the advice of Lewyn, leave Isaach to recruit more members for a liberation force, free the other nations of Jugdral from the tyranny of Grannvale, and ultimately take the fight back to the capital Belhalla.`
    };
    document.getElementById('tab5').onclick = function() {
        charaImg.src = 'imgs/chara5.png';
        charaName.innerHTML = 'MARTH';
        charaDesc.innerHTML = `Marth is the prince of Altea, son of King Cornelius and his wife Liza, indirect descendant of the hero Anri, and inheritor of both the divine blade Falchion and the task of using it to strike down Medeus, the Shadow Dragon. Driven from his kingdom by the Dolhr Empire at the beginning of the War of Shadows, he took refuge in Talys for two years before departing to amass an army to resist and strike down the empire's grip on Archanea. Years later, he led Altea in the War of Heroes against his corrupted former friend and ally, Emperor Hardin of Archanea, and was tasked by Gotoh with ensuring the future of both humans and dragons by restoring the lost Binding Shield to prevent the return of the earth dragons of the Dragon's Table.<br>
        <br>
        Through his deeds across the two wars, Marth developed a reputation as a legendary hero. He was believed by many to be destined to lead all of Archanea to salvation, as represented by his use of the legendary Fire Emblem. In time the continent of Archanea came to be united under his rule, and he became renowned throughout history as the legendary "Hero-King" of the Archanean Alliance.`
    };
})