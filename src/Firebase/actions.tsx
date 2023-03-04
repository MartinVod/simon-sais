import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  Auth,
} from 'firebase/auth';
import {FirebaseError} from '@firebase/util';

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
