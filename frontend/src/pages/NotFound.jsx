import React from "react";
import { motion } from "framer-motion";
import imagePath from "../constants/imagePaths";
import { Button } from "../components/Button";
import { useNavigate } from "react-router";
import { ArrowLeft, Home } from "lucide-react";
import path from "../constants/paths";
import Navbar from "../components/Navbar";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <header>
        <Navbar />
      </header>
      <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-b from-background to-muted">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-8 max-w-2xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            className="relative w-full h-64 sm:h-96 place-items-center"
          >
            <img
              src={imagePath.noData}
              alt="Page not found illustration"
              priority="true"
              className="object-contain"
              width={400}
              height={400}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h1 className="text-4xl font-bold tracking-tight">
              Oops! Page Not Found
            </h1>
            <p className="text-muted-foreground text-lg">
              Looks like you&apos;ve ventured into the digital wilderness. The
              page you&apos;re looking for seems to have gone on vacation! 🏖️
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              variant="outline"
              onClick={() => navigate(-1)}
              className="space-x-2"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Go Back</span>
            </Button>
            <Button onClick={() => navigate(path.home)} className="space-x-2">
              <Home className="h-4 w-4" />
              <span>Back to Home</span>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default NotFound;
