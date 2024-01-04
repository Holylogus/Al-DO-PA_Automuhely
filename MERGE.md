## ALDOPA_BRANCHNAME fájl:

#### Létrehozunk egy új branchet:
  - git branch BranchNeve
  - git checkout BranchNeve

  dolgozunk benne...
  git add . git commit -m "msg" git push, git pull/sync

## ALDOPA_MAIN fájl:
#### Amikor a branchünket átvinnénk a main branchbe is:
- nyitunk egy vscode-ot
- megnyitjuk a külön mappában tárolt Main branch-en lévő projektet
- git pull, git sync
- git fül baloldalsó menüpontban
- ... menüpont jobb felül: branch -> merge... -> BranchNeve (amiben előzőleg dolgoztunk)

Ekkor a **mainből indultunk ki** és azt válaszottuk ki, hogy **melyik branchről** akarjuk végrehajtani a merge-t \n
> [!NOTE]
> ###### _Magyarul: Mainbe tedd bele a BranchName ágat_

> [!CAUTION]
> Ezután ha baloldalt megjelenik **piros** felkiáltójel/pötty, akkor további **dolgunk van vele**, amennyiben csak sárgán/zölden jelzett
'M'/'A' jellel ellátott fájlokat sorakoztat fel a STAGED CHANGES alatt (ha unstaged, akkor + jellel hozzáadjuk),
akkor nincs vele dolgunk.

#### Előbbi esetnél (piros !/O):
  - duplakatt a fájlra
  - compare in merge editor (jobb alul)

> [!TIP]
> ###### elvileg a baloldalsó nézet jelöli az INCOMING (beérkező) változtatásunkat (jelenesetben a BranchNeve ág az incoming, abból akarjuk a mainbe tenni a változtatásainkat)

  - az incomingnál jobb felül ... menüpont: accept all changes from left (ezzel minden bejövőt elfogadunk)
  - resolve in editor (jobb alul gomb)

> [!TIP]
> ###### ugyanezt ismételjük, ahány ilyen piros fájlunk van balul, amikor már csak sárga 'M' és zöld 'A' fájlunk maradt a STAGED CHANGES alatt, akkor lehet push-olni (git fül, baloldalsó sor felül), ezután kiírja a beérkező, kimenő változtatásokat, amit szinkronizálhatunk, ha nem ír ki semmilyen hibaüzenetet, figyelmeztetést, különablakot....stb.

Kész 😏
