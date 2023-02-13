namespace Template {
    export async function SceneOne(): ƒS.SceneReturn {
      console.log("SceneOne starting");

      let text = {

        Narrator: {
          T0001: "Wir befinden und im Erdmittelalter, ungefähr 245 Millionen Jahre in der Vergangenheit...",
          T0002: "Es gibt nur einen einzigen Kontinent, Pangaea...",
          T0003: "Aus diesem Urkontinent entwickelten sich über die Zeit unsere heutigen, sieben Kontinente:",
          T0004: "Nord- und Südamerika, Asien, Europa, Afrika, Australien und die Arktis. ",
          T0005: "Das Klima ist schön warm und feucht...",
          T0006: "Hier sehen wir die Eier eines Tyrannosaurus Rex...",
          T0007: "Oh, da sind ja noch gar nicht alle geschlüpft...",
          T0008: "Der Kleine in der Mitte scheint wohl Schwierigkeiten zu haben... Wo ist denn seine Mama?",
          T0009: "Magst du dem kleinen Dino helfen?"
          },

          Rex: {
            T0001: "Danke!",
            T0001_1: "Hallo, ich heiße Rex",
            T0002: "Ich übrigens bin Rex.",
            T0003: "Ich bin ein Tyrannosaurus Rex und lebe in der Oberkreide-Zeit. Ich werde bis zu 6m. groß und mal bis zu 9 Tonnen schwer. Mein Lieblingsessen ist natürlich Fleisch. Vom Typ her bin ich eher ein Einzelgänger. Mit meinen bis zu 23cm langen Zähnen kann ich ganz schön zubeißen. Bis zu 5 Tonnen Druck hat mein Biss auf nur einem Zahn! ",
            T0004: "Aber genug von mir - wer bist denn du?" + "<br>",
            T0005: "Das ist aber ein schöner Name!"
          },

          Instruction: {
            T0001: "Klicke so lange auf die Eier, bis der Dino schlüpft."
          }

        };

      
      document.getElementsByName("friendshipScore").forEach(meterStuff => meterStuff.hidden = true);
      
      showStart();
      
      await ƒS.Location.show(locations.Home);

      
      await ƒS.update(transition.start.duration, transition.start.alpha, transition.start.edge);
      
      document.getElementById("save").classList.remove("hide");
      document.getElementById("load").classList.remove("hide");
      document.getElementById("close").classList.remove("hide");
      document.getElementById("inventory").classList.remove("hide");
      
      ƒS.Sound.play(soundNarrator.s1t0001, 1);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0001);

      ƒS.Sound.play(soundNarrator.s1t0002, 1);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0002);

      ƒS.Sound.play(soundNarrator.s1t0003, 1);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0003);

      ƒS.Sound.play(soundNarrator.s1t0004, 1);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0004);

      ƒS.Sound.play(soundNarrator.s1t0005, 1);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0005);

      ƒS.Sound.play(soundNarrator.s1t0006, 1);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0006);
      
      
      ƒS.Sound.play(soundNarrator.s1t0007, 1);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0007);
      
      jitter();

      ƒS.Sound.play(soundNarrator.s1t0008, 1);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0008);

      ƒS.Sound.play(soundNarrator.s1t0009, 1);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0009);


      /**DECISION HELP REX? */
      let sceneOneDecision1 = {
        iSayYes: "Ja",
        iSayNo: "Nein"
      };
      
      //playSounds();

      let dialogueElementS1D1 = await ƒS.Menu.getInput(sceneOneDecision1, "choicesCssClass");
      
      switch (dialogueElementS1D1) {

        case sceneOneDecision1.iSayYes:
          console.log("S1D1 Yes");

          dataForSave.friendshipScore += 1;

          dataForSave.random = getRandom(2, 30);
          
          helpRex();

          break;

          case sceneOneDecision1.iSayNo:
            console.log("S1D1 No");

            dataForSave.friendshipScore -= 1;
            
            hatched();

            break;
      }

      
      
      async function helpRex(): Promise<void> {
        console.log("ISayYes&helpRex");
        
        let text = {
          Instruction: {
            T0001: "Klicke so lange auf die Eier, bis der Dino schlüpft."
          }
        };
        
        let scene = document.querySelector("scene");
        scene.addEventListener("pointerdown", counting);

        ƒS.Sound.play(soundNarrator.s1Game1Intro, 1);
        await ƒS.Speech.tell(characters.narrator, text.Instruction.T0001);

      }
      
      async function counting(): Promise<void> {
        console.log("counting");
        ƒS.Sound.play(soundSFX.eggs, 1);

        dataForSave.count ++;

        if (dataForSave.count >= dataForSave.random) {
          console.log("Rex is here!");

          dataForSave.count = 0;

          let scene = document.querySelector("scene");
          scene.removeEventListener("pointerdown", counting);

          dataForSave.bool = true;

          hatched();
          
        }
      }
      
      async function hatched(): ƒS.SceneReturn {
        
        await ƒS.Location.show(locations.Home_Hatched),
        
        await ƒS.update(transition.start.duration, transition.start.alpha, transition.start.edge);
        
        await ƒS.Character.show(characters.rex, characters.rex.pose.happy, ƒS.positions.bottomcenter);
        
        ƒS.update();
        
        if (dataForSave.bool == true) {

          document.getElementsByName("friendshipScore").forEach(meterStuff => meterStuff.hidden = false);
          document.getElementById("scoreForFriendshipRex").classList.remove("hide");

          ƒS.Sound.play(soundRex.t0001Rex, 1);
          await ƒS.Speech.tell(characters.rex, text.Rex.T0001);
          
          ƒS.Sound.play(soundRex.t0002Rex, 1);
          await ƒS.Speech.tell(characters.rex, text.Rex.T0002);

          dataForSave.bool = false;
          
        } else {

          document.getElementsByName("friendshipScore").forEach(meterStuff => meterStuff.hidden = false);
          document.getElementById("scoreForFriendshipRex").classList.remove("hide");

          ƒS.Sound.play(soundRex.t0001_1Rex, 1);
          await ƒS.Speech.tell(characters.rex, text.Rex.T0001_1);

        }
        
        
        ƒS.Sound.play(soundRex.t0003Rex, 1);
        await ƒS.Speech.tell(characters.rex, text.Rex.T0003);

        ƒS.Inventory.add(items.rex);

        ƒS.update();

        ƒS.Text.addClass("novelPageRex");
        await ƒS.Text.print("");

        
        ƒS.Sound.play(soundRex.t0004Rex, 1);
        await ƒS.Speech.tell(characters.rex, text.Rex.T0004);
        
        dataForSave.nameProtagonist = await ƒS.Speech.getInput();
        
        ƒS.Sound.play(soundRex.t0005Rex, 1);
        await ƒS.Speech.tell(characters.rex, text.Rex.T0005);

        ƒS.Speech.clear();
        ƒS.Speech.hide();
        ƒS.Character.hide(characters.rex);

        return SceneTwo();

      }
    }
  }
    