import React, { useState } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "../common/Modal";
import axios from "axios";
import { useUserContext } from "@/context/UserContext";

const LoginModal = ({ close }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [reqErrorMessage, setReqErrorMessage] = useState(undefined);

  const { setUser } = useUserContext();

  const handleFormDataChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/user/login", formData);
      setUser(res.data.user);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      setTimeout(() => {
        close();
      }, 500);
    } catch (error) {
      setReqErrorMessage(error.response.data.message);
    }
  };

  return (
    <Modal>
      <ModalHeader>Login</ModalHeader>
      <ModalBody>
        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleFormDataChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@company.com"
              required=""
            />
          </div>
          <div>
            <label
              for="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleFormDataChange}
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required=""
            />
          </div>
          {reqErrorMessage && <div>{reqErrorMessage}</div>}
          <button
            type="submit"
            className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Sign in
          </button>
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Don’t have an account yet?{" "}
            <a
              href="#"
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Sign up
            </a>
          </p>
        </form>
      </ModalBody>
      <ModalFooter>
        <button onClick={close}>x</button>
      </ModalFooter>
    </Modal>
  );
};

export default LoginModal;
