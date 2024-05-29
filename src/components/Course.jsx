import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import list from "../../public/list.json";
import Cards from "./Cards";
const Course = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We are delighted to have you{" "}
            <span className="text-pink-500">Hear !:)</span>
          </h1>
          <p className="mt-12 ">
            Explore plenty of book collection in this libraray web page and get
            acess to exceptinal knowledgeble source and hear you can find any
            kind of books and any diffrent categorys what not ad you can also
            access aour free books for time and explore many more and with lest
            cost facilietes
          </p>
          <Link to="/">
            <button className="m-3 btn btn-secondary">Back</button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {list.map((book) => (
            <Cards item={book} key={book.id} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Course;
