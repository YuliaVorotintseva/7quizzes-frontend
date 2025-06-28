import React, { ReactNode } from "react";

import "./signUpLayout.css";

export type SignUpLayoutProps = {
  children: ReactNode;
};

const SignUpLayout = ({ children }: SignUpLayoutProps) => (
  <main className="sign_up">{children}</main>
);

export default SignUpLayout;
