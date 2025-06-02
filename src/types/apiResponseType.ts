type Forecast = {
  day: string;
  temperature: string;
  wind: string;
};

export type Weather = {
  temperature: string;
  wind: string;
  description: string;
  forecast: Forecast[];
  location?:string
};
