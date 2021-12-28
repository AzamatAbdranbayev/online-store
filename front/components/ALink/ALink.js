import Link from 'next/link';

const ALink = ({ text, href, color }) => {
  return (
    <Link href={href}>
      <a style={{ color: color }}>{text}</a>
    </Link>
  );
};

export default ALink;
