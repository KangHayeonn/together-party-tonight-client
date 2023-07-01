type Props = {
  params: { id: number };
};

export default async function WriteClub({ params: { id } }: Props) {
  return <div>Write Club {id}</div>;
}
