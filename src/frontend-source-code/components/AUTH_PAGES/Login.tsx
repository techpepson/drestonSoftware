import {
  Avatar,
  Button,
  Callout,
  Card,
  Heading,
  RadioGroup,
  TextField,
  Theme,
} from "@radix-ui/themes";

import React from "react";
import { Link } from "react-router-dom";
import { authPosition } from "./auth-styles";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { Logo } from "../../../assets/imageExports/exportImg";
import "../../components/AUTH_PAGES/auth-styles.css";

{
  /*Design of the login page for student and teachers*/
}
const Login: React.FC = () => {
  return (
    <>
      <Theme accentColor="blue">
        {/*Container for both the prospective and registered member sections*/}
        <div className="container flex flex-col">
          {/*Designing of login header*/}
          <div
            className={`${authPosition.rawFlex} justify-around items-center`}
          >
            <Heading className="italic text-[#AB4ABA]" size="8">
              Dreston Elite Montessori School
            </Heading>
            <p className={`italic text-[#a3f13b]`}>{Date()}</p>
          </div>
          <div className={`flex items-center justify-center mt-10`}>
            <Avatar src={Logo} fallback="D" size="9" />
          </div>

          <div
            className={`${authPosition.flexPosition} justify-center items-center`}
          >
            {/*Prospective student section*/}
            <div className={`${authPosition.shadow}`}>
              <Card>
                <Heading
                  className={`${authPosition.xlText} bg-[#0090FF] rounded-md text-center text-white`}
                >
                  Prospective Students
                </Heading>

                <div className={`${authPosition.colFlex}`}>
                  <p className={`${authPosition.widthDefinition}`}>
                    As a prospective student, click on the apply button to start
                    your application process. Be sure to print out your proof of
                    registration and present to the school administration to
                    continue your studentship process. Click on{" "}
                    <Link to="/">
                      <em className="text-blue-500">Rules and Regulations</em>
                    </Link>{" "}
                    to read the rules and regulations associated with this.
                  </p>
                  <div className={`${authPosition.flexPosition}`}>
                    <Button
                      variant="surface"
                      className={`${authPosition.cursor}`}
                    >
                      Apply (Prospective Student)
                    </Button>
                    <Button
                      variant="surface"
                      className={`${authPosition.cursor} `}
                    >
                      Edit Details
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
            {/*Registered member section*/}
            <div className={`${authPosition.colFlex} ${authPosition.shadow}`}>
              <Card>
                <div
                  className={`${authPosition.rawFlex} justify-center align-middle items-center bg-[#0090FF] text-white rounded-sm`}
                >
                  <Heading>Registered Users: Login Details</Heading>
                </div>
                {/*Radio section for the radio elements on the login*/}
                <RadioGroup.Root
                  defaultValue="student"
                  name="login-credentials"
                >
                  <RadioGroup.Item value="student" as="la">
                    Student
                  </RadioGroup.Item>
                </RadioGroup.Root>
                {/*Input section to collect user credentials*/}
                <div className={`${authPosition.colFlex} gap-1`}>
                  <label htmlFor="user-name" className={`font-bold`}>
                    Student Name:
                  </label>
                  <TextField.Input
                    placeholder="Enter your name here"
                    name="user-name"
                    autoSave="true"
                  />
                </div>
                <div className={`${authPosition.colFlex} gap-1`}>
                  <label htmlFor="user-pin" className={`font-bold`}>
                    Pin:
                  </label>
                  <TextField.Input
                    placeholder="Enter your pin here"
                    value=""
                    autoSave="true"
                  />
                </div>
                <Callout.Root>
                  <Callout.Icon>
                    <InfoCircledIcon />
                  </Callout.Icon>
                  <Callout.Text>Pin must be 4-digits long</Callout.Text>
                </Callout.Root>
              </Card>
              {/*Buttons to login, reset pin and ask for change of details*/}
              <div className={`${authPosition.flexPosition}`}>
                <Button variant="surface">
                  <Link to="#">Login</Link>
                </Button>
                <div
                  className={`${authPosition.rawFlex} justify-center items-center align-middle gap-2`}
                >
                  <Button variant="surface">
                    <Link to="#">
                      <p className="font-bold">Forgot pin?</p>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Theme>
    </>
  );
};

export default Login;
