// import firestore from '@react-native-firebase/firestore';
/* eslint-disable */
const getElementRef = async elementID => {
  const elementRef = await element(by.id(elementID));
  return elementRef;
};

const elementIsVisible = async elementRef => {
  await expect(elementRef).toBeVisible();
};

const elementIsNotVisible = async elementRef => {
  await expect(elementRef).toBeNotVisible();
};

const enterCredentials = async (email, password, isLogin) => {
  try {
    const typeOfLogin = isLogin ? 'login' : 'signup';
    const emailInput = await getElementRef(typeOfLogin + '-email-input');
    const passwordInput = await getElementRef(typeOfLogin + '-password-input');
    const enterInputButton = await getElementRef(typeOfLogin + '-button');

    await emailInput.tap();
    await emailInput.typeText(email);
    await passwordInput.tap();
    await passwordInput.typeText(password);

    await enterInputButton.tap();
    await enterInputButton.tap();

    return {emailInput, passwordInput};
  } catch (e) {
    console.log('Buttons/components not found/accessible');
  }
};

const sleep = milliseconds => {
  let currentTime = new Date().getTime();
  const desiredTime = currentTime + milliseconds;
  while (currentTime < desiredTime) {
    currentTime = new Date().getTime();
  }
};

//for log in, isLogin is = true
const simulateLogIn = async (email, password) => {
  await enterCredentials(email, password, true);
};

const simulateSignUp = async (email, password) => {
  await enterCredentials(email, password, false);
};

// const addPostToDatabase = async (
//   allowScreenshot,
//   caption,
//   comments,
//   dataCreated,
//   hearts,
//   image,
//   uid,
//   username,
// ) => {
//   await firestore()
//     .collection('posts')
//     .add({
//       allowScreenshot: allowScreenshot,
//       caption: caption,
//       comments: comments,
//       dataCreated: dataCreated,
//       hearts: hearts,
//       image: image,
//       uid: uid,
//       username: username,
//     });
// };

// const addDefaultPostToDatabase = async () => {
//   await addPostToDatabase(
//     true,
//     'Pretty',
//     '',
//     1589158822,
//     0,
//     'https://firebasestorage.googleapis.com/v0/b/sype-privacy.appspot.com/o/Image%2Fkh3FZBqQAlNZGeK0ig7PkTZRtLs2%2F29940322-432c-057b-80de.png?alt=media&token=a8a13f56-de92-41a2-83b8-35ff785101f4',
//     'kh3FZBqQAlNZGeK0ig7PkTZRtLs2',
//     'tester0',
//   );
// };

describe('Verifying sign up page', () => {
  it('checking if all sign up components are visible', async () => {
    const signUpEmailInput = await getElementRef('signup-email-input');
    const signUpPasswordInput = await getElementRef('signup-password-input');
    const signUpButton = await getElementRef('signup-button');

    await elementIsVisible(signUpEmailInput);
    await elementIsVisible(signUpPasswordInput);
    await elementIsVisible(signUpButton);
  });
});

describe('Log in flow', () => {
  it('simulating log in', async () => {
    const email = 'dork@gmail.com';
    const password = '123456';

    const haveAccountButton = await getElementRef(
      'already-have-account-button',
    );
    await elementIsVisible(haveAccountButton);
    await haveAccountButton.tap();
    await simulateLogIn(email, password);
    sleep(5000);
    const signUpButton = await getElementRef('signup-button');
    await elementIsNotVisible(signUpButton);
  });
});
describe('testing svgs in bottom navigator extts', () => {
  it('checking svgs', async () => {
    const haveAccountButton = await getElementRef(
      'already-have-account-button',
    );
  await elementIsNotVisible(haveAccountButton);
  const signUpButton = await getElementRef('signup-button');
  await elementIsNotVisible(signUpButton);
  const searchSVG = await element(by.id('SearchSVG'));
  const profileSVG = await element(by.id('ProfileSVG'));
  const feedSVG = await element(by.id('FeedSVG'));
  const uploadSVG = await element(by.id('UploadSVG'));
  await elementIsVisible(searchSVG);
  await elementIsVisible(profileSVG);
  await elementIsVisible(feedSVG);
  await elementIsVisible(uploadSVG);
  });
});
describe('testing swiping on feed page', () => {
  it('simulating swipes', async () => {
    const feedSVG = await element(by.id('FeedSVG'));
    await elementIsVisible(feedSVG);
    await feedSVG.tap();
    const swiperView = await getElementRef('feed-safe-area');
    await elementIsVisible(swiperView);
    await swiperView.swipe('down');
    await swiperView.swipe('up');
    await swiperView.swipe('down', 'fast');
    await swiperView.swipe('up', 'fast');
  });
});
describe('testing search', () => {
  it('testing search where user exists', async () => {
    const searchSVG = await element(by.id('SearchSVG'));
    await elementIsVisible(searchSVG);
    await searchSVG.tap();  
    const searchBar = await element(by.id('search-bar'));  
    await elementIsVisible(searchBar);
    await searchBar.replaceText('');
    await searchBar.typeText('bujarsefa9@gmail.com');
    await searchBar.tapAtPoint({x:-2, y:3});    
    await searchBar.tapReturnKey();
    const friendFound = await element(by.id('friend-found'));
    await elementIsVisible(friendFound);
    const friendNotFound = await element(by.id('friend-not-found'));
    await elementIsNotVisible(friendNotFound);

  });
  it('testing search where user does not exists', async () => {
    const searchSVG = await element(by.id('SearchSVG'));
    await elementIsVisible(searchSVG);
    await searchSVG.tap();  
    const searchBar = await element(by.id('search-bar'));  
    await elementIsVisible(searchBar);
    await searchBar.replaceText('');
    await searchBar.typeText('bujarsefa10@gmail.com');
    await searchBar.tapAtPoint({x:-2, y:3});    
    await searchBar.tapReturnKey();
    const friendNotFound = await element(by.id('friend-not-found'));
    await elementIsVisible(friendNotFound);
    const friendFound = await element(by.id('friend-found'));
    await elementIsNotVisible(friendFound);

  });

});

describe('testing logout', () => {
  it('simulating logout', async () => {
  const searchSVG = await element(by.id('SearchSVG'));
  await elementIsVisible(searchSVG);
  await searchSVG.tap();
  const logOut = await element(by.id('logout-button'));
  await elementIsVisible(logOut);
  await logOut.tap();
  });
});


// describe('testing fetchPosts listener', () => {
//   beforeEach(async () => {
//     await device.reloadReactNative();
//   });

//   it('adding post to database and checking if it', async () => {
//     const postID = 'BzbzvqmiGK043HimiAPm';

//     //await addDefaultPostToDatabase();
//     // await device.reloadReactNative();
//     // await expect(getElementRef(postID)).toBeNotVisible();
//   });
// });

// describe('Sign up flow', () => {
//   it('simulating sign up', async () => {
//     const email = 'random@gmail.com';
//     const password = '123456';
//     const haveAccountButton = await getElementRef(
//       'already-have-account-button',
//     );
//     // await simulateSignUp(email, password);
//     // await expect(signUpButton).toBeNotVisible();
//     // await sleep(5000);
//   });
// });
