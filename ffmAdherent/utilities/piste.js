import Table from "cli-table";

import {
  findAllPiste,
} from "./DataBase.js";

(async () => {
  //   Traitement des données de piste

  var tablePiste = new Table({
    // entete des colone
    head: ["code piste", "nom", "adresse", "telephone"],
    //taille des colone
    colWidths: [20, 20, 70, 20],
  });

  await findAllPiste().then((A) => {
    for (const key in A) {
      if (Object.hasOwnProperty.call(A, key)) {
        const element = A[key];

        tablePiste.push([
          `${element.code_piste}`,
          `${element.nom_piste}`,
          `${element.adresse_piste}`,
          `${element.telephone_piste}`,
        ]);
      }
    }
  });

  console.log("====================================");
  console.log("Table Piste");
  console.log("====================================");
  console.log(tablePiste.toString());
})();
