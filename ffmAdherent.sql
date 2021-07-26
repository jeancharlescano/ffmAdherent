#------------------------------------------------------------
#        Script MySQL.
#------------------------------------------------------------


#------------------------------------------------------------
# Table: Piste
#------------------------------------------------------------

CREATE TABLE Piste(
        code_Piste      Varchar (5) NOT NULL ,
        nom_Piste       Varchar (255) NOT NULL ,
        adresse_Piste   Varchar (255) NOT NULL ,
        telephone_Piste Varchar (255) NOT NULL
	,CONSTRAINT Piste_PK PRIMARY KEY (code_Piste)
);


#------------------------------------------------------------
# Table: Adherent
#------------------------------------------------------------

CREATE TABLE Adherent(
        numero_Adherent          Int NOT NULL ,
        nom_Adherent             Varchar (50) NOT NULL ,
        prenom_Adherent          Varchar (50) NOT NULL ,
        dateDeNaissance_Adherent Date NOT NULL ,
        type_Adherent            ENUM ('entrainement', 'competition') NOT NULL ,
        sexe_Adherent            ENUM ('H', 'F') NOT NULL ,
        code_Piste               Varchar (5) NOT NULL
	,CONSTRAINT Adherent_PK PRIMARY KEY (numero_Adherent)

	,CONSTRAINT Adherent_Piste_FK FOREIGN KEY (code_Piste) REFERENCES Piste(code_Piste)
);


#------------------------------------------------------------
# Table: Banni
#------------------------------------------------------------

CREATE TABLE Banni(
        numero_Adherent_Banni Int NOT NULL ,
        code_Piste_Banni      Varchar (5) NOT NULL
	,CONSTRAINT Banni_PK PRIMARY KEY (numero_Adherent_Banni,code_Piste_Banni)

	,CONSTRAINT Banni_Adherent_FK FOREIGN KEY (numero_Adherent_Banni) REFERENCES Adherent(numero_Adherent)
	,CONSTRAINT Banni_Piste0_FK FOREIGN KEY (code_Piste_Banni) REFERENCES Piste(code_Piste)
);


#------------------------------------------------------------
# Jeux De Donnée : Piste
#------------------------------------------------------------

INSERT INTO Piste (code_Piste, nom_Piste, adresse_Piste, telephone_Piste)
 VALUES
 ('C3242', 'CM X RACER', '7 Chemin De Lunel, 34400 Villetelle', '0621132570'),
 ('C0866', 'MOTO CLUB SOMMIEROIS', '10 Allée De Fontbonne, 30250 Villevieille', '0789942924'),
 ('C0281', 'MOTO CLUB DES COSTIERES', 'Bois de la vieille, 30640 Beauvoisin', '0619601304'),
 ('C0840', 'MOTO CLUB SALINDRES ROUSSON', '31 Rue De La Mairie, Le Village 30500 Potelieres', '0676523686'),
 ('C1689', 'FRONTIGNAN LA CIBLE', '65 Avenue Ferdinand De Lesseps 34110 Frontignan', '0618993233'),
 ('C0831', 'MOTO CLUB SAINT THIBERYEN', 'Chemin de la Vière, 34630 Saint-Thibéry', '0467777120');

#------------------------------------------------------------
# Jeux De Donnée : Adherent
#------------------------------------------------------------

INSERT INTO Adherent (numero_Adherent, nom_Adherent, prenom_Adherent, dateDeNaissance_Adherent, type_Adherent, sexe_Adherent, code_Piste)
VALUES
('382806', 'CANO', 'Jean-Charles', '2000-10-24', 'entrainement', 'H', 'C3242'),
('288053', 'LEIVA', 'Kevin', '2000-08-15', 'entrainement', 'H', 'C0281'),
('346641', 'SILVA', 'Lou', '2006-04-10', 'entrainement', 'F', 'C0840'),
('386001', 'COLSON', 'Arnaud', '2006-12-28', 'competition', 'H', 'C1689'),
('226617', 'PRUNIERE', 'Amelie', '1995-02-05', 'competition', 'F', 'C0866'),
('371085', 'PIERRE', 'Martin', '1998-03-06', 'entrainement', 'H', 'C0831');

INSERT INTO Banni (numero_Adherent_Banni, code_Piste_Banni)
VALUES
('371085', 'C3242')