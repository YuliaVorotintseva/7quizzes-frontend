import React, { ReactNode } from "react";

import "./signInLayout.css";

export type SignInLayoutProps = {
  children: ReactNode;
};

const SignInLayout = ({ children }: SignInLayoutProps) => {
  return (
    <>
      <main className="sign_in">{children}</main>
    </>
  );
};

export default SignInLayout;
