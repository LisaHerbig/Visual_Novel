namespace Template {
    export async function SceneEight(): ƒS.SceneReturn {
      console.log("SceneSeven starting");

      let text = {
            Narrator: {
                T0001: "Am nächsten Morgen erzählt Rex seiner Mama von seinem Abenteuer. Sie verabschieden Lucy und vereinbaren ein neues Treffen mit ihr. Danke, dass du Rex so unterstützt hast!",
                T0002: "Was ist denn Rex?",
                T0003: "..."
            },

            Lucy: {
                T0001: "Halte durch Rex, gleich sind wir da...",
                T0002: "Ich gehe dann mal wieder nach Hause...",
                T0003: "Sicher? Ich meine, zuhause wartet nichts auf mich, ich denke das lässt sich einrichten. Danke!"
            },

            Rex: {
                T0001: "Mama? Mama! Bist du das?"
            },

            Mama: {
                T0001: "Rex mein Schatz da bist du ja! Ich habe mir schon solche Sorgen gemacht! Was machst du nur für Sachen. Es tut mir so leid, dass ich dein Schlüpfen verpasst habe, ich war beim Essen besorgen... Du musst ja ganz ausgehungert sein! Hier, iss mein Kind. Und dann ab ins Bett! Morgen erzählst du mir von deinem Abenteuer. Mache das nie wieder mein Kleinder, hörst du?!",
                T0002: "Ich bin dir so dankbar, dass du mein Baby sicher nach Hause gebracht hast! Wie kann ich das nur jemals wieder gut machen? Bleibe doch hier, es ist schon so spät.",
                T0003: "Ich danke dir!"
            }
        };

      await ƒS.Location.show(locations.HomeNight);

      await ƒS.update(transition.stepsTogether.duration, transition.stepsTogether.alpha, transition.stepsTogether.edge);

      ƒS.Sound.play(soundLucy.s8t0001, 1);
      await ƒS.Speech.tell(characters.lucy, text.Lucy.T0001);

      ƒS.Sound.play(soundRexMom.s8schluchz, 1);
      ƒS.Sound.play(soundRexMom.s8wein, 1);

      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0003);

      ƒS.Sound.play(soundRex.s8t0001, 1);
      await ƒS.Speech.tell(characters.rex, text.Rex.T0001);

      await ƒS.Character.show(characters.mama, characters.mama.pose.happy, ƒS.positions.bottomleft);

      ƒS.update();

      ƒS.Sound.play(soundRexMom.s8t0001, 1);
      await ƒS.Speech.tell(characters.mama, text.Mama.T0001);

      await ƒS.Character.show(characters.rex, characters.rex.pose.happy, ƒS.positions.bottomright);

      await ƒS.Character.hide(characters.mama);

      await ƒS.Character.show(characters.lucy, characters.lucy.pose.sad, ƒS.positions.bottomleft);

      await ƒS.Character.show(characters.mama, characters.mama.pose.happy, ƒS.positions.bottomcenter);

      ƒS.update();

      ƒS.Sound.play(soundLucy.s8t0002, 1);
      await ƒS.Speech.tell(characters.lucy, text.Lucy.T0002);

      ƒS.Sound.play(soundRexMom.s8t0002, 1);
      await ƒS.Speech.tell(characters.mama, text.Mama.T0002);

      await ƒS.Character.hide(characters.lucy);

      await ƒS.Character.show(characters.lucy, characters.lucy.pose.happy, ƒS.positions.bottomleft);

      ƒS.update();

      ƒS.Sound.play(soundLucy.s8t0003, 1);
      await ƒS.Speech.tell(characters.lucy, text.Lucy.T0003);

      ƒS.Sound.play(soundRexMom.s8t0003, 1);
      await ƒS.Speech.tell(characters.mama, text.Mama.T0003);

      await ƒS.Character.hide(characters.mama);
      await ƒS.Character.hide(characters.lucy);

      await ƒS.Location.show(locations.Home_Hatched);

      await ƒS.update(transition.dayNight.duration, transition.dayNight.alpha, transition.dayNight.edge);

      ƒS.Sound.play(soundNarrator.s8t0001, 1);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0001);

      if (dataForSave.friendshipScore >= 1) {

          await ƒS.Character.animate(characters.rex, characters.rex.pose.happy, special());

          ƒS.Sound.play(soundNarrator.s8t0002, 1);

          await ƒS.Speech.tell(characters.narrator, text.Narrator.T0002);

          return SpecialScene();
      }
        else {

            return End();

          }
      
    }
}
