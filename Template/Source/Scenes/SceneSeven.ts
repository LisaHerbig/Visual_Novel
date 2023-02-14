namespace TheSearch {
    export async function SceneSeven(): ƒS.SceneReturn {
      console.log("SceneSeven starting");

      let text = {
            Narrator: {
                T0001: "Lucy und Rex gehen den ganzen Weg, den Rex gelaufen ist zurück. Es wird immer dunkler und Rex wird ganz müde..."
            },

            Lucy: {
                T0001: "Und, wie schmeckt es?",
                T0002: "Na klar, ich kann dir alles zeigen.",
                T0003: "Aber natürlich, was ist das denn für eine Frage! Ich kümmere mich sehr gerne um dich Rex.", 
                T0004: "Nein... Damit kann ich leider nicht dienen. Wieso bist du denn so ausgehungert und alleine unterwegs?",
                T0005: "Oh nein Rex, das tut mir leid... Ich kenne deine Mama leider nicht, aber ich helfe dir sehr gerne. Es wird auch schon dunkel, da sollte ein kleiner Dino nicht alleine durch die Gegend laufen.",
                T0006: "Ich glaube ich weiß wo. Komm mit, wir bringen dich nach Hause.",
                T0007: "Wo hast du sie denn das letzte mal gesehen? Am besten gehen wir dorthin zurück, wo ihr das letzte mal zusammen wart. Daran erinnert sich deine Mama bestimmt auch."
            },

            Rex: {
                T0001: "Mhm, das schmeckt super! Danke! Kannst du mir zeigen was da alles drin ist?",
                T0002: "Super! Darf ich dann bei dir bleiben? Ich habe meine Mama verloren...",
                T0003: "Danke! Und auch danke an dich, dass du mich so sehr bei meiner Suche unterstützt hast. Ich habe dank dir jetzt ein Zuhause gefunden!",
                T0004: "Bäh! Das schmeckt mir ja so gar nicht. Das ist mir zu viel Grünzeugs. Hast du auch ein saftiges Steak?",
                T0005: "Ich habe meine Mama verloren und bin auf der Suche nach ihr. Weißt du wo sie sein könnte? Kannst du mir helfen?",
                T0006: "Bei mir zuhause, bei den gelben Bergen."
            }
        };

     
      await ƒS.Location.show(locations.L_DiplodoNight);

      await ƒS.Character.show(characters.rex, characters.rex.pose.happy, ƒS.positions.bottomright);
      await ƒS.Character.show(characters.lucy, characters.lucy.pose.happy, ƒS.positions.bottomleft);

      await ƒS.update(transition.dayNight.duration, transition.dayNight.alpha, transition.dayNight.edge);

      ƒS.Sound.play(soundLucy.s7t0001, 1);
      await ƒS.Speech.tell(characters.lucy, text.Lucy.T0001);

      /** DECISION */
      let sceneSevenDecision1Tasty = {
        iSayTasty: "Lecker",
        iSayBah: "Nicht gut"
      };

      let dialogueElementS7D1Tasty = await ƒS.Menu.getInput(sceneSevenDecision1Tasty, "choicesCssClass");

      switch (dialogueElementS7D1Tasty) {

        case sceneSevenDecision1Tasty.iSayTasty:
            console.log("Delicious");

            ƒS.Sound.play(soundRex.s7t0001, 1);
            await ƒS.Speech.tell(characters.rex, text.Rex.T0001);

            ƒS.Sound.play(soundLucy.s7t0002, 1);
            await ƒS.Speech.tell(characters.lucy, text.Lucy.T0002);

            ƒS.Sound.play(soundRex.s7t0002, 1);
            await ƒS.Speech.tell(characters.rex, text.Rex.T0002);

            ƒS.Sound.play(soundLucy.s7t0003, 1);
            await ƒS.Speech.tell(characters.lucy, text.Lucy.T0003);

            ƒS.Sound.play(soundRex.s7t0003, 1);
            await ƒS.Speech.tell(characters.rex, text.Rex.T0003);

            ƒS.Speech.clear();
            ƒS.Speech.hide();
            ƒS.Character.hide(characters.rex);
            ƒS.Character.hide(characters.lucy);

            if (dataForSave.friendshipScore >= 1) {

              console.log(dataForSave.friendshipScore);
              
              return SpecialScene();

            } else {
              console.log(dataForSave.friendshipScore);
              

              return End();

            }
            break;

        case sceneSevenDecision1Tasty.iSayBah:
            console.log("Bäh!");

            await ƒS.Character.hide(characters.rex);
            await ƒS.Character.show(characters.rex, characters.rex.pose.disgusted, ƒS.positions.bottomright);

            ƒS.update();

            ƒS.Sound.play(soundRex.s7t0004, 1);
            await ƒS.Speech.tell(characters.rex, text.Rex.T0004);

            ƒS.Sound.play(soundLucy.s7t0004, 1);
            await ƒS.Speech.tell(characters.lucy, text.Lucy.T0004);

            ƒS.Sound.play(soundRex.s7t0005, 1);
            await ƒS.Speech.tell(characters.rex, text.Rex.T0005);
            
            ƒS.Sound.play(soundLucy.s7t0005, 1);
            await ƒS.Speech.tell(characters.lucy, text.Lucy.T0005);
            await ƒS.Character.hide(characters.rex);

            await ƒS.Character.show(characters.rex, characters.rex.pose.sad, ƒS.positions.bottomright);

            ƒS.Sound.play(soundLucy.s7t0005_2, 1);
            await ƒS.Speech.tell(characters.lucy, text.Lucy.T0007);

            ƒS.Sound.play(soundRex.s7t0006, 1);
            await ƒS.Speech.tell(characters.rex, text.Rex.T0006);

            ƒS.Sound.play(soundLucy.s7t0006, 1);
            await ƒS.Speech.tell(characters.lucy, text.Lucy.T0006);

            ƒS.Sound.play(soundNarrator.s7t0001, 1);
            await ƒS.Speech.tell(characters.narrator, text.Narrator.T0001);

            ƒS.Speech.clear();
            ƒS.Speech.hide();
            ƒS.Character.hide(characters.rex);
            ƒS.Character.hide(characters.lucy);

            return SceneEight();
            break;  
      }
    }
}