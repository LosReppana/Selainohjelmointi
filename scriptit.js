

// tämä aloittaa function ja määrittää minne funktio printtaa tietoa
// alempi line pyyhkii kentän aina tyhjäksi
function getPokemonAll() {
    const writingArea = document.getElementById("pokedeksi");
    writingArea.innerHTML = ''; 

    // tämä lähettää kutsun tietokantaan, tässä apissa jokainen pokemon oli omalla
    // sivulla niin tämä rullaa sivut loppuun eli 1010 asti
    for (let i = 1; i <= 1010; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", url, true);
        xmlhttp.send();

        // tämä tarkistaa että yhteys apiin toimii ja kokoaa jsonista haettavat tiedot
        // olioon nimeltä pokemonData
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
                const pokemonData = JSON.parse(xmlhttp.responseText);

                // tämä määrittää mitä tietoja pokemonData olioon haetaan
                let pokeName = pokemonData.name.toUpperCase();
                let pokeId = pokemonData.id;
                let pokeImage = pokemonData.sprites['front_default'];
                let pokeHeight = pokemonData.height;
                let pokeWeight = pokemonData.weight;
                let pokeHp = pokemonData.stats[0].base_stat;
                let pokeAtt = pokemonData.stats[1].base_stat;
                let pokeDef = pokemonData.stats[2].base_stat;
                let pokeAttS = pokemonData.stats[3].base_stat;
                let pokeDefS = pokemonData.stats[4].base_stat;
                let pokeSpd = pokemonData.stats[5].base_stat;
                let pokeTypes = pokemonData.types;
                
                // tällä määrittelin vain mikä on kunkin pokemonin ns päätyyppi
                let firstType = pokeTypes[0].type.name;

                // tämä luo pokemonCard elementin lisää tietyt luokat siihen 
                let pokemonCard = document.createElement('div');
                pokemonCard.classList.add('card');
                pokemonCard.classList.add('clickable-card');

                //tällä lisätään pokemonCardiin luokka joka määräytyy ylläolevan
                //firstType tiedon perusteella ja sen perusteella määrittää
                //korttien korttien taustavärin
                pokemonCard.classList.add(firstType.toLowerCase() + '-type');

                // tämä luo itse kortin jossa ylläolevaa infoa käytetään
                // tulostaa pienempään korttiin nimen, id:n sekä kuvan
                pokemonCard.innerHTML = `
                    <h2>${pokeName}</h2>
                    <p>ID: ${pokeId}</p>
                    <img src="${pokeImage}" alt="${pokeName}" />
                    

                    <div class="additional-info" style="display: none;">
                     ${pokeTypes.map(type => type.type.name.toUpperCase()).join('<br>')}
                     </div>

                    <div class="additional-info2" style="display: none;">
                    
                         <p> Pituus: ${pokeHeight}  <p/>
                         <p> Paino: ${pokeWeight} <p/> 
                    
                    </div>

                    <div class="additional-info3" style="display: none;">

                        <p> Hp : ${pokeHp}<p/> 
                        <p> Attack: ${pokeAtt}<p/> 
                        <p> Defense: ${pokeDef}<p/> 
                        <p> S.Attack: ${pokeAttS}<p/> 
                        <p> S.Defense: ${pokeDefS}<p/> 
                        <p> Speed: ${pokeSpd} <p/> 

                    </div>
                `;

                //ylääolevalla koodilla kolme div elementtiä luokalla additional-info ovat 
                //oletusarvoisesti piilotettuna

                //seuraava koodinpätkä muuttaa pokemonCard elementin muotoa
                //pokemonCard on oletusarvoisesti .card, tämä muuttaa sen luokkaan .wide-card
                //ja tuo ylläolevat piilotetut tiedot esiin kun elementtiä klikataan hiirellä

                pokemonCard.addEventListener("click", function () {
                const additionalInfo = this.querySelector('.additional-info');
                const additionalInfo2 = this.querySelector('.additional-info2');
                const additionalInfo3 = this.querySelector('.additional-info3');
                    if (!this.classList.contains('wide-card')) {
                        this.classList.add('wide-card');
                        additionalInfo.style.display = 'block';
                        additionalInfo2.style.display = 'block';
                        additionalInfo3.style.display = 'block';

                        // ja tämä piilottaa ylläolevan infon kun hiirellä klikataan 
                        //elementtiä uudestaan
                    } else {
                        this.classList.remove('wide-card');
                        additionalInfo.style.display = 'none';
                        additionalInfo2.style.display = 'none';
                        additionalInfo3.style.display = 'none';
                    }
                });
                

                writingArea.appendChild(pokemonCard);
            }
        };
    }
}

getPokemonAll();


//nämä seuraavat ovat edellisen kopioita ja eroavat vain funktion nimeltä 
// ja siinä miltä sivuilta apissa luodaan pokemonCardit

// näitä on 9 ja ainoa ero jokaisessa on funktion nimi sekä määritelmä mitä 
//sivuja käytetään, eli en kommentoi niitä sen kummemmin

// aivan scrptisivun lopussa on vielä uutta asiaa joka määrittelee
// napeille tietyt funtiot ajettavaksi

function getPokemonGen1() {
    const writingArea = document.getElementById("pokedeksi");
    writingArea.innerHTML = '';

    // tässä ainut eroavaisuus sivumääritelmän ollessa 1-151, 

    for (let i = 1; i <= 151; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", url, true);
        xmlhttp.send();

        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
                const pokemonData = JSON.parse(xmlhttp.responseText);

                let pokeName = pokemonData.name.toUpperCase();
                let pokeId = pokemonData.id;
                let pokeImage = pokemonData.sprites['front_default'];
                let pokeHeight = pokemonData.height;
                let pokeWeight = pokemonData.weight;
                let pokeHp = pokemonData.stats[0].base_stat;
                let pokeAtt = pokemonData.stats[1].base_stat;
                let pokeDef = pokemonData.stats[2].base_stat;
                let pokeAttS = pokemonData.stats[3].base_stat;
                let pokeDefS = pokemonData.stats[4].base_stat;
                let pokeSpd = pokemonData.stats[5].base_stat;
                let pokeTypes = pokemonData.types;
                let firstType = pokeTypes[0].type.name;

                let pokemonCard = document.createElement('div');
                pokemonCard.classList.add('card');
                pokemonCard.classList.add('clickable-card');
                pokemonCard.classList.add(firstType.toLowerCase() + '-type');

                pokemonCard.innerHTML = `
                    <h2>${pokeName}</h2>
                    <p>ID: ${pokeId}</p>
                    <img src="${pokeImage}" alt="${pokeName}" />
                    
                    <div class="additional-info" style="display: none;">
                     ${pokeTypes.map(type => type.type.name.toUpperCase()).join('<br>')}
                     </div>

                    <div class="additional-info2" style="display: none;">
                    
                         <p> Pituus: ${pokeHeight}  <p/>
                         <p> Paino: ${pokeWeight} <p/> 
                    
                    </div>

                    <div class="additional-info3" style="display: none;">

                        <p> Hp : ${pokeHp}<p/> 
                        <p> Attack: ${pokeAtt}<p/> 
                        <p> Defense: ${pokeDef}<p/> 
                        <p> S.Attack: ${pokeAttS}<p/> 
                        <p> S.Defense: ${pokeDefS}<p/> 
                        <p> Speed: ${pokeSpd} <p/> 

                    </div>
                `;

                pokemonCard.addEventListener("click", function () {
                const additionalInfo = this.querySelector('.additional-info');
                const additionalInfo2 = this.querySelector('.additional-info2');
                const additionalInfo3 = this.querySelector('.additional-info3');
                    if (!this.classList.contains('wide-card')) {
                        this.classList.add('wide-card');
                        additionalInfo.style.display = 'block';
                        additionalInfo2.style.display = 'block';
                        additionalInfo3.style.display = 'block';
                    } else {
                        this.classList.remove('wide-card');
                        additionalInfo.style.display = 'none';
                        additionalInfo2.style.display = 'none';
                        additionalInfo3.style.display = 'none';
                    }
                });
                

            writingArea.appendChild(pokemonCard);
        }
    };
}
}


function getPokemonGen2() {
    const writingArea = document.getElementById("pokedeksi");
    writingArea.innerHTML = ''; 

    for (let i = 152; i <= 251; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", url, true);
        xmlhttp.send();

        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
                const pokemonData = JSON.parse(xmlhttp.responseText);

                     let pokeName = pokemonData.name.toUpperCase();
                let pokeId = pokemonData.id;
                let pokeImage = pokemonData.sprites['front_default'];
                let pokeHeight = pokemonData.height;
                let pokeWeight = pokemonData.weight;
                let pokeHp = pokemonData.stats[0].base_stat;
                let pokeAtt = pokemonData.stats[1].base_stat;
                let pokeDef = pokemonData.stats[2].base_stat;
                let pokeAttS = pokemonData.stats[3].base_stat;
                let pokeDefS = pokemonData.stats[4].base_stat;
                let pokeSpd = pokemonData.stats[5].base_stat;
                let pokeTypes = pokemonData.types;
                let firstType = pokeTypes[0].type.name;

                let pokemonCard = document.createElement('div');
                pokemonCard.classList.add('card');
                pokemonCard.classList.add('clickable-card');
                pokemonCard.classList.add(firstType.toLowerCase() + '-type');

                pokemonCard.innerHTML = `
                    <h2>${pokeName}</h2>
                    <p>ID: ${pokeId}</p>
                    <img src="${pokeImage}" alt="${pokeName}" />
                    
                    <div class="additional-info" style="display: none;">
                     ${pokeTypes.map(type => type.type.name.toUpperCase()).join('<br>')}
                     </div>

                    <div class="additional-info2" style="display: none;">
                    
                         <p> Pituus: ${pokeHeight}  <p/>
                         <p> Paino: ${pokeWeight} <p/> 
                    
                    </div>

                    <div class="additional-info3" style="display: none;">

                        <p> Hp : ${pokeHp}<p/> 
                        <p> Attack: ${pokeAtt}<p/> 
                        <p> Defense: ${pokeDef}<p/> 
                        <p> S.Attack: ${pokeAttS}<p/> 
                        <p> S.Defense: ${pokeDefS}<p/> 
                        <p> Speed: ${pokeSpd} <p/> 

                    </div>
                `;

                pokemonCard.addEventListener("click", function () {
                const additionalInfo = this.querySelector('.additional-info');
                const additionalInfo2 = this.querySelector('.additional-info2');
                const additionalInfo3 = this.querySelector('.additional-info3');
                    if (!this.classList.contains('wide-card')) {
                        this.classList.add('wide-card');
                        additionalInfo.style.display = 'block';
                        additionalInfo2.style.display = 'block';
                        additionalInfo3.style.display = 'block';
                    } else {
                        this.classList.remove('wide-card');
                        additionalInfo.style.display = 'none';
                        additionalInfo2.style.display = 'none';
                        additionalInfo3.style.display = 'none';
                    }
                });
                
            

            writingArea.appendChild(pokemonCard);
        }
    };
}
}


function getPokemonGen3() {
    const writingArea = document.getElementById("pokedeksi");
    writingArea.innerHTML = ''; 

    for (let i = 252; i <= 386; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", url, true);
        xmlhttp.send();

        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
                const pokemonData = JSON.parse(xmlhttp.responseText);

                let pokeName = pokemonData.name.toUpperCase();
                let pokeId = pokemonData.id;
                let pokeImage = pokemonData.sprites['front_default'];
                let pokeHeight = pokemonData.height;
                let pokeWeight = pokemonData.weight;
                let pokeHp = pokemonData.stats[0].base_stat;
                let pokeAtt = pokemonData.stats[1].base_stat;
                let pokeDef = pokemonData.stats[2].base_stat;
                let pokeAttS = pokemonData.stats[3].base_stat;
                let pokeDefS = pokemonData.stats[4].base_stat;
                let pokeSpd = pokemonData.stats[5].base_stat;
                let pokeTypes = pokemonData.types;
                let firstType = pokeTypes[0].type.name;

                let pokemonCard = document.createElement('div');
                pokemonCard.classList.add('card');
                pokemonCard.classList.add('clickable-card');
                pokemonCard.classList.add(firstType.toLowerCase() + '-type');

                pokemonCard.innerHTML = `
                    <h2>${pokeName}</h2>
                    <p>ID: ${pokeId}</p>
                    <img src="${pokeImage}" alt="${pokeName}" />
                    
                    <div class="additional-info" style="display: none;">
                     ${pokeTypes.map(type => type.type.name.toUpperCase()).join('<br>')}
                     </div>

                    <div class="additional-info2" style="display: none;">
                    
                         <p> Pituus: ${pokeHeight}  <p/>
                         <p> Paino: ${pokeWeight} <p/> 
                    
                    </div>

                    <div class="additional-info3" style="display: none;">

                        <p> Hp : ${pokeHp}<p/> 
                        <p> Attack: ${pokeAtt}<p/> 
                        <p> Defense: ${pokeDef}<p/> 
                        <p> S.Attack: ${pokeAttS}<p/> 
                        <p> S.Defense: ${pokeDefS}<p/> 
                        <p> Speed: ${pokeSpd} <p/> 

                    </div>
                `;

                pokemonCard.addEventListener("click", function () {
                const additionalInfo = this.querySelector('.additional-info');
                const additionalInfo2 = this.querySelector('.additional-info2');
                const additionalInfo3 = this.querySelector('.additional-info3');
                    if (!this.classList.contains('wide-card')) {
                        this.classList.add('wide-card');
                        additionalInfo.style.display = 'block';
                        additionalInfo2.style.display = 'block';
                        additionalInfo3.style.display = 'block';
                    } else {
                        this.classList.remove('wide-card');
                        additionalInfo.style.display = 'none';
                        additionalInfo2.style.display = 'none';
                        additionalInfo3.style.display = 'none';
                    }
                });
                
                

                writingArea.appendChild(pokemonCard);
            }
        };
    }
}



function getPokemonGen4() {
    const writingArea = document.getElementById("pokedeksi");
    writingArea.innerHTML = ''; 

    for (let i = 387; i <= 493; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", url, true);
        xmlhttp.send();

        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
                const pokemonData = JSON.parse(xmlhttp.responseText);

                let pokeName = pokemonData.name.toUpperCase();
                let pokeId = pokemonData.id;
                let pokeImage = pokemonData.sprites['front_default'];
                let pokeHeight = pokemonData.height;
                let pokeWeight = pokemonData.weight;
                let pokeHp = pokemonData.stats[0].base_stat;
                let pokeAtt = pokemonData.stats[1].base_stat;
                let pokeDef = pokemonData.stats[2].base_stat;
                let pokeAttS = pokemonData.stats[3].base_stat;
                let pokeDefS = pokemonData.stats[4].base_stat;
                let pokeSpd = pokemonData.stats[5].base_stat;
                let pokeTypes = pokemonData.types;
                let firstType = pokeTypes[0].type.name;

                let pokemonCard = document.createElement('div');
                pokemonCard.classList.add('card');
                pokemonCard.classList.add('clickable-card');
                pokemonCard.classList.add(firstType.toLowerCase() + '-type');

                pokemonCard.innerHTML = `
                    <h2>${pokeName}</h2>
                    <p>ID: ${pokeId}</p>
                    <img src="${pokeImage}" alt="${pokeName}" />
                    
                    <div class="additional-info" style="display: none;">
                     ${pokeTypes.map(type => type.type.name.toUpperCase()).join('<br>')}
                     </div>

                    <div class="additional-info2" style="display: none;">
                    
                         <p> Pituus: ${pokeHeight}  <p/>
                         <p> Paino: ${pokeWeight} <p/> 
                    
                    </div>

                    <div class="additional-info3" style="display: none;">

                        <p> Hp : ${pokeHp}<p/> 
                        <p> Attack: ${pokeAtt}<p/> 
                        <p> Defense: ${pokeDef}<p/> 
                        <p> S.Attack: ${pokeAttS}<p/> 
                        <p> S.Defense: ${pokeDefS}<p/> 
                        <p> Speed: ${pokeSpd} <p/> 

                    </div>
                `;

                pokemonCard.addEventListener("click", function () {
                const additionalInfo = this.querySelector('.additional-info');
                const additionalInfo2 = this.querySelector('.additional-info2');
                const additionalInfo3 = this.querySelector('.additional-info3');
                    if (!this.classList.contains('wide-card')) {
                        this.classList.add('wide-card');
                        additionalInfo.style.display = 'block';
                        additionalInfo2.style.display = 'block';
                        additionalInfo3.style.display = 'block';
                    } else {
                        this.classList.remove('wide-card');
                        additionalInfo.style.display = 'none';
                        additionalInfo2.style.display = 'none';
                        additionalInfo3.style.display = 'none';
                    }
                });
                
            

            writingArea.appendChild(pokemonCard);
        }
    };
}
}



function getPokemonGen5() {
    const writingArea = document.getElementById("pokedeksi");
    writingArea.innerHTML = ''; 

    for (let i = 494; i <= 649; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", url, true);
        xmlhttp.send();

        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
                const pokemonData = JSON.parse(xmlhttp.responseText);

                let pokeName = pokemonData.name.toUpperCase();
                let pokeId = pokemonData.id;
                let pokeImage = pokemonData.sprites['front_default'];
                let pokeHeight = pokemonData.height;
                let pokeWeight = pokemonData.weight;
                let pokeHp = pokemonData.stats[0].base_stat;
                let pokeAtt = pokemonData.stats[1].base_stat;
                let pokeDef = pokemonData.stats[2].base_stat;
                let pokeAttS = pokemonData.stats[3].base_stat;
                let pokeDefS = pokemonData.stats[4].base_stat;
                let pokeSpd = pokemonData.stats[5].base_stat;
                let pokeTypes = pokemonData.types;
                let firstType = pokeTypes[0].type.name;

                let pokemonCard = document.createElement('div');
                pokemonCard.classList.add('card');
                pokemonCard.classList.add('clickable-card');
                pokemonCard.classList.add(firstType.toLowerCase() + '-type');

                pokemonCard.innerHTML = `
                    <h2>${pokeName}</h2>
                    <p>ID: ${pokeId}</p>
                    <img src="${pokeImage}" alt="${pokeName}" />
                    
                    <div class="additional-info" style="display: none;">
                     ${pokeTypes.map(type => type.type.name.toUpperCase()).join('<br>')}
                     </div>

                    <div class="additional-info2" style="display: none;">
                    
                         <p> Pituus: ${pokeHeight}  <p/>
                         <p> Paino: ${pokeWeight} <p/> 
                    
                    </div>

                    <div class="additional-info3" style="display: none;">

                        <p> Hp : ${pokeHp}<p/> 
                        <p> Attack: ${pokeAtt}<p/> 
                        <p> Defense: ${pokeDef}<p/> 
                        <p> S.Attack: ${pokeAttS}<p/> 
                        <p> S.Defense: ${pokeDefS}<p/> 
                        <p> Speed: ${pokeSpd} <p/> 

                    </div>
                `;

                pokemonCard.addEventListener("click", function () {
                const additionalInfo = this.querySelector('.additional-info');
                const additionalInfo2 = this.querySelector('.additional-info2');
                const additionalInfo3 = this.querySelector('.additional-info3');
                    if (!this.classList.contains('wide-card')) {
                        this.classList.add('wide-card');
                        additionalInfo.style.display = 'block';
                        additionalInfo2.style.display = 'block';
                        additionalInfo3.style.display = 'block';
                    } else {
                        this.classList.remove('wide-card');
                        additionalInfo.style.display = 'none';
                        additionalInfo2.style.display = 'none';
                        additionalInfo3.style.display = 'none';
                    }
                });
                
            

            writingArea.appendChild(pokemonCard);
        }
    };
}
}


function getPokemonGen6() {
    const writingArea = document.getElementById("pokedeksi");
    writingArea.innerHTML = ''; 

    for (let i = 650; i <= 721; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", url, true);
        xmlhttp.send();

        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
                const pokemonData = JSON.parse(xmlhttp.responseText);

                let pokeName = pokemonData.name.toUpperCase();
                let pokeId = pokemonData.id;
                let pokeImage = pokemonData.sprites['front_default'];
                let pokeHeight = pokemonData.height;
                let pokeWeight = pokemonData.weight;
                let pokeHp = pokemonData.stats[0].base_stat;
                let pokeAtt = pokemonData.stats[1].base_stat;
                let pokeDef = pokemonData.stats[2].base_stat;
                let pokeAttS = pokemonData.stats[3].base_stat;
                let pokeDefS = pokemonData.stats[4].base_stat;
                let pokeSpd = pokemonData.stats[5].base_stat;
                let pokeTypes = pokemonData.types;
                let firstType = pokeTypes[0].type.name;

                let pokemonCard = document.createElement('div');
                pokemonCard.classList.add('card');
                pokemonCard.classList.add('clickable-card');
                pokemonCard.classList.add(firstType.toLowerCase() + '-type');

                pokemonCard.innerHTML = `
                    <h2>${pokeName}</h2>
                    <p>ID: ${pokeId}</p>
                    <img src="${pokeImage}" alt="${pokeName}" />
                    
                    <div class="additional-info" style="display: none;">
                     ${pokeTypes.map(type => type.type.name.toUpperCase()).join('<br>')}
                     </div>

                    <div class="additional-info2" style="display: none;">
                    
                         <p> Pituus: ${pokeHeight}  <p/>
                         <p> Paino: ${pokeWeight} <p/> 
                    
                    </div>

                    <div class="additional-info3" style="display: none;">

                        <p> Hp : ${pokeHp}<p/> 
                        <p> Attack: ${pokeAtt}<p/> 
                        <p> Defense: ${pokeDef}<p/> 
                        <p> S.Attack: ${pokeAttS}<p/> 
                        <p> S.Defense: ${pokeDefS}<p/> 
                        <p> Speed: ${pokeSpd} <p/> 

                    </div>
                `;

                pokemonCard.addEventListener("click", function () {
                const additionalInfo = this.querySelector('.additional-info');
                const additionalInfo2 = this.querySelector('.additional-info2');
                const additionalInfo3 = this.querySelector('.additional-info3');
                    if (!this.classList.contains('wide-card')) {
                        this.classList.add('wide-card');
                        additionalInfo.style.display = 'block';
                        additionalInfo2.style.display = 'block';
                        additionalInfo3.style.display = 'block';
                    } else {
                        this.classList.remove('wide-card');
                        additionalInfo.style.display = 'none';
                        additionalInfo2.style.display = 'none';
                        additionalInfo3.style.display = 'none';
                    }
                });
                
            

            writingArea.appendChild(pokemonCard);
        }
    };
}
}


function getPokemonGen7() {
    const writingArea = document.getElementById("pokedeksi");
    writingArea.innerHTML = ''; 

    for (let i = 722; i <= 809; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", url, true);
        xmlhttp.send();

        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
                const pokemonData = JSON.parse(xmlhttp.responseText);

                let pokeName = pokemonData.name.toUpperCase();
                let pokeId = pokemonData.id;
                let pokeImage = pokemonData.sprites['front_default'];
                let pokeHeight = pokemonData.height;
                let pokeWeight = pokemonData.weight;
                let pokeHp = pokemonData.stats[0].base_stat;
                let pokeAtt = pokemonData.stats[1].base_stat;
                let pokeDef = pokemonData.stats[2].base_stat;
                let pokeAttS = pokemonData.stats[3].base_stat;
                let pokeDefS = pokemonData.stats[4].base_stat;
                let pokeSpd = pokemonData.stats[5].base_stat;
                let pokeTypes = pokemonData.types;
                let firstType = pokeTypes[0].type.name;

                let pokemonCard = document.createElement('div');
                pokemonCard.classList.add('card');
                pokemonCard.classList.add('clickable-card');
                pokemonCard.classList.add(firstType.toLowerCase() + '-type');

                pokemonCard.innerHTML = `
                    <h2>${pokeName}</h2>
                    <p>ID: ${pokeId}</p>
                    <img src="${pokeImage}" alt="${pokeName}" />
                    
                    <div class="additional-info" style="display: none;">
                     ${pokeTypes.map(type => type.type.name.toUpperCase()).join('<br>')}
                     </div>

                    <div class="additional-info2" style="display: none;">
                    
                         <p> Pituus: ${pokeHeight}  <p/>
                         <p> Paino: ${pokeWeight} <p/> 
                    
                    </div>

                    <div class="additional-info3" style="display: none;">

                        <p> Hp : ${pokeHp}<p/> 
                        <p> Attack: ${pokeAtt}<p/> 
                        <p> Defense: ${pokeDef}<p/> 
                        <p> S.Attack: ${pokeAttS}<p/> 
                        <p> S.Defense: ${pokeDefS}<p/> 
                        <p> Speed: ${pokeSpd} <p/> 

                    </div>
                `;

                pokemonCard.addEventListener("click", function () {
                const additionalInfo = this.querySelector('.additional-info');
                const additionalInfo2 = this.querySelector('.additional-info2');
                const additionalInfo3 = this.querySelector('.additional-info3');
                    if (!this.classList.contains('wide-card')) {
                        this.classList.add('wide-card');
                        additionalInfo.style.display = 'block';
                        additionalInfo2.style.display = 'block';
                        additionalInfo3.style.display = 'block';
                    } else {
                        this.classList.remove('wide-card');
                        additionalInfo.style.display = 'none';
                        additionalInfo2.style.display = 'none';
                        additionalInfo3.style.display = 'none';
                    }
                });
                
            

            writingArea.appendChild(pokemonCard);
        }
    };
}
}


function getPokemonGen8() {
    const writingArea = document.getElementById("pokedeksi");
    writingArea.innerHTML = ''; 

    for (let i = 810; i <= 905; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", url, true);
        xmlhttp.send();

        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
                const pokemonData = JSON.parse(xmlhttp.responseText);

                let pokeName = pokemonData.name.toUpperCase();
                let pokeId = pokemonData.id;
                let pokeImage = pokemonData.sprites['front_default'];
                let pokeHeight = pokemonData.height;
                let pokeWeight = pokemonData.weight;
                let pokeHp = pokemonData.stats[0].base_stat;
                let pokeAtt = pokemonData.stats[1].base_stat;
                let pokeDef = pokemonData.stats[2].base_stat;
                let pokeAttS = pokemonData.stats[3].base_stat;
                let pokeDefS = pokemonData.stats[4].base_stat;
                let pokeSpd = pokemonData.stats[5].base_stat;
                let pokeTypes = pokemonData.types;
                let firstType = pokeTypes[0].type.name;

                let pokemonCard = document.createElement('div');
                pokemonCard.classList.add('card');
                pokemonCard.classList.add('clickable-card');
                pokemonCard.classList.add(firstType.toLowerCase() + '-type');

                pokemonCard.innerHTML = `
                    <h2>${pokeName}</h2>
                    <p>ID: ${pokeId}</p>
                    <img src="${pokeImage}" alt="${pokeName}" />
                    
                    <div class="additional-info" style="display: none;">
                     ${pokeTypes.map(type => type.type.name.toUpperCase()).join('<br>')}
                     </div>

                    <div class="additional-info2" style="display: none;">
                    
                         <p> Pituus: ${pokeHeight}  <p/>
                         <p> Paino: ${pokeWeight} <p/> 
                    
                    </div>

                    <div class="additional-info3" style="display: none;">

                        <p> Hp : ${pokeHp}<p/> 
                        <p> Attack: ${pokeAtt}<p/> 
                        <p> Defense: ${pokeDef}<p/> 
                        <p> S.Attack: ${pokeAttS}<p/> 
                        <p> S.Defense: ${pokeDefS}<p/> 
                        <p> Speed: ${pokeSpd} <p/> 

                    </div>
                `;

                pokemonCard.addEventListener("click", function () {
                const additionalInfo = this.querySelector('.additional-info');
                const additionalInfo2 = this.querySelector('.additional-info2');
                const additionalInfo3 = this.querySelector('.additional-info3');
                    if (!this.classList.contains('wide-card')) {
                        this.classList.add('wide-card');
                        additionalInfo.style.display = 'block';
                        additionalInfo2.style.display = 'block';
                        additionalInfo3.style.display = 'block';
                    } else {
                        this.classList.remove('wide-card');
                        additionalInfo.style.display = 'none';
                        additionalInfo2.style.display = 'none';
                        additionalInfo3.style.display = 'none';
                    }
                });
                
            

            writingArea.appendChild(pokemonCard);
        }
    };
}
}



function getPokemonGen9() {
    const writingArea = document.getElementById("pokedeksi");
    writingArea.innerHTML = ''; 

    for (let i = 906; i <= 1010; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", url, true);
        xmlhttp.send();

        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
                const pokemonData = JSON.parse(xmlhttp.responseText);

                let pokeName = pokemonData.name.toUpperCase();
                let pokeId = pokemonData.id;
                let pokeImage = pokemonData.sprites['front_default'];
                let pokeHeight = pokemonData.height;
                let pokeWeight = pokemonData.weight;
                let pokeHp = pokemonData.stats[0].base_stat;
                let pokeAtt = pokemonData.stats[1].base_stat;
                let pokeDef = pokemonData.stats[2].base_stat;
                let pokeAttS = pokemonData.stats[3].base_stat;
                let pokeDefS = pokemonData.stats[4].base_stat;
                let pokeSpd = pokemonData.stats[5].base_stat;
                let pokeTypes = pokemonData.types;
                let firstType = pokeTypes[0].type.name;

                let pokemonCard = document.createElement('div');
                pokemonCard.classList.add('card');
                pokemonCard.classList.add('clickable-card');
                pokemonCard.classList.add(firstType.toLowerCase() + '-type');

                pokemonCard.innerHTML = `
                    <h2>${pokeName}</h2>
                    <p>ID: ${pokeId}</p>
                    <img src="${pokeImage}" alt="${pokeName}" />
                    
                    <div class="additional-info" style="display: none;">
                     ${pokeTypes.map(type => type.type.name.toUpperCase()).join('<br>')}
                     </div>

                    <div class="additional-info2" style="display: none;">
                    
                         <p> Pituus: ${pokeHeight}  <p/>
                         <p> Paino: ${pokeWeight} <p/> 
                    
                    </div>

                    <div class="additional-info3" style="display: none;">

                        <p> Hp : ${pokeHp}<p/> 
                        <p> Attack: ${pokeAtt}<p/> 
                        <p> Defense: ${pokeDef}<p/> 
                        <p> S.Attack: ${pokeAttS}<p/> 
                        <p> S.Defense: ${pokeDefS}<p/> 
                        <p> Speed: ${pokeSpd} <p/> 

                    </div>
                `;

                pokemonCard.addEventListener("click", function () {
                const additionalInfo = this.querySelector('.additional-info');
                const additionalInfo2 = this.querySelector('.additional-info2');
                const additionalInfo3 = this.querySelector('.additional-info3');
                    if (!this.classList.contains('wide-card')) {
                        this.classList.add('wide-card');
                        additionalInfo.style.display = 'block';
                        additionalInfo2.style.display = 'block';
                        additionalInfo3.style.display = 'block';
                    } else {
                        this.classList.remove('wide-card');
                        additionalInfo.style.display = 'none';
                        additionalInfo2.style.display = 'none';
                        additionalInfo3.style.display = 'none';
                    }
                });
                

                writingArea.appendChild(pokemonCard);
            }
        };
    }
}


// nämä lisäävät pokemonit sivun sivupalkin nappeihin toiminnallisuuden
// jolla nappia klikkaamalla ajetaan tietty funktio
document.getElementById("fetchAllButton").addEventListener("click", function () {
    getPokemonAll();
});

document.getElementById("fetchGen1Button").addEventListener("click", function () {
    getPokemonGen1();
});

document.getElementById("fetchGen2Button").addEventListener("click", function () {
    getPokemonGen2();
});

document.getElementById("fetchGen3Button").addEventListener("click", function () {
    getPokemonGen3();
});

document.getElementById("fetchGen4Button").addEventListener("click", function () {
    getPokemonGen4();
});

document.getElementById("fetchGen5Button").addEventListener("click", function () {
    getPokemonGen5();
});

document.getElementById("fetchGen6Button").addEventListener("click", function () {
    getPokemonGen6();
});

document.getElementById("fetchGen7Button").addEventListener("click", function () {
    getPokemonGen7();
});

document.getElementById("fetchGen8Button").addEventListener("click", function () {
    getPokemonGen8();
});

document.getElementById("fetchGen9Button").addEventListener("click", function () {
    getPokemonGen9();
});

