/* Sound Effekte für die Mini-Games: https://www.epidemicsound.com/de/music/featured/
  Sound Effekt Magenknurren: https://elements.envato.com/de/dinosaur-growl-M4X6N23?_ga=2.62807788.1932411130.1675942328-1714739041.1669640489&utm_campaign=elements_mixkit_cs_sfx_search_no_results&utm_medium=referral&utm_source=mixkit
*/
namespace Template {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("FudgeStory template starting");

  /** TRANSITIONS **/

  export let transition = {
    start: {
      duration: 1, 
      alpha: "./Images/Transitions/start.jpg",
      edge: 1
    },

    steps: {
      duration: 0.5,
      alpha: "./Images/Transitions/steps.jpg",
      edge: 0.5
    },

    stepsTogether: {
      duration: 0.5,
      alpha: "./Images/Transitions/steps_together.jpg",
      edge: 0.5
    },

    plants: {
      duration: 0.5,
      alpha: "./Images/Transitions/plants.jpg",
      edge: 0.5
    },

    fly: {
      duration: 2,
      alpha: "./Images/Transitions/fly.jpg",
      edge: 0.5
    },

    dayNight: {
      duration: 0.5,
      alpha: "./Images/Transitions/dayToNight.jpg",
      edge: 0.5
    },

    lookAround: {
      duration: 0.5,
      alpha: "./Images/Transitions/lookAround.png",
      edge: 0.5
    },

    mom: {
      duration: 0.5,
      alpha: "./Images/Transitions/mom.jpg",
      edge: 0.5
    },

    wArchie: {
      duration: 0.5,
      alpha: "./Images/Transitions/wArchie.jpg",
      edge: 0.5
    }
  };

 /** SOUND **/

  export let soundRex = {
    t0001Rex: "./Audio/Rex/1_1Rex.mp4",
    t0001_1Rex: "./Audio/Rex/T0001_1.mp4",
    t0002Rex: "./Audio/Rex/T0002_Rex.mp4",
    t0003Rex: "./Audio/Rex/T0003_Rex.mp4",
    t0004Rex: "./Audio/Rex/T0004_Rex.mp4",
    t0005Rex: "./Audio/Rex/T0005_Rex.m4a",
    //t0006Rex: "./Audio/Rex/S2/T0006.mp4",

    s2t0001: "./Audio/Rex/S2/S2T1.mp4",
    s2t0002: "./Audio/Rex/S2/S2T2.mp4",
    s2t0003: "./Audio/Rex/S2/S2T3.mp4",
    s2t0004: "./Audio/Rex/S2/S2T4.mp4",
    s2t0005y: "./Audio/Rex/S2/S2T5Yippie.mp4",
    s2t0005: "./Audio/Rex/S2/S2T5.mp4",
    s2t0006: "./Audio/Rex/S2/S2T6.mp4",
    s2t0007: "./Audio/Rex/S2/S2T7.mp4",
    s2t0008: "./Audio/Rex/S2/S2T8.mp4",
    s2t0005Yippie: "./Audio/Rex/S2/S2T5Yippie.mp4",

    s3t0001: "./Audio/Rex/S3/S3T1.mp4",
    s3t0002: "./Audio/Rex/S3/S3T2.mp4",
    s3t0003: "./Audio/Rex/S3/S3T3.mp4",
    s3t0004: "./Audio/Rex/S3/S3T4.mp4",
    s3t0005: "./Audio/Rex/S3/S3T5.mp4",
    s3t0006: "./Audio/Rex/S3/S3T6.mp4",

    s4t0001: "./Audio/Rex/S4/S4T1.mp4",
    s4t0002: "./Audio/Rex/S4/S4T2.mp4",
    s4t0003: "./Audio/Rex/S4/S4T3.mp4",
    s4tPfeifen: "./Audio/Rex/Pfeifen_1.m4a",

    s51t0001: "./Audio/Rex/S5/S51T1.mp4",
    s51t0002: "./Audio/Rex/S5/S51T2.mp4",
    s51t0003: "./Audio/Rex/S5/S51T3.mp4",
    s51t0004: "./Audio/Rex/S5/S51T4.mp4",
    s51t0005: "./Audio/Rex/S5/S51T5.mp4",

    s5At0001: "./Audio/Rex/S5/S5AT1.mp4",
    s5At0002: "./Audio/Rex/S5/S5AT2.mp4",
    s5At0003: "./Audio/Rex/S5/S5AT3.mp4",
    s5At0004: "./Audio/Rex/S5/S5AT4.mp4",
    s5At0005: "./Audio/Rex/S5/S5AT5.mp4",
    s5At0006: "./Audio/Rex/S5/S5AT6.mp4",
    s5At0007: "./Audio/Rex/S5/S5AT7.mp4",
    s5At0008: "./Audio/Rex/S5/S5AT8.mp4",
    s5At0009: "./Audio/Rex/S5/S5AT9.mp4",
    s5At0010: "./Audio/Rex/S5/S5AT10.mp4",
    s5At0011: "./Audio/Rex/S5/S5AT11.mp4",
    s5AtRoaw: "./Audio/Rex/S5/S5ATRoaw.mp4",
    s5AtWein: "./Audio/Rex/S5/S5ATSchluchz.mp4",

    s6t0001: "./Audio/Rex/S6/S6T1.mp4",
    s6t0002: "./Audio/Rex/S6/S6T2.mp4",
    s6t0003: "./Audio/Rex/S6/S6TAh.mp4",
    s6t0004: "./Audio/Rex/S6/S6T4.mp4",
    s6t0005: "./Audio/Rex/S6/S6T5.mp4",
    s6t0006: "./Audio/Rex/S6/S6T6.mp4",
    s6t0007: "./Audio/Rex/S6/S6T7.mp4",
    s6t0008: "./Audio/Rex/S6/S6T8.mp4",
    s6t0009: "./Audio/Rex/S6/S6T9.mp4",
    s6t0010: "./Audio/Rex/S6/S6T10.mp4",
    s6t0011: "./Audio/Rex/S6/S6T11.mp4",
    s6t0012: "./Audio/Rex/S6/S6T12.mp4",
    s6t0013: "./Audio/Rex/S6/S6T13.mp4",
    s6t0014: "./Audio/Rex/S6/S6T14.mp4",
    s6tRoaw: "./Audio/Rex/S6/S6TRoaw.m4a",

    s7t0001: "./Audio/Rex/S7/S7T1.mp4",
    s7t0002: "./Audio/Rex/S7/S7T2.mp4",
    s7t0003: "./Audio/Rex/S7/S7T3.mp4",
    s7t0004: "./Audio/Rex/S7/S7T4.mp4",
    s7t0005: "./Audio/Rex/S7/S7T5.mp4",
    s7t0006: "./Audio/Rex/S7/S7T6.mp4",

    s8t0001: "./Audio/Rex/S8/S8T1.mp4",

    specialT0001: "./Audio/Rex/SpecialT1.mp4",
    specialT0002: "./Audio/Rex/SpecialT2.mp4",
    specialT0003: "./Audio/Rex/SpecialT3.mp4",

    hungry: "./Audio/SFX/Hungry_envatoElements.mp4"

    

 };

  export let soundNarrator = {
  //Sound Narrator
  s1t0001: "./Audio/Narrator/S1T1.m4a",
  s1t0002: "./Audio/Narrator/S1T2.m4a",
  s1t0003: "./Audio/Narrator/S1T3.m4a",
  s1t0004: "./Audio/Narrator/S1T4.m4a",
  s1t0005: "./Audio/Narrator/S1T5.m4a",
  s1t0006: "./Audio/Narrator/S1T6.m4a",
  s1t0007: "./Audio/Narrator/S1T7.m4a",
  s1t0008: "./Audio/Narrator/S1T8.m4a",
  s1t0009: "./Audio/Narrator/S1T9.m4a",
  s1Game1Intro: "./Audio/Narrator/GameInstruction1.m4a",

  s2t0001: "./Audio/Narrator/S2T1.m4a",

  s3t0001: "./Audio/Narrator/S3T1.m4a",
  s3t0002: "./Audio/Narrator/S3T2.m4a",
  s3t0003: "./Audio/Narrator/S3T3.m4a",
  s3Game2Intro: "./Audio/Narrator/GameInstruction2.m4a",

  s4t0001: "./Audio/Narrator/S4T1.m4a",
  s4t0002: "./Audio/Narrator/S4T2.m4a",
  s4t0003: "./Audio/Narrator/S4T3.m4a",
  s4t0004: "./Audio/Narrator/S4T4.m4a",
  s4t0005: "./Audio/Narrator/S4T5.m4a",

  s51t0001: "./Audio/Narrator/S51T1.m4a",
  s51t0002: "./Audio/Narrator/S51T2.m4a",
  s51t0003: "./Audio/Narrator/S51T4.m4a",
  s51t0004: "./Audio/Narrator/S51T5.m4a",
  s51Game3: "./Audio/Narrator/Game3.m4a",
  s51t0006: "./Audio/Narrator/Aerger.m4a",
  s51t0007: "./Audio/Narrator/Geschafft.m4a",
  

  s5At0001: "./Audio/Narrator/S5AT1.m4a",
  s5At0002: "./Audio/Narrator/S5AT2.m4a",
  s5At0003: "./Audio/Narrator/S5AT3.m4a",
  s5At0004: "./Audio/Narrator/S5AT4.m4a",
  s5At0005: "./Audio/Narrator/S5AT5.m4a",
  s5At0006: "./Audio/Narrator/S5AT6.m4a",

  s5Bt0001: "./Audio/Narrator/S5BT1.m4a",

  s6t0001: "./Audio/Narrator/S6T1.m4a",
  s6t0002: "./Audio/Narrator/S6T2.m4a",
  s6t0003: "./Audio/Narrator/S6T3.m4a",
  s6t0004: "./Audio/Narrator/S6T4.m4a",
  s6t0005: "./Audio/Narrator/S6T5.m4a",
  s6Game4: "./Audio/Narrator/Game4.m4a",

  s7t0001: "./Audio/Narrator/S7T1.m4a",

  s8t0001: "./Audio/Narrator/S8T1.m4a",
  s8t0002: "./Audio/Narrator/WasDennRex.m4a"

  

 };

  export let soundElena = {

    s3t0001: "./Audio/Elena/S3T1.m4a",
    s3t0002: "./Audio/Elena/S3T2.m4a",
    s3t0003: "./Audio/Elena/S3T3.m4a",
    s3t0004: "./Audio/Elena/S3T4.m4a",
    s3t0005: "./Audio/Elena/S3T5.m4a",
    s3t0006: "./Audio/Elena/S3T6.m4a",
    s3t0007: "./Audio/Elena/S3T7.m4a",
    s3t0008: "./Audio/Elena/S3T8.m4a",
    s3t0009: "./Audio/Elena/S3T9.m4a"

  };

  export let soundLenny = {

    s5At0001: "./Audio/Lenny/S5AT1.m4a",
    s5At0002: "./Audio/Lenny/S5AT2.m4a",
    s5At0003: "./Audio/Lenny/S5AT3.mp4"

  };

  export let soundArchie = {

    s5At0001: "./Audio/Archie/S5AT1.mp4",
    s5At0002: "./Audio/Archie/S5AT2.mp4",
    s5At0003: "./Audio/Archie/S5AT3.mp4",
    s5At0004: "./Audio/Archie/S5AT4.mp4",
    s5At0005: "./Audio/Archie/S5AT5.mp4",
    s5At0006: "./Audio/Archie/S5AT6.mp4",

    s5Bt0001: "./Audio/Archie/S5BT1.mp4",
    s5Bt0002: "./Audio/Archie/S5BT2.mp4",
    s5Bt0003: "./Audio/Archie/S5AT6.mp4",
    s5Bt0004: "./Audio/Archie/S5BT4.mp4",
    s5Bt0005: "./Audio/Archie/S5BT5.mp4"


  };

  export let soundLennysDad = {

    s5At0001: "./Audio/LennysPapa/S5AT1.m4a",
    s5At0002: "./Audio/LennysPapa/S5AT2.m4a",
    s5At0003: "./Audio/LennysPapa/S5AT3.m4a",
    s5At0004: "./Audio/LennysPapa/S5AT4.m4a"

  };

  export let soundTilly = {

    s51t0001: "./Audio/Tilly/S51T1.mp4",
    s51t0002: "./Audio/Tilly/S51T2.mp4",
    s51t0003: "./Audio/Tilly/S51T3.mp4"

  };

  export let soundTillysDad = {

    s51t0001: "./Audio/TillysPapa/TillysPapaT0001.mp4"

  };

  export let soundElenasMom = {

    s3t0001: "./Audio/ElenasMama/ElenasMomT0001.m4a"

  };

  export let soundVelo = {

    s6t0001: "./Audio/Velo/S6T1.mp4",
    s6t0002: "./Audio/Velo/S6T2.mp4",
    s6t0003: "./Audio/Velo/S6T3.mp4",
    s6t0004: "./Audio/Velo/S6T4.mp4",
    s6t0005: "./Audio/Velo/S6T5.m4a",
    s6t0006: "./Audio/Velo/S6T6.mp4"

  };

  export let soundLucy = {

    s6t0001: "./Audio/Lucy/S6T1.m4a",
    s6t0002: "./Audio/Lucy/S6T2.m4a",
    s6t0003: "./Audio/Lucy/S6T3.m4a",
    s6t0004: "./Audio/Lucy/S6T4.m4a",
    s6t0005: "./Audio/Lucy/S6T5.m4a",
    s6t0006: "./Audio/Lucy/S6T6.mp4",
    s6t0007: "./Audio/Lucy/S6T7.mp4",

    s7t0001: "./Audio/Lucy/S7T1.mp4",
    s7t0002: "./Audio/Lucy/S7T2.mp4",
    s7t0003: "./Audio/Lucy/S7T3.mp4",
    s7t0004: "./Audio/Lucy/S7T4.m4a",
    s7t0005: "./Audio/Lucy/S7T5.m4a",
    s7t0005_2: "./Audio/Lucy/S7T5_2.m4a",
    s7t0006: "./Audio/Lucy/S7T6.m4a",

    s8t0001: "./Audio/Lucy/S8T1.m4a",
    s8t0002: "./Audio/Lucy/S8T2.m4a",
    s8t0003: "./Audio/Lucy/S8T3.m4a"

  };
  
  export let soundRexMom = {

    s8t0001: "./Audio/Mama/S8T1.m4a",
    s8t0002: "./Audio/Mama/S8T2.m4a",
    s8t0003: "./Audio/Mama/S8T3.m4a",
    s8schluchz: "./Audio/Mama/S8TSchluchz.m4a",
    s8wein: "./Audio/Mama/S8TWein.m4a"

  };

  export let soundSFX = {

    eggs: "./Audio/SFX/BubbleBlips_Eggs_Epidemicsound.mp4",
    catchCook: "./Audio/SFX/BubbleBlip_CookCatch_Epidemicsound.mp4",
    jump: "./Audio/SFX/SuctionPop_Epidemicsound_jump.mp3"

  };

 /**LOCATIONS */
 
  export let locations = {
  
  Home_Hatched: {
    name: "Home_Hatched",
    background: "./Images/Locations/Home_Hatched.png"
  },

  Home: {
    name: "Home",
    background: "./Images/Backgrounds/Home_Eggs.jpg"
  },

  L_Dilo: {
    name: "LocationElena",
    background: "./Images/Locations/L_Dilo.jpg"
  },

  L_Ptero: {
    name: "LocationLenny",
    background: "./Images/Locations/L_Lenny.jpg"
  },

  L_Archae: {
    name: "LocationArchie",
    background: "./Images/Locations/L_Archie.jpg"
  },

  L_Tricera: {
    name: "LocationTilly",
    background: "./Images/Locations/L_Tilly.jpg"
  },

  L_Velo: {
    name: "LocationVelo",
    background: "./Images/Locations/L_Velo.jpg"
  },

  L_DiplodoDay: {
    name: "LocationLucyDay",
    background: "./Images/Locations/L_Lucy.png"
  },

  L_DiplodoNight: {
    name: "LocationLucyNight",
    background: "./Images/Locations/L_Lucy2.png"
  },

  HomeNight: {
    name: "HomeNight",
    background: "./Images/Locations/Home_again.jpg"
  },

  L_Steps: {
    name: "LocationSteps",
    background: "./Images/Locations/L_Spuren.jpg"
  },

  L_Steps_Zoom: {
    name: "LocationStepsZoom",
    background: "./Images/Locations/L_SpurenZoom.png"
  }

 };

 /** CHARACTERS */

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
      angry: "./Images/Characters/Rex/RexAngry.png",
      happy: "./Images/Characters/Rex/RexHappy.png",
      sad: "./Images/Characters/Rex/RexSad.png",
      disgusted: "./Images/Characters/Rex/RexDisgusted.png",
      bad: "./Images/Characters/Rex/RexBad.png",
      sniff: "./Images/Characters/Rex/RexSniff.png"
    }

  },

  elena: {

    name: "Elena",
    origin: ƒS.ORIGIN.BOTTOMCENTER,

    pose: {
      scared: "./Images/Characters/Elena/ElenaScared.png",
      happy: "./Images/Characters/Elena/ElenaHappy.png"
    }

  },

  lenny: {

    name: "Lenny",
    origin: ƒS.ORIGIN.BOTTOMCENTER,

    pose: {
      scared: "./Images/Characters/Lenny/LennyScared.png",
      happy: "./Images/Characters/Lenny/LennyHappy.png",
      small: "./Images/Characters/Lenny/LennyKlein.png"
    }

  },

  lennysDad: {

    name: "LennysPapa",
    origin: ƒS.ORIGIN.BOTTOMCENTER,

    pose: {
      angry: "./Images/Characters/LennysDad/LennysDadAngry.png",
      happy: "./Images/Characters/LennysDad/LennysDadHappy.png",
      happyRight: "./Images/Characters/LennysDad/LennysDadHappyRight.png"

    }
  },

  archie: {

    name: "Archie",
    origin: ƒS.ORIGIN.BOTTOMCENTER,

    pose: {
      angry: "./Images/Characters/Archie/ArchieAngry.png",
      happy: "./Images/Characters/Archie/ArchieHappy.png"
    }

  },

  tilly: {

    name: "Tilly",
    origin: ƒS.ORIGIN.BOTTOMCENTER,

    pose: {
      angry: "./Images/Characters/Tilly/TillyAngry.png",
      happy: "./Images/Characters/Tilly/TillyHappy.png"
    }

  },

  velo: {

    name: "Velo",
    origin: ƒS.ORIGIN.BOTTOMCENTER,

    pose: {
      happy: "./Images/Characters/Velo/VeloHappy.png",
      scared: "./Images/Characters/Velo/VeloScared.png",
      small: "./Images/Characters/Velo/VeloKlein.png"
    }

  },

  lucy: {

    name: "Lucy",
    origin: ƒS.ORIGIN.BOTTOMCENTER,

    pose: {
      happy: "./Images/Characters/Lucy/LucyHappy.png",
      angry: "./Images/Characters/Lucy/LucyAngry.png",
      sad: "./Images/Characters/Lucy/LucySad.png"

    }
  },

  mama: {
    name: "Mama",
    origin: ƒS.ORIGIN.BOTTOMCENTER,

    pose: {
      happy: "./Images/Characters/RexMom/Mom.png"
    }
  },

  end: {
    name: "END",
    origin: ƒS.ORIGIN.BOTTOMCENTER,

    pose: {
      end: "./Images/GUI/End.png"
    }
  }

 };

 //** DATA THAT WILL BE SAVED (GAME PROGRESS) */
  export let dataForSave = {
    nameProtagonist: "",
    friendshipScore: 0,
    count: 0,
    bool: false,
    random: 0,

    //Meter
    rexScore: 0,
    scoreForFriendshipRex: "",
    randomPoints: 0,
    pickedMeterScene: false
  };

  //** Credits */
  export function showCredits(): void {
    ƒS.Text.setClass("credits");
    ƒS.Text.print("CREDITS <br> Vielen Dank an alle, die den Dinosauriern durch ihre Stimmen Leben eingehaucht haben: <br> <br> Archie: Simon von Bartschikowski <br> Elenas Mama: Angelika Herbig <br> Lenny: Florian Herbig <br> Lennys Papa: Adrian von Bartschikowski <br> Lucy: Alexandra von Barschikowski <br> Rex: Simon von Barschikowski <br> Rex Mama: Sandra von Bartschikowski <br> Tilly: Julia Herbig <br> Tillys Papa: Lukas Dirlmeier <br> Velo: Christopher Szesny <br> <br> Und auch vielen Dank an Riem für die Einführung in die Welt der Visual Novels.");
  }

  export function showStart(): void {
    ƒS.Text.setClass("credits");
    //ƒS.Sound.play("soundNarrator.start");
    ƒS.Text.print("Wilkommen bei 'Die Suche'. <br> <br> Deine Aufgabe ist es, den kleinen Dinosuarier Rex bei der Suche nach seiner Mama zu unterstüzten. <br> Auf der linken Seite des Bildschirms erscheint eine Anzeige, die den Freundschaftsstatus mit Rex wiederspiegelt. <br>  Mit 'm' kannst du das Menü anzeigen und verschwinden lassen. <br> Die Steckbriefe der gefundenen Dinos findest du unter 'Meine Dinos'. <br>  Viel Spaß!");
  }

  /** Animations */

  /*export function animation(): ƒS.AnimationDefinition {
    return {

      start: { translation: ƒS.positions.bottomcenter, color: ƒS.Color.CSS("blue", 1)},
      end: { translation: ƒS.positions.bottomright, color: ƒS.Color.CSS("green", 0) },
      duration: 3,
      playmode: ƒS.ANIMATION_PLAYMODE.LOOP
    };
  }*/

  export function getAnimation(): ƒS.AnimationDefinition {
    return {
    start: { translation: ƒS.positions.bottomcenter},
    end: { translation: ƒS.positions.bottomleft},
    duration: 1,
    playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }

  export function getAnimationRexRun(): ƒS.AnimationDefinition {
    return {
    start: {translation: ƒS.positions.bottomright},
    end: {translation: ƒS.positionPercent(30, 160)},
    duration: 1,
    playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }

  export function getAnimationElena(): ƒS.AnimationDefinition {
    return {
    start: { translation: ƒS.positions.bottomleft},
    end: { translation: ƒS.positionPercent(50, 150)},
    duration: 1,
    playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }

  //Fly away
  export function getAnimationFlyAway(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positions.bottomleft},
      end: { translation: ƒS.positions.topright},
      duration: 3,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }

  export function getAnimationFlyTowards(): ƒS.AnimationDefinition {
    return {
      start: {translation: ƒS.positions.topright},
      end: {translation: ƒS.positions.bottomleft},
      duration: 3,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }

  export function special(): ƒS.AnimationDefinition {
    return {
      start: {translation: ƒS.positions.bottomleft},
      end: {translation: ƒS.positions.bottomcenter},
      duration: 3,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }

  export function getAnimationRightMiddle(): ƒS.AnimationDefinition {
    return {
      start: {translation: ƒS.positions.bottomright},
      end: {translation: ƒS.positions.bottomcenter},
      duration: 3,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }

  export function getAnimationLucy(): ƒS.AnimationDefinition {
    return {
      start: {translation: ƒS.positions.bottomright},
      end: {translation: ƒS.positionPercent(80, 102)},
      duration: 3,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }

  /** Menu shortcuts */

  let inGameMenuButtons = {
    save: "Speichern",
    load: "Laden",
    //credits später noch einbauen
    close: "Schließen",
    inventory: "Meine Dinos"
  };

  let gameMenu: ƒS.Menu;
// open entstrpicht Menü ist offen und false zu
  let menuIsOpen: boolean = true; 

  async function buttonFunctionalities(_option: string): Promise<void> {
    console.log(_option);
    switch (_option) {
      case inGameMenuButtons.save:
        await ƒS.Progress.save();
        break;
      case inGameMenuButtons.load:
        await ƒS.Progress.load();
        break;
      case inGameMenuButtons.close:
        gameMenu.close();
        menuIsOpen = false;
        break;
      case inGameMenuButtons.inventory:
        await ƒS.Inventory.open();
        break;
    }
  }


  document.addEventListener("keydown", hndKeyPress);
  async function hndKeyPress(_event: KeyboardEvent): Promise<void> {
    switch (_event.code) {
      case ƒ.KEYBOARD_CODE.F8:
        console.log("Save");
        await ƒS.Progress.save();
        break; 
      case ƒ.KEYBOARD_CODE.F9:
        console.log("Load");
        await ƒS.Progress.load();
        break;
      case ƒ.KEYBOARD_CODE.M:
        if (menuIsOpen) {
          console.log("Close");
          gameMenu.close();
          menuIsOpen = false;
        }
        else {
          console.log("Open");
          gameMenu.open();
          menuIsOpen = true; 
        }
        break;
        
    }
  }

  /** JITTER 
  */
  export async function jitter(): Promise<void> {
    let scene: HTMLElement = <HTMLElement>document.getElementsByTagName("scene")[0];

    for (let i: number = 0; i < 15; i++) {
      if (i % 2 == 0) {
        scene.style.transform = `translateX(15px)`;
      }
      else {
        scene.style.transform = `translateX(-15px)`;
      }
      await new Promise(resolve => setTimeout(resolve, 40));
    }
    scene.style.transform = `translateX(0px)`;
  }
  //let graph: ƒ.Node = ƒS.Base.getGraph();
  //ƒ.Debug.branch(graph);
  //let home: ƒ.Node = graph.getChildrenByName("Back") [0].getChildren() [0];

  //export function jitter(): void {
    //graph.mtxLocal.translateX(ƒ.Random.default.getRangeFloored(-2, 3));
    //ƒS.update();
  //}

  /**ITEMS */
  export let items = {
    rex: { //Namen vergeben wir
      name: "Rex",
      description: "<br>" + "<br>" + "- Spezies: Tyrannosaurus Rex " + "<br>" + "- Alter: 0" + "<br>" + "- Vorkommen: Oberkreide" + "<br>" + "- Gewicht: ca. 9 Tonnen" + "<br>" + "- Größe: Höhe: 6 m. Länge: 13 m." + "<br>" + "- Lieblingsessen: Fleisch" + "<br>" + "- Sonstiges: Bis zu 23 cm. lange Zähne und bei einem Biss bis zu 9 Tonnen Druck auf einem Zahn" + "<br>" + "<br>" + "Rex ist ein neugieriger kleiner Dinosaurier der nicht lange bei einer Sache bleiben kann. Er liebt Abenteuer und hat ein gutes Herz.", 
      image: "./Images/Characters/Rex/RexHappy.png",
      static: true
    },
    elena: {
      name: "Elena",
      description: "<br>" + "<br>" + "- Spezies: Dilophosaurus " + "<br>" + "- Alter: 2" + "<br>" + "- Vorkommen: Unterjura" + "<br>" + "- Gewicht: ca. 500 kg." + "<br>" + "- Größe: Höhe: 2,5 m. Länge: 6 m." + "<br>" + "- Lieblingsessen: Fisch, Fleisch" + "<br>" + "- Sonstiges: Wird auch Zweikamm-Echse genannt und ist schnell und wendig." + "<br>" + "<br>" + "Elena ist ein hübsches, liebevolles Dino-Mädchen. Sie ist fürsorglich und möchte niemanden enttäuschen.",
      image: "./Images/Characters/Elena/ElenaHappy.png",
      static: true
    },
    lenny: {
      name: "Lenny",
      description: "<br>" + "<br>" + "- Spezies: Pterodaktylus " + "<br>" + "- Alter: 1" + "<br>" + "- Vorkommen: Oberjura" + "<br>" + "- Gewicht: ca. 2 kg." + "<br>" + "- Größe: Flügelspannweite ca. 50 - 75 cm" + "<br>" + "- Lieblingsessen: Wirbellose, kleine Fische" + "<br>" + "- Sonstiges: Hat keine Federn sondern Flughäute und lebt in großen Kolonien." + "<br>" + "<br>" + "Lenny ist ein schüchterner kleiner Pterodaktylus der sich schnell vor anderen fürchtet. Er ist in sich gekehrt und ruhig.",
      image: "./Images/Characters/Lenny/LennyHappy.png",
      static: true
    },
    archie: {
      name: "Archie",
      description: "<br>" + "<br>" + "- Spezies: Archäopteryx " + "<br>" + "- Alter: 20" + "<br>" + "- Vorkommen: Oberjura" + "<br>" + "- Gewicht: ca. 0,5 - 1 kg." + "<br>" + "- Größe: Wie ein Rabe" + "<br>" + "- Lieblingsessen: Insekten" + "<br>" + "- Sonstiges: Ist das Bindeglied zwischen Vögeln und Dinosauriern und fliegt im Gleitflug." + "<br>" + "<br>" + "Archie ist ein manipulativer, gemeiner Dino der nicht gerne alleine ist. Er hasst Regeln und Eltern.",
      image: "./Images/Characters/Archie/ArchieHappy.png",
      static: true
    },
    velo: {
      name: "Velo",
      description: "<br>" + "<br>" + "- Spezies: Velociraptor" + "<br>" + "- Alter: 33" + "<br>" + "- Vorkommen: Oberkreide" + "<br>" + "- Gewicht: ca. 15 kg." + "<br>" + "- Größe: Höhe: 50 cm. Länge: 2 m." + "<br>" + "- Lieblingsessen: Fleisch" + "<br>" + "- Sonstiges: Hat ein räumliches Blickfeld wie eine Eule und einen exzellenten Geruchssinn." + "<br>" + "<br>" + "Velo ist ein egozentrischer und gemeiner Dino. Er steht gerne im Mittelpunkt und kennt kein Mitleid.",
      image: "./Images/Characters/Velo/VeloHappy.png",
      static: true
    },
    lucy: {
      name: "Lucy",
      description: "<br>" + "<br>" + "- Spezies: Diplodocus " + "<br>" + "- Alter: 30" + "<br>" + "- Vorkommen: Oberjura" + "<br>" + "- Gewicht: ca. 10 - 16 Tonnen" + "<br>" + "- Größe: Höhe: 4 m. Länge: 27 m." + "<br>" + "- Lieblingsessen: (Wasser-) Pflanzen und Blätter" + "<br>" + "- Sonstiges: Kann Blätter in bis zu 10 m. höhe fressen, dank dem bis zu 6 m. langen Hals" + "<br>" + "<br>" + "Lucy ist eine hilfsbereite und liebenswürdige Dino-Dame. Sie wünscht sich gerne ein Kind und wäre eine tolle Mama.",
      image: "./Images/Characters/Lucy/LucyHappy.png",
      static: true
    },
    tilly: {
      name: "Tilly",
      description: "<br>" + "<br>" + "- Spezies: Triceratops " + "<br>" + "- Alter: 4" + "<br>" + "- Vorkommen: Oberkreide" + "<br>" + "- Gewicht: ca. 6 - 12 Tonnen" + "<br>" + "- Größe: ca. 9 m. lang" + "<br>" + "- Lieblingsessen: Krautige Pflenzen, Palmfarne" + "<br>" + "- Sonstiges: Ist eher Einzelgänger und kann sich mit den drei Hörnern auf dem Kopf super verteidigen." + "<br>" + "<br>" + "Tilly ist ein hübsches, arrogantes Triceratops-Mädchen. Sie hält sich für etwas Besseres und ist sehr verwöhnt.",
      image: "./Images/Characters/Tilly/TillyHappy.png",
      static: true
    }
      
  };

  /** RANDOM NUMBER */
  export function getRandom (_min: number, _max: number): number {
    
    let random = Math.floor(Math.random() * (_max - _min + 1)) + _min;
    return random;
  }

  /** SCENES */

  window.addEventListener("load", start);
  export function start(_event: Event): void {
    
    ƒS.Speech.hide();
    document.getElementById("scoreForFriendshipRex").setAttribute("class", "hide");
    document.getElementsByName("friendshipScore").forEach(meterStuff => meterStuff.hidden = true);
    gameMenu = ƒS.Menu.create(inGameMenuButtons, buttonFunctionalities, "gameMenuCssClass");
    buttonFunctionalities("Close");
    document.getElementById("save").setAttribute("class", "hide");
    document.getElementById("load").setAttribute("class", "hide");
    document.getElementById("close").setAttribute("class", "hide");
    document.getElementById("inventory").setAttribute("class", "hide");
    //Scene Hierarchy

    let scenes: ƒS.Scenes = [

      { id: "SceneOne", scene: SceneOne, name: "Scene One Scene", next: "EmptyScene" },
      { id: "SceneTwo", scene: SceneTwo, name: "Scene Two Scene"}, //in next id schreiben; Am ENDE EMptyScene aufrufen -> neue szene die dann nur Funktion am Anfang hat
      { id: "SceneThree", scene: SceneThree, name: "Scene Three Scene"},
      { id: "SceneFour", scene: SceneFour, name: "Scene Four Scene"},
      { id: "SceneFive1", scene: SceneFive1, name: "SceneFive1 Scene"},
      { id: "SceneFiveA", scene: SceneFiveA, name: "Scene FiveA Scene"},
      { id: "SceneFiveB", scene: SceneFiveB, name: "Scene FiveB Scene"},
      { id: "SceneSix", scene: SceneSix, name: "SceneSix Scene"},
      { id: "SceneSeven", scene: SceneSeven, name: "SceneSeven Scene"},
      { id: "SceneEight", scene: SceneEight, name: "SceneEight Scene"},

      { id: "SpecialScene", scene: SpecialScene, name: "SpecialScene, Freunde?"},
      { id: "EndScene", scene: End, name: "End Scene"},
      { id: "EmptyScene", scene: Empty, name: "Empty"}

    ];

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);
  
   
    // start the sequence
    ƒS.Progress.go(scenes);
  }
}