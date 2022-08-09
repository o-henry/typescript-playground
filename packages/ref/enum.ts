enum Direction {
    Up = 1,
    Down,
    Left,
    Right,
}

console.log(Direction.Up, Direction.Down)

enum UserResponse {
    No = 0,
    Yes = 1,
}

function respond(recipient: string, message: UserResponse): void {}

respond("Princess Caroline", UserResponse.Yes)
