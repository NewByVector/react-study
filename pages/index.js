import Link from 'next/link';
import dynamic from 'next/dynamic';

const DynamicHello = dynamic(import('../components/hello'));

export default () => (
  <div>
    <h1>Next.js</h1>
    <DynamicHello />
    <Link href="/about"><a>about</a></Link>
  </div>
);