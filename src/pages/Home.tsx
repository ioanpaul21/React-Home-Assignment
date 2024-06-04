import debounce from "lodash.debounce";
import { ChangeEvent, useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardProps } from "../components/Card/Card";
import { Input } from "../components/Input/Input";
import Slideshow from "../components/SlideShow/SlideShow";
import { AppDispatch, RootState, fetchUsers } from "../store/store";
import { PageWrapper } from "./styles";

export const Home = () => {
  const dispatch: AppDispatch = useDispatch();
  const { users, status, error } = useSelector(
    (state: RootState) => state.users
  );
  const [inputValue, setInputValue] = useState<string>("");
  const [errorText, setErrorText] = useState<string>("");

  const fetchUsersDebounced = useRef(
    debounce((inputValue: string) => {
      dispatch(fetchUsers(inputValue));
    }, 1000)
  ).current;

  useEffect(() => {
    fetchUsersDebounced(inputValue);
  }, [inputValue]);

  const cardProps: CardProps[] = users.map((user) => ({
    image: user.picture.large,
    firstName: user.name.first,
    lastName: user.name.last,
  }));

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const positiveNumberRegex = /^(?:-?\d+)?$/;
    const value = event.target.value;
    if (positiveNumberRegex.test(value) && !value.startsWith("0")) {
      setErrorText("");
      setInputValue(value);
    } else {
      setErrorText("Please enter a positive number");
    }
  };

  return (
    <PageWrapper>
      <section className="wrapper">
        <div className="top">Slide Show</div>
        <div className="bottom" aria-hidden="true">
          Slide Show
        </div>
      </section>
      <label className="label-input" htmlFor="numberOfUsers">
        Enter a Number of users to fetch
      </label>
      <Input
        value={inputValue}
        onChange={(e) => handleChange(e)}
        errorText={errorText}
        id="numberOfUsers"
      />
      {(status === "loading" || status === "idle") && (
        <div className="spinner">
          <div className="bounce1"></div>
          <div className="bounce2"></div>
        </div>
      )}

      {status !== "loading" && status !== "idle" && (
        <Slideshow cards={cardProps}></Slideshow>
      )}

      {status === "failed" && (
        <div className="error-message-wrapper">
          <h1 className="error-message">
            Something went wrong! Please try again later
          </h1>
        </div>
      )}
    </PageWrapper>
  );
};
