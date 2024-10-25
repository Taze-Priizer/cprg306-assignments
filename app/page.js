import Link from "next/link";
import StudentInfo from "./week-2/student-info";

export default function Home() {
  return (
    <main>
      <h1 className="text-3xl">First Assignment</h1>
      <p>Hello World</p>

      <ul>
        <li><Link href="./week-2/" className="underline text-cyan-600 hover:text-cyan-300">Week 2 Assignment</Link></li>
        <li><Link href="./week-3/" className="underline text-fuchsia-600 hover:text-fuchsia-300">Week 3 Assignment</Link></li>
        <li><Link href="./week-4/" className="underline text-emerald-600 hover:text-emerald-300">Week 4 Assignment</Link></li>
        <li><Link href="./week-5/" className="underline text-zinc-600 hover:text-zinc-600">Week 5 Assignment</Link></li>
      </ul>
    </main>
  );
}
