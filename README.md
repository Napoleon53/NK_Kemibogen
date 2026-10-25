# Kemibogen

Her ligger den færdigbyggede Kemibogen, som den ses på [kemibogen.dk](https://kemibogen.dk).
Ret ikke i filerne her: de bliver skrevet over, næste gang bogen lægges ind.

Bogen skrives i `NK_Undervisning/Kemibogen` og lægges herind med
`vaerktoej/laeg_paa_hjemmesiden.sh` (den stationære) eller `vaerktoej\laeg_paa_hjemmesiden.ps1`
(Windows-computeren) derfra. Den kommer på nettet, når mappen sendes til GitHub (Synkroniser).

- `c/` er bogen til kemi C, `b/` er bogen til kemi B, og `a/` er bogen til kemi A. De linker til hinanden.
- `index.html` sender læseren videre til `c/index.html`.
- `CNAME` er adressen kemibogen.dk, og `.nojekyll` får GitHub til at vise filerne, som de er.
- Animationerne, bogen linker til, ligger på kemiformler.dk (mappen `NK_hjemmeside`).
- Bogen lå på kemiformler.dk/kemibogen fra 9. til 13. okt. 2026. Den adresse sender videre hertil.

## Licens

Kemibogen © 2026 Niels Kræmmer må bruges gratis efter licensen Creative Commons
Kreditering-IkkeKommerciel 4.0 International (CC BY-NC 4.0). Den fulde licenstekst står i `LICENSE`, og hvad
licensen betyder, står under [Brug af bogen](https://kemibogen.dk/c/index.html#brug-af-bogen) i forordet til
Kemibogen C. Programkoden i mapperne `site_libs/` kommer fra Quarto og har sine egne licenser.
