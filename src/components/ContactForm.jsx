import React, { useState } from "react"
import Button from "../components/Button"

export default function ContactForm() {
  const [Form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  })
  const handleChange = e => {
    setForm({ ...Form, [e.target.name]: e.target.value })
  }
  const handleSubmit = e => {
    e.preventDefault()
    console.log(Form)
    setForm({
      firstname: "",
      lastname: "",
      email: "",
      message: "",
    })
  }
  return (
    <div className="bg-gray-100 py-12 lg:py-16">
      <div className="flex flex-col flex-wrap sm:flex-row ">
        <div className="w-1/2 p-6">
          <div className="m-4">
            <p className="text-4xl">Email</p>
            <p className="text-lg">xxxxx@memeoratours.com</p>
          </div>
          <div className="m-4">
            <p className="text-4xl">Phone</p>
            <p className="text-lg">+97 1566496489</p>
          </div>
          <div className="m-4">
            <p className="text-4xl">Address</p>
            <p className="text-lg">
              Abdullah bldg. E15 c1.Hamdan and salam corner bldg,
            </p>
            <p className="text-lg ">
              Include beside Al masraf head office building,
            </p>
            <p className="text-lg ">Abu Dhabi</p>
          </div>
        </div>
        <div className="w-1/2 p-6">
          <h1 className="text-4xl mb-3">Contact Us</h1>
          <form className="w-full max-w-lg" onSubmit={handleSubmit}>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-first-name"
                >
                  First Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="First Name"
                  required={true}
                  onChange={handleChange}
                  name="firstname"
                  value={Form.firstname}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-last-name"
                >
                  Last Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Last Name"
                  onChange={handleChange}
                  name="lastname"
                  value={Form.lastname}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-email"
                >
                  Email
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-email"
                  type="email"
                  placeholder="Email"
                  required={true}
                  onChange={handleChange}
                  name="email"
                  value={Form.email}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-message"
                >
                  Message
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-message"
                  type="text"
                  onChange={handleChange}
                  placeholder="Message For Us"
                  name="message"
                  value={Form.message}
                />
              </div>
            </div>
            <Button type="submit">submit</Button>
          </form>
        </div>
      </div>
    </div>
  )
}
