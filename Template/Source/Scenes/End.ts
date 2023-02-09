namespace TheSearch {
    export async function End(): ƒS.SceneReturn {
      console.log("FudgeStory Template End starting");

      //await ƒS.Location.show(locations.Home_Hatched);

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
    }
  }