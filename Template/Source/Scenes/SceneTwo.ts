namespace TheSearch {
    export async function SceneTwo(): ƒS.SceneReturn {
      console.log("SceneTwo starting");

      let text = {
        Narrator: {
            T0001: "Rex schaut sich um. Er stellt fest, dass er ganz alleine ist.",
            T0002: "..."
        },
        Rex: {
            T0001: dataForSave.nameProtagonist + ", hast du meine Mama gesehen?",
            T0002: "Das ist gemein!",
            T0003: "Ist schon ok",
            T0004: "Oh schade, dann muss ich sie suchen!",
            T0005: "Yippie!! Kannst du mir sagen wo sie ist?",
            T0006: "Hilfst du mir suchen?",
            T0007: "Wie toll, danke! Lass uns gemeinsam ein Abenteuer erleben!",
            T0008: "Dann mache ich das halt alleine!"
        }
      };

      await ƒS.Location.show(locations.Home_Hatched);

      await ƒS.Character.show(characters.rex, characters.rex.pose.sad, ƒS.positions.bottomcenter);

      await ƒS.update(transition.lookAround.duration, transition.lookAround.alpha, transition.lookAround.edge);

      ƒS.Sound.play(soundNarrator.s2t0001, 1);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0001);
      
      //ƒS.Sound.play(soundRex.t0006Rex, 1);
      ƒS.Sound.play(soundRex.s2t0001, 1);
      await ƒS.Speech.tell(characters.rex, text.Rex.T0001);

      /** DECISIONS */
      /** HAVE YOU SEEN MY MOM? */
      let sceneTwoDecision1SeenMom = {
        iSayIDontTell: "Sage ich dir nicht",
        iSayNo: "Nein",
        iSayMaybe: "Vielleicht"
      };

      /** DO YOU APOLOGIZE?*/
      let sceneTwoDecision2Apologize = {
        iSaySorry: "Entschuldigung",
        iDontApologize: "Mir egal"
      };

      /** DO YOU HELP REX TO FIND HIS MOM? */
      let sceneTwoDecision3HelpRex = {
        iHelp: "Ja",
        iDontHelp: "Nein"
      };

      /** DO YOU TELL REX WHERE HIS MOM IS? */
      let sceneTwoDecision4SayWhereMom = {
        iSayNo: "Nein, das behalte ich für mich",
        iSayImNotSure: "Ich bin mir nicht sicher"
      };

      let dialogueElementS2D1SeenMom = await ƒS.Menu.getInput(sceneTwoDecision1SeenMom, "choicesCssClass");

      switch (dialogueElementS2D1SeenMom) {

        case sceneTwoDecision1SeenMom.iSayIDontTell:
          console.log("S1D1 I dont tell");

          ƒS.Character.hide(characters.rex);

          await ƒS.Character.show(characters.rex, characters.rex.pose.angry, ƒS.positions.bottomcenter);

          ƒS.update();

          ƒS.Sound.play(soundRex.s2t0002, 1);
          await ƒS.Speech.tell(characters.rex, text.Rex.T0002);

          let dialogueElementS2D2Apologize = await ƒS.Menu.getInput(sceneTwoDecision2Apologize, "choicesCssClass");

          switch (dialogueElementS2D2Apologize) {

            case sceneTwoDecision2Apologize.iSaySorry:
              console.log("Sorry");

              ƒS.Character.hide(characters.rex);

              await ƒS.Character.show(characters.rex, characters.rex.pose.happy, ƒS.positions.bottomcenter);

              ƒS.update();

              dataForSave.friendshipScore ++;

              ƒS.Sound.play(soundRex.s2t0003, 1);
              await ƒS.Speech.tell(characters.rex, text.Rex.T0003);

              break;

            case sceneTwoDecision2Apologize.iDontApologize:
              console.log("Not Sorry");

              dataForSave.friendshipScore --;

            }

          ƒS.Sound.play(soundRex.s2t0006, 1);
          await ƒS.Speech.tell(characters.rex, text.Rex.T0006);
          
          break;

        case sceneTwoDecision1SeenMom.iSayNo:
          console.log("S1D1 No");

          ƒS.Sound.play(soundRex.s2t0004, 1);
          await ƒS.Speech.tell(characters.rex, text.Rex.T0004);

          ƒS.Sound.play(soundRex.s2t0006, 1);
          await ƒS.Speech.tell(characters.rex, text.Rex.T0006);

          break;

          case sceneTwoDecision1SeenMom.iSayMaybe:
            console.log(("S2D1 Maybe"));

            ƒS.Character.hide(characters.rex);

            await ƒS.Character.show(characters.rex, characters.rex.pose.happy, ƒS.positions.bottomcenter);

            ƒS.update();

            ƒS.Sound.play(soundRex.s2t0005Yippie, 1);
            await ƒS.Speech.tell(characters.narrator, text.Narrator.T0002);
            ƒS.Sound.play(soundRex.s2t0005, 1);
            await ƒS.Speech.tell(characters.rex, text.Rex.T0005);

            let dialogueElementS2D4SayWhereMom = await ƒS.Menu.getInput(sceneTwoDecision4SayWhereMom, "choicesCssClass");

            switch (dialogueElementS2D4SayWhereMom) {

              case sceneTwoDecision4SayWhereMom.iSayNo:
                console.log("S2D4 No");
                
                ƒS.Character.hide(characters.rex);

                await ƒS.Character.show(characters.rex, characters.rex.pose.angry, ƒS.positions.bottomcenter);

                ƒS.update();

                dataForSave.friendshipScore --;

                ƒS.Sound.play(soundRex.s2t0002, 1);
                await ƒS.Speech.tell(characters.rex, text.Rex.T0002);

                ƒS.Sound.play(soundRex.s2t0006, 1);
                await ƒS.Speech.tell(characters.rex, text.Rex.T0006);

                break;
  
                case sceneTwoDecision4SayWhereMom.iSayImNotSure:
                  console.log("S2D4 Not sure");
                  

                  dataForSave.friendshipScore ++;

                  ƒS.Sound.play(soundRex.s2t0006, 1);
                  await ƒS.Speech.tell(characters.rex, text.Rex.T0006);
  
                  break;
            }

            
      }

      let dialogueElementS2D3HelpRex = await ƒS.Menu.getInput(sceneTwoDecision3HelpRex, "choicesCssClass");

      switch (dialogueElementS2D3HelpRex) {

            case sceneTwoDecision3HelpRex.iHelp:
              console.log("S2D3 iHelp");
              
              dataForSave.friendshipScore ++;

              ƒS.Character.hide(characters.rex);

              await ƒS.Character.show(characters.rex, characters.rex.pose.happy, ƒS.positions.bottomcenter);

              ƒS.update();

              ƒS.Sound.play(soundRex.s2t0007, 1);
              await ƒS.Speech.tell(characters.rex, text.Rex.T0007);

              await ƒS.Character.animate(characters.rex, characters.rex.pose.happy, getAnimation());

              break;

              case sceneTwoDecision3HelpRex.iDontHelp:
                console.log("S2D3 iDontHelp");
                
                dataForSave.friendshipScore --;
                
                ƒS.Character.hide(characters.rex);

                await ƒS.Character.show(characters.rex, characters.rex.pose.angry, ƒS.positions.bottomcenter);

                ƒS.update();

                ƒS.Sound.play(soundRex.s2t0008, 1);
                await ƒS.Speech.tell(characters.rex, text.Rex.T0008);

                await ƒS.Character.animate(characters.rex, characters.rex.pose.angry, getAnimation());

                break;
          }

      ƒS.Speech.hide();
      ƒS.Character.hide(characters.rex);
      ƒS.Speech.clear();

      return SceneThree();
    }
}
