class MovieController {
  public async rentMovie(movieId: string, customerId: string) {
    // Sequelize ORM models
    const { Movie, Customer, RentedMovie, CustomerCharge } = this.models;

    // Get the raw orm records from Sequelize
    const movie = await Movie.findOne({ where: { movie_id: movieId } });
    const customer = await Customer.findOne({
      where: { customer_id: customerId },
    });

    // 401 error if not found
    if (!!movie === false) {
      return this.notFound("Movie not found");
    }

    // 401 error if not found
    if (!!customer === false) {
      return this.notFound("Customer not found");
    }

    // Create a record which signified a movie was rented
    await RentedMovie.create({
      customer_id: customerId,
      movie_id: movieId,
    });

    // Create a charge for this customer.
    await CustomerCharge.create({
      amount: movie.rentPrice,
    });

    return this.ok();
  }
}

// add constraints
