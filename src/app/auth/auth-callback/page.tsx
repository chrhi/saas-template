"use client";

const AuthCallbackPage = () => {
  return (
    <div className="flex items-center justify-center flex-col h-screen relative">
      <div className="border-[3px] border-neutral-800 rounded-full border-b-neutral-200 animate-loading w-8 h-8"></div>
      <p className="text-lg font-medium text-center mt-3">
        Verifying your account...
      </p>
    </div>
  );
};

export default AuthCallbackPage;
