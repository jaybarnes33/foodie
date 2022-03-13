/* eslint-disable @next/next/no-img-element */

import React, { ReactNode } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";
const FormWrapper = ({ children }: { children: ReactNode }) => {
  const { pathname } = useRouter();
  return (
    <div>
      <>
        <Row className={styles.formWrapper}>
          <Col md={6} className="desktop-only px-5">
            <div className={styles.imgWrapper}>
              <img
                src="/assets/formvector.svg"
                alt=""
                className={styles.formvector}
              />
              <p>
                Order food and have it delivered to your doorstep in minutes
              </p>
            </div>
          </Col>
          <Col sm={12} md={6} className={`px-5 ${styles.form}`}>
            <div className="mb-4">
              <h1>{pathname === "/login" ? "Welcome Back" : "Get Started"}</h1>
              <p>
                Please enter your details to{" "}
                {pathname === "/login"
                  ? "log into your account"
                  : "create an account"}
              </p>
            </div>

            {children}
            <div className={styles.continueWith}>
              Or continue with
              <div
                className={`${styles.buttons} buttons d-flex gap-3 justify-content-center`}
              >
                <Image
                  width={35}
                  height={35}
                  src="/images/google.png"
                  alt="google"
                  quality={100}
                />

                <Image
                  width={35}
                  height={35}
                  src="/images/facebook.png"
                  alt="google"
                  quality={100}
                />
              </div>
              <div className="mt-4">
                {pathname === "/login" ? (
                  <p>
                    Don&apos;t have an account?{" "}
                    <span className="text-primary">
                      <Link href="/register">Sign up</Link>
                    </span>
                  </p>
                ) : (
                  <p>
                    Already have an account?{" "}
                    <span className="text-primary">
                      <Link href="/login">Sign in</Link>
                    </span>
                  </p>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </>
    </div>
  );
};

export default FormWrapper;
