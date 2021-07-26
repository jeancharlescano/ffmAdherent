import {
  findAllAdherent,
  findAllPiste,
  findAllBanni,
  // findById,
  // UpdatePlayer,
} from "./utilities/DataBase.js";

import Table from "cli-table";
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

  //   Traitement des données des Bannis

  var tableBanni = new Table({
    // entete des colone
    head: ["numero_Adherent_Banni", "code_Piste_Banni"],
    //taille des colone
    colWidths: [20, 20],
  });

  await findAllBanni().then((A) => {
    for (const key in A) {
      if (Object.hasOwnProperty.call(A, key)) {
        const element = A[key];

        tableBanni.push([
          `${element.numero_adherent_banni}`,
          `${element.code_piste_banni}`,
        ]);
      }
    }
  });

    console.log("====================================");
    console.log("Table Adherent");
    console.log("====================================");
    console.log(tableAdherent.toString());

    console.log("====================================");
    console.log("Table Piste");
    console.log("====================================");
    console.log(tablePiste.toString());

  console.log("====================================");
  console.log("Table Banni");
  console.log("====================================");
  console.log(tableBanni.toString());
})();
