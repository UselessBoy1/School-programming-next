import sqlite3 from "sqlite3";
import { SubjectData, SubjectName, Unit } from "../types/types";

const db = new sqlite3.Database("./database/database.db");

export const fetchSubject = async (subjectId: string): Promise<SubjectData> => {
  return new Promise<SubjectData>((resolve, reject) => {
    db.get(
      "SELECT id, name, description, code FROM subjects WHERE id = $id",
      { $id: subjectId },
      async (error, row) => {
        resolve({
          id: row.id,
          name: row.name,
          description: row.description,
          code: row.code,
        });
      }
    );
  });
};

export const fetchAllSubjectsNames = async (): Promise<SubjectName[]> => {
  return new Promise<SubjectName[]>((resolve, reject) => {
    const subjects: SubjectName[] = [];
    db.all("SELECT id, name FROM subjects", async (error, rows) => {
      rows.forEach((row) => {
        subjects.push({
          id: row.id,
          name: row.name,
        });
      });
      resolve(subjects);
    });
  });
};

const fetchSubjectsNamesByUnitId = async (
  unitId: number
): Promise<SubjectName[]> => {
  return new Promise<SubjectName[]>((resolve, reject) => {
    const subjects: SubjectName[] = [];
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
          const subjects = await fetchSubjectsNamesByUnitId(row.id);
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
