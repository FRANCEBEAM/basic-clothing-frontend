import React from "react";
import { Link, useNavigate } from "react-router-dom";

// import { useValue } from "../../context/ContextProvider";

const SignIn = () => {
    // const {
    //     state: { currentUser },
    //     dispatch,
    // } = useValue();
    // const navigate = useNavigate();

    // // Signin Submission
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     sessionStorage.setItem(
    //         "user",
    //         JSON.stringify({ user_role: "admin" })
    //     );
    //     dispatch({
    //         type: "UPDATE_USER",
    //         payload: JSON.parse(sessionStorage.getItem("user")),
    //     });
    //     currentUser.user_role === "admin"
    //         ? navigate("/admin/dashboard")
    //         : navigate("/user");
    // };
    return (
        <>
            <div className="w-full h-screen bg-[#000000]">
                <img
                    className="absolute w-full h-screen object-cover inline-block opacity-40 z-0"
                    src="/assets/vogue-img.jpg"
                    alt="vogue wallpapper"
                />

                <div className="w-[360px] bg-bg-white absolute m-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 px-10 py-10 text-center rounded-lg">
                    <form>
                        <h1 className="text-black py-5 text-2xl font-bold">
                            Login in to Your Account
                        </h1>
                        <div className="flex flex-col gap-5 pt-5">
                            <input
                                className="p-2 border-gray-400 border-solid border-2 rounded-md"
                                type="email"
                                placeholder="Enter your email"
                            />
                            <input
                                className="p-2 border-gray-400 border-solid border-2 rounded-md"
                                type="password"
                                placeholder="Enter your password"
                            />
                        </div>
                        <div className="flex justify-end py-5">
                            <Link
                                className="text-gray-500 text-sm font-light"
                                to="/forgot-password"
                            >
                                Forgot password?
                            </Link>
                        </div>
                        <button
                            type="submit"
                            className="mt-2 bg-[#121212] hover:bg-black p-3 px-10 font-bold w-full text-white"
                        >
                            Sign in
                        </button>
                        <p className="py-5 text-sm text-black">
                            Don't have an account?{" "}
                            <Link to="/signup" className="font-bold text-black">
                                Sign up now
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
    );
};

export default SignIn;
