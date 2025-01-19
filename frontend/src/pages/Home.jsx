import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../components/Button";
import Navbar from "../components/Navbar";
import imagePath from "../constants/imagePaths";
import Login from "../components/Login";
import Signup from "../components/Signup";
import useAlert from "../hooks/useAlert";
import { isUserLoggedIn } from "../utils/utils";
import { useNavigate } from "react-router";
import path from "../constants/paths";

const Home = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const { hideAlert } = useAlert();

  useEffect(() => {
    isUserLoggedIn() && navigate(path.notes);

    hideAlert();
  }, [hideAlert, navigate]);

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="flex min-h-screen items-center justify-center p-4">
        <motion.div
          className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="space-y-6"
            initial={{ x: -50 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold tracking-tight">
              Welcome to iNotebook
            </h1>
            <p className="text-xl text-muted-foreground">
              Your thoughts, organized and accessible from anywhere. Start
              taking smarter notes today.
            </p>
            <div className="relative w-full aspect-video rounded-lg overflow-hidden">
              <img
                src={imagePath.backgrounds.note || "/placeholder.svg"}
                alt="Notes Illustration"
                layout="fill"
              />
            </div>
          </motion.div>

          <motion.div
            className="bg-card rounded-lg shadow-lg dark:shadow-white/10 p-8"
            initial={{ x: 50 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {isLogin ? <Login /> : <Signup />}
            <div className="mt-4 text-center">
              <Button
                variant="link"
                onClick={() => {
                  hideAlert();
                  setIsLogin(!isLogin);
                }}
              >
                {isLogin
                  ? "Don't have an account? Sign Up"
                  : "Already have an account? Log In"}
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </>
  );
};

export default Home;
