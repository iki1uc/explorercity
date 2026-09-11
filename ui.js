// ============================================================
// ui.js – UI‑Updates und Event‑Binding für KlicK/ZacK
// ============================================================

export function initUI(economy) {
  // DOM‑Elemente für KlicK/ZacK
  const klickEls = [
    document.getElementById('klickCount'),
    document.getElementById('statusKlick')
  ];
  const zackEls = [
    document.getElementById('zackCount'),
    document.getElementById('statusZack')
  ];

  // Update‑Funktion
  function updateUI(klick, zack) {
    klickEls.forEach(el => { if (el) el.textContent = klick; });
    zackEls.forEach(el => { if (el) el.textContent = zack; });
  }

  // Callback bei Economy‑Änderungen registrieren
  economy.setUpdateCallback(updateUI);

  // Manuellen KlicK‑Button einrichten
  const btnKlick = document.getElementById('btnKlick');
  if (btnKlick) {
    btnKlick.addEventListener('click', () => {
      economy.addKlick(1);
      // Kurze Animation des Buttons
      btnKlick.style.transform = 'scale(0.9)';
      setTimeout(() => btnKlick.style.transform = 'scale(1)', 100);
    });
  }

  // Optional: Tastatur‑KlicK (Space) bereits in der Haupt‑HTML gebunden

  // Erstes Update
  updateUI(economy.klick, economy.zack);
}
