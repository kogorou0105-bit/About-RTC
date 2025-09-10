import React from "react";
import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import CallPage from "./pages/CallPage";
import ChatPage from "./pages/ChatPage";
import NotificaitionsPage from "./pages/NotificaitionsPage";
import OnboardingPage from "./pages/OnboardingPage";
import LoginPage from "./pages/LoginPage";
import { Toaster } from "react-hot-toast";
const App = () => {
  // const { isLoading, authUser } = useAuthUser();
  // const { theme } = useThemeStore();

  // const isAuthenticated = Boolean(authUser);
  // const isOnboarded = authUser?.isOnboarded;

  // if (isLoading) return <PageLoader />;
  return (
    <div data-theme="coffee" className="h-screen">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/call" element={<CallPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/notifications" element={<NotificaitionsPage />} />
        <Route path="/onboarding" element={<OnboardingPage />} />
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;
