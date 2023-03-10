import { SpinnerContainer, SpinnerOverlay } from "./spinnerStyles";

const LoadingSpinner = ({ styles }) => {
  // console.log("loading ...");
  return (
    <SpinnerOverlay style={{ styles }}>
      <SpinnerContainer />
    </SpinnerOverlay>
  );
};

export default LoadingSpinner;
