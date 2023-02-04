export type JsonApiErrorNode = {
  error: {
    flashToSession: boolean,
    messages: {
      errors: {
        source: {
          pointer: string;
        };
        code: string;
        title: string;
        meta?: any;
      }[]
    }
  }
}