"use strict";
var TheSearch;
(function (TheSearch) {
    function playSounds() {
        console.log("in Play SOunds");
        let yes = document.createElement("audio");
        yes.src = "./Audio/Decisions/Ja.m4a";
        let selectYes = document.querySelector("#iSayYes");
        if (selectYes) {
            selectYes.addEventListener("mouseenter", playYes);
            function playYes() {
                yes.play();
            }
        }
    }
    TheSearch.playSounds = playSounds;
})(TheSearch || (TheSearch = {}));
/* Sound Effekte für die Mini-Games: https://www.epidemicsound.com/de/music/featured/
  Sound Effekt Magenknurren: https://elements.envato.com/de/dinosaur-growl-M4X6N23?_ga=2.62807788.1932411130.1675942328-1714739041.1669640489&utm_campaign=elements_mixkit_cs_sfx_search_no_results&utm_medium=referral&utm_source=mixkit
*/
var TheSearch;
/* Sound Effekte für die Mini-Games: https://www.epidemicsound.com/de/music/featured/
  Sound Effekt Magenknurren: https://elements.envato.com/de/dinosaur-growl-M4X6N23?_ga=2.62807788.1932411130.1675942328-1714739041.1669640489&utm_campaign=elements_mixkit_cs_sfx_search_no_results&utm_medium=referral&utm_source=mixkit
*/
(function (TheSearch) {
    TheSearch.ƒ = FudgeCore;
    TheSearch.ƒS = FudgeStory;
    console.log("FudgeStory template starting");
    /** TRANSITIONS **/
    TheSearch.transition = {
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
    TheSearch.soundRex = {
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
    TheSearch.soundNarrator = {
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
    TheSearch.soundElena = {
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
    TheSearch.soundLenny = {
        s5At0001: "./Audio/Lenny/S5AT1.m4a",
        s5At0002: "./Audio/Lenny/S5AT2.m4a",
        s5At0003: "./Audio/Lenny/S5AT3.mp4"
    };
    TheSearch.soundArchie = {
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
    TheSearch.soundLennysDad = {
        s5At0001: "./Audio/LennysPapa/S5AT1.m4a",
        s5At0002: "./Audio/LennysPapa/S5AT2.m4a",
        s5At0003: "./Audio/LennysPapa/S5AT3.m4a",
        s5At0004: "./Audio/LennysPapa/S5AT4.m4a"
    };
    TheSearch.soundTilly = {
        s51t0001: "./Audio/Tilly/S51T1.mp4",
        s51t0002: "./Audio/Tilly/S51T2.mp4",
        s51t0003: "./Audio/Tilly/S51T3.mp4"
    };
    TheSearch.soundTillysDad = {
        s51t0001: "./Audio/TillysPapa/TillysPapaT0001.mp4"
    };
    TheSearch.soundElenasMom = {
        s3t0001: "./Audio/ElenasMama/ElenasMomT0001.m4a"
    };
    TheSearch.soundVelo = {
        s6t0001: "./Audio/Velo/S6T1.mp4",
        s6t0002: "./Audio/Velo/S6T2.mp4",
        s6t0003: "./Audio/Velo/S6T3.mp4",
        s6t0004: "./Audio/Velo/S6T4.mp4",
        s6t0005: "./Audio/Velo/S6T5.m4a",
        s6t0006: "./Audio/Velo/S6T6.mp4"
    };
    TheSearch.soundLucy = {
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
    TheSearch.soundRexMom = {
        s8t0001: "./Audio/Mama/S8T1.m4a",
        s8t0002: "./Audio/Mama/S8T2.m4a",
        s8t0003: "./Audio/Mama/S8T3.m4a",
        s8schluchz: "./Audio/Mama/S8TSchluchz.m4a",
        s8wein: "./Audio/Mama/S8TWein.m4a"
    };
    TheSearch.soundSFX = {
        eggs: "./Audio/SFX/BubbleBlips_Eggs_Epidemicsound.mp4",
        catchCook: "./Audio/SFX/BubbleBlip_CookCatch_Epidemicsound.mp4",
        jump: "./Audio/SFX/SuctionPop_Epidemicsound_jump.mp3"
    };
    /**LOCATIONS */
    TheSearch.locations = {
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
    TheSearch.characters = {
        narrator: {
            name: ""
        },
        protagonist: {
            name: ""
        },
        rex: {
            name: "Rex",
            origin: TheSearch.ƒS.ORIGIN.BOTTOMCENTER,
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
            origin: TheSearch.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                scared: "./Images/Characters/Elena/ElenaScared.png",
                happy: "./Images/Characters/Elena/ElenaHappy.png"
            }
        },
        lenny: {
            name: "Lenny",
            origin: TheSearch.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                scared: "./Images/Characters/Lenny/LennyScared.png",
                happy: "./Images/Characters/Lenny/LennyHappy.png",
                small: "./Images/Characters/Lenny/LennyKlein.png"
            }
        },
        lennysDad: {
            name: "LennysPapa",
            origin: TheSearch.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "./Images/Characters/LennysDad/LennysDadAngry.png",
                happy: "./Images/Characters/LennysDad/LennysDadHappy.png",
                happyRight: "./Images/Characters/LennysDad/LennysDadHappyRight.png"
            }
        },
        archie: {
            name: "Archie",
            origin: TheSearch.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "./Images/Characters/Archie/ArchieAngry.png",
                happy: "./Images/Characters/Archie/ArchieHappy.png"
            }
        },
        tilly: {
            name: "Tilly",
            origin: TheSearch.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "./Images/Characters/Tilly/TillyAngry.png",
                happy: "./Images/Characters/Tilly/TillyHappy.png"
            }
        },
        velo: {
            name: "Velo",
            origin: TheSearch.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                happy: "./Images/Characters/Velo/VeloHappy.png",
                scared: "./Images/Characters/Velo/VeloScared.png",
                small: "./Images/Characters/Velo/VeloKlein.png"
            }
        },
        lucy: {
            name: "Lucy",
            origin: TheSearch.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                happy: "./Images/Characters/Lucy/LucyHappy.png",
                angry: "./Images/Characters/Lucy/LucyAngry.png",
                sad: "./Images/Characters/Lucy/LucySad.png"
            }
        },
        mama: {
            name: "Mama",
            origin: TheSearch.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                happy: "./Images/Characters/RexMom/Mom.png"
            }
        },
        end: {
            name: "END",
            origin: TheSearch.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                end: "./Images/GUI/End.png"
            }
        }
    };
    //** DATA THAT WILL BE SAVED (GAME PROGRESS) */
    TheSearch.dataForSave = {
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
    function showCredits() {
        TheSearch.ƒS.Text.setClass("credits");
        TheSearch.ƒS.Text.print("CREDITS <br> Vielen Dank an alle, die den Dinosauriern durch ihre Stimmen Leben eingehaucht haben: <br> <br> Archie: Simon von Bartschikowski <br> Elenas Mama: Angelika Herbig <br> Lenny: Florian Herbig <br> Lennys Papa: Adrian von Bartschikowski <br> Lucy: Alexandra von Barschikowski <br> Rex: Simon von Barschikowski <br> Rex Mama: Sandra von Bartschikowski <br> Tilly: Julia Herbig <br> Tillys Papa: Lukas Dirlmeier <br> Velo: Christopher Szesny <br> <br> Und auch vielen Dank an Riem für die Einführung in die Welt der Visual Novels.");
    }
    TheSearch.showCredits = showCredits;
    function showStart() {
        TheSearch.ƒS.Text.setClass("credits");
        //ƒS.Sound.play("soundNarrator.start");
        TheSearch.ƒS.Text.print("Wilkommen bei 'Die Suche'. <br> <br> Deine Aufgabe ist es, den kleinen Dinosuarier Rex bei der Suche nach seiner Mama zu unterstüzten. <br> Auf der linken Seite des Bildschirms erscheint eine Anzeige, die den Freundschaftsstatus mit Rex wiederspiegelt. <br>  Mit 'm' kannst du das Menü anzeigen und verschwinden lassen. <br> Die Steckbriefe der gefundenen Dinos findest du unter 'Meine Dinos'. <br>  Viel Spaß!");
    }
    TheSearch.showStart = showStart;
    /** Animations */
    /*export function animation(): ƒS.AnimationDefinition {
      return {
  
        start: { translation: ƒS.positions.bottomcenter, color: ƒS.Color.CSS("blue", 1)},
        end: { translation: ƒS.positions.bottomright, color: ƒS.Color.CSS("green", 0) },
        duration: 3,
        playmode: ƒS.ANIMATION_PLAYMODE.LOOP
      };
    }*/
    function getAnimation() {
        return {
            start: { translation: TheSearch.ƒS.positions.bottomcenter },
            end: { translation: TheSearch.ƒS.positions.bottomleft },
            duration: 1,
            playmode: TheSearch.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    TheSearch.getAnimation = getAnimation;
    function getAnimationRexRun() {
        return {
            start: { translation: TheSearch.ƒS.positions.bottomright },
            end: { translation: TheSearch.ƒS.positionPercent(30, 160) },
            duration: 1,
            playmode: TheSearch.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    TheSearch.getAnimationRexRun = getAnimationRexRun;
    function getAnimationElena() {
        return {
            start: { translation: TheSearch.ƒS.positions.bottomleft },
            end: { translation: TheSearch.ƒS.positionPercent(50, 150) },
            duration: 1,
            playmode: TheSearch.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    TheSearch.getAnimationElena = getAnimationElena;
    //Fly away
    function getAnimationFlyAway() {
        return {
            start: { translation: TheSearch.ƒS.positions.bottomleft },
            end: { translation: TheSearch.ƒS.positions.topright },
            duration: 3,
            playmode: TheSearch.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    TheSearch.getAnimationFlyAway = getAnimationFlyAway;
    function getAnimationFlyTowards() {
        return {
            start: { translation: TheSearch.ƒS.positions.topright },
            end: { translation: TheSearch.ƒS.positions.bottomleft },
            duration: 3,
            playmode: TheSearch.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    TheSearch.getAnimationFlyTowards = getAnimationFlyTowards;
    function special() {
        return {
            start: { translation: TheSearch.ƒS.positions.bottomleft },
            end: { translation: TheSearch.ƒS.positions.bottomcenter },
            duration: 3,
            playmode: TheSearch.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    TheSearch.special = special;
    function getAnimationRightMiddle() {
        return {
            start: { translation: TheSearch.ƒS.positions.bottomright },
            end: { translation: TheSearch.ƒS.positions.bottomcenter },
            duration: 3,
            playmode: TheSearch.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    TheSearch.getAnimationRightMiddle = getAnimationRightMiddle;
    function getAnimationLucy() {
        return {
            start: { translation: TheSearch.ƒS.positions.bottomright },
            end: { translation: TheSearch.ƒS.positionPercent(80, 102) },
            duration: 3,
            playmode: TheSearch.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    TheSearch.getAnimationLucy = getAnimationLucy;
    /** Menu shortcuts */
    let inGameMenuButtons = {
        save: "Speichern",
        load: "Laden",
        //credits später noch einbauen
        close: "Schließen",
        inventory: "Meine Dinos"
    };
    let gameMenu;
    // open entstrpicht Menü ist offen und false zu
    let menuIsOpen = true;
    async function buttonFunctionalities(_option) {
        console.log(_option);
        switch (_option) {
            case inGameMenuButtons.save:
                await TheSearch.ƒS.Progress.save();
                break;
            case inGameMenuButtons.load:
                await TheSearch.ƒS.Progress.load();
                break;
            case inGameMenuButtons.close:
                gameMenu.close();
                menuIsOpen = false;
                break;
            case inGameMenuButtons.inventory:
                await TheSearch.ƒS.Inventory.open();
                break;
        }
    }
    document.addEventListener("keydown", hndKeyPress);
    async function hndKeyPress(_event) {
        switch (_event.code) {
            case TheSearch.ƒ.KEYBOARD_CODE.F8:
                console.log("Save");
                await TheSearch.ƒS.Progress.save();
                break;
            case TheSearch.ƒ.KEYBOARD_CODE.F9:
                console.log("Load");
                await TheSearch.ƒS.Progress.load();
                break;
            case TheSearch.ƒ.KEYBOARD_CODE.M:
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
    async function jitter() {
        let scene = document.getElementsByTagName("scene")[0];
        for (let i = 0; i < 15; i++) {
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
    TheSearch.jitter = jitter;
    //let graph: ƒ.Node = ƒS.Base.getGraph();
    //ƒ.Debug.branch(graph);
    //let home: ƒ.Node = graph.getChildrenByName("Back") [0].getChildren() [0];
    //export function jitter(): void {
    //graph.mtxLocal.translateX(ƒ.Random.default.getRangeFloored(-2, 3));
    //ƒS.update();
    //}
    /**ITEMS */
    TheSearch.items = {
        rex: {
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
    function getRandom(_min, _max) {
        let random = Math.floor(Math.random() * (_max - _min + 1)) + _min;
        return random;
    }
    TheSearch.getRandom = getRandom;
    /** SCENES */
    window.addEventListener("load", start);
    function start(_event) {
        TheSearch.ƒS.Speech.hide();
        document.getElementById("scoreForFriendshipRex").setAttribute("class", "hide");
        document.getElementsByName("friendshipScore").forEach(meterStuff => meterStuff.hidden = true);
        gameMenu = TheSearch.ƒS.Menu.create(inGameMenuButtons, buttonFunctionalities, "gameMenuCssClass");
        buttonFunctionalities("Close");
        document.getElementById("save").setAttribute("class", "hide");
        document.getElementById("load").setAttribute("class", "hide");
        document.getElementById("close").setAttribute("class", "hide");
        document.getElementById("inventory").setAttribute("class", "hide");
        //Scene Hierarchy
        let scenes = [
            { id: "SceneOne", scene: TheSearch.SceneOne, name: "Scene One Scene", next: "EmptyScene" },
            { id: "SceneTwo", scene: TheSearch.SceneTwo, name: "Scene Two Scene" },
            { id: "SceneThree", scene: TheSearch.SceneThree, name: "Scene Three Scene" },
            { id: "SceneFour", scene: TheSearch.SceneFour, name: "Scene Four Scene" },
            { id: "SceneFive1", scene: TheSearch.SceneFive1, name: "SceneFive1 Scene" },
            { id: "SceneFiveA", scene: TheSearch.SceneFiveA, name: "Scene FiveA Scene" },
            { id: "SceneFiveB", scene: TheSearch.SceneFiveB, name: "Scene FiveB Scene" },
            { id: "SceneSix", scene: TheSearch.SceneSix, name: "SceneSix Scene" },
            { id: "SceneSeven", scene: TheSearch.SceneSeven, name: "SceneSeven Scene" },
            { id: "SceneEight", scene: TheSearch.SceneEight, name: "SceneEight Scene" },
            { id: "SpecialScene", scene: TheSearch.SpecialScene, name: "SpecialScene, Freunde?" },
            { id: "EndScene", scene: TheSearch.End, name: "End Scene" },
            { id: "EmptyScene", scene: TheSearch.Empty, name: "Empty" }
        ];
        let uiElement = document.querySelector("[type=interface]");
        TheSearch.dataForSave = TheSearch.ƒS.Progress.setData(TheSearch.dataForSave, uiElement);
        // start the sequence
        TheSearch.ƒS.Progress.go(scenes);
    }
    TheSearch.start = start;
})(TheSearch || (TheSearch = {}));
/*namespace Template {
  export async function Scene(): ƒS.SceneReturn {
    console.log("FudgeStory Template Scene starting");
  }
}*/ 
var TheSearch;
(function (TheSearch) {
    async function Empty() {
        //
    }
    TheSearch.Empty = Empty;
})(TheSearch || (TheSearch = {}));
var TheSearch;
(function (TheSearch) {
    async function End() {
        console.log("FudgeStory Template End starting");
        //await ƒS.Location.show(locations.Home_Hatched);
        let text = {
            Narrator: {
                T0001: "Um die Novel neu zu starten, klicke auf den Bildschirm"
            }
        };
        TheSearch.ƒS.Speech.hide();
        document.getElementsByName("friendshipScore").forEach(meterStuff => meterStuff.hidden = true);
        document.getElementById("scoreForFriendshipRex").setAttribute("class", "hide");
        document.getElementById("save").setAttribute("class", "hide");
        document.getElementById("load").setAttribute("class", "hide");
        document.getElementById("close").setAttribute("class", "hide");
        document.getElementById("inventory").setAttribute("class", "hide");
        await TheSearch.ƒS.Character.show(TheSearch.characters.end, TheSearch.characters.end.pose.end, TheSearch.ƒS.positions.bottomcenter);
        TheSearch.ƒS.update();
        TheSearch.showCredits();
        await TheSearch.ƒS.Speech.tell(TheSearch.characters.narrator, text.Narrator.T0001);
        location.reload();
    }
    TheSearch.End = End;
})(TheSearch || (TheSearch = {}));
var TheSearch;
(function (TheSearch) {
    async function FirstScene() {
        console.log("SceneOne starting");
        let text = {
            Rex: {
                T0001: "Hallo",
                T0002: "Anderer Text",
                T0003: "Text Nummer drei"
            }
        };
        //Textbox soll verschwinden
        await TheSearch.ƒS.Location.show(TheSearch.locations.Home_Hatched);
        //await ƒS.update();
        await TheSearch.ƒS.Character.show(TheSearch.characters.rex, TheSearch.characters.rex.pose.happy, TheSearch.ƒS.positionPercent(68, 129)); //Prozentual angegeben!
        //await ƒS.Character.show(characters.rex, characters.rex.pose.happy, ƒS.positions.bottomcener)
        await TheSearch.ƒS.update(TheSearch.transition.start.duration, TheSearch.transition.start.alpha, TheSearch.transition.start.edge);
        //ƒS.Speech.show();
        await TheSearch.ƒS.Speech.tell(TheSearch.characters.rex, text.Rex.T0001);
        await TheSearch.ƒS.Speech.tell(TheSearch.characters.rex, text.Rex.T0002);
        //Nach jeder Location und nach jedem Character updaten!!
        //Entscheidungsmöglichkeiten anlegen
        let sceneOne1decision = {
            iSayYes: "Yes",
            iSayOk: "Ok",
            iSayNo: "No",
            iSayThanks: "Thank you"
        };
        let dialogueElementS1D1 = await TheSearch.ƒS.Menu.getInput(sceneOne1decision, "choicesCssClass");
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
    TheSearch.FirstScene = FirstScene;
})(TheSearch || (TheSearch = {}));
var TheSearch;
(function (TheSearch) {
    async function SceneEight() {
        console.log("SceneSeven starting");
        let text = {
            Narrator: {
                T0001: "Am nächsten Morgen erzählt Rex seiner Mama von seinem Abenteuer. Sie verabschieden Lucy und vereinbaren ein neues Treffen mit ihr. Danke, dass du Rex so unterstützt hast!",
                //T0002: "Was ist denn Rex?",
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
        await TheSearch.ƒS.Location.show(TheSearch.locations.HomeNight);
        await TheSearch.ƒS.update(TheSearch.transition.stepsTogether.duration, TheSearch.transition.stepsTogether.alpha, TheSearch.transition.stepsTogether.edge);
        TheSearch.ƒS.Sound.play(TheSearch.soundLucy.s8t0001, 1);
        await TheSearch.ƒS.Speech.tell(TheSearch.characters.lucy, text.Lucy.T0001);
        TheSearch.ƒS.Sound.play(TheSearch.soundRexMom.s8schluchz, 1);
        TheSearch.ƒS.Sound.play(TheSearch.soundRexMom.s8wein, 1);
        await TheSearch.ƒS.Speech.tell(TheSearch.characters.narrator, text.Narrator.T0003);
        TheSearch.ƒS.Sound.play(TheSearch.soundRex.s8t0001, 1);
        await TheSearch.ƒS.Speech.tell(TheSearch.characters.rex, text.Rex.T0001);
        await TheSearch.ƒS.Character.show(TheSearch.characters.mama, TheSearch.characters.mama.pose.happy, TheSearch.ƒS.positions.bottomleft);
        TheSearch.ƒS.update();
        TheSearch.ƒS.Sound.play(TheSearch.soundRexMom.s8t0001, 1);
        await TheSearch.ƒS.Speech.tell(TheSearch.characters.mama, text.Mama.T0001);
        await TheSearch.ƒS.Character.show(TheSearch.characters.rex, TheSearch.characters.rex.pose.happy, TheSearch.ƒS.positions.bottomright);
        await TheSearch.ƒS.Character.hide(TheSearch.characters.mama);
        await TheSearch.ƒS.Character.show(TheSearch.characters.lucy, TheSearch.characters.lucy.pose.sad, TheSearch.ƒS.positions.bottomleft);
        await TheSearch.ƒS.Character.show(TheSearch.characters.mama, TheSearch.characters.mama.pose.happy, TheSearch.ƒS.positions.bottomcenter);
        TheSearch.ƒS.update();
        TheSearch.ƒS.Sound.play(TheSearch.soundLucy.s8t0002, 1);
        await TheSearch.ƒS.Speech.tell(TheSearch.characters.lucy, text.Lucy.T0002);
        TheSearch.ƒS.Sound.play(TheSearch.soundRexMom.s8t0002, 1);
        await TheSearch.ƒS.Speech.tell(TheSearch.characters.mama, text.Mama.T0002);
        await TheSearch.ƒS.Character.hide(TheSearch.characters.lucy);
        await TheSearch.ƒS.Character.show(TheSearch.characters.lucy, TheSearch.characters.lucy.pose.happy, TheSearch.ƒS.positions.bottomleft);
        TheSearch.ƒS.update();
        TheSearch.ƒS.Sound.play(TheSearch.soundLucy.s8t0003, 1);
        await TheSearch.ƒS.Speech.tell(TheSearch.characters.lucy, text.Lucy.T0003);
        TheSearch.ƒS.Sound.play(TheSearch.soundRexMom.s8t0003, 1);
        await TheSearch.ƒS.Speech.tell(TheSearch.characters.mama, text.Mama.T0003);
        TheSearch.ƒS.Character.hide(TheSearch.characters.mama);
        TheSearch.ƒS.Character.hide(TheSearch.characters.lucy);
        TheSearch.ƒS.Character.hide(TheSearch.characters.rex);
        await TheSearch.ƒS.Location.show(TheSearch.locations.Home_Hatched);
        await TheSearch.ƒS.update(TheSearch.transition.dayNight.duration, TheSearch.transition.dayNight.alpha, TheSearch.transition.dayNight.edge);
        TheSearch.ƒS.Sound.play(TheSearch.soundNarrator.s8t0001, 1);
        await TheSearch.ƒS.Speech.tell(TheSearch.characters.narrator, text.Narrator.T0001);
        if (TheSearch.dataForSave.friendshipScore >= 1) {
            return TheSearch.SpecialScene();
        }
        else {
            return TheSearch.End();
        }
    }
    TheSearch.SceneEight = SceneEight;
})(TheSearch || (TheSearch = {}));
var TheSearch;
(function (TheSearch) {
    async function SceneFive1() {
        console.log("SceneFive1 starting");
        let text = {
            Narrator: {
                T0001: "Nachdem Rex an der Schlucht vorbei gelaufen ist, hat er jetzt eine Lichtung mit aufeinander gestapelten Steinen erreicht. Oh, er ist ja gar nicht alleine. Wer ist denn das?",
                T0002: "Rex läuft weiter auf den Stein zu und versucht ihn Tilly abzunehmen. Sie lässt sich von ihm aber nicht beirren und dreht sich einfach um. Rex wird langsam böse...",
                T0004: "Oh oh, das sieht nicht gut aus. Schnell, du musst Rex helfen vor Tillys Papa zu fliehen! Mit einem kurzen Klick auf die Pfeiltaste nach oben oder die Leertaste springt Rex über die Steine.",
                T0005: "Tilly widmet ihre Aufmerksamkeit wieder einem Stein, mit dem sie spielt. Rex versucht ihr den Stein abzunehmen, sie wird sauer.",
                T0006: "Oh nein, jetzt gibt es Ärger...",
                T0007: "Geschafft!",
                T0008: "..."
            },
            Rex: {
                T0001: "Soll ich mich vorstellen?",
                T0002: "Hey, Hey, wie nennt man einen Dinosaurier der einen Cowboyhut und Cowboystiefel trägt?",
                T0003: "Einen Tyrannosaurus Tex! Hahaha! Ich hätte noch einen Witz: Geht ein Cowboy zum Frisuer.... Pony weg! Haha!",
                T0004: "Hallo, ich bin Rex. Ich suche nach meiner Mama, hast du sie zufällig gesehen?",
                T0005: "Du bist echt doof!"
            },
            Tilly: {
                T0001: "Papaaa!!",
                T0002: "Ich bin Tilly. Ich bin ein Triceratops und lebe in der Oberkreide Zeit. Am liebsten esse ich krautige Pflanzen wie zum Beispiel Palmfarne. Ich werde mal ganz groß - bis zu 9 lang. Mein Gewicht variiert zwischen 6 und 12 Tonnen. Ich bin eher ein Einzelgänger und sehr gerne allein. Wenn mich jemand ärgert, dann kann ich mich mit meinen drei Hörnern ausgezeichnet wehren. Deshalb solltest du mich jetzt auch lieber in Ruhe lassen.",
                T0003: "Achja? Papaaa, der T-Rex ärgert mich!"
            }
        };
        await TheSearch.ƒS.Location.show(TheSearch.locations.L_Tricera);
        await TheSearch.ƒS.Character.show(TheSearch.characters.rex, TheSearch.characters.rex.pose.happy, TheSearch.ƒS.positions.bottomright);
        await TheSearch.ƒS.Character.show(TheSearch.characters.tilly, TheSearch.characters.tilly.pose.happy, TheSearch.ƒS.positions.bottomleft);
        await TheSearch.ƒS.update(TheSearch.transition.steps.duration, TheSearch.transition.steps.alpha, TheSearch.transition.steps.edge);
        TheSearch.ƒS.Sound.play(TheSearch.soundNarrator.s51t0001, 1);
        await TheSearch.ƒS.Speech.tell(TheSearch.characters.narrator, text.Narrator.T0001);
        TheSearch.ƒS.Sound.play(TheSearch.soundRex.s51t0001, 1);
        await TheSearch.ƒS.Speech.tell(TheSearch.characters.rex, text.Rex.T0001);
        /**DECISIONS */
        /** INTRODUCE? */
        let sceneFive1Decision1Introduce = {
            iSayYes: "Ja",
            iSayNo: "Nein"
        };
        /** PLAY OR ASK FOR HELP? */
        let sceneFive1Decision2PlayOrAsk = {
            iSayJustPlay: "Mitspielen",
            iSayAskAgain: "Nochmal fragen"
        };
        /** GET ANGRY? */
        let sceneFive1Decision3GetAngry = {
            iSayGetAngry: "Böse werden",
            iSayDoNotGetAngry: "Nicht böse werden"
        };
        let dialogueElementS51D1Introduce = await TheSearch.ƒS.Menu.getInput(sceneFive1Decision1Introduce, "choicesCssClass");
        switch (dialogueElementS51D1Introduce) {
            case sceneFive1Decision1Introduce.iSayYes:
                console.log("iSayYes");
                TheSearch.ƒS.Sound.play(TheSearch.soundRex.s51t0004, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.rex, text.Rex.T0004);
                TheSearch.ƒS.Sound.play(TheSearch.soundTilly.s51t0002, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.tilly, text.Tilly.T0002);
                TheSearch.ƒS.Text.addClass("novelPageTilly");
                await TheSearch.ƒS.Text.print("");
                TheSearch.ƒS.Inventory.add(TheSearch.items.tilly);
                TheSearch.ƒS.update();
                let dialogueElementS51D2PlayOrAsk = await TheSearch.ƒS.Menu.getInput(sceneFive1Decision2PlayOrAsk, "choicesCssClass");
                switch (dialogueElementS51D2PlayOrAsk) {
                    case sceneFive1Decision2PlayOrAsk.iSayJustPlay:
                        console.log("iSayJustPlay");
                        TheSearch.ƒS.Sound.play(TheSearch.soundNarrator.s51t0002, 1);
                        await TheSearch.ƒS.Speech.tell(TheSearch.characters.narrator, text.Narrator.T0002);
                        await TheSearch.ƒS.Character.hide(TheSearch.characters.rex);
                        await TheSearch.ƒS.Character.animate(TheSearch.characters.rex, TheSearch.characters.rex.pose.happy, TheSearch.getAnimationRightMiddle());
                        await TheSearch.ƒS.Character.hide(TheSearch.characters.rex);
                        await TheSearch.ƒS.Character.show(TheSearch.characters.rex, TheSearch.characters.rex.pose.happy, TheSearch.ƒS.positions.bottomcenter);
                        TheSearch.ƒS.update();
                        let dialogueElementS51D3GetAngry = await TheSearch.ƒS.Menu.getInput(sceneFive1Decision3GetAngry, "choicesCssClass");
                        switch (dialogueElementS51D3GetAngry) {
                            case sceneFive1Decision3GetAngry.iSayGetAngry:
                                console.log("iSayGetAngry");
                                TheSearch.dataForSave.friendshipScore -= 1;
                                await TheSearch.ƒS.Character.hide(TheSearch.characters.rex);
                                await TheSearch.ƒS.Character.show(TheSearch.characters.rex, TheSearch.characters.rex.pose.angry, TheSearch.ƒS.positions.bottomcenter);
                                TheSearch.ƒS.update();
                                await TheSearch.ƒS.Character.hide(TheSearch.characters.tilly);
                                await TheSearch.ƒS.Character.show(TheSearch.characters.tilly, TheSearch.characters.tilly.pose.angry, TheSearch.ƒS.positions.bottomleft);
                                TheSearch.ƒS.update();
                                TheSearch.ƒS.Sound.play(TheSearch.soundRex.s51t0005, 1);
                                await TheSearch.ƒS.Speech.tell(TheSearch.characters.rex, text.Rex.T0005);
                                TheSearch.ƒS.Sound.play(TheSearch.soundTilly.s51t0003, 1);
                                await TheSearch.ƒS.Speech.tell(TheSearch.characters.tilly, text.Tilly.T0003);
                                TheSearch.ƒS.Sound.play(TheSearch.soundTillysDad.s51t0001, 1);
                                await TheSearch.ƒS.Speech.tell(TheSearch.characters.narrator, text.Narrator.T0008);
                                TheSearch.ƒS.Sound.play(TheSearch.soundNarrator.s51Game3, 1);
                                await TheSearch.ƒS.Speech.tell(TheSearch.characters.narrator, text.Narrator.T0004);
                                /**MINI GAME 3 */
                                let gameField = document.createElement("div");
                                gameField.setAttribute("id", "gameField");
                                document.body.appendChild(gameField);
                                let canvas = document.querySelector("canvas");
                                canvas.setAttribute("class", "hide");
                                let save = document.querySelector("#save");
                                save.setAttribute("class", "hide");
                                let load = document.querySelector("#load");
                                load.setAttribute("class", "hide");
                                let close = document.querySelector("#close");
                                close.setAttribute("class", "hide");
                                let inventory = document.querySelector("#inventory");
                                inventory.setAttribute("class", "hide");
                                let speech = document.querySelector("speech");
                                speech.setAttribute("class", "hide");
                                document.getElementsByName("friendshipScore").forEach(meterStuff => meterStuff.hidden = true);
                                document.getElementById("scoreForFriendshipRex").setAttribute("class", "hide");
                                let character = document.createElement("div");
                                character.setAttribute("id", "character");
                                gameField.appendChild(character);
                                let characterBottom = parseInt(window.getComputedStyle(character).getPropertyValue("bottom"));
                                let characterRight = parseInt(window.getComputedStyle(character).getPropertyValue("right"));
                                let chracterwidth = parseInt(window.getComputedStyle(character).getPropertyValue("width"));
                                let isJumping = false;
                                let upTime;
                                let downTime;
                                let score = 0;
                                function jump() {
                                    if (isJumping)
                                        return;
                                    upTime = setInterval(() => {
                                        if (characterBottom >= 300) {
                                            clearInterval(upTime);
                                            downTime = setInterval(() => {
                                                if (characterBottom <= 5) {
                                                    clearInterval(downTime);
                                                    isJumping = false;
                                                }
                                                characterBottom -= 10;
                                                character.style.bottom = characterBottom + "px";
                                            }, 20);
                                        }
                                        characterBottom += 10;
                                        character.style.bottom = characterBottom + "px";
                                        isJumping = true;
                                    }, 20);
                                }
                                async function generateStones() {
                                    let stones = document.createElement("div");
                                    stones.setAttribute("class", "stones");
                                    gameField.appendChild(stones);
                                    let stone = document.createElement("div");
                                    stone.setAttribute("class", "stone");
                                    stones.appendChild(stone);
                                    let randomTimeout = Math.floor(Math.random() * 2000) + 2000;
                                    let stoneRight = -30;
                                    let stoneBottom = 5;
                                    let stoneWidth = 30;
                                    let stoneHeight = 100;
                                    let stoneInterval = setInterval(moveStone, 20);
                                    let stoneTimeout = setTimeout(generateStones, randomTimeout);
                                    async function moveStone() {
                                        stoneRight += 5;
                                        stone.style.right = stoneRight + "px";
                                        stone.style.bottom = stoneBottom + "px";
                                        if (characterRight >= stoneRight - chracterwidth && characterRight <= stoneRight + stoneWidth && characterBottom <= stoneBottom + stoneHeight) {
                                            console.log("Hit");
                                            console.log("ParentNode " + gameField.parentNode + "ParentElement " + gameField.parentElement);
                                            clearInterval(stoneInterval);
                                            clearTimeout(stoneTimeout);
                                            clearInterval(upTime);
                                            clearInterval(downTime);
                                            document.body.removeChild(gameField);
                                            canvas.classList.remove("hide");
                                            speech.classList.remove("hide");
                                            save.classList.remove("hide");
                                            load.classList.remove("hide");
                                            close.classList.remove("hide");
                                            inventory.classList.remove("hide");
                                            document.getElementsByName("friendshipScore").forEach(meterStuff => meterStuff.hidden = false);
                                            document.getElementById("scoreForFriendshipRex").classList.remove("hide");
                                            TheSearch.dataForSave.friendshipScore -= 5;
                                            await TheSearch.ƒS.Character.hide(TheSearch.characters.tilly);
                                            await TheSearch.ƒS.Character.hide(TheSearch.characters.rex);
                                            TheSearch.ƒS.update();
                                            await TheSearch.ƒS.Character.show(TheSearch.characters.rex, TheSearch.characters.rex.pose.sad, TheSearch.ƒS.positions.bottomright);
                                            TheSearch.ƒS.Sound.play(TheSearch.soundNarrator.s51t0006, 1);
                                            await TheSearch.ƒS.Speech.tell(TheSearch.characters.narrator, text.Narrator.T0006);
                                            TheSearch.ƒS.Character.hide(TheSearch.characters.tilly);
                                            TheSearch.ƒS.Character.hide(TheSearch.characters.rex);
                                            TheSearch.ƒS.Speech.clear();
                                            TheSearch.ƒS.Speech.hide();
                                            return TheSearch.SceneSix();
                                        }
                                        if (score == 5) {
                                            clearInterval(stoneInterval);
                                            clearTimeout(stoneTimeout);
                                            clearInterval(upTime);
                                            clearInterval(downTime);
                                            document.body.removeChild(gameField);
                                            canvas.classList.remove("hide");
                                            speech.classList.remove("hide");
                                            save.classList.remove("hide");
                                            load.classList.remove("hide");
                                            close.classList.remove("hide");
                                            inventory.classList.remove("hide");
                                            document.getElementsByName("friendshipScore").forEach(meterStuff => meterStuff.hidden = false);
                                            document.getElementById("scoreForFriendshipRex").classList.remove("hide");
                                            TheSearch.dataForSave.friendshipScore += 5;
                                            await TheSearch.ƒS.Character.hide(TheSearch.characters.tilly);
                                            await TheSearch.ƒS.Character.hide(TheSearch.characters.rex);
                                            await TheSearch.ƒS.Character.show(TheSearch.characters.rex, TheSearch.characters.rex.pose.happy, TheSearch.ƒS.positions.bottomright);
                                            TheSearch.ƒS.update();
                                            await TheSearch.ƒS.Sound.play(TheSearch.soundNarrator.s51t0007, 1);
                                            await TheSearch.ƒS.Speech.tell(TheSearch.characters.narrator, text.Narrator.T0007);
                                            await TheSearch.ƒS.Character.hide(TheSearch.characters.rex);
                                            TheSearch.ƒS.Speech.clear();
                                            TheSearch.ƒS.Speech.hide();
                                            return TheSearch.SceneSix();
                                        }
                                    }
                                }
                                generateStones();
                                function control(_e) {
                                    if (_e.key == "ArrowUp" || _e.key == " ") {
                                        TheSearch.ƒS.Sound.play(TheSearch.soundSFX.jump, 1);
                                        jump();
                                        score++;
                                    }
                                }
                                document.addEventListener("keydown", control);
                                break;
                            case sceneFive1Decision3GetAngry.iSayDoNotGetAngry:
                                console.log("iSayDoNotGetAngry");
                                TheSearch.dataForSave.friendshipScore += 1;
                                TheSearch.ƒS.Character.hide(TheSearch.characters.tilly);
                                TheSearch.ƒS.Character.hide(TheSearch.characters.rex);
                                TheSearch.ƒS.Speech.clear();
                                TheSearch.ƒS.Speech.hide();
                                let sceneSix = TheSearch.SceneSix();
                                return sceneSix;
                                break;
                        }
                        break;
                    case sceneFive1Decision2PlayOrAsk.iSayAskAgain:
                        console.log("iSayAskAgain");
                        await TheSearch.ƒS.Character.hide(TheSearch.characters.tilly);
                        await TheSearch.ƒS.Character.show(TheSearch.characters.tilly, TheSearch.characters.tilly.pose.angry, TheSearch.ƒS.positions.bottomleft);
                        TheSearch.ƒS.update();
                        TheSearch.ƒS.Sound.play(TheSearch.soundTilly.s51t0001, 1);
                        await TheSearch.ƒS.Speech.tell(TheSearch.characters.tilly, text.Tilly.T0001);
                        await TheSearch.ƒS.Character.hide(TheSearch.characters.rex);
                        TheSearch.ƒS.update();
                        await TheSearch.ƒS.Character.animate(TheSearch.characters.rex, TheSearch.characters.rex.pose.sad, TheSearch.getAnimation());
                        TheSearch.ƒS.Character.hide(TheSearch.characters.tilly);
                        TheSearch.ƒS.Character.hide(TheSearch.characters.rex);
                        TheSearch.ƒS.Speech.clear();
                        TheSearch.ƒS.Speech.hide();
                        return TheSearch.SceneSix();
                        break;
                }
                break;
            case sceneFive1Decision1Introduce.iSayNo:
                console.log("iSayNo");
                TheSearch.ƒS.Sound.play(TheSearch.soundRex.s51t0002, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.rex, text.Rex.T0002);
                TheSearch.ƒS.Sound.play(TheSearch.soundRex.s51t0003, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.rex, text.Rex.T0003);
                TheSearch.ƒS.Sound.play(TheSearch.soundTilly.s51t0001, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.tilly, text.Tilly.T0001);
                TheSearch.ƒS.Character.hide(TheSearch.characters.tilly);
                TheSearch.ƒS.Character.hide(TheSearch.characters.rex);
                TheSearch.ƒS.Speech.clear();
                TheSearch.ƒS.Speech.hide();
                return TheSearch.SceneSix();
                break;
        }
    }
    TheSearch.SceneFive1 = SceneFive1;
})(TheSearch || (TheSearch = {}));
var TheSearch;
(function (TheSearch) {
    async function SceneFiveA() {
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
                T0001: TheSearch.dataForSave.nameProtagonist + ", was soll ich tun?",
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
        await TheSearch.ƒS.Location.show(TheSearch.locations.L_Ptero);
        await TheSearch.ƒS.Character.show(TheSearch.characters.lenny, TheSearch.characters.lenny.pose.small, TheSearch.ƒS.positionPercent(18, 29));
        await TheSearch.ƒS.update(TheSearch.transition.steps.duration, TheSearch.transition.steps.alpha, TheSearch.transition.steps.edge);
        TheSearch.ƒS.Sound.play(TheSearch.soundNarrator.s5At0001, 1);
        await TheSearch.ƒS.Speech.tell(TheSearch.characters.narrator, text.Narrator.T0001);
        TheSearch.ƒS.Sound.play(TheSearch.soundNarrator.s5At0002, 1);
        await TheSearch.ƒS.Speech.tell(TheSearch.characters.narrator, text.Narrator.T0002);
        await TheSearch.ƒS.Character.show(TheSearch.characters.rex, TheSearch.characters.rex.pose.happy, TheSearch.ƒS.positions.bottomright);
        //await ƒS.Character.show(characters.lenny, characters.lenny.pose.happy, ƒS.positions.bottomleft);
        TheSearch.ƒS.update();
        TheSearch.ƒS.Sound.play(TheSearch.soundRex.s5At0001, 1);
        await TheSearch.ƒS.Speech.tell(TheSearch.characters.rex, text.Rex.T0001);
        /** DECISION */
        let sceneFiveADecision1WhatToDo = {
            iSayScare: "Erschrecken",
            iSayAskForHelp: "Um Hilfe fragen"
        };
        let dialogueElementS5AD1WhatToDo = await TheSearch.ƒS.Menu.getInput(sceneFiveADecision1WhatToDo, "choicesCssClass");
        switch (dialogueElementS5AD1WhatToDo) {
            case sceneFiveADecision1WhatToDo.iSayScare:
                console.log("Scare him");
                TheSearch.dataForSave.friendshipScore--;
                TheSearch.ƒS.Character.hide(TheSearch.characters.lenny);
                await TheSearch.ƒS.Character.show(TheSearch.characters.lenny, TheSearch.characters.lenny.pose.scared, TheSearch.ƒS.positions.bottomleft);
                TheSearch.ƒS.update();
                TheSearch.ƒS.Sound.play(TheSearch.soundLenny.s5At0001, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.lenny, text.Lenny.T0001);
                TheSearch.ƒS.Character.hide(TheSearch.characters.lenny);
                TheSearch.ƒS.update();
                await TheSearch.ƒS.Character.animate(TheSearch.characters.lenny, TheSearch.characters.lenny.pose.happy, TheSearch.getAnimationFlyAway());
                TheSearch.ƒS.Character.hide(TheSearch.characters.lenny);
                TheSearch.ƒS.update();
                TheSearch.ƒS.Sound.play(TheSearch.soundRex.s5At0002, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.rex, text.Rex.T0002);
                TheSearch.ƒS.Sound.play(TheSearch.soundNarrator.s5At0003, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.narrator, text.Narrator.T0003);
                await TheSearch.ƒS.Character.animate(TheSearch.characters.lennysDad, TheSearch.characters.lennysDad.pose.happy, TheSearch.getAnimationFlyTowards());
                await TheSearch.ƒS.Character.hide(TheSearch.characters.lennysDad);
                TheSearch.ƒS.update();
                await TheSearch.ƒS.Character.show(TheSearch.characters.lennysDad, TheSearch.characters.lennysDad.pose.angry, TheSearch.ƒS.positions.bottomleft);
                TheSearch.ƒS.update();
                TheSearch.ƒS.Sound.play(TheSearch.soundLennysDad.s5At0001, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.lennysDad, text.Papa.T0001);
                TheSearch.ƒS.Character.hide(TheSearch.characters.rex);
                await TheSearch.ƒS.Character.show(TheSearch.characters.rex, TheSearch.characters.rex.pose.sad, TheSearch.ƒS.positions.bottomright);
                TheSearch.ƒS.update();
                TheSearch.ƒS.Character.hide(TheSearch.characters.lennysDad);
                TheSearch.ƒS.update();
                await TheSearch.ƒS.Character.animate(TheSearch.characters.lennysDad, TheSearch.characters.lennysDad.pose.happyRight, TheSearch.getAnimationFlyAway());
                TheSearch.ƒS.Character.hide(TheSearch.characters.lennysDad);
                TheSearch.ƒS.update();
                TheSearch.ƒS.Sound.play(TheSearch.soundNarrator.s5At0004, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.narrator, text.Narrator.T0004);
                TheSearch.ƒS.Sound.play(TheSearch.soundNarrator.s5At0005, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.narrator, text.Narrator.T0005);
                await TheSearch.ƒS.Character.show(TheSearch.characters.archie, TheSearch.characters.archie.pose.happy, TheSearch.ƒS.positions.bottomleft);
                TheSearch.ƒS.update();
                TheSearch.ƒS.Sound.play(TheSearch.soundArchie.s5At0001, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.archie, text.Archie.T0001);
                TheSearch.ƒS.Sound.play(TheSearch.soundArchie.s5At0002, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.archie, text.Archie.T0002);
                TheSearch.ƒS.Text.addClass("novelPageArchie");
                await TheSearch.ƒS.Text.print("");
                TheSearch.ƒS.Inventory.add(TheSearch.items.archie);
                TheSearch.ƒS.update();
                TheSearch.ƒS.Sound.play(TheSearch.soundRex.s5At0003, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.rex, text.Rex.T0003);
                TheSearch.ƒS.Sound.play(TheSearch.soundArchie.s5At0003, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.archie, text.Archie.T0003);
                TheSearch.ƒS.Sound.play(TheSearch.soundRex.s5At0004, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.rex, text.Rex.T0004);
                TheSearch.ƒS.Sound.play(TheSearch.soundArchie.s5At0004, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.archie, text.Archie.T0004);
                /** DECISION */
                let sceneFiveADecision2GoWithArchie = {
                    iSayIGo: "Mit Archie gehen",
                    iSayNo: "Alleine weiter gehen"
                };
                let dialogueElementS5AD2GoWithArchie = await TheSearch.ƒS.Menu.getInput(sceneFiveADecision2GoWithArchie, "choicesCssClass");
                switch (dialogueElementS5AD2GoWithArchie) {
                    case sceneFiveADecision2GoWithArchie.iSayIGo:
                        console.log("Go With Archie");
                        TheSearch.dataForSave.friendshipScore -= 1;
                        TheSearch.ƒS.Sound.play(TheSearch.soundArchie.s5At0005, 1);
                        await TheSearch.ƒS.Speech.tell(TheSearch.characters.archie, text.Archie.T0005);
                        TheSearch.ƒS.Speech.hide();
                        TheSearch.ƒS.Character.hide(TheSearch.characters.rex);
                        TheSearch.ƒS.Character.hide(TheSearch.characters.archie);
                        TheSearch.ƒS.Speech.clear();
                        TheSearch.ƒS.update();
                        return TheSearch.SceneFiveB();
                        break;
                    case sceneFiveADecision2GoWithArchie.iSayNo:
                        console.log("Go Alone");
                        TheSearch.ƒS.Character.hide(TheSearch.characters.archie);
                        await TheSearch.ƒS.Character.show(TheSearch.characters.archie, TheSearch.characters.archie.pose.angry, TheSearch.ƒS.positions.bottomleft);
                        TheSearch.ƒS.update();
                        TheSearch.ƒS.Sound.play(TheSearch.soundArchie.s5At0006, 1);
                        await TheSearch.ƒS.Speech.tell(TheSearch.characters.archie, text.Archie.T0006);
                        TheSearch.ƒS.Speech.hide();
                        TheSearch.ƒS.Character.hide(TheSearch.characters.rex);
                        TheSearch.ƒS.Character.hide(TheSearch.characters.archie);
                        TheSearch.ƒS.Speech.clear();
                        TheSearch.ƒS.update();
                        return TheSearch.SceneSix();
                        break;
                }
                break;
            case sceneFiveADecision1WhatToDo.iSayAskForHelp:
                console.log("Ask for help");
                TheSearch.dataForSave.friendshipScore++;
                await TheSearch.ƒS.Character.hide(TheSearch.characters.lenny);
                await TheSearch.ƒS.Character.show(TheSearch.characters.lenny, TheSearch.characters.lenny.pose.happy, TheSearch.ƒS.positions.bottomleft);
                TheSearch.ƒS.update();
                TheSearch.ƒS.Sound.play(TheSearch.soundRex.s5At0005, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.rex, text.Rex.T0005);
                TheSearch.ƒS.Sound.play(TheSearch.soundRex.s5At0006, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.rex, text.Rex.T0006);
                TheSearch.ƒS.Sound.play(TheSearch.soundRex.s5At0007, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.rex, text.Rex.T0007);
                TheSearch.ƒS.Sound.play(TheSearch.soundLenny.s5At0002, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.lenny, text.Lenny.T0002);
                TheSearch.ƒS.Text.addClass("novelPageLenny");
                await TheSearch.ƒS.Text.print("");
                TheSearch.ƒS.Inventory.add(TheSearch.items.lenny);
                TheSearch.ƒS.update();
                TheSearch.ƒS.Sound.play(TheSearch.soundRex.s5At0008, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.rex, text.Rex.T0008);
                TheSearch.ƒS.Sound.play(TheSearch.soundLenny.s5At0003, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.lenny, text.Lenny.T0003);
                TheSearch.ƒS.Character.hide(TheSearch.characters.lenny);
                TheSearch.ƒS.update();
                await TheSearch.ƒS.Character.animate(TheSearch.characters.lenny, TheSearch.characters.lenny.pose.happy, TheSearch.getAnimationFlyAway());
                TheSearch.ƒS.Character.hide(TheSearch.characters.lenny);
                TheSearch.ƒS.update();
                await TheSearch.ƒS.Character.animate(TheSearch.characters.lennysDad, TheSearch.characters.lennysDad.pose.happy, TheSearch.getAnimationFlyTowards());
                TheSearch.ƒS.Character.hide(TheSearch.characters.lennysDad);
                await TheSearch.ƒS.Character.show(TheSearch.characters.lennysDad, TheSearch.characters.lennysDad.pose.angry, TheSearch.ƒS.positions.bottomleft);
                TheSearch.ƒS.update();
                TheSearch.ƒS.Sound.play(TheSearch.soundLennysDad.s5At0002, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.lennysDad, text.Papa.T0002);
                TheSearch.ƒS.Character.hide(TheSearch.characters.rex);
                await TheSearch.ƒS.Character.show(TheSearch.characters.rex, TheSearch.characters.rex.pose.sad, TheSearch.ƒS.positions.bottomright);
                TheSearch.ƒS.update();
                TheSearch.ƒS.Sound.play(TheSearch.soundRex.s5AtWein, 1);
                TheSearch.ƒS.Sound.play(TheSearch.soundRex.s5At0009, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.rex, text.Rex.T0009);
                TheSearch.ƒS.Character.hide(TheSearch.characters.lennysDad);
                await TheSearch.ƒS.Character.show(TheSearch.characters.lennysDad, TheSearch.characters.lennysDad.pose.happyRight, TheSearch.ƒS.positions.bottomleft);
                TheSearch.ƒS.update();
                TheSearch.ƒS.Sound.play(TheSearch.soundLennysDad.s5At0003, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.lennysDad, text.Papa.T0003);
                TheSearch.ƒS.Sound.play(TheSearch.soundRex.s5At0010, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.rex, text.Rex.T0010);
                TheSearch.ƒS.Sound.play(TheSearch.soundNarrator.s5At0006, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.narrator, text.Narrator.T0006);
                TheSearch.ƒS.Speech.hide();
                TheSearch.ƒS.Character.hide(TheSearch.characters.rex);
                TheSearch.ƒS.Character.hide(TheSearch.characters.lennysDad);
                TheSearch.ƒS.Speech.clear();
                TheSearch.ƒS.update();
                await TheSearch.ƒS.Location.show(TheSearch.locations.L_Velo);
                await TheSearch.ƒS.Character.show(TheSearch.characters.rex, TheSearch.characters.rex.pose.happy, TheSearch.ƒS.positions.bottomright);
                await TheSearch.ƒS.Character.show(TheSearch.characters.lennysDad, TheSearch.characters.lennysDad.pose.happyRight, TheSearch.ƒS.positions.bottomleft);
                TheSearch.ƒS.update(TheSearch.transition.fly.duration, TheSearch.transition.fly.alpha, TheSearch.transition.fly.edge);
                TheSearch.ƒS.Sound.play(TheSearch.soundLennysDad.s5At0004, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.lennysDad, text.Papa.T0004);
                TheSearch.ƒS.Sound.play(TheSearch.soundRex.s5At0011, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.rex, text.Rex.T0011);
                await TheSearch.ƒS.Character.animate(TheSearch.characters.lennysDad, TheSearch.characters.lennysDad.pose.happyRight, TheSearch.getAnimationFlyAway());
                //ƒS.Character.hide(characters.lennysDad);
                TheSearch.ƒS.update();
                TheSearch.ƒS.Speech.hide();
                TheSearch.ƒS.Character.hide(TheSearch.characters.rex);
                //ƒS.Character.hide(characters.lennysDad);
                TheSearch.ƒS.Speech.clear();
                TheSearch.ƒS.update();
                return TheSearch.SceneSix();
                break;
        }
    }
    TheSearch.SceneFiveA = SceneFiveA;
})(TheSearch || (TheSearch = {}));
var TheSearch;
(function (TheSearch) {
    async function SceneFiveB() {
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
        await TheSearch.ƒS.Location.show(TheSearch.locations.L_Archae);
        await TheSearch.ƒS.Character.show(TheSearch.characters.rex, TheSearch.characters.rex.pose.happy, TheSearch.ƒS.positions.bottomright);
        await TheSearch.ƒS.Character.show(TheSearch.characters.archie, TheSearch.characters.archie.pose.happy, TheSearch.ƒS.positions.bottomleft);
        await TheSearch.ƒS.update(TheSearch.transition.wArchie.duration, TheSearch.transition.wArchie.alpha, TheSearch.transition.wArchie.edge);
        TheSearch.ƒS.Sound.play(TheSearch.soundNarrator.s5Bt0001, 1);
        await TheSearch.ƒS.Speech.tell(TheSearch.characters.narrator, text.Narrator.T0001);
        TheSearch.ƒS.Sound.play(TheSearch.soundArchie.s5Bt0001, 1);
        await TheSearch.ƒS.Speech.tell(TheSearch.characters.archie, text.Archie.T0001);
        TheSearch.ƒS.Sound.play(TheSearch.soundArchie.s5Bt0002, 1);
        await TheSearch.ƒS.Speech.tell(TheSearch.characters.archie, text.Archie.T0002);
        /**DECISION */
        let sceneFiveBDecision1Stay = {
            iSayStay: "Bei Archie bleiben",
            iSayGo: "Gehen"
        };
        let dialogueElementS5BD1Stay = await TheSearch.ƒS.Menu.getInput(sceneFiveBDecision1Stay, "choicesCssClass");
        switch (dialogueElementS5BD1Stay) {
            case sceneFiveBDecision1Stay.iSayStay:
                console.log("iSayStay");
                TheSearch.dataForSave.friendshipScore -= 1;
                TheSearch.ƒS.Sound.play(TheSearch.soundArchie.s5Bt0004, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.archie, text.Archie.T0004);
                TheSearch.ƒS.Character.hide(TheSearch.characters.rex);
                await TheSearch.ƒS.Character.show(TheSearch.characters.rex, TheSearch.characters.rex.pose.bad, TheSearch.ƒS.positions.bottomright);
                TheSearch.ƒS.update();
                TheSearch.ƒS.Sound.play(TheSearch.soundArchie.s5Bt0005, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.archie, text.Archie.T0005);
                TheSearch.ƒS.Speech.hide();
                TheSearch.ƒS.Character.hide(TheSearch.characters.rex);
                TheSearch.ƒS.Character.hide(TheSearch.characters.archie);
                TheSearch.ƒS.Speech.clear();
                TheSearch.ƒS.update();
                if (TheSearch.dataForSave.friendshipScore >= 1) {
                    return TheSearch.SpecialScene();
                }
                else {
                    return TheSearch.End();
                }
                break;
            case sceneFiveBDecision1Stay.iSayGo:
                console.log("iSayGo");
                TheSearch.ƒS.Character.hide(TheSearch.characters.archie);
                await TheSearch.ƒS.Character.show(TheSearch.characters.archie, TheSearch.characters.archie.pose.angry, TheSearch.ƒS.positions.bottomleft);
                TheSearch.ƒS.update();
                TheSearch.ƒS.Sound.play(TheSearch.soundArchie.s5Bt0003, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.archie, text.Archie.T0003);
                TheSearch.ƒS.Speech.hide();
                TheSearch.ƒS.Character.hide(TheSearch.characters.rex);
                TheSearch.ƒS.Character.hide(TheSearch.characters.archie);
                TheSearch.ƒS.Speech.clear();
                TheSearch.ƒS.update();
                return TheSearch.SceneSix();
                break;
        }
    }
    TheSearch.SceneFiveB = SceneFiveB;
})(TheSearch || (TheSearch = {}));
var TheSearch;
(function (TheSearch) {
    async function SceneFour() {
        console.log("SceneThree starting");
        let text = {
            Narrator: {
                T0001: "Und so macht sich Rex weiter auf die Suche nach seiner Mama... ",
                T0002: "Als er die roten Hügel endlich überquert hat, blickt er auf einen kleinen Weg vor sich, der durch eine dunkle Schlucht führt...",
                T0003: "Interessiert schaut er auf den Boden...",
                T0004: "Glücklich und voller Vorfreude, seine Mama bald wieder zu sehen hüpft Rex den engen Weg durch die Schlucht entlang.",
                T0005: "Geknickt und von der dunklen, großen Schlucht eingeschüchtert geht der kleine Dinosaurier an der Schlucht vorbei."
            },
            Rex: {
                T0001: TheSearch.dataForSave.nameProtagonist + ", was ist das?",
                T0002: "Denen gehen wir jetzt nach, komm mit " + TheSearch.dataForSave.nameProtagonist,
                T0003: "Schade..."
            }
        };
        await TheSearch.ƒS.Location.show(TheSearch.locations.L_Steps);
        TheSearch.ƒS.Character.hide(TheSearch.characters.elena);
        await TheSearch.ƒS.Character.show(TheSearch.characters.rex, TheSearch.characters.rex.pose.happy, TheSearch.ƒS.positions.bottomright);
        await TheSearch.ƒS.update(TheSearch.transition.steps.duration, TheSearch.transition.steps.alpha, TheSearch.transition.steps.edge);
        TheSearch.ƒS.Sound.play(TheSearch.soundNarrator.s4t0001, 1);
        await TheSearch.ƒS.Speech.tell(TheSearch.characters.narrator, text.Narrator.T0001);
        TheSearch.ƒS.Sound.play(TheSearch.soundNarrator.s4t0002, 1);
        await TheSearch.ƒS.Speech.tell(TheSearch.characters.narrator, text.Narrator.T0002);
        TheSearch.ƒS.Sound.play(TheSearch.soundNarrator.s4t0003, 1);
        await TheSearch.ƒS.Speech.tell(TheSearch.characters.narrator, text.Narrator.T0003);
        await TheSearch.ƒS.Location.show(TheSearch.locations.L_Steps_Zoom);
        await TheSearch.ƒS.update(TheSearch.transition.mom.duration, TheSearch.transition.mom.alpha, TheSearch.transition.mom.edge);
        TheSearch.ƒS.Sound.play(TheSearch.soundRex.s4t0001, 1);
        await TheSearch.ƒS.Speech.tell(TheSearch.characters.rex, text.Rex.T0001);
        /**DECISION */
        let sceneFourDecision1WhatIsThat = {
            iSaySteps: "Sieht aus wie Dinospuren",
            iSayDirt: "Nur Dreck"
        };
        let dialogueElementS4D1WhatIsThat = await TheSearch.ƒS.Menu.getInput(sceneFourDecision1WhatIsThat, "choicesCssClass");
        switch (dialogueElementS4D1WhatIsThat) {
            case sceneFourDecision1WhatIsThat.iSaySteps:
                console.log("iSaySteps");
                TheSearch.ƒS.Sound.play(TheSearch.soundRex.s4t0002, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.rex, text.Rex.T0002);
                TheSearch.ƒS.Sound.play(TheSearch.soundRex.s4tPfeifen, 1);
                TheSearch.ƒS.Sound.play(TheSearch.soundNarrator.s4t0004, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.narrator, text.Narrator.T0004);
                TheSearch.ƒS.Speech.hide();
                TheSearch.ƒS.Character.hide(TheSearch.characters.rex);
                //ƒS.Character.hide(characters.elena);
                TheSearch.ƒS.Speech.clear();
                TheSearch.ƒS.update();
                //let sceneFiveA: ƒS.SceneReturn = SceneFiveA();
                return TheSearch.SceneFiveA();
                break;
            case sceneFourDecision1WhatIsThat.iSayDirt:
                console.log("iSayDirt");
                TheSearch.ƒS.Sound.play(TheSearch.soundRex.s4t0003, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.rex, text.Rex.T0003);
                TheSearch.ƒS.Sound.play(TheSearch.soundNarrator.s4t0005, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.narrator, text.Narrator.T0005);
                TheSearch.ƒS.Speech.hide();
                TheSearch.ƒS.Character.hide(TheSearch.characters.rex);
                //ƒS.Character.hide(characters.elena);
                TheSearch.ƒS.Speech.clear();
                TheSearch.ƒS.update();
                //let sceneFive1: ƒS.SceneReturn = SceneFive1();
                return TheSearch.SceneFive1();
                break;
        }
    }
    TheSearch.SceneFour = SceneFour;
})(TheSearch || (TheSearch = {}));
var TheSearch;
(function (TheSearch) {
    async function SceneOne() {
        console.log("SceneOne starting");
        let text = {
            Narrator: {
                T0001: "Wir befinden und im Erdmittelalter, ungefähr 245 Millionen Jahre in der Vergangenheit...",
                T0002: "Es gibt nur einen einzigen Kontinent, Pangaea...",
                T0003: "Aus diesem Urkontinent entwickelten sich über die Zeit unsere heutigen, sieben Kontinente:",
                T0004: "Nord- und Südamerika, Asien, Europa, Afrika, Australien und die Arktis. ",
                T0005: "Das Klima ist schön warm und feucht...",
                T0006: "Hier sehen wir die Eier eines Tyrannosaurus Rex...",
                T0007: "Oh, da sind ja noch gar nicht alle geschlüpft...",
                T0008: "Der Kleine in der Mitte scheint wohl Schwierigkeiten zu haben... Wo ist denn seine Mama?",
                T0009: "Magst du dem kleinen Dino helfen?",
                T0010: "..."
            },
            Rex: {
                T0001: "Danke!",
                T0001_1: "Hallo, ich heiße Rex",
                T0002: "Ich übrigens bin Rex.",
                T0003: "Ich bin ein Tyrannosaurus Rex und lebe in der Oberkreide-Zeit. Ich werde bis zu 6m. groß und mal bis zu 9 Tonnen schwer. Mein Lieblingsessen ist natürlich Fleisch. Vom Typ her bin ich eher ein Einzelgänger. Mit meinen bis zu 23cm langen Zähnen kann ich ganz schön zubeißen. Bis zu 5 Tonnen Druck hat mein Biss auf nur einem Zahn! ",
                T0004: "Aber genug von mir - wer bist denn du?" + "<br>",
                T0005: "Das ist aber ein schöner Name!"
            },
            Instruction: {
                T0001: "Klicke so lange auf die Eier, bis der Dino schlüpft."
            }
        };
        document.getElementsByName("friendshipScore").forEach(meterStuff => meterStuff.hidden = true);
        TheSearch.showStart();
        await TheSearch.ƒS.Location.show(TheSearch.locations.Home);
        await TheSearch.ƒS.update(TheSearch.transition.start.duration, TheSearch.transition.start.alpha, TheSearch.transition.start.edge);
        document.getElementById("save").classList.remove("hide");
        document.getElementById("load").classList.remove("hide");
        document.getElementById("close").classList.remove("hide");
        document.getElementById("inventory").classList.remove("hide");
        await TheSearch.ƒS.Speech.tell(TheSearch.characters.narrator, text.Narrator.T0010);
        TheSearch.ƒS.Sound.play(TheSearch.soundNarrator.s1t0001, 1);
        await TheSearch.ƒS.Speech.tell(TheSearch.characters.narrator, text.Narrator.T0001);
        TheSearch.ƒS.Sound.play(TheSearch.soundNarrator.s1t0002, 1);
        await TheSearch.ƒS.Speech.tell(TheSearch.characters.narrator, text.Narrator.T0002);
        TheSearch.ƒS.Sound.play(TheSearch.soundNarrator.s1t0003, 1);
        await TheSearch.ƒS.Speech.tell(TheSearch.characters.narrator, text.Narrator.T0003);
        TheSearch.ƒS.Sound.play(TheSearch.soundNarrator.s1t0004, 1);
        await TheSearch.ƒS.Speech.tell(TheSearch.characters.narrator, text.Narrator.T0004);
        TheSearch.ƒS.Sound.play(TheSearch.soundNarrator.s1t0005, 1);
        await TheSearch.ƒS.Speech.tell(TheSearch.characters.narrator, text.Narrator.T0005);
        TheSearch.ƒS.Sound.play(TheSearch.soundNarrator.s1t0006, 1);
        await TheSearch.ƒS.Speech.tell(TheSearch.characters.narrator, text.Narrator.T0006);
        TheSearch.ƒS.Sound.play(TheSearch.soundNarrator.s1t0007, 1);
        await TheSearch.ƒS.Speech.tell(TheSearch.characters.narrator, text.Narrator.T0007);
        TheSearch.jitter();
        TheSearch.ƒS.Sound.play(TheSearch.soundNarrator.s1t0008, 1);
        await TheSearch.ƒS.Speech.tell(TheSearch.characters.narrator, text.Narrator.T0008);
        TheSearch.ƒS.Sound.play(TheSearch.soundNarrator.s1t0009, 1);
        await TheSearch.ƒS.Speech.tell(TheSearch.characters.narrator, text.Narrator.T0009);
        /**DECISION HELP REX? */
        let sceneOneDecision1 = {
            iSayYes: "Ja",
            iSayNo: "Nein"
        };
        //playSounds();
        let dialogueElementS1D1 = await TheSearch.ƒS.Menu.getInput(sceneOneDecision1, "choicesCssClass");
        switch (dialogueElementS1D1) {
            case sceneOneDecision1.iSayYes:
                console.log("S1D1 Yes");
                TheSearch.dataForSave.friendshipScore += 1;
                TheSearch.dataForSave.random = TheSearch.getRandom(2, 30);
                helpRex();
                break;
            case sceneOneDecision1.iSayNo:
                console.log("S1D1 No");
                TheSearch.dataForSave.friendshipScore -= 1;
                hatched();
                break;
        }
        async function helpRex() {
            console.log("ISayYes&helpRex");
            let text = {
                Instruction: {
                    T0001: "Klicke so lange auf die Eier, bis der Dino schlüpft."
                }
            };
            let scene = document.querySelector("scene");
            scene.addEventListener("pointerdown", counting);
            TheSearch.ƒS.Sound.play(TheSearch.soundNarrator.s1Game1Intro, 1);
            await TheSearch.ƒS.Speech.tell(TheSearch.characters.narrator, text.Instruction.T0001);
        }
        async function counting() {
            console.log("counting");
            TheSearch.ƒS.Sound.play(TheSearch.soundSFX.eggs, 1);
            TheSearch.dataForSave.count++;
            if (TheSearch.dataForSave.count >= TheSearch.dataForSave.random) {
                console.log("Rex is here!");
                TheSearch.dataForSave.count = 0;
                let scene = document.querySelector("scene");
                scene.removeEventListener("pointerdown", counting);
                TheSearch.dataForSave.bool = true;
                hatched();
            }
        }
        async function hatched() {
            await TheSearch.ƒS.Location.show(TheSearch.locations.Home_Hatched),
                await TheSearch.ƒS.update(TheSearch.transition.start.duration, TheSearch.transition.start.alpha, TheSearch.transition.start.edge);
            await TheSearch.ƒS.Character.show(TheSearch.characters.rex, TheSearch.characters.rex.pose.happy, TheSearch.ƒS.positions.bottomcenter);
            TheSearch.ƒS.update();
            if (TheSearch.dataForSave.bool == true) {
                document.getElementsByName("friendshipScore").forEach(meterStuff => meterStuff.hidden = false);
                document.getElementById("scoreForFriendshipRex").classList.remove("hide");
                TheSearch.ƒS.Sound.play(TheSearch.soundRex.t0001Rex, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.rex, text.Rex.T0001);
                TheSearch.ƒS.Sound.play(TheSearch.soundRex.t0002Rex, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.rex, text.Rex.T0002);
                TheSearch.dataForSave.bool = false;
            }
            else {
                document.getElementsByName("friendshipScore").forEach(meterStuff => meterStuff.hidden = false);
                document.getElementById("scoreForFriendshipRex").classList.remove("hide");
                TheSearch.ƒS.Sound.play(TheSearch.soundRex.t0001_1Rex, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.rex, text.Rex.T0001_1);
            }
            TheSearch.ƒS.Sound.play(TheSearch.soundRex.t0003Rex, 1);
            await TheSearch.ƒS.Speech.tell(TheSearch.characters.rex, text.Rex.T0003);
            TheSearch.ƒS.Inventory.add(TheSearch.items.rex);
            TheSearch.ƒS.update();
            TheSearch.ƒS.Text.addClass("novelPageRex");
            await TheSearch.ƒS.Text.print("");
            TheSearch.ƒS.Sound.play(TheSearch.soundRex.t0004Rex, 1);
            await TheSearch.ƒS.Speech.tell(TheSearch.characters.rex, text.Rex.T0004);
            TheSearch.dataForSave.nameProtagonist = await TheSearch.ƒS.Speech.getInput();
            TheSearch.ƒS.Sound.play(TheSearch.soundRex.t0005Rex, 1);
            await TheSearch.ƒS.Speech.tell(TheSearch.characters.rex, text.Rex.T0005);
            TheSearch.ƒS.Speech.clear();
            TheSearch.ƒS.Speech.hide();
            TheSearch.ƒS.Character.hide(TheSearch.characters.rex);
            return TheSearch.SceneTwo();
        }
    }
    TheSearch.SceneOne = SceneOne;
})(TheSearch || (TheSearch = {}));
var TheSearch;
(function (TheSearch) {
    async function SceneSeven() {
        console.log("SceneSeven starting");
        let text = {
            Narrator: {
                T0001: "Lucy und Rex gehen den ganzen Weg, den Rex gelaufen ist zurück. Es wird immer dunkler und Rex wird ganz müde..."
            },
            Lucy: {
                T0001: "Und, wie schmeckt es?",
                T0002: "Na klar, ich kann dir alles zeigen.",
                T0003: "Aber natürlich, was ist das denn für eine Frage! Ich kümmere mich sehr gerne um dich Rex.",
                T0004: "Nein... Damit kann ich leider nciht dienen. Wieso bist du denn so ausgehungert und alleine unterwegs?",
                T0005: "Oh nein Rex, das tut mir leid... Ich kenne deine Mama leider nicht, aber ich helfe dir sehr gerne. Es wird auch schon dunkel, da sollte ein kleiner Dino nicht alleine durch die Gegend laufen. Wo hast du sie denn das letzte mal gesehen? Am besten gehen wir dorthin zurück, wo ihr das letzte mal zusammen wart. Daran erinnert sich deine Mama bestimmt auch.",
                T0006: "Ich glaube ich weiß wo. Komm mit, wir bringen dich nach Hause."
            },
            Rex: {
                T0001: "Mhm, das schmeckt super! Danke! Kannst du mir zeigen was da alles drin ist?",
                T0002: "Super! Darf ich dann bei dir bleiben? Ich habe meine Mama verloren...",
                T0003: "Danke! Und auch danke an dich, dass du mich so sehr bei meiner Suche unterstützt hast. Ich habe dank dir jetzt ein Zuhause gefunden!",
                T0004: "Bäh! Das schmekct mir ja so gar nicht. Das ist mir zu viel Grünzeugs. Hast du auch ein saftiges Steak?",
                T0005: "Ich habe meine Mama verloren und bin auf der Suche nach ihr. Weißt du wo sie sein könnte? Kannst du mir helfen?",
                T0006: "Bei mir zuhause, bei den gelben Bergen."
            }
        };
        await TheSearch.ƒS.Location.show(TheSearch.locations.L_DiplodoNight);
        await TheSearch.ƒS.Character.show(TheSearch.characters.rex, TheSearch.characters.rex.pose.happy, TheSearch.ƒS.positions.bottomright);
        await TheSearch.ƒS.Character.show(TheSearch.characters.lucy, TheSearch.characters.lucy.pose.happy, TheSearch.ƒS.positions.bottomleft);
        await TheSearch.ƒS.update(TheSearch.transition.dayNight.duration, TheSearch.transition.dayNight.alpha, TheSearch.transition.dayNight.edge);
        TheSearch.ƒS.Sound.play(TheSearch.soundLucy.s7t0001, 1);
        await TheSearch.ƒS.Speech.tell(TheSearch.characters.lucy, text.Lucy.T0001);
        /** DECISION */
        let sceneSevenDecision1Tasty = {
            iSayTasty: "Lecker",
            iSayBah: "Nicht gut"
        };
        let dialogueElementS7D1Tasty = await TheSearch.ƒS.Menu.getInput(sceneSevenDecision1Tasty, "choicesCssClass");
        switch (dialogueElementS7D1Tasty) {
            case sceneSevenDecision1Tasty.iSayTasty:
                console.log("Delicious");
                TheSearch.ƒS.Sound.play(TheSearch.soundRex.s7t0001, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.rex, text.Rex.T0001);
                TheSearch.ƒS.Sound.play(TheSearch.soundLucy.s7t0002, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.lucy, text.Lucy.T0002);
                TheSearch.ƒS.Sound.play(TheSearch.soundRex.s7t0002, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.rex, text.Rex.T0002);
                TheSearch.ƒS.Sound.play(TheSearch.soundLucy.s7t0003, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.lucy, text.Lucy.T0003);
                TheSearch.ƒS.Sound.play(TheSearch.soundRex.s7t0003, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.rex, text.Rex.T0003);
                TheSearch.ƒS.Speech.clear();
                TheSearch.ƒS.Speech.hide();
                TheSearch.ƒS.Character.hide(TheSearch.characters.rex);
                TheSearch.ƒS.Character.hide(TheSearch.characters.lucy);
                if (TheSearch.dataForSave.friendshipScore >= 1) {
                    console.log(TheSearch.dataForSave.friendshipScore);
                    return TheSearch.SpecialScene();
                }
                else {
                    console.log(TheSearch.dataForSave.friendshipScore);
                    return TheSearch.End();
                }
                break;
            case sceneSevenDecision1Tasty.iSayBah:
                console.log("Bäh!");
                await TheSearch.ƒS.Character.hide(TheSearch.characters.rex);
                await TheSearch.ƒS.Character.show(TheSearch.characters.rex, TheSearch.characters.rex.pose.disgusted, TheSearch.ƒS.positions.bottomright);
                TheSearch.ƒS.update();
                TheSearch.ƒS.Sound.play(TheSearch.soundRex.s7t0004, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.rex, text.Rex.T0004);
                TheSearch.ƒS.Sound.play(TheSearch.soundLucy.s7t0004, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.lucy, text.Lucy.T0004);
                TheSearch.ƒS.Sound.play(TheSearch.soundRex.s7t0005, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.rex, text.Rex.T0005);
                TheSearch.ƒS.Sound.play(TheSearch.soundLucy.s7t0005, 1);
                await TheSearch.ƒS.Character.hide(TheSearch.characters.rex);
                await TheSearch.ƒS.Character.show(TheSearch.characters.rex, TheSearch.characters.rex.pose.sad, TheSearch.ƒS.positions.bottomright);
                TheSearch.ƒS.Sound.play(TheSearch.soundLucy.s7t0005_2, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.lucy, text.Lucy.T0005);
                TheSearch.ƒS.Sound.play(TheSearch.soundRex.s7t0006, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.rex, text.Rex.T0006);
                TheSearch.ƒS.Sound.play(TheSearch.soundLucy.s7t0006, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.lucy, text.Lucy.T0006);
                TheSearch.ƒS.Sound.play(TheSearch.soundNarrator.s7t0001, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.narrator, text.Narrator.T0001);
                TheSearch.ƒS.Speech.clear();
                TheSearch.ƒS.Speech.hide();
                TheSearch.ƒS.Character.hide(TheSearch.characters.rex);
                TheSearch.ƒS.Character.hide(TheSearch.characters.lucy);
                return TheSearch.SceneEight();
                break;
        }
    }
    TheSearch.SceneSeven = SceneSeven;
})(TheSearch || (TheSearch = {}));
var TheSearch;
(function (TheSearch) {
    async function SceneSix() {
        console.log("SceneSix starting");
        let text = {
            Narrator: {
                T0001: "Rex läuft weiter Richtung Fluss...",
                T0002: "Rex pirscht sich langsam und ganz leise an einen grünen Dinosaurier heran, der gerade abgelenkt in den Fluss schaut. Was Rex nicht weiß: Der Dinosaurier hat ihn schon längst gesehen...",
                T0003: "Der Dinosaurier dreht sich amüsiert um...",
                T0004: "Velo grinst Rex, dem plötzlich gar nicht mehr wohl ist, ganz böse an...",
                T0005: "Rex folgt dem Geruch in seiner Nase und findet verschiedene Zutaten und ein Kochbuch...",
                T0006: "Gebe die Zutaten in der richtigen Reihenfolge in den Topf, indem du sie anklickst. Du hast einen Versuch.",
                T0007: "..."
            },
            Rex: {
                T0001: "Man, habe ich einen Hunger. Ich brauche unbedingt was zu essen! " + TheSearch.dataForSave.nameProtagonist + " soll ich etwas jagen oder essen klauen?",
                T0002: "Da hinten sind irgendwelche Dinos, vielleicht kann ich davon ja einen Essen... Mal versuchen...",
                T0003: "Ahhhhh!",
                T0004: "Hier riecht es nach Futter!",
                T0005: "Mhhmmm das duftet köstlich! Danke!",
                T0006: "Schade... aber besser als nichts. Danke!",
                T0007: "Oh, ähm Entschuldigung... Ich hatte einen solchen Hunger.",
                T0008: "Wissen Sie eigentlich wieso der Diplodocus einen so langen Hals hat?...",
                T0009: "Weil seine Füße so unglaublich stinken! Wer bis du denn?",
                T0010: "Wer bist du?",
                T0011: "Was soll ich damit jetzt anfangen? Kannst du mir da helfen?",
                T0012: "Ich bin Rex",
                T0013: "Wer bist du?",
                T0014: "Oh, dankeschön!"
            },
            Velo: {
                T0001: "Hahaha und das soll mich jetzt beeindrucken? Du kleines Würstchen, vor dir habe ich doch keine Angst!",
                T0002: "Ich bin Velo, ein Velociraptor. Ich lebe in der Oberkreide-Zeit und meine Leibspeise ist alles Fleischhaltige. Ich bin 2 m lang, 50 cm hoch und wiege 15 kg. Ich habe dich schon lange gesehen, mein räumliches Blickfeld ist wie das einer Eule.  Anpirschen bringt bei mir gar nichts, ich habe einen exzellenten Geruchssinn und wusste schon das du hier bist, bevor du mich überhaupt gesehen hast.",
                T0003: "Aber wenn du schon mal da bist, ich habe mindestens genau so einen Hunger wie du - vielleicht drhen wir den Spieß einfach um und ich jage dich!",
                T0004: "Lauf!",
                T0005: "Sei froh das sie hier ist sonst wärst du mein Abendsnack geworden, Würstchen!",
                T0006: "Ist ja gut, ist ja gut.... Ich bin ja schon weg..."
            },
            Lucy: {
                T0001: "Hey Hau bloss ab du Parasit. Lass den Kleinen in Ruhe. Ich meine es ernst. Hau ab oder ich zertrample dich.",
                T0002: "Hau jetzt ab",
                T0003: "Hey, was soll das. Wer kocht denn da mein Abendessen?",
                T0004: "Schon in Ordnung. Was? Wer bist du denn?",
                T0005: "Aha. Ich bin Lucy. Ich bin ein Diplodocus und lebe in der Oberjura-Zeit. Am liebsten esse ich Pflanzen und Blätter wie du schon festgestellt hast. Ich kann bis zu 27 m lang und 4 m hoch werden. Deshalb wiege ich auch so viel. 10 - 16 Tonnen. Mein bis zu sechs Meter langer Hals ist super praktisch. So kann ich bis zu zehn Meter über dem Boden weiden. Du darst gerne was von meinem Essen abhaben. Hier, bediene dich!",
                T0006: "Wer bist du denn?",
                T0007: "Ich bin Lucy. Ich bin ein Diplodocus und lebe in der Oberjura-Zeit. Am liebsten esse ich Pflanzen und Blätter wie du schon festgestellt hast. Ich kann bis zu 27 m lang und 4 m hoch werden. Deshalb wiege ich auch so viel. 10 - 16 Tonnen. Mein bis zu sechs Meter langer Hals ist super praktisch. So kann ich bis zu zehn Meter über dem Boden weiden. Du darst gerne was von meinem Essen abhaben. Hier, bediene dich!"
            }
        };
        await TheSearch.ƒS.Location.show(TheSearch.locations.L_Velo);
        await TheSearch.ƒS.Character.show(TheSearch.characters.velo, TheSearch.characters.velo.pose.small, TheSearch.ƒS.positionPercent(68, 55));
        await TheSearch.ƒS.Character.show(TheSearch.characters.rex, TheSearch.characters.rex.pose.happy, TheSearch.ƒS.positions.bottomright);
        await TheSearch.ƒS.update(TheSearch.transition.steps.duration, TheSearch.transition.steps.alpha, TheSearch.transition.steps.edge);
        TheSearch.ƒS.Sound.play(TheSearch.soundRex.hungry, 1);
        TheSearch.ƒS.Sound.play(TheSearch.soundNarrator.s6t0001, 1);
        await TheSearch.ƒS.Speech.tell(TheSearch.characters.narrator, text.Narrator.T0001);
        //REX Magenknurren
        TheSearch.ƒS.Sound.play(TheSearch.soundRex.s6t0001, 1);
        await TheSearch.ƒS.Speech.tell(TheSearch.characters.rex, text.Rex.T0001);
        /** DECISIONS */
        /**HUNT OR STEAL? */
        let sceneSixDecision1Hungry = {
            iSayHunt: "Jagen",
            iSaySteal: "Essen stehlen"
        };
        /**HELP REX TO COOK? */
        let sceneSixDecision2Cook = {
            iSayYes: "Ja",
            iSayNo: "Nein"
        };
        let dialogueElementS6D1Hungry = await TheSearch.ƒS.Menu.getInput(sceneSixDecision1Hungry, "choicesCssClass");
        switch (dialogueElementS6D1Hungry) {
            case sceneSixDecision1Hungry.iSayHunt:
                console.log("iSayHunt");
                TheSearch.ƒS.Sound.play(TheSearch.soundRex.s6t0002, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.rex, text.Rex.T0002);
                TheSearch.ƒS.Sound.play(TheSearch.soundNarrator.s6t0002, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.narrator, text.Narrator.T0002);
                TheSearch.ƒS.Sound.play(TheSearch.soundRex.s6tRoaw, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.narrator, text.Narrator.T0007);
                await TheSearch.ƒS.Character.hide(TheSearch.characters.velo);
                await TheSearch.ƒS.Character.show(TheSearch.characters.velo, TheSearch.characters.velo.pose.happy, TheSearch.ƒS.positions.bottomleft);
                TheSearch.ƒS.update();
                TheSearch.ƒS.Sound.play(TheSearch.soundNarrator.s6t0003, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.narrator, text.Narrator.T0003);
                await TheSearch.ƒS.Character.show(TheSearch.characters.velo, TheSearch.characters.velo.pose.happy, TheSearch.ƒS.positions.bottomleft);
                TheSearch.ƒS.update();
                TheSearch.ƒS.Sound.play(TheSearch.soundVelo.s6t0001, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.velo, text.Velo.T0001);
                TheSearch.ƒS.Sound.play(TheSearch.soundVelo.s6t0002, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.velo, text.Velo.T0002);
                TheSearch.ƒS.Text.addClass("novelPageVelo");
                await TheSearch.ƒS.Text.print("");
                TheSearch.ƒS.Inventory.add(TheSearch.items.velo);
                TheSearch.ƒS.update();
                TheSearch.ƒS.Sound.play(TheSearch.soundVelo.s6t0003, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.velo, text.Velo.T0003);
                TheSearch.ƒS.Sound.play(TheSearch.soundNarrator.s6t0004, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.narrator, text.Narrator.T0004);
                TheSearch.ƒS.Sound.play(TheSearch.soundVelo.s6t0004, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.velo, text.Velo.T0004);
                TheSearch.ƒS.Sound.play(TheSearch.soundRex.s6t0003, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.rex, text.Rex.T0003);
                await TheSearch.ƒS.Character.hide(TheSearch.characters.rex);
                TheSearch.ƒS.update();
                await TheSearch.ƒS.Character.animate(TheSearch.characters.rex, TheSearch.characters.rex.pose.sad, TheSearch.getAnimationRexRun());
                await TheSearch.ƒS.Character.hide(TheSearch.characters.rex);
                TheSearch.ƒS.update();
                await TheSearch.ƒS.Character.animate(TheSearch.characters.lucy, TheSearch.characters.lucy.pose.angry, TheSearch.getAnimationLucy());
                await TheSearch.ƒS.Character.show(TheSearch.characters.lucy, TheSearch.characters.lucy.pose.angry, TheSearch.ƒS.positionPercent(80, 102));
                await TheSearch.ƒS.Character.show(TheSearch.characters.rex, TheSearch.characters.rex.pose.sad, TheSearch.ƒS.positions.bottomright);
                TheSearch.ƒS.update();
                TheSearch.ƒS.Sound.play(TheSearch.soundLucy.s6t0001, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.lucy, text.Lucy.T0001);
                await TheSearch.ƒS.Character.hide(TheSearch.characters.velo);
                await TheSearch.ƒS.Character.show(TheSearch.characters.velo, TheSearch.characters.velo.pose.scared, TheSearch.ƒS.positions.bottomleft);
                TheSearch.ƒS.Sound.play(TheSearch.soundVelo.s6t0005, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.velo, text.Velo.T0005);
                TheSearch.ƒS.Sound.play(TheSearch.soundLucy.s6t0002, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.lucy, text.Lucy.T0002);
                TheSearch.ƒS.Sound.play(TheSearch.soundVelo.s6t0006, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.velo, text.Velo.T0006);
                await TheSearch.ƒS.Character.hide(TheSearch.characters.velo);
                await TheSearch.ƒS.Character.hide(TheSearch.characters.lucy);
                await TheSearch.ƒS.Character.show(TheSearch.characters.lucy, TheSearch.characters.lucy.pose.happy, TheSearch.ƒS.positions.bottomleft);
                TheSearch.ƒS.update();
                TheSearch.ƒS.Sound.play(TheSearch.soundLucy.s6t0006, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.lucy, text.Lucy.T0006);
                TheSearch.ƒS.Sound.play(TheSearch.soundRex.s6t0012, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.rex, text.Rex.T0012);
                TheSearch.ƒS.Sound.play(TheSearch.soundRex.s6t0013, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.rex, text.Rex.T0013);
                TheSearch.ƒS.Sound.play(TheSearch.soundLucy.s6t0007, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.lucy, text.Lucy.T0007);
                TheSearch.ƒS.Text.addClass("novelPageLucy");
                await TheSearch.ƒS.Text.print("");
                TheSearch.ƒS.Inventory.add(TheSearch.items.lucy);
                TheSearch.ƒS.update();
                await TheSearch.ƒS.Character.hide(TheSearch.characters.rex);
                await TheSearch.ƒS.Character.show(TheSearch.characters.rex, TheSearch.characters.rex.pose.happy, TheSearch.ƒS.positions.bottomright);
                TheSearch.ƒS.update();
                TheSearch.ƒS.Speech.clear();
                TheSearch.ƒS.Speech.hide();
                //await ƒS.Character.hide(characters.velo);
                await TheSearch.ƒS.Character.hide(TheSearch.characters.lucy);
                await TheSearch.ƒS.Character.hide(TheSearch.characters.rex);
                TheSearch.ƒS.update();
                return TheSearch.SceneSeven();
                break;
            case sceneSixDecision1Hungry.iSaySteal:
                console.log("iSaySteal");
                TheSearch.dataForSave.friendshipScore -= 1;
                await TheSearch.ƒS.Character.hide(TheSearch.characters.rex);
                await TheSearch.ƒS.Character.hide(TheSearch.characters.velo);
                await TheSearch.ƒS.Character.show(TheSearch.characters.rex, TheSearch.characters.rex.pose.sniff, TheSearch.ƒS.positions.bottomright);
                TheSearch.ƒS.update();
                await TheSearch.ƒS.Location.show(TheSearch.locations.L_DiplodoDay);
                await TheSearch.ƒS.update(TheSearch.transition.steps.duration, TheSearch.transition.steps.alpha, TheSearch.transition.steps.edge);
                let fireplace = document.createElement("div");
                fireplace.setAttribute("class", "fireplace");
                document.body.appendChild(fireplace);
                TheSearch.ƒS.Sound.play(TheSearch.soundRex.s6t0004, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.rex, text.Rex.T0004);
                TheSearch.ƒS.Sound.play(TheSearch.soundNarrator.s6t0005, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.narrator, text.Narrator.T0005);
                TheSearch.ƒS.Sound.play(TheSearch.soundRex.s6t0011, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.rex, text.Rex.T0011);
                let dialogeElementS6D2Cook = await TheSearch.ƒS.Menu.getInput(sceneSixDecision2Cook, "choicesCssClass");
                switch (dialogeElementS6D2Cook) {
                    case sceneSixDecision2Cook.iSayYes:
                        console.log("iSayYes");
                        TheSearch.dataForSave.friendshipScore += 1;
                        TheSearch.ƒS.Sound.play(TheSearch.soundNarrator.s6Game4, 1);
                        await TheSearch.ƒS.Speech.tell(TheSearch.characters.narrator, text.Narrator.T0006);
                        TheSearch.ƒS.Text.addClass("book");
                        await TheSearch.ƒS.Text.print("");
                        /**GAME 4 */
                        let background = document.createElement("div");
                        background.setAttribute("class", "bgGame2");
                        document.body.appendChild(background);
                        let carrot = document.createElement("div");
                        carrot.setAttribute("class", "carrot");
                        carrot.addEventListener("pointerdown", addVegetable);
                        background.appendChild(carrot);
                        let leek = document.createElement("div");
                        leek.setAttribute("class", "leek");
                        leek.addEventListener("pointerdown", addVegetable);
                        background.appendChild(leek);
                        let potato = document.createElement("div");
                        potato.setAttribute("class", "potato");
                        potato.addEventListener("pointerdown", addVegetable);
                        background.appendChild(potato);
                        let leaf = document.createElement("div");
                        leaf.setAttribute("class", "leaf");
                        leaf.addEventListener("pointerdown", addVegetable);
                        background.appendChild(leaf);
                        let canvas = document.querySelector("canvas");
                        canvas.setAttribute("class", "hide");
                        let save = document.querySelector("#save");
                        save.setAttribute("class", "hide");
                        let load = document.querySelector("#load");
                        load.setAttribute("class", "hide");
                        let close = document.querySelector("#close");
                        close.setAttribute("class", "hide");
                        let inventory = document.querySelector("#inventory");
                        inventory.setAttribute("class", "hide");
                        let speech = document.querySelector("speech");
                        speech.setAttribute("class", "hide");
                        document.getElementsByName("friendshipScore").forEach(meterStuff => meterStuff.hidden = true);
                        document.getElementById("scoreForFriendshipRex").setAttribute("class", "hide");
                        let stew = [];
                        function addVegetable(_event) {
                            TheSearch.ƒS.Sound.play(TheSearch.soundSFX.catchCook, 1);
                            let target = _event.target;
                            let vegetable = target.className;
                            console.log(vegetable);
                            stew.push(vegetable);
                            if (stew.length == 11) {
                                console.log("All Items are added");
                                carrot.removeEventListener("pointerdown", addVegetable);
                                leek.removeEventListener("pointerdown", addVegetable);
                                potato.removeEventListener("pointerdown", addVegetable);
                                leaf.removeEventListener("pointerdown", addVegetable);
                                background.removeChild(carrot);
                                background.removeChild(leek);
                                background.removeChild(potato);
                                background.removeChild(leaf);
                                document.body.removeChild(fireplace);
                                checkOrder();
                            }
                        }
                        async function checkOrder() {
                            console.log(stew);
                            if (stew[0] == "potato" && stew[1] == "potato" && stew[2] == "potato" && stew[3] == "potato" && stew[4] == "potato" && stew[5] == "carrot" && stew[6] == "carrot" && stew[7] == "carrot" && stew[8] == "leek" && stew[9] == "leaf" && stew[10] == "leaf") {
                                console.log("YouWOn");
                                document.body.removeChild(background);
                                canvas.classList.remove("hide");
                                save.classList.remove("hide");
                                load.classList.remove("hide");
                                close.classList.remove("hide");
                                inventory.classList.remove("hide");
                                speech.classList.remove("hide");
                                //document.body.removeChild(fireplace);
                                document.getElementsByName("friendshipScore").forEach(meterStuff => meterStuff.hidden = false);
                                document.getElementById("scoreForFriendshipRex").classList.remove("hide");
                                TheSearch.dataForSave.friendshipScore += 5;
                                await TheSearch.ƒS.Character.hide(TheSearch.characters.rex);
                                TheSearch.ƒS.update();
                                await TheSearch.ƒS.Character.show(TheSearch.characters.rex, TheSearch.characters.rex.pose.happy, TheSearch.ƒS.positions.bottomright);
                                TheSearch.ƒS.update();
                                TheSearch.ƒS.Sound.play(TheSearch.soundRex.s6t0005, 1);
                                await TheSearch.ƒS.Speech.tell(TheSearch.characters.rex, text.Rex.T0005);
                                await TheSearch.ƒS.Character.show(TheSearch.characters.lucy, TheSearch.characters.lucy.pose.happy, TheSearch.ƒS.positions.bottomleft);
                                TheSearch.ƒS.update();
                                TheSearch.ƒS.Sound.play(TheSearch.soundLucy.s6t0003, 1);
                                await TheSearch.ƒS.Speech.tell(TheSearch.characters.lucy, text.Lucy.T0003);
                                TheSearch.ƒS.Sound.play(TheSearch.soundRex.s6t0007, 1);
                                await TheSearch.ƒS.Speech.tell(TheSearch.characters.rex, text.Rex.T0007);
                                TheSearch.ƒS.Sound.play(TheSearch.soundRex.s6t0008, 1);
                                await TheSearch.ƒS.Speech.tell(TheSearch.characters.rex, text.Rex.T0008);
                                TheSearch.ƒS.Sound.play(TheSearch.soundLucy.s6t0004, 1);
                                await TheSearch.ƒS.Speech.tell(TheSearch.characters.lucy, text.Lucy.T0004);
                                TheSearch.ƒS.Sound.play(TheSearch.soundRex.s6t0009, 1);
                                await TheSearch.ƒS.Speech.tell(TheSearch.characters.rex, text.Rex.T0009);
                                TheSearch.ƒS.Sound.play(TheSearch.soundLucy.s6t0005, 1);
                                await TheSearch.ƒS.Speech.tell(TheSearch.characters.lucy, text.Lucy.T0005);
                                TheSearch.ƒS.Sound.play(TheSearch.soundRex.s6t0014, 1);
                                TheSearch.ƒS.Speech.tell(TheSearch.characters.rex, text.Rex.T0014);
                                TheSearch.ƒS.Text.setClass("novelPageLucy");
                                await TheSearch.ƒS.Text.print("");
                                TheSearch.ƒS.Inventory.add(TheSearch.items.lucy);
                                TheSearch.ƒS.update();
                                TheSearch.ƒS.Speech.hide();
                                TheSearch.ƒS.Speech.clear();
                                TheSearch.ƒS.Character.hide(TheSearch.characters.rex);
                                TheSearch.ƒS.Character.hide(TheSearch.characters.lucy);
                                TheSearch.ƒS.update();
                                return TheSearch.SceneSeven();
                            }
                            else {
                                console.log("YouLost");
                                document.body.removeChild(background);
                                canvas.classList.remove("hide");
                                save.classList.remove("hide");
                                load.classList.remove("hide");
                                close.classList.remove("hide");
                                inventory.classList.remove("hide");
                                speech.classList.remove("hide");
                                document.body.removeChild(fireplace);
                                document.getElementsByName("friendshipScore").forEach(meterStuff => meterStuff.hidden = false);
                                document.getElementById("scoreForFriendshipRex").classList.remove("hide");
                                TheSearch.dataForSave.friendshipScore -= 5;
                                await TheSearch.ƒS.Character.hide(TheSearch.characters.rex);
                                TheSearch.ƒS.update();
                                await TheSearch.ƒS.Character.show(TheSearch.characters.rex, TheSearch.characters.rex.pose.sad, TheSearch.ƒS.positions.bottomright);
                                TheSearch.ƒS.update();
                                TheSearch.ƒS.Sound.play(TheSearch.soundRex.s6t0006, 1);
                                await TheSearch.ƒS.Speech.tell(TheSearch.characters.rex, text.Rex.T0006);
                                await TheSearch.ƒS.Character.show(TheSearch.characters.lucy, TheSearch.characters.lucy.pose.happy, TheSearch.ƒS.positions.bottomleft);
                                TheSearch.ƒS.update();
                                TheSearch.ƒS.Sound.play(TheSearch.soundLucy.s6t0003, 1);
                                await TheSearch.ƒS.Speech.tell(TheSearch.characters.lucy, text.Lucy.T0003);
                                await TheSearch.ƒS.Character.hide(TheSearch.characters.rex);
                                await TheSearch.ƒS.Character.show(TheSearch.characters.rex, TheSearch.characters.rex.pose.happy, TheSearch.ƒS.positions.bottomright);
                                TheSearch.ƒS.Sound.play(TheSearch.soundRex.s6t0007, 1);
                                await TheSearch.ƒS.Speech.tell(TheSearch.characters.rex, text.Rex.T0007);
                                TheSearch.ƒS.Sound.play(TheSearch.soundRex.s6t0008, 1);
                                await TheSearch.ƒS.Speech.tell(TheSearch.characters.rex, text.Rex.T0008);
                                TheSearch.ƒS.Sound.play(TheSearch.soundLucy.s6t0004, 1);
                                await TheSearch.ƒS.Speech.tell(TheSearch.characters.lucy, text.Lucy.T0004);
                                TheSearch.ƒS.Sound.play(TheSearch.soundRex.s6t0009, 1);
                                await TheSearch.ƒS.Speech.tell(TheSearch.characters.rex, text.Rex.T0009);
                                TheSearch.ƒS.Sound.play(TheSearch.soundLucy.s6t0005, 1);
                                await TheSearch.ƒS.Speech.tell(TheSearch.characters.lucy, text.Lucy.T0005);
                                TheSearch.ƒS.Sound.play(TheSearch.soundRex.s6t0014, 1);
                                TheSearch.ƒS.Speech.tell(TheSearch.characters.rex, text.Rex.T0014);
                                TheSearch.ƒS.update();
                                TheSearch.ƒS.Text.addClass("novelPageLucy");
                                await TheSearch.ƒS.Text.print("");
                                TheSearch.ƒS.Inventory.add(TheSearch.items.lucy);
                                TheSearch.ƒS.update();
                                TheSearch.ƒS.Speech.hide();
                                TheSearch.ƒS.Speech.clear();
                                TheSearch.ƒS.Character.hide(TheSearch.characters.rex);
                                TheSearch.ƒS.Character.hide(TheSearch.characters.lucy);
                                TheSearch.ƒS.update();
                                return TheSearch.SceneSeven();
                            }
                        }
                        break;
                    case sceneSixDecision2Cook.iSayNo:
                        console.log("iSayNo");
                        await TheSearch.ƒS.Character.show(TheSearch.characters.lucy, TheSearch.characters.lucy.pose.happy, TheSearch.ƒS.positions.bottomleft);
                        TheSearch.ƒS.Character.hide(TheSearch.characters.rex);
                        await TheSearch.ƒS.Character.show(TheSearch.characters.rex, TheSearch.characters.rex.pose.happy, TheSearch.ƒS.positions.bottomright);
                        TheSearch.ƒS.update();
                        TheSearch.ƒS.Sound.play(TheSearch.soundLucy.s6t0006, 1);
                        await TheSearch.ƒS.Speech.tell(TheSearch.characters.lucy, text.Lucy.T0006);
                        TheSearch.ƒS.Sound.play(TheSearch.soundRex.s6t0012, 1);
                        await TheSearch.ƒS.Speech.tell(TheSearch.characters.rex, text.Rex.T0012);
                        TheSearch.ƒS.Sound.play(TheSearch.soundRex.s6t0013, 1);
                        await TheSearch.ƒS.Speech.tell(TheSearch.characters.rex, text.Rex.T0013);
                        TheSearch.ƒS.Sound.play(TheSearch.soundLucy.s6t0005, 1);
                        await TheSearch.ƒS.Speech.tell(TheSearch.characters.lucy, text.Lucy.T0005);
                        TheSearch.ƒS.Text.addClass("novelPageLucy");
                        await TheSearch.ƒS.Text.print("");
                        TheSearch.ƒS.Inventory.add(TheSearch.items.lucy);
                        TheSearch.ƒS.update();
                        TheSearch.ƒS.Sound.play(TheSearch.soundRex.s6t0014, 1);
                        await TheSearch.ƒS.Speech.tell(TheSearch.characters.rex, text.Rex.T0014);
                        document.body.removeChild(fireplace);
                        TheSearch.ƒS.Speech.clear();
                        TheSearch.ƒS.Speech.hide();
                        TheSearch.ƒS.Character.hide(TheSearch.characters.rex);
                        TheSearch.ƒS.update();
                        return TheSearch.SceneSeven();
                        break;
                }
                break;
        }
    }
    TheSearch.SceneSix = SceneSix;
})(TheSearch || (TheSearch = {}));
var TheSearch;
(function (TheSearch) {
    async function SceneThree() {
        console.log("SceneThree starting");
        let text = {
            Narrator: {
                T0001: "Und so macht sich Rex auf den Weg... ",
                T0002: "Über Stock und Stein, Sand und Wiese, und das ganz alleine... ",
                T0003: "Auf einer Lichtung erkennt er drei Dino-Kinder, die ausgelassen miteinander spielen... ",
                T0004: "Klicke auf die Dinos um sie zu fangen, aber beeile dich, du hast nur 10 Sekunden Zeit!",
                T0005: "..."
            },
            Rex: {
                T0001: TheSearch.dataForSave.nameProtagonist + ", soll ich fragen ob ich mitspielen darf?",
                T0002: "Oh ja, gerne!",
                T0003: "Ne danke, ich suche jemanden...",
                T0004: "Hallo... darf ich vielleicht auch mitspielen?",
                T0005: "Ich bin Rex. Freut mich dich kennenzulernen.",
                T0006: "Schade... Mach's gut!"
            },
            Elena: {
                T0001: "Hey! Wer bist du? möchtest du mitspielen?",
                T0002: "Dann viel Erfolg!",
                T0003: "Hey, na klaro!",
                T0004: "Ich bin übrigens Elena. Ich bin ein Dilophosaurus und lebe in der Unterjura-Zeit. Meine absolute Leibspeise ist Fisch. Ich werde bis zu 2,5 Meter groß und 500kg schwer. Ganz oft werde ich auch Zweikamm-Echse genannt, weil ich zwei große Knochenkämme auf der Schnauze habe. Ich in sehr leicht gebaut und deshalb schnell und wendig.",
                T0005: "Wer bist du?",
                T0006: "Glückwunsch Rex, das war wirklich klasse!",
                T0007: "Das war knapp! Beim nächsten Mal klappt es bestimmt.",
                T0008: "Wir müssen los Rex, es hat wirklich Spaß gemacht! Mach's gut!",
                T0009: "Ahhhh Hilfe!!!"
            }
        };
        await TheSearch.ƒS.Location.show(TheSearch.locations.L_Dilo);
        await TheSearch.ƒS.Character.show(TheSearch.characters.rex, TheSearch.characters.rex.pose.happy, TheSearch.ƒS.positions.bottomright);
        await TheSearch.ƒS.update(TheSearch.transition.steps.duration, TheSearch.transition.steps.alpha, TheSearch.transition.steps.edge);
        TheSearch.ƒS.Sound.play(TheSearch.soundNarrator.s3t0001, 1);
        await TheSearch.ƒS.Speech.tell(TheSearch.characters.narrator, text.Narrator.T0001);
        TheSearch.ƒS.Sound.play(TheSearch.soundNarrator.s3t0002, 1);
        await TheSearch.ƒS.Speech.tell(TheSearch.characters.narrator, text.Narrator.T0002);
        TheSearch.ƒS.Sound.play(TheSearch.soundNarrator.s3t0003, 1);
        await TheSearch.ƒS.Speech.tell(TheSearch.characters.narrator, text.Narrator.T0003);
        TheSearch.ƒS.Sound.play(TheSearch.soundRex.s3t0001, 1);
        await TheSearch.ƒS.Speech.tell(TheSearch.characters.rex, text.Rex.T0001);
        /** DECISION */
        /** DO YOU PLAY WITH DINOS? */
        let sceneThreeDecision1PlayRex = {
            iSayNo: "Nein",
            iSayYes: "Ja",
            iSayJustPlay: "Einfach mitspielen"
        };
        let dialogueElementS3D1Play = await TheSearch.ƒS.Menu.getInput(sceneThreeDecision1PlayRex, "choicesCssClass");
        switch (dialogueElementS3D1Play) {
            case sceneThreeDecision1PlayRex.iSayNo:
                console.log("iSayNo");
                await TheSearch.ƒS.Character.show(TheSearch.characters.elena, TheSearch.characters.elena.pose.happy, TheSearch.ƒS.positions.bottomleft);
                TheSearch.ƒS.update();
                TheSearch.ƒS.Sound.play(TheSearch.soundElena.s3t0001, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.elena, text.Elena.T0001);
                TheSearch.ƒS.Sound.play(TheSearch.soundRex.s3t0003, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.rex, text.Rex.T0003);
                TheSearch.ƒS.Sound.play(TheSearch.soundElena.s3t0002, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.elena, text.Elena.T0002);
                TheSearch.ƒS.Speech.hide();
                TheSearch.ƒS.Character.hide(TheSearch.characters.rex);
                TheSearch.ƒS.Character.hide(TheSearch.characters.elena);
                TheSearch.ƒS.Speech.clear();
                TheSearch.ƒS.update();
                let nextScene = TheSearch.SceneFour();
                return nextScene;
                break;
            case sceneThreeDecision1PlayRex.iSayYes:
                console.log("iSayYes");
                await TheSearch.ƒS.Character.show(TheSearch.characters.elena, TheSearch.characters.elena.pose.happy, TheSearch.ƒS.positions.bottomleft);
                TheSearch.ƒS.update();
                /** MINI GAME 2 */
                //Create Divs with Dino png as Background
                let divSibling1 = document.createElement("div");
                divSibling1.setAttribute("class", "Sibling1");
                document.body.appendChild(divSibling1);
                let positionXSibling1 = 50;
                let positionYSibling1 = 20;
                divSibling1.style.left = positionXSibling1 + "%";
                divSibling1.style.top = positionYSibling1 + "%";
                let divSibling2 = document.createElement("div");
                divSibling2.setAttribute("class", "Sibling2");
                document.body.appendChild(divSibling2);
                let positionXSibling2 = 40;
                let positionYSibling2 = -15;
                divSibling2.style.left = positionXSibling2 + "%";
                divSibling2.style.top = positionYSibling2 + "%";
                let divSibling3 = document.createElement("div");
                divSibling3.setAttribute("class", "Sibling3");
                document.body.appendChild(divSibling3);
                let positionXSibling3 = 30;
                let positionYSibling3 = -40;
                divSibling3.style.left = positionXSibling3 + "%";
                divSibling3.style.top = positionYSibling3 + "%";
                TheSearch.ƒS.Sound.play(TheSearch.soundRex.s3t0004, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.rex, text.Rex.T0004);
                TheSearch.ƒS.Sound.play(TheSearch.soundElena.s3t0003, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.elena, text.Elena.T0003);
                TheSearch.ƒS.Sound.play(TheSearch.soundElena.s3t0004, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.elena, text.Elena.T0004);
                TheSearch.ƒS.Inventory.add(TheSearch.items.elena);
                TheSearch.ƒS.update();
                TheSearch.ƒS.Text.addClass("novelPageElena");
                await TheSearch.ƒS.Text.print("");
                TheSearch.ƒS.Sound.play(TheSearch.soundElena.s3t0005, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.elena, text.Elena.T0005);
                TheSearch.ƒS.Sound.play(TheSearch.soundRex.s3t0005, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.rex, text.Rex.T0005);
                TheSearch.ƒS.Sound.play(TheSearch.soundNarrator.s3Game2Intro, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.narrator, text.Narrator.T0004);
                TheSearch.ƒS.Character.hide(TheSearch.characters.rex);
                TheSearch.ƒS.Character.hide(TheSearch.characters.elena);
                TheSearch.ƒS.update();
                let speech = document.querySelector("speech");
                speech.setAttribute("class", "hide");
                let save = document.querySelector("#save");
                save.setAttribute("class", "hide");
                let load = document.querySelector("#load");
                load.setAttribute("class", "hide");
                let close = document.querySelector("#close");
                close.setAttribute("class", "hide");
                let inventory = document.querySelector("#inventory");
                inventory.setAttribute("class", "hide");
                document.getElementsByName("friendshipScore").forEach(meterStuff => meterStuff.hidden = true);
                document.getElementById("scoreForFriendshipRex").setAttribute("class", "hide");
                divSibling1.addEventListener("pointerdown", handleClick);
                divSibling2.addEventListener("pointerdown", handleClick);
                divSibling3.addEventListener("pointerdown", handleClick);
                setTimeout(timeIsUp, 10000);
                //Move Dinos
                let interval = setInterval(timer, 500);
                function timer() {
                    divSibling1.style.left = TheSearch.getRandom(5, 95) + "%";
                    divSibling2.style.left = TheSearch.getRandom(5, 95) + "%";
                    divSibling3.style.left = TheSearch.getRandom(5, 95) + "%";
                }
                let caught = [];
                async function handleClick(_event) {
                    console.log("clickedMe");
                    TheSearch.ƒS.Sound.play(TheSearch.soundSFX.catchCook, 1);
                    let target = _event.target;
                    target.removeEventListener("pointerdown", handleClick);
                    //target.removeEventListener("pointerdown", handleClick);
                    target.style.backgroundImage = "url(./Images/GUI/Empty.png)";
                    caught.push(1);
                    if (caught.length >= 3) {
                        clearInterval(interval);
                        document.body.removeChild(divSibling1);
                        document.body.removeChild(divSibling2);
                        document.body.removeChild(divSibling3);
                        speech.classList.remove("hide");
                        save.classList.remove("hide");
                        load.classList.remove("hide");
                        close.classList.remove("hide");
                        inventory.classList.remove("hide");
                        document.getElementsByName("friendshipScore").forEach(meterStuff => meterStuff.hidden = false);
                        document.getElementById("scoreForFriendshipRex").classList.remove("hide");
                        TheSearch.dataForSave.friendshipScore += 5;
                        await TheSearch.ƒS.Character.show(TheSearch.characters.elena, TheSearch.characters.elena.pose.happy, TheSearch.ƒS.positions.bottomleft);
                        await TheSearch.ƒS.Character.show(TheSearch.characters.rex, TheSearch.characters.rex.pose.happy, TheSearch.ƒS.positions.bottomright);
                        TheSearch.ƒS.update();
                        TheSearch.ƒS.Sound.play(TheSearch.soundElena.s3t0006, 1);
                        await TheSearch.ƒS.Speech.tell(TheSearch.characters.elena, text.Elena.T0006);
                        //Sound plays Elenas Mom calls kids
                        TheSearch.ƒS.Sound.play(TheSearch.soundElenasMom.s3t0001, 1);
                        await TheSearch.ƒS.Speech.tell(TheSearch.characters.narrator, text.Narrator.T0005);
                        TheSearch.ƒS.Sound.play(TheSearch.soundElena.s3t0008, 1);
                        await TheSearch.ƒS.Speech.tell(TheSearch.characters.elena, text.Elena.T0008);
                        TheSearch.ƒS.Sound.play(TheSearch.soundRex.s3t0006, 1);
                        await TheSearch.ƒS.Speech.tell(TheSearch.characters.rex, text.Rex.T0006);
                        TheSearch.ƒS.Speech.hide();
                        TheSearch.ƒS.Character.hide(TheSearch.characters.rex);
                        TheSearch.ƒS.Character.hide(TheSearch.characters.elena);
                        TheSearch.ƒS.Speech.clear();
                        TheSearch.ƒS.update();
                        return TheSearch.SceneFour();
                    }
                }
                async function timeIsUp() {
                    clearInterval(interval);
                    document.body.removeChild(divSibling1);
                    document.body.removeChild(divSibling2);
                    document.body.removeChild(divSibling3);
                    speech.classList.remove("hide");
                    save.classList.remove("hide");
                    load.classList.remove("hide");
                    close.classList.remove("hide");
                    inventory.classList.remove("hide");
                    document.getElementsByName("friendshipScore").forEach(meterStuff => meterStuff.hidden = false);
                    document.getElementById("scoreForFriendshipRex").classList.remove("hide");
                    await TheSearch.ƒS.Character.show(TheSearch.characters.elena, TheSearch.characters.elena.pose.happy, TheSearch.ƒS.positions.bottomleft);
                    await TheSearch.ƒS.Character.show(TheSearch.characters.rex, TheSearch.characters.rex.pose.happy, TheSearch.ƒS.positions.bottomright);
                    TheSearch.ƒS.update();
                    TheSearch.ƒS.Sound.play(TheSearch.soundElena.s3t0007, 1);
                    await TheSearch.ƒS.Speech.tell(TheSearch.characters.elena, text.Elena.T0007);
                    //Sound plays Elenas Mom calls kids
                    TheSearch.ƒS.Sound.play(TheSearch.soundElenasMom.s3t0001, 1);
                    await TheSearch.ƒS.Speech.tell(TheSearch.characters.narrator, text.Narrator.T0005);
                    TheSearch.ƒS.Sound.play(TheSearch.soundElena.s3t0008, 1);
                    await TheSearch.ƒS.Speech.tell(TheSearch.characters.elena, text.Elena.T0008);
                    TheSearch.ƒS.Sound.play(TheSearch.soundRex.s3t0006, 1);
                    await TheSearch.ƒS.Speech.tell(TheSearch.characters.rex, text.Rex.T0006);
                    TheSearch.dataForSave.friendshipScore -= 5;
                    TheSearch.ƒS.Speech.hide();
                    TheSearch.ƒS.Character.hide(TheSearch.characters.rex);
                    TheSearch.ƒS.Character.hide(TheSearch.characters.elena);
                    TheSearch.ƒS.Speech.clear();
                    TheSearch.ƒS.update();
                    return TheSearch.SceneFour();
                }
                break;
            case sceneThreeDecision1PlayRex.iSayJustPlay:
                console.log("iSayJustPlay");
                TheSearch.dataForSave.friendshipScore -= 1;
                await TheSearch.ƒS.Character.show(TheSearch.characters.elena, TheSearch.characters.elena.pose.scared, TheSearch.ƒS.positions.bottomleft);
                TheSearch.ƒS.update();
                TheSearch.ƒS.Sound.play(TheSearch.soundElena.s3t0009, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.elena, text.Elena.T0009);
                await TheSearch.ƒS.Character.hide(TheSearch.characters.rex);
                await TheSearch.ƒS.Character.show(TheSearch.characters.rex, TheSearch.characters.rex.pose.sad, TheSearch.ƒS.positions.bottomright);
                TheSearch.ƒS.update();
                await TheSearch.ƒS.Character.animate(TheSearch.characters.elena, TheSearch.characters.elena.pose.scared, TheSearch.getAnimationElena());
                TheSearch.ƒS.Speech.hide();
                TheSearch.ƒS.Character.hide(TheSearch.characters.rex);
                TheSearch.ƒS.Speech.clear();
                let sceneFour = TheSearch.SceneFour();
                return sceneFour;
                break;
        }
    }
    TheSearch.SceneThree = SceneThree;
})(TheSearch || (TheSearch = {}));
var TheSearch;
(function (TheSearch) {
    async function SceneTwo() {
        console.log("SceneTwo starting");
        let text = {
            Narrator: {
                T0001: "Rex schaut sich um. Er stellt fest, dass er ganz alleine ist.",
                T0002: "..."
            },
            Rex: {
                T0001: TheSearch.dataForSave.nameProtagonist + ", hast du meine Mama gesehen?",
                T0002: "Das ist gemein!",
                T0003: "Ist schon ok",
                T0004: "Oh schade, dann muss ich sie suchen!",
                T0005: "Yippie!! Kannst du mir sagen wo sie ist?",
                T0006: "Hilfst du mir suchen?",
                T0007: "Wie toll, danke! Lass uns gemeinsam ein Abenteuer erleben!",
                T0008: "Dann mache ich das halt alleine!"
            }
        };
        await TheSearch.ƒS.Location.show(TheSearch.locations.Home_Hatched);
        await TheSearch.ƒS.Character.show(TheSearch.characters.rex, TheSearch.characters.rex.pose.sad, TheSearch.ƒS.positions.bottomcenter);
        await TheSearch.ƒS.update(TheSearch.transition.lookAround.duration, TheSearch.transition.lookAround.alpha, TheSearch.transition.lookAround.edge);
        TheSearch.ƒS.Sound.play(TheSearch.soundNarrator.s2t0001, 1);
        await TheSearch.ƒS.Speech.tell(TheSearch.characters.narrator, text.Narrator.T0001);
        //ƒS.Sound.play(soundRex.t0006Rex, 1);
        TheSearch.ƒS.Sound.play(TheSearch.soundRex.s2t0001, 1);
        await TheSearch.ƒS.Speech.tell(TheSearch.characters.rex, text.Rex.T0001);
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
        let dialogueElementS2D1SeenMom = await TheSearch.ƒS.Menu.getInput(sceneTwoDecision1SeenMom, "choicesCssClass");
        switch (dialogueElementS2D1SeenMom) {
            case sceneTwoDecision1SeenMom.iSayIDontTell:
                console.log("S1D1 I dont tell");
                TheSearch.ƒS.Character.hide(TheSearch.characters.rex);
                await TheSearch.ƒS.Character.show(TheSearch.characters.rex, TheSearch.characters.rex.pose.angry, TheSearch.ƒS.positions.bottomcenter);
                TheSearch.ƒS.update();
                TheSearch.ƒS.Sound.play(TheSearch.soundRex.s2t0002, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.rex, text.Rex.T0002);
                let dialogueElementS2D2Apologize = await TheSearch.ƒS.Menu.getInput(sceneTwoDecision2Apologize, "choicesCssClass");
                switch (dialogueElementS2D2Apologize) {
                    case sceneTwoDecision2Apologize.iSaySorry:
                        console.log("Sorry");
                        TheSearch.ƒS.Character.hide(TheSearch.characters.rex);
                        await TheSearch.ƒS.Character.show(TheSearch.characters.rex, TheSearch.characters.rex.pose.happy, TheSearch.ƒS.positions.bottomcenter);
                        TheSearch.ƒS.update();
                        TheSearch.dataForSave.friendshipScore++;
                        TheSearch.ƒS.Sound.play(TheSearch.soundRex.s2t0003, 1);
                        await TheSearch.ƒS.Speech.tell(TheSearch.characters.rex, text.Rex.T0003);
                        break;
                    case sceneTwoDecision2Apologize.iDontApologize:
                        console.log("Not Sorry");
                        TheSearch.dataForSave.friendshipScore--;
                }
                TheSearch.ƒS.Sound.play(TheSearch.soundRex.s2t0006, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.rex, text.Rex.T0006);
                break;
            case sceneTwoDecision1SeenMom.iSayNo:
                console.log("S1D1 No");
                TheSearch.ƒS.Sound.play(TheSearch.soundRex.s2t0004, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.rex, text.Rex.T0004);
                TheSearch.ƒS.Sound.play(TheSearch.soundRex.s2t0006, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.rex, text.Rex.T0006);
                break;
            case sceneTwoDecision1SeenMom.iSayMaybe:
                console.log(("S2D1 Maybe"));
                TheSearch.ƒS.Character.hide(TheSearch.characters.rex);
                await TheSearch.ƒS.Character.show(TheSearch.characters.rex, TheSearch.characters.rex.pose.happy, TheSearch.ƒS.positions.bottomcenter);
                TheSearch.ƒS.update();
                TheSearch.ƒS.Sound.play(TheSearch.soundRex.s2t0005Yippie, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.narrator, text.Narrator.T0002);
                TheSearch.ƒS.Sound.play(TheSearch.soundRex.s2t0005, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.rex, text.Rex.T0005);
                let dialogueElementS2D4SayWhereMom = await TheSearch.ƒS.Menu.getInput(sceneTwoDecision4SayWhereMom, "choicesCssClass");
                switch (dialogueElementS2D4SayWhereMom) {
                    case sceneTwoDecision4SayWhereMom.iSayNo:
                        console.log("S2D4 No");
                        TheSearch.ƒS.Character.hide(TheSearch.characters.rex);
                        await TheSearch.ƒS.Character.show(TheSearch.characters.rex, TheSearch.characters.rex.pose.angry, TheSearch.ƒS.positions.bottomcenter);
                        TheSearch.ƒS.update();
                        TheSearch.dataForSave.friendshipScore--;
                        TheSearch.ƒS.Sound.play(TheSearch.soundRex.s2t0002, 1);
                        await TheSearch.ƒS.Speech.tell(TheSearch.characters.rex, text.Rex.T0002);
                        TheSearch.ƒS.Sound.play(TheSearch.soundRex.s2t0006, 1);
                        await TheSearch.ƒS.Speech.tell(TheSearch.characters.rex, text.Rex.T0006);
                        break;
                    case sceneTwoDecision4SayWhereMom.iSayImNotSure:
                        console.log("S2D4 Not sure");
                        TheSearch.dataForSave.friendshipScore++;
                        TheSearch.ƒS.Sound.play(TheSearch.soundRex.s2t0006, 1);
                        await TheSearch.ƒS.Speech.tell(TheSearch.characters.rex, text.Rex.T0006);
                        break;
                }
        }
        let dialogueElementS2D3HelpRex = await TheSearch.ƒS.Menu.getInput(sceneTwoDecision3HelpRex, "choicesCssClass");
        switch (dialogueElementS2D3HelpRex) {
            case sceneTwoDecision3HelpRex.iHelp:
                console.log("S2D3 iHelp");
                TheSearch.dataForSave.friendshipScore++;
                TheSearch.ƒS.Character.hide(TheSearch.characters.rex);
                await TheSearch.ƒS.Character.show(TheSearch.characters.rex, TheSearch.characters.rex.pose.happy, TheSearch.ƒS.positions.bottomcenter);
                TheSearch.ƒS.update();
                TheSearch.ƒS.Sound.play(TheSearch.soundRex.s2t0007, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.rex, text.Rex.T0007);
                await TheSearch.ƒS.Character.animate(TheSearch.characters.rex, TheSearch.characters.rex.pose.happy, TheSearch.getAnimation());
                break;
            case sceneTwoDecision3HelpRex.iDontHelp:
                console.log("S2D3 iDontHelp");
                TheSearch.dataForSave.friendshipScore--;
                TheSearch.ƒS.Character.hide(TheSearch.characters.rex);
                await TheSearch.ƒS.Character.show(TheSearch.characters.rex, TheSearch.characters.rex.pose.angry, TheSearch.ƒS.positions.bottomcenter);
                TheSearch.ƒS.update();
                TheSearch.ƒS.Sound.play(TheSearch.soundRex.s2t0008, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.rex, text.Rex.T0008);
                await TheSearch.ƒS.Character.animate(TheSearch.characters.rex, TheSearch.characters.rex.pose.angry, TheSearch.getAnimation());
                break;
        }
        TheSearch.ƒS.Speech.hide();
        TheSearch.ƒS.Character.hide(TheSearch.characters.rex);
        TheSearch.ƒS.Speech.clear();
        return TheSearch.SceneThree();
    }
    TheSearch.SceneTwo = SceneTwo;
})(TheSearch || (TheSearch = {}));
var TheSearch;
(function (TheSearch) {
    async function SpecialScene() {
        console.log("SceneSeven starting");
        let text = {
            Narrator: {
                T0001: "Was ist denn Rex?"
            },
            Rex: {
                T0001: "Ich wollte noch fragen, magst du mein Freund sein?",
                T0002: "Yuhuuu! Dann machs gut und bis hoffentlich ganz bald!",
                T0003: "Schade... Machs gut."
            }
        };
        await TheSearch.ƒS.Character.animate(TheSearch.characters.rex, TheSearch.characters.rex.pose.happy, TheSearch.special());
        TheSearch.ƒS.Sound.play(TheSearch.soundNarrator.s8t0002, 1);
        await TheSearch.ƒS.Speech.tell(TheSearch.characters.narrator, text.Narrator.T0001);
        TheSearch.ƒS.Sound.play(TheSearch.soundRex.specialT0001, 1);
        await TheSearch.ƒS.Speech.tell(TheSearch.characters.rex, text.Rex.T0001);
        /** DECISION */
        let specialSceneDecision1Friends = {
            iSayYes: "Ja",
            iSayNo: "Nein"
        };
        let dialogueElementSpecialD1Friends = await TheSearch.ƒS.Menu.getInput(specialSceneDecision1Friends, "choicesCssClass");
        switch (dialogueElementSpecialD1Friends) {
            case specialSceneDecision1Friends.iSayYes:
                console.log("Friends");
                TheSearch.dataForSave.friendshipScore = 18;
                TheSearch.ƒS.Sound.play(TheSearch.soundRex.specialT0002, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.rex, text.Rex.T0002);
                TheSearch.ƒS.Character.hide(TheSearch.characters.rex);
                return TheSearch.End();
                break;
            case specialSceneDecision1Friends.iSayNo:
                console.log("noFriends");
                TheSearch.dataForSave.friendshipScore = -18;
                TheSearch.ƒS.Sound.play(TheSearch.soundRex.specialT0003, 1);
                await TheSearch.ƒS.Speech.tell(TheSearch.characters.rex, text.Rex.T0003);
                TheSearch.ƒS.Character.hide(TheSearch.characters.rex);
                return TheSearch.End();
                break;
        }
    }
    TheSearch.SpecialScene = SpecialScene;
})(TheSearch || (TheSearch = {}));
//# sourceMappingURL=Template.js.map