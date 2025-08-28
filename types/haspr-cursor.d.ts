declare module 'haspr-cursor' {
  interface CursorOptions {
    cursor?: {
      color?: string;
      size?: number;
    };
  }

  class HasprCursor {
    constructor(options?: CursorOptions);
    destroy(): void;
  }

  export = HasprCursor;
}
