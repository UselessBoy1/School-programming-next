export interface SubjectName {
  id: number;
  name: string;
}

export interface SubjectData {
  id: number;
  name: string;
  description: string;
  code: string;
}

export interface Unit {
  id: number;
  title: string;
  subjects: SubjectName[];
}
