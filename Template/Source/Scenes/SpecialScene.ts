namespace Template {
    export async function SpecialScene(): ƒS.SceneReturn {
      console.log("SceneSeven starting");

      let text = {
        Narrator: {
            T0001: "Was ist denn Rex?"
        },

        Rex: {
            T0001: "Ich wollte noch fragen, magst du mein Freund sein?",
            T0002: "Yuhuuu! Dann machs gut und bis hoffentlich ganz bald!",
            T0003: "Schade... Machs gut."
        }
      };

      ƒS.Sound.play(soundRex.specialT0001, 1);
      await ƒS.Speech.tell(characters.rex, text.Rex.T0001);

      /** DECISION */
      let specialSceneDecision1Friends = {
        iSayYes: "Ja",
        iSayNo: "Nein"
      };

      let dialogueElementSpecialD1Friends = await ƒS.Menu.getInput(specialSceneDecision1Friends, "choicesCssClass");

      switch (dialogueElementSpecialD1Friends) {

        case specialSceneDecision1Friends.iSayYes:
            console.log("Friends");

            dataForSave.friendshipScore = 18;

            ƒS.Sound.play(soundRex.specialT0002, 1);
            await ƒS.Speech.tell(characters.rex, text.Rex.T0002);

            return End();
            break; 

        case specialSceneDecision1Friends.iSayNo:
            console.log("noFriends");

            dataForSave.friendshipScore = -18;

            ƒS.Sound.play(soundRex.specialT0003, 1);
            await ƒS.Speech.tell(characters.rex, text.Rex.T0003);

            return End();

            break;
            
            
      }
    
    }
}
