namespace TheSearch {
    export async function SceneSix(): ƒS.SceneReturn {
      console.log("SceneSix starting");

      let text = {
        Narrator: {
            T0001: "Rex läuft weiter Richtung Fluss...",
            T0002: "Rex pirscht sich langsam und ganz leise an einen grünen Dinosaurier heran, der gerade abgelenkt in den Fluss schaut. Was Rex nicht weiß: Der Dinosaurier hat ihn schon längst gesehen...",
            T0003: "Der Dinosaurier dreht sich amüsiert um...",
            T0004: "Velo grinst Rex, dem plötzlich gar nicht mehr wohl ist, ganz böse an...",
            T0005: "Rex folgt dem Geruch in seiner Nase und findet verschiedene Zutaten und ein Kochbuch...",
            T0006: "Gebe die Zutaten in der richtigen Reihenfolge in den Topf, indem du sie anklickst. Du hast einen Versuch.",
            T0007: "..."
        },

        Rex: {
            T0001: "Man, habe ich einen Hunger. Ich brauche unbedingt was zu essen! " + dataForSave.nameProtagonist + " soll ich etwas jagen oder essen klauen?",
            T0002: "Da hinten sind irgendwelche Dinos, vielleicht kann ich davon ja einen Essen... Mal versuchen...",
            T0003: "Ahhhhh!",
            T0004: "Hier riecht es nach Futter!",
            T0005: "Mhhmmm das duftet köstlich! Danke!", 
            T0006: "Schade... aber besser als nichts. Danke!",
            T0007: "Oh, ähm Entschuldigung... Ich hatte einen solchen Hunger.",
            T0008: "Wissen Sie eigentlich wieso der Diplodocus einen so langen Hals hat?...",
            T0009: "Weil seine Füße so unglaublich stinken! Wer bis du denn?",
            T0010: "Wer bist du?",
            T0011: "Was soll ich damit jetzt anfangen? Kannst du mir da helfen?",
            T0012: "Ich bin Rex",
            T0013: "Wer bist du?",
            T0014: "Oh, dankeschön!"
        },

        Velo: {
          T0001: "Hahaha und das soll mich jetzt beeindrucken? Du kleines Würstchen, vor dir habe ich doch keine Angst!",
          T0002: "Ich bin Velo, ein Velociraptor. Ich lebe in der Oberkreide-Zeit und meine Leibspeise ist alles Fleischhaltige. Ich bin 2 m lang, 50 cm hoch und wiege 15 kg. Ich habe dich schon lange gesehen, mein räumliches Blickfeld ist wie das einer Eule.  Anpirschen bringt bei mir gar nichts, ich habe einen exzellenten Geruchssinn und wusste schon das du hier bist, bevor du mich überhaupt gesehen hast.",
          T0003: "Aber wenn du schon mal da bist, ich habe mindestens genau so einen Hunger wie du - vielleicht drhen wir den Spieß einfach um und ich jage dich!",
          T0004: "Lauf!",
          T0005: "Sei froh das sie hier ist sonst wärst du mein Abendsnack geworden, Würstchen!",
          T0006: "Ist ja gut, ist ja gut.... Ich bin ja schon weg..."
        },

        Lucy: {
          T0001: "Hey Hau bloss ab du Parasit. Lass den Kleinen in Ruhe. Ich meine es ernst. Hau ab oder ich zertrample dich.",
          T0002: "Hau jetzt ab",
          T0003: "Hey, was soll das. Wer kocht denn da mein Abendessen?",
          T0004: "Schon in Ordnung. Was? Wer bist du denn?",
          T0005: "Aha. Ich bin Lucy. Ich bin ein Diplodocus und lebe in der Oberjura-Zeit. Am liebsten esse ich Pflanzen und Blätter wie du schon festgestellt hast. Ich kann bis zu 27 m lang und 4 m hoch werden. Deshalb wiege ich auch so viel. 10 - 16 Tonnen. Mein bis zu sechs Meter langer Hals ist super praktisch. So kann ich bis zu zehn Meter über dem Boden weiden. Du darst gerne was von meinem Essen abhaben. Hier, bediene dich!",
          T0006: "Wer bist du denn?", 
          T0007: "Ich bin Lucy. Ich bin ein Diplodocus und lebe in der Oberjura-Zeit. Am liebsten esse ich Pflanzen und Blätter wie du schon festgestellt hast. Ich kann bis zu 27 m lang und 4 m hoch werden. Deshalb wiege ich auch so viel. 10 - 16 Tonnen. Mein bis zu sechs Meter langer Hals ist super praktisch. So kann ich bis zu zehn Meter über dem Boden weiden. Du darst gerne was von meinem Essen abhaben. Hier, bediene dich!"
        }
      };

      await ƒS.Location.show(locations.L_Velo);
      
      await ƒS.Character.show(characters.velo, characters.velo.pose.small, ƒS.positionPercent(68, 55));

      await ƒS.Character.show(characters.rex, characters.rex.pose.happy, ƒS.positions.bottomright);

      
      await ƒS.update(transition.steps.duration, transition.steps.alpha, transition.steps.edge);
      ƒS.Sound.play(soundRex.hungry, 1);

      ƒS.Sound.play(soundNarrator.s6t0001, 1);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0001);

      //REX Magenknurren

      ƒS.Sound.play(soundRex.s6t0001, 1);
      await ƒS.Speech.tell(characters.rex, text.Rex.T0001);

      /** DECISIONS */
      /**HUNT OR STEAL? */
      let sceneSixDecision1Hungry = {
        iSayHunt: "Jagen",
        iSaySteal: "Essen stehlen"
      };

      /**HELP REX TO COOK? */
      let sceneSixDecision2Cook = {
        iSayYes: "Ja",
        iSayNo: "Nein"
      };

      let dialogueElementS6D1Hungry = await ƒS.Menu.getInput(sceneSixDecision1Hungry, "choicesCssClass");

      switch (dialogueElementS6D1Hungry) {

        case sceneSixDecision1Hungry.iSayHunt:
            console.log("iSayHunt");

            ƒS.Sound.play(soundRex.s6t0002, 1);
            await ƒS.Speech.tell(characters.rex, text.Rex.T0002);

            ƒS.Sound.play(soundNarrator.s6t0002, 1);
            await ƒS.Speech.tell(characters.narrator, text.Narrator.T0002);

            ƒS.Sound.play(soundRex.s6tRoaw, 1);

            await ƒS.Speech.tell(characters.narrator, text.Narrator.T0007);
            
            await ƒS.Character.hide(characters.velo);
            await ƒS.Character.show(characters.velo, characters.velo.pose.happy, ƒS.positions.bottomleft);
            ƒS.update();

            ƒS.Sound.play(soundNarrator.s6t0003, 1);
            await ƒS.Speech.tell(characters.narrator, text.Narrator.T0003);


            await ƒS.Character.show(characters.velo, characters.velo.pose.happy, ƒS.positions.bottomleft);

            ƒS.update();

            ƒS.Sound.play(soundVelo.s6t0001, 1);
            await ƒS.Speech.tell(characters.velo, text.Velo.T0001);

            ƒS.Sound.play(soundVelo.s6t0002, 1);
            await ƒS.Speech.tell(characters.velo, text.Velo.T0002);

            ƒS.Text.addClass("novelPageVelo");
            await ƒS.Text.print("");

            ƒS.Inventory.add(items.velo);

            ƒS.update();

            ƒS.Sound.play(soundVelo.s6t0003, 1);
            await ƒS.Speech.tell(characters.velo, text.Velo.T0003);

            ƒS.Sound.play(soundNarrator.s6t0004, 1);
            await ƒS.Speech.tell(characters.narrator, text.Narrator.T0004);
            
            ƒS.Sound.play(soundVelo.s6t0004, 1);
            await ƒS.Speech.tell(characters.velo, text.Velo.T0004);

            ƒS.Sound.play(soundRex.s6t0003, 1);
            await ƒS.Speech.tell(characters.rex, text.Rex.T0003);

            await ƒS.Character.hide(characters.rex);

            ƒS.update();

            await ƒS.Character.animate(characters.rex, characters.rex.pose.sad, getAnimationRexRun());

            await ƒS.Character.hide(characters.rex);

            ƒS.update();

            
            await ƒS.Character.animate(characters.lucy, characters.lucy.pose.angry, getAnimationLucy());
            
            await ƒS.Character.show(characters.lucy, characters.lucy.pose.angry, ƒS.positionPercent(80, 102));
            
            await ƒS.Character.show(characters.rex, characters.rex.pose.sad, ƒS.positions.bottomright);
            ƒS.update();

            ƒS.Sound.play(soundLucy.s6t0001, 1);
            await ƒS.Speech.tell(characters.lucy, text.Lucy.T0001);

            await ƒS.Character.hide(characters.velo); 
            await ƒS.Character.show(characters.velo, characters.velo.pose.scared, ƒS.positions.bottomleft);

            ƒS.Sound.play(soundVelo.s6t0005, 1);
            await ƒS.Speech.tell(characters.velo, text.Velo.T0005);

            ƒS.Sound.play(soundLucy.s6t0002, 1);
            await ƒS.Speech.tell(characters.lucy, text.Lucy.T0002);

            ƒS.Sound.play(soundVelo.s6t0006, 1);
            await ƒS.Speech.tell(characters.velo, text.Velo.T0006);

            await ƒS.Character.hide(characters.velo);
            await ƒS.Character.hide(characters.lucy);

            await ƒS.Character.show(characters.lucy, characters.lucy.pose.happy, ƒS.positions.bottomleft);

            ƒS.update();
          
            ƒS.Sound.play(soundLucy.s6t0006, 1);
            await ƒS.Speech.tell(characters.lucy, text.Lucy.T0006);

            ƒS.Sound.play(soundRex.s6t0012, 1);
            await ƒS.Speech.tell(characters.rex, text.Rex.T0012);

            ƒS.Sound.play(soundRex.s6t0013, 1);
            await ƒS.Speech.tell(characters.rex, text.Rex.T0013);

            ƒS.Sound.play(soundLucy.s6t0007, 1);
            await ƒS.Speech.tell(characters.lucy, text.Lucy.T0007);

            ƒS.Text.addClass("novelPageLucy");
            await ƒS.Text.print("");

            ƒS.Inventory.add(items.lucy);

            ƒS.update();

            await ƒS.Character.hide(characters.rex);

            await ƒS.Character.show(characters.rex, characters.rex.pose.happy, ƒS.positions.bottomright);

            ƒS.update();
            ƒS.Speech.clear();
            ƒS.Speech.hide();

            //await ƒS.Character.hide(characters.velo);
            await ƒS.Character.hide(characters.lucy);
            await ƒS.Character.hide(characters.rex);

            ƒS.update();

            return SceneSeven();
            break;

        case sceneSixDecision1Hungry.iSaySteal:
            console.log("iSaySteal");

            dataForSave.friendshipScore -= 1;

            await ƒS.Character.hide(characters.rex);

            await ƒS.Character.hide(characters.velo);

            await ƒS.Character.show(characters.rex, characters.rex.pose.sniff, ƒS.positions.bottomright);

            ƒS.update();

            await ƒS.Location.show(locations.L_DiplodoDay);

            await ƒS.update(transition.steps.duration, transition.steps.alpha, transition.steps.edge);

            let fireplace: HTMLElement = document.createElement("div");
            fireplace.setAttribute("class", "fireplace");
            document.body.appendChild(fireplace);

            ƒS.Sound.play(soundRex.s6t0004, 1);
            await ƒS.Speech.tell(characters.rex, text.Rex.T0004);

            ƒS.Sound.play(soundNarrator.s6t0005, 1);
            await ƒS.Speech.tell(characters.narrator, text.Narrator.T0005);

            ƒS.Sound.play(soundRex.s6t0011, 1);
            await ƒS.Speech.tell(characters.rex, text.Rex.T0011);

            let dialogeElementS6D2Cook = await ƒS.Menu.getInput(sceneSixDecision2Cook, "choicesCssClass");

            switch (dialogeElementS6D2Cook) {
              case sceneSixDecision2Cook.iSayYes:
                console.log("iSayYes");

                dataForSave.friendshipScore += 1;
                ƒS.Sound.play(soundNarrator.s6Game4, 1);
                await ƒS.Speech.tell(characters.narrator, text.Narrator.T0006);

                ƒS.Text.addClass("book");
                await ƒS.Text.print("");

                /**GAME 4 */
                let background: HTMLElement = document.createElement("div");
                background.setAttribute("class", "bgGame2");
                document.body.appendChild(background);

                let carrot: HTMLElement = document.createElement("div");
                carrot.setAttribute("class", "carrot");
                carrot.addEventListener("pointerdown", addVegetable);
                background.appendChild(carrot);

                let leek: HTMLElement = document.createElement("div");
                leek.setAttribute("class", "leek"); 
                leek.addEventListener("pointerdown", addVegetable);
                background.appendChild(leek);

                let potato: HTMLElement = document.createElement("div");
                potato.setAttribute("class", "potato");
                potato.addEventListener("pointerdown", addVegetable);
                background.appendChild(potato);


                let leaf: HTMLElement = document.createElement("div");
                leaf.setAttribute("class", "leaf");
                leaf.addEventListener("pointerdown", addVegetable);
                background.appendChild(leaf);

                let canvas: HTMLElement = document.querySelector("canvas");
                canvas.setAttribute("class", "hide");

                let save: HTMLElement = document.querySelector("#save");
                save.setAttribute("class", "hide");

                let load: HTMLElement = document.querySelector("#load");
                load.setAttribute("class", "hide");

                let close: HTMLElement = document.querySelector("#close");
                close.setAttribute("class", "hide");

                let inventory: HTMLElement = document.querySelector("#inventory");
                inventory.setAttribute("class", "hide");

                let speech: HTMLElement = document.querySelector("speech");
                speech.setAttribute("class", "hide");

                document.getElementsByName("friendshipScore").forEach(meterStuff => meterStuff.hidden = true);
                document.getElementById("scoreForFriendshipRex").setAttribute("class", "hide");

                let stew: string[] = [];

                function addVegetable(_event: Event): void {

                  ƒS.Sound.play(soundSFX.catchCook, 1);

                  let target = _event.target as HTMLElement;
                  
                  let vegetable: string = target.className;

                  console.log(vegetable);

                  stew.push(vegetable);

                  if (stew.length == 11) {
                    console.log("All Items are added");

                    carrot.removeEventListener("pointerdown", addVegetable);
                    leek.removeEventListener("pointerdown", addVegetable);
                    potato.removeEventListener("pointerdown", addVegetable);
                    leaf.removeEventListener("pointerdown", addVegetable);

                    background.removeChild(carrot);
                    background.removeChild(leek);
                    background.removeChild(potato);
                    background.removeChild(leaf);
                    document.body.removeChild(fireplace);

                    checkOrder();
                    
                  }
                }

                async function checkOrder(): Promise <ƒS.SceneReturn> {
                  console.log(stew);
                  
                  if (stew[0] == "potato" && stew[1] == "potato" && stew[2] == "potato" && stew[3] == "potato" && stew[4] == "potato" && stew[5] == "carrot" && stew[6] == "carrot" && stew[7] == "carrot" && stew[8] == "leek" && stew[9] == "leaf" && stew[10] == "leaf") {
                    console.log("YouWOn");

                    document.body.removeChild(background);
                    canvas.classList.remove("hide");
                    save.classList.remove("hide");
                    load.classList.remove("hide");
                    close.classList.remove("hide");
                    inventory.classList.remove("hide");
                    speech.classList.remove("hide");
                    //document.body.removeChild(fireplace);

                    document.getElementsByName("friendshipScore").forEach(meterStuff => meterStuff.hidden = false);
                    document.getElementById("scoreForFriendshipRex").classList.remove("hide");

                    dataForSave.friendshipScore += 5;

                    await ƒS.Character.hide(characters.rex);

                    ƒS.update();

                    await ƒS.Character.show(characters.rex, characters.rex.pose.happy, ƒS.positions.bottomright);

                    ƒS.update();

                    ƒS.Sound.play(soundRex.s6t0005, 1);
                    await ƒS.Speech.tell(characters.rex, text.Rex.T0005);

                    await ƒS.Character.show(characters.lucy, characters.lucy.pose.happy, ƒS.positions.bottomleft);

                    ƒS.update();

                    ƒS.Sound.play(soundLucy.s6t0003, 1);
                    await ƒS.Speech.tell(characters.lucy, text.Lucy.T0003);

                    ƒS.Sound.play(soundRex.s6t0007, 1);
                    await ƒS.Speech.tell(characters.rex, text.Rex.T0007);

                    ƒS.Sound.play(soundRex.s6t0008, 1);
                    await ƒS.Speech.tell(characters.rex, text.Rex.T0008);

                    ƒS.Sound.play(soundLucy.s6t0004, 1);
                    await ƒS.Speech.tell(characters.lucy, text.Lucy.T0004);

                    ƒS.Sound.play(soundRex.s6t0009, 1);
                    await ƒS.Speech.tell(characters.rex, text.Rex.T0009);

                    ƒS.Sound.play(soundLucy.s6t0005, 1);
                    await ƒS.Speech.tell(characters.lucy, text.Lucy.T0005);

                    ƒS.Sound.play(soundRex.s6t0014, 1);
                    ƒS.Speech.tell(characters.rex, text.Rex.T0014);

                    ƒS.Text.setClass("novelPageLucy");
                    await ƒS.Text.print("");

                    ƒS.Inventory.add(items.lucy);
                    
                    ƒS.update();


                    ƒS.Speech.hide();
                    ƒS.Speech.clear();
                    ƒS.Character.hide(characters.rex);
                    ƒS.Character.hide(characters.lucy);
                    ƒS.update();
                    

                    return SceneSeven();

                  } else {
                    console.log("YouLost");

                    document.body.removeChild(background);

                    canvas.classList.remove("hide");
                    save.classList.remove("hide");
                    load.classList.remove("hide");
                    close.classList.remove("hide");
                    inventory.classList.remove("hide");
                    speech.classList.remove("hide");
                    document.body.removeChild(fireplace);

                    document.getElementsByName("friendshipScore").forEach(meterStuff => meterStuff.hidden = false);
                    document.getElementById("scoreForFriendshipRex").classList.remove("hide");

                    dataForSave.friendshipScore -= 5;

                    await ƒS.Character.hide(characters.rex);

                    ƒS.update();

                    await ƒS.Character.show(characters.rex, characters.rex.pose.sad, ƒS.positions.bottomright);

                    ƒS.update();

                    ƒS.Sound.play(soundRex.s6t0006, 1);
                    await ƒS.Speech.tell(characters.rex, text.Rex.T0006);

                    await ƒS.Character.show(characters.lucy, characters.lucy.pose.happy, ƒS.positions.bottomleft);

                    ƒS.update();

                    ƒS.Sound.play(soundLucy.s6t0003, 1);
                    await ƒS.Speech.tell(characters.lucy, text.Lucy.T0003);

                    await ƒS.Character.hide(characters.rex);
                    await ƒS.Character.show(characters.rex, characters.rex.pose.happy, ƒS.positions.bottomright);

                    ƒS.Sound.play(soundRex.s6t0007, 1);
                    await ƒS.Speech.tell(characters.rex, text.Rex.T0007);

                    ƒS.Sound.play(soundRex.s6t0008, 1);
                    await ƒS.Speech.tell(characters.rex, text.Rex.T0008);

                    ƒS.Sound.play(soundLucy.s6t0004, 1);
                    await ƒS.Speech.tell(characters.lucy, text.Lucy.T0004);

                    ƒS.Sound.play(soundRex.s6t0009, 1);
                    await ƒS.Speech.tell(characters.rex, text.Rex.T0009);

                    ƒS.Sound.play(soundLucy.s6t0005, 1);
                    await ƒS.Speech.tell(characters.lucy, text.Lucy.T0005);

                    ƒS.Sound.play(soundRex.s6t0014, 1);
                    ƒS.Speech.tell(characters.rex, text.Rex.T0014);

                    ƒS.update();

                    ƒS.Text.addClass("novelPageLucy");
                    await ƒS.Text.print("");

                    ƒS.Inventory.add(items.lucy);

                    ƒS.update();


                    

                    ƒS.Speech.hide();
                    ƒS.Speech.clear();
                    ƒS.Character.hide(characters.rex);
                    ƒS.Character.hide(characters.lucy);
                    ƒS.update();

                    return SceneSeven();
                  }
                }

                break;

              case sceneSixDecision2Cook.iSayNo:
                console.log("iSayNo");

                document.body.removeChild(fireplace);

                await ƒS.Character.show(characters.lucy, characters.lucy.pose.happy, ƒS.positions.bottomleft);
                ƒS.Character.hide(characters.rex);

                await ƒS.Character.show(characters.rex, characters.rex.pose.happy, ƒS.positions.bottomright);

                ƒS.update(); 

                ƒS.Sound.play(soundLucy.s6t0006, 1);
                await ƒS.Speech.tell(characters.lucy, text.Lucy.T0006);

                ƒS.Sound.play(soundRex.s6t0012, 1);
                await ƒS.Speech.tell(characters.rex, text.Rex.T0012);

                ƒS.Sound.play(soundRex.s6t0013, 1);
                await ƒS.Speech.tell(characters.rex, text.Rex.T0013);

                ƒS.Sound.play(soundLucy.s6t0005, 1);
                await ƒS.Speech.tell(characters.lucy, text.Lucy.T0005);

                ƒS.Text.addClass("novelPageLucy");
                await ƒS.Text.print("");

                ƒS.Inventory.add(items.lucy);

                ƒS.update();

                ƒS.Sound.play(soundRex.s6t0014, 1);
                await ƒS.Speech.tell(characters.rex, text.Rex.T0014);

                //document.body.removeChild(fireplace);
                ƒS.Speech.clear();
                ƒS.Speech.hide();
                ƒS.Character.hide(characters.rex);
                ƒS.update();
                
                return SceneSeven();
                break;
              
            }
            break;  
      }
    }
}