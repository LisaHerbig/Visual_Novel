namespace Template {
    export async function End(): ƒS.SceneReturn {
      console.log("FudgeStory Template End starting");

      //await ƒS.Location.show(locations.Home_Hatched);
      let text = {
        Narrator: {
          T0001: "Um die Novel neu zu starten, klicke auf den Bildschirm"
        }
      };

      ƒS.Speech.hide();
      document.getElementsByName("friendshipScore").forEach(meterStuff => meterStuff.hidden = true);
      document.getElementById("scoreForFriendshipRex").setAttribute("class", "hide");
      document.getElementById("save").setAttribute("class", "hide");
      document.getElementById("load").setAttribute("class", "hide");
      document.getElementById("close").setAttribute("class", "hide");
      document.getElementById("inventory").setAttribute("class", "hide");

      await ƒS.Character.show(characters.end, characters.end.pose.end, ƒS.positions.bottomcenter);
      ƒS.update();



      showCredits();

      await ƒS.Speech.tell(characters.narrator, text.Narrator.T0001);
      location.reload();

    }

  }