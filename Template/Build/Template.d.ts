declare namespace TheSearch {
    function playSounds(): void;
}
declare namespace TheSearch {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    /** TRANSITIONS **/
    let transition: {
        start: {
            duration: number;
            alpha: string;
            edge: number;
        };
        steps: {
            duration: number;
            alpha: string;
            edge: number;
        };
        stepsTogether: {
            duration: number;
            alpha: string;
            edge: number;
        };
        plants: {
            duration: number;
            alpha: string;
            edge: number;
        };
        fly: {
            duration: number;
            alpha: string;
            edge: number;
        };
        dayNight: {
            duration: number;
            alpha: string;
            edge: number;
        };
        lookAround: {
            duration: number;
            alpha: string;
            edge: number;
        };
        mom: {
            duration: number;
            alpha: string;
            edge: number;
        };
        wArchie: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    /** SOUND **/
    let soundRex: {
        t0001Rex: string;
        t0001_1Rex: string;
        t0002Rex: string;
        t0003Rex: string;
        t0004Rex: string;
        t0005Rex: string;
        s2t0001: string;
        s2t0002: string;
        s2t0003: string;
        s2t0004: string;
        s2t0005y: string;
        s2t0005: string;
        s2t0006: string;
        s2t0007: string;
        s2t0008: string;
        s2t0005Yippie: string;
        s3t0001: string;
        s3t0002: string;
        s3t0003: string;
        s3t0004: string;
        s3t0005: string;
        s3t0006: string;
        s4t0001: string;
        s4t0002: string;
        s4t0003: string;
        s4tPfeifen: string;
        s51t0001: string;
        s51t0002: string;
        s51t0003: string;
        s51t0004: string;
        s51t0005: string;
        s5At0001: string;
        s5At0002: string;
        s5At0003: string;
        s5At0004: string;
        s5At0005: string;
        s5At0006: string;
        s5At0007: string;
        s5At0008: string;
        s5At0009: string;
        s5At0010: string;
        s5At0011: string;
        s5AtRoaw: string;
        s5AtWein: string;
        s6t0001: string;
        s6t0002: string;
        s6t0003: string;
        s6t0004: string;
        s6t0005: string;
        s6t0006: string;
        s6t0007: string;
        s6t0008: string;
        s6t0009: string;
        s6t0010: string;
        s6t0011: string;
        s6t0012: string;
        s6t0013: string;
        s6t0014: string;
        s6tRoaw: string;
        s7t0001: string;
        s7t0002: string;
        s7t0003: string;
        s7t0004: string;
        s7t0005: string;
        s7t0006: string;
        s8t0001: string;
        specialT0001: string;
        specialT0002: string;
        specialT0003: string;
        hungry: string;
    };
    let soundNarrator: {
        s1t0001: string;
        s1t0002: string;
        s1t0003: string;
        s1t0004: string;
        s1t0005: string;
        s1t0006: string;
        s1t0007: string;
        s1t0008: string;
        s1t0009: string;
        s1Game1Intro: string;
        s2t0001: string;
        s3t0001: string;
        s3t0002: string;
        s3t0003: string;
        s3Game2Intro: string;
        s4t0001: string;
        s4t0002: string;
        s4t0003: string;
        s4t0004: string;
        s4t0005: string;
        s51t0001: string;
        s51t0002: string;
        s51t0003: string;
        s51t0004: string;
        s51Game3: string;
        s51t0006: string;
        s51t0007: string;
        s5At0001: string;
        s5At0002: string;
        s5At0003: string;
        s5At0004: string;
        s5At0005: string;
        s5At0006: string;
        s5Bt0001: string;
        s6t0001: string;
        s6t0002: string;
        s6t0003: string;
        s6t0004: string;
        s6t0005: string;
        s6Game4: string;
        s7t0001: string;
        s8t0001: string;
        s8t0002: string;
    };
    let soundElena: {
        s3t0001: string;
        s3t0002: string;
        s3t0003: string;
        s3t0004: string;
        s3t0005: string;
        s3t0006: string;
        s3t0007: string;
        s3t0008: string;
        s3t0009: string;
    };
    let soundLenny: {
        s5At0001: string;
        s5At0002: string;
        s5At0003: string;
    };
    let soundArchie: {
        s5At0001: string;
        s5At0002: string;
        s5At0003: string;
        s5At0004: string;
        s5At0005: string;
        s5At0006: string;
        s5Bt0001: string;
        s5Bt0002: string;
        s5Bt0003: string;
        s5Bt0004: string;
        s5Bt0005: string;
    };
    let soundLennysDad: {
        s5At0001: string;
        s5At0002: string;
        s5At0003: string;
        s5At0004: string;
    };
    let soundTilly: {
        s51t0001: string;
        s51t0002: string;
        s51t0003: string;
    };
    let soundTillysDad: {
        s51t0001: string;
    };
    let soundElenasMom: {
        s3t0001: string;
    };
    let soundVelo: {
        s6t0001: string;
        s6t0002: string;
        s6t0003: string;
        s6t0004: string;
        s6t0005: string;
        s6t0006: string;
    };
    let soundLucy: {
        s6t0001: string;
        s6t0002: string;
        s6t0003: string;
        s6t0004: string;
        s6t0005: string;
        s6t0006: string;
        s6t0007: string;
        s7t0001: string;
        s7t0002: string;
        s7t0003: string;
        s7t0004: string;
        s7t0005: string;
        s7t0005_2: string;
        s7t0006: string;
        s8t0001: string;
        s8t0002: string;
        s8t0003: string;
    };
    let soundRexMom: {
        s8t0001: string;
        s8t0002: string;
        s8t0003: string;
        s8schluchz: string;
        s8wein: string;
    };
    let soundSFX: {
        eggs: string;
        catchCook: string;
        jump: string;
    };
    /**LOCATIONS */
    let locations: {
        Home_Hatched: {
            name: string;
            background: string;
        };
        Home: {
            name: string;
            background: string;
        };
        L_Dilo: {
            name: string;
            background: string;
        };
        L_Ptero: {
            name: string;
            background: string;
        };
        L_Archae: {
            name: string;
            background: string;
        };
        L_Tricera: {
            name: string;
            background: string;
        };
        L_Velo: {
            name: string;
            background: string;
        };
        L_DiplodoDay: {
            name: string;
            background: string;
        };
        L_DiplodoNight: {
            name: string;
            background: string;
        };
        HomeNight: {
            name: string;
            background: string;
        };
        L_Steps: {
            name: string;
            background: string;
        };
        L_Steps_Zoom: {
            name: string;
            background: string;
        };
    };
    /** CHARACTERS */
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
                disgusted: string;
                bad: string;
                sniff: string;
            };
        };
        elena: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                scared: string;
                happy: string;
            };
        };
        lenny: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                scared: string;
                happy: string;
                small: string;
            };
        };
        lennysDad: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                angry: string;
                happy: string;
                happyRight: string;
            };
        };
        archie: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                angry: string;
                happy: string;
            };
        };
        tilly: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                angry: string;
                happy: string;
            };
        };
        velo: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                happy: string;
                scared: string;
                small: string;
            };
        };
        lucy: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                happy: string;
                angry: string;
                sad: string;
            };
        };
        mama: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                happy: string;
            };
        };
        end: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                end: string;
            };
        };
    };
    let dataForSave: {
        nameProtagonist: string;
        friendshipScore: number;
        count: number;
        bool: boolean;
        random: number;
        rexScore: number;
        scoreForFriendshipRex: string;
        randomPoints: number;
        pickedMeterScene: boolean;
    };
    function showCredits(): void;
    function showStart(): void;
    /** Animations */
    function getAnimation(): ƒS.AnimationDefinition;
    function getAnimationRexRun(): ƒS.AnimationDefinition;
    function getAnimationElena(): ƒS.AnimationDefinition;
    function getAnimationFlyAway(): ƒS.AnimationDefinition;
    function getAnimationFlyTowards(): ƒS.AnimationDefinition;
    function special(): ƒS.AnimationDefinition;
    function getAnimationRightMiddle(): ƒS.AnimationDefinition;
    function getAnimationLucy(): ƒS.AnimationDefinition;
    /** JITTER
    */
    function jitter(): Promise<void>;
    /**ITEMS */
    let items: {
        rex: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        elena: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        lenny: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        archie: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        velo: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        lucy: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        tilly: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
    };
    /** RANDOM NUMBER */
    function getRandom(_min: number, _max: number): number;
    function start(_event: Event): void;
}
declare namespace TheSearch {
    function Empty(): ƒS.SceneReturn;
}
declare namespace TheSearch {
    function End(): ƒS.SceneReturn;
}
declare namespace TheSearch {
    function FirstScene(): ƒS.SceneReturn;
}
declare namespace TheSearch {
}
declare namespace TheSearch {
    function SceneEight(): ƒS.SceneReturn;
}
declare namespace TheSearch {
    function SceneFive1(): ƒS.SceneReturn;
}
declare namespace TheSearch {
    function SceneFiveA(): ƒS.SceneReturn;
}
declare namespace TheSearch {
    function SceneFiveB(): ƒS.SceneReturn;
}
declare namespace TheSearch {
    function SceneFour(): ƒS.SceneReturn;
}
declare namespace TheSearch {
    function SceneOne(): ƒS.SceneReturn;
}
declare namespace TheSearch {
    function SceneSeven(): ƒS.SceneReturn;
}
declare namespace TheSearch {
    function SceneSix(): ƒS.SceneReturn;
}
declare namespace TheSearch {
    function SceneThree(): ƒS.SceneReturn;
}
declare namespace TheSearch {
    function SceneTwo(): ƒS.SceneReturn;
}
declare namespace TheSearch {
    function SpecialScene(): ƒS.SceneReturn;
}
