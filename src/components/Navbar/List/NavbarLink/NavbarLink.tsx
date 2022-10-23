
interface ILink {
  text: string;
}

export default function NavbarLink({ text }: ILink) {
  return (
    <a
      className="text-gray-500 underline-offset-4 hover:text-primary hover:underline"
      href={`../#${text.toLowerCase()}`}
    >
      {text}
    </a>
  );
}
