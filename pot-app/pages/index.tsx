import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="bg-green-600">
      <Link href="usuarios/archivo">
        <p className="cursor-pointer">Hello Brian</p>
      </Link>
    </div>
  );
};

export default Home;
