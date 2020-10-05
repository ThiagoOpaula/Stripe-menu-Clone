type Props = {
  name: string;
  content: () => void;
}

export function DropdownOption({name, content}: Props) {
  return (
    <button className="dropdown-option">{name}</button>
  );
}