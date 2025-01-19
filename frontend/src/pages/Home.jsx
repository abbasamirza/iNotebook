import imagePath from "../utils/imagePaths";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Label } from "../components/Label";
import React, { useState } from "react";

const Home = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-4">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tight">
            Welcome to iNotebook
          </h1>
          <p className="text-xl text-muted-foreground">
            Your thoughts, organized and accessible from anywhere. Start taking
            smarter notes today.
          </p>
          <div className="relative w-full aspect-video rounded-lg overflow-hidden">
            <img
              src={imagePath.backgrounds.note}
              alt="Notes Illustration"
              layout="fill"
            />
          </div>
        </div>

        <div className="bg-card rounded-lg shadow-lg dark:shadow-white/10 p-8">
          <h2 className="text-2xl font-semibold text-center mb-6">
            {isLogin ? "Log In" : "Sign Up"}
          </h2>
          <form className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                required
                autoComplete="email"
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                required
                autoComplete="current-password"
              />
            </div>
            {!isLogin && (
              <div>
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  required
                />
              </div>
            )}
            <Button className="w-full" size="lg" type="submit">
              {isLogin ? "Log In" : "Sign Up"}
            </Button>
          </form>
          <div className="mt-4 text-center">
            <Button variant="link" onClick={() => setIsLogin(!isLogin)}>
              {isLogin
                ? "Don't have an account? Sign Up"
                : "Already have an account? Log In"}
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
