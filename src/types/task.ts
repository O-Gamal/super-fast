export interface Task {
  id: number;
  title: string;
  expectedTimeToFinish: number;
  priority: 'HIGH' | 'MEDIUM' | 'LOW';
  isCompleted: boolean;
  date: Date | string;
}

export interface List {
  id: number;
  title: string;
  tasks: Task[];
  expanded: boolean;
}
