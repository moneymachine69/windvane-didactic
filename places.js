const places = ["Guantanamo Bay, Cuba", "Veracruz, Veracruz", "Port-au-Prince, Haiti",  "Nicaragua", "Dominican Republic (Banana Wars)","Seoul, Korea", "Santo Domingo, Dominican Republic", "Grenada",
"Haiti (Haitian coup d'état)", "Panama", "Kabul in Afganistan", "Baghdad in Iraq", "Al-Tanf"];
const links = ["https://everipedia.org/wiki/lang_en/Sugar_Intervention", "https://en.wikipedia.org/wiki/United_States_occupation_of_Veracruz", "https://2001-2009.state.gov/r/pa/ho/time/wwi/88275.htm", ];
const names = ["Sugar Intervention and heightened US Marine presence starting in 1917", "Battle of Veracruz during the Mexican Revolution, 1914", "Regarded as part of the Banana Wars, begining in 1915", "Begining in 1912 as part of the Banana Wars"];
const info = ["Following the Cuban Independence War, when Cuba gained independence from Spain, the United States (who had been providing support to Cuba) stepped in as interim ruler. The United States military formally ruled Cuba until 1902 (although military intervention and occupation would continue for the next 20 years). During this time, the USA prospered economically from Cuba, specifically through US-owned Sugar Plantations on the Island. In 1917, the insurgent politics in Cuba was growing, due in part to widespread poverty from economic exploitation. In 1918, the USA deployed 1120 marines in Guantanamo (with 6000 on call) to “protect” the Sugar Plantations and quell rebellion in what became known as the Sugar Intervention.",
"In March 2003, the United States led an invasion of the Republic of Iraq that began the Iraq War. One month after the capture of Baghdad, a series of US military-led transitional governments were instituted in Iraq (and who were later criticized for the mismanagement and embezzlement of over 8 billion dollars). Although the combined forces of the United States, the United Kingdom, Australia, and Poland initially led the invasion, the United States maintained military occupation until its complete withdrawal in 2011.",
"After the World Trade Center fell in 2001, the United States invaded Afghanistan as part of the “war on terror.” This began the longest war in US history, which spanned 20 years (though the Vietnam War and the Occupation of Haiti are close seconds). Taliban insurgency mounted and conflict came to a head in 2006. At the time, the US was also occupying Iraq and engaged in conflict there. Because of this, the UN and other countries began to supply the US with troop reinforcement. In 2008, the US authorized raids in Pakistan, which neighbors Afghanistan. Taliban presence mounted over the next decade despite a varying political support among the public. In 2021, following the seizure of Kabul by the Taliban, the US officially withdrew from Afghanistan. Although the “war on terror” is claimed by the US government to be the motivation behind the invasion, many suspect that there are covert motives involving a US-owned oil company(which is now owned by Chevron)’s interest in building an oil pipeline."];


var select = document.getElementById("bib");

for(var i = 0; i < places.length; i++) {
    var current = document.createElement("div");
    current.appendChild(document.createTextNode(places[i]));
    current.appendChild(document.createElement("br"));
    current.classList.add("bibelt");
    console.log(current);
    //select.textContent += current;
    // select.textContent += "<br>";
    select.appendChild(current);
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

for(var i = 0; i < info.length; i++) {
    var current = document.createElement("div");
    current.appendChild(document.createTextNode(info[i]));
    current.appendChild(document.createElement("br"));
    current.classList.add("hide");
    console.log(current);
    //select.textContent += current;
    // select.textContent += "<br>";
    select.appendChild(current);
}


