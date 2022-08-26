export interface Subject {
  id: number;
  name: string;
}

export interface Unit {
  id: number;
  title: string;
  subjects: Subject[];
}
