interface Props {
  Text: string;
}

export function Label({ Text }: Props) {
  return <label>{Text}</label>;
}
