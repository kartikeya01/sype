// import firestore from '@react-native-firebase/firestore';

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

    await haveAccountButton.tap();
    await simulateLogIn(email, password);
    sleep(5000);

    // const navigationFeedButton = await getElementRef('navigation-feed-button');
    // const navigationUploadButton = await getElementRef(
    //   'navigation-upload-button',
    // );
    // const navigationSearchButton = await getElementRef(
    //   'navigation-search-button',
    // );
    // const navigationProfileButton = await getElementRef(
    //   'navigation-profile-button',
    // );

    // await navigationFeedButton.tap();
    // await navigationUploadButton.tap();
    // await navigationSearchButton.tap();
    // await navigationProfileButton.tap();

    // expect(signUpButton).toBeNotVisible();
  });
});

// describe('testing swiping on feed page', () => {
//   it('simulating swipes', async () => {
//     const swiperView = await getElementRef('feed-safe-area-view');
//     elementIsVisible(swiperView);
//     // await swiper.swipe('down');
//     // await swiper.swipe('up');
//     // await swiper.swipe('down', 'fast');
//     // await swiper.swipe('up', 'fast');
//     // elementIsVisible(swiper);
//   });
// });

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
