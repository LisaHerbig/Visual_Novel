namespace Template {
    export async function SceneFiveA(): ƒS.SceneReturn {
      console.log("SceneFiveA starting");

      let text = {
        Narrator: {
            T0001: "Am Ende der Schlucht sieht Rex einen großen Fluss...",
            T0002: "Wer ist denn das, der da so einsam auf dem Felsen sitzt?",
            T0003: "Während sich Rex vor Lachen kugelt, hat der kleine, ängstliche Pterodaktylus seinen Vater geholt... Da kommt er ja schon",
            T0004: "Traurig schaut Rex in den Fluss. Seine Mama. Wo ist sie nur? Der große Flugsaurier war aber auch echt gemein. Seine Mama hätte dem sicher gezeigt wer der Stärkere ist!",
            T0005: "Ganz in seine Gedanken versunken bemerkt Rex nicht, dass sich ihm ein anderer Dinosaurier nähert...",
            T0006: "Rex steigt auf den Rücken von Lenny's Papa und die beiden heben gemeinsam ab. Sie fliegen einige Zeit, bis sich die Spuren verlaufen..."
        },

        Rex: {
            T0001: dataForSave.nameProtagonist + ", was soll ich tun?",
            T0002: "Hahaha das war nur Spaß! So ein Angsthase!",
            T0003: "Ich bin Rex.",
            T0004: "Ich suche meine Mama, hast du sie gesehen? Ihre Spuren führen hier lang.",

            T0005: "Äh Hallo? Weißt du wie man einen englischen T-Rex nennt?",
            T0006: "Einen Tee Rex",
            T0007: "Ich bin Rex. Ich bin ein Tyrannosaurus. Ich suche meine Mama, kannst du mir helfen? Hast du sie vielleicht gesehen?",
            T0008: "Schade...",
            T0009: "Hallo Herr Pterodaktylus. Schade... ich vermisse meine Mama so sehr... Ich glaube da sind ihre Spuren, aber ich komme sicher nicht über den Fluss. Sie sind kein Frühstück für mich, ich will doch nur meine Mama wieder haben...",
            T0010: "Oh ja, das klingt toll, danke! Und versprochen, Dinosaurier Ehrenwort!",
            T0011: "Ja, danke nochmal Herr Pterodaktylus!"
        },

        Lenny: {
            T0001: "Ahhhh!!!",
            T0002: "Hallo Rex, ne habe ich leider nicht. Ich bin Lenny. Ich bin ein Pterodaktylus und lebe im Ober Jura. Ich wiege etwa zwei Kilo und meine Flügelspannweite kann bis zu 75 cm betragen. Mein Lieblingsessen sind kleine Fische. Wie du siehst besitze ich keine Federn. Zum Fliegen benutze ich meine Flughäute. Ich lebe mit meiner Familie in einer großen Kolonie, was mir manchmal echt zu viel ist.",
            T0003: "Warte hier, ich hole Hilfe."
        },

        Papa: {
            T0001: "Was fällt dir ein meinen Sohn so zu erschrecken! Sowas gehört sich nicht! Mache das ja nicht noch einmal!  Ihr Kinder solltet doch eigentlich zusammenhalten! Unglaublich, ich glaube ich muss einmal ein ernstes Wörtchen mit deiner Mama reden!",
            T0002: "Lenny! Du hast nicht gesagt, dass es sich um einen Tyrannosaurus handelt! Diesen böswilligen Kreaturen helfen wir nicht, sonst sind wir nur wieder Frühstück!",
            T0003: "Oh... tut mir leid, dass ich so reagiert habe Rex. Das ist doch gar kein Problem, steig auf, ich flieg dich den Spuren hinterher. Vielleicht finden wir deine Mama. Aus der Luft hast du sowieso einen viel besseren Überblick. Du musst aber versprechen uns niemals zu essen!",
            T0004: "So Rex, weiter kann ich dich nicht bringen, hier hören die Spuren auf. Kommst du alleine klar?"
        },

        Archie: {
            T0001: "Jo kleiner, was ist los? Lass doch den Kopf nicht hängen nur weil der so langweilig ist und keinen Spaß versteht. Das wird schon wieder. Wir Schurken müssen doch zusammenhalten!",
            T0002: "Ich bin Archie. Ich bin ein Archäopteryx und lebe im Ober Jura. Ich bin ungefähr so groß wie ein Rabe und wiege zwischen 0,5 und 1 kg. Am liebsten esse ich kleine Insekten. Viele sagen, ich bin das Bindeglied zwischen Dinosauriern und Vögeln. Dabei fliege ich meistens nur im Gleitflug. Vom Boden aus zu starten ist viel zu anstrengend. Und wer bist eigentlich du?",
            T0003: "Und was macht ein T-Rex-Baby wie du ganz alleine hier draußen?",
            T0004: "Die Spuren führen ja genau dorthin, wo ich auch hin wollte.Sollen wir zusammen weiter gehen? Schurken wie wir müssen doch zusammenhalten.",
            T0005: "Na dann los!",
            T0006: "Pf, dann mach doch dein eigenes Ding! Muss ich schon nicht auf eine Nervensäge aufpassen."
        }
      };

      await ƒS.Location.show(locations.L_Ptero);

      await ƒS.Character.show(characters.lenny, characters.lenny.pose.small, ƒS.positionPercent(18, 29));

      await ƒS.update(transition.steps.duration, transition.steps.alpha, transition.steps.edge);
      
      ƒS.Sound.play(soundNarrator.s5At0001, 1);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0001);

      ƒS.Sound.play(soundNarrator.s5At0002, 1);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0002);
      
      await ƒS.Character.show(characters.rex, characters.rex.pose.happy, ƒS.positions.bottomright);
      
      //await ƒS.Character.show(characters.lenny, characters.lenny.pose.happy, ƒS.positions.bottomleft);

      ƒS.update();

      ƒS.Sound.play(soundRex.s5At0001, 1);
      await ƒS.Speech.tell(characters.rex, text.Rex.T0001);

      /** DECISION */
      let sceneFiveADecision1WhatToDo = {
        iSayScare: "Erschrecken",
        iSayAskForHelp: "Um Hilfe fragen"
      };

      let dialogueElementS5AD1WhatToDo = await ƒS.Menu.getInput(sceneFiveADecision1WhatToDo, "choicesCssClass");

      switch (dialogueElementS5AD1WhatToDo) {

        case sceneFiveADecision1WhatToDo.iSayScare:
            console.log("Scare him");

            dataForSave.friendshipScore --;

            ƒS.Character.hide(characters.lenny);

            await ƒS.Character.show(characters.lenny, characters.lenny.pose.scared, ƒS.positions.bottomleft);

            ƒS.update();

            ƒS.Sound.play(soundLenny.s5At0001, 1);
            await ƒS.Speech.tell(characters.lenny, text.Lenny.T0001);
            
            ƒS.Character.hide(characters.lenny);

            ƒS.update();

            await ƒS.Character.animate(characters.lenny, characters.lenny.pose.happy, getAnimationFlyAway());

            ƒS.Character.hide(characters.lenny);

            ƒS.update();

            ƒS.Sound.play(soundRex.s5At0002, 1);
            await ƒS.Speech.tell(characters.rex, text.Rex.T0002);

            ƒS.Sound.play(soundNarrator.s5At0003, 1);
            await ƒS.Speech.tell(characters.narrator, text.Narrator.T0003);

            await ƒS.Character.animate(characters.lennysDad, characters.lennysDad.pose.happy, getAnimationFlyTowards());

            await ƒS.Character.hide(characters.lennysDad);

            ƒS.update();

            await ƒS.Character.show(characters.lennysDad, characters.lennysDad.pose.angry, ƒS.positions.bottomleft);

            ƒS.update();

            ƒS.Sound.play(soundLennysDad.s5At0001, 1);
            await ƒS.Speech.tell(characters.lennysDad, text.Papa.T0001);

            ƒS.Character.hide(characters.rex);

            await ƒS.Character.show(characters.rex, characters.rex.pose.sad, ƒS.positions.bottomright);

            ƒS.update();

            ƒS.Character.hide(characters.lennysDad);

            ƒS.update();

            await ƒS.Character.animate(characters.lennysDad, characters.lennysDad.pose.happyRight, getAnimationFlyAway());

            ƒS.Character.hide(characters.lennysDad);

            ƒS.update();

            ƒS.Sound.play(soundNarrator.s5At0004, 1);
            await ƒS.Speech.tell(characters.narrator, text.Narrator.T0004);

            ƒS.Sound.play(soundNarrator.s5At0005, 1);
            await ƒS.Speech.tell(characters.narrator, text.Narrator.T0005);

            await ƒS.Character.show(characters.archie, characters.archie.pose.happy, ƒS.positions.bottomleft);

            ƒS.update();

            ƒS.Sound.play(soundArchie.s5At0001, 1);
            await ƒS.Speech.tell(characters.archie, text.Archie.T0001);

            ƒS.Sound.play(soundArchie.s5At0002, 1);
            await ƒS.Speech.tell(characters.archie, text.Archie.T0002);

            ƒS.Text.addClass("novelPageArchie");
            await ƒS.Text.print("");

            ƒS.Inventory.add(items.archie);

            ƒS.update();

            ƒS.Sound.play(soundRex.s5At0003, 1);
            await ƒS.Speech.tell(characters.rex, text.Rex.T0003);
    
            ƒS.Sound.play(soundArchie.s5At0003, 1);
            await ƒS.Speech.tell(characters.archie, text.Archie.T0003);

            ƒS.Sound.play(soundRex.s5At0004, 1);
            await ƒS.Speech.tell(characters.rex, text.Rex.T0004);

            ƒS.Sound.play(soundArchie.s5At0004, 1);
            await ƒS.Speech.tell(characters.archie, text.Archie.T0004);

            /** DECISION */
            let sceneFiveADecision2GoWithArchie = {
                iSayIGo: "Mit Archie gehen",
                iSayNo: "Alleine weiter gehen"
            };

            let dialogueElementS5AD2GoWithArchie = await ƒS.Menu.getInput(sceneFiveADecision2GoWithArchie, "choicesCssClass");

            switch (dialogueElementS5AD2GoWithArchie) {
                
                case sceneFiveADecision2GoWithArchie.iSayIGo:
                    console.log("Go With Archie");

                    dataForSave.friendshipScore -= 1;

                    ƒS.Sound.play(soundArchie.s5At0005, 1);
                    await ƒS.Speech.tell(characters.archie, text.Archie.T0005);

                    ƒS.Speech.hide();
                    ƒS.Character.hide(characters.rex);
                    ƒS.Character.hide(characters.archie);
                    ƒS.Speech.clear();
                    ƒS.update();
            
                    return SceneFiveB();
                    break;
                    
                case sceneFiveADecision2GoWithArchie.iSayNo:
                    console.log("Go Alone");

                    ƒS.Character.hide(characters.archie);

                    await ƒS.Character.show(characters.archie, characters.archie.pose.angry, ƒS.positions.bottomleft);

                    ƒS.update();

                    ƒS.Sound.play(soundArchie.s5At0006, 1);
                    await ƒS.Speech.tell(characters.archie, text.Archie.T0006);

                    ƒS.Speech.hide();
                    ƒS.Character.hide(characters.rex);
                    ƒS.Character.hide(characters.archie);
                    ƒS.Speech.clear();
                    ƒS.update();
            
                    return SceneSix();
                    break;
            }

            break;

        case sceneFiveADecision1WhatToDo.iSayAskForHelp:
            console.log("Ask for help");

            dataForSave.friendshipScore ++;

            await ƒS.Character.hide(characters.lenny);
            await ƒS.Character.show(characters.lenny, characters.lenny.pose.happy, ƒS.positions.bottomleft);

            ƒS.update();

            ƒS.Sound.play(soundRex.s5At0005, 1);
            await ƒS.Speech.tell(characters.rex, text.Rex.T0005);

            ƒS.Sound.play(soundRex.s5At0006, 1);
            await ƒS.Speech.tell(characters.rex, text.Rex.T0006);

            ƒS.Sound.play(soundRex.s5At0007, 1);
            await ƒS.Speech.tell(characters.rex, text.Rex.T0007);

            ƒS.Sound.play(soundLenny.s5At0002, 1);
            await ƒS.Speech.tell(characters.lenny, text.Lenny.T0002);

            ƒS.Text.addClass("novelPageLenny");
            await ƒS.Text.print("");

            ƒS.Inventory.add(items.lenny);

            ƒS.update();

            ƒS.Sound.play(soundRex.s5At0008, 1);
            await ƒS.Speech.tell(characters.rex, text.Rex.T0008);

            ƒS.Sound.play(soundLenny.s5At0003, 1);
            await ƒS.Speech.tell(characters.lenny, text.Lenny.T0003);

            ƒS.Character.hide(characters.lenny);

            ƒS.update();

            await ƒS.Character.animate(characters.lenny, characters.lenny.pose.happy, getAnimationFlyAway());

            ƒS.Character.hide(characters.lenny);

            ƒS.update();
         
            await ƒS.Character.animate(characters.lennysDad, characters.lennysDad.pose.happy, getAnimationFlyTowards());

            ƒS.Character.hide(characters.lennysDad);

            await ƒS.Character.show(characters.lennysDad, characters.lennysDad.pose.angry, ƒS.positions.bottomleft);

            ƒS.update();

            ƒS.Sound.play(soundLennysDad.s5At0002, 1);
            await ƒS.Speech.tell(characters.lennysDad, text.Papa.T0002);

            ƒS.Character.hide(characters.rex);

            await ƒS.Character.show(characters.rex, characters.rex.pose.sad, ƒS.positions.bottomright);

            ƒS.update();

            ƒS.Sound.play(soundRex.s5AtWein, 1);
            ƒS.Sound.play(soundRex.s5At0009, 1);

            await ƒS.Speech.tell(characters.rex, text.Rex.T0009);

            ƒS.Character.hide(characters.lennysDad);

            await ƒS.Character.show(characters.lennysDad, characters.lennysDad.pose.happyRight, ƒS.positions.bottomleft);

            ƒS.update();

            ƒS.Sound.play(soundLennysDad.s5At0003, 1);
            await ƒS.Speech.tell(characters.lennysDad, text.Papa.T0003);

            ƒS.Sound.play(soundRex.s5At0010, 1);
            await ƒS.Speech.tell(characters.rex, text.Rex.T0010);

            ƒS.Sound.play(soundNarrator.s5At0006, 1);
            await ƒS.Speech.tell(characters.narrator, text.Narrator.T0006);

            ƒS.Speech.hide();
            ƒS.Character.hide(characters.rex);
            ƒS.Character.hide(characters.lennysDad);
            ƒS.Speech.clear();
            ƒS.update();

            await ƒS.Location.show(locations.L_Velo);

            await ƒS.Character.show(characters.rex, characters.rex.pose.happy, ƒS.positions.bottomright);

            await ƒS.Character.show(characters.lennysDad, characters.lennysDad.pose.happyRight, ƒS.positions.bottomleft);

            ƒS.update(transition.fly.duration, transition.fly.alpha, transition.fly.edge);
      
            ƒS.Sound.play(soundLennysDad.s5At0004, 1);
            await ƒS.Speech.tell(characters.lennysDad, text.Papa.T0004);

            ƒS.Sound.play(soundRex.s5At0011, 1);
            await ƒS.Speech.tell(characters.rex, text.Rex.T0011);
      
            await ƒS.Character.animate(characters.lennysDad, characters.lennysDad.pose.happyRight, getAnimationFlyAway());

            //ƒS.Character.hide(characters.lennysDad);

            ƒS.update();

            ƒS.Speech.hide();
            ƒS.Character.hide(characters.rex);
            //ƒS.Character.hide(characters.lennysDad);
            ƒS.Speech.clear();
            ƒS.update();
            
            return SceneSix();
            break;
      }
    }
}