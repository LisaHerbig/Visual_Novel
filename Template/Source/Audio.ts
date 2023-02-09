namespace Template {

    export  function playSounds(): void {
        console.log("in Play SOunds");
        
        let yes: HTMLAudioElement = document.createElement("audio");
        yes.src = "./Audio/Decisions/Ja.m4a";
        
        let selectYes: HTMLElement = document.querySelector("#iSayYes");
        
        if (selectYes) {
            selectYes.addEventListener("mouseenter", playYes);
            
            function playYes(): void {
                yes.play();
            }
        }
    }
}