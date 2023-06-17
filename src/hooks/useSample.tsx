// sample code

import { Dispatch, SetStateAction, useEffect } from "react";

interface IoutsideClick {
  ref: React.RefObject<HTMLUListElement>;
  isFocus: boolean;
  setIsFocus: Dispatch<SetStateAction<boolean>>;
}

const useOutsideClick = ({ ref, isFocus, setIsFocus }: IoutsideClick) => {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Element)) {
        setIsFocus(false);
      }
    }
    if (isFocus) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, isFocus, setIsFocus]);
};

export default useOutsideClick;
