export interface ProfitData {
  profit?: number;
  revenue: number;
  company_id: number;
  total_days?: number;
  marketing_spend?: number;
}

export interface MonthlyRawProfits {
  [key: string]: ProfitData;
}
