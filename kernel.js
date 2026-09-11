MASTER_KERNEL = {
    init:  KIT.init,
    build: ULTRA_KERNEL.build,
    send:  ULTRA_KERNEL.sendToALL,
    pipe:  KERNEL.runRithPipeline,
    orbit: ZaM.orbit,
    ui:    UI.init,
    eco:   ECONOMY.init,
    work:  WORK.start,
    groub: GROUB.start,
    start(){
        KIT.init();
        const matrix = ULTRA_KERNEL.build();
        ULTRA_KERNEL.sendToALL(matrix);
        WORK.start();
        GROUB.start();
        UI.init();
        ECONOMY.init();
        ZaM.orbit();
        return matrix;
    }
}

