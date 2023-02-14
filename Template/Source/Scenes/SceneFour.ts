namespace TheSearch {
    export async function SceneFour(): ƒS.SceneReturn {
      console.log("SceneThree starting");

      let text = {
        Narrator: {
            T0001: "Und so macht sich Rex weiter auf die Suche nach seiner Mama... ",
            T0002: "Als er die roten Hügel endlich überquert hat, blickt er auf einen kleinen Weg vor sich, der durch eine dunkle Schlucht führt...",
            T0003: "Interessiert schaut er auf den Boden...",
            T0004: "Glücklich und voller Vorfreude, seine Mama bald wieder zu sehen hüpft Rex den engen Weg durch die Schlucht entlang.",
            T0005: "Geknickt und von der dunklen, großen Schlucht eingeschüchtert geht der kleine Dinosaurier an der Schlucht vorbei."
        },

        Rex: {
            T0001: dataForSave.nameProtagonist + ", was ist das?",
            T0002: "Denen gehen wir jetzt nach, komm mit " + dataForSave.nameProtagonist,
            T0003: "Schade..."
        }
      };

      await ƒS.Location.show(locations.L_Steps);

      ƒS.Character.hide(characters.elena);

      await ƒS.Character.show(characters.rex, characters.rex.pose.happy, ƒS.positions.bottomright); 

      await ƒS.update(transition.steps.duration, transition.steps.alpha, transition.steps.edge);

      ƒS.Sound.play(soundNarrator.s4t0001, 1);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0001);

      ƒS.Sound.play(soundNarrator.s4t0002, 1);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0002);

      ƒS.Sound.play(soundNarrator.s4t0003, 1);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0003);

      await ƒS.Location.show(locations.L_Steps_Zoom);

      await ƒS.update(transition.mom.duration, transition.mom.alpha, transition.mom.edge);

      ƒS.Sound.play(soundRex.s4t0001, 1);
      await ƒS.Speech.tell(characters.rex, text.Rex.T0001);

      /**DECISION */

      let sceneFourDecision1WhatIsThat = {
        iSaySteps: "Sieht aus wie Dinospuren",
        iSayDirt: "Nur Dreck"
      };

      let dialogueElementS4D1WhatIsThat = await ƒS.Menu.getInput(sceneFourDecision1WhatIsThat, "choicesCssClass");

      switch (dialogueElementS4D1WhatIsThat) {

        case sceneFourDecision1WhatIsThat.iSaySteps:
            console.log("iSaySteps");

            ƒS.Sound.play(soundRex.s4t0002, 1);
            await ƒS.Speech.tell(characters.rex, text.Rex.T0002);

            ƒS.Sound.play(soundRex.s4tPfeifen, 1);

            ƒS.Sound.play(soundNarrator.s4t0004, 1);
            await ƒS.Speech.tell(characters.narrator, text.Narrator.T0004);

            ƒS.Speech.hide();
            ƒS.Character.hide(characters.rex);
            //ƒS.Character.hide(characters.elena);
            ƒS.Speech.clear();
            ƒS.update();

            //let sceneFiveA: ƒS.SceneReturn = SceneFiveA();
            return SceneFiveA();
            break;
        
        case sceneFourDecision1WhatIsThat.iSayDirt:
            console.log("iSayDirt");

            ƒS.Sound.play(soundRex.s4t0003, 1);
            await ƒS.Speech.tell(characters.rex, text.Rex.T0003);

            ƒS.Sound.play(soundNarrator.s4t0005, 1);
            await ƒS.Speech.tell(characters.narrator, text.Narrator.T0005);

            ƒS.Speech.hide();
            ƒS.Character.hide(characters.rex);
            //ƒS.Character.hide(characters.elena);
            ƒS.Speech.clear();
            ƒS.update();

            //let sceneFive1: ƒS.SceneReturn = SceneFive1();
            return SceneFive1();
            break;
      }
    }
}