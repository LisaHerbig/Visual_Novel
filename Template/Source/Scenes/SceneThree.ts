namespace TheSearch {
    export async function SceneThree(): ƒS.SceneReturn {
      console.log("SceneThree starting");

      let text = {
        Narrator: {
            T0001: "Und so macht sich Rex auf den Weg... ",
            T0002: "Über Stock und Stein, Sand und Wiese, und das ganz alleine... ",
            T0003: "Auf einer Lichtung erkennt er drei Dino-Kinder die ausgelassen miteinander spielen... ",
            T0004: "Klicke auf die Dinos um sie zu fangen, aber beeile dich, du hast nur 10 Sekunden Zeit!",
            T0005: "..."
        },
        Rex: {
            T0001: dataForSave.nameProtagonist + ", soll ich fragen ob ich mitspielen darf?",
            T0002: "Oh ja, gerne!",
            T0003: "Ne danke, ich suche jemanden...",
            T0004: "Hallo... darf ich vielleicht auch mitspielen?",
            T0005: "Ich bin Rex. Freut mich dich kennenzulernen.",
            T0006: "Schade... Mach's gut!"
        },
        Elena: {
            T0001: "Hey! Wer bist du? möchtest du mitspielen?",
            T0002: "Dann viel Erfolg!",
            T0003: "Hey, na klaro!",
            T0004: "Ich bin übrigens Elena. Ich bin ein Dilophosaurus und lebe in der Unterjura-Zeit. Meine absolute Leibspeise ist Fisch. Ich werde bis zu 2,5 Meter groß und 500kg schwer. Ganz oft werde ich auch Zweikamm-Echse genannt, weil ich zwei große Knochenkämme auf der Schnauze habe. Ich in sehr leicht gebaut und deshalb schnell und wendig.",
            T0005: "Wer bist du?",
            T0006: "Glückwunsch Rex, das war wirklich klasse!",
            T0007: "Das war knapp! Beim nächsten Mal klappt es bestimmt.",
            T0008: "Wir müssen los Rex, es hat wirklich Spaß gemacht! Mach's gut!",
            T0009: "Ahhhh Hilfe!!!" 
        }
      };

      await ƒS.Location.show(locations.L_Dilo);

      await ƒS.Character.show(characters.rex, characters.rex.pose.happy, ƒS.positions.bottomright);

      await ƒS.update(transition.steps.duration, transition.steps.alpha, transition.steps.edge);

      ƒS.Sound.play(soundNarrator.s3t0001, 1);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0001);

      ƒS.Sound.play(soundNarrator.s3t0002, 1);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0002);

      ƒS.Sound.play(soundNarrator.s3t0003, 1);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0003);

      ƒS.Sound.play(soundRex.s3t0001, 1);
      await ƒS.Speech.tell(characters.rex, text.Rex.T0001);

      /** DECISION */
      /** DO YOU PLAY WITH DINOS? */
      let sceneThreeDecision1PlayRex = {
        iSayNo: "Nein",
        iSayYes: "Ja",
        iSayJustPlay: "Einfach mitspielen"
      };

      let dialogueElementS3D1Play = await ƒS.Menu.getInput(sceneThreeDecision1PlayRex, "choicesCssClass");

      switch (dialogueElementS3D1Play) {

        case sceneThreeDecision1PlayRex.iSayNo:
          console.log("iSayNo");

          await ƒS.Character.show(characters.elena, characters.elena.pose.happy, ƒS.positions.bottomleft);

          ƒS.update();
        
          ƒS.Sound.play(soundElena.s3t0001, 1);
          await ƒS.Speech.tell(characters.elena, text.Elena.T0001);

          ƒS.Sound.play(soundRex.s3t0003, 1);
          await ƒS.Speech.tell(characters.rex, text.Rex.T0003);

          ƒS.Sound.play(soundElena.s3t0002, 1);
          await ƒS.Speech.tell(characters.elena, text.Elena.T0002);

          ƒS.Speech.hide();
          ƒS.Character.hide(characters.rex);
          ƒS.Character.hide(characters.elena);
          ƒS.Speech.clear();
          ƒS.update();

          let nextScene: ƒS.SceneReturn = SceneFour();
          return nextScene;

          break;

        case sceneThreeDecision1PlayRex.iSayYes:
          console.log("iSayYes");

          await ƒS.Character.show(characters.elena, characters.elena.pose.happy, ƒS.positions.bottomleft);
          ƒS.update();

          /** MINI GAME 2 */
          //Create Divs with Dino png as Background
          let divSibling1: HTMLElement = document.createElement("div");
          divSibling1.setAttribute("class", "Sibling1");
          document.body.appendChild(divSibling1);
          let positionXSibling1: number = 50;
          let positionYSibling1: number = 20;
          divSibling1.style.left = positionXSibling1 + "%";
          divSibling1.style.top = positionYSibling1 + "%";

          let divSibling2: HTMLElement = document.createElement("div");
          divSibling2.setAttribute("class", "Sibling2");
          document.body.appendChild(divSibling2);
          let positionXSibling2: number = 40;
          let positionYSibling2: number = -15;
          divSibling2.style.left = positionXSibling2 + "%";
          divSibling2.style.top = positionYSibling2 + "%";
          
          let divSibling3: HTMLElement = document.createElement("div");
          divSibling3.setAttribute("class", "Sibling3");
          document.body.appendChild(divSibling3);
          let positionXSibling3: number = 30;
          let positionYSibling3: number = -40;
          divSibling3.style.left = positionXSibling3 + "%";
          divSibling3.style.top = positionYSibling3 + "%";

          ƒS.Sound.play(soundRex.s3t0004, 1);
          await ƒS.Speech.tell(characters.rex, text.Rex.T0004);

          ƒS.Sound.play(soundElena.s3t0003, 1);
          await ƒS.Speech.tell(characters.elena, text.Elena.T0003);

          ƒS.Sound.play(soundElena.s3t0004, 1);
          await ƒS.Speech.tell(characters.elena, text.Elena.T0004);

          ƒS.Inventory.add(items.elena);

          ƒS.update();

          ƒS.Text.addClass("novelPageElena");
          await ƒS.Text.print("");

          ƒS.Sound.play(soundElena.s3t0005, 1);
          await ƒS.Speech.tell(characters.elena, text.Elena.T0005);
          
          ƒS.Sound.play(soundRex.s3t0005, 1);
          await ƒS.Speech.tell(characters.rex, text.Rex.T0005);
          
          ƒS.Sound.play(soundNarrator.s3Game2Intro, 1);
          await ƒS.Speech.tell(characters.narrator, text.Narrator.T0004);

          ƒS.Character.hide(characters.rex);
          ƒS.Character.hide(characters.elena);
          ƒS.update();

          let speech: HTMLElement = document.querySelector("speech");
          speech.setAttribute("class", "hide");

          let save: HTMLElement = document.querySelector("#save");
          save.setAttribute("class", "hide");

          let load: HTMLElement = document.querySelector("#load");
          load.setAttribute("class", "hide");

          let close: HTMLElement = document.querySelector("#close");
          close.setAttribute("class", "hide");

          let inventory: HTMLElement = document.querySelector("#inventory");
          inventory.setAttribute("class", "hide");

          document.getElementsByName("friendshipScore").forEach(meterStuff => meterStuff.hidden = true);
          document.getElementById("scoreForFriendshipRex").setAttribute("class", "hide");
          
          divSibling1.addEventListener("pointerdown", handleClick);
          divSibling2.addEventListener("pointerdown", handleClick);
          divSibling3.addEventListener("pointerdown", handleClick);
          
          setTimeout(timeIsUp, 10000);
          
          //Move Dinos
          
          let interval = setInterval(timer, 500);
          
          function timer(): void {

            divSibling1.style.left = getRandom(5, 95) + "%";
            divSibling2.style.left = getRandom(5, 95) + "%";
            divSibling3.style.left = getRandom(5, 95) + "%";

          }

          let caught: number [] = [];

          async function handleClick(_event: Event): Promise <ƒS.SceneReturn> {
            console.log("clickedMe");
            ƒS.Sound.play(soundSFX.catchCook, 1);

            let target = _event.target as HTMLElement;
            target.removeEventListener("pointerdown", handleClick);
            //target.removeEventListener("pointerdown", handleClick);

            target.style.backgroundImage = "url(./Images/GUI/Empty.png)";

            caught.push(1);

            if (caught.length >= 3) {

              clearInterval(interval);

              document.body.removeChild(divSibling1);
              document.body.removeChild(divSibling2);
              document.body.removeChild(divSibling3);

              speech.classList.remove("hide");
              save.classList.remove("hide");
              load.classList.remove("hide");
              close.classList.remove("hide");
              inventory.classList.remove("hide");

              document.getElementsByName("friendshipScore").forEach(meterStuff => meterStuff.hidden = false);
              document.getElementById("scoreForFriendshipRex").classList.remove("hide");

              dataForSave.friendshipScore += 5;

              await ƒS.Character.show(characters.elena, characters.elena.pose.happy, ƒS.positions.bottomleft);
              await ƒS.Character.show(characters.rex, characters.rex.pose.happy, ƒS.positions.bottomright);
              ƒS.update();

              ƒS.Sound.play(soundElena.s3t0006, 1);
              await ƒS.Speech.tell(characters.elena, text.Elena.T0006);

              //Sound plays Elenas Mom calls kids
              ƒS.Sound.play(soundElenasMom.s3t0001, 1);
              await ƒS.Speech.tell(characters.narrator, text.Narrator.T0005);

              ƒS.Sound.play(soundElena.s3t0008, 1);
              await ƒS.Speech.tell(characters.elena, text.Elena.T0008);

              ƒS.Sound.play(soundRex.s3t0006, 1);
              await ƒS.Speech.tell(characters.rex, text.Rex.T0006);

              ƒS.Speech.hide();
              ƒS.Character.hide(characters.rex);
              ƒS.Character.hide(characters.elena);
              ƒS.Speech.clear();
              ƒS.update();

              return SceneFour();

            }
            
          }


          async function timeIsUp(): Promise<ƒS.SceneReturn> {

            clearInterval(interval);

            document.body.removeChild(divSibling1);
            document.body.removeChild(divSibling2);
            document.body.removeChild(divSibling3);

            speech.classList.remove("hide");
            save.classList.remove("hide");
            load.classList.remove("hide");
            close.classList.remove("hide");
            inventory.classList.remove("hide");

            document.getElementsByName("friendshipScore").forEach(meterStuff => meterStuff.hidden = false);
            document.getElementById("scoreForFriendshipRex").classList.remove("hide");

            await ƒS.Character.show(characters.elena, characters.elena.pose.happy, ƒS.positions.bottomleft);
            await ƒS.Character.show(characters.rex, characters.rex.pose.happy, ƒS.positions.bottomright);
            ƒS.update();

            ƒS.Sound.play(soundElena.s3t0007, 1);
            await ƒS.Speech.tell(characters.elena, text.Elena.T0007);

            //Sound plays Elenas Mom calls kids
            ƒS.Sound.play(soundElenasMom.s3t0001, 1);
            await ƒS.Speech.tell(characters.narrator, text.Narrator.T0005);

            ƒS.Sound.play(soundElena.s3t0008, 1);
            await ƒS.Speech.tell(characters.elena, text.Elena.T0008);

            ƒS.Sound.play(soundRex.s3t0006, 1);
            await ƒS.Speech.tell(characters.rex, text.Rex.T0006);
            
            dataForSave.friendshipScore -= 5;

            ƒS.Speech.hide();
            ƒS.Character.hide(characters.rex);
            ƒS.Character.hide(characters.elena);
            ƒS.Speech.clear();
            ƒS.update();

            return SceneFour();
          }

          
          break;


          case sceneThreeDecision1PlayRex.iSayJustPlay:
          console.log("iSayJustPlay");

          dataForSave.friendshipScore -= 1;

          await ƒS.Character.show(characters.elena, characters.elena.pose.scared, ƒS.positions.bottomleft);
          ƒS.update();

          ƒS.Sound.play(soundElena.s3t0009, 1);
          await ƒS.Speech.tell(characters.elena, text.Elena.T0009);

          await ƒS.Character.hide(characters.rex);
          await ƒS.Character.show(characters.rex, characters.rex.pose.sad, ƒS.positions.bottomright);
          ƒS.update();

          await ƒS.Character.animate(characters.elena, characters.elena.pose.scared, getAnimationElena());

          ƒS.Speech.hide();
          ƒS.Character.hide(characters.rex);
          ƒS.Speech.clear();
          
          let sceneFour: ƒS.SceneReturn = SceneFour();
          return sceneFour;
          break;
          
      }
      
    }
}