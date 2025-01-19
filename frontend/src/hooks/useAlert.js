const { useAppDispatch, useAppSelector } = require("../libs/redux/hooks");
const { setAlert, clearAlert } = require("../libs/redux/slices/alert");

const useAlert = () => {
  const dispatch = useAppDispatch();
  const alertState = useAppSelector((state) => state.alert);

  const showAlert = ({
    variant = "default",
    icon = null,
    title = "",
    description = "",
  } = {}) => {
    dispatch(setAlert({ variant, icon, title, description }));
  };

  const hideAlert = () => {
    dispatch(clearAlert());
  };

  return { alertState, showAlert, hideAlert };
};

export default useAlert;
