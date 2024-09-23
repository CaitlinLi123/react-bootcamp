import { useEffect } from "react";
export default function useKey(key, action) {
  useEffect(
    function () {
      function callback(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action();
        }
      }
      document.addEventListener("keydown", callback);

      //each time a new instance is mounted, document will have one more event listener
      return function () {
        document.removeEventListener("keydown", callback);
      };
    },
    [action, key]
  );
}
