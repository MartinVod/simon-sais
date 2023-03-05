import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  Auth,
} from 'firebase/auth';
import {
  collection,
  query,
  where,
  orderBy,
  limit,
  getDocs,
  addDoc,
} from 'firebase/firestore';

import {db} from './init';

import {FirebaseError} from '@firebase/util';

import {Alert} from 'react-native';
import {ScoreboardItem} from '~/Types';

export const register = async ({
  email,
  password,
  displayName,
}: {
  email: string;
  password: string;
  displayName: string;
}) => {
  const auth = getAuth();
  console.log('displayName', displayName);
  try {
    // Create user account with email and password
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const user = userCredential.user;
    console.log('user', user);
    await updateUserProfile({auth, displayName});

    return user;
  } catch (error: unknown) {
    if (error instanceof FirebaseError) {
      // handle the error
      throw error;
    } else {
      console.error('error while register', error);
    }
  }
};

export const updateUserProfile = async ({
  auth,
  displayName,
}: {
  auth: Auth;
  displayName: string;
}) => {
  try {
    if (auth.currentUser) {
      await updateProfile(auth.currentUser, {displayName});
    }
  } catch (error) {
    if (error instanceof FirebaseError) {
      // handle the error
      throw error;
    } else {
      console.error('error while register', error);
    }
  }
};

export const logout = async () => {
  const auth = getAuth();

  try {
    await auth.signOut();
  } catch (error) {
    return error;
  }
};

export const handleLogin = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const auth = getAuth();
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const user = userCredential.user;
    return user;
  } catch (error) {
    if (error instanceof FirebaseError) {
      throw error;
    } else {
      console.error('error while login', error);
      return error;
    }
  }
};
export const updateScoreboard = async (score: number): Promise<void> => {
  const user = getAuth().currentUser;

  const scoreboardRef = collection(db, 'scores');
  // Get the highest score for the user
  const userScoresQuery = query(
    scoreboardRef,
    where('userId', '==', user?.uid),
    orderBy('score', 'desc'),
    limit(1),
  );
  const userScoresSnapshot = await getDocs(userScoresQuery);

  // If the user has a higher score than their highest score, add it to the scoreboard
  if (
    userScoresSnapshot.size === 0 ||
    score > userScoresSnapshot.docs[0].data().score
  ) {
    Alert.alert('new high score!');
    await addDoc(scoreboardRef, {
      userId: user?.uid,
      displayName: user?.displayName,
      score,
    });
  }
};
export const getScoreboard = async (): Promise<ScoreboardItem[]> => {
  const scoreboardRef = collection(db, 'scores');

  // Query the scoreboard collection and order the results by score in descending order
  try {
    const scoreboardQuery = query(scoreboardRef, orderBy('score', 'desc'));
    const snapshot = await getDocs(scoreboardQuery);
    const scoreboardData = snapshot.docs.map(doc => {
      const {userId, displayName, score} = doc.data();
      return {userId, displayName, score, id: doc.id};
    });
    return scoreboardData;
  } catch (error) {
    console.error('Error fetching scoreboard:', error);

    return [];
  }
};
