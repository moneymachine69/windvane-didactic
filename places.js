const places = ["Guantanamo Bay, Cuba", "Veracruz, Veracruz", "Port-au-Prince, Haiti",  "Nicaragua", "Dominican Republic","Seoul, Korea", "Santo Domingo, Dominican Republic", "Grenada", "Haiti (Haitian coup d'état)", "Panama", "Kabul, Afganistan", "Baghdad, Iraq", "Al-Tanf"];
const links = ["https://everipedia.org/wiki/lang_en/Sugar_Intervention", "https://en.wikipedia.org/wiki/United_States_occupation_of_Veracruz", "https://2001-2009.state.gov/r/pa/ho/time/wwi/88275.htm", "https://en.wikipedia.org/wiki/United_States_occupation_of_the_Dominican_Republic_(1916%E2%80%931924)", "https://en.wikipedia.org/wiki/Division_of_Korea", "http://sincronia.cucsh.udg.mx/dominican.html", "https://www.britannica.com/event/U-S-invasion-of-Grenada", "https://en.wikipedia.org/wiki/Operation_Uphold_Democracy", "https://www.britannica.com/event/Afghanistan-War", "https://en.wikipedia.org/wiki/Iraq_War", "https://en.wikipedia.org/wiki/Al-Tanf_(U.S._military_base)"];
const names = ["Sugar Intervention and heightened US Marine presence starting in 1917", "Battle of Veracruz during the Mexican Revolution, 1914", "Regarded as part of the Banana Wars, beginning in 1915", "Beginning in 1912 as part of the Banana Wars", "the US Marines landed in 1916 and began an 8 year occupation as part of the Banana Wars", "In the aftermath of World War 2, Korea was placed under a temporary trusteeship between the USSR and United States, which was nullified during the political turmoil of the Cold War", "After the outsing of militarily-installed president, the United States military were deployed to supress rebellion in what became known as the Dominican Civil War (also known as the April Revolution)", "In 1983 Grenada was invaded by the United States military, justified by fears of communist collaboration", "In 1994, the UN authorized 'Operation Uphold Democracy', in which the United States military intervend to reinstate the democratically-elected president and overthrow the military regime", "In 1989, the United States military invaded Panama to remove the military leader who had recently declared war against the United States in Operation Just Cause", "After the World Trade Center fell in 2001, the United States invaded Afghanistan as part of the 'war on terror'", "In 2003, the United States led an invasion of the Republic of Iraq that began the Iraq War", "Al-Tanf is a US military base located within the territory of the Syrian National Coalition, or the Syrian Opposition which was established in 2016"] ;

const info = ["Following the Cuban Independence War, when Cuba gained independence from Spain, the United States (who had been providing support to Cuba) stepped in as interim ruler. The United States military formally ruled Cuba until 1902 (although military intervention and occupation would continue for the next 20 years). During this time, the USA prospered economically from Cuba, specifically through US-owned Sugar Plantations on the Island. In 1917, the insurgent politics in Cuba was growing, due in part to widespread poverty from economic exploitation. In 1918, the USA deployed 1120 marines in Guantanamo (with 6000 on call) to “protect” the Sugar Plantations and quell rebellion in what became known as the Sugar Intervention.",
"In March 2003, the United States led an invasion of the Republic of Iraq that began the Iraq War. One month after the capture of Baghdad, a series of US military-led transitional governments were instituted in Iraq (and who were later criticized for the mismanagement and embezzlement of over 8 billion dollars). Although the combined forces of the United States, the United Kingdom, Australia, and Poland initially led the invasion, the United States maintained military occupation until its complete withdrawal in 2011.",
"After the World Trade Center fell in 2001, the United States invaded Afghanistan as part of the “war on terror.” This began the longest war in US history, which spanned 20 years (though the Vietnam War and the Occupation of Haiti are close seconds). Taliban insurgency mounted and conflict came to a head in 2006. At the time, the US was also occupying Iraq and engaged in conflict there. Because of this, the UN and other countries began to supply the US with troop reinforcement. In 2008, the US authorized raids in Pakistan, which neighbors Afghanistan. Taliban presence mounted over the next decade despite a varying political support among the public. In 2021, following the seizure of Kabul by the Taliban, the US officially withdrew from Afghanistan. Although the “war on terror” is claimed by the US government to be the motivation behind the invasion, many suspect that there are covert motives involving a US-owned oil company(which is now owned by Chevron)’s interest in building an oil pipeline."];


var select = document.getElementById("bib");

for(var i = 0; i < places.length; i++) {
    // creating the place
    var current0 = document.createElement("div");
    current0.appendChild(document.createTextNode(places[i]));
    current0.appendChild(document.createElement("br"));
    current0.classList.add("bibelt");
    current0.setAttribute("id","place" + i);
    console.log(current0);
    // creating the short description
    var current1 = document.createElement("div");
    current1.appendChild(document.createTextNode(names[i]));
    current1.appendChild(document.createElement("br"));
    current1.classList.add("hide");
    current1.setAttribute("id","name" + i);
    console.log(current1);
    
    select.appendChild(current0);
    select.appendChild(current1);
}

var chicago = document.createElement("div");
chicago.appendChild(document.createTextNode("Chicago"));
chicago.appendChild(document.createElement("br"));
chicago.classList.add("usa");
select.appendChild(chicago);

var dc = document.createElement("div");
dc.appendChild(document.createTextNode("Washington DC"));
dc.appendChild(document.createElement("br"));
dc.classList.add("usa");
select.appendChild(dc);

var note = document.createElement("div");
note.appendChild(document.createTextNode("*Note: this is a shortlist chosen by the artist and is not meant to represent a wholistic nor extensive view of US imperialism. Rather, it is an introductory attempt to draw an imperial history into a continuous narrative."));
note.appendChild(document.createElement("br"));
note.classList.add("note");
select.appendChild(note);



// for(var i = 0; i < names.length; i++) {
//     var current = document.createElement("div");
//     current.appendChild(document.createTextNode(names[i]));
//     current.appendChild(document.createElement("br"));
//     current.classList.add("hide");
//     current.setAttribute("id","name" + i);
//     console.log(current);
//     //select.textContent += current;
//     // select.textContent += "<br>";
//     hide.appendChild(current);
// }


