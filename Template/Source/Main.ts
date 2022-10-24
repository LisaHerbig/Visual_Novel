namespace Template {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("FudgeStory template starting");

  //Transition Vorlesung 20.10.22
  export let transition = {
    //Name der Transition, in alpha kommt relativer Pfad
    bites: {
      duration: 1, 
      alpha: "../Images/Transitions/bites.jpg",
      edge: 1
    }
  };

 //
  export let sound = {
    //**Name der Audiodatei, relativer Pfad angeben in ""**

    //themes

    //SFX
  drop: "Audio/drop.mp3"

 };

  export let locations = {
  //Name des Bildes
  Home_Eggs: {
    name: "Home Eggs",
    background: "../Images/Backgrounds/Home_Eggs.png"
  }
 };

  export let characters = {
  narrator: {
    name: ""
  },
  protagonist: {
    name: ""
  },
  rex: {
    name: "Rex",
    origin: ƒS.ORIGIN.BOTTOMCENTER,
    pose: {
      
      angry: "../Images/Characters/Rex/Rex_angry.png",
      happy: "../Images/Characters/Rex/Rex_happy.png",
      sad: "../Images/Characters/Rex/Rex_sad.png"
    }
  }
 };

 //** DATA THAT WILL BE SAVED (GAME PROGRESS) */
  export let dataForSave = {
    nameProtagonist: ""
  };

  window.addEventListener("load", start);
  function start(_event: Event): void {
    let scenes: ƒS.Scenes = [
      { scene: Scene, name: "Scene" }
    ];

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);
  
   
    // start the sequence
    ƒS.Progress.go(scenes);
  }
}