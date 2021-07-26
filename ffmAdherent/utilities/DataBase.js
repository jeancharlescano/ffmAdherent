import pkg from "pg";
const { Pool } = pkg;

export const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "ffm-adherent",
  password: "password",
  port: 5432,
});

pool.connect();

export async function findAllAdherent() {
  return await pool
    .query(`SELECT * FROM Adherent;`)
    .then((res) => {
      // console.log(res.rows[0]);
      return res.rows
    })
    .catch((error) => console.error(error.stack));
}

export async function findAllPiste() {
  return await pool
    .query(`SELECT * FROM Piste;`)
    .then((res) => {
      // console.log(res.rows[0]);
      return res.rows
    })
    .catch((error) => console.error(error.stack));
}

export async function findAllBanni() {
  return await pool
    .query(`SELECT * FROM Banni;`)
    .then((res) => {
      // console.log(res.rows[0]);
      return res.rows
    })
    .catch((error) => console.error(error.stack));
}
