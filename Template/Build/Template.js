"use strict";
var Template;
(function (Template) {
    Template.ƒ = FudgeCore;
    Template.ƒS = FudgeStory;
    console.log("FudgeStory template starting");
    //Transition Vorlesung 20.10.22
    Template.transition = {
        //Name der Transition, in alpha kommt relativer Pfad
        bites: {
            duration: 1,
            alpha: "../Images/Transitions/bites.jpg",
            edge: 1
        }
    };
    //
    Template.sound = {
        //**Name der Audiodatei, relativer Pfad angeben in ""**
        //themes
        //SFX
        drop: "Audio/drop.mp3"
    };
    Template.locations = {
        //Name des Bildes
        Home_Eggs: {
            name: "Home Eggs",
            background: "../Images/Backgrounds/Home_Eggs.png"
        }
    };
    Template.characters = {
        narrator: {
            name: ""
        },
        protagonist: {
            name: ""
        },
        rex: {
            name: "Rex",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "../Images/Characters/Rex/Rex_angry.png",
                happy: "../Images/Characters/Rex/Rex_happy.png",
                sad: "../Images/Characters/Rex/Rex_sad.png"
            }
        }
    };
    //** DATA THAT WILL BE SAVED (GAME PROGRESS) */
    Template.dataForSave = {
        nameProtagonist: ""
    };
    window.addEventListener("load", start);
    function start(_event) {
        let scenes = [
            { scene: Template.Scene, name: "Scene" }
        ];
        let uiElement = document.querySelector("[type=interface]");
        Template.dataForSave = Template.ƒS.Progress.setData(Template.dataForSave, uiElement);
        // start the sequence
        Template.ƒS.Progress.go(scenes);
    }
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene() {
        console.log("FudgeStory Template Scene starting");
    }
    Template.Scene = Scene;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map