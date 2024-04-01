import {
  Avatar,
  Button,
  Callout,
  Card,
  Heading,
  TextField,
  Theme,
} from "@radix-ui/themes";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { authPosition } from "./auth-styles";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { Logo } from "../../../assets/imageExports/exportImg";
import axios from "axios";
import "../../components/AUTH_PAGES/auth-styles.css";

{
  /*Design of the login page for student and teachers*/
}
const Login: React.FC = () => {
  {
    /*Definition of functionalities for the form fields*/
  }
  {
    /*State definitions for the various functionalities*/
  }
  const [isTeacher, setIsTeacher] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userName, setUserName] = useState<string>("");
  const [userPin, setUserPin] = useState(null);
  const [adminPassport, setAdminPassport] = useState(null);
  const [staffId, setStaffId] = useState(null);

  {
    /*Function definitions to catch user entries*/
  }

  const handleUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.value;
    setUserName(name);
    console.log(name);
  };
  const handleUserPinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const pin = event.target.value;
    setUserPin(pin);
  };
  const handleAdminPassportChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const passport = event.target.value;

    setAdminPassport(passport);
  };
  const handleStaffIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const staff = event.target.value;
    setStaffId(staff);
  };

  const handleRoleChange = (role: string) => {
    if (role === "teacher") {
      setIsTeacher(true);
      setIsAdmin(false);
    } else if (role === "admin") {
      setIsAdmin(true);
      setIsTeacher(false);
    } else {
      setIsTeacher(false);
      setIsAdmin(false);
    }
  };

  {
    /*Axios usage to push user response to the specified url*/
  }
  const url: string = "https://www.google.com";

  const handleUserResponse = async () => {
    try {
      const headers = {
        Accept: "application/json",
        "Content-Type": "json",
      };
      const userResponse = await axios.post(
        url,
        {
          userName,
          userPin,
          adminPassport,
          staffId,
        },
        {
          headers: headers,
        }
      );
      console.log(userResponse.data);
    } catch (error) {
      window.alert("There was an error in your response");
    }
  };

  const preventDefault = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await handleUserResponse();
  };

  return (
    <>
      <Theme accentColor="blue">
        {/*Container for both the prospective and registered member sections*/}
        <div className="container flex flex-col">
          {/*Designing of login header*/}
          <div
            className={`${authPosition.rawFlex} justify-around items-center`}
          >
            <Heading
              className={`italic text-[#edf1d9] ${authPosition.genHeading}`}
            >
              Dreston Elite Montessori School
            </Heading>
            <p className={`italic text-[#dfe957]`}>{Date()}</p>
          </div>
          <div className={`flex items-center justify-center mt-10`}>
            <Avatar src={Logo} fallback="D" size="9" />
          </div>

          {/*Form field to take user details*/}
          <form
            action="#"
            method="post"
            onSubmit={(event) => preventDefault(event)}
          >
            <div
              className={`${authPosition.flexPosition} justify-center items-center mt-7`}
            >
              {/*Prospective student section*/}
              <div className={`${authPosition.shadow}`}>
                <Card>
                  <Heading
                    className={`${authPosition.xlText} ${authPosition.defaultBg} rounded-md text-center text-white`}
                  >
                    Prospective Students
                  </Heading>
                  <div className={`${authPosition.colFlex}`}>
                    <p className={`${authPosition.widthDefinition}`}>
                      As a prospective student, click on the apply button to
                      start your application process. Be sure to print out your
                      proof of registration and present to the school
                      administration to continue your studentship process. Click
                      on{" "}
                      <Link to="/">
                        <em className="text-blue-500">Rules and Regulations</em>
                      </Link>{" "}
                      to read the rules and regulations associated with this.
                    </p>
                    <div className={`${authPosition.flexPosition}`}>
                      <Button
                        variant="surface"
                        className={`${authPosition.cursor} ${authPosition.btnBg}`}
                      >
                        <Link to="#">Apply (Prospective Student)</Link>
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
                    className={`${authPosition.rawFlex} ${authPosition.defaultBg} justify-center align-middle items-center text-white rounded-sm`}
                  >
                    <Heading>Registered Users: Login Details</Heading>
                  </div>
                  {/*Radio section for the radio elements on the login*/}
                  <div
                    aria-label="radio-buttons"
                    className={`${authPosition.flexPosition} `}
                  >
                    <div className={`${authPosition.rawFlex}`}>
                      <input
                        type="radio"
                        name="user-role"
                        id="student-radio"
                        value="student"
                        onChange={() => {
                          handleRoleChange("student");
                        }}
                        defaultChecked
                      />
                      <label htmlFor="student-radio">Student</label>
                    </div>
                    <div className={`${authPosition.rawFlex}`}>
                      <input
                        type="radio"
                        name="user-role"
                        id="teacher-radio"
                        value="teacher"
                        onChange={() => {
                          handleRoleChange("teacher");
                        }}
                      />
                      <label htmlFor="teacher-radio">Teaching staff</label>
                    </div>
                    <div className={`${authPosition.rawFlex}`}>
                      <input
                        type="radio"
                        name="user-role"
                        id="other-radio"
                        value="non-teacher"
                        onChange={() => {
                          handleRoleChange("non-teacher");
                        }}
                      />
                      <label htmlFor="other-radio">Non-teaching staff</label>
                    </div>
                    <div className={`${authPosition.rawFlex}`}>
                      <input
                        type="radio"
                        name="user-role"
                        id="admin-radio"
                        value="admin"
                        onChange={() => {
                          handleRoleChange("admin");
                        }}
                      />
                      <label htmlFor="alumni-radio">Admin</label>
                    </div>
                  </div>

                  {/*Input section to collect user credentials*/}
                  <div className={`${authPosition.colFlex} gap-1`}>
                    <label htmlFor="user-name" className={`font-bold`}>
                      User Name:
                    </label>
                    <TextField.Input
                      placeholder="Enter your name here"
                      className={`${authPosition.placeholderColor}`}
                      name="user-name"
                      autoSave="true"
                      value={userName}
                      onChange={(event) => {
                        handleUserNameChange(event);
                      }}
                    />
                  </div>
                  {isTeacher && (
                    <div className={`${authPosition.colFlex} gap-1`}>
                      <label htmlFor="teacher-id" className={`font-bold`}>
                        Staff ID:
                      </label>
                      <TextField.Input
                        placeholder="Enter your staff id here"
                        className={`${authPosition.placeholderColor}`}
                        name="teacher-id"
                        autoSave="true"
                        value={staffId}
                        onChange={(event) => {
                          handleStaffIdChange(event);
                        }}
                      />
                    </div>
                  )}
                  {/*User password entry point*/}
                  <div className={`${authPosition.colFlex} gap-1`}>
                    <label htmlFor="user-pin" className={`font-bold`}>
                      User Pin:
                    </label>
                    <TextField.Input
                      placeholder="Enter your pin here"
                      name="user-pin"
                      autoSave="true"
                      type="password"
                      value={userPin}
                      className={`${authPosition.placeholderColor}`}
                      onChange={(event) => {
                        handleUserPinChange(event);
                      }}
                    />
                  </div>
                  {isAdmin && (
                    <div className={`${authPosition.colFlex} gap-1`}>
                      <label htmlFor="admin-pin" className={`font-bold`}>
                        Admin Passport:
                      </label>
                      <TextField.Input
                        placeholder="Enter admin passport here"
                        name="admin-pin"
                        autoSave="true"
                        type="password"
                        value={adminPassport}
                        className={`${authPosition.placeholderColor}`}
                        onChange={(event) => {
                          handleAdminPassportChange(event);
                        }}
                      />
                    </div>
                  )}
                  <Callout.Root>
                    <Callout.Icon>
                      <InfoCircledIcon />
                    </Callout.Icon>
                    <Callout.Text>Pin must be 4-digits long</Callout.Text>
                  </Callout.Root>
                </Card>
                {/*Buttons to login, reset pin and ask for change of details*/}
                <div className={`${authPosition.flexPosition}`}>
                  <Button
                    variant="surface"
                    role="button"
                    aria-label="Login"
                    type="submit"
                    className={`${authPosition.btnBg}`}
                  >
                    Login
                  </Button>
                  <div
                    className={`${authPosition.rawFlex} justify-center items-center align-middle gap-2`}
                  >
                    <Button
                      variant="surface"
                      role="button"
                      aria-label="Forgot-pin"
                    >
                      <Link to="#">
                        <p className="font-bold">Forgot pin?</p>
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </Theme>
    </>
  );
};

export default Login;
