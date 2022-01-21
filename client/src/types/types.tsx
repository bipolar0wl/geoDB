// * Интерфейс шлифа
export interface ISection {
  id?: number;
  name?: string;
}
// * Интерфейс типа анализа
export interface IAnalysisType {
  id?: number;
  name?: string;
}
// * Интерфейс элемента
export interface ISubstance {
  id?: number;
  formula?: string;
  name?: string;
  percent?: number;
}
