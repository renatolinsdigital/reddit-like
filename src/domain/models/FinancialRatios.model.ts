export interface FinancialData {
  company_id: number;
  ltv_cac_ratio: number;
  payback_period: number;
}

export interface FinancialRatios {
  [key: string]: FinancialData;
}
