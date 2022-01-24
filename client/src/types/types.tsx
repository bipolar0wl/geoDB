// * ID и наименования
export interface IBase {
  id?: number | null;
  name?: string;
}
// * Теги
export interface ITag {
  id?: number;
  name: string;
}
// * Минералы
export interface IMineral {
  id?: number;
  name: string;
}
// * Массив минералов
export interface IMinerals {
  minerals?: IMineral[];
}
// * Интрефейс образца
export interface ISample {
  id?: number;
  name?: string;
}
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
