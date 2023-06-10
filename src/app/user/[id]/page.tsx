type Props = {
  params: { id: number };
};

export default async function User({ params: { id } }: Props) {
  return <div>User {id}</div>;
}
