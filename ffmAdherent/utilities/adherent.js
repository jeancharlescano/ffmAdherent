import Table from "cli-table";

import {
  findAllAdherent,
} from "./DataBase.js";

(async () => {
  //   Traitement des données de d'Adherent

  var tableAdherent = new Table({
    // entete des colone
    head: ["Nom/Prenom", "numero", "age", "type", "sexe", "code piste"],
    //taille des colone
    colWidths: [20, 20, 20, 20, 20, 20],
  });

  await findAllAdherent().then((A) => {
    for (const key in A) {
      if (Object.hasOwnProperty.call(A, key)) {
        const element = A[key];

        var today = new Date();
        var birthDate = new Date(element.datedenaissance_adherent);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
          age--;
        }

        tableAdherent.push([
          `${element.nom_adherent} ${element.prenom_adherent}`,
          `${element.numero_adherent}`,
          `${age}`,
          `${element.type_adherent}`,
          `${element.sexe_adherent == "H" ? "homme" : "femme"}`,
          `${element.code_piste}`,
        ]);
      }
    }
  });

  console.log("====================================");
  console.log("Table Adherent");
  console.log("====================================");
  console.log(tableAdherent.toString());
})();
