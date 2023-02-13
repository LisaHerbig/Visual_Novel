namespace Template {
    export async function SceneFiveB(): ƒS.SceneReturn {
      console.log("SceneThree starting");

      let text = {
        Narrator: {
            T0001: "Und so machen sich Archie und Rex auf, den Spuren hinterher bis sich diese im Sand verlaufen..."
        },

        Archie: {
            T0001: "So kleiner, das war's wohl. Aber Eltern sind auch nicht immer so super. Und wenn deine Mama dich sowieso schon alleine gelassen hat, vielleicht ist es dann besser wenn du sie gar nicht erst findest...",
            T0002: "So viele Regeln und Gesetzte - die gibt's bei mir nicht. Du kannst gerne hierbleiben und wir können gemeinsam Unheil anrichten.",
            T0003: "Pf, dann mach doch dein eigenes Ding! Muss ich schon nicht auf eine Nervensäge aufpassen.",
            T0004: "Super! Warte, lass mich noch kurz was holen...",
            T0005: "So, jetzt siehst du auch aus wie ein richtiger Schurke Rex!"
        }
      };

      await ƒS.Location.show(locations.L_Archae);

      await ƒS.Character.show(characters.rex, characters.rex.pose.happy, ƒS.positions.bottomright);

      await ƒS.Character.show(characters.archie, characters.archie.pose.happy, ƒS.positions.bottomleft);

      await ƒS.update(transition.wArchie.duration, transition.wArchie.alpha, transition.wArchie.edge);

      ƒS.Sound.play(soundNarrator.s5Bt0001, 1);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0001);

      ƒS.Sound.play(soundArchie.s5Bt0001, 1);
      await ƒS.Speech.tell(characters.archie, text.Archie.T0001);

      ƒS.Sound.play(soundArchie.s5Bt0002, 1);
      await ƒS.Speech.tell(characters.archie, text.Archie.T0002);

      /**DECISION */
      let sceneFiveBDecision1Stay = {
        iSayStay: "Bei Archie bleiben",
        iSayGo: "Gehen"
      };

      let dialogueElementS5BD1Stay = await ƒS.Menu.getInput(sceneFiveBDecision1Stay, "choicesCssClass");

      switch (dialogueElementS5BD1Stay) {

        case sceneFiveBDecision1Stay.iSayStay:
            console.log("iSayStay");

            dataForSave.friendshipScore -= 1;

            ƒS.Sound.play(soundArchie.s5Bt0004, 1);
            await ƒS.Speech.tell(characters.archie, text.Archie.T0004);

            ƒS.Character.hide(characters.rex);

            await ƒS.Character.show(characters.rex, characters.rex.pose.bad, ƒS.positions.bottomright);

            ƒS.update();

            ƒS.Sound.play(soundArchie.s5Bt0005, 1);
            await ƒS.Speech.tell(characters.archie, text.Archie.T0005);
            
            ƒS.Speech.hide();
            ƒS.Character.hide(characters.rex);
            ƒS.Character.hide(characters.archie);
            ƒS.Speech.clear();
            ƒS.update();

            if (dataForSave.friendshipScore >= 1) {
              return SpecialScene();
            } else {
              return End();
            }
            break;

        case sceneFiveBDecision1Stay.iSayGo:
            console.log("iSayGo");

            ƒS.Character.hide(characters.archie);

            await ƒS.Character.show(characters.archie, characters.archie.pose.angry, ƒS.positions.bottomleft);

            ƒS.update();

            ƒS.Sound.play(soundArchie.s5Bt0003, 1);
            await ƒS.Speech.tell(characters.archie, text.Archie.T0003);

            ƒS.Speech.hide();
            ƒS.Character.hide(characters.rex);
            ƒS.Character.hide(characters.archie);
            ƒS.Speech.clear();
            ƒS.update();

            return SceneSix();
            break;
      }
    }
}