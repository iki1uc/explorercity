// ============================================================
// economy.js – KlicK‑ZacK‑Ökonomie
// Exportiert eine Klasse Economy mit addKlick, reset, etc.
// ============================================================

export class Economy {
  constructor() {
    this.klick = 0;
    this.zack = 0;
    this.totalKlicks = 0;
    this.onUpdate = null; // Callback für UI‑Updates
  }

  // Einen oder mehrere KlicK hinzufügen
  addKlick(amount = 1) {
    if (amount <= 0) return;
    this.klick += amount;
    this.totalKlicks += amount;

    // Prüfen, ob 100 KlicK erreicht sind → ZacK +1, KlicK zurücksetzen
    while (this.klick >= 100) {
      this.klick -= 100;
      this.zack += 1;
      // Optional: Event für ZacK‑Gewinn auslösen
      this._onZackEarned();
    }

    this._triggerUpdate();
  }

  // Reset der Ökonomie
  reset() {
    this.klick = 0;
    this.zack = 0;
    this.totalKlicks = 0;
    this._triggerUpdate();
  }

  // Setzt eine Callback‑Funktion für UI‑Updates
  setUpdateCallback(cb) {
    this.onUpdate = cb;
    this._triggerUpdate();
  }

  // Interne Hilfsfunktionen
  _triggerUpdate() {
    if (this.onUpdate) {
      this.onUpdate(this.klick, this.zack, this.totalKlicks);
    }
  }

  _onZackEarned() {
    // Kann für Animationen oder Logging genutzt werden
    console.log(`🎉 ZacK gewonnen! Aktuell: ${this.zack}`);
  }
}
