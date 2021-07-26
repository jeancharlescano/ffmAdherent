import Table from "cli-table";

import {
  findAllBanni,
} from "./DataBase.js";

(async () => {
  //   Traitement des données des Bannis

  var tableBanni = new Table({
    // entete des colone
    head: ["numero_Adherent_Banni", "code_Piste_Banni", "numero_Adherent", "code_Piste"],
    //taille des colone
    colWidths: [20, 20, 20, 20],
  });

  await findAllBanni().then((A) => {
    for (const key in A) {
      if (Object.hasOwnProperty.call(A, key)) {
        const element = A[key];
        console.log("Log ~ file: app.js ~ line 82 ~ awaitfindAllBanni ~ element", element)

        tablePiste.push([
          `${element.numero_adherent_banni}`,
          `${element.code_piste_banni}`,
          `${element.numero_adherent}`,
          `${element.code_piste}`,
        ]);
      }
    }
  });

  console.log("====================================");
  console.log("Table Banni");
  console.log("====================================");
  console.log(tableBanni.toString());
})();
