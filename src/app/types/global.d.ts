declare module '*.scss' { // декларация для css modules на импорт
  type IClassNames = Record<string, string>
  const classNames: IClassNames;
  export = classNames
}

declare module '*.webp';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
