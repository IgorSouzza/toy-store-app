export type CustomerStatistic = {
  date: Date;
  value: number;
};

export type Customer = {
  id: string;
  name: string;
  email: string;
  birthday: string;
  statistics: {
    sales: CustomerStatistic[];
  };
};
