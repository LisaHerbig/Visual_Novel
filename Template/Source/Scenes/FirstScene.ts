namespace TheSearch {
    export async function FirstScene(): ƒS.SceneReturn {
      console.log("SceneOne starting");
  
      let text = {
        Rex: {
          T0001: "Hallo",
          T0002: "Anderer Text",
          T0003: "Text Nummer drei"
          }
        };

      //Textbox soll verschwinden
      
      await ƒS.Location.show(locations.Home_Hatched);
      //await ƒS.update();
      
      await ƒS.Character.show(characters.rex, characters.rex.pose.happy, ƒS.positionPercent(68, 129)); //Prozentual angegeben!
      //await ƒS.Character.show(characters.rex, characters.rex.pose.happy, ƒS.positions.bottomcener)
      await ƒS.update(transition.start.duration, transition.start.alpha, transition.start.edge);
      //ƒS.Speech.show();
      await ƒS.Speech.tell(characters.rex, text.Rex.T0001);
      await ƒS.Speech.tell(characters.rex, text.Rex.T0002);
      
      //Nach jeder Location und nach jedem Character updaten!!

      //Entscheidungsmöglichkeiten anlegen
      let sceneOne1decision = {
        iSayYes: "Yes",
        iSayOk: "Ok",
        iSayNo: "No",
        iSayThanks: "Thank you"
      };

      let dialogueElementS1D1 = await ƒS.Menu.getInput(sceneOne1decision, "choicesCssClass");

      switch (dialogueElementS1D1) {
        case sceneOne1decision.iSayYes:
          console.log("S1D1 Yes");
          break;

          case sceneOne1decision.iSayNo:
            console.log("S1D1 No");
            break;

            case sceneOne1decision.iSayOk:
              console.log("S1D1 Ok");
              break;

              case sceneOne1decision.iSayThanks:
                console.log("S1D1 Thank you");
                break;
                
              
            
          
      }


        }
      }