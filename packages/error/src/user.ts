class User {
  private constructor(
    private email: string,
    private firstName: string,
    private lastName: string
  ) {}

  public static createUser(
    email: string,
    firstName: string,
    lastName: string
  ): User {
    if (!isValidEmail(email)) {
      // bad
      // throw new Error("Email is invalid");
    }

    // ... validate firstName

    // ... validate lastName

    // return new user
  }
}
