import dotenv from "dotenv";
import { neon } from '@neondatabase/serverless';

dotenv.config();

export const sql = neon(process.env.DATABASE_URL);

export async function initSimpleProfileTable() { // contains less details, will link one to one with a more detailed table in future
  try {
    console.log('Connection to neon established');

    // Create a new table
    await sql`
      CREATE TABLE IF NOT EXISTS simple_profile (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        movement VARCHAR(255),
        toughness INT NOT NULL,
        save INT NOT NULL,
        wounds INT NOT NULL,
        leadership INT NOT NULL,
        OC INT
      );
    `;
    console.log('Finished creating table.');

  } catch (err) {
    console.error('Connection failed.', err);
  }
}