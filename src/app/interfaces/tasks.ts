export interface Tasks {
  work_order_id: number;
  description: string;
  received_date: string;
  assigned_to: Array<{
    person_name: string;
    status: string;
  }>;
  status: string;
  priority: string;
}
