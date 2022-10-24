declare namespace Template {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let transition: {
        bites: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    let sound: {
        drop: string;
    };
    let locations: {
        Home_Eggs: {
            name: string;
            background: string;
        };
    };
    let characters: {
        narrator: {
            name: string;
        };
        protagonist: {
            name: string;
        };
        rex: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                angry: string;
                happy: string;
                sad: string;
            };
        };
    };
    let dataForSave: {
        nameProtagonist: string;
    };
}
declare namespace Template {
    function Scene(): ƒS.SceneReturn;
}
