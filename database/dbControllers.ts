import sqlite3 from "sqlite3";
import { Subject, Unit } from "../types/types";

export const db = new sqlite3.Database("./database/database.db");

const fetchSubjects = async (unitId: number): Promise<Subject[]> => {
  return new Promise<Subject[]>((resolve, reject) => {
    const subjects: Subject[] = [];
    db.all(
      "SELECT id, name FROM subjects WHERE unit_id = $id ORDER BY sequence DESC",
      { $id: unitId },
      async (error, rows) => {
        rows.forEach((row) => {
          subjects.push({
            id: row.id,
            name: row.name,
          });
        });
        resolve(subjects);
      }
    );
  });
};

export const fetchUnits = async (): Promise<Unit[]> => {
  return new Promise<Unit[]>((resolve, reject) => {
    const units: Unit[] = [];
    db.all(
      "SELECT id, name FROM units ORDER BY sequence DESC",
      async (error, rows) => {
        for (const row of rows) {
          const subjects = await fetchSubjects(row.id);
          units.push({
            id: row.id,
            title: row.name,
            subjects,
          });
        }
        resolve(units);
      }
    );
  });
};
