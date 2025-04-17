import Image from "next/image";
import styles from "./page.module.css";
import { DummyCard } from "@/components/views/DummyCard";

export default function Home() {
  return (
    <div className={styles.page}>
      demo-app
      <DummyCard/>
    </div>
  );
}
