export const checkSingleStatus = (sliceSelect) => {
  let result = {
    isError: false,
    isLoading: true,
    isLoaded: false,
    isBasketEmpty: false,
  };

  if (sliceSelect.status === "failed") {
    result.isError = true;
  }

  if (sliceSelect.status === "inProgress") {
    result.isLoading = true;
  }

  if (sliceSelect.status === "succeeded") {
    result.isLoaded = true;
    result.isLoading = false;
  }

  return result;
};
