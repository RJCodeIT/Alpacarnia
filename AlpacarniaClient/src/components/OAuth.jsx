import React from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";

export default function OAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = async () => {
    try {
      const authProvider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, authProvider);

      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/oauth`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: result.user.displayName,
            email: result.user.email,
            photo: result.user.photoURL,
          }),
        }
      );
      const data = await res.json();
      dispatch(signInSuccess(data));
      navigate("/alpacarnia");
    } catch (error) {
      console.log("Nie można zalogować się na konto Google", error);
    }
  };
  return (
    <button onClick={handleClick} className="oauth-button" type="button">
      Kontynuuj z Google
    </button>
  );
}
