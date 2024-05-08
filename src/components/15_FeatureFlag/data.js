const dummyApiResponse = {
  showThemeSwitcher: true,
  showTicTacToeBoard: true,
  showRandomColorGenerator: true,
  showAccordion: true,
  showNestedMenu: true,
  showStarRating: true,
};

const featureFlagsDataServiceCall = () => {
  return new Promise((resolve, reject) => {
    if (dummyApiResponse) setTimeout(resolve(dummyApiResponse), 500);
    else reject("Some error occurred. Please Try again!");
  });
};

export default featureFlagsDataServiceCall;
