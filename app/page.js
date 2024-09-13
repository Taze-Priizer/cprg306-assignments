import Link from "next/link";
import StudentInfo from "./week-2/student-info";

export default function Home() {
  return (
    <main>
      <h1 className="text-3xl">First Assignment</h1>
      <p>Hello World</p>
      <StudentInfo />
      <ul>
        <Link href="./week-2" className="underline text-cyan-600 hover:text-cyan-300">My GitHub</Link>
      </ul>
    </main>
  );
}
