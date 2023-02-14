namespace Template {
    export async function SceneFive1(): ƒS.SceneReturn {
      console.log("SceneFive1 starting");

      let text = {
        Narrator: {
            T0001: "Nachdem Rex an der Schlucht vorbei gelaufen ist, hat er jetzt eine Lichtung mit aufeinander gestapelten Steinen erreicht. Oh, er ist ja gar nicht alleine. Wer ist denn das?",
            T0002: "Rex läuft weiter auf den Stein zu und versucht ihn Tilly abzunehmen. Sie lässt sich von ihm aber nicht beirren und dreht sich einfach um. Rex wird langsam böse...",
            T0004: "Oh oh, das sieht nicht gut aus. Schnell, du musst Rex helfen vor Tillys Papa zu fliehen! Mit einem kurzen Klick auf die Pfeiltaste nach oben oder die Leertaste springt Rex über die Steine.",
            T0005: "Tilly widmet ihre Aufmerksamkeit wieder einem Stein, mit dem sie spielt. Rex versucht ihr den Stein abzunehmen, sie wird sauer.",
            T0006: "Oh nein, jetzt gibt es Ärger...",
            T0007: "Geschafft!",
            T0008: "..."
        },

        Rex: {
            T0001: "Soll ich mich vorstellen?",
            T0002: "Hey, Hey, wie nennt man einen Dinosaurier der einen Cowboyhut und Cowboystiefel trägt?",
            T0003: "Einen Tyrannosaurus Tex! Hahaha! Ich hätte noch einen Witz: Geht ein Cowboy zum Frisuer.... Pony weg! Haha!",
            T0004: "Hallo, ich bin Rex. Ich suche nach meiner Mama, hast du sie zufällig gesehen?",
            T0005: "Du bist echt doof!"
        },

        Tilly: {
            T0001: "Papaaa!!",
            T0002: "Ich bin Tilly. Ich bin ein Triceratops und lebe in der Oberkreide Zeit. Am liebsten esse ich krautige Pflanzen wie zum Beispiel Palmfarne. Ich werde mal ganz groß - bis zu 9 lang. Mein Gewicht variiert zwischen 6 und 12 Tonnen. Ich bin eher ein Einzelgänger und sehr gerne allein. Wenn mich jemand ärgert, dann kann ich mich mit meinen drei Hörnern ausgezeichnet wehren. Deshalb solltest du mich jetzt auch lieber in Ruhe lassen.",
            T0003: "Achja? Papaaa, der T-Rex ärgert mich!"
        }
      };

      await ƒS.Location.show(locations.L_Tricera);

      await ƒS.Character.show(characters.rex, characters.rex.pose.happy, ƒS.positions.bottomright);
      
      await ƒS.Character.show(characters.tilly, characters.tilly.pose.happy, ƒS.positions.bottomleft);
  
      await ƒS.update(transition.steps.duration, transition.steps.alpha, transition.steps.edge);

      ƒS.Sound.play(soundNarrator.s51t0001, 1);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0001);

      ƒS.Sound.play(soundRex.s51t0001, 1);
      await ƒS.Speech.tell(characters.rex, text.Rex.T0001);

      /**DECISIONS */
      /** INTRODUCE? */
      let sceneFive1Decision1Introduce = {
        iSayYes: "Ja",
        iSayNo: "Nein"
      };

      /** PLAY OR ASK FOR HELP? */
      let sceneFive1Decision2PlayOrAsk = {
        iSayJustPlay: "Mitspielen",
        iSayAskAgain: "Nochmal fragen"
      };

      /** GET ANGRY? */
      let sceneFive1Decision3GetAngry = {
        iSayGetAngry: "Böse werden",
        iSayDoNotGetAngry: "Nicht böse werden"
      };

      let dialogueElementS51D1Introduce = await ƒS.Menu.getInput(sceneFive1Decision1Introduce, "choicesCssClass");

      switch (dialogueElementS51D1Introduce) {

        case sceneFive1Decision1Introduce.iSayYes:
            console.log("iSayYes");

            ƒS.Sound.play(soundRex.s51t0004, 1);
            await ƒS.Speech.tell(characters.rex, text.Rex.T0004);

            ƒS.Sound.play(soundTilly.s51t0002, 1);
            await ƒS.Speech.tell(characters.tilly, text.Tilly.T0002);

            ƒS.Text.addClass("novelPageTilly");
            await ƒS.Text.print("");

            ƒS.Inventory.add(items.tilly);

            ƒS.update();

            let dialogueElementS51D2PlayOrAsk = await ƒS.Menu.getInput(sceneFive1Decision2PlayOrAsk, "choicesCssClass");

            switch (dialogueElementS51D2PlayOrAsk) {

              case sceneFive1Decision2PlayOrAsk.iSayJustPlay:
                console.log("iSayJustPlay");

                ƒS.Sound.play(soundNarrator.s51t0002, 1);
                await ƒS.Speech.tell(characters.narrator, text.Narrator.T0002);

                await ƒS.Character.hide(characters.rex);

                await ƒS.Character.animate(characters.rex, characters.rex.pose.happy, getAnimationRightMiddle());

                await ƒS.Character.hide(characters.rex);

                await ƒS.Character.show(characters.rex, characters.rex.pose.happy, ƒS.positions.bottomcenter);

                ƒS.update();

                let dialogueElementS51D3GetAngry = await ƒS.Menu.getInput(sceneFive1Decision3GetAngry, "choicesCssClass");

                switch (dialogueElementS51D3GetAngry) {

                  case sceneFive1Decision3GetAngry.iSayGetAngry:
                    console.log("iSayGetAngry");

                    dataForSave.friendshipScore -= 1;

                    await ƒS.Character.hide(characters.rex);

                    await ƒS.Character.show(characters.rex, characters.rex.pose.angry, ƒS.positions.bottomcenter);

                    ƒS.update();

                    await ƒS.Character.hide(characters.tilly);

                    await ƒS.Character.show(characters.tilly, characters.tilly.pose.angry, ƒS.positions.bottomleft);

                    ƒS.update();

                    ƒS.Sound.play(soundRex.s51t0005, 1);
                    await ƒS.Speech.tell(characters.rex, text.Rex.T0005);

                    ƒS.Sound.play(soundTilly.s51t0003, 1);
                    await ƒS.Speech.tell(characters.tilly, text.Tilly.T0003);

                    ƒS.Sound.play(soundTillysDad.s51t0001, 1);
                    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0008);

                    ƒS.Sound.play(soundNarrator.s51Game3, 1);
                    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0004);


                    /**MINI GAME 3 */

                    let gameField: HTMLElement = document.createElement("div");
                    gameField.setAttribute("id", "gameField");
                    document.body.appendChild(gameField);
                    
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

                    let character: HTMLElement = document.createElement("div");
                    character.setAttribute("id", "character");
                    gameField.appendChild(character);

                    let characterBottom = parseInt(window.getComputedStyle(character).getPropertyValue("bottom"));
                    let characterRight = parseInt(window.getComputedStyle(character).getPropertyValue("right"));
                    let chracterwidth = parseInt(window.getComputedStyle(character).getPropertyValue("width"));

                    let isJumping = false;
                    let upTime: number;
                    let downTime: number;

                    let score: number = 0;

                    function jump(): void {
                      if (isJumping) return;
                      upTime = setInterval(() => {
                        if (characterBottom >= 300) {
                          clearInterval(upTime);
                          downTime = setInterval (() => {
                            if (characterBottom <= 5) {
                              clearInterval(downTime);
                              isJumping = false;
                            }
                            characterBottom -= 10;
                            character.style.bottom = characterBottom + "px";
                          },                      20);
                        }
                        characterBottom += 10;
                        character.style.bottom = characterBottom + "px";
                        isJumping = true;
                      },                   20);
                    }

                    
                    async function generateStones(): Promise <void> {

                      let stones = document.createElement("div");
                      stones.setAttribute("class", "stones");
                      gameField.appendChild(stones);

                      let stone = document.createElement("div");
                      stone.setAttribute("class", "stone");
                      stones.appendChild(stone);

                      let randomTimeout = Math.floor(Math.random() * 2000) + 2000; 

                      let stoneRight = -30;
                      let stoneBottom = 5;
                      let stoneWidth = 30;
                      let stoneHeight = 100;

                      let stoneInterval: number = setInterval(moveStone, 20);
                      let stoneTimeout: number = setTimeout (generateStones, randomTimeout);

                      async function moveStone (): Promise <ƒS.SceneReturn> {

                        stoneRight += 5;

                        stone.style.right = stoneRight + "px";
                        stone.style.bottom = stoneBottom + "px";

                        if (characterRight >= stoneRight - chracterwidth && characterRight <= stoneRight + stoneWidth && characterBottom <= stoneBottom + stoneHeight) {
                          console.log("Hit");
                          console.log("ParentNode " + gameField.parentNode + "ParentElement " + gameField.parentElement);

                          clearInterval(stoneInterval);
                          clearTimeout(stoneTimeout);
                          clearInterval(upTime);
                          clearInterval(downTime);

                          document.body.removeChild(gameField);

                          canvas.classList.remove("hide");
                          speech.classList.remove("hide");
                          save.classList.remove("hide");
                          load.classList.remove("hide");
                          close.classList.remove("hide");
                          inventory.classList.remove("hide");

                          document.getElementsByName("friendshipScore").forEach(meterStuff => meterStuff.hidden = false);
                          document.getElementById("scoreForFriendshipRex").classList.remove("hide");

                          dataForSave.friendshipScore -= 5;

                          await ƒS.Character.hide(characters.tilly);
                          await ƒS.Character.hide(characters.rex);

                          ƒS.update();
                          await ƒS.Character.show(characters.rex, characters.rex.pose.sad, ƒS.positions.bottomright);

                          ƒS.Sound.play(soundNarrator.s51t0006, 1);
                          await ƒS.Speech.tell(characters.narrator, text.Narrator.T0006);

                          ƒS.Character.hide(characters.tilly);
                          ƒS.Character.hide(characters.rex);
                          ƒS.Speech.clear();
                          ƒS.Speech.hide();

                          return SceneSix();
                          
                        }

                        if (score == 5) {

                          clearInterval(stoneInterval);
                          clearTimeout(stoneTimeout);
                          clearInterval(upTime);
                          clearInterval(downTime);

                          document.body.removeChild(gameField);

                          canvas.classList.remove("hide");
                          speech.classList.remove("hide");
                          save.classList.remove("hide");
                          load.classList.remove("hide");
                          close.classList.remove("hide");
                          inventory.classList.remove("hide");

                          document.getElementsByName("friendshipScore").forEach(meterStuff => meterStuff.hidden = false);
                          document.getElementById("scoreForFriendshipRex").classList.remove("hide");

                          dataForSave.friendshipScore += 5;

                          await ƒS.Character.hide(characters.tilly);
                          await ƒS.Character.hide(characters.rex);

                          
                          await ƒS.Character.show(characters.rex, characters.rex.pose.happy, ƒS.positions.bottomright);
                          ƒS.update();

                          await ƒS.Sound.play(soundNarrator.s51t0007, 1);
                          await ƒS.Speech.tell(characters.narrator, text.Narrator.T0007);

                          await ƒS.Character.hide(characters.rex);
                          ƒS.Speech.clear();
                          ƒS.Speech.hide();

                          return SceneSix();
                        }
                      }
                    }

                    generateStones();

                    function control(_e: KeyboardEvent): void {

                      if (_e.key == "ArrowUp" || _e.key == " ") {
                        ƒS.Sound.play(soundSFX.jump, 1);
                        jump();
                        score ++;
                      }

                    }

                    document.addEventListener("keydown", control);
                    
                    break;

                  case sceneFive1Decision3GetAngry.iSayDoNotGetAngry:
                    console.log("iSayDoNotGetAngry");

                    dataForSave.friendshipScore += 1;

                    ƒS.Character.hide(characters.tilly);
                    ƒS.Character.hide(characters.rex);
                    ƒS.Speech.clear();
                    ƒS.Speech.hide();

                    let sceneSix: ƒS.SceneReturn = SceneSix();
                    return sceneSix;
                    break;
                    
                    
                }
                break;


              case sceneFive1Decision2PlayOrAsk.iSayAskAgain:
                console.log("iSayAskAgain");

                await ƒS.Character.hide(characters.tilly);

                await ƒS.Character.show(characters.tilly, characters.tilly.pose.angry, ƒS.positions.bottomleft);

                ƒS.update();

                ƒS.Sound.play(soundTilly.s51t0001, 1);
                await ƒS.Speech.tell(characters.tilly, text.Tilly.T0001);

                await ƒS.Character.hide(characters.rex);

                ƒS.update();

                await ƒS.Character.animate(characters.rex, characters.rex.pose.sad, getAnimation());

                ƒS.Character.hide(characters.tilly);
                ƒS.Character.hide(characters.rex);
                ƒS.Speech.clear();
                ƒS.Speech.hide();
                
                return SceneSix();
                break;
            }

            break;

        case sceneFive1Decision1Introduce.iSayNo:
            console.log("iSayNo");

            ƒS.Sound.play(soundRex.s51t0002, 1);
            await ƒS.Speech.tell(characters.rex, text.Rex.T0002);

            ƒS.Sound.play(soundRex.s51t0003, 1);
            await ƒS.Speech.tell(characters.rex, text.Rex.T0003);

            ƒS.Sound.play(soundTilly.s51t0001, 1);
            await ƒS.Speech.tell(characters.tilly, text.Tilly.T0001);

            ƒS.Character.hide(characters.tilly);
            ƒS.Character.hide(characters.rex);
            ƒS.Speech.clear();
            ƒS.Speech.hide();
            
            return SceneSix();
            break;
      }
    }
}