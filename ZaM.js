// ───────────────────────────────────────────────
// ZaM – Orbit‑Erfüllung · iki1uc
// kompatibel mit Orbit-System v2
// ───────────────────────────────────────────────

export const ZaM = {

    state: {
        orbit: false,
        speed: 3,
        axiom: null,
        symbol: null,
        index: 0,
        memory: []
    },

    // ZaM aktivieren
    start(speed = 3){
        this.state.orbit = true;
        this.state.speed = speed;
        return this.state;
    },

    // ZaM stoppen
    stop(){
        this.state.orbit = false;
        return this.state;
    },

    // ZaM Schritt – wird von stepOrbit() gefüttert
    feed(index, symbol, axiom){
        this.state.index = index;
        this.state.symbol = symbol;
        this.state.axiom = axiom;

        // Memory‑History
        this.state.memory.push({
            index,
            symbol,
            axiom,
            time: Date.now()
        });

        if(this.state.memory.length > 50){
            this.state.memory.shift();
        }

        return this.state;
    },

    // ZaM Snapshot für 2me
    snapshot(){
        return {
            orbit: this.state.orbit,
            speed: this.state.speed,
            index: this.state.index,
            symbol: this.state.symbol,
            axiom: this.state.axiom,
            memory: [...this.state.memory]
        };
    }
};
