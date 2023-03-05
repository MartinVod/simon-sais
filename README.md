# Simon Says

Simon Says is a mobile app that tests your memory and reflexes. The game consists of a sequence of colors that light up, and the player must repeat the sequence correctly. The game gets more difficult as the sequence gets longer, and the colors change more quickly.

## Features

- Firebase Authentication for user login and registration
- Two navigators: auth and home
- Three difficulty levels: Easy (4 colors), Medium (6 colors), and Extreme (8 colors)
- Game over if the player misses the sequence
- Scoreboard to view the highest scores
- Firestore NoSQL database for storing high scores

## Structure
- All main components are inside src folder.
- Navigators (Auth,Home,Main) are located inside Navigators.
- Firebase actions (API calls and init) are inside Firebase folder.
- Reusable components inside components (indexed exports).
- Screens are inside Screens folder (indexed exports).
- Utils folder for colors configuration and constants.

## Usage

To use Simon Says, simply follow these steps:

1. Clone the repository to your local machine.
2. Install the required dependencies using `npm install`.
3. Run the app using `npm start`.
4. The app should open in your default mobile simulator, or you can use the Expo app on your mobile device to scan the QR code and open the app.

## Technologies Used

- React Native for building the mobile app
- Firebase for authentication and database storage
- Firestore for NoSQL database
- React Native Navigation


