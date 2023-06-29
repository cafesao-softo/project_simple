declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string
      Node_ENV: string
      MYSQL_PORT: string
      MYSQL_USER: string
      MYSQL_PASSWORD: string
      MYSQL_DATABASE: string
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {}
